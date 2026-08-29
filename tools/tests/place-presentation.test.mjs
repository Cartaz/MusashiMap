import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

import { getPlaceLegendEntries, getPlacePresentation } from "../../js/place-presentation.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const locations = JSON.parse(fs.readFileSync(path.join(root, "data/locations.json"), "utf8")).locations;
const mappedLocations = locations.filter(location => Array.isArray(location.coordinates) && location.coordinates.length === 2);

test("every mapped location type has an explicit presentation", () => {
  const missing = mappedLocations
    .filter(location => !getPlacePresentation(location.type))
    .map(location => `${location.id}:${location.type}`);
  assert.deepEqual(missing, []);
});

test("previous generic fallbacks use the intended presentation categories", () => {
  const expected = new Map([
    ["checkpoint", "route"],
    ["ferry", "route"],
    ["pond", "river"],
    ["temple_area", "temple"],
    ["valley", "area"],
    ["castle_context", "castle"],
    ["shrine", "temple"]
  ]);
  for (const [type, presentationId] of expected) {
    assert.equal(getPlacePresentation(type)?.id, presentationId, type);
  }
});

test("mapped place presentations reference existing icon assets", () => {
  const presentations = getPlaceLegendEntries(mappedLocations.map(location => location.type));
  for (const presentation of presentations) {
    assert.equal(fs.existsSync(path.join(root, presentation.iconPath)), true, presentation.iconPath);
  }
});

test("legend exposes each used presentation category once", () => {
  const entries = getPlaceLegendEntries(mappedLocations.map(location => location.type));
  const ids = entries.map(entry => entry.id);
  assert.equal(ids.length, new Set(ids).size);
  assert.deepEqual(ids, ["city", "village", "area", "river", "route", "temple", "castle", "literary_landmark"]);
});
