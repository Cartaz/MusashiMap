import assert from "node:assert/strict";
import test from "node:test";

import { mergeNewlyVisibleSelection } from "../../js/character-selection.js";

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
