# MusashiMap — Book II / WATER — Narrative Location Registry

Status: **completed — narrative classification only**

Canonical source: `data/source/book2/`.

This registry classifies Book II location candidates before geographic lookup. No coordinates are assigned here.

## Marker-worthy narrative locations

| Proposed ID | Display name | Class | Narrative role | First Book II chapter | Geographic work |
|---|---|---|---|---:|---|
| `kyoto` | Kyoto | urban_area | principal regional setting | 1 | modern_match |
| `yoshioka_school` | Yoshioka School | narrative_site | Musashi's challenge and Yoshioka compound | 1 | site identification |
| `yomogi_teahouse` | Yomogi Teahouse | narrative_site | recurring Kyoto location for Matahachi/Okō/Akemi/Yoshioka scenes | 1 | site/area anchor |
| `kamo_river` | Kamo River | river | Kyoto narrative geography | 1 | representative_point/linear |
| `shijo_avenue` | Shijō Avenue | route | principal Kyoto street setting | 1 | representative/route |
| `takase_river` | Takase River | river | Yomogi/pleasure-district context | 1 | representative_point/linear |
| `honnōji_ruins` | Honnōji ruins | narrative_site | Matahachi mistaken for Musashi | 2 | modern/historical identification |
| `kuyado` | Kūyadō | temple | referenced/active Kyoto location | 2 | site identification |
| `kiyomizudera` | Kiyomizudera | temple | Musashi's observation and Osugi confrontation | 3 | exact/modern_match |
| `hongando` | Hongandō | temple | confrontation area adjacent to Kiyomizudera | 3 | site identification |
| `cheap_inn_kyoto` | Kyoto inn | narrative_site | Musashi's temporary base | 4 | approximate_area |
| `daigo` | Daigo | settlement_area | Musashi/Jōtarō meeting point | 4 | modern_match |
| `rokuamida` | Rokuamida crossroads | route | Musashi/Jōtarō travel scene | 4 | representative_point |
| `yamato_highroad` | Yamato highroad | route | travel route toward Nara | 4 | route/representative |
| `nara` | Nara | urban_area | Musashi/Jōtarō destination and base | 4 | modern_match |
| `hozoin` | Hōzōin | temple | Musashi's martial encounter and study | 4 | modern_match/site |
| `ozoin` | Ōzōin | temple | Nikkan garden encounter | 6 | site identification |
| `abura_hill` | Abura Hill | area | approach to Ōzōin/Hōzōin | 6 | area/representative |
| `sarusawa_pond` | Sarusawa Pond | area | Nara boardinghouse vicinity | 6 | modern_match |
| `hannya_plain` | Hannya Plain | area | Dampachi ambush and Hōzōin confrontation | 7 | modern_match/area |
| `hannya_hill` | Hannya Hill | area | immediate Hannya Plain geography | 7 | modern_match/area |
| `mount_mikasa` | Mount Mikasa | area | visible landmark during Hannya approach | 7 | modern_match |
| `tsukigase` | Tsukigase | settlement_area | Yagyū-area route reference | 7/11 | modern_match |
| `yagyu_valley` | Yagyū Valley | area | principal Yagyū setting | 8 | modern_match/area |
| `koyagyu_castle` | Koyagyū Castle / Main House | castle | Yagyū political/cultural center | 8 | modern_match/site |
| `yagyu_dojo` | Yagyū dōjō | narrative_site | martial training location | 8/9 | site identification |
| `yagyu_mountain_house` | Sekishūsai's mountain house | narrative_site | secluded residence and major late-Book-II setting | 8 | approximate_area/site |
| `wataya_inn` | Wataya inn | narrative_site | visiting Yoshioka party / peony sequence | 9 | approximate_area |
| `kasagidera` | Kasagidera | temple | Musashi's approach through Yagyū territory | 8 | modern_match/site |
| `joruriji` | Jōruriji | temple | Musashi's approach through Yagyū territory | 8 | modern_match/site |
| `shinindo` | Shin'indō | narrative_site | scholarly/library building inside Koyagyū Castle | 9/10 | castle-complex site, not separate city |
| `koyagyu_castle_moat` | Koyagyū Castle moat | narrative_site | Musashi's escape/hiding place | 10 | castle-complex feature |
| `tsukigase_iga_backroad` | Tsukigase–Iga back road | route | Otsū/Jōtarō lose Musashi | 11 | route/representative |

## Contextual references — do not automatically create markers

These are named in the Book II text but should remain contextual unless a later pass establishes a reader-useful scene location:

- Osaka
- Osaka Castle
- Tamba Province
- Mimasaka Province
- Miyamoto
- Shippōji
- Aida River
- Toribe Mountain
- Kurama
- Ise
- Hachiman Shrine
- Sanjō Avenue / Sanjō Bridge
- Zuisenin
- Teramachi
- Kayahara
- Izumo Shrine
- Toribe Mountain
- Kūyadō when used only as historical/expository context
- Chawan Hill
- Sannen Hill
- Uji Bridge
- Kizu River ferry landing
- Mampukuji
- Kasagi area / Mount Kasagi as broader geographic context
- Mount Kasuga
- Kōga
- Kawachi
- Kii
- Hōzōin-related Nara roads when no discrete scene anchor exists

A contextual reference may be promoted only when the chapter text establishes a meaningful scene, arrival, departure, or movement relation that the reader can use on the map.

## Deliberate non-duplication rules

1. `koyagyu_castle` represents the Main House/castle complex. `shinindo` is a child narrative site within that complex, not a second castle.
2. `yagyu_mountain_house` is distinct from `koyagyu_castle`: the novel explicitly describes Sekishūsai's residence as a separate mountain house behind the Main House. fileciteturn529file0L2-L2
3. `yagyu_dojo` is distinct from both the castle/Main House and mountain house.
4. `wataya_inn` is a separate inn and must not be merged with the generic Kyoto inn from Chapter 4.
5. `koyagyu_castle_moat` is a narrative feature of the castle complex, not a separate settlement/location anchor.
6. Hannya Plain, Hannya Hill and Mount Mikasa are separate geographic references even though they form one immediate landscape.

## Coordinate policy

No coordinates are assigned during this pass. The later geographic pass must follow the project's hierarchy:

- exact modern identification only when genuinely defensible;
- `modern_match` for strong modern correspondence;
- `area`/`representative_point` for broad geographic features;
- `approximate_area` for narrative sites anchored to a defensible modern area;
- `null` when no defensible anchor exists.

No fictional inn, house, dōjō or other narrative site should receive a fabricated exact coordinate merely to populate the map.

## Introduction rule

Book II-local chapter numbers are provisional only. Every retained location must ultimately receive a global `introduced_section` based on the seven-book chronology. The persistent-place rule is:

> A place becomes visible from the first chapter in which it is narratively introduced and remains available through the end of Book VII.

This registry therefore records **Book II first appearance**, not the final production `introduced_section`.

## Next phase

The narrative location registry is frozen enough for the geographic verification pass. The next step is to research only the retained marker-worthy locations, using authoritative modern geographic/cultural sources, and record confidence/precision without altering the narrative classification.
