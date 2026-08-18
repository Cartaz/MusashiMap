# Book II — Production Migration Gate

Status: **NOT CLEARED**

The staging layers for chapter IDs, character reconciliation, character states, and geography are coherent. The production JSON migration is intentionally blocked until the event/interactions ledger is complete enough to guarantee that production does not lose narrative relationships.

## Cleared

- Global chapter identity design: `b1c1`–`b1c8`, `b2c1`–`b2c11`.
- Book I/II character identity reconciliation.
- Historical-status audit with unresolved cases preserved as `unknown`.
- Physical presence vs mention semantics.
- Chapter-scoped state model.
- Book II geographic registry.
- Persistent-place semantics through Book VII.
- Frontend compatibility strategy for legacy `section` fields.

## Blocking item

### Complete Book II event/interaction ledger

The current staging character-state document records who is physically present and where, but it is not yet a machine-complete event ledger equivalent to `data/events.json`. Production migration must not infer interactions from shared chapter membership.

Before writing production data, each Book II chapter must have explicit event records for every map-relevant interaction/movement that the narrative supports, with:

- stable event ID;
- qualified chapter ID;
- canonical character IDs;
- canonical location ID where applicable;
- event type;
- movement origin/destination where applicable;
- direct vs reported relationship semantics;
- certainty;
- source chapter reference.

The event ledger must be exhaustive enough that moving `characters.json` and `character-states.json` into production cannot silently omit an interaction currently visible in the research staging.

## Why production JSON is still untouched

Writing the roster/states/locations now would create a partially migrated corpus: Book II characters could appear without the complete event graph, and the frontend could expose states that have no corresponding production event records. That is worse than leaving the gate closed.

No coordinates or character identities are to be invented to fill this gap.

## Next execution step

1. Build the complete Book II event/interaction ledger from the canonical chapter files.
2. Cross-check every event participant against the reconciled character registry.
3. Cross-check every event location against the geographic registry.
4. Run continuity and reference validation.
5. Generate a complete migration diff for all affected production JSON files.
6. Only then perform the atomic production migration.
7. Run JSON validation, frontend validation, runtime inspection, and deployment.
