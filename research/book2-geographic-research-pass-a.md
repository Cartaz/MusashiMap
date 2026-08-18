# MusashiMap — Book II / WATER — Geographic Research Pass A

Status: **in progress**

Narrative source: canonical repository corpus under `data/source/book2/`.
Modern identification uses external sources only after the narrative registry was frozen.

## Production-data reminder

This pass does **not** modify production JSON. When Book II locations are eventually promoted, the migration must also audit every existing Book I character against the new person taxonomy (`entity_type`, `narrative_presence`, `narrative_role`, `historical_status`, `map_relevance`).

## Round 1 — direct identification

### Kiyomizudera

- ID: `kiyomizudera`
- Narrative class: `temple`
- Result: **strong / modern_match**
- Modern identification: Kiyomizu-dera, Higashiyama, Kyoto.
- Modern coordinates: approximately `34.99442, 135.78448`.
- Evidence: the official Kiyomizu-dera site places the temple on Mt. Otowa in Kyoto's Higashiyama range and provides the current grounds/location; Japan's official tourism organization gives the address as 294 Kiyomizu 1 Chome, Higashiyama-ku, Kyoto. citeturn1search7turn1search5
- Historical compatibility: `compatible` at the site/area level. The current structures are not automatically treated as identical to every structure in the narrative period.
- Decision: use the modern temple as the map anchor, not a claim of exact historical building continuity.

### Jōruriji

- ID: `joruriji`
- Narrative class: `temple`
- Result: **strong / modern_match**
- Modern identification: Jōruri-ji, Kamo-chō, Kizugawa, Kyoto Prefecture.
- Modern coordinates: approximately `34.71567, 135.87308`.
- Evidence: the temple's official site gives the address Nishiofutaba 40, Kamo-cho, Kizugawa City; OpenStreetMap-derived geographic data places the temple at approximately 34.71567, 135.87308. citeturn3search17turn3search0
- Historical compatibility: `compatible` as a temple-site anchor; do not infer that every current structure is unchanged from the narrative period.
- Decision: retain as a precise modern temple anchor.

### Tsukigase

- ID: `tsukigase`
- Narrative class: `settlement_area`
- Result: **strong / modern_match**
- Modern identification: Tsukigase area, eastern Nara City.
- Modern coordinates: representative point approximately `34.73, 135.95`; exact production point still to be selected from an authoritative geographic record.
- Evidence: Nara's official tourism material identifies Tsukigase as an eastern Nara area and describes the Satsuki River valley; the Tsukigase Tourism Association places the area in Nara City and gives access relationships to Nara and Yagyū. citeturn1search9turn1search3
- Historical compatibility: `compatible` at area level.
- Decision: retain as an area/representative point, not as a fabricated exact settlement coordinate.

### Yagyū Valley / Yagyū settlement

- ID: `yagyu_valley`
- Narrative class: `area`
- Result: **strong / modern_match**
- Modern identification: Yagyū area, Nara City.
- Modern coordinates: approximately `34.72821, 135.95220` as a historical-geographical representative point for Yagyū village/area.
- Evidence: the National Institute for Japanese Historical Geography dataset identifies historical Yagyū village in Nara City and provides coordinates derived from early-modern village territory data; Nara City describes Yagyū as the eastern village reached by the Yagyū Kaidō and as the village associated with the Yagyū swordsmen. citeturn3search15turn2search37
- Historical compatibility: `compatible` at area level.
- Decision: use the Yagyū area anchor; do not equate it with the castle itself.

### Koyagyū Castle / Main House

- ID: `koyagyu_castle`
- Narrative class: `castle`
- Result: **strong / modern_match**
- Modern identification: Yagyū Castle ruins / Yagyū-jō site, Nara City, Yagyū-shimochō.
- Modern coordinates: `34.731021, 135.955402`.
- Evidence: the National Institute for Japanese Historical Geography dataset identifies 柳生城跡 (Yagyū Castle ruins), in Nara City, Yagyū-shimochō, with those coordinates and cites the *Nara-ken no Chimei* historical-geographical reference. citeturn3search8
- Historical compatibility: `compatible` as a castle-site anchor; the present-day ruins must not be represented as the intact Main House described by the novel.
- Decision: strong modern/historical-site match. Map note should distinguish the narrative castle complex from the surviving/identified modern ruins.

### Yagyū Kaidō / route toward Yagyū

- ID: `yamato_highroad` / related route data
- Result: **strong at route-area level; exact historical geometry not yet frozen**.
- Evidence: Nara City explicitly identifies the Yagyū Kaidō as an old road running between the Nara city area and Yagyū. citeturn2search3turn2search37
- Decision: do not draw a precise historical route yet. The current pass establishes the modern corridor only.

### Hōzōin

- ID: `hozoin`
- Narrative class: `temple`
- Result: **strong historical/site identity, but production coordinate requires care**.
- Evidence: the official Hōzōin-ryū source states that Hōzōin-ryū originated in Nara and that its founder In'ei was a monk of Kōfukuji; Nara City material likewise identifies the Hōzōin school as a Nara-origin tradition. citeturn4search3turn4search4
- Important distinction: the modern Hōzōin training dojo is **not automatically the historical Hōzōin temple**. The current Nara headquarters is at a modern budōjō in Horen-Sahoyama, while the historical Hōzōin was a sub-temple of Kōfukuji. citeturn4search0turn4search4
- Decision: keep the narrative `hozoin` identity separate from the modern training dojo. Further research is required before assigning production coordinates.

## Round 2 candidates / pending verification

The following retained locations need network or site-specific verification before production coordinates are assigned:

- `yoshioka_school`
- `yomogi_teahouse`
- `kamo_river`
- `shijo_avenue`
- `takase_river`
- `honnōji_ruins`
- `kuyado`
- `hongando`
- `cheap_inn_kyoto`
- `daigo`
- `rokuamida`
- `yamato_highroad`
- `nara`
- `ozoin`
- `abura_hill`
- `sarusawa_pond`
- `hannya_plain`
- `hannya_hill`
- `mount_mikasa`
- `yagyu_dojo`
- `yagyu_mountain_house`
- `wataya_inn`
- `kasagidera`
- `shinindo`
- `koyagyu_castle_moat`
- `tsukigase_iga_backroad`

These are not being left unresolved because of lack of effort; they are deliberately staged so that strong anchors can be used to test the ambiguous narrative sites rather than assigning coordinates independently.

## Preliminary network observations

1. Yagyū is a coherent eastern Nara geographic cluster: Tsukigase lies east of Yagyū, while the Yagyū Kaidō connects the Nara urban area with Yagyū. citeturn1search3turn2search3
2. Jōruriji is geographically plausible as part of the approach corridor toward Yagyū; its modern site is in Kizugawa, Kyoto Prefecture, and Kasagi is nearby. citeturn3search0turn3search17
3. Koyagyū Castle must be represented as a distinct site from the broader Yagyū area and from Sekishūsai's mountain house. The modern historical-geographical record supports a specific castle-site anchor. citeturn3search8
4. Hōzōin requires special treatment because the modern martial-arts headquarters and the historical temple identity are not the same geographic object. citeturn4search0turn4search4

## Next research step

Continue Round 1/2 with the Kyoto anchors first (`yoshioka_school`, `yomogi_teahouse`, `kamo_river`, `shijo_avenue`, `takase_river`, `honnōji_ruins`, `kuyado`, `hongando`), then resolve the Nara/Yagyū cluster against the established anchors. Do not modify production JSON until the complete geographic pass and the Book I character-label audit are ready.
