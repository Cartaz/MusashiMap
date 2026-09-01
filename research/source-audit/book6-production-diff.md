# Book VI — Sun and Moon: independent source oracle vs production

## Status

- Book: **VI — Sun and Moon**
- Chapters: **17/17** (`b6c1`–`b6c17`, global sections 80–96)
- Independent source oracle: `research/source-audit/book6-source-oracle.json`
- Production provenance compared: `research/book6-production-manifest.json`
- Runtime layers additionally checked where relevant: `data/characters.json`, `data/identities.json`, `data/relationships.json` and canonical production data referenced by the manifest
- Source authority: `data/source/book6/chapter*.txt`
- First-pass oracle facts: **169**

The source oracle was committed before the Book VI production manifest was opened. Production data therefore did not determine what the independent pass considered present in the text.

## Executive result

Book VI production preserves the **major plot spine, final states and spoiler-sensitive identity reveals very well**, but the independent source comparison shows that *Sun and Moon* stresses the current extraction model more severely than Book V.

The reason is not primarily more movement complexity. Book VI repeatedly advances the story through changes in **belief, doctrine, allegiance, succession, reputation and moral judgment**. A small action-oriented event set can describe where the characters go while still losing why the chapter matters.

Production successfully preserves, among other things:

- Tadatoshi's parallel interest in Kojirō and Musashi;
- Kojirō's interview and violent test against Okatani Gorōji;
- Matahachi and Akemi's unstable cohabitation and separation;
- Daizō recruiting Matahachi into the Hidetada assassination plot;
- Tadaaki's defeat/retirement and Toranosuke's expulsion;
- the Mitsumine ambush and Musashi's arrest;
- Gonnosuke killing Okō;
- Daizō/Jōtarō's treasure movement and Jōtarō's confession;
- the reveal `Daizō -> Mizoguchi Shinano` at the correct narrative point;
- Matahachi and Akemi's lenient punishment and banishment;
- Kojirō becoming a Hosokawa vassal and sending Musashi a future challenge;
- cancellation of Musashi's shogunal appointment;
- Musashi leaving Iori in Gonnosuke's care;
- the Otsū/Iori sibling clue being kept as a **strong inference**, not promoted to explicit fact.

The principal weakness classes are:

1. **semantic-event compression** — doctrine, succession, reputation strategy and chapter-defining changes disappear between coarse action events;
2. **setup-to-consequence gaps** — a causal setup can exist in the character roster but have no event, making a later consequence appear unprepared;
3. **current-scene / route / destination leakage** — some events are assigned to a convenient route or destination rather than the actual action scene;
4. **relationship normalization that erases coercion** — most notably Daizō–Jōtarō;
5. **manifest canonical-ID drift** — provenance occasionally creates a second ID for a person whose runtime identity is already canonicalized.

The correct conclusion is:

> Book VI is reliable as a major-plot and state model, but it is materially less complete as a semantic chapter model than its internal validation alone suggests.

## Strong positive findings

### Spoiler-sensitive identity timing is excellent in runtime

The runtime identity layer gets the difficult reveals right:

- `mikogami_tenzen` remains the canonical person while the reader-facing name changes to **Ono Tadaaki** only when the text explicitly links the identities in b6c8;
- `daizo` remains **Daizō** until Takuan reveals **Mizoguchi Shinano** in b6c14;
- Tsujikaze Kōhei / Shishido Baiken remains one person rather than being split by the later alias encounter.

This is exactly the kind of information hiding required for a spoiler-safe map. It should not be redesigned.

### Production is careful with uncertainty

Several states are deliberately conservative:

- b6c2 does **not** mark Yogorō dead before the next chapter confirms the outcome;
- Gion Tōji's death in the Mitsumine ambush is kept at `strong_inference` rather than explicit certainty;
- Tadaaki's supposed “madness” is represented as public rumor, while the direct source fact is retirement/withdrawal;
- Musashi's release in b6c14 is described as an off-page/report event;
- the b6c17 Otsū/Iori kinship is `strong_inference`, matching what Takuan can infer from the testament and flute clue rather than pretending a sibling reunion occurred.

These safeguards should remain.

### Some chapter-defining insights are already modeled

Book VI also contains a useful positive counterexample to the compression problem: b6c10 explicitly records the **two-drumsticks technical insight** that gives Musashi a conscious formulation of his two-sword principle.

This demonstrates that the current event model is capable of representing non-travel/non-combat semantic changes; the extraction policy simply needs to apply that standard consistently.

## Confirmed production defects

### 1. b6c3 — Yogorō's corpse is physically present but classified only as referenced

Classification: `misclassified`

At the opening of *The Eagle*, Yogorō's dead body is physically present at the Isarago cemetery scene. Kojirō sees it, recognizes the youth he cut down and gives money for flowers and incense.

The manifest event `b6c3_e1` describes the corpse discovery but keeps `obata_yogoro` under `referenced_characters`. The chapter roster likewise omits Yogorō from physical `characters`.

This conflicts with the project's own `present_in` semantics: physical on-page presence is physical presence even if the character is dead. Book V already applies this rule correctly to San'emon's corpse.

This is therefore a true presence-classification defect, not a matter of granularity.

### 2. b6c4 — the Umpei well-digger offer is omitted despite being the causal bridge into b6c7

Classification: `missing`

Umpei is physically present and offers Matahachi unusually well-paid work with the well-digging crews inside Edo Castle.

Three chapters later Daizō's assassination plan depends on exactly this access route: Matahachi is to enter the castle as one of Umpei's well diggers.

Production keeps `umpei` in the b6c4 physical roster but gives him no event or state. The result is a broken setup-to-consequence chain:

`Umpei offers castle access -> Daizō learns/uses that access -> assassination infiltration`

The first node is absent from structured events.

This is a stronger omission than an incidental character lacking an action because it removes the causal explanation for a later plot mechanism.

### 3. b6c5 — Kagenori's death and Shinzō's Obata succession are omitted

Classification: `missing`

Shinzō brings more than news of Yogorō's death. He explicitly reports that **Obata Kagenori has died** and explains that, with Yogorō also dead, arrangements through Hōjō Ujikatsu and Yagyū Munenori will make Shinzō Kagenori's heir and successor to the Obata name.

Production `b6c5_e2` preserves Yogorō's death and the invitation to Ujikatsu's residence, but not:

- Kagenori's death;
- Shinzō's succession/adoption;
- Munenori's role in the arrangement.

This is a material status and relationship change, not background color.

### 4. b6c6 — the sword-to-peace/government doctrine is missing as a semantic event

Classification: `compressed`

Production correctly preserves the staged Munenori test and the combined appointment/marriage proposal.

What it does not preserve is Musashi's major internal reformulation of the Way:

- the sword should not be a means of conquest or mere killing efficiency;
- it should establish order and protect rather than destroy;
- martial discipline should refine the spirit;
- its ultimate public use should contribute to peace and good government;
- Musashi still considers himself too immature to embody that ideal fully.

This is one of Book VI's central developmental events and directly prepares the later “sword + pen” revision in b6c17.

It does not necessarily need to become a map pin, but an exhaustive semantic audit cannot treat it as covered by `recommendation_plan`.

### 5. b6c8_e1 — wrong group is attached to Osugi's abduction

Classification: `semantic_mismatch`

`b6c8_e1` says Toranosuke's group abducts Osugi, but attaches `groups:["hangawara_gang"]`.

The abductors are **Hamada Toranosuke and Ono-school students**. Hangawara/Yajibei are on Osugi's side of this particular incident: Yajibei helps alert Kojirō after she vanishes.

The chapter legitimately contains both Hangawara and Ono groups, but the event assigns the wrong faction to the abduction itself.

This is a direct actor/faction attribution error.

### 6. b6c8 — Kojirō's route to the Ono residence is materially incomplete

Classification: `missing`

The source explicitly follows Kojirō through:

- the **Takanawa highroad** to Yajibei's house;
- questioning Yajibei;
- **Kanda Hill**;
- **Saikachi Slope / Ochanomizu**;
- the Ono residence/dōjō.

The Book VI chapter location list contains only `hamacho_house` and `ono_dojo` for b6c8. `takanawa_highroad` exists in the same Book VI location registry but is attached only to b6c3.

This proves a real missed occurrence, not merely a location that the model deliberately lacks.

The intermediate Kanda/Saikachi/Ochanomizu movement is also absent.

### 7. b6c8_e2 — Tadaaki's capitulation and later responsibility are conflated

Classification: `semantic_mismatch`

The event says:

> “After Tadaaki concedes responsibility for his students, Kojirō attacks and cuts his topknot...”

The source sequence is more specific:

1. Tadaaki fights/evaluates Kojirō and concludes the younger swordsman represents a new generation he cannot defeat normally;
2. he **capitulates as a fighter**;
3. Kojirō attacks immediately after that capitulation and cuts the topknot while Tadaaki cuts Kojirō's sleeve;
4. only in the aftermath does Tadaaki fully address the failures of his students, reform the school, expel Toranosuke and accept institutional responsibility.

Combining these changes the meaning of the duel and weakens the ethically important fact that Kojirō strikes after an explicit concession.

### 8. b6c9 — the chapter-defining compassion doctrine is omitted

Classification: `compressed`

Production records the typhoon, Musashi helping neighboring farmers, the journey and the burial of old battlefield bones.

The title *The Poignancy of Things* is completed by Musashi's explicit lesson to Iori: a true samurai and swordsman must possess **compassion and sensitivity to the fragility/value of life**, not merely the skill to destroy it.

This is a material belief change/teaching event and should be represented in the semantic/context layer.

### 9. b6c11 — the Mitsumine battle is localized at Kosaruzawa Bridge rather than the inner-shrine approach

Classification: `geography_mismatch`

Kosaruzawa Bridge is where Baiken's group assembles and disperses into prepared positions.

Musashi and Iori then climb farther toward the **inner shrine**, and the gunshot/ambush occurs in the ancient cryptomeria forest on that approach.

`b6c11_e1` assigns `kosaruzawa_bridge` as the battle location, and the Baiken/Gion Tōji end states inherit the same location.

This repeats the current-scene/container problem seen in Books IV–V: a nearby waypoint is not automatically the location where the represented action occurs.

### 10. Book VI manifest — Shishido Baiken/Tsujikaze Kōhei uses a parallel canonical ID

Classification: `normalization_drift`

The manifest defines a character `baiken` with aliases `Tsujikaze Kōhei` and `Kōhei`.

Canonical runtime data already uses the person ID **`kohei`**, with Tsujikaze Kōhei as the canonical person and the Shishido Baiken identity handled by the temporal identity layer.

Creating `baiken` inside the Book VI provenance manifest introduces a second internal identifier for the same person.

This does not currently break the runtime display because runtime remains canonicalized correctly, but it increases cognitive load and makes future automated cross-layer diffs less reliable.

The invariant should be:

> Production manifests use the same canonical person ID as runtime; temporal/assumed/revealed names belong in identity metadata, not new person IDs.

### 11. Book VI manifest — Ono Tadaaki similarly diverges from the canonical runtime ID

Classification: `normalization_drift`

Runtime uses canonical person ID **`mikogami_tenzen`** and changes the reader-facing identity to Ono Tadaaki at b6c8 when the text explicitly connects the names.

The Book VI manifest instead uses `ono_tadaaki` as a local character ID.

Again, the reader-facing behavior is good; the problem is a duplicated internal namespace in provenance.

### 12. b6c12 — the Iori–Jōtarō duel and “brother disciples” recognition are missing

Classification: `missing`

This is one of the clearest event-recall omissions in Book VI.

Iori follows Jōtarō believing him to be a thief. The two fight seriously, with Iori applying Musashi's eye-training lesson. They climb/fight in the tree and each is prepared to injure or kill the other.

The confrontation changes when Iori declares himself **Misawa Iori, disciple of Miyamoto Musashi**. Jōtarō realizes they share the same teacher and reveals that he too was Musashi's pupil.

They are therefore the **Brother Disciples** of the chapter title. They still fall together and are knocked unconscious before Takuan finds them.

Production events cover Okō's death, the treasure discovery, Tanzaemon's near-reunion and Jōtarō's confession, but omit the title-defining duel/relation reveal entirely.

### 13. Book VI relationship `Daizō -> Jōtarō = father_son` overstates the source and erases coercion

Classification: `semantic_mismatch`

The Book VI manifest says:

> “Jōtarō is explicitly Daizō's son...”

That is not what the source establishes.

In Book V Daizō forced Jōtarō into a claimed adoption under threat of death after catching him observing the hidden gold. The production layer correctly described that as **coercive claimed guardianship**, explicitly warning not to normalize it as consensual adoption.

In b6c12:

- Iori gets the *impression* that Daizō and the young Jōtarō may be father and son;
- Jōtarō calls Daizō his trainer/leader and explains four years of training and ideological loyalty;
- no source passage retroactively establishes ordinary biological or consensual father-son status.

The runtime relationship layer also adds a later `family/father_and_son` edge at section 91, so this is not provenance-only drift.

The correct longitudinal representation is closer to:

- coercive claimed adoptive guardian;
- later trainer/ideological leader and conspiratorial superior;
- Jōtarō may personally behave like a devoted son, but the origin and coercive nature of the relationship must not disappear.

This should be repaired after Book VII so later evidence can be checked before final normalization.

### 14. b6c14_e3 — Musashi's release is causally compressed into Hidetada's later leniency judgment

Classification: `compressed`

The event combines:

- Hidetada approving leniency;
- Musashi's release;
- Matahachi/Akemi's flogging and banishment.

The source chronology is more careful. Musashi's release is reported independently after the Mitsumine misunderstanding is resolved and he is handed to Gonnosuke. Takuan later advises Hidetada not to consume the government in hunting every conspirator; Hidetada then orders light punishment and lets Takuan shape penalties.

The outcomes are compatible, but the combined event can suggest a causal chain the text does not explicitly assert.

For exhaustive semantics these should remain separate: `misidentification resolved -> Musashi released` versus `shogunal clemency policy -> conspiracy punishments kept light`.

### 15. b6c15 — Osugi's systematic anti-Musashi political campaign is omitted

Classification: `missing`

The chapter does not merely show Osugi traveling with Kojirō.

The narration explicitly explains that she has spent the preceding period trying to block Musashi's shogunal appointment by:

- denouncing him at the Yagyū house;
- denouncing him at the Hōjō house;
- repeating the accusations wherever government ministers' servants would admit her;
- throwing malicious written accusations into official compounds.

This is the causal setup for the adverse reports that help kill the appointment in b6c16/b6c17.

Production contains no event for that campaign.

Like Umpei's well-digger offer, this is a setup-to-consequence omission: the later outcome exists, but its structured causal precursor does not.

### 16. b6c16_e1 — Iori is falsely co-located with Shinzō and Musashi at the Musashino cabin

Classification: `semantic_mismatch`

The event says:

> “Iori returns and Shinzō brings the official summons for Musashi's appointment.”

and includes Iori, Shinzō and Musashi at `musashino_cabin`.

The source sequence is:

1. Iori returns the borrowed horse to the **Hōjō residence**;
2. an official summons arrives there;
3. **Shinzō and an attendant** ride to Musashi's Musashino cabin;
4. Shinzō tells Musashi “I've come for you” and brings him back to Ushigome.

Iori is not physically in the Musashino summons scene.

This is the same aggregation bug class already found elsewhere: adjacent actions are merged into one event and their participants become falsely co-located.

### 17. b6c17 — San'emon is missing from referenced characters despite his testament driving the chapter reveal

Classification: `missing`

The inherited pouch contains San'emon's written testament. Takuan reads it, learns that San'emon and his wife abandoned a daughter at a temple and uses its clue to infer a connection to Otsū.

The Book VI chapter roster lists Otsū and Osugi as referenced characters but not San'emon.

This is a direct mention/document-provenance omission.

### 18. b6c17 — Musashi's “sword and pen” revision is missing as a semantic event

Classification: `compressed`

Production correctly preserves Musashi's departure, transfer of Iori's guardianship, kinship clue and the group's failed attempt to catch him before he leaves.

Before leaving, however, Musashi explicitly revises his political/martial ambition:

- sword and good government should ultimately be aligned;
- the Way of Government cannot rest on military art alone;
- a sound polity requires the **blending of military and literary arts**;
- before attempting to govern others, Musashi must learn from the nation/world itself;
- he therefore chooses further wandering rather than official status.

This is not decorative philosophy. It is the direct causal reason his departure is experienced as progress rather than defeat.

## Confirmed compression / secondary coverage gaps

The following facts need not all become individual runtime events, but they prevent an exhaustive semantic claim if left unrepresented everywhere.

### b6c1 — Tadatoshi's independence from crowd judgment

The two production events preserve candidate comparison and the search/interview orders. The source also makes an important distinction: while most retainers accept the public anti-Musashi notices, Tadatoshi becomes more interested precisely because he refuses to treat popular reputation as evidence.

This helps explain the Hosokawa interest that persists later.

### b6c2 — Osugi's relocation and continuing vendetta plan

Osugi's visit to Kojirō is not merely social. She intends to leave Yajibei, move near Yoroi Ferry and resume an independent search for Matahachi and Musashi. The chapter event budget excludes that trajectory.

### b6c3 — Kojirō's visits are explicitly reputation strategy

`b6c3_e3` says the visits strengthen Kojirō's position, which is broadly correct. The source is unusually explicit that Kojirō wants the defeated Gorōji to praise him publicly and understands reputation as capital in a political appointment process.

This should remain available to the context layer because it distinguishes compassion from strategy.

### b6c4 — Matahachi/Akemi cohabitation is not marriage

Production's Book VI relationship wording `cohabitation_then_separation` is appropriately cautious. Keep it that way. The source explicitly states Akemi has not committed herself to legal marriage and sees the arrangement as temporary.

### b6c6 — proposed Musashi/Otsū marriage is not a relationship-state transition

Takuan, Ujikatsu and Munenori discuss reuniting and eventually marrying them. Musashi remains reluctant and no marriage occurs here.

Production correctly treats this as a proposal rather than back-propagating the much later mutually acknowledged partnership.

### b6c7 — Akemi's new patronage and surveillance role

The manifest's final state captures that Akemi is working for/following Daizō. The action sequence — hiding with Daizō, following Matahachi on command and enabling immediate recovery of the gold — is compressed but not wholly absent.

### b6c8 — Tadaaki's institutional reform is larger than “retirement”

Tadaaki:

- declares his generation superseded;
- orders his remaining students to turn the school into a genuine training ground rather than a complacent institution;
- entrusts his son to Itō Magobei;
- expels Toranosuke specifically for cowardly revenge methods;
- releases Osugi;
- leaves Edo.

Production preserves retirement/expulsion but compresses the institutional lesson.

### b6c11 — the Baiken fight reuses the two-system principle

The production battle event has correct aggregate casualties, but the source explicitly shows Musashi recognizing the ball-and-chain/sickle as another two-part system analogous to his new two-sword formulation. It is the immediate tactical breakthrough that lets him solve Baiken's weapon.

### b6c12 — Takuan's critique of ideological “good works”

Jōtarō claims the treasure theft serves the public and that Daizō's work is selfless. Takuan responds that an inexperienced person who does not know himself can cause harm while claiming to know what is good for society.

This is a central ideological reversal in Jōtarō's arc and helps explain why the confession changes allegiance rather than merely supplying police information.

### b6c13 — Iori's pity after humiliating Osugi

The event captures the pomegranate/manure retaliation. The source then turns the joke into a moral beat when Iori sees Osugi crying and feels shame, caught between pity and anger.

### b6c16 — the cancellation is a reversal of “glory,” not merely a failed appointment

Production correctly records the cancellation and painting. The source makes Musashi's genuine relief, the question “inside or outside the gate?” and the rising-sun painting one coherent reversal: institutional rejection becomes confirmation of independence.

## Referenced-character recall

As in Books III–V, referenced-character recall is weaker than physical-presence recall.

Confirmed or source-supported gaps include at least:

- b6c1 — Hosokawa Tadaoki is explicitly part of the household/candidate discussion context but absent from `referenced_characters`;
- b6c2 — Yajibei and Shinzō are explicit narrative references omitted from the chapter roster;
- b6c5 — Kagenori and Munenori are omitted despite the death/succession report;
- b6c6 — Hyōgo, Sekishūsai and other named participants in the Otsū/appointment discussion are omitted from the narrow reference roster;
- b6c9 — Jōtarō is explicitly invoked in Musashi's comparison with Iori but the manifest has no referenced characters;
- b6c10 — Gonroku appears in Musashi's childhood memory but is omitted;
- b6c11 — Temma is explicitly invoked by Baiken as his brother and reason for revenge but the manifest has no referenced characters;
- b6c12 — Otsū is explicitly remembered by Jōtarō but omitted from the chapter roster;
- b6c17 — San'emon is omitted despite his testament being read and interpreted.

The exact production role of some historical names can remain in the historical/context layer, but these examples again prove that **presence coverage and mention coverage require separate completeness metrics**.

## First-pass oracle self-corrections

Reverse comparison exposed several source facts that the frozen first pass normalized incorrectly or too aggressively.

### b6c4 — the Donjiki attacker is Toranosuke's elder brother, not Toranosuke

The chapter itself initially calls the man simply “Hamada.” A later Book VI passage explicitly clarifies that the man Kojirō killed at Donjiki was **Hamada Toranosuke's elder brother**.

Production's `hamada_elder_brother` normalization is therefore correct.

The first-pass oracle's use of `hamada_toranosuke` in b6c4 is an oracle error and must not be counted as a production defect.

### b6c5 — Kojirō belongs among the source references

The news of Yogorō's death is inseparable from the fact that Yogorō went after Kojirō. Production includes `kojiro` in the chapter reference roster. The first-pass oracle reference array under-recorded that explicit name.

### b6c14 — Sakai Tadakatsu is physically present in the political/release sequence

The source explicitly has Lord Sakai receive the report of Musashi's release and communicate with Takuan. Production includes `sakai_tadakatsu` in the physical chapter roster.

The oracle's initial physical-character list omitted him.

### b6c16 — Osugi is not a strict on-page named reference in this chapter

The chapter discusses adverse gossip and the later narrative makes Osugi's role clear, but b6c16 itself does not need Osugi in the strict chapter `referenced_characters` set merely because she is the known source of the campaign.

The oracle's initial inclusion of `osugi` is therefore too aggressive under the strict source-only mention rule.

### b6c15 — Kakubei should remain a cautious normalization case

The source says the Hosokawa advance party is **under Kakubei's command**, which strongly associates him with the traveling group, but does not give him the same direct scene action as Kojirō or Osugi.

Production omits Kakubei from the chapter physical roster. This audit does not classify that omission as a definite defect without a stricter policy for off-focus commanders traveling with a depicted party.

## Relationships and identity

Book VI shows both excellent relationship discipline and one important regression.

### Good

- Musashi–Iori remains teacher/guardian and later transfers practical care to Gonnosuke;
- Musashi–Kojirō remains pending rivalry/challenge rather than premature duel resolution;
- Kojirō–Tadatoshi correctly transitions candidate -> Hosokawa vassal;
- Matahachi–Akemi remains cohabitation then separation rather than being normalized as marriage;
- Gonnosuke–Musashi correctly becomes ally/custodian;
- Iori–Otsū is kept `probable_siblings` / `strong_inference`.

### Needs correction

Daizō–Jōtarō must preserve the **coercive origin** of the claimed adoptive/guardian relationship. Book VI's `father_son` normalization loses information that Book V correctly protected.

A longitudinal relationship model should be allowed to evolve without erasing earlier contract semantics. “Later family-like behavior” does not rewrite “initially forced under threat of death.”

## Geography assessment

Book VI keeps the project's conservative mapping policy: no narrative point is fabricated from a modern namesake, exact private residences remain unresolved and even potentially anachronistic `Nobidome` is explicitly blocked rather than geocoded confidently.

That design remains strong.

The problems are again **coverage and event assignment**, not overconfident coordinates.

Confirmed geography findings:

- b6c8 omits the Takanawa occurrence and Kanda/Saikachi/Ochanomizu route into the Ono scene;
- b6c11 uses Kosaruzawa Bridge for the actual inner-shrine battle even though the bridge is an earlier assembly/route point.

These strengthen the corpus-wide invariant already suggested after Book V:

> Event `location` means where the represented action occurs. A prior waypoint, broad route, institutional affiliation or intended destination must not be substituted merely because it is the nearest canonical location available.

When the exact scene lacks a safe canonical point, the correct answer is a broader/coordinate-free narrative area or an unresolved location — not false precision.

## Root-cause diagnosis

Book VI reveals four design/process causes rather than a collection of unrelated chapter mistakes.

### 1. Action-biased event extraction

A fixed small event budget naturally retains:

- arrival;
- departure;
- fight;
- arrest;
- death;
- appointment;

while dropping:

- doctrinal change;
- succession;
- reputational strategy;
- moral realization;
- causal setup;
- relationship reinterpretation.

Book VI makes those omitted categories central to the story.

The extraction rule should therefore be semantic rather than numeric:

> If a chapter produces a material change in location, state, identity, relationship, important information, consequential decision, durable belief/doctrine or causal capability, it must either receive structured representation or an explicit intentional-exclusion rationale.

No arbitrary number of events per chapter should be the target.

### 2. Setup facts are not protected as causal dependencies

The Umpei offer and Osugi slander campaign demonstrate the same failure:

- setup exists in prose;
- later consequence is extracted;
- the structured bridge between them disappears.

A future audit/diff should explicitly ask for **causal prerequisites** of later production events.

### 3. Relationship normalization can overwrite history

Daizō–Jōtarō shows why a relation cannot be reduced to the latest convenient label. The relationship's origin, coercion and later evolution are all narratively relevant.

The model already has chapter/section thresholds; use them rather than replacing semantics with a timeless `father_son` claim.

### 4. Production manifests are leaking local identity aliases into IDs

`baiken` versus canonical runtime `kohei`, and `ono_tadaaki` versus runtime `mikogami_tenzen`, are examples of avoidable duplicated identity knowledge.

The manifest should use canonical runtime IDs and let temporal identity metadata control display names/reveals.

This is a normalization/information-hiding fix, not a reason for another mapping layer.

## Recommended remediation after Book VII

Do not patch Book VI record-by-record yet.

After Book VII's independent oracle/diff is complete, repair the corpus by invariant:

1. **Canonical identity invariant**
   - one person ID across runtime and production manifests;
   - aliases/reveals belong in `identities.json` / provenance identity metadata.

2. **Semantic event coverage invariant**
   - material belief, identity, relationship, succession, information and consequential decision changes receive representation or explicit exclusion;
   - no fixed event-count target.

3. **Causal setup pass**
   - verify that structured consequences retain their source-backed enabling facts when those facts are narratively important.

4. **Location invariant**
   - current scene, route waypoint and intended destination remain distinct;
   - unresolved scene beats false canonical location.

5. **Relationship-history pass**
   - preserve coercion and uncertainty over time;
   - specifically re-evaluate the Book VI `Daizō–Jōtarō father_son` transition against Book V and later Book VII evidence.

6. **Mention recall pass**
   - run a corpus-wide source-first mentioned-character reconciliation separately from physical presence.

## Book VI conclusion

Book VI production is **structurally strong but semantically under-compressed in the wrong places**: it captures most of what happens externally, but sometimes loses what changes internally or causally.

Its strongest layers remain:

- spoiler-safe identities;
- final-state caution;
- major plot continuity;
- major conflict outcomes;
- conservative geography;
- key reveal timing.

Its weakest layers are:

- chapter-defining doctrine/realization coverage;
- setup-to-consequence continuity;
- a few route/current-scene assignments;
- one significant relationship normalization error;
- canonical-ID consistency between provenance and runtime.

The independent audit therefore supports this precise claim:

> “Book VI production captures the external narrative skeleton very well and handles uncertainty/identity timing carefully, but independent source comparison finds systematic semantic-compression, causal-setup, relationship-history and normalization gaps that must be repaired before exhaustive coverage can be claimed.”
