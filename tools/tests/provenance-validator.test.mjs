import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
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
  const result = run(["--normalize"]);
  assert.equal(result.status, 2);
  assert.match(result.stderr, /Unknown arguments: --normalize/);
});

test("CI runs the provenance validator", () => {
  assert.match(read(".github/workflows/pages.yml"), /node tools\/validate-research-manifests\.mjs/);
});

test("validator accepts both --root forms", () => {
  for (const args of [["--root", root], [`--root=${root}`]]) {
    const result = run(args);
    assert.equal(result.status, 0, result.stderr);
  }
  assert.equal(run(["--root"]).status, 2);
});
