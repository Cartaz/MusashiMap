# Book II — Location Normalization Gate

Status: **STAGING — production locations JSON not modified**

This registry converts every Book II narrative location used by the character-state and event staging ledgers into a stable canonical ID. A location may be mapped or intentionally unmapped. No coordinates are invented here.

## Canonical location IDs

| ID | Display name | First section | Kind | Coordinates | Status |
|---|---|---:|---|---|---|
| yoshioka_school | Yoshioka School / dōjō | 9 | narrative_site | null | unresolved geographic precision |
| kamo_river_pleasure_district | Kamo River pleasure district | 9 | area | null | unresolved |
| yomogi | Yomogi | 9 | narrative_site | null | unresolved |
| honnoji_ruins | Honnōji ruins / moat | 10 | ruins | null | unresolved |
| kiyomizudera | Kiyomizudera | 11 | temple | null | modern identification required |
| chawan_hill | Chawan Hill | 11 | area | null | modern identification required |
| hongando | Hongandō | 11 | temple/site | null | modern identification required |
| daigo | Daigo | 12 | area | null | modern identification required |
| rokuamida | Rokuamida | 12 | narrative_site | null | ambiguous reference; no coordinate invented |
| sanjo_checkpoint | Sanjō Avenue checkpoint | 12 | checkpoint | null | modern identification required |
| kyoto_cheap_inn | Cheap inn northwest of Kyoto | 12 | narrative_site | null | intentionally unmapped |
| sake_shop | Sake shop | 12 | narrative_site | null | intentionally unmapped |
| mampukuji | Mampukuji | 13 | temple | null | modern identification required |
| yamato_highroad | Yamato highroad | 13 | route | null | route; no point coordinate |
| uji_bridge | Uji Bridge | 13 | bridge | null | modern identification required |
| kizugawa_ferry | Kizu River ferry | 13 | ferry | null | modern identification required |
| abura_hill | Abura Hill | 14 | area | null | modern identification required |
| hozoin | Hōzōin | 14 | temple/dojo | null | modern identification required |
| sarusawa_pond | Sarusawa Pond | 14 | pond | null | modern identification required |
| nara | Nara | 15 | urban_area | null | modern identification required |
| todaiji_area | Tōdaiji area | 15 | temple_area | null | modern identification required |
| hannya_plain | Hannya Plain | 15 | area | null | modern identification required |
| hannya_observation_knoll | Hannya Plain observation knoll | 15 | narrative_site | null | intentionally approximate/unmapped |
| yagyu_valley | Yagyū Valley | 16 | valley | null | modern identification required |
| koyagyu_castle | Koyagyū Castle / Main House | 16 | castle | null | modern identification required |
| wataya | Wataya | 16 | narrative_site | null | intentionally unmapped |
| shinindo | Shin'indō | 18 | narrative_site | null | modern identification required |
| sekishusai_mountain_house | Sekishūsai's mountain house | 19 | narrative_site | null | intentionally unmapped; child of Yagyū context |
| tsukigase_iga_back_road | Tsukigase–Iga back road | 19 | route | null | route; no point coordinate |

## Normalization rules applied

1. Compound scene descriptions are never used as IDs.
2. Routes remain route entities and do not receive fabricated point coordinates.
3. Narrative sites without a defensible modern identification remain unmapped.
4. A child site may inherit contextual geography from a parent but does not inherit the parent's coordinates as if they were its own.
5. `introduced_section` is the first chapter/section in which the location is narratively introduced, not the first time a character physically arrives there.
6. Locations remain available from `introduced_section` onward in the map layer; they are not removed merely because no selected character currently occupies them.
7. Reported destinations do not create an arrival event.
8. `unknown` geographic identity is not a reason to delete a narrative location from the novel map.

## Event-reference resolution

Every location token appearing in `research/book2-event-interaction-ledger.md` is mapped to exactly one ID above, except `unknown`, which remains explicit null/unmapped in the event model.

### Explicitly split compound references

- `Yagyū Valley / Koyagyū Castle sequence` → `yagyu_valley` and `koyagyu_castle` according to scene.
- `castle grounds` → `koyagyu_castle` unless the source establishes a distinct site.
- `moat` in b2c11 → `koyagyu_castle` context, not a new invented site.
- `mountain house` in b2c11 → `sekishusai_mountain_house`.

### Explicitly unresolved

- Wataya
- cheap inn
- sake shop
- Hannya observation knoll
- Sekishūsai's mountain house

These are valid narrative locations but must remain coordinate-null until geographic research provides sufficient evidence.

## Production blocker

This file deliberately does **not** assign modern coordinates. The next geography pass must research the mapped candidates and classify them A/B/C/D according to the existing research protocol. Only A/B candidates with defensible modern identification should receive production coordinates.
