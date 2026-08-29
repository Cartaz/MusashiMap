import assert from "node:assert/strict";
import test from "node:test";

import {
  getLocationStatusMode,
  getPositionReference,
  isNonPhysicalLocationStatus,
  validatePositionState
} from "../../js/position-contract.js";
import { resolveCharacterPosition } from "../../js/reader-progress.js";

const lastKnownStatuses = [
  "unknown",
  "departed_with_group",
  "departed_eastward",
  "departed_westward"
];

test("position contract owns every canonical location_status", () => {
  assert.equal(getLocationStatusMode(undefined), "current");
  assert.equal(getLocationStatusMode("reported_position"), "reported");
  for (const status of lastKnownStatuses) {
    assert.equal(getLocationStatusMode(status), "last_known");
    assert.equal(isNonPhysicalLocationStatus(status), true);
  }
  assert.equal(isNonPhysicalLocationStatus("reported_position"), true);
  assert.equal(getLocationStatusMode("legacy_status"), "invalid");
});

test("position references preserve physical, reported and last-known semantics", () => {
  assert.deepEqual(getPositionReference({ location: "current" }), { mode: "current", locationId: "current" });
  assert.deepEqual(
    getPositionReference({ location_status: "reported_position", last_known_location: "reported" }),
    { mode: "reported", locationId: "reported" }
  );
  for (const status of lastKnownStatuses) {
    assert.deepEqual(
      getPositionReference({ location_status: status, last_known_location: "known" }),
      { mode: "last_known", locationId: "known" }
    );
  }
  assert.deepEqual(getPositionReference({ location_status: "legacy_status", location: "current" }), { mode: "unmapped", locationId: null });
});

test("position validation rejects invalid or falsely physical non-physical states", () => {
  assert.deepEqual(validatePositionState({ location_status: "legacy_status" }), ["invalid_location_status"]);
  for (const status of ["reported_position", ...lastKnownStatuses]) {
    assert.ok(validatePositionState({ location_status: status, location: "place" }).includes("non_physical_location"));
  }
  assert.deepEqual(
    validatePositionState({ location_status: "reported_position" }),
    ["reported_location_required"]
  );
});

test("reader position resolution delegates status semantics to the shared contract", () => {
  const locations = new Map([
    ["current", { id: "current", coordinates: [1, 2] }],
    ["known", { id: "known", coordinates: [3, 4] }],
    ["reported", { id: "reported", coordinates: null }]
  ]);

  assert.equal(resolveCharacterPosition({ location: "current" }, locations).mode, "current");
  assert.equal(resolveCharacterPosition({ location_status: "departed_eastward", last_known_location: "known" }, locations).mode, "last_known");
  const reported = resolveCharacterPosition({ location_status: "reported_position", last_known_location: "reported" }, locations);
  assert.equal(reported.mode, "reported");
  assert.equal(reported.location, null);
  assert.equal(reported.referencedLocation.id, "reported");
  assert.equal(resolveCharacterPosition({ location_status: "legacy_status", location: "current" }, locations).mode, "unmapped");
});
