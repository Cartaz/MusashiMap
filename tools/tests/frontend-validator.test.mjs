import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";
import test from "node:test";

const validator = fileURLToPath(new URL("../validate-frontend.mjs", import.meta.url));

const makeFixture = () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "musashimap-frontend-validator-"));
  fs.mkdirSync(path.join(root, "js"), { recursive: true });
  fs.writeFileSync(
    path.join(root, "index.html"),
    '<!doctype html><script type="module" src="js/app.js"></script>\n'
  );
  return root;
};

const runValidator = root => spawnSync(
  process.execPath,
  [validator, "--root", root],
  { encoding: "utf8" }
);

test("frontend validator rejects a missing local JS import", t => {
  const root = makeFixture();
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  fs.writeFileSync(
    path.join(root, "js/app.js"),
    'import { value } from "./missing.js";\nconsole.log(value);\n'
  );

  const result = runValidator(root);
  const output = `${result.stdout}\n${result.stderr}`;
  assert.equal(result.status, 1, output);
  assert.match(output, /Missing local JS import: js[/\\]app\.js → \.\/missing\.js/);
});

test("frontend validator accepts an existing local JS import", t => {
  const root = makeFixture();
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  fs.writeFileSync(
    path.join(root, "js/app.js"),
    'import { value } from "./dependency.js";\nconsole.log(value);\n'
  );
  fs.writeFileSync(path.join(root, "js/dependency.js"), "export const value = 1;\n");

  const result = runValidator(root);
  const output = `${result.stdout}\n${result.stderr}`;
  assert.equal(result.status, 0, output);
  assert.match(output, /Frontend validation passed/);
});
