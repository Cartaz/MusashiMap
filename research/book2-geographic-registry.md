# MusashiMap — Book II / WATER — Geographic Registry

Status: **production staging complete — no production JSON changes**

This registry is the bridge between narrative research and `data/locations.json`. It freezes the geographic interpretation of Book II before production integration.

## Canonical rules

- Narrative truth comes exclusively from `data/source/book2/`.
- External sources identify/test real-world geography only.
- Geographic confidence and historical compatibility are independent fields.
- Exact coordinates are used only when the evidence supports a site-specific point.
- Area, route, representative-point, and child-location objects are preferred over fabricated precision.
- Unresolved fictional or anonymous locations remain unmapped.
- Book-II chapter numbers are local and must **not** be copied into the production `introduced_section` field. Global seven-book chronology is required during integration.
- Every retained place must remain visible from its global introduction through the end of Book VII, according to the persistent-place rule already implemented in the runtime.

## Field model

| Field | Meaning |
|---|---|
| `id` | Stable production candidate ID |
| `name` | Reader-facing name |
| `type` | Geographic/narrative object class |
| `first_book2_chapter` | First narrative appearance in Book II only |
| `coordinates` | `[lat, lon]`, or `null` when no defensible anchor exists |
| `coordinate_precision` | `exact`, `modern_match`, `area`, `representative_point`, `approximate_area`, `route`, `child_inherited`, or `null` |
| `coordinate_radius_m` | Maximum uncertainty radius when using `approximate_area` |
| `geographic_confidence` | `A`, `B`, `C`, or `D` |
| `historical_match` | `strong`, `compatible`, `probable`, `unknown`, `anachronistic_reference`, `unresolved` |
| `mapping_type` | `point`, `area`, `route`, `child`, `contextual`, or `unmapped` |
| `parent_location` | Parent ID for child locations |
| `production_note` | Explicit statement of what the map may and may not imply |

## Frozen registry

| ID | Name | First B2 ch. | Confidence | Precision | Historical match | Mapping | Parent | Coordinates / anchor | Production decision |
|---|---|---:|---|---|---|---|---|---|---|
| `kyoto` | Kyoto | 1 | A | modern_match | compatible | area | — | modern Kyoto anchor | City/region anchor; do not imply historical street geometry is unchanged. |
| `yoshioka_school` | Yoshioka School | 1 | B | approximate_area | probable | area | — | Nishinotoin–Shijō area | No exact dojo footprint; use area-level anchor only. NDL/local-history evidence supports the area but describes the exact site as traditionally identified. |
| `yomogi_teahouse` | Yomogi Teahouse | 1 | D | null | unresolved | unmapped | — | null | Narrative-only until a defensible historical identification appears. |
| `kamo_river` | Kamo River | 1 | A | representative_point / linear | compatible | route | — | Central Kyoto river corridor | Linear feature; representative point may be used only as a reader anchor. |
| `shijo_avenue` | Shijō Avenue | 1 | A | route | compatible | route | — | Shijō-dōri corridor | Route/corridor, not a single point. |
| `takase_river` | Takase River | 1 | A geographic / C historical | representative_point / linear | anachronistic_reference | route | — | Modern Takasegawa corridor | Modern identity is certain, but Kyoto official history dates the canal opening to 1614; retain explicit historical-compatibility warning. |
| `honnōji_ruins` | Honnōji ruins | 2 | B | modern/historical site | strong | point | — | Historical Honnōji site | Use verified historical site anchor; do not imply surviving period layout. |
| `kuyado` | Kūyadō | 2 | B | historical_area | compatible / temporal caution | area | — | Original Sanjō Kushige area | Do **not** use the current temple location as the Book-II point; research identifies the older site around present Imashinzaike-nishimachi. |
| `kiyomizudera` | Kiyomizudera | 3 | A | exact | strong | point | — | Kiyomizu-dera modern site | Strong site identification; modern anchor acceptable with standard historical-site note. |
| `hongando` | Hongandō | 3 | C | null | unresolved | unmapped | — | null | Keep unresolved; no unique authoritative site match. |
| `cheap_inn_kyoto` | Unnamed Kyoto inn | 4 | D | null | unresolved | unmapped | — | null | Anonymous narrative location; never infer a modern inn. |
| `daigo` | Daigo | 4 | B | area / representative_point | compatible | area | — | Daigo area | Do not automatically equate narrative Daigo with a specific Daigoji building. |
| `rokuamida` | Rokuamida crossroads / Six Amida reference | 4 | B | contextual | compatible | contextual | — | No generic single coordinate | Six Amida is a network/reference, not one place. Resolve to a specific temple only when the narrative scene explicitly identifies it. |
| `yamato_highroad` | Yamato highroad | 4 | A | route | compatible | route | — | Historical Nara–Yagyū corridor | Route feature only; exact historical geometry must not be fabricated. |
| `nara` | Nara | 4 | A | modern_match | strong | area | — | Nara urban anchor | City/area anchor. |
| `hozoin` | Hōzōin | 4 | A identity / B coordinate | historical_area | compatible | area | — | Historical Hōzōin / Kōfuku-ji connection | Do not point to the modern Hōzōin-ryū dojo. Historical site coordinate remains unresolved enough to avoid false precision. |
| `ozoin` | Ōzōin | 6 | C | null | unresolved | unmapped | — | null | Keep unresolved until an unambiguous historical identification is found. |
| `abura_hill` | Abura Hill / Aburazaka | 6 | A | area / route | compatible | area | — | Historical Aburazaka area | Use area/slope representation; no false pinpoint for the seventeenth-century road line. |
| `sarusawa_pond` | Sarusawa Pond | 6 | A | exact / modern_match | strong | point | — | Sarusawa-ike | Strong modern/historical site correspondence. |
| `hannya_plain` | Hannya Plain | 7 | A | area | compatible | area | — | Hannya/Hannyano area near Hannyaji/Narasaka | Area-level anchor only; exact battle point not established. |
| `hannya_hill` | Hannya Hill / Hannyazaka | 7 | A | route / area | compatible | route | — | Hannyazaka corridor | Named historical slope; do not imply preserved seventeenth-century road geometry. |
| `mount_mikasa` | Mount Mikasa | 7 | B | area | compatible | area | — | Mount Mikasa/Wakakusayama | Strong landmark identification; use area rather than summit precision for narrative sightline. |
| `tsukigase` | Tsukigase | 7/11 | A | area / modern_match | compatible | area | — | Tsukigase area | Area-level settlement/region anchor. |
| `yagyu_valley` | Yagyū Valley | 8 | A | area | compatible | area | — | Yagyū area | Principal Yagyū geographic anchor. |
| `koyagyu_castle` | Koyagyū Castle / Main House | 8 | A | exact historical-site anchor | compatible | point | — | Yagyū Castle historical site | Point marks the historical complex/site, not every fictional interior building. |
| `yagyu_dojo` | Yagyū dōjō | 8/9 | B | child_inherited | compatible | child | `koyagyu_castle` | Parent Yagyū complex | Historical dojo tradition is supported, but the modern Masakizaka Kenzen Dojo is postwar; do not use it as a period-perfect independent marker. |
| `yagyu_mountain_house` | Sekishūsai's mountain house | 8 | B | child_inherited | probable | child | `koyagyu_castle` | Parent Yagyū complex | Novel establishes it as a separate residence within the castle grounds; no defensible independent historical footprint. |
| `wataya_inn` | Wataya inn | 9 | D | null | unresolved | unmapped | — | null | No authoritative source links a surviving/documented inn to the novel. |
| `kasagidera` | Kasagidera | 8 | B | exact / modern_match | compatible | point | — | Kasagi-dera modern site | Strong temple identification; approach route remains separate. |
| `joruriji` | Jōruriji | 8 | A | exact | strong | point | — | Jōruri-ji, Kizugawa | Official site provides a strong modern site anchor. |
| `shinindo` | Shin'indō | 9/10 | B | child_inherited | probable | child | `koyagyu_castle` | Parent Yagyū complex | Narrative building inside the castle/main-house complex; no independent surviving footprint established. |
| `koyagyu_castle_moat` | Koyagyū Castle moat | 10 | B | child_inherited | compatible | child | `koyagyu_castle` | Parent Yagyū complex | Feature of the castle complex; do not create an unrelated location anchor. |
| `tsukigase_iga_backroad` | Tsukigase–Iga back road | 11 | B | route | probable | route | — | Historical Yagyū/Tsukigase corridor | Corridor only. Exact Book-II line is not established. |

## Explicitly excluded from production mapping

| ID | Reason |
|---|---|
| `yomogi_teahouse` | No defensible real-world identification. |
| `cheap_inn_kyoto` | Anonymous by definition. |
| `wataya_inn` | No defensible historical continuity or site identification. |
| `hongando` | Ambiguous historical/religious reference; no unique site. |
| `ozoin` | Ambiguous site identity; no unique scene-level match. |

These exclusions are intentional and must not be "fixed" by assigning nearby modern coordinates.

## Hierarchical locations

The following must be represented as children rather than independent arbitrary points:

- `yagyu_dojo` → `koyagyu_castle`
- `yagyu_mountain_house` → `koyagyu_castle`
- `shinindo` → `koyagyu_castle`
- `koyagyu_castle_moat` → `koyagyu_castle`

The purpose is semantic precision: the reader can distinguish the narrative locations while the map avoids pretending to know the exact seventeenth-century building footprints.

## Historical-compatibility warnings

### Takase River

Modern geographic identity is high-confidence, but Kyoto City historical documentation dates the Takasegawa canal's opening to 1614. It therefore cannot be silently represented as a historically unchanged early-Book-II feature. Keep the modern anchor and the historical warning separate.

### Kūyadō

The present Kūyadō location post-dates the Book-II setting. Production must use the historically appropriate older Sanjō Kushige area if the scene requires a geographic marker; never substitute the modern temple coordinates without an explicit temporal note.

### Hōzōin

Hōzōin's identity as the historical temple connected to Kōfuku-ji is strong, but the modern Hōzōin-ryū training dojo is a different object. Production must not use the latter as the historical marker.

### Yagyū dōjō

The modern Masakizaka Kenzen Dojo is postwar. The historical dojo tradition is associated with the Yagyū jinya/complex, so the production representation should inherit the parent Yagyū complex unless stronger site-specific evidence is found.

## Production readiness

This registry is **ready for the later production migration**, but production migration is intentionally a separate step.

Before editing `data/locations.json`:

1. establish global seven-book chapter IDs and global `introduced_section` values;
2. audit existing Book I location records against the same field model;
3. audit **Book I and Book II character records together** for the new `narrative_presence`, `narrative_role`, `historical_status`, and `map_relevance` taxonomy;
4. stage the location migration and validate JSON schema;
5. verify that persistent locations remain visible through Book VII;
6. run the full test/deploy workflow.

## Source trail

Primary research documents for this registry:

- `research/book2-location-registry.md`
- `research/book2-geographic-research-pass-a.md`
- `research/book2-geographic-research-pass-b.md`
- `research/book2-geographic-research-pass-c.md`
- `research/book2-geographic-research-pass-d.md`

No external geographic claim in this registry is allowed to override the narrative corpus.
