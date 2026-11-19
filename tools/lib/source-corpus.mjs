import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";

// The novel's chapter text is the project's narrative authority, but it is
// not published: data/source/ exists only in local development copies and is
// git-ignored. data/source-manifest.json records, for every corpus file, what
// the tooling needs without the text itself: hash, size, line and word
// counts, and the chapter heading. Validators read the files when they are
// present (and require them to match the manifest) and fall back to the
// manifest when they are not, as in CI.

export const CORPUS_DIRECTORY = "data/source";
export const MANIFEST_PATH = "data/source-manifest.json";

export function describeSource(buffer) {
  const text = buffer.toString("utf8");
  const lines = text.split(/\r?\n/);
  if (lines.at(-1) === "") lines.pop();
  return {
    sha256: createHash("sha256").update(buffer).digest("hex"),
    bytes: buffer.length,
    line_count: lines.length,
    newline_count: (text.match(/\n/g) ?? []).length,
    word_count: text.trim() ? text.trim().split(/\s+/).length : 0,
    title: text.split(/\r?\n/).map(line => line.trim()).find(Boolean) ?? ""
  };
}

const walk = (root, relative) => {
  const directory = path.join(root, relative);
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const child = path.posix.join(relative, entry.name);
    if (entry.isDirectory()) return walk(root, child);
    return entry.isFile() && entry.name.endsWith(".txt") ? [child] : [];
  }).sort();
};

export function readLocalCorpus(root) {
  return Object.fromEntries(walk(root, CORPUS_DIRECTORY).map(file => [file, describeSource(fs.readFileSync(path.join(root, file)))]));
}

export function openCorpus(root) {
  const manifestFile = path.join(root, MANIFEST_PATH);
  const manifest = fs.existsSync(manifestFile) ? JSON.parse(fs.readFileSync(manifestFile, "utf8")).files ?? {} : null;
  const local = readLocalCorpus(root);
  const localPresent = Object.keys(local).length > 0;
  const errors = [];
  if (!manifest && !localPresent) errors.push(`Neither ${CORPUS_DIRECTORY}/ nor ${MANIFEST_PATH} is available.`);
  if (manifest && localPresent) {
    for (const file of new Set([...Object.keys(manifest), ...Object.keys(local)])) {
      if (!manifest[file]) errors.push(`${file} is not in ${MANIFEST_PATH}; run node tools/generate-source-manifest.mjs.`);
      else if (!local[file]) errors.push(`${file} is listed in ${MANIFEST_PATH} but missing locally.`);
      else if (manifest[file].sha256 !== local[file].sha256) errors.push(`${file} differs from ${MANIFEST_PATH}; run node tools/generate-source-manifest.mjs.`);
    }
  }
  const files = localPresent ? local : manifest ?? {};
  return {
    // True when the full text is on disk; text-only checks run only then.
    hasText: localPresent,
    errors,
    has: file => Object.hasOwn(files, file),
    info: file => files[file] ?? null,
    list: directory => Object.keys(files)
      .filter(file => path.posix.dirname(file) === directory)
      .map(file => path.posix.basename(file)),
    readText: file => localPresent && files[file] ? fs.readFileSync(path.join(root, file), "utf8") : null
  };
}
