# Book IV — Wind: scrape, reconciliation and validation audit

Date: 2026-08-20  
Scope: `data/source/book4/chapter1-*.txt` through `chapter21-*.txt`  
Output: `research/book4-production-manifest.json`  
Production mutation: none

## Outcome

The complete Book IV corpus was read before any web research. The resulting manifest covers all 21 local files and global sections 33–53, with 116 source-referenced narrative events, 45 named character/context entities, 7 collectives, 39 locations, 14 cross-entity relationships and 13 external validation records. Every location has `coordinates: null`.

The manifest is research-complete and suitable as a preproduction input. It is not itself a production migration: no files under `data/` outside the source corpus, `js/`, `tools/`, or documentation outside `research/` were changed for this pass.

## Method and evidence boundary

1. Enumerated all 21 files, checked their titles, order and line counts, and mapped them consecutively to global sections 33–53.
2. Read the complete local corpus. Extraction recorded on-page presence separately from reports, memories, plans, letters and other mentions.
3. Built chapter-local events and end states from the text. Each event points back to its exact source file. Because the text files have no stable edition pagination, source references are deliberately file-granular.
4. Reconciled identities, aliases, deaths, injuries, departures and continuing journeys across chapter boundaries.
5. Froze the narrative extraction, then used official museum, temple and tourism sources for geography and historical context only.
6. Ran a referential audit over the JSON: sources, entity IDs, groups, locations, relationships, vocabularies, chapter sequence and coordinate policy.

Presence means a person is on-page within that chapter, including an explicitly narrated event whose participants are shown in the chapter rather than merely recalled. Mention means the person exists only in dialogue, report, memory, intention, correspondence or off-page context. A chapter's `physical_presence` and `mentioned_only` sets are disjoint.

Certainty is conservative:

- `explicit`: stated or directly narrated by the chapter, including an eyewitness report framed as fact by the narration.
- `strong_inference`: the text strongly supports the interpretation but stops short of stating it. Only the restrained reading of Musashi and Yoshino's emotional intimacy requires this label.

Movement is not inferred from mere intent. `arrival_confirmed`, `departure_confirmed` and `route_confirmed` require narrated travel; `intended_destination` records a plan; `direction_only` records only a stated direction; `uncertain` prevents a lost or underspecified route from becoming map geometry.

## Corpus coverage

| Chapter | Global | Title | Present | Mentioned | Locations | Events | End states |
|---|---:|---|---:|---:|---:|---:|---:|
| b4c1 | 33 | The Withered Field | 7 | 2 | 3 | 5 | 4 |
| b4c2 | 34 | A Man of Parts | 3 | 11 | 3 | 4 | 2 |
| b4c3 | 35 | Too Many Kojirōs | 4 | 8 | 4 | 7 | 4 |
| b4c4 | 36 | The Younger Brother | 7 | 5 | 3 | 6 | 4 |
| b4c5 | 37 | A Mother’s Love | 7 | 1 | 2 | 7 | 5 |
| b4c6 | 38 | The Urbane Craftsman | 6 | 3 | 3 | 5 | 2 |
| b4c7 | 39 | Reverberations in the Snow | 4 | 0 | 3 | 5 | 4 |
| b4c8 | 40 | The Elegant People | 9 | 1 | 2 | 4 | 2 |
| b4c9 | 41 | The Broken Lute | 7 | 0 | 2 | 4 | 2 |
| b4c10 | 42 | A Sickness of the Heart | 4 | 3 | 4 | 5 | 3 |
| b4c11 | 43 | The Scent of Aloeswood | 3 | 2 | 2 | 5 | 3 |
| b4c12 | 44 | The Gate | 5 | 5 | 4 | 6 | 3 |
| b4c13 | 45 | A Toast to the Morrow | 3 | 4 | 2 | 4 | 3 |
| b4c14 | 46 | The Death Trap | 5 | 1 | 1 | 4 | 2 |
| b4c15 | 47 | A Meeting in the Moonlight | 4 | 1 | 5 | 6 | 4 |
| b4c16 | 48 | Stray Geese | 3 | 2 | 2 | 4 | 3 |
| b4c17 | 49 | The Spreading Pine | 6 | 0 | 2 | 8 | 5 |
| b4c18 | 50 | An Offering for the Dead | 3 | 3 | 3 | 6 | 3 |
| b4c19 | 51 | A Drink of Milk | 4 | 3 | 4 | 8 | 5 |
| b4c20 | 52 | Entwining Branches | 5 | 1 | 7 | 8 | 5 |
| b4c21 | 53 | The Male and Female Waterfalls | 3 | 1 | 4 | 5 | 3 |
| **Total** | **33–53** | **21 chapters** | — | — | **39 registered** | **116** | **71 records** |

`Present` and `Mentioned` are per-chapter cardinalities, not unique-book totals. Groups such as the Yoshioka disciples are registered separately and are not inflated into invented individual people.

## Chapter extraction ledger

### 33 — The Withered Field

Tamihachi's eyewitness account establishes Musashi's one-blow victory and Seijūrō's shattered right shoulder. Kojirō amputates the arm at Seijūrō's request. The Yoshioka party carries Seijūrō home; Musashi's immediate destination is unknown. Jōtarō's search for Otsū is retained as an unresolved strand, not an Otsū presence.

### 34 — A Man of Parts

Musashi meets Myōshū and Hon’ami Kōetsu beside a brook after leaving the duel field. Tea, ceramics, sword appraisal and artistic discipline enlarge his conception of mastery. Historical and artistic names discussed by Kōetsu remain mentions. The chapter ends with the invitation to Hon’ami Lane.

### 35 — Too Many Kojirōs

Matahachi falsely assumes Sasaki Kojirō's name. Gempachi recognizes Kusanagi Tenki's pillbox, pursues him and recovers both pillbox and certificate. The real Kojirō explicitly identifies himself and Ganryū, prevents an execution, and refuses Jisai's certificate. Matahachi is left tied to a tree; Akemi escapes; Gempachi leaves toward Kōzuke.

### 36 — The Younger Brother

Denshichirō returns, frees Matahachi and assumes leadership after Seijūrō's injury. Seijūrō's warning against revenge fails; Nampo leaves the school. Denshichirō prepares to challenge Musashi at Kōetsu's residence. Seijūrō then leaves a letter and disappears; no destination is fabricated.

### 37 — A Mother’s Love

Osugi coerces Otsū into the night meeting with Matahachi. Otsū rejects him and affirms love for Musashi. Matahachi's apparent killing of Otsū is corrected by the reveal that the victim is Akakabe Yasoma. Takuan and the watchmen find Otsū unconscious but alive. Osugi and Matahachi flee.

### 38 — The Urbane Craftsman

After roughly four days at Kōetsu's home, Musashi receives Denshichirō's formal Rengeōin challenge. Kōetsu and Shōyū introduce him to the Ōgiya, where the exchange with Yoshino remains indirect in this chapter. Musashi leaves alone for the duel.

### 39 — Reverberations in the Snow

Musashi follows the snowy route through Shijō, the Kamo area and Gion woods to Rengeōin. He kills the concealed Ōtaguro first, then Denshichirō. Both deaths are explicit. Musashi hides under the structure while Genzaemon's party searches, then escapes from the north side.

### 40 — The Elegant People

Takuan mediates the courtly competition involving Shōyū, Karasumaru, Konoe and Yoshino. Musashi returns and reunites with Takuan. The group gathers in Yoshino's private cottage, where she cleans Denshichirō's blood from Musashi's sleeve.

### 41 — The Broken Lute

The Yoshioka blockade keeps Musashi inside the quarter. Yoshino's biwa lesson challenges his spiritual rigidity and reveals a deeper affinity. Attraction is strongly supported, but a sexual encounter is not explicit and is not asserted.

### 42 — A Sickness of the Heart

Otsū is feverish at Karasumaru's residence. Takuan returns from Daitokuji, learns that his mother is seriously ill, entrusts Otsū and Jōtarō to Karasumaru, and leaves for Tajima. The destination is Tajima, not Izumi. Jōtarō sets out for Yanagimachi after learning Musashi is with Yoshino.

### 43 — The Scent of Aloeswood

Jōtarō injures an Ōgiya servant, but later text confirms the servant survived. He reunites with Musashi. Kōetsu's old clothes support an escape disguise. Musashi receives Yoshino's aloeswood-scented farewell note and approaches the gate with Jōtarō.

### 44 — The Gate

Kojirō stops a street melee and converts the standoff into a formal appointment: five in the morning, the day after next, at Ichijōji's spreading pine. Genjirō, a child, is the nominal Yoshioka representative. Musashi later refuses to visit sick Otsū before a likely death; Otsū and Jōtarō meet outside after he leaves.

### 45 — A Toast to the Morrow

Osugi and Matahachi learn of the duel and plan to attend. Akemi reports that Okō left with Gion Tōji, then steals Osugi's travel money and flees. Osugi and Matahachi depart about two in the morning using a hand-drawn map.

### 46 — The Death Trap

Roughly seventy Yoshioka men deploy with bows and a musket on three approaches. Kojirō observes, supplies information about Musashi and whispers an additional trick. The trick's content is not revealed, so the manifest records the plan without inventing it.

### 47 — A Meeting in the Moonlight

Musashi prepares after meditation at Kurama and learns that his uncle Matsuo Kaname has died. Kojirō warns him at the Upper Kamo crossing. Musashi then meets the ill Otsū and Jōtarō. Musashi and Otsū explicitly confess love; Musashi nevertheless continues alone to the duel.

### 48 — Stray Geese

The preceding chapter's scream is reconciled: Jōtarō's Nara mask frightened Akemi above the ravine. Matahachi finds Akemi, persuades her to travel east and abandons Osugi on Mount Daimonji. Edo is an intention, not a confirmed arrival.

### 49 — The Spreading Pine

Kojirō observes from above. Musashi approaches by a difficult route, defeats the musket preparation, kills child Genjirō, kills Miike and several unnamed combatants, and is wounded in knee and forearm. Two-sword fighting emerges under pressure. Kobashi is struck, but his death is not established. Musashi escapes by the Shugakuin path.

### 50 — An Offering for the Dead

Musashi recuperates ten days at Mudōji and carves a Kannon for Genjirō. Enryakuji authorities expel him. Osugi's night attack fails; Musashi then nurses her through injury and fever. They depart toward Ōtsu with Osugi on a temple-supplied cow; the Kannon remains behind.

### 51 — A Drink of Milk

Osugi secretly drinks milk and escapes; only a direction toward Sakamoto/Ōtsu is known. Musashi sends a letter asking Otsū to meet at Seta. He reunites with Matahachi, learns Akemi has left, proposes a new life toward Edo and sends Matahachi to find Osugi. Kojirō's arrival crystallizes his future rivalry with Musashi.

### 52 — Entwining Branches

Musashi's letter brings Otsū and Jōtarō from the Hermitage of the Mountain Moon through Shiga Pass. The three reunite at Seta no Karahashi and travel east. Matahachi misses the rendezvous after Kojirō diverts him, then follows via the Nakasendō. Seeing Otsū with Musashi outside Nakatsugawa turns him resentful.

### 53 — The Male and Female Waterfalls

The group pauses near Magome at the Male and Female Waterfalls. Musashi's forceful advance and Otsū's rejection create a rupture. Musashi's act under the male waterfall is framed as austerity and purification, not suicide. Otsū and Jōtarō remain nearby; Edo has not been reached.

## Identity and continuity reconciliation

The most consequential corrections are encoded directly in `reconciliation.identity_constraints` and event/end-state data:

- `matahachi` and `sasaki_kojiro` remain distinct even when Matahachi uses Kojirō's name. `Ganryū` belongs to the real Kojirō.
- The body struck by Matahachi in chapter 5 is Akakabe Yasoma. Otsū survives.
- The Ōgiya servant injured by Jōtarō survives; a provisional death reading would be false.
- Denshichirō and Ōtaguro die at Rengeōin. Genjirō and Miike die at Ichijōji. Kobashi's death is not confirmed.
- Seijūrō remains alive after the amputation but disappears from the school; his destination is unknown.
- Akemi's disappearances are not collapsed into a continuous, invented route. Her departure from Matahachi in chapter 19 is explicit, her destination is not.
- Osugi's post-milk destination is unresolved. The text gives only possible direction.
- The Musashi–Otsū–Jōtarō party is eastbound at Book IV's end but has not arrived in Edo.

Cross-chapter links were also checked: the Nara-mask scream from chapters 15–16, the cow from chapters 18–20, Musashi's letter from chapters 19–20, and the Nakasendō journey from chapters 20–21 all remain continuous without manufacturing intermediate stops.

## Relationship and context summary

- Musashi and Otsū confess mutual love in chapter 15. Chapter 21 strains rather than terminates the bond; all three travelers remain at the falls.
- Musashi's mentorship of Jōtarō becomes an explicit eastward training plan.
- Kōetsu and Yoshino separately expose limitations in Musashi's conception of mastery: craft, aesthetic breadth, internal variety and emotional discipline.
- The Yoshioka conflict escalates from Seijūrō's disabling wound to Denshichirō's death and the mass Ichijōji ambush. The manifest does not generalize this into the death of every disciple.
- Kojirō shifts among rescuer, observer, mediator, tactician and rival. He does not fight Musashi in Book IV.
- Matahachi moves from identity fraud through rejection, temporary alliance with Akemi, a brief possibility of reform, and renewed jealousy.
- Musashi's care for Osugi is recorded alongside her continuing hostility; compassion does not imply reconciliation.

Named historical figures discussed as examples or background are registered as context entities rather than promoted to on-page actors. The Nobunaga/Hideyoshi material around Enryakuji, and the artistic genealogy around Kōetsu, remains context unless the narrative directly places someone in the scene.

## Web validation ledger

Web research began only after the local entity/event freeze. These sources validate names, broad site context and uncertainty; none override the novel.

| Topic | Source | Supported conclusion | Confidence and limitation |
|---|---|---|---|
| Ichijōji Sagarimatsu | [Kyoto City Official Travel Guide](https://ja.kyoto.travel/tourism/single02.php?category_id=9&tourism_id=103) | Old traffic point; present pine is fifth-generation; first stump preserved at Hachidai Shrine; Musashi/Yoshioka event presented as a famous legend. | High for modern site/tradition, low as independent proof of battle details. |
| Hachidai Shrine | [Kyoto City Official Travel Guide](https://ja.kyoto.travel/tourism/single01.php?category_id=7&tourism_id=567) | Shrine foundation and association with the old pine / traditional 1604 story. | High for shrine context; no combat geometry inferred. |
| Rengeōin / Sanjūsangendō | [Official temple history](https://www.sanjusangendo.jp/history/) | Confirms site identity, 1164 origin, rebuilding and Hideyoshi-era enclosure context. | High for site history; no support for the Denshichirō duel. |
| Enryakuji | [Official temple history](https://hieizan.or.jp/about/history.html) | Confirms long institutional history and Nobunaga's 1571 destruction. | High for broad history; Mudōji chapter events remain narrative. |
| Enryakuji chronology | [Official renovation chronology](https://www.hieizan.or.jp/renovation/overview.html) | 1571 burning, 1585 temporary hall, 1642 major reconstruction completion. | High; supports only broad plausibility of partial restoration. |
| Seta no Karahashi | [Biwako Otsu official tourism](https://otsu.or.jp/en/thingstodo/spot62) | Real, historically prominent Seta bridge and one of Japan's three famous bridges. | High for label/locality; no evidence for the rendezvous. |
| Hon’ami Kōetsu | [Kyoto National Museum](https://www.kyohaku.go.jp/old/eng/special/koremade/20151010_rinpa.html) | Kōetsu (1558–1637), calligrapher and lacquer/ceramic maker from a sword-polishing/appraisal family. | High for biography; no documented Musashi meeting established here. |
| Kōetsu ceramics | [Kyoto National Museum collection](https://knmdb.kyohaku.go.jp/eng/4559.html) | Red Raku tea bowl attributed to Kōetsu in the relevant artistic period. | High for object record; validates motif plausibility only. |
| Kōetsu calligraphy | [Kyoto National Museum collection](https://www.kyohaku.go.jp/eng/collection/meihin/kinsei/item02/) | Kōetsu calligraphy documented in the Sōtatsu crane anthology. | High for artistic range only. |
| Male/Female Waterfalls | [Nagiso Tourism Association](https://nagiso.jp/topics/o-taki-and-me-taki-waterfalls/) | O-taki/Me-taki near the Tsumago–Magome trail are explicitly identified as Yoshikawa's Musashi–Otsū scene. | High for intended literary identification; not historical biography. |
| Route chronology at falls | [Nagiso cultural guidance PDF](https://nagiso.jp/wordpress/wp-content/uploads/2021/10/taki.pdf) | Present trail and a believed late-Edo line differ; floods and landslides changed routing. | Medium-high; exact early-Edo route remains unresolved. |
| Musashi biography limits | [Kumamoto City official tourism](https://kumamoto-guide.jp/en/spots/detail/56) | Official overview acknowledges that details of Musashi's life are vague while repeating traditional accounts. | High for the uncertainty statement; precise Book IV scenes stay literary. |
| Yoshino/Kōetsu cultural memory | [Kyoto City Official Travel Guide](https://kyoto.travel/en/travel-inspiration/japanese-musical-instruments-show-tales-from-the-1000-year-capital/) | Connects Takagamine with Kōetsu and Jōshōji with the celebrated early-seventeenth-century Yoshino Tayū. | Medium for correspondence; Yanagimachi placement and exact chronology may be fictional compression. |

## Geography and coordinate policy

No latitude or longitude was copied, geocoded or guessed. This is intentional even for modern, easily searchable monuments:

- A modern shrine, bridge or waterfall point does not necessarily equal the narrative event point.
- Ichijōji's current pine is a later generation and the official source labels the battle a legend.
- Sanjūsangendō validates a temple complex, not the precise snow-duel spot.
- Seta no Karahashi validates the bridge name, not a particular early-Edo bridge footprint or tea shop.
- Nagiso's own guidance says the Nakasendō route near the falls changed. Therefore a modern trail geometry would overstate precision.
- Private homes, inns, pleasure-house rooms, marshes, fields and escape paths are unmappable or historically unresolved at the evidence level reached here.

The location registry consequently records one of: validated name/context, locality or corridor only, exact site unresolved, route not reconstructed, or unmappable narrative site.

## Referential validation

The final machine check produced:

```text
chapters:       21
source files:   21
events:         116
characters:      45
groups:           7
locations:       39
relationships:   14
web sources:     13
errors:           0
```

Checks passed:

- JSON parses successfully.
- Chapter IDs are unique and complete from `b4c1` through `b4c21`.
- Global sections are contiguous from 33 through 53.
- Every declared source file and every `source_ref` exists.
- Stored line counts match the local files.
- Event IDs are unique.
- Every character, group, location, relationship endpoint and relationship evidence reference resolves.
- Presence and mention sets do not overlap within a chapter.
- Certainty and movement status values belong to their controlled vocabularies.
- All 39 coordinate fields are null.

## Remaining uncertainty before production migration

The manifest intentionally leaves these facts unresolved rather than filling gaps:

- Seijūrō's destination after leaving the Yoshioka school.
- The complete path of Akemi's repeated escapes and her destination after leaving Matahachi.
- Kojirō's whispered Ichijōji trick.
- Kobashi Kurando's survival or death.
- Osugi's location after leaving Musashi below Mount Hiei.
- Exact historical geometry of the Kyoto duel sites and the early-seventeenth-century Nakasendō near the waterfalls.
- Whether the novel's Yoshino combines or compresses historical chronology and cultural memory.

These are data-quality boundaries, not extraction omissions. Any later production migration should preserve them as unknown, reported or intended states rather than converting them into confirmed facts.
