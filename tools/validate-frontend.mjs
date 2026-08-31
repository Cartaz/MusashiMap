import { readdir, readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

const rootArgument = process.argv.indexOf("--root");
if (rootArgument !== -1 && !process.argv[rootArgument + 1]) {
  console.error("--root needs a directory");
  process.exit(2);
}
const root = rootArgument === -1 ? process.cwd() : path.resolve(process.argv[rootArgument + 1]);
const errors = [];
const warnings = [];

const walk = async directory => {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.name === ".git" || entry.name === "node_modules" || entry.name === "_site") continue;
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(full));
    else files.push(full);
  }
  return files;
};

const files = await walk(root);
const jsFiles = files.filter(file => file.endsWith(".js") || file.endsWith(".mjs"));
const browserJsFiles = jsFiles.filter(file =>
  file.endsWith(".js") && path.relative(root, file).split(path.sep)[0] === "js"
);
const jsonFiles = files.filter(file => file.endsWith(".json"));
const cssFiles = files.filter(file => file.endsWith(".css"));
const sourceFiles = files.filter(file => /\.(?:html|js|mjs|json)$/.test(file) && !file.includes(`${path.sep}tools${path.sep}tests${path.sep}`));

for (const file of jsFiles) {
  const result = spawnSync(process.execPath, ["--check", file], { encoding: "utf8" });
  if (result.status !== 0) {
    errors.push(`JavaScript syntax error: ${path.relative(root, file)}\n${result.stderr.trim()}`);
  }
}

for (const file of jsonFiles) {
  try {
    JSON.parse(await readFile(file, "utf8"));
  } catch (error) {
    errors.push(`Invalid JSON: ${path.relative(root, file)} — ${error.message}`);
  }
}

const checkBalancedCss = content => {
  let depth = 0;
  let quote = null;
  let escaped = false;
  let comment = false;

  for (let i = 0; i < content.length; i += 1) {
    const char = content[i];
    const next = content[i + 1];

    if (comment) {
      if (char === "*" && next === "/") {
        comment = false;
        i += 1;
      }
      continue;
    }
    if (!quote && char === "/" && next === "*") {
      comment = true;
      i += 1;
      continue;
    }
    if (quote) {
      if (escaped) escaped = false;
      else if (char === "\\") escaped = true;
      else if (char === quote) quote = null;
      continue;
    }
    if (char === '"' || char === "'") quote = char;
    else if (char === "{") depth += 1;
    else if (char === "}") depth -= 1;
    if (depth < 0) throw new Error("unmatched closing brace");
  }

  if (comment) throw new Error("unterminated comment");
  if (quote) throw new Error("unterminated string");
  if (depth !== 0) throw new Error(`unbalanced braces (depth ${depth})`);
};

for (const file of cssFiles) {
  try {
    checkBalancedCss(await readFile(file, "utf8"));
  } catch (error) {
    errors.push(`CSS syntax structure error: ${path.relative(root, file)} — ${error.message}`);
  }
}

const indexPath = path.join(root, "index.html");
const index = await readFile(indexPath, "utf8");
const localReferences = [...index.matchAll(/(?:src|href)=["']([^"']+)["']/g)]
  .map(match => match[1])
  .filter(value => !/^(?:[a-z]+:|#|\/\/)/i.test(value));

for (const reference of localReferences) {
  const clean = reference.split("?")[0].split("#")[0];
  if (!clean || clean.endsWith("/")) continue;
  const target = path.resolve(root, clean);
  if (!target.startsWith(`${root}${path.sep}`) && target !== root) {
    errors.push(`Unsafe local reference in index.html: ${reference}`);
    continue;
  }
  if (!existsSync(target)) errors.push(`Missing local reference in index.html: ${reference}`);
}

for (const file of browserJsFiles) {
  const content = await readFile(file, "utf8");
  for (const match of content.matchAll(/(?:from\s+|import\s*(?:\(\s*)?)["'](\.[^"']+)["']/g)) {
    const cleanImport = match[1].split("?")[0].split("#")[0];
    const target = path.resolve(path.dirname(file), cleanImport);
    const relativeFile = path.relative(root, file);
    if (!target.startsWith(`${root}${path.sep}`) && target !== root) {
      errors.push(`Unsafe local JS import: ${relativeFile} → ${match[1]}`);
      continue;
    }
    if (!existsSync(target)) errors.push(`Missing local JS import: ${relativeFile} → ${match[1]}`);
  }
}

// Static CSS audit. This intentionally reports candidates instead of failing CI:
// runtime-generated classes and selectors such as :has() cannot be proven unused
// with a static scan alone.
const cssClassDefinitions = new Map();
const cssClassReferences = new Map();
const addRef = (map, name, file) => {
  if (!map.has(name)) map.set(name, new Set());
  map.get(name).add(path.relative(root, file));
};

const normalizeSelector = selector => selector
  .replace(/\/\*[\s\S]*?\*\//g, "")
  .replace(/\s+/g, " ")
  .trim();

// Extract class-bearing selectors without treating declaration text as selectors.
// At-rule nesting is tracked only to distinguish actual rules from declarations.
const extractSelectors = content => {
  const clean = content.replace(/\/\*[\s\S]*?\*\//g, "");
  const selectors = [];
  const stack = [];
  let boundary = 0;
  let quote = null;
  let escaped = false;
  for (let index = 0; index < clean.length; index += 1) {
    const char = clean[index];
    if (quote) {
      if (escaped) escaped = false;
      else if (char === "\\") escaped = true;
      else if (char === quote) quote = null;
      continue;
    }
    if (char === '"' || char === "'") {
      quote = char;
      continue;
    }
    if (char === ";" && stack.at(-1)?.kind === "at-rule") boundary = index + 1;
    if (char === "{") {
      const header = normalizeSelector(clean.slice(boundary, index));
      const parentAllowsRule = !stack.length || stack.at(-1).kind === "at-rule";
      if (header.startsWith("@")) {
        stack.push({ kind: "at-rule" });
      } else {
        if (header && parentAllowsRule) {
          selectors.push(...header.split(",").map(normalizeSelector).filter(Boolean));
        }
        stack.push({ kind: "rule" });
      }
      boundary = index + 1;
    } else if (char === "}") {
      stack.pop();
      boundary = index + 1;
    }
  }
  return selectors;
};

for (const file of cssFiles) {
  const content = await readFile(file, "utf8");
  for (const selector of extractSelectors(content)) {
    for (const match of selector.matchAll(/\.([A-Za-z_][\w-]*)/g)) addRef(cssClassDefinitions, match[1], file);
  }
}

for (const file of sourceFiles) {
  const content = await readFile(file, "utf8");
  for (const match of content.matchAll(/class(?:Name)?\s*[:=]\s*["'`]([^"'`]*?)["'`]/g)) {
    for (const name of match[1].split(/\s+/).filter(name => /^[A-Za-z_][\w-]*$/.test(name))) addRef(cssClassReferences, name, file);
  }
  for (const match of content.matchAll(/classList\.(?:add|remove|toggle)\(([^)]*)\)/g)) {
    for (const name of match[1].matchAll(/["'`]([A-Za-z_][\w-]*)["'`]/g)) addRef(cssClassReferences, name[1], file);
  }
}

const knownDynamicClasses = new Set([
  "is-collapsed", "is-approximate", "is-last-known", "is-reported",
  "active", "open", "hidden",
  // Leaflet owns these classes; popup class names are passed through its API.
  "leaflet-bottom", "leaflet-container", "leaflet-control-attribution",
  "leaflet-control-zoom", "leaflet-marker-icon", "leaflet-popup-content",
  "leaflet-popup-content-wrapper", "leaflet-popup-tip",
  "musashi-character-popup", "musashi-movement-popup", "musashi-place-popup", "musashi-popup"
]);

const unusedCandidates = [];
for (const [name, filesForDefinition] of cssClassDefinitions) {
  if (!cssClassReferences.has(name) && !knownDynamicClasses.has(name)) {
    unusedCandidates.push(`${name} [${[...filesForDefinition].join(", ")}]`);
  }
}
if (unusedCandidates.length) {
  warnings.push(`CSS selectors with no static class reference (${unusedCandidates.length}):\n  ${unusedCandidates.sort().join("\n  ")}`);
}

const referencedWithoutDefinition = [];
for (const [name, filesForReference] of cssClassReferences) {
  if (!cssClassDefinitions.has(name)) {
    referencedWithoutDefinition.push(`${name} [${[...filesForReference].join(", ")}]`);
  }
}
if (referencedWithoutDefinition.length) {
  warnings.push(`Classes referenced in source but not defined in CSS (${referencedWithoutDefinition.length}):\n  ${referencedWithoutDefinition.sort().join("\n  ")}`);
}

if (warnings.length) console.warn(`Frontend validation warnings:\n\n${warnings.join("\n\n")}`);
if (errors.length) {
  console.error(errors.join("\n\n"));
  process.exit(1);
}

console.log(`Frontend validation passed: ${jsFiles.length} JS/MJS, ${jsonFiles.length} JSON, ${cssFiles.length} CSS files checked.`);
