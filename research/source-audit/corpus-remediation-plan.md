# Corpus-wide semantic remediation plan

## Audit baseline

The independent two-pass audit now covers the complete local Terry corpus used by MusashiMap:

- **7/7 books**
- **112/112 chapters**
- **994 source-first facts** across the seven frozen oracle snapshots
- production currently validates **568 events, 419 states, 155 characters, 39 groups and 229 locations**

The seven `bookN-source-oracle.json` files were created from `data/source/bookN` before production comparison for each book. Their first committed versions remain the independence evidence. Reverse-diff corrections are recorded in the corresponding `bookN-production-diff.md` files rather than silently rewriting the first-pass history.

Completion of the audit does **not** mean production is already source-complete. It means the corpus has now been independently read and compared end to end, so remediation can be driven by observed failure classes rather than by isolated examples.

## Diagnosis

The findings do not describe 112 unrelated chapter problems. They cluster around a small number of recurring semantic invariants.

### Invariant 1 — physical presence must mean direct on-page physical presence

Production already states this contract in `data/characters.json`, but the audit found both false positives and false negatives.

Representative failures:

- Book II: Sekishūsai is treated as physically present in b2c11 although the chapter only establishes his residence and off-page interactions.
- Book III: the monkey is physical in b3c4 but only referenced; the ship captain is carried into b3c4 without on-page evidence; the monkey is then carried into b3c13 without evidence.
- Book IV: Konoe Nobutada leaks into b4c9 after leaving in the previous chapter; several named participants are omitted in other chapters.
- Book VI: Yogorō's corpse is physically on-page in b6c3 but classified only as referenced.
- Book VII: Musashi is marked physical in b7c11 even though his contact with the Himeji messenger is only reported by Jōtarō.

**Rule:** relationship, usual companionship, residence, a report, a memory or chapter adjacency can never establish physical presence. Dead bodies do count when directly on-page.

### Invariant 2 — physical presence and mentioned-only coverage are separate dimensions

Across every book, mentioned-only recall is weaker than physical roster recall.

Confirmed examples include Otsū in b1c1, several Book II references, Musashi in b3c4, Yoshioka Kempō in b4c4, Sekishūsai in b5c18, multiple Book VI references, and Jōtarō/Ono Tadaaki/Otsū/Ogin/Aoki/Sado/Matahachi/Gudō in Book VII chapters.

**Rule:** a chapter audit cannot claim complete character coverage from a correct physical roster. Every named/clearly identifiable narrative person must be independently classified as physical, referenced/contextual, or explicitly excluded by policy.

### Invariant 3 — current scene, route, waypoint and intended destination are different facts

The location model is generally conservative and high quality, but extraction sometimes assigns the convenient destination/container to an action that occurs elsewhere.

Representative failures:

- Book I: Mikazuki ravine scene is lost.
- Book II: Yagyū valley/castle inspection is underrepresented.
- Book III: b3c10 collapses a long, explicit travel chain into a broad corridor.
- Book IV: a pre-Seta brothel scene is attached to Seta Kara Bridge; Hachidai Shrine is omitted.
- Book V: the new-moat ambush is assigned to Obata School; Sukekurō's horse-market meeting is assigned to the inn; an intended Obata destination is represented as current location.
- Book VI: the Mitsumine ambush is attached to Kosaruzawa Bridge rather than the inner-shrine approach; Kojirō's b6c8 route loses Takanawa/Kanda/Saikachi waypoints.
- Book VII: b7c6 collapses the Hachijōji confession into Yahagi Bridge and b7c16 weapon-making is attached to Shimonoseki after the boat is already crossing the strait.

**Rule:** an event location answers “where is this action happening now?”. Origin, route, waypoint, intended destination and later arrival remain separate movement evidence.

### Invariant 4 — causal transformations are events even when nobody changes coordinates

Books V–VII make this especially clear. The story often advances through belief, doctrine, reputation, succession, forgiveness or information rather than travel/combat.

Representative omissions/compressions:

- Book I: Takuan–Takezō transformation and the Takuan–officer bargain.
- Book II: Aoki/Jōtarō family reveal, Akemi recognizing Musashi as Takezō, the peony-analysis invitation chain.
- Book III: biographical disclosures and reputation transitions.
- Book IV: the blank-paper event is not just compressed but causally inverted; several relationship/deception changes disappear.
- Book V: the fly demonstration, filial-piety sutra effect, “soul polisher” teaching and Kagenori's peace/succession doctrine.
- Book VI: sword-to-government doctrine, compassion teaching, Iori–Jōtarō brother-disciple recognition, Osugi's political campaign, setup-to-consequence links.
- Book VII: Kojirō's reputation campaign and “must win” pressure, Matahachi's repudiation of his old impersonation.

**Rule:** an observable change in location, state, relationship, identity knowledge, consequential information, important possession, allegiance, doctrine, reputation, life/death or consequential decision must be represented or explicitly documented as intentionally excluded from the production scope.

### Invariant 5 — one person has one canonical internal ID

Temporal identities are one of the strongest parts of the project. Several provenance manifests nevertheless introduce parallel IDs for people already canonicalized in runtime.

Confirmed examples:

- `himeji_captain` vs `aoki_tanzaemon` is a real production-level duplicate person, not merely provenance drift.
- Book VI provenance uses local `baiken` where runtime canonicalizes the person as `kohei`.
- Book VI/VII provenance uses `ono_tadaaki` where runtime canonicalizes the person as `mikogami_tenzen` and changes the display identity later.
- Book VII provenance uses `toranosuke` where runtime uses `hamada_toranosuke`.
- Book VII provenance uses `honami_koetsu` where runtime uses `koetsu`.

**Rule:** aliases, cover names, impersonations, later-known names and reader-facing reveals belong in `data/identities.json`; they do not create a second canonical person ID.

### Invariant 6 — later evidence may refine a relationship but must not erase its origin

The main confirmed failure is Daizō–Jōtarō.

Book V correctly models the relationship as coercive claimed guardianship after Daizō forces Jōtarō into the arrangement under threat. Book VI later adds `family/father_and_son`, turning an impression/role into ordinary family fact and silently discarding coercion.

A second cross-book threshold error is Aoki Tanzaemon–Jōtarō: the source explicitly reveals father and son in section 12, while runtime currently starts the relationship at section 20.

**Rule:** relationship evolution may add later facts, but a later shorthand must not rewrite coercion, uncertainty or the first explicit reveal threshold.

### Invariant 7 — provenance must entail the claim, not merely point into the right chapter

Book III's Baiken→Kōhei reveal demonstrates the gap: the identity threshold is correct, but the cited source range does not contain the actual reconciliation text.

**Rule:** structural source-path/range validity is necessary but insufficient. For high-risk identity, death, relationship and presence claims, the evidence range must contain the text that establishes the claim.

## Design alternatives

### Design A — finding-by-finding patching

For every item in the seven production diffs, edit the nearest JSON record until the visible mismatch disappears.

**Advantages**

- fastest path to reducing the open-finding count;
- very small local changes.

**Costs**

- repeats the same reasoning dozens of times;
- leaves no guard against the same failure in later edits;
- encourages duplicate special cases;
- keeps cross-layer ID and relationship drift alive;
- makes “all findings patched” easy to confuse with “system is now robust”.

### Design B — invariant-first remediation, then chapter corrections

First repair the ownership/contracts that allowed recurring errors. Then apply chapter findings under those rules and re-diff all books.

**Advantages**

- one decision owns each semantic distinction;
- lower change amplification for future books/edits;
- fewer opportunities for physical/report, route/destination and alias/person drift;
- tests can protect the contract rather than individual prose strings;
- the final re-audit measures a structurally improved system.

**Cost**

- slightly more work before the visible finding count reaches zero.

**Decision:** use **Design B**. The repeated failure classes across seven independently audited books are strong evidence that local patching would be permanent tactical debt.

## Remediation workstreams

### R1 — relationship and identity integrity

Priority: **P0**

1. Correct Aoki Tanzaemon ↔ Jōtarō reveal threshold to section 12.
2. Remove the later ordinary `Daizō -> Jōtarō = father_and_son` normalization; retain the coercive guardianship/trainer history.
3. Reconcile `himeji_captain` into canonical `aoki_tanzaemon` using temporal display identity rather than an alias bridge between two people.
4. Normalize manifest person IDs to the runtime canonical IDs.
5. Add regression tests for relationship thresholds, coercion preservation and canonical-person uniqueness.

### R2 — strict presence reconciliation

Priority: **P0/P1**

1. Correct all independently confirmed false physical presences and physical omissions.
2. Ensure reported/off-page contact uses references/reported state rather than physical event participants.
3. Add regression cases covering:
   - b2c11 Sekishūsai;
   - b3c4 monkey/ship captain;
   - b3c13 monkey;
   - b4c9 Konoe Nobutada;
   - b6c3 Yogorō corpse;
   - b7c11 Musashi.
4. Keep physical presence as one explicit concept; do not add another overlapping `seen_in` or `scene_presence` field.

### R3 — scene-location and movement correction

Priority: **P1**

1. Fix known destination-as-current-location and nearby-waypoint substitutions.
2. Add missing narratively consequential waypoints without inventing exact coordinates.
3. Prefer existing route/area/unmappable semantics over adding precision flags.
4. Re-run geography audit after every book correction.

### R4 — causal semantic coverage

Priority: **P1/P2**

1. Restore missing setup→consequence links first.
2. Restore title-defining or irreversible transformations next.
3. Keep multiple source changes in one event only when they share the same actor, scene and causal transition.
4. Do not explode every paragraph into an event. The target is semantic completeness, not sentence mirroring.

### R5 — mentioned-only coverage

Priority: **P2**

1. Reconcile each book's confirmed referenced-character omissions.
2. Preserve historical context separately where that is the correct layer.
3. Keep mention coverage as its own metric; never fold it into physical-presence coverage.

### R6 — provenance entailment

Priority: **P1 for identity/death/relationship/presence; P2 otherwise**

1. Correct known mismatched evidence ranges.
2. Extend validation/test fixtures around high-risk claims.
3. Avoid pretending that a generic validator can prove literary entailment; independent source audit remains the semantic backstop.

## Implementation order

The order is chosen to avoid redoing downstream work after identity or relationship normalization:

1. **R1 identity/relationship integrity**
2. **R2 physical presence**
3. **R3 geography/movement**
4. **R4 causal semantic events**
5. **R5 mention coverage**
6. **R6 provenance-range cleanup**
7. regenerate all derived audits
8. full CI
9. re-diff all seven books against the frozen audit trail

## Acceptance criteria

Remediation is complete only when all of the following are true:

- every confirmed P0/P1 finding in the seven book diffs is resolved or explicitly adjudicated as intentional exclusion;
- no confirmed physical-vs-reported misclassification remains;
- one real person has one canonical internal ID across production/runtime provenance;
- relationship thresholds match the first explicit source evidence and later shorthand does not erase coercion/uncertainty;
- current event locations no longer use an intended destination or earlier route waypoint as a substitute for the actual scene;
- title-defining and setup→consequence semantic events found by the audit are represented or explicitly excluded by policy;
- referenced-character omissions are reconciled book by book;
- source/provenance, narrative-data, source-audit, CLI and runtime-safety validators all pass;
- generated character/geography audits are regenerated from the corrected production state;
- a final corpus-wide re-diff finds no unresolved blocking semantic discrepancy.

## Non-goals

- Do not publish every oracle observation in the map UI.
- Do not create exact geographic coordinates for unresolved narrative sites.
- Do not replace the current runtime with the research manifests.
- Do not create a second production database from the source oracle.
- Do not add per-finding flags or permanent exception lists when the existing semantic model can express the fact directly.

The purpose of the source audit is to make production more trustworthy, not to become a parallel product architecture.