const LOCATION_STATUS_MODES = new Map([
  ["reported_position", "reported"],
  ["unknown", "last_known"],
  ["departed_with_group", "last_known"],
  ["departed_eastward", "last_known"],
  ["departed_westward", "last_known"]
]);

export function getLocationStatusMode(status) {
  if (status == null) return "current";
  return LOCATION_STATUS_MODES.get(status) ?? "invalid";
}

export function isNonPhysicalLocationStatus(status) {
  const mode = getLocationStatusMode(status);
  return mode === "reported" || mode === "last_known";
}

export function getPositionReference(state) {
  const mode = getLocationStatusMode(state?.location_status);
  if (mode === "reported") {
    return { mode, locationId: state?.location ?? state?.last_known_location ?? null };
  }
  if (mode === "last_known") {
    return { mode, locationId: state?.last_known_location ?? null };
  }
  if (mode === "current") {
    return { mode, locationId: state?.location ?? null };
  }
  return { mode: "unmapped", locationId: null };
}

export function validatePositionState(state) {
  const violations = [];
  const mode = getLocationStatusMode(state?.location_status);

  if (mode === "invalid") violations.push("invalid_location_status");
  if (isNonPhysicalLocationStatus(state?.location_status) && state?.location != null) {
    violations.push("non_physical_location");
  }
  if (state?.location_status === "reported_position" && !state?.location && !state?.last_known_location) {
    violations.push("reported_location_required");
  }
  return violations;
}
