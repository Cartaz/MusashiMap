import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");

test("character importance is the single main-cast classification", () => {
  const charactersDocument = JSON.parse(fs.readFileSync(path.join(root, "data/characters.json"), "utf8"));
  assert.equal(Object.hasOwn(charactersDocument, "main_cast"), false);

  const importanceValues = [...new Set((charactersDocument.characters ?? []).map(character => character.importance))].sort();
  assert.deepEqual(importanceValues, ["main", "secondary"]);
});
