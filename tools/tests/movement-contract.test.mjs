import assert from "node:assert/strict";
import test from "node:test";

import { getMovementRouteMode, validateMovementEvent } from "../../js/movement-contract.js";

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
