import assert from "node:assert/strict";
import test from "node:test";

import { getMovementRouteCoordinates, getMovementRouteMode, validateMovementEvent } from "../../js/movement-contract.js";

test("movement contract owns route presentation semantics", () => {
  for (const status of ["arrival_confirmed", "confirmed_route"]) {
    assert.equal(getMovementRouteMode({ movement_status: status }), "confirmed");
  }
  for (const status of ["intended_destination", "direction_only", "uncertain_route"]) {
    assert.equal(getMovementRouteMode({ movement_status: status }), "intended");
  }
  assert.equal(getMovementRouteMode({ movement_status: "invented" }), null);
  assert.equal(getMovementRouteMode({}), null);
});

test("route data and route presentation use the same status vocabulary", () => {
  const valid = {
    characters: ["traveler"],
    origin: "a",
    destination: "b",
    movement_status: "confirmed_route"
  };
  assert.deepEqual(validateMovementEvent(valid), []);
  assert.equal(getMovementRouteMode(valid), "confirmed");

  const invalid = { ...valid, movement_status: "legacy_guess" };
  assert.deepEqual(validateMovementEvent(invalid), ["movement_status_required"]);
  assert.equal(getMovementRouteMode(invalid), null);
});

test("route geometry respects every evidenced waypoint in its original order", () => {
  const locations = new Map([
    ["start", { coordinates: [1, 2] }],
    ["first", { coordinates: [3, 4] }],
    ["second", { coordinates: [5, 6] }],
    ["end", { coordinates: [7, 8] }]
  ]);
  assert.deepEqual(getMovementRouteCoordinates({ origin: "start", via: ["first", "second"], destination: "end" }, locations),
    [[1, 2], [3, 4], [5, 6], [7, 8]]);
  assert.deepEqual(getMovementRouteCoordinates({ origin: "start", destination: "end" }, locations), [[1, 2], [7, 8]]);
});

test("unknown intermediate places suppress the route instead of implying a direct journey", () => {
  const locations = new Map([
    ["start", { coordinates: [1, 2] }],
    ["unmapped", { coordinates: null }],
    ["end", { coordinates: [3, 4] }]
  ]);
  assert.equal(getMovementRouteCoordinates({ origin: "start", via: ["unmapped"], destination: "end" }, locations), null);
  assert.equal(getMovementRouteCoordinates({ origin: "start", via: ["missing"], destination: "end" }, locations), null);
  assert.equal(getMovementRouteCoordinates({ origin: "start", destination: "unknown" }, locations), null);
  assert.equal(getMovementRouteCoordinates({ origin: "start", destination: "end", via: ["start", "end", "missing"] }, locations), null);
});
