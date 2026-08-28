const MOVEMENT_STATUSES = new Set([
  "arrival_confirmed",
  "confirmed_route",
  "intended_destination",
  "direction_only",
  "uncertain_route"
]);

const isNonEmptyString = value => typeof value === "string" && value.length > 0;

export function validateMovementEvent(event) {
  const violations = [];
  const hasRouteData = Boolean(event?.origin || event?.destination || event?.via?.length);
  const hasRouteEvidence = hasRouteData
    || isNonEmptyString(event?.origin_label)
    || isNonEmptyString(event?.destination_label);

  if (hasRouteData && !MOVEMENT_STATUSES.has(event?.movement_status)) {
    violations.push("movement_status_required");
  }
  if (hasRouteData && !(event?.characters?.length)) {
    violations.push("physical_participant_required");
  }
  const arrivalTarget = event?.destination ?? event?.location;
  if (event?.movement_status === "arrival_confirmed" && (!arrivalTarget || arrivalTarget === "unknown")) {
    violations.push("arrival_target_required");
  }
  if (["intended_destination", "direction_only"].includes(event?.movement_status)
    && !event?.destination && !isNonEmptyString(event?.destination_label)) {
    violations.push("destination_evidence_required");
  }
  if (["confirmed_route", "uncertain_route"].includes(event?.movement_status) && !hasRouteEvidence) {
    violations.push("route_evidence_required");
  }

  return violations;
}
