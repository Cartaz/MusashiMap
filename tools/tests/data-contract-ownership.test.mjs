import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");

test("production data has one executable contract instead of a parallel pseudo-schema", () => {
  assert.equal(fs.existsSync(path.join(root, "data/schema.json")), false);

  const validator = fs.readFileSync(path.join(root, "tools/validate-data.mjs"), "utf8");
  assert.doesNotMatch(validator, /data\/schema\.json|schema\?\.entities|integrity_rules/);

  const readme = fs.readFileSync(path.join(root, "README.md"), "utf8");
  assert.match(readme, /validate-data\.mjs` is the executable contract for production data structure and cross-file invariants/);
});
