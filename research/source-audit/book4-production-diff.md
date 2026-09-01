# Book IV — Wind: independent source oracle vs production

## Status

- Book: **IV — Wind**
- Chapters: **21/21** (`b4c1`–`b4c21`, global sections 33–53)
- Independent source oracle: `research/source-audit/book4-source-oracle.json`
- Production provenance compared: `research/book4-production-manifest.json`
- Runtime layers additionally checked where relevant: `data/relationships.json` and the canonical production model referenced by the manifest
- Source authority: `data/source/book4/chapter*.txt`
- First-pass oracle facts: **180**

The source oracle was committed before this comparison. Production/manifests were not used to decide its contents.

## Executive result

Book IV production is **strong on the main narrative spine and on the large Yoshioka arc**, but it is not semantically exhaustive.

The most important positive result is that production correctly preserves the difficult causal chain from Seijūrō's defeat through Denshichirō, the Ichijōji ambush, Genjirō's death, Musashi's moral reaction and the eastbound aftermath. It also handles the Matahachi/true-Kojirō identity problem without merging the two people.

The independent comparison nevertheless finds four distinct weakness classes:

1. **physical-presence recall** — a small number of named on-page participants are missing and one chapter contains a clear carry-over false positive;
2. **event semantics** — several events are not merely compressed but actually reverse or misassign who did what;
3. **mentioned-character recall** — still materially weaker than physical-presence/event extraction;
4. **geographic recall** — major routes are represented, but some narratively explicit waypoints are collapsed or attached to an over-broad location.

The correct conclusion is therefore:

> Book IV is very good as a major-event interactive map, but the current data is not yet a complete semantic digitization of *Wind*.

## Strong positive findings

### The Yoshioka collapse is reconstructed unusually well

Production correctly preserves, among other things:

- Seijūrō surviving Musashi's blow and asking Kojirō to amputate his ruined arm;
- Denshichirō's return and succession to practical control of the Yoshioka house;
- Nampo Yoichibei leaving rather than support Denshichirō's revenge policy;
- Ōtaguro Hyōsuke's hidden participation at Rengeōin and Musashi killing him immediately before Denshichirō;
- the mass deployment at Ichijōji, including roughly seventy Yoshioka men, archers and a matchlock;
- thirteen-year-old Genjirō as the nominal Yoshioka standard-bearer;
- Musashi deliberately killing Genjirō and later being morally disturbed by that act;
- the emergence of Musashi's two-sword fighting under pressure;
- Musashi's recovery at Mudōji, the Kannon carving and his expulsion from Mount Hiei.

This is substantially more than a superficial duel timeline.

### Difficult identity handling remains correct

Book IV contains the direct collision between Matahachi's false `Sasaki Kojirō` persona and the real Sasaki Kojirō. Production keeps them as separate canonical people and treats Matahachi's use of the name as impersonation rather than identity equivalence.

That design should be preserved. No new identity abstraction is justified by the Book IV findings.

### Several subtle events are already modeled correctly

Production deserves particular credit for preserving facts that a less careful extraction would easily lose:

- the actual victim of Matahachi's dark-road attack is **Akakabe Yasoma**, not Otsū;
- Yoshino's broken-lute demonstration is modeled as instruction about Musashi's excessive rigidity;
- the text does **not** assert sexual union between Musashi and Yoshino;
- Musashi and Otsū's moonlight confession is represented without prematurely promoting them to a formal husband/wife relationship;
- Book IV chapter 21 explicitly preserves Musashi's forceful sexual advance, Otsū's rejection and the subsequent waterfall austerity rather than sanitizing the scene.

### Geography is conservative rather than falsely precise

The manifest consistently prefers `unmappable`, `area_only`, `route_not_reconstructed` and similar statuses instead of assigning modern point coordinates to unresolved early-Edo or narrative sites.

The geographic problem found here is principally **recall/compression**, not fabricated precision.

## Confirmed production defects

### 1. b4c1 — monkey omitted from physical presence

Classification: `missing`

The source physically places Kojirō's monkey in the aftermath scene: it is perched above the Yoshioka party, throws/pushes down pine material, responds to Kojirō's whistle and returns to his shoulder.

The chapter roster and `b4c1-e02` include Kojirō and Akemi but omit `monkey`.

This is a direct physical-presence false negative.

### 2. b4c4 — Yoshioka Kempō missing from referenced characters

Classification: `missing`

Kempō is not incidental historical color in this chapter. Seijūrō and Denshichirō repeatedly discuss their father, his reputation, his school and the burden of preserving his name while negotiating succession and revenge.

The manifest's `referenced_characters` omits `yoshioka_kempo`.

### 3. b4c6 — Rin'ya missing from physical presence

Classification: `missing`

Rin'ya is physically on-page at the Ōgiya, is addressed by name, receives instructions concerning Yoshino and runs into the snowy garden with the other attendants.

The chapter roster includes Otaguro Hyōsuke and Sumigiku but omits Rin'ya.

### 4. b4c6-e04 — the blank-paper exchange is semantically inverted

Classification: `semantic_mismatch`

This is not ordinary compression.

The source sequence is:

1. Haiya Shōyū proposes sending Karasumaru a poem asking for Yoshino;
2. Shōyū writes the opening lines and Kōetsu completes them;
3. Sumigiku carries the message;
4. Karasumaru returns a blank sheet, which Kōetsu interprets as snow and as a poetic refusal.

Production instead says:

> `Musashi's blank-paper response reaches Yoshino while she entertains Karasumaru's courtly party off-page.`

Musashi is not the author of the blank-paper response and Yoshino is not its addressee. The event currently assigns the wrong causal direction and wrong principal participant.

This should ultimately be corrected as one semantic event, not patched with a supplementary event.

### 5. b4c7 — Rin'ya, Ueda Ryōhei and Miike Jūrōzaemon omitted from physical presence

Classification: `missing`

All three are explicitly on-page:

- Rin'ya speaks with Musashi, brings him food and opens the rear gate;
- Ryōhei and Jūrōzaemon are waiting at Rengeōin and rise to greet Denshichirō.

The manifest chapter roster lists only Musashi, Denshichirō, Ōtaguro Hyōsuke and Genzaemon among named individuals.

The duel outcome itself is modeled correctly; this is a roster-recall defect.

### 6. b4c9 — Konoe Nobutada is a false physical carry-over

Classification: `misclassified`

Nobutada leaves during the preceding chapter. He is not physically present in *The Broken Lute*, yet `b4c9.characters` and `b4c9-e01` include him.

This is the same general failure class seen elsewhere in the audit: a participant from a continuous social scene is allowed to leak across a chapter boundary after the source has explicitly removed him.

### 7. b4c12-e01 — Jōtarō is incorrectly placed in the gate confrontation

Classification: `semantic_mismatch`

Before Musashi walks through Yanagimachi's main gate, he has already helped Jōtarō over the wall and sent him to wait at the Yanagi Riding Grounds.

Production says:

> `Yoshioka men surround the disguised Musashi and Jōtarō at the Yanagimachi gate.`

Jōtarō is not there. Musashi deliberately faces the gate alone.

This changes the tactical meaning of Musashi's action and should be corrected rather than treated as harmless participant compression.

### 8. b4c12-e04 — reunion at the Riding Grounds is encoded as separation

Classification: `semantic_mismatch`

Production records:

> `Musashi and Jōtarō separate at the Yanagi Riding Grounds after escaping the crowd.`

The source does the opposite: they separated **before** the gate confrontation, and after Musashi gets clear Jōtarō runs back toward Yanagimachi and meets him near the Riding Grounds. They then proceed together toward Karasumaru's residence.

The event type and causal direction are therefore reversed.

### 9. b4c14 — Kobashi Kurando's `explicit` physical presence is unsupported by this chapter

Classification: `unsupported_explicit_claim`

The chapter explicitly names Miike Jūrōzaemon and Ueda Ryōhei while the senior Yoshioka men discuss deployment. It does not identify Kobashi Kurando by name in the source-first reading. Kobashi is explicitly introduced into the combat in b4c17.

The manifest nevertheless places `kobashi_kurando` in the b4c14 physical roster and in `b4c14-e01` with `certainty: explicit`.

If an exact source span exists that unambiguously identifies him, it should be cited. Otherwise this claim should either be removed or downgraded from explicit presence. The current file-level provenance cannot justify it.

### 10. b4c17 — Hachidai Shrine is missing as a physical location

Classification: `missing`

Hachidai Shrine is a named, physical, narratively consequential stop immediately before the Ichijōji attack. Musashi:

- sees the shrine plaque;
- uses its purification basin;
- nearly rings the gong and prays for protection;
- stops himself;
- reframes the episode as recognition of his lingering attachment to life;
- thanks the deity and leaves for battle.

Production collapses this entire stop into `ichijoji_sagarimatsu` and has no `hachidai_shrine` location record.

For a movement map this is a genuine waypoint omission, not merely literary commentary.

### 11. b4c20-e06 — the brothel delay is attached to Seta's Kara Bridge without textual support

Classification: `geography_mismatch`

Kojirō intercepts/detains Matahachi at a brothel while Matahachi is still trying to reach the Seta rendezvous. The source does not establish the brothel as being at Kara Bridge.

Production assigns the event's `location` to `seta_karahashi`.

The safer representation is an unresolved route-side brothel/location or no exact location, while retaining Seta as Matahachi's intended destination. The current record turns an intended destination into a confirmed scene location.

## Confirmed compression / secondary coverage gaps

These do not all require runtime events, but they matter if the product claims exhaustive semantic coverage.

### b4c1 — Kojirō/Akemi coercion is underrepresented

After Seijūrō's amputation, the source continues the coercive Kojirō–Akemi dynamic and explicitly connects Akemi's fear, revulsion and inability to leave him. Production preserves both characters but does not give this relationship state a dedicated event.

### b4c4 — Matahachi's deception of Denshichirō is compressed out

Matahachi invents a self-serving story in which Musashi abducted his fiancée and he and Osugi are heroic revenge-seekers. This helps align him temporarily with the Yoshioka faction. Production records his release but not the false narrative he supplies.

### b4c15 — the approach to Ichijōji is geographically over-compressed

The source distinguishes a series of route alternatives and waypoints: Upper Kamo crossing, Takano River, Ohara road, Shugakuin direction, Uryū/Kagura/Shiga hill approaches and the Ginkakuji-side path/spring where Musashi meets Otsū and Jōtarō.

Production uses the broad `ichijoji_mountain_approach`. This is defensible for conservative mapping, but it is not complete route recall.

### b4c17 — the Hachidai spiritual crisis is compressed into an approach event

`b4c17-e02` preserves the broad idea that Musashi purifies himself without entrusting the result to a deity, which is good. It does not preserve the important causal sequence in which he first almost asks for supernatural aid, recognizes this as evidence of hidden fear/attachment and then deliberately converts prayer into gratitude.

This is acceptable for a concise map event, but the semantic/wiki layer should not treat it as fully extracted.

### b4c20 — the Nakasendō chase is corridor-level

The event description correctly retains Kusatsu, Hikone, Toriimoto and Suribachi Pass, while the location model groups them into `nakasendo_omi_mino` plus `nakatsugawa`.

That is reasonable compression if documented as such. It should not be reported as complete waypoint coverage.

## Referenced-character recall

Mention extraction remains Book IV's weakest character category.

Confirmed or strongly source-supported omissions include:

- b4c1 — Osugi and Yoshioka Kempō;
- b4c4 — Yoshioka Kempō;
- b4c8 — Otsū and Jōtarō, explicitly recalled by Takuan;
- b4c11 — Otsū, Takuan and Myōshū; Musashi also thinks explicitly of his sister, canonically Ogin;
- b4c14 — Seijūrō and Denshichirō; Akemi is the identifiable woman behind Kojirō's intelligence even though he withholds her name in his speech;
- b4c17 — Otsū and Jōtarō in Musashi's pre-battle thoughts;
- b4c18 — Seijūrō, Denshichirō and Otsū;
- b4c19 — Yoshioka Kempō, Genjirō, Seijūrō and Denshichirō during Kojirō's public critique;
- b4c20 — Karasumaru Mitsuhiro in the delivery chain/context;
- b4c21 — Osugi through the unambiguous reference to Matahachi's mother.

As in Book III, physical-presence coverage and mention coverage must remain separate metrics. Combining them into a single character score would hide a real recall weakness.

## First-pass oracle self-corrections

The reverse comparison exposed several production facts that were then rechecked against the source and found to be correct. These are errors in the frozen first-pass oracle, **not** production defects:

- b4c2 — the oracle incorrectly wrote `nikkan`; the tea-related recollection is **Takuan** alongside Yagyū Sekishūsai;
- b4c3 — **Akemi is physically present**, initially in the tree while Matahachi and the true Kojirō confront one another; the oracle had omitted her from the physical roster;
- b4c4 — **Nampo Yoichibei's departure from the school** and **Seijūrō's later disappearance after leaving a long letter** were omitted from the first-pass event list;
- b4c5 — the man Matahachi actually kills is explicitly identified as **Akakabe Yasoma**, not merely an unnamed sick/disturbed rōnin;
- b4c6 — **Ōtaguro Hyōsuke** physically delivers Denshichirō's challenge and **Sumigiku** is physically present at the Ōgiya; both were omitted from the first-pass physical roster;
- b4c8 — **Rin'ya** is physically present, not merely a functional unnamed/secondary actor;
- b4c11 — **Yoshino is not physically on-page** in this chapter; Rin'ya is. The oracle also omitted Rin'ya's delivery of Yoshino's aloeswood-scented farewell note;
- b4c17 — **Kobashi Kurando** is physically and explicitly present during the battle and is struck by Musashi; conversely, the first-pass oracle's `ueda_ryohei` physical presence in b4c17 is not supported by the chapter text.

Rin'ya in b4c6 and b4c7 is a useful third category: the first-pass oracle and production both missed her physical presence. Independent comparison alone would not have corrected that unless the chapter text was revisited.

The oracle remains the frozen first extraction. A later normalized oracle may correct these items, but only if the audit trail remains explicit.

## Relationships and identity

Book IV does **not** reveal a new structural relationship-model failure.

Important thresholds are sensible:

- Musashi → Kōetsu acquaintance/artistic influence: section 34;
- Musashi → Denshichirō enemy/formal duel: section 38;
- Musashi → Yoshino acquaintance/care: section 40;
- Matahachi → Akemi temporary eastbound companionship: section 48.

Most importantly, the mutual Musashi/Otsū confession in section 47 should **not** automatically become the later `partner_family` relationship. Otsū says that regarding herself as his bride in his heart would be enough, but the text does not establish a ceremony or an unambiguous mutual husband/wife status at that point.

Keeping the existing `deep_personal_bond` and delaying the stronger partner relationship avoids a spoiler-prone overinterpretation.

## Provenance judgment

Book IV's manifest explicitly uses:

> `source_ref_granularity: file`

That is adequate to prove which chapter supports a record, but insufficient to prove **where within a 300–800-line chapter** a physical presence, identity claim or event semantic comes from.

The defects in `b4c6-e04`, `b4c12-e01`, `b4c12-e04` and the unsupported `b4c14` Kobashi claim demonstrate the limit directly: all point to the correct source file, yet the semantic claim can still be wrong.

For future high-risk facts, span-level provenance has high leverage:

- physical presence;
- identity reveal/impersonation;
- death/injury target;
- movement origin/destination;
- relationship threshold.

This should be implemented as an audit/provenance improvement, not exposed as runtime complexity to consumers.

## Geography judgment

Book IV geography has:

- **precision:** high;
- **major-location recall:** high;
- **intermediate waypoint recall:** incomplete;
- **uncertainty handling:** strong.

The clear missing waypoint is Hachidai Shrine in b4c17. The main semantic location error is the b4c20 brothel scene being attached to `seta_karahashi` even though Seta is the intended rendezvous, not established as the brothel's scene location.

The right fix is not to geocode more aggressively. It is to represent additional source locations while preserving `unresolved`/corridor semantics where exact correspondence is unknown.

## Chapter-by-chapter judgment

| Chapter | Physical roster | Major events | Mentions | Geography/movement | Overall |
|---|---|---|---|---|---|
| b4c1 | **monkey missing** | strong | Osugi/Kempō incomplete | good | needs minor correction |
| b4c2 | strong | strong | strong after oracle correction | good | very good |
| b4c3 | strong | very strong | good | strong | very good |
| b4c4 | strong | strong | **Kempō missing** | good | good |
| b4c5 | strong | **excellent mistaken-victim handling** | good | good | excellent |
| b4c6 | **Rin'ya missing** | **blank-paper event wrong** | good | good | needs correction |
| b4c7 | **Rin'ya/Ryōhei/Miike missing** | duel/deaths excellent | some refs omitted | strong | good after roster fix |
| b4c8 | strong | strong | **Otsū/Jōtarō missing** | good | very good |
| b4c9 | **Konoe false positive** | lesson strong | acceptable | good | needs correction |
| b4c10 | strong | strong | some secondary refs omitted | good | very good |
| b4c11 | production physical roster better than first oracle | strong | several refs missing | good | very good |
| b4c12 | strong | **two semantic inversions** | good | good | needs correction |
| b4c13 | strong | strong | strong | good | very good |
| b4c14 | one unsupported explicit presence | strong ambush model | incomplete | strong | good, provenance fix needed |
| b4c15 | strong | excellent | secondary refs compressed | **approach over-compressed** | very good |
| b4c16 | strong | strong | good | good | very good |
| b4c17 | strong after oracle correction | excellent battle model | refs incomplete | **Hachidai missing** | very good with map gap |
| b4c18 | strong | excellent moral aftermath | refs incomplete | good | very good |
| b4c19 | strong | strong | Yoshioka refs incomplete | good | very good |
| b4c20 | strong | strong | some refs missing | **brothel location mismatch / corridor compression** | good |
| b4c21 | strong | **excellent explicit handling** | Osugi missing | strong | excellent |

## Root-cause diagnosis

Book IV reinforces the diagnosis from Book III.

The architecture does not need a new runtime layer. The main model is already deep enough:

- canonical identities are separate from display identities;
- events own narrative state changes;
- locations permit uncertainty instead of demanding coordinates;
- relationships have temporal thresholds.

The remaining defects come from **extraction and semantic validation**, not from a lack of domain objects.

Three failure modes are now especially clear:

1. **chapter-boundary carry-over** — e.g. Konoe in b4c9;
2. **actor/direction inversion inside otherwise valid events** — e.g. the blank-paper exchange and Riding Grounds event;
3. **destination/scene conflation** — e.g. the route-side brothel assigned to Seta's Kara Bridge.

A structural validator cannot catch these because every referenced ID and file can be valid while the proposition itself is false.

## Remediation order after the full seven-book audit

Do not patch Book IV piecemeal while Books V–VII remain independently unaudited. Remediate by invariant class after the corpus-wide diff is complete:

1. **event semantic correctness** — wrong actors, reversed movement/reunion semantics and scene/destination conflation;
2. **physical-presence chapter boundaries** — missing on-page names and carry-over false positives;
3. **high-risk provenance spans** — physical presence, identity, death/injury and movement endpoints;
4. **geographic waypoint recall** — add meaningful source waypoints such as Hachidai without inventing coordinate precision;
5. **referenced-character recall** — improve the wiki/context layer separately from physical-presence coverage;
6. regenerate derived audits and run full CI after old incorrect representations are removed.

This keeps the remediation systemic: one invariant class at a time, with no chapter-specific runtime flags or parallel production model.