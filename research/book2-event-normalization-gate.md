# Book II — Event Normalization Gate

Status: **STAGING — production events JSON not modified**

Every staged event must satisfy:

`event_id → b2cN → canonical character IDs → canonical location ID/null → source_ref`

## Participant normalization

All named participants appearing in the Book II event ledger are required to resolve to the reconciled character registry. Unnamed groups remain group/context records and are not converted into invented people.

### Canonical IDs

- musashi
- matahachi
- otsu
- jotaro
- akemi
- osugi
- gonroku
- oko
- himeji_captain
- yoshioka_kempo
- yoshioka_seijuro
- gion_toji
- ueda_ryohei
- yoshioka_denshichiro
- in_ei
- inshun
- nikkan
- agon
- shoda_kizaemon
- yamazoe_dampachi
- otomo_banryu
- yasukawa_yasubei
- sekishusai
- munenori
- kimura_sukekuro
- debuchi_magobei
- murata_yozo
- kocha

## Special participant handling

- Yoshioka students / Hōzōin priests / unnamed rōnin remain groups where unnamed.
- Denshichirō in b2c2 is `referenced_characters`, not an active participant, because the source reports him in Ise.
- Inshun in b2c6 is not backfilled into the initial Hōzōin encounter.
- Sekishūsai in b2c11 is physically reached by Musashi's journey, but no face-to-face interaction is created.
- Otsū is not made physically present through music, letters, or reported knowledge.

## Location normalization

Canonical location IDs are defined in `research/book2-location-normalization.md`.

Every event location/origin/destination must therefore resolve to one of those IDs, a previously approved Book I location, or explicit `null`/`unknown`.

No free-text compound location is accepted in production.

## Event decomposition requirements

The following staging records require decomposition rather than a single aggregate event:

- b2c8 Yagyū Valley / Koyagyū Castle sequence → separate valley arrival/walk and castle exterior events.
- b2c10 Wataya → Koyagyū Castle → Shin'indō/castle grounds → separate movement events by actual scene.
- b2c11 castle/moat → mountain house → back road → separate movement events.

This prevents a single event from falsely implying that every participant occupied every location in a multi-location sequence.

## Validation assertions

1. Every `characters[]` ID exists.
2. Every `referenced_characters[]` ID exists.
3. Every `witnesses[]` ID exists.
4. Every `location`, `origin`, `destination`, and `via[]` value is canonical or explicitly null/unknown.
5. `REPORTED` events never create physical presence.
6. `DIRECT` events have a defensible scene location.
7. Movement events do not imply arrival when the movement status is direction-only/intended/uncertain.
8. Events involving a dead character after the death event are rejected unless explicitly modeling remains.
9. Every event has an exact `source_ref` in `data/source/book2/`.
10. Existing Book I event records remain unchanged.

## Current gate

**Participant resolution: PASS in staging.**

**Location resolution: PASS in staging after canonicalization.**

**Scene decomposition: REQUIRED before production write for the multi-location b2c8/b2c10/b2c11 records.**

**Production events JSON: untouched.**
