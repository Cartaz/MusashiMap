# Book VII — The Perfect Light: independent source oracle vs production

## Status

- Book: **VII — The Perfect Light**
- Chapters: **16/16** (`b7c1`–`b7c16`, global sections 97–112)
- Independent source oracle: `research/source-audit/book7-source-oracle.json`
- Production provenance compared: `research/book7-production-manifest.json`
- Runtime layers additionally checked where relevant: `data/characters.json`, `data/identities.json`, `data/relationships.json`
- Source authority: `data/source/book7/chapter*.txt`
- First-pass oracle facts: **134**
- Production manifest events: **78**

The source oracle was committed before the Book VII production manifest was opened. Production data therefore did not determine what the independent pass considered present in the text.

## Executive result

Book VII production is **strong on the decisive plot spine, final outcomes, uncertainty and spoiler-sensitive relationship timing**. The final duel is represented carefully, Kojirō's death is not weakened into an ambiguous survival state, Musashi's departure remains destination-unknown, Matahachi's social fatherhood does not become invented biological paternity, and Musashi–Otsū does not become a marriage relationship before the text actually supports it.

The independent pass nevertheless confirms that the same recall weaknesses seen earlier in the corpus remain present through the final book:

1. named/relevant **mentioned-only characters are still omitted** from chapter rosters;
2. some chapter-defining **internal or reputational changes are compressed** into broad action events;
3. a reported event can still leak into **physical presence** despite the project's explicit presence semantics;
4. some event locations use a broad departure locality instead of the **actual moving/current scene**;
5. provenance still contains a **parallel canonical-ID namespace** for people already canonicalized differently in runtime.

Book VII therefore does not overturn the corpus-wide diagnosis. Production is highly reliable for major narrative state and spoiler safety, but internal consistency alone still does not certify exhaustive semantic recall.

## Strong positive findings

### 1. The final duel is modeled unusually well

Production preserves the important sequence in `b7c16`:

- Musashi crosses late and creates the oar sword during the crossing;
- unauthorized Kojirō supporters are kept separate from the official witnesses;
- Musashi arrives around ten;
- the scabbard exchange and decisive blow are represented;
- Kojirō is ultimately **narratively dead**, while the transient trace of breath is not incorrectly promoted into survival;
- Musashi leaves alive with Sasuke;
- his destination and any later encounter with revenge parties remain explicitly unknown.

This is exactly the right treatment of source uncertainty: the model records what the narrator establishes and refuses to manufacture the missing aftermath.

### 2. Musashi–Otsū spoiler timing is correct in runtime

`data/relationships.json` activates:

`musashi -> otsu -> partner_family / mutually_acknowledged_husband_and_wife_without_stated_ceremony`

at **section 111 (`b7c15`)**.

That is the correct threshold. In `b7c6`, Matahachi urges Musashi to marry Otsū, but Musashi does not yet give the final mutual acknowledgment. In `b7c15`, Otsū explicitly asks to be recognized as his wife for life; Musashi assents and immediately speaks of her as a samurai's wife and himself as her husband.

The Book VII manifest relationship cites both `b7c6` and `b7c15` as longitudinal evidence for the bond, but the runtime does **not** expose the marriage subtype early. Keep this behavior.

### 3. Temporal identities remain spoiler-safe

`data/identities.json` correctly handles two difficult Book VII identities:

- Musashi is displayed as **Muka** only in `b7c6`, then returns to Miyamoto Musashi in `b7c7`;
- the man later known as Toriumi Benzō is displayed as an unidentified **Mountain priest** in `b7c2`–`b7c3` and only becomes Toriumi Benzō / Rinshōbō in `b7c4` when the narrative explicitly reconciles the identity.

This is a strong example of separating canonical person identity from reader-visible knowledge.

### 4. Matahachi's fatherhood remains conservative

Production correctly represents Matahachi and Akemi as chosen/cohabiting family and Matahachi as the baby's **social father**, while explicitly preserving that biological paternity is unconfirmed.

The source has Matahachi calculate that the timing makes paternity possible and then choose responsibility. It does not provide genetic or otherwise conclusive proof.

### 5. Osugi's conversion is represented as a durable change

The production events preserve the essential sequence:

`persecution -> Otsū's rescue attempt -> renewed assault -> presumed death -> moral realization -> repentance -> nursing/care -> reconciliation -> apology to Musashi`

The final relationship/state layer does not reduce this to a one-chapter mood swing. That longitudinal treatment is correct.

## Confirmed production defects

### 1. b7c1 — Jōtarō is explicitly remembered but absent from `referenced_characters`

Classification: `missing`

While walking with Ushinosuke, Otsū thinks of Jōtarō and estimates how old he must now be. Jōtarō is not physically present, but this is an explicit narrative reference.

The Book VII manifest `b7c1.referenced_characters` contains Sekishūsai, Munenori, Ono Tadaaki and Kojirō, but not Jōtarō.

This is the same mentioned-only recall class already found in earlier books.

### 2. b7c2 — Ono Tadaaki is explicitly discussed but absent from the referenced roster

Classification: `missing`

At the end of the Kōfukuji sequence, Hyōgo asks Gonnosuke for details about **the disappearance of Ono Tadaaki** while the adults exchange Edo news.

`b7c2.referenced_characters` contains Takuan, Musashi, Sekishūsai and Munenori but not Ono Tadaaki.

This is a direct false negative in mention coverage.

### 3. b7c6 — the Matahachi confession is localized at Yahagi Bridge and Hachijōji is absent

Classification: `geography_mismatch`

The chapter does begin with Musashi meeting Matahachi around Yahagi Bridge, but the decisive extended conversation occurs after they cross to **Hachijōji** and later in Matahachi's shed / temple porch.

There Matahachi:

- describes his attempt at Zen discipline;
- admits his wrongdoing toward Otsū;
- tells Musashi that he no longer claims her;
- asks Musashi to marry her;
- breaks down and demands an answer.

Production event `b7c6-e02` combines the reunion and confession and assigns the whole event to `yahagi_bridge`. The chapter location registry contains `okazaki_fish_district`, `yahagi_bridge`, `honda_castle` and `tokaido_west`, but **no Hachijōji**.

This is not just missing decorative geography: it places a chapter-defining interaction at the wrong scene container.

### 4. b7c7 — Otsū is explicitly named but the chapter has no referenced characters

Classification: `missing`

While trying to identify the single problem he believes must be solved, Musashi explicitly asks himself whether it is **the problem of Otsū**. Gudō later also says he knows about the woman.

Production sets `b7c7.referenced_characters` to an empty list.

Otsū should be present in mentioned-only coverage.

### 5. b7c8 — Ogin, Aoki Tanzaemon and Nagaoka Sado are omitted from mentioned-only coverage

Classification: `missing`

All three matter causally:

- **Ogin** is the false source of the news Mambei uses to lure Otsū to Mikazuki;
- **Aoki Tanzaemon** is explicitly Jōtarō's restored father, and avoiding dishonor to him is the reason Jōtarō refuses simply to kill Osugi;
- **Nagaoka Sado** appears in Jōtarō's explanation of how the Musashi–Kojirō challenge has been transmitted and organized.

Production only lists Musashi, Kojirō and Takuan as referenced characters in `b7c8`.

The events preserve the main abduction/rescue spine, but the chapter roster loses several named causal references.

### 6. b7c9 — Matahachi is explicitly mentioned but absent from the referenced roster

Classification: `missing`

After Otsū frees Osugi from the cave, Osugi explicitly asks whether Otsū wants to return to the Hon'iden family **as Matahachi's wife**.

`b7c9.referenced_characters` is empty.

This is an unambiguous mentioned-only false negative.

### 7. b7c10 — Gudō is a material referenced character but omitted

Classification: `missing`

Matahachi does not merely abandon a generic priestly life. He returns his robe and prayer beads and asks that they be given to **Gudō**, then explains Gudō's teaching that discipline in ordinary worldly life can be more demanding than temple withdrawal.

Production references Iori, Kojirō, Sado and Yukimura but not Gudō.

The family-choice event is good; the spiritual causal context is incomplete.

### 8. b7c11 — Musashi is misclassified as physically present, including in runtime `present_in`

Classification: `misclassified`

This is the most important strict-semantics defect in Book VII.

The chapter does **not** directly stage Musashi aboard the passing ship. Jōtarō returns to Otsū and Osugi and **reports what happened**: a Himeji samurai rowed to the ship, spoke with Musashi, and Musashi declined to disembark.

The manifest's own evidence policy says that reports belong under `mentioned_only`, not `physically_present`.

Nevertheless:

- `b7c11.characters` includes `musashi`;
- `b7c11-e03` treats the reported contact as if Musashi were a current-scene character;
- `data/characters.json` includes global section **107** in `musashi.present_in`.

The correct representation is:

- Jōtarō/Otsū/Osugi: physically present in the current scene;
- Musashi: referenced in a reported event / reported route continuation.

This is a production and runtime defect, not just provenance granularity.

### 9. b7c11 — Aoki Tanzaemon is omitted from the directly narrated planning scene; Matahachi and Ogin are also missing as references

Classification: `missing`

The chapter directly narrates the preceding night's planning at **Aoki Tanzaemon's house in Himeji**. Tanzaemon explains the concern about Otsū being seen publicly with Musashi and proposes the discreet small-boat arrangement.

Because this is a directly narrated flashback scene rather than a mere rumor, Tanzaemon should at minimum be represented in chapter-scoped presence/evidence. He is absent from the chapter roster.

The same chapter also explicitly discusses:

- the annulled old **Matahachi–Otsū** betrothal;
- Osugi's earlier lie that **Ogin** was in Sayo.

Neither Matahachi nor Ogin is listed under `referenced_characters`.

### 10. b7c12 — Kojirō's reputation campaign and psychological preparation are compressed below semantic completeness

Classification: `compressed`

Production captures:

- the Ujiie demonstration;
- formal duel administration;
- Funashima selection and refusal to scout it;
- the conditional Omitsu marriage plan.

What is not represented as an independent semantic change is the chapter's other major thread: Kojirō repeatedly responds to praise of Musashi by publicly portraying him as cowardly, publicity-seeking and unworthy of master status. This helps create the social inevitability of the duel.

The chapter also uses falconry and Omitsu's anxiety to show Kojirō's changing internal condition: outward confidence grows while thoughts of Omitsu, his mother and possible death increasingly intrude.

`b7c12-e04` mentions falconry only as part of a broad marriage/preparation event. The reputation and mortality-pressure changes are not independently recoverable from production.

For a map-only product this compression may be acceptable; for an exhaustive semantic model it is incomplete.

### 11. b7c13 — Matahachi's encounter with Gempachi and repudiation of his old impersonation are omitted

Classification: `missing`

Before Gempachi reaches Kojirō's house, he meets Matahachi on the Kokura road and identifies him as the man who once went around **calling himself Sasaki Kojirō**.

The important change is Matahachi's response: he now looks back on that fraud as shallow and shameful and takes his ability to recognize his former behavior as evidence that he has changed.

Production has both Matahachi and Gempachi in the physical roster, but its Gempachi event begins only with his arrival at Kojirō's house. The encounter that closes a long-running Matahachi identity arc is absent.

### 12. b7c13 — Kojirō's explicit “must win” burden is semantically compressed

Classification: `compressed`

The chapter is not merely a sequence of supporters arriving and wills being prepared. As the house fills with admirers, Kojirō becomes aware that their confidence has turned into a psychological burden. The repeated internal command is essentially **win, win, win**.

That pressure is a deliberate contrast with Musashi's increasingly nonattached preparation in the following chapters.

Production preserves the external preparation but not this internal state change as a recoverable semantic event.

### 13. b7c16-e01 — a moving strait scene is localized as Shimonoseki

Classification: `geography_mismatch`

`b7c16-e01` is explicitly a **weapon-making crossing**: Musashi is aboard Sasuke's moving boat, traveling through the strait, when he carves the broken oar and makes the paper tasuki.

The event location is `shimonoseki`.

Shimonoseki is the departure locality, not the current scene once the boat is under way. The chapter itself subsequently distinguishes waters by Hikojima, Funashima and the tide-driven crossing.

This repeats the current-scene/container problem found in earlier books. A route/vessel/strait scene should not be silently normalized to its departure town.

### 14. Book VII manifest — Hamada Toranosuke uses a second canonical person ID

Classification: `normalization_drift`

The Book VII manifest uses character ID:

`toranosuke`

Runtime identity data uses canonical person ID:

`hamada_toranosuke`

with Torazō as the temporary alias in `b7c1`.

The reader-facing identity timing is good; the provenance namespace is not. The same person should not need two canonical IDs depending on which layer is queried.

### 15. Book VII manifest — Kōetsu and Ono Tadaaki continue cross-layer ID drift

Classification: `normalization_drift`

The manifest uses `honami_koetsu` while runtime relationship data uses canonical `koetsu`.

It also continues using local historical-context ID `ono_tadaaki`, whereas runtime temporal identity data canonicalizes that person as `mikogami_tenzen` and exposes **Ono Tadaaki** as the later reader-facing identity.

This is the same provenance/runtime namespace problem already documented in Book VI.

The structural rule should be corpus-wide:

> A person has one canonical internal ID across runtime and production provenance. Historical names, aliases, cover names and revealed identities belong in temporal identity metadata, not parallel person IDs.

## Reverse-diff: corrections to the first independent oracle

The source-first pass is intentionally independent, not infallible. Production exposed several candidates that were rechecked against the source and found to be genuine first-pass oracle errors.

### A. b7c1 — the oracle missed Ono Tadaaki and Kojirō as referenced characters

The chapter's closing exchange about Toranosuke explicitly refers to the outcome of **Tadaaki's fight with Kojirō**. Production is right to retain both as mentioned-only.

The oracle caught Jōtarō but missed these two references.

### B. b7c2 — Toriumi Benzō should be a physical canonical person under an unrevealed display identity

The dangerous mountain priest at the Kōfukuji tournament is physically present. `b7c4` later reconciles that person as Toriumi Benzō / Rinshōbō.

The source-audit rule explicitly permits later-known canonical IDs to map earlier anonymous physical roles while preserving the reader-facing label. Production and `data/identities.json` handle this correctly; the first oracle treated him only as an unnamed functional actor.

### C. b7c3 — Oan and Tōroku are named physical characters, not merely functional actors

Both are named and directly present in the Kongōji/Amano sequence. Production is more precise here.

### D. b7c5 — Otsū is physically present when she passes the bound Iori

The first oracle placed Otsū under referenced characters despite recording the missed-recognition event. Production correctly treats her as physical on-page presence.

### E. b7c9 — Jōtarō is physically present at the inn at the chapter opening

Otsū addresses the sleeping Jōtarō before leaving for the shrine. He remains physically part of that opening scene even though he does not participate in the later cave sequence.

Production is correct; the first oracle's referenced-only treatment was too narrow.

### F. b7c10 — Shōeki, the second Yoshino Dayū and Akemi's baby deserve physical entity treatment

Shōeki and his wife are named and present in the Sakai send-off. The baby is unnamed but narratively consequential and physically present with Akemi.

Production's separate `akemi_baby` unidentified entity is useful because later relationship semantics depend on preserving biological uncertainty while still tracking the child as a real participant.

### G. b7c11 — Aoki Tanzaemon should be upgraded from oracle reference to directly narrated presence

The planning at his Himeji house is narrated directly, with Tanzaemon speaking and proposing the discreet boat arrangement. The oracle under-classified him as merely referenced; production goes further and omits him entirely.

### H. b7c15 — Nuinosuke is physically present in the opening departure sequence

The first oracle omitted Nuinosuke from the physical roster even though the chapter opens with him moving among the households and observing Kojirō's departure. Production correctly includes him.

## Chapter-level result

| Chapter | Production assessment |
| --- | --- |
| b7c1 | major action strong; one referenced-character omission |
| b7c2 | major action strong; one referenced-character omission; production beats oracle on Benzō identity continuity |
| b7c3 | strong; production beats oracle on Oan/Tōroku physical classification |
| b7c4 | strong political/capture spine |
| b7c5 | strong; production correctly catches Otsū physical presence |
| b7c6 | strong actions and identity; Hachijōji/current-scene geography defect |
| b7c7 | circle breakthrough strong; Otsū mention omitted |
| b7c8 | abduction/rescue strong; several causally relevant references omitted |
| b7c9 | repentance excellent; Matahachi mention omitted |
| b7c10 | family choice excellent; Gudō mention omitted; production better on secondary physical entities |
| b7c11 | major semantic presence defect: reported Musashi contact promoted to physical; other presence/reference omissions |
| b7c12 | external preparation strong; reputation/psychological semantics compressed |
| b7c13 | external preparation strong; Matahachi–Gempachi closure missing; win-pressure compressed |
| b7c14 | strong teacher/pupil, neutrality and transport logic |
| b7c15 | excellent spoiler timing, forgiveness, marriage acknowledgment and departures |
| b7c16 | excellent duel/death/uncertainty; crossing scene uses departure locality rather than current scene |

## Book VII conclusion

Book VII is one of the strongest books in production for **end-state correctness and spoiler-sensitive resolution**. The most dangerous final facts are handled carefully:

- Kojirō dies;
- Musashi survives and departs, but the destination is not invented;
- Otsū becomes Musashi's acknowledged wife only at the correct point;
- Osugi's hostility is genuinely resolved rather than merely hidden;
- Matahachi's chosen fatherhood remains distinct from biological paternity;
- aliases and concealed identities are correctly timed in runtime.

The remaining defects are not random. They continue the exact corpus-wide classes already visible before Book VII:

1. mention recall;
2. current-scene geography;
3. semantic compression of belief/reputation changes;
4. strict physical-vs-reported presence;
5. canonical-ID drift between provenance and runtime.

The correct remediation is therefore **not** to patch fifteen Book VII observations independently. The next phase should repair these invariants once, then re-diff all seven books against the frozen source oracles.
