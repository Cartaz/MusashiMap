# Book II — Production Normalization Gate

Status: **STAGING — production JSON not modified by this pass**

## Purpose

Convert the completed Book II research into machine-resolvable references before production migration. No free-text character or location reference is accepted in the final migration.

## Character normalization

### Existing production IDs reused

- `musashi` — Miyamoto Musashi
- `matahachi` — Hon'den Matahachi
- `otsu` — Otsū
- `jotaro` — Jōtarō
- `akemi` — Akemi
- `osugi` — Obaba Osugi
- `gonroku` — Fuchikawa Gonroku
- `oko` — Okō
- `lord_ikeda` — Ikeda Terumasa
- `himeji_captain` — Himeji garrison captain / Scraggly Beard

### New production IDs required after final validation

- `yoshioka_kempo` — Yoshioka Kempō (contextual/historical-traditional; no Book II physical marker)
- `yoshioka_seijuro` — Yoshioka Seijūrō
- `gion_toji` — Gion Tōji
- `ueda_ryohei` — Ueda Ryōhei
- `yoshioka_denshichiro` — Yoshioka Denshichirō
- `in_ei` — Kakuzenbō Hōzōin In'ei
- `inshun` — Hōzōin Inshun
- `nikkan` — Nikkan
- `agon` — Agon
- `shoda_kizaemon` — Shōda Kizaemon
- `yamazoe_dampachi` — Yamazoe Dampachi
- `otomo_banryu` — Otomo Banryū
- `yasukawa_yasubei` — Yasukawa Yasubei
- `sekishusai` — Yagyū Sekishūsai / Muneyoshi / Munetoshi
- `munenori` — Yagyū Munenori
- `kimura_sukekuro` — Kimura Sukekurō
- `debuchi_magobei` — Debuchi Magobei / Heibei naming variant
- `murata_yozo` — Murata Yozō

## Named entities that must remain contextual unless physical narrative evidence exists

- Toda Seigen
- Ogasawara Genshinsai
- Hō Ittōsai
- Okubo Nagayasu
- Suzuki Ihaku
- Hikida Bungorō
- Ban Dan'emon / Ban Naoyuki
- Sanada Yukimura
- Sengoku Sōya
- Katō Kiyomasa
- Yagyū Hyōgonosuke / Hyōgo Toshitoshi
- Yagyū Gorōzaemon
- Lord Kōizumi of Ise
- Lord Yorinori of Kishū
- Lord Gamō (exact individual unresolved)
- Lord Katō of Higo (exact individual unresolved)
- other historical analogical references

These must not become map markers merely because they are named.

## Historical-status corrections

Positive historical evidence supports:

- Hōzōin In'ei as historical.
- Hōzōin Inshun as historical.
- Yagyū Sekishūsai/Muneyoshi/Munetoshi as one historical person.
- Yagyū Munenori as historical.
- Shōda Kizaemon as historical Yagyū retainer/swordsman.
- Kimura Sukekurō as historical Yagyū swordsman/retainer.
- Murata Yozō as historical Yagyū retainer.
- Debuchi Magobei/Heibei as historical Yagyū retainer.

No historical status is assigned from name similarity alone. Nikkan, Agon, Yamazoe Dampachi, Otomo Banryū and Yasukawa Yasubei remain unverified/fictionalized/unknown according to the existing audit until a stronger primary or scholarly identification is found.

## Identity aliases

- `in_ei`: Kakuzenbō In'ei = Hōzōin In'ei
- `sekishusai`: Yagyū Sekishūsai = Yagyū Muneyoshi = Yagyū Munetoshi
- `munenori`: Lord Munenori = Yagyū Munenori
- `kimura_sukekuro`: Kimura Sukekurō spelling variants normalize here
- `debuchi_magobei`: Debuchi Magobei / Debuchi Heibei must not create duplicate IDs
- `shoda_kizaemon`: Shōda Kizaemon spelling variants normalize here

## Newly exposed named participants requiring explicit roster decision

### Kocha

`Kocha` is a named narrative character and must not be absorbed into an unnamed-group record. She requires a stable character ID if her physical presence is retained in Book II map states/events. Historical status remains `unknown` unless independent evidence establishes otherwise.

### Sekishūsai

`Sekishūsai` is not a new person: it resolves to `sekishusai`, the same historical Yagyū Muneyoshi/Munetoshi identity. No duplicate ID is permitted.

## Location normalization rule

Every production event/state must contain a canonical location ID or explicit `null` when the source does not establish a cartographic position. Free-text scene descriptions may remain only in `description`/`map_note`.

Examples of normalization:

- `Yagyū Valley / Koyagyū Castle sequence` → split into the actual location IDs used by each event/state; never retain the compound phrase as a location ID.
- `Wataya` → unresolved narrative location; explicit unmapped location ID, no invented coordinates.
- `Yomogi` → unresolved narrative location; explicit unmapped location ID, no invented coordinates.
- `Sekishūsai's mountain house` → dedicated location ID if the geographic registry supports it; otherwise explicit narrative/unmapped ID.

## Event normalization rule

Every event must resolve:

- `chapter` → `b2cN`
- `characters[]` → canonical character IDs only
- `referenced_characters[]` → canonical IDs only
- `location` → canonical location ID or explicit narrative/unmapped ID
- `origin` / `destination` → canonical location IDs or null
- `source_ref` → exact chapter source

No event is accepted if any named participant remains free text.

## State normalization rule

Every physical character state must resolve:

`character_id + chapter_id + canonical_location_id`

Reported or remembered locations remain non-physical and cannot populate `location`.

## Production gate

Before production writes, the migration script/check must assert:

1. every character ID exists;
2. every alias resolves to exactly one ID;
3. every event participant resolves;
4. every event location resolves;
5. every state location resolves or is explicitly null/unmapped;
6. no duplicate historical identity exists under separate IDs;
7. no `present_in` entry is created from a reported-only state;
8. no location receives coordinates without geographic evidence;
9. all chapter references use `bNcN`;
10. Book I records remain semantically unchanged except for the explicitly approved taxonomy/reference migration.

## External historical evidence used in this normalization pass

- British Museum record for Kakuzenbō In'ei.
- Scholarly/academic material on Yagyū history and Shōda Kizaemon, Kimura Sukekurō, Murata Yozō and related Yagyū retainers.
- The repository's canonical novel corpus remains the sole authority for narrative presence and interactions.

## Status

**Normalization substantially complete.**

Remaining blockers before production JSON:

- add and classify Kocha;
- finalize every Book II event/location reference against this normalization table;
- resolve Yagyū Gorōzaemon's exact identity or explicitly retain it as a separate unresolved contextual person;
- generate the complete machine-readable migration diff;
- run the pre-production validator against the diff.
