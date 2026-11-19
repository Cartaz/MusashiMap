import assert from "node:assert/strict";
import test from "node:test";

import { popups } from "../../js/popups.js";

test("popup module escapes reader-facing HTML", () => {
  const popup = popups.character({
    name: "<Musashi>",
    location: "A & B",
    description: "quoted \"text\""
  });
  assert.match(popup.content, /&lt;Musashi&gt;/);
  assert.match(popup.content, /A &amp; B/);
  assert.match(popup.content, /&quot;text&quot;/);
});
