import assert from "node:assert/strict";
import test from "node:test";

import { mergeNewlyVisibleSelection, updateCharacterSelection } from "../../js/character-selection.js";

test("newly introduced characters are selected without overriding existing choices", () => {
  assert.deepEqual(
    mergeNewlyVisibleSelection(["musashi"], ["musashi", "otsu"], []),
    ["otsu"]
  );
  assert.deepEqual(
    mergeNewlyVisibleSelection(["musashi", "otsu"], ["musashi", "otsu"], ["musashi"]),
    ["musashi"]
  );
});

test("changing an earlier character preserves choices for later chapters", () => {
  const selected = ["musashi", "otsu", "ogin"];
  assert.deepEqual(updateCharacterSelection(selected, ["musashi"], false), ["otsu", "ogin"]);
  assert.deepEqual(updateCharacterSelection(selected, ["matahachi"], true), [...selected, "matahachi"]);
  assert.deepEqual(selected, ["musashi", "otsu", "ogin"]);
});

test("bulk actions affect only visible characters and remain idempotent", () => {
  const visible = ["musashi", "matahachi"];
  const none = updateCharacterSelection(["musashi", "ogin"], visible, false);
  assert.deepEqual(none, ["ogin"]);
  assert.deepEqual(updateCharacterSelection(none, visible, false), none);
  const all = updateCharacterSelection(none, visible, true);
  assert.deepEqual(all, ["ogin", ...visible]);
  assert.deepEqual(updateCharacterSelection(all, visible, true), all);
});
