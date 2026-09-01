# Book III — Fire: independent source-to-production diff

## Status

- Book: III — **Fire**
- Sections: **20–32**
- Chapters independently read: **13/13**
- First-pass source facts recorded before production comparison: **116**
- Narrative authority: only `data/source/book3/chapter*.txt`
- Production was inspected only after `book3-source-oracle.json` had been committed.

This document compares the source-first audit with the current production model and Book III production manifest. It is not a request to publish every source observation in the runtime UI. A source fact may remain intentionally unpublished, but an intentional exclusion must be explicit rather than indistinguishable from a missed extraction.

## Executive result

Book III is **substantially stronger than Books I–II** in structured extraction. The important characters, major events, major state transitions and the main route skeleton are generally present. The temporal identity system is especially strong and correctly protects the reader from premature identity disclosure.

The independent audit nevertheless falsifies a claim of exhaustive semantic coverage. Confirmed defects remain in four areas:

1. a small number of physical-presence false positives/false negatives;
2. referenced-character recall;
3. intermediate-route/geographic recall;
4. event provenance ranges that sometimes contain the right conclusion but not the text that actually establishes it.

The dominant Book III problem is therefore **recall and provenance precision, not bad canonical modeling**.

## Strong positive findings

### Temporal identities are modeled correctly

`data/identities.json` already implements the right abstraction for the identity-heavy Book III material:

- Matahachi remains the same `character_id`, but from section 21 temporarily displays the impersonated name **Sasaki Kojirō**.
- The real Kojirō is only a referenced certificate name in sections 20–21, then appears physically as **Handsome young man** in sections 22–24, and becomes reader-known Sasaki Kojirō/Ganryū only when Seijūrō explicitly identifies him in section 25.
- Shishido Baiken remains a reader-facing assumed name until the text explicitly reveals him as Tsujikaze Kōhei in section 28.

This is exactly the kind of complexity that belongs below the UI behind one canonical identity interface. It should be retained rather than replaced with duplicate character records or chapter-specific ad hoc flags.

### Major event extraction is usually good

The production events preserve most of the causal spine of the book:

- certificate acquisition and Matahachi's false Kojirō identity;
- the true Kojirō's ship journey, biography and conflict with Tōji;
- Akemi's assault and Gonroku's death;
- the Kema fight and Kojirō's association with Seijūrō;
- Musashi's illness, Ise pilgrimage and Eagle Mountain recovery;
- Otsū's dismissal and Karasumaru commission;
- the Baiken ambush and Musashi's mercy;
- Otsū/Jōtarō's capture and rescue;
- Aoki's rescue of Akemi and Kojirō's later rescue;
- the Rendaiji challenge;
- the first Musashi–Kojirō encounter and the Gojō/Osugi/Otsū sequence.

This means remediation should be surgical. Re-extracting Book III wholesale into a new runtime model would add complexity without solving the actual defects.

## Confirmed production defects

### 1. b3c4 — monkey is physically present, not merely referenced

**Classification:** `misclassified`

The source opens with the ship entering Kizugawa and explicitly states that the young man walks off the ship **with the monkey on his shoulder**. Production instead places `monkey` in `referenced_characters` for b3c4 and omits it from the physical event participants.

Required semantic correction:

- `monkey`: referenced → physically present in b3c4;
- include it in the Kizugawa arrival scene/event.

This is a direct violation of the manifest's own physical-presence rule.

### 2. b3c4 — `ship_captain` is a false physical presence

**Classification:** `misclassified`

The captain is physically present in b3c3 during the musket incident. In b3c4, however, the source stages Kojirō and monkey disembarking, then merchants/passengers, then Gion Tōji and Okō. The captain is not put on page.

Production lists `ship_captain` as a physical b3c4 character. That should be removed unless a source span establishing his physical presence can be produced.

Together, defects 1 and 2 show a chapter-boundary carry-over error: one entity was left behind in the previous chapter while another was carried forward without evidence.

### 3. b3c4 — Musashi is omitted as a referenced character

**Classification:** `missing`

During Akemi's search for the seashell of forgetfulness she explicitly thinks of Musashi as the one memory that had consoled her. Production's b3c4 referenced roster does not contain Musashi.

This is the same recall class independently observed in Books I, II, IV, V and VII samples: physical rosters are substantially stronger than mention rosters.

### 4. b3c2 — Akemi appears to be a production-only referenced character

**Classification:** `likely false positive`, source-reviewed

The Book III manifest lists Akemi as referenced in b3c2. The independent reading and subsequent targeted recheck found the chapter's relevant personal history to concern Okō, Otsū, Musashi/Takezō and Matahachi's own false identity; no source occurrence of Akemi was found.

This should be revalidated against the exact source span before remediation. If no span exists, remove the b3c2 Akemi mention.

### 5. b3c7 — unnamed groom is rostered but omitted from the movement events

**Classification:** `compressed` / participant omission

The production roster correctly contains `unnamed_groom`, but the events model Musashi's route without him. The source has the groom physically carrying/accompanying Musashi through the Yokkaichi/Baiken-smithy journey and onward to Yamada.

This does not require a new character abstraction. The existing unnamed-character record is sufficient; the route event simply needs to preserve his physical participation where appropriate.

### 6. b3c9 — Baiken→Kōhei identity event has incorrect provenance timing

**Classification:** `provenance_mismatch`

Production event `b3c9_e02` says that the narration explicitly identifies Shishido Baiken as Tsujikaze Kōhei and cites `chapter9-the-pinwheel.txt:L103-L255`.

That interval establishes the meeting with Baiken and Musashi's identification of him as **Shishido Baiken**, but the explicit narrative reconciliation occurs later, after the failed night ambush, when the followers are described as men associated with **Tsujikaze Kōhei of Yasugawa, who now called himself Shishido Baiken**.

The identity model itself is correct: section 28 is the right reveal section. The defect is narrower and important: the evidence span attached to the reveal does not contain the reveal.

Root implication: structural validation of `source_ref` proves that a range exists, but not that the semantic claim is actually entailed by that range.

### 7. b3c10 — the journey is geographically over-compressed

**Classification:** `compressed` + `missing geography`

Production reduces the route mainly to `tokaido_omi_corridor`, `koji_hill` and `karasumaru_house`. The source gives a much richer sequence that is directly relevant to MusashiMap:

- barrier/inn area;
- Mount Fudesute;
- Yonkenjaya;
- Natsumi/Kōji Hill area;
- Kaga Village;
- Makado Pass;
- Seto in Ōtsu;
- Ōmi lakeside route;
- Seta Bridge;
- Keage;
- Kyoto/Sanjō approach.

Not every name requires an exact coordinate. The project's conservative geography policy is correct. But unresolved or corridor-only geography can still be represented without inventing a point. Collapsing the entire route into one corridor loses useful narrative movement information.

The Sannojō sequence is also compressed: his deception of the captors, Jōtarō's release of Otsū, route guidance above Kaga Village and the Makado Pass direction are causally separate observations even if production chooses to expose them through one user-facing event.

### 8. b3c13 — monkey is a false physical presence

**Classification:** `misclassified`

Production places `monkey` in the b3c13 physical roster and in the Musashi–Kojirō first-encounter event. A complete check of both halves of the chapter finds no monkey occurrence. Kojirō is standing under the willow alone when Musashi notices him.

The monkey should therefore not be inferred merely from its usual association with Kojirō.

This and b3c4 are useful regression cases: physical presence must remain chapter- and scene-evidenced, never inherited from a companion relationship.

### 9. b3c13 — Aoki Tanzaemon is a missing referenced character

**Classification:** `missing`

During the Osugi/Jōtarō confrontation the narration explicitly describes Jōtarō as **the son of Aoki Tanzaemon**. The Book III manifest's b3c13 referenced roster omits Aoki.

This is also a cross-check on the earlier Book II finding that the Aoki–Jōtarō father/son relationship is revealed much earlier than `relationships.json` currently says.

## Confirmed compression / secondary coverage gaps

These are genuine source distinctions but lower priority than the physical-presence and provenance defects above.

### b3c1 — Aoki's biographical reveal is not represented as an event

The production roster/state correctly knows Aoki is physically present, but the event layer does not preserve the chapter's important disclosure that the mendicant priest:

- lost his samurai status;
- once served Lord Ikeda;
- has an only son, Jōtarō;
- attributes his fall to his conduct involving Otsū.

This is biographical/relationship information, not merely atmosphere.

### b3c2 — false identity and fraud are more detailed than the event model

Production correctly records Matahachi assuming the Sasaki Kojirō identity and Yasoma swindling him, but several source distinctions are compressed:

- first private false claim;
- later public use of the same name;
- discovery of the name on the certificate by Osugi;
- the additional lie that it is a nom de guerre.

The current representation is acceptable for a major-event map, but not exhaustive semantic digitization.

### b3c5 — Akemi's delirious disclosure is causally important

Production correctly records care at the inn and Ryōhei's later delivery of Musashi's challenge. It does not separately preserve that Akemi's feverish words give Seijūrō information about Musashi, New Year and Gojō Bridge. That disclosure affects Seijūrō's knowledge before the formal challenge arrives.

### b3c7 — Ise route detail is partially collapsed

`ise_naiku` currently represents the shrine complex and Isuzu River together. The source separately uses the House of Virgins, river purification, upper Isuzu/Ichinose gorge and the Eagle Mountain climb. This is defensible as conservative mapping, but it should be classified as deliberate geographic compression rather than complete location coverage.

### b3c12 — Yoshioka financial collapse is mostly outside the event model

The chapter opens with creditors at the school and reports Tōji's disappearance with Okō and western-trip funds, alongside Denshichirō's absence/debt. Production jumps principally to duel scheduling. This is not a movement-map blocker but is relevant to a complete narrative/wiki layer because it explains the condition of the Yoshioka house immediately before the duel.

### b3c13 — public reputation change is omitted

The final crowd reaction shows previously unaware townspeople reading the challenge and Musashi's name spreading publicly. Production preserves the notice but not this reputation transition. Low priority for the map, useful for a semantic/wiki layer.

## Referenced-character recall

The source-first pass and the reverse diff show that mention extraction remains the least reliable semantic category.

Confirmed or strongly source-supported production omissions include:

- b3c4 — Musashi;
- b3c7 — Otsū, Nikkan and Matahachi are explicitly recalled/referenced in Musashi's reflections but are not all present in the manifest reference list;
- b3c10 — Matahachi is part of Otsū's reasoning about Musashi's expected Gojō meeting but is absent from the manifest reference list;
- b3c13 — Aoki Tanzaemon via Jōtarō's parentage.

This category should remain distinct from physical-presence coverage. A single "character coverage" percentage would conceal the actual weakness.

## First-pass oracle self-corrections

The independent oracle was intentionally committed before looking at production. The reverse comparison then exposed several candidates, each rechecked against the source. The following were confirmed as omissions in the first-pass oracle itself:

- b3c1 — **Lord Ikeda** is explicitly referenced in Aoki's lament about his former service;
- b3c3 — **Okō** is explicitly remembered by Tōji;
- b3c6 — **Toda Seigen** and **Kanemaki Jisai** are explicitly named during Seijūrō's identification of Kojirō;
- b3c9 — **Mikogami Tenzen** and **Takuan** are explicitly referenced; **Okō** is also referenced later through the history of Temma/Takezō;
- b3c11 — **Jōtarō** is explicitly referenced by Aoki while he prays for his son;
- b3c12 — **Ogin** is explicitly named as Musashi's only living relative besides his aunt; Gonroku is also recalled in the Osugi conflict.

These are not production defects. They demonstrate why the audit must be bidirectional and why production candidates must be checked against text rather than copied automatically into the oracle.

The first-pass oracle should be regarded as the frozen independent extraction used to measure both sides of the comparison. Any normalized second-pass revision must preserve this audit trail rather than silently rewriting history.

## Relationships and identity

Book III relationship thresholds are generally strong:

- Seijūrō → Akemi assault/enmity: section 23;
- Kojirō → Seijūrō association: section 25;
- Kojirō → Akemi rescue/protection: section 30;
- Musashi → Kojirō first encounter/rivalry: section 32.

The important remaining relationship defect is cross-book rather than Book-III-specific:

- `aoki_tanzaemon -> jotaro`, `father_and_separated_son`, is currently first exposed at section **20** in `relationships.json`;
- the source already establishes this directly in Book II section **12**, when Jōtarō tells Musashi that his father is Aoki Tanzaemon.

The Book III text repeatedly confirms the same father/son identity. The relationship threshold should therefore ultimately move from 20 to 12 when remediation begins.

## Geography judgment

Book III's geography model is **conservative and generally trustworthy** in what it asserts. It avoids fake precision and correctly leaves private/unresolved sites coordinate-free.

The problem is not that mapped coordinates are unreliable; it is that some narratively explicit route waypoints are never represented. This is most visible in b3c10. Therefore:

- geographic **precision**: high;
- geographic **recall**: good for major locations, incomplete for intermediate travel;
- uncertainty handling: strong.

## Chapter-by-chapter judgment

| Chapter | Physical roster | Major events | Mentions | Geography/movement | Overall |
|---|---|---|---|---|---|
| b3c1 | strong | good, Aoki biography compressed | good after reverse check | good | good |
| b3c2 | strong | good but identity-fraud detail compressed | one likely false positive (Akemi) | good | good |
| b3c3 | strong | very good | good | good | very good |
| b3c4 | **two definite classification errors** | strong | **Musashi missing** | good | needs correction |
| b3c5 | strong | strong | causal Akemi disclosure compressed | good | very good |
| b3c6 | strong | very good | good | good | very good |
| b3c7 | strong | groom participation compressed | some references missing | route partly compressed | good |
| b3c8 | strong | very good | good | good | very good |
| b3c9 | strong | strong | good | good | **provenance fix needed** |
| b3c10 | strong | strong at high level | some references missing | **route over-compressed** | good for plot, weak for map detail |
| b3c11 | strong | strong | good | good | very good |
| b3c12 | strong | main arc strong | secondary context compressed | good | good |
| b3c13 | **monkey false positive** | strong | Aoki missing | good | needs correction |

## Root-cause diagnosis

The Book III defects do not justify a new runtime architecture. The existing deep modules are mostly correct:

- one canonical character identity;
- temporal display identities;
- source-backed events;
- conservative location resolution.

The remaining failure modes arise because validation checks **consistency of recorded facts**, not semantic entailment and recall.

Two improvements have the highest leverage:

1. continue the independent source-oracle/diff pass for all books so missing facts can be discovered rather than only validated after extraction;
2. add semantic provenance audits that verify a claimed reveal/presence against the cited source span, at least for high-risk categories such as identity reveals and physical presence.

A purely structural validator cannot discover that `b3c9_e02` cites the wrong lines, because the file and range are syntactically valid.

## Remediation order after the full audit

Do not patch Book III production piecemeal while Books IV–VII remain unaudited. After the source-first audit is complete, remediate by invariant class:

1. **physical presence** — fix b3c4 monkey/captain and b3c13 monkey, plus any later equivalents;
2. **identity/relationship thresholds** — especially the cross-book Aoki/Jōtarō threshold;
3. **source provenance** — repair reveal/event ranges such as b3c9;
4. **route recall** — restore narratively meaningful intermediate waypoints without inventing coordinates;
5. **mention recall** — fill referenced-character gaps where the wiki/context layer benefits;
6. re-run generated audits and CI only after old incorrect paths have been removed.

This minimizes change amplification and lets one rule fix an entire class of defects instead of accumulating chapter-specific exceptions.
