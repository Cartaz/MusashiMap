#!/usr/bin/env node
// Regenerates data/source-manifest.json from the local, git-ignored corpus.
// Run after adding or correcting a chapter file; --check verifies it is current.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { MANIFEST_PATH, readLocalCorpus } from "./lib/source-corpus.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const files = readLocalCorpus(root);
if (!Object.keys(files).length) {
  console.error("No local corpus under data/source/; the manifest can only be generated from the full text.");
  process.exit(1);
}
const content = `${JSON.stringify({
  description: "Fingerprint of the private chapter corpus. The text itself is not published; validators use this file when data/source/ is absent.",
  files
}, null, 2)}\n`;
const target = path.join(root, MANIFEST_PATH);
if (process.argv.includes("--check")) {
  if (!fs.existsSync(target) || fs.readFileSync(target, "utf8") !== content) {
    console.error(`${MANIFEST_PATH} is stale; run node tools/generate-source-manifest.mjs.`);
    process.exit(1);
  }
  console.log(`${MANIFEST_PATH} matches the local corpus (${Object.keys(files).length} files).`);
} else {
  fs.writeFileSync(target, content);
  console.log(`Wrote ${MANIFEST_PATH} (${Object.keys(files).length} files).`);
}
