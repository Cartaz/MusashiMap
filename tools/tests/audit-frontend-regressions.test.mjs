import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const read = relative => readFileSync(new URL(`../../${relative}`, import.meta.url), "utf8");

test("pull requests run validation but cannot deploy GitHub Pages", () => {
  const workflow = read(".github/workflows/pages.yml");
  assert.match(workflow, /^  pull_request:\s*$/m);
  assert.match(workflow, /^  validate:\s*$/m);
  assert.match(workflow, /^  deploy:\s*\n    if: github\.event_name != 'pull_request'\s*\n    needs: validate/m);
});
