# Book I — independent source-to-production diff

Scope: sections 1–8 (*Earth*).

Source oracle: [`book1-source-oracle.json`](book1-source-oracle.json).

This report compares the completed source-first oracle with production only after source extraction. A green repository validator is not treated as evidence of semantic completeness.

## Executive result

The Book I production data is **strong on the named physical roster and the main movement backbone**, but it is not source-complete.

The most important defect is structural: the Himeji officer known to the reader as the garrison captain / “Scraggly Beard” in sections 4–6 is later explicitly identified by the novel as **Aoki Tanzaemon**, yet production stores them as two different characters (`himeji_captain` and `aoki_tanzaemon`). The existing temporal-identity mechanism is the correct place to model the progressive reveal.

The second recurring defect is event compression. Several causally important scenes are absent even though all their participants and locations already exist in the model. This makes chapter summaries look coherent while losing actual intra-chapter trajectories and interactions.

## Severity scale

- **P0** — canonical identity/data-integrity error; should be corrected before the audit is considered trustworthy.
- **P1** — definite source fact missing or semantically misclassified in a way that affects presence, movement or important interaction.
- **P2** — definite source fact not represented at the desired exhaustive-audit granularity, but the main map state remains broadly correct.
- **P3** — model/context candidate requiring an explicit product-scope decision rather than automatic publication.

## Cross-book-I findings

### B1-IDENT-001 — duplicate canonical identity — P0

**Source:** sections 4–6 introduce the Himeji garrison officer by role/appearance. In section 5 he makes the binding bargain that Takuan may determine Takezo's punishment if Takuan captures him. Section 8 explicitly says that Ikeda's retainer **Aoki Tanzaemon** made that same bargain.

**Production:**

- `himeji_captain` — physical presence in sections 4, 5 and 6;
- `aoki_tanzaemon` — separate character whose first physical presence is much later;
- no temporal identity record links them.

**Diagnosis:** one person has two owners. This duplicates identity and causes later state/history to split across records.

**Correct design:** retain one canonical person (`aoki_tanzaemon`) and add a section-bounded reader identity such as “Himeji garrison captain” / “Scraggly Beard” for sections 4–7, revealing “Aoki Tanzaemon” at section 8. This is already the pattern used for Takezo/Musashi, the unidentified Kojirō, Baiken/Kōhei and other reveals.

### B1-MODEL-001 — named Musashi-family biography is under-modeled — P3

The text names **Munisai** repeatedly and gives source-relevant biography: Takezo's father, Ogin's father, former Shimmen martial instructor, builder of the family house, later fallen from favor. Production has no `Munisai` character/context entity.

This does not require a map marker, but an exhaustive narrative model should make an explicit decision: contextual entity / progressive wiki entry versus documented exclusion.

### B1-MODEL-002 — Arima Kihei is a named biographical reference without a model record — P3

Section 2 recalls Takezo's earlier killing of the wandering swordsman Arima Kihei. This is source material relevant to Takezo's biography but is not currently modeled. As above, this needs an explicit scope decision, not silent omission.

### B1-GEO-001 — Mikazuki ravine is a physical scene site without its own location representation — P1

In section 7 Otsu physically flees into a ravine near the Mikazuki Teahouse; section 8 explicitly reports Takuan rescuing her from that ravine. Production leaves Otsu's post-teahouse location unknown.

The exact ravine is not historically identifiable, but the project's own geography policy permits a narrative site or coordinate-null/approximate-area record. The missing fact is the **scene site**, not a demand for false coordinate precision.

## Chapter findings

## 1. The Little Bell — b1c1

### B1C1-PRES-001 — Akemi's first physical scene is lost — P1

The source first places Akemi physically among the corpse-strewn fields before Takezo and Matahachi reach her house. Production correctly marks Akemi present in the chapter, but her only represented scene location is `oko_akemi_house`.

**Effect:** roster coverage is correct; intra-chapter presence/trajectory is incomplete.

### B1C1-REF-001 — Otsu reference missing — P2

Otsu is explicitly named during Takezo/Matahachi's discussion of home and Matahachi's obligations. There is no chapter-scoped production reference for her in section 1.

### B1C1-GEO-001 — Mount Fuwa / marsh-field route context is not represented — P3

The source gives additional route geography around the corpse field and marsh south of Mount Fuwa before the farmhouse. Whether this deserves a map waypoint should be decided explicitly. It should at minimum exist in source research rather than disappear from the extraction.

## 2. The Comb — b1c2

### B1C2-REF-001 — important chapter references are incomplete — P2

The source explicitly refers to or reveals information about:

- Tsujikaze Kōhei;
- Otsu;
- Ogin / Takezo's older sister;
- Munisai;
- Takezo's mother;
- Arima Kihei;
- Akemi's father.

Some knowledge is represented indirectly elsewhere (for example the Temma–Kōhei family relationship), but there is no complete chapter-scoped mention layer.

### B1C2-EVT-001 — black-oak sword transfer omitted — P2

Oko gives Takezo the black-oak practice sword that he then uses in the conflict. Production jumps from the scavenging revelation to the raid without representing this object transfer.

### B1C2-EVT-002 — Oko's sexual advance to Takezo omitted — P2

This is a distinct on-page interaction and helps explain the household dynamics before Matahachi leaves with Oko. It is absent from production events.

### B1C2-EVT-003 — Matahachi's kill is compressed out of the raid — P2

During the attack Matahachi kills an unnamed member of Temma's group. Production records the group fight and Takezo killing Temma, but not Matahachi's violent action.

### B1C2-EVT-004 — Kōhei retaliation warning omitted — P2

The source explicitly warns that Temma's younger brother Kōhei is more dangerous and may retaliate. Production already knows the family relation, but the chapter revelation is not represented as an event/reference.

### B1C2-EVT-005 — final relationship shift is compressed — P2

Matahachi and Oko's increasing intimacy immediately precedes Oko, Akemi and Matahachi leaving together. The departure is represented; the relationship development is not.

## 3. The Flower Festival — b1c3

### B1C3-AUDIT-001 — Matahachi is represented in production but omitted by the generated audit's mention projection — P2

Production has a section-3 away state for Matahachi and the source repeatedly discusses him. The generated chapter audit does not surface him under “only mentioned/referenced”.

**Diagnosis:** this is primarily an audit-projection problem rather than a missing production fact.

### B1C3-CONTEXT-001 — Shimmen/Munisai household history is not represented at source-audit granularity — P3

Ogin's house, Munisai's service, the Shimmen privilege/name and the household's decline are explicit biographical context. The map need not publish every detail, but the research layer should retain it or document exclusion.

## 4. The Dowager's Wrath — b1c4

### B1C4-EVT-001 — Shippoji intervention missing — P1

Takezo physically returns to Shippoji, sees the Himeji officer assaulting Otsu, strikes the officer and escapes as the alarm is raised.

Production has no dedicated event for this scene. As a result:

- Takezo's physical return to Shippoji is obscured;
- Otsu and Takezo's co-presence is lost;
- the Takezo–officer confrontation is lost;
- the later movement toward the Hon'iden house lacks an important preceding scene.

### B1C4-EVT-002 — mountain interrogation/revelation compressed — P2

Takezo physically catches a charcoal maker in the Sanumo mountains and learns that Ogin has been arrested and is rumored to be at Hinagura. Production summarizes evasion and later action but does not preserve this information-acquisition scene.

### B1C4-ACTOR-001 — Osugi's daughter-in-law has causal agency but is absent — P2

The source explicitly has Osugi's daughter-in-law leave the house, summon the armed party and return with the ambushers. This is not background crowd behavior. The exhaustive research layer should retain the role as a functional unnamed actor even if no global character record is published.

### B1C4-EVT-003 — visit to Ogin's house is over-compressed — P2

Osugi and Otsu's visit, argument with Ogin, discovery of the dead soldier and subsequent raid are a multi-stage scene. Production mainly preserves the arrest outcome.

## 5. The Art of War — b1c5

### B1C5-EVT-001 — Takuan–officer bargain missing — P1

The confrontation in which Takuan rebukes the Himeji officer, invokes his Ikeda connection and obtains the right to determine Takezo's fate is the causal basis of sections 5–8. Production does not record it as an event.

This omission also helped conceal B1-IDENT-001, because the same bargain is what later identifies the officer as Aoki Tanzaemon.

### B1C5-EVT-002 — Otsu's crisis after the letters is omitted — P2

Production records receipt of the Matahachi/Oko letters but not the substantial emotional crisis that follows and motivates Takuan to remove her from the immediate setting.

### B1C5-AUDIT-001 — Ikeda Terumasa mention is not surfaced consistently — P2

The section introduces Takuan's personal association with Ikeda Terumasa, and production even creates their relationship at section 5. The generated chapter audit's simple referenced-character list does not surface Ikeda.

## 6. The Old Cryptomeria Tree — b1c6

### B1C6-EVT-001 — public judgment and authority dispute are compressed — P1

The source contains a substantial confrontation among Takuan, Osugi, the Himeji officer and the villagers about who controls Takezo and what punishment is legitimate. Production reduces this to a generic restraint event.

### B1C6-EVT-002 — Osugi's marriage pressure on Otsu omitted — P2

Osugi pushes Otsu toward entering the Hon'iden family as Matahachi's bride. This is relevant to the Otsu–Hon'iden relationship history and is absent as a chapter event.

### B1C6-EVT-003 — Takuan–Takezo transformative dialogue underrepresented — P1

Takuan's interrogation of Takezo's conception of courage, strength and the samurai way is not merely atmosphere: it drives the explicit change that becomes central at the start of section 7. The generic relationship-change event does not preserve the interaction sufficiently.

### B1C6-EVT-004 — Otsu's storm plea omitted — P2

Otsu remains in the storm and repeatedly begs Takuan to release Takezo. This is a distinct action and relationship-development scene.

## 7. The Rock and the Tree — b1c7

### B1C7-EVT-001 — opening Takuan–Takezo transformation scene missing — P1

Before Otsu frees Takezo, Takuan has a long direct exchange with him. Takezo explicitly says he wants to live and become a better man. Production begins the event sequence with Otsu's escape/rescue and therefore drops the chapter's opening causal turning point.

### B1C7-EVT-002 — Hon'iden mobilization and border split omitted — P2

Heita reports the escape; Osugi mobilizes relatives and tenants; a border official prevents the full party from crossing; Osugi and Gonroku continue alone. Production jumps to the later pursuit near Mikazuki.

### B1C7-REF-001 — Matahachi reference missing from chapter-scoped mention output — P2

Osugi explicitly vows to find Matahachi and bring him home. The generated audit lists only Ogin as a non-present referenced character.

### B1C7-GEO-001 — ravine scene lost — P1

See B1-GEO-001. Otsu's physical path should not end at the teahouse when the chapter explicitly shows her fleeing into the nearby ravine.

### B1C7-AUDIT-001 — audit trajectory rendering drops the chapter origin — P2

`events.json` does contain `old_cryptomeria_shippoji -> nakayama_pass` for the escape, but the generated audit's displayed Musashi route begins at `nakayama_pass`. This is a report-generation defect, not a missing movement event.

## 8. The Birth of Musashi — b1c8

### B1C8-IDENT-001 — explicit Aoki identity reveal is not reconciled — P0

This is the reveal that proves B1-IDENT-001. Production treats `aoki_tanzaemon` as a later referenced person rather than reconciling the earlier officer record.

### B1C8-REF-001 — Matahachi remains a chapter reference but is not surfaced — P2

Matahachi is explicitly part of Musashi's reasoning about Otsu and their prior betrothal. The generated audit's non-present reference list contains Ogin, Osugi, Gonroku and Aoki but not Matahachi.

### B1C8-ACTOR-001 — castle guard captain is an explicit functional actor — P3

An unnamed castle guard captain receives Takezo from Takuan, escorts him to the bath and manages his admission. This need not become a durable global character, but the source oracle retains the role so it is not silently erased.

## What is already strong

The diff should not obscure the amount that is correct.

- All eight chapters exist and are sensibly segmented.
- The main named physical roster is highly accurate.
- Presence and simple mention are generally kept distinct.
- Main movement chains are usually correct, including direction-only versus confirmed arrival.
- End-of-chapter states are conservative and usually preserve uncertainty.
- Book I already uses route concepts such as `origin`, `destination`, `via` and `movement_status` correctly.
- The geography layer is cautious about uncertain historical coordinates.
- Takezo -> Miyamoto Musashi is correctly represented as a temporal identity change.

## Root-cause diagnosis

The defects cluster into four causes rather than dozens of unrelated mistakes:

1. **Roster-first auditing:** the manual Book I baseline protects the list of major physical characters, but not every mention, scene or event.
2. **Event compression:** a small number of broad events can preserve the plot while losing important intra-chapter topology and interactions.
3. **No independent chapter oracle:** generated audits mostly project production rather than challenging it with a separate source-derived expectation.
4. **Identity reconciliation was not rerun after later reveals:** section 8 supplies evidence that should have merged the earlier anonymous officer into Aoki Tanzaemon.

## Recommended remediation order

1. Fix B1-IDENT-001 structurally using temporal identities; do not add a second alias bridge between duplicate characters.
2. Add the missing P1 events/scene positions for sections 1, 4, 5, 6 and 7.
3. Add/normalize the Mikazuki ravine as a narrative scene site without inventing exact historical coordinates.
4. Improve chapter-scoped reference projection so mentions encoded in states/relationships are not silently absent from audits.
5. Decide explicit product policy for P3 biographical/context entities such as Munisai and Arima Kihei.
6. Only then regenerate the existing audits and run the full validator/test suite.

No production correction should be considered evidence that the source oracle was complete; the oracle remains independently owned in this directory.
