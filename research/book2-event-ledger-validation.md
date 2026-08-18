# Book II — Event Ledger Validation

Status: **PRE-PRODUCTION — JSON NOT MODIFIED**

## Completed

- All 11 qualified chapters represented: `b2c1`–`b2c11`.
- Spatial movements are separated from non-spatial narrative interactions.
- Reported whereabouts are explicitly prevented from becoming physical states.
- Death/termination rules are recorded for the named rōnin and Agon.
- Letters, messages, and music are represented as interactions without false co-presence.
- Child-location handling is compatible with the Book II geographic registry.
- Event IDs are unique within this staging ledger.

## Cross-check against character reconciliation

The event ledger exposes several named participants that must be added to or reconciled with the character registry before production:

- Okō — named, physically present at Yomogi in b2c1.
- Kocha — named, physically present at Yomogi/Wataya/Yagyū inn scenes.
- Sekishūsai — named, physically present in b2c9 and relevant to b2c11 as a location reached by Musashi, but not face-to-face with him.
- Yagyū-related named figures appearing in the b2c8–b2c11 staging must be reconciled individually rather than represented as a generic group when the source supplies a name.
- Any named Yoshioka disciples or government figures appearing in the chapter text must be checked against the canonical roster before production.

These are **data-reconciliation blockers**, not reasons to invent identities. A name is only added when the canonical source establishes a distinct entity.

## Historical-status gate

The following must retain their audited/uncertain status rather than being guessed:

- Nikkan
- Inshun
- Shōda Kizaemon
- Yamazoe Dampachi
- Otomo Banryū
- Yasukawa Yasubei

Historical status does not affect whether a character is physically mapped.

## Geographic gate

Every MAP event must resolve to either:

1. a production location ID;
2. a Book II registry location ID;
3. an explicitly narrative/unmapped location.

No unresolved location receives fabricated coordinates.

Known unresolved narrative locations remain:

- Wataya
- Yomogi
- Hongandō / Hongandō-area ambiguity where the research registry has not established a unique production coordinate
- other scene-level locations lacking a defensible historical coordinate

## Event semantics gate

The following are explicitly prohibited during production conversion:

- deriving an interaction solely from shared chapter membership;
- deriving an interaction solely from shared location;
- turning a letter into physical co-presence;
- turning a reported whereabouts statement into a marker;
- treating Otsū's distant flute/music as co-location with Musashi;
- treating Musashi's arrival at Sekishūsai's mountain house as a face-to-face meeting;
- giving a child location an invented independent coordinate.

## Migration-readiness

The event ledger is now structurally complete enough to serve as the staging source for migration, but production migration remains **BLOCKED** until every named participant is reconciled against the canonical character registry and every MAP location is resolved against the unified location registry.

Next steps:

1. Reconcile Okō, Kocha, Sekishūsai and all remaining named Book II participants.
2. Resolve event participant IDs against the unified roster.
3. Resolve event locations against the unified geographic registry.
4. Generate the production migration diff.
5. Run automated validation on the diff.
6. Only then write production JSON.
