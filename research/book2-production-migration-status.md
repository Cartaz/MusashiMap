# Book II — Production Migration Status

Date: 2026-08-18

## Production changes completed

### `data/locations.json`

Integrated the normalized Book II geographic registry.

- version bumped from 9 to 10;
- Book II locations use canonical IDs from section 9 onward;
- A anchors receive defensible modern coordinates;
- B locations receive only generalized/representative coordinates where a real geographic anchor exists;
- C/D narrative locations remain coordinate-null;
- routes remain route entities;
- child narrative sites do not inherit parent coordinates as if they were exact positions.

### `data/characters.json`

Integrated the reconciled Book II character roster.

- version bumped from 9 to 10;
- aliases normalized;
- historical status follows the completed historical audit;
- Kocha is a distinct character ID;
- Sekishūsai/Muneyoshi/Munetoshi is one identity;
- In'ei/Inshun are distinct identities;
- reported-only figures are not given physical `present_in` entries;
- Book II physical presence uses section numbers 9–19.

## Corrections made during migration

The first character write was immediately cross-checked against the event ledger and corrected before continuing:

- Inshun: physical presence only in b2c7 / section 15, not b2c6;
- Sekishūsai: physical presence in b2c9 / section 17 and b2c11 / section 19;
- Shōda Kizaemon: physical presence in b2c5 / section 13 and b2c9 / section 17;
- Kocha: physical presence in b2c8 / section 16 and b2c9 / section 17;
- Kimura Sukekurō, Debuchi Magobei and Murata Yozō remain contextual until a direct physical scene is explicitly represented in the event ledger.

This correction is intentional: no character receives a physical chapter marker merely because the name occurs in an exposition or reported conversation.

## Remaining production blocker

`data/events.json` has **not** yet been modified.

The existing file is a monolithic Book I JSON document, and the Book II ledger is still staging. A safe migration requires the complete existing event file to be preserved byte-for-byte semantically while appending only canonicalized Book II events. The connector exposes the existing JSON as a single replacement document rather than an append/patch operation, so the migration must first produce a complete machine-readable event diff and validate every participant/location reference.

The Book II staging ledger currently contains the canonical event set for `b2c1–b2c11`, but a final production write must additionally verify:

1. every event character ID exists in `data/characters.json`;
2. every event location exists in `data/locations.json`;
3. every reported-only character remains outside physical state;
4. every event has a qualified `b2cN` chapter ID;
5. movement status is explicit where applicable;
6. no event duplicates an existing Book I event;
7. Book I events remain semantically unchanged;
8. event IDs are unique across Books I–II.

## Current gate

```text
locations.json             PASS
characters.json            PASS
Book I continuity          PASS
Book II event staging      PASS
Event production diff      BLOCKED
Events JSON production     NOT TOUCHED
Pre-production validator   BLOCKED
Pages deployment           NOT YET THE FINAL GATE
```

## Rule

Do not bypass this blocker by creating a parallel production event file or by replacing `events.json` with an incomplete reconstruction. The canonical production dataset must remain one coherent event registry.
