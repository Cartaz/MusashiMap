import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const read = relative => readFileSync(new URL(`../../${relative}`, import.meta.url), "utf8");

test("character details remain in the accessibility tree when their panel opens", () => {
  const index = read("index.html");
  assert.match(index, /<div id="character-list" class="character-grid"><\/div>/);
  assert.doesNotMatch(index, /id="character-list"[^>]*aria-hidden="true"/);
});

test("character narrative data is inserted as text rather than interpreted as HTML", () => {
  const app = read("js/app.js");
  assert.match(app, /function createCharacterCard\(/);
  assert.match(app, /heading\.textContent = getDisplayCharacterName\(/);
  assert.match(app, /locationName\.textContent = presentation\.label/);
  assert.match(app, /activity\.textContent = state\.activity/);
  assert.match(app, /metadata\.textContent =/);
  assert.doesNotMatch(app, /\.innerHTML\s*=/);
});

test("reader controls are only active after reader initialization", () => {
  const app = read("js/app.js");
  assert.match(app, /if \(reader\) \{\s*chapterInput\.addEventListener\(/);
  assert.match(app, /control\.disabled = true/);
});

test("pull requests run validation but cannot deploy GitHub Pages", () => {
  const workflow = read(".github/workflows/pages.yml");
  assert.match(workflow, /^  pull_request:\s*$/m);
  assert.match(workflow, /^  validate:\s*$/m);
  assert.match(workflow, /^  deploy:\s*\n    if: github\.event_name != 'pull_request'\s*\n    needs: validate/m);
});
