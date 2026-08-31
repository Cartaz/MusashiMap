import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import { popups } from "../../js/popups.js";

const index = readFileSync(new URL("../../index.html", import.meta.url), "utf8");
const mapRuntime = readFileSync(new URL("../../js/map-runtime.js", import.meta.url), "utf8");

test("project runtime dependencies use modules instead of project-owned window globals", () => {
  assert.doesNotMatch(index, /<script\s+src="js\/popups\.js"/);
  assert.match(index, /<script type="module" src="js\/panel-toggle\.js"><\/script>/);
  assert.match(mapRuntime, /import \{ popups \} from "\.\/popups\.js";/);
  assert.doesNotMatch(mapRuntime, /MusashiMapPopups/);
});

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
