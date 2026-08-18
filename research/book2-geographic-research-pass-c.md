# MusashiMap — Book II / WATER — Geographic Research Pass C

Status: **in progress**

This pass adds the confidence matrix and records historical-compatibility cautions discovered while verifying the Kyoto and Nara/Yagyū clusters.

## Confidence scale

- **A — High:** identity is supported by authoritative/site-specific evidence and the narrative name maps cleanly to the real place. A production anchor is normally defensible, subject to point/area precision.
- **B — Good:** identification is well supported, but exact historical point, extent, or narrative sub-location remains uncertain.
- **C — Tentative:** plausible identification, but competing interpretations or insufficient site-specific evidence remain.
- **D — Unresolved:** do not assign production coordinates yet.

Confidence is about **geographic identification**, not whether the modern site is physically identical to the site as it existed in the novel's period. Historical compatibility is recorded separately.

## Consolidated discovery matrix

| ID | Narrative place | Modern / historical identification | Geo confidence | Historical compatibility | Production treatment |
|---|---|---|---|---|---|
| `kiyomizudera` | Kiyomizudera | Kiyomizu-dera, Kyoto | A | Compatible at site/area level | Point |
| `joruriji` | Jōruriji | Jōruri-ji, Kizugawa | A | Compatible | Point |
| `tsukigase` | Tsukigase | Tsukigase area, eastern Nara | A | Compatible at area level | Area / representative point |
| `yagyu_valley` | Yagyū Valley | Yagyū area, Nara | A | Compatible at area level | Area / representative point |
| `koyagyu_castle` | Koyagyū Castle / Main House | Yagyū Castle historical site, Nara | A | Compatible as site anchor, not as intact modern building | Point with historical-site note |
| `yamato_highroad` | Yagyū Kaidō / Yamato road toward Yagyū | Historical Nara–Yagyū corridor | A | Compatible at corridor level | Route only after geometry verification |
| `hozoin` | Hōzōin | Historical Hōzōin, Kōfuku-ji connection, Nara | A identity / B coordinate | Historically compatible; modern dojo is a different object | Point only after historical coordinate is resolved |
| `sarusawa_pond` | Sarusawa Pond | Sarusawa-ike, Nara | A | Compatible | Point |
| `kofukuji` | Kōfuku-ji | Kōfuku-ji, Nara | A | Compatible at complex/site level | Point |
| `kamo_river` | Kamo River | Kamo/Kamogawa, Kyoto | A | Compatible | Linear / representative point |
| `shijo_avenue` | Shijō Avenue | Shijō-dōri, Kyoto | A | Compatible as street corridor | Representative point / route |
| `takase_river` | Takase River | Takasegawa, Kyoto | A modern identity / C historical compatibility | Modern river/canal is identifiable, but the official Kyoto history dates the Takasegawa canal opening to 1614, so its use for an early-17th-century scene needs a narrative/anachronism note rather than being silently treated as historically identical. | Do not encode historical geometry as if period-perfect; point/route only with compatibility note |
| `yoshioka_school` | Yoshioka School | Historical Yoshioka school/dojo in Kyoto; exact site disputed in external traditions | C | Narrative source says Shijō Avenue; external traditions also associate the later duel with Ichijōji, so exact school-site coordinates are not yet secure | Approximate area or null; no false exact point |
| `honnōji_ruins` | Honnōji ruins | Historical Honnōji site in Kyoto | B | Site identity strong; exact period configuration requires care | Point after site verification |
| `daigo` | Daigo | Daigo area / Daigoji, southeast Kyoto | B | Strong area identity; scene-level point depends on narrative context | Area / representative point |
| `kasagidera` | Kasagidera | Kasagi-dera, Kyoto/Keihanna border area | B | Strong temple identity; exact approach route remains to verify | Point |
| `hannya_plain` | Hannya Plain | Named landscape near Nara/Yagyū | C | Plausible regional identification, exact historical extent not yet fixed | Area only; no exact point yet |
| `hannya_hill` | Hannya Hill | Local landscape feature associated with Hannya Plain | C | Exact modern correspondence unresolved | Area / null |
| `mount_mikasa` | Mount Mikasa | Mount Mikasa / Wakakusayama, Nara | B | Strong modern landmark identity | Point / area |
| `yagyu_dojo` | Yagyū dōjō | Narrative Yagyū martial-training site | C | No defensible independent modern coordinate yet | Sub-location / null until verified |
| `yagyu_mountain_house` | Sekishūsai's mountain house | Narrative-specific residence in Yagyū | C | Historical association plausible but exact house/site not established | Approximate area or null |
| `wataya_inn` | Wataya inn | Narrative inn | D | No defensible modern identification yet | Null |
| `shinindo` | Shin'indō | Narrative building inside Koyagyū Castle/Main House | C | Sub-location of castle complex; independent modern footprint not established | Child/sub-location of castle; no independent point |
| `koyagyu_castle_moat` | Koyagyū Castle moat | Castle-complex feature | B | Feature belongs to historical castle site; exact surviving geometry requires site-level evidence | Child feature of castle |
| `tsukigase_iga_backroad` | Tsukigase–Iga back road | Historical/narrative route corridor | C | General corridor plausible; exact historical geometry not fixed | Route only if later reconstructed defensibly |
| `yomogi_teahouse` | Yomogi Teahouse | Narrative Kyoto teahouse | D | No defensible modern identification | Null |
| `kuyado` | Kūyadō | Narrative/historical Kyoto religious site | C | Identity likely historical, exact Book-II scene anchor needs verification | Do not assign exact point yet |
| `hongando` | Hongandō | Narrative temple/compound reference near Kiyomizudera | C | Exact identification requires additional source work | Null / approximate area |
| `cheap_inn_kyoto` | unnamed Kyoto inn | Narrative-specific inn | D | No defensible modern identification | Null |
| `rokuamida` | Rokuamida crossroads | Historical/narrative route junction | C | Name is plausible but exact modern correspondence not established | Null / route node only after verification |
| `nara` | Nara | Nara urban area | A | Compatible | Area / city anchor |
| `ozoin` | Ōzōin | Historical/religious site referenced in Nara | C | Exact site identity requires additional verification | Null until verified |
| `abura_hill` | Abura Hill | Named/local Nara-area terrain feature | C | Exact modern correspondence unresolved | Area / null |

## Key findings from this pass

### 1. Kamo River is a high-confidence anchor

Kyoto City's historical-city documentation identifies the Kamo River as the river running through central Kyoto from north to south and specifically notes its course through the Shijō area. This makes `kamo_river` and `shijo_avenue` strong geographic anchors, although the map should not imply that modern road/river geometry is identical to the historical urban fabric. Source: Kyoto City historical-city documentation.

### 2. Takase River needs a historical-compatibility warning

Kyoto City's official historical-city documentation states that the Takasegawa canal was opened by Suminokura Ryōi and Suminokura Sōan, with completion in 1614. Therefore, even though the modern identification of `takase_river` is certain, we must **not silently label it as a period-perfect geographic feature** for an early Book-II scene. This is a potential narrative chronology/anachronism issue and must remain visible in the research data.

### 3. Yoshioka School remains deliberately unresolved

The narrative registry treats the Yoshioka School as a concrete Kyoto narrative site and the novel places it on Shijō Avenue. External traditions about the Yoshioka duels strongly associate the later confrontation with Ichijōji, and some modern accounts explicitly discuss competing interpretations of the dojo's location. Because those claims do not establish the exact historical dojo footprint, MusashiMap should not manufacture a precise coordinate. Confidence remains C.

### 4. Daigo is an area-level anchor, not automatically a single temple point

Daigoji's official history confirms the Daigo complex in southeastern Kyoto and distinguishes Kami-Daigo and Shimo-Daigo. Therefore a narrative reference to `Daigo` should not automatically be converted into the center of the present Daigoji grounds. The correct production treatment depends on the chapter's actual scene context.

### 5. Jōruriji is unusually strong

The temple's own official site identifies Jōruriji at Nishiofutaba 40, Kamo-chō, Kizugawa City, Kyoto Prefecture and places it in the historically important Tono area on the Kyoto/Nara border. This supports an A-level identification and a precise modern site anchor.

### 6. Hōzōin remains a special case

The official Hōzōin-ryū history identifies Hōzōin as a sub-temple of Kōfuku-ji and the origin point of the tradition. The modern training organization is not itself the historical temple. Therefore the **identity is A**, but the **production coordinate remains B until the historical site is pinned down**.

## Source quality hierarchy used here

1. Official site of the identified temple/place.
2. Japanese municipal / prefectural cultural-history source.
3. National or academic geographic/historical dataset.
4. Reputable secondary historical source for resolving competing interpretations.
5. General web pages only as leads, never as sole support for an exact production coordinate.

## Current confidence distribution

- **A / High:** Kiyomizudera, Jōruriji, Tsukigase, Yagyū, Koyagyū Castle, Yagyū Kaidō, Hōzōin identity, Sarusawa Pond, Kōfuku-ji, Kamo River, Shijō Avenue, Nara.
- **B / Good:** Honnōji, Daigo, Kasagidera, Mount Mikasa, castle moat; Hōzōin coordinate specifically remains B.
- **C / Tentative:** Yoshioka School, Hannya Plain, Hannya Hill, Yagyū dōjō, Yagyū mountain house, Shin'indō, Tsukigase–Iga back road, Kūyadō, Hongandō, Rokuamida, Ōzōin, Abura Hill; Takase River as a modern identity is A but historical compatibility is C.
- **D / Unresolved:** Wataya, Yomogi Teahouse, unnamed Kyoto inn.

## Production gate

No production JSON is changed by this pass. Promotion requires:

1. narrative evidence frozen in the location registry;
2. geographic confidence recorded;
3. historical compatibility recorded separately;
4. representative-point precision justified;
5. Book I + Book II character taxonomy audit performed during the same production-data migration;
6. global seven-book `introduced_section` chronology established.

## Sources

- Kyoto City, Kamo River historical-city documentation: https://www2.city.kyoto.lg.jp/somu/rekishi/fm/nenpyo/htmlsheet/toshi08.html
- Kyoto City, Takase River historical-city documentation: https://www2.city.kyoto.lg.jp/somu/rekishi/fm/nenpyo/htmlsheet/toshi22.html
- Daigoji official history: https://www.daigoji.or.jp/history/history_engi_e.html
- Jōruriji official site: https://joruriji.jp/en/about/
- Jōruriji cultural heritage / Tono: https://joruriji.jp/en/contents/tono/
- Hōzōin-ryū official history: https://hozoin.org/rekisi/
- Existing Book II geographic Pass A/B research files in this repository.
