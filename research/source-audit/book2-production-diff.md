# Book II — independent source-to-production diff

Scope: sections 9–19 (*Water*).

Source oracle: [`book2-source-oracle.json`](book2-source-oracle.json).

This report was written only after the Book II source oracle had been completed from `data/source/book2`. Production JSON and generated audits are used below only as the comparison target.

## Executive result

Book II is **materially stronger than Book I in event coverage**, especially from Hōzōin onward. The best chapter in the sample is section 18, *Jōtarō’s Revenge*: production preserves a long, complex chain of 25 events with careful separation between physical presence, reference, escalation and movement.

However, Book II also exposes consequences of the Book I identity split and several definite completeness defects:

- Aoki Tanzaemon is explicitly revealed as Jōtarō's father in section 12, but production sets the father–son relationship threshold to section 20.
- Akemi's realization that Miyamoto Musashi is Takezō is not represented as a narrative revelation in section 13.
- the warning that directly causes Musashi to walk into the Hannya Plain trap is absent from section 14's structured events;
- section 17 loses most of the chapter's second causal half: Jōtarō's delivery of Musashi's letter/stem, the senior Yagyū retainers' analysis, their decision to invite Musashi, and Tarō's attack on Jōtarō;
- section 19 treats Sekishūsai as physically present despite the source never staging him on-page in the chapter.

The recurring weakness remains **semantic recall around otherwise-correct main events**, rather than wholesale plot failure.

## Severity scale

- **P0** — canonical identity, spoiler-threshold or relationship-integrity defect.
- **P1** — definite missing/misclassified source fact affecting important causality, physical presence or movement.
- **P2** — definite source detail missing/compressed at exhaustive-audit granularity while the principal map state remains broadly correct.
- **P3** — context or modeling candidate requiring an explicit scope decision.

## Cross-Book-II findings

### B2-IDENT-001 — Book II independently confirms the Aoki Tanzaemon identity merge — P0

Section 12 contains an explicit first-person statement by Jōtarō that his father is **Aoki Tanzaemon**, formerly a 2,500-koku samurai. Musashi immediately connects that name and fate with his own past actions.

This is independent corroboration of the Book I finding that the earlier Himeji garrison captain / “Scraggly Beard” is Aoki Tanzaemon. The canonical split between `himeji_captain` and `aoki_tanzaemon` therefore cannot be defended as unresolved ambiguity.

**Correct design:** one canonical `aoki_tanzaemon` record plus a spoiler-bounded earlier display identity.

### B2-REL-001 — Aoki Tanzaemon → Jōtarō family relationship revealed eight sections too late — P0

**Source:** section 12 explicitly reveals the father–son relationship.

**Production:** `relationships.json` currently contains:

`aoki_tanzaemon -> jotaro / family / father_and_separated_son / first_section: 20`.

**Diagnosis:** the delayed threshold is a direct downstream consequence of treating the earlier Aoki material as a separate anonymous character and failing to reconcile later evidence backward into the canonical identity timeline.

**Required correction:** `first_section` must become **12**, while the reader-facing father name may remain appropriately spoiler-bounded if the UI needs to preserve how the novel phrases the reveal.

### B2-AUDIT-001 — chapter mention coverage remains incomplete — P2

Across sections 9–19, generated “only mentioned/referenced” output is substantially narrower than the source oracle. The main physical roster is usually excellent, but many source references are absent from the chapter projection even when the person already exists canonically.

This is partly a production gap and partly a report-generation gap; the two must be distinguished during remediation rather than patched together.

## 9. The Yoshioka School — b2c1

### B2C1-REF-001 — chapter references under-recorded — P2

The source explicitly names or recalls:

- Yoshioka Kempō;
- Yoshioka Denshichirō;
- Otsū;
- Miyamoto Musashi, in the chapter-ending report that he has appeared at the school.

The six major physical characters are correctly identified, but the reference layer does not preserve this full set.

### B2C1-EVT-001 — Matahachi's attempted break from Oko is over-compressed — P2

The source gives a substantial progression: household argument, memories of Otsū/Miyamoto, decision to leave, actual exit through the kitchen door, return to search for money, and renewed paralysis. Production preserves the broader household relationship but not this failed-departure sequence as a distinct causal thread.

### B2C1-ACTOR-001 — chapter-ending Yoshioka messenger is a functional actor — P3

The unnamed messenger brings the report that Musashi is defeating men at the school. He does not need a durable global character ID, but the independent research layer retains him because his action triggers the next chapter's response.

## 10. The Wheel of Fortune — b2c2

### B2C2-REF-001 — source references exceed the generated mention set — P2

The chapter explicitly invokes Yoshioka Kempō, Denshichirō, Musashi's father and Kiichi Hōgen in addition to the physical cast. Production handles Denshichirō's reported absence, but the generated chapter projection is not an exhaustive representation of source mentions.

### B2C2-GEO-001 — escape route is semantically present but geographically compressed — P3

The source follows the pursuit through the school's back gate and adjoining alley toward the Kūyadō/Honnōji area. The current model correctly preserves the Yoshioka School and Honnōji endpoint; whether the intermediate alley/Kūyadō deserves a dedicated route object is a product-scope decision, but it should remain documented in source research.

## 11. Encounter and Retreat — b2c3

### B2C3-REF-001 — Ogin, Matahachi and Takuan source references are not all surfaced — P2

Musashi prays for Ogin, the Hon'iden confrontation depends on Matahachi, and he remembers Takuan's earlier guidance. These references are real source facts even though none of the three is physically present.

### B2C3-ACTOR-001 — palanquin bearer has causal agency — P3

The unnamed bearer obtains Musashi's name and carries the information that enables the hostile crowd to gather. The source-first layer should retain this functional role even if production intentionally omits it from `characters.json`.

## 12. The Water Sprite — b2c4

### B2C4-REL-001 — Aoki/Jōtarō reveal missing from the chapter's relationship history — P0

See B2-REL-001. This is the source chapter where the relationship becomes explicit.

### B2C4-EVT-001 — family reveal should be a structured narrative event — P1

Jōtarō does not merely mention a father in passing. He names Aoki Tanzaemon, gives rank/status history, and Musashi recognizes his own causal connection to Tanzaemon's fall. This is a biographical and relational reveal that materially links Books I and II.

### B2C4-REF-001 — martial/biographical references are under-projected — P2

The source also references Takuan, Tsukahara Bokuden, the Yagyū/Tokugawa sword instructor, Yoshioka Kempō and Musashi's father/Lord Shimmen context. These need not all become map entities, but an exhaustive chapter audit must classify them rather than silently drop them.

## 13. A Spring Breeze — b2c5

### B2C5-EVT-001 — Akemi recognizes Miyamoto Musashi as Takezō — P1

When Jōtarō gives Musashi's message and description at Yomogi, Akemi realizes that “Miyamoto Musashi” is the Takezō she knew. Her dormant emotional attachment immediately revives.

This is a genuine **identity recognition by a character**, distinct from the global reader identity window. Production records Jōtarō meeting Akemi and delivering the message but does not preserve the recognition as its own revelation.

### B2C5-EVT-002 — Otsū's motive for accepting the Koyagyū invitation is compressed — P2

Otsū accepts Shōda Kizaemon's invitation in significant part because the Yagyū household and its flow of visitors may help her find Musashi. The movement is represented; the source motive that makes the decision intelligible is not.

### B2C5-GEO-001 — Mampukuji and roadside teahouse scenes are only loosely represented — P3

The source gives intermediate route locations around Mampukuji and the teahouse where the Nara warning is discussed. The principal Uji/Kizu movement chain is correct, so this is a granularity decision rather than a route failure.

## 14. The Hōzōin — b2c6

### B2C6-EVT-001 — Hannya Plain ambush warning missing — P1

The dumpling-maker's wife tells Musashi that Hōzōin priests and rōnin are waiting toward Hannya Plain because insulting statements and posters have been falsely attributed to him. Musashi knowingly leaves anyway.

This event is the direct bridge into section 15 and should not be absent from an exhaustive causal model.

### B2C6-EVT-002 — Jōtarō's mask transfer omitted — P2

The boardinghouse widow gives Musashi clothing and permits Jōtarō to keep an old Noh mask. The mask becomes narratively important in later scenes, especially section 19. The object transfer is therefore more than decorative inventory.

### B2C6-EVT-003 — physical victory versus spiritual defeat deserves explicit distinction — P2

Production correctly records Agon's death and Nikkan's instruction. The source, however, makes a strong semantic distinction: Musashi wins the physical bout but leaves feeling thoroughly defeated by Nikkan on the higher plane. For wiki/character development this distinction should remain visible rather than be reduced to “brief spiritual instruction”.

## 15. Hannya Plain — b2c7

### B2C7-SEM-001 — `rival/hozoin_lancer_opposition` overstates the Musashi–Inshun relationship — P2

The source initially frames Inshun and the priests as possible enemies, and Inshun confronts Musashi over the reported insults. But the Hōzōin lancers do **not** attack Musashi: Inshun orders them to purge the rōnin, after which he treats Musashi courteously and Nikkan explains the prearranged “housecleaning” operation.

Production's event sequence is notably good and correctly records the reversal, but the canonical relationship subtype `rival/hozoin_lancer_opposition` risks freezing the initial misunderstanding as the durable relationship.

**Recommendation:** review whether a neutral `acquaintance`/martial encounter or a more precise non-hostile subtype better reflects the source after the reveal. Do not change it automatically without checking later chapters.

### B2C7-EVT-001 — operation reveal is correctly represented — COVERED

This is an important positive control: current production correctly distinguishes Musashi's fight with the rōnin from Inshun's purge and Nikkan's later explanation. The source-first oracle confirms that the existing extraction gets the difficult semantic core right.

## 16. The Koyagyū Fief — b2c8

### B2C8-GEO-001 — physical valley/castle inspection is under-modeled in trajectory output — P1

The source explicitly places Musashi and Jōtarō moving through Yagyū Valley and inspecting the exterior of Koyagyū Castle before returning to the Wataya.

The generated audit's physical-position table shows Musashi and Jōtarō only at `wataya`, even though its own event prose acknowledges arrival in the valley and inspection of the castle exterior.

**Diagnosis:** this is not a roster problem; it is missing/insufficient event location data feeding trajectory reconstruction.

### B2C8-EVT-001 — Musashi's governance/geography lesson is semantically compressed — P2

Musashi explicitly teaches Jōtarō that serious study of the Art of War includes geography, irrigation/agriculture, customs, social conditions and a lord's governance. This is important character-development material for the mini-wiki even if it does not need a map event.

## 17. The Peony — b2c9

### B2C9-EVT-001 — latter causal half of chapter missing — P1

This is the largest Book II event-recall gap.

Production represents the opening mountain-house scenes, Otsū's ride to Wataya, delivery to Denshichirō, Musashi's peony analysis and Otsū's later encounter with Jōtarō. It does **not** structurally preserve the following on-page sequence:

1. Shōda Kizaemon conducts/oversees the severe Yagyū dōjō training scene.
2. Jōtarō enters Koyagyū Castle carrying Musashi's letter and the cut peony stem.
3. Kizaemon reads the unexpected letter.
4. Kizaemon, Murata Yozō, Kimura Sukekurō and Debuchi Magobei compare the two stem cuts.
5. They discover that Sekishūsai made the original cut and infer unusual perception on Musashi's part.
6. The senior retainers decide to invite Musashi to the Shin'indō for food, sake and martial conversation.
7. While waiting, Jōtarō provokes Tarō, strikes him and is attacked/injured by the dog.

These are not optional atmospheric details. Steps 3–6 **cause the invitation that opens section 18**, while step 7 causes Jōtarō's revenge and the crisis inside Koyagyū Castle.

### B2C9-EVT-002 — object-provenance chain is broken — P1

The white peony has a continuous causal chain:

`Sekishūsai -> Otsū -> Denshichirō (rejected) -> Otsū -> Kocha -> Musashi -> Jōtarō -> Shōda/Kimura/Debuchi/Murata`.

Production captures the first half but stops before the stem reaches the senior retainers. The missing object transfer/analysis makes section 18's invitation appear less causally grounded than the source.

### B2C9-AUDIT-001 — states know facts that the event graph does not explain — P1

The generated audit can state that Jōtarō is at Koyagyū Castle and Kimura/Debuchi/Murata are at Shin'indō in this chapter, yet there is no corresponding event sequence in the report explaining those physical presences.

This is an architectural smell: state/roster knowledge and event knowledge have diverged.

## 18. Jōtarō’s Revenge — b2c10

### B2C10-QUALITY-001 — high-quality reference chapter — COVERED

This chapter is a useful standard for the rest of the project. Production preserves roughly twenty-five distinct steps including:

- Jōtarō's return and Kocha's care;
- the children’s interaction;
- departure and castle arrival;
- separation at the Shin'indō;
- the four-retainer discussion/test;
- Tarō alarm and discovery;
- punishment conflict;
- Musashi's intervention and escalation;
- Kizaemon's de-escalation;
- proposed suicide/detention;
- Musashi's castle challenge;
- Kimura's attack and Jōtarō's sand intervention;
- four-way encirclement;
- Otsū's flute correctly treated as an auditory reference rather than physical co-presence;
- Musashi's escape.

The source-first oracle substantially agrees with this structure. This shows the data model is capable of the granularity required; the earlier omissions are extraction inconsistency, not an inherent schema limitation.

### B2C10-ACTOR-001 — Tarō is causally important but only implicit in global entity modeling — P3

The dog is the trigger for the entire castle crisis across sections 17–18. A dedicated animal/global character record is not necessarily desirable, but the research layer should preserve Tarō as a causal actor/object of action.

## 19. The Nightingales — b2c11

### B2C11-PRES-001 — Sekishūsai is classified as physically present without an on-page scene — P1

The generated audit table lists Sekishūsai as physically present at the mountain house in section 19.

The source establishes that:

- he resides there;
- Otsū and Jōtarō have interacted with him off-page before emerging;
- he has expressed a wish to meet Musashi;
- Takuan is traveling to see him.

But section 19 never directly stages Sekishūsai in an on-page physical scene. Under MusashiMap's strict rule that `present_in` means physical on-page presence, this should be represented as a reported/current position or reference, not a physical chapter presence.

### B2C11-EVT-001 — Otsū/Jōtarō pursuit is compressed — P2

Otsū actually glimpses Musashi, falls while calling him, resumes pursuit with Jōtarō, reaches the Tsukigase-Iga back road and loses him in the foothills. Production folds much of this into a broad final meeting/journey event.

### B2C11-EVT-002 — Takuan–Otsū confrontation is heavily compressed — P1

The source devotes a substantial sequence to:

- Takuan's established Yagyū relationships;
- Otsū explaining her determination to find Musashi;
- Takuan warning that her fixation may lead to death/self-destruction;
- his attempt to persuade her to remain in Koyagyū and live another life;
- Otsū's refusal;
- Jōtarō retrieving the mask and choosing to continue with her;
- their final separation from Takuan.

Production's single broad `meeting` event does not preserve the important relationship and decision changes.

### B2C11-REF-001 — backstory reference set is incomplete — P2

The chapter explicitly invokes Munenori, Yagyū Gorōzaemon, Suzuki Ihaku, Hyōgo, Lord Katō of Higo and Matahachi as part of current conversation/biography. These should either be preserved in the research layer or explicitly excluded from product publication.

## What is already strong

- The named physical roster across Book II is generally excellent.
- Physical presence versus reported absence is often handled conservatively.
- Sections 14–15 correctly separate Agon's physical death from Nikkan's spiritual instruction and the later Hannya purge.
- Hannya Plain's alliance reversal is extracted correctly.
- Route semantics such as intended destination versus confirmed arrival are usually careful.
- Section 18 proves the event model can preserve very fine-grained causality without schema changes.
- Otsū's distant flute in section 18 is correctly treated as reference/auditory evidence rather than falsely placing her inside the confrontation.

## Root-cause diagnosis

Book II strengthens the Book I diagnosis and adds one new cause:

1. **identity reconciliation was not propagated backward**, creating the Aoki/Jōtarō threshold error;
2. **manual physical-roster baselines are too narrow to certify mention/revelation coverage**;
3. **event extraction granularity is inconsistent by chapter** — section 18 is excellent while section 17 loses a causally essential half-chapter;
4. **states and event graphs can diverge**, allowing an audit to know a person was somewhere without preserving why/how they got there;
5. **object provenance is not a first-class audit concern**, even when an object such as the peony is the mechanism linking multiple scenes.

## Recommended remediation order

1. Merge `himeji_captain` into canonical `aoki_tanzaemon` using the temporal-identity system.
2. Move Aoki→Jōtarō father/son `first_section` from 20 to 12 and validate every downstream spoiler threshold that depended on the old split.
3. Restore the missing section-17 peony/stem/invitation/Tarō causal chain.
4. Add the section-14 Hannya warning and section-13 Akemi identity-recognition revelation.
5. Remove Sekishūsai from strict physical presence in section 19 unless a direct on-page passage can be produced.
6. Improve location ownership for section 16 so valley/castle inspection feeds the physical trajectory.
7. Only after these fixes, regenerate production audits and compare them again against the immutable Book II source oracle.

No production correction should be used to rewrite the oracle; source audit ownership remains independent.
