import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { spawnSync } from "node:child_process";
import test from "node:test";

const root = resolve(new URL("../..", import.meta.url).pathname);
const validator = resolve(root, "tools/validate-research-manifests.mjs");
const manifests = [3, 4, 5, 6, 7].map(book => resolve(root, `research/book${book}-production-manifest.json`));
const hash = file => createHash("sha256").update(readFileSync(file)).digest("hex");
const run = args => spawnSync(process.execPath, [validator, ...args], { cwd: root, encoding: "utf8" });

const read = relative => readFileSync(resolve(root, relative), "utf8");

test("research provenance validation is read-only and covers all retained books", () => {
  const before = manifests.map(hash);
  const result = run([]);
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /Research manifest validation passed: 5 canonical provenance manifests, Books 3, 4, 5, 6, 7\./);
  assert.deepEqual(manifests.map(hash), before);
});

test("legacy manifest normalization path is retired", () => {
  assert.equal(existsSync(resolve(root, "tools/validate-staging.mjs")), false);
  const source = read("tools/validate-research-manifests.mjs");
  for (const legacyToken of ["--normalize", "normalizeManifest", "normalizeMovementStatus", "writeFile", "legacy_movement_status"]) {
    assert.equal(source.includes(legacyToken), false, `unexpected legacy token: ${legacyToken}`);
  }

  const result = run(["--normalize"]);
  assert.equal(result.status, 2);
  assert.match(result.stderr, /Unknown arguments: --normalize/);
});

test("CI and documentation expose provenance validation, not a staging workflow", () => {
  const workflow = read(".github/workflows/pages.yml");
  const readme = read("README.md");
  const researchReadme = read("research/README.md");
  const contract = read("docs/book-staging-contract.md");

  assert.match(workflow, /Validate research provenance/);
  assert.match(workflow, /node tools\/validate-research-manifests\.mjs/);
  assert.doesNotMatch(workflow, /Validate staged books|validate-staging\.mjs/);
  assert.doesNotMatch(readme, /validate-staging\.mjs/);
  assert.doesNotMatch(researchReadme, /validate-staging\.mjs/);
  assert.doesNotMatch(contract, /validate-staging\.mjs|--normalize/);
  assert.match(contract, /filename `book-staging-contract\.md` is retained as a stable historical contract identifier/);
});
