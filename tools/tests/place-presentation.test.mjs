import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

import { getPlaceLegendEntries, getPlacePresentation, isApproximateLocation } from "../../js/place-presentation.js";

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

test("approximate coordinate precision has a shared visible marker state", () => {
  assert.equal(isApproximateLocation({ coordinate_precision: "approximate_area" }), true);
  for (const precision of ["exact", "modern_match", "modern_literary_reference", "representative_point", "area", undefined]) {
    assert.equal(isApproximateLocation({ coordinate_precision: precision }), false, String(precision));
  }

  const markerCss = fs.readFileSync(path.join(root, "css/marker-overrides.css"), "utf8");
  assert.match(markerCss, /\.musashi-map-marker\.is-approximate\s*\{/);
  assert.match(markerCss, /\.musashi-character-marker\.is-approximate\s*\{/);
});
