import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const FORBIDDEN_ORACLE_KEYS = new Set([
  "production_status",
  "production_links",
  "event_ids",
  "character_state_ids",
  "manifest_event_ids"
]);

function isObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function requireString(value, context, errors) {
  if (typeof value !== "string" || !value.trim()) errors.push(`${context} must be a non-empty string.`);
}

function findForbiddenKeys(value, context, errors) {
  if (Array.isArray(value)) {
    value.forEach((item, index) => findForbiddenKeys(item, `${context}[${index}]`, errors));
    return;
  }
  if (!isObject(value)) return;
  for (const [key, child] of Object.entries(value)) {
    if (FORBIDDEN_ORACLE_KEYS.has(key)) errors.push(`${context} uses production-derived key ${key}.`);
    findForbiddenKeys(child, `${context}.${key}`, errors);
  }
}

function firstContentLine(text) {
  return text.split(/\r?\n/).map(line => line.trim()).find(Boolean) ?? "";
}

export function validateSourceOracle(root, oraclePath) {
  const errors = [];
  const absoluteOracle = path.join(root, oraclePath);
  let oracle;
  try {
    oracle = JSON.parse(fs.readFileSync(absoluteOracle, "utf8"));
  } catch (error) {
    return [`${oraclePath} is not valid JSON: ${error.message}`];
  }

  if (!isObject(oracle)) return [`${oraclePath} root must be an object.`];
  findForbiddenKeys(oracle, oraclePath, errors);

  if (!Number.isSafeInteger(oracle.version) || oracle.version < 1) errors.push(`${oraclePath} version must be a positive integer.`);
  if (!Number.isSafeInteger(oracle.book) || oracle.book < 1) errors.push(`${oraclePath} book must be a positive integer.`);
  requireString(oracle.book_title, `${oraclePath} book_title`, errors);
  if (oracle.authority !== `data/source/book${oracle.book} only`) errors.push(`${oraclePath} authority must point only to its local book source directory.`);
  requireString(oracle.independence_rule, `${oraclePath} independence_rule`, errors);

  if (!Array.isArray(oracle.chapters) || oracle.chapters.length === 0) {
    errors.push(`${oraclePath} chapters must be a non-empty array.`);
    return errors;
  }

  const chapterIds = new Set();
  const sections = new Set();
  const factIds = new Set();

  for (const chapter of oracle.chapters) {
    if (!isObject(chapter)) {
      errors.push(`${oraclePath} contains a non-object chapter.`);
      continue;
    }
    requireString(chapter.id, `${oraclePath} chapter id`, errors);
    requireString(chapter.title, `${oraclePath} ${chapter.id} title`, errors);
    requireString(chapter.source_file, `${oraclePath} ${chapter.id} source_file`, errors);
    if (!Number.isSafeInteger(chapter.section) || chapter.section < 1) errors.push(`${oraclePath} ${chapter.id} section must be a positive integer.`);
    if (chapterIds.has(chapter.id)) errors.push(`${oraclePath} duplicates chapter ${chapter.id}.`);
    if (sections.has(chapter.section)) errors.push(`${oraclePath} duplicates section ${chapter.section}.`);
    chapterIds.add(chapter.id);
    sections.add(chapter.section);

    const expectedPrefix = `data/source/book${oracle.book}/`;
    if (typeof chapter.source_file === "string" && !chapter.source_file.startsWith(expectedPrefix)) {
      errors.push(`${oraclePath} ${chapter.id} source_file must stay inside ${expectedPrefix}.`);
    } else if (typeof chapter.source_file === "string") {
      const sourcePath = path.join(root, chapter.source_file);
      if (!fs.existsSync(sourcePath)) {
        errors.push(`${oraclePath} ${chapter.id} source file does not exist: ${chapter.source_file}.`);
      } else {
        const source = fs.readFileSync(sourcePath, "utf8");
        if (!source.trim()) errors.push(`${oraclePath} ${chapter.id} source file is empty.`);
        const heading = firstContentLine(source);
        if (heading && heading !== chapter.title) errors.push(`${oraclePath} ${chapter.id} title ${JSON.stringify(chapter.title)} disagrees with source heading ${JSON.stringify(heading)}.`);
      }
    }

    for (const field of ["physical_characters", "functional_actors", "referenced_characters", "historical_context", "physical_locations", "referenced_locations", "facts"]) {
      if (!Array.isArray(chapter[field])) errors.push(`${oraclePath} ${chapter.id} ${field} must be an array.`);
    }

    for (const fact of chapter.facts ?? []) {
      if (!isObject(fact)) {
        errors.push(`${oraclePath} ${chapter.id} has a non-object fact.`);
        continue;
      }
      requireString(fact.id, `${oraclePath} ${chapter.id} fact id`, errors);
      requireString(fact.type, `${oraclePath} ${chapter.id}/${fact.id} type`, errors);
      requireString(fact.description, `${oraclePath} ${chapter.id}/${fact.id} description`, errors);
      if (!Array.isArray(fact.participants)) errors.push(`${oraclePath} ${chapter.id}/${fact.id} participants must be an array.`);
      if (factIds.has(fact.id)) errors.push(`${oraclePath} duplicates fact ${fact.id}.`);
      factIds.add(fact.id);
    }
  }

  const sortedSections = [...sections].sort((a, b) => a - b);
  for (let index = 1; index < sortedSections.length; index += 1) {
    if (sortedSections[index] !== sortedSections[index - 1] + 1) {
      errors.push(`${oraclePath} sections are not contiguous at ${sortedSections[index - 1]} -> ${sortedSections[index]}.`);
    }
  }

  if (Array.isArray(oracle.sections) && oracle.sections.length === 2) {
    if (oracle.sections[0] !== sortedSections[0] || oracle.sections[1] !== sortedSections.at(-1)) {
      errors.push(`${oraclePath} sections range disagrees with chapter sections.`);
    }
  } else {
    errors.push(`${oraclePath} sections must be [firstSection, lastSection].`);
  }

  return errors;
}

export function validateSourceAudits(root = process.cwd()) {
  const directory = path.join(root, "research", "source-audit");
  if (!fs.existsSync(directory)) return { errors: ["research/source-audit directory is missing."], files: 0, chapters: 0, facts: 0 };

  const oracleFiles = fs.readdirSync(directory)
    .filter(name => /^book\d+-source-oracle\.json$/.test(name))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  const errors = [];
  let chapters = 0;
  let facts = 0;
  for (const name of oracleFiles) {
    const relativePath = path.posix.join("research", "source-audit", name);
    errors.push(...validateSourceOracle(root, relativePath));
    try {
      const oracle = JSON.parse(fs.readFileSync(path.join(root, relativePath), "utf8"));
      chapters += oracle.chapters?.length ?? 0;
      facts += (oracle.chapters ?? []).reduce((sum, chapter) => sum + (chapter.facts?.length ?? 0), 0);
    } catch {
      // JSON parse failures are already reported by validateSourceOracle.
    }
  }

  if (oracleFiles.length === 0) errors.push("No independent source oracle files found.");
  return { errors, files: oracleFiles.length, chapters, facts };
}

export function runCli(argv = process.argv.slice(2)) {
  const rootIndex = argv.indexOf("--root");
  const root = rootIndex === -1 ? process.cwd() : path.resolve(argv[rootIndex + 1] ?? "");
  if (rootIndex !== -1 && !argv[rootIndex + 1]) {
    console.error("--root needs a directory");
    return 2;
  }

  const result = validateSourceAudits(root);
  console.log(`Independent source audit: ${result.files} oracle file(s), ${result.chapters} chapter(s), ${result.facts} source fact(s).`);
  if (result.errors.length) {
    console.error(`Errors (${result.errors.length}):\n- ${result.errors.join("\n- ")}`);
    return 1;
  }
  console.log("Independent source audit validation passed.");
  return 0;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  process.exitCode = runCli();
}
