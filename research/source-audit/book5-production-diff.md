# Book V — Sky: independent source oracle vs production

## Status

- Book: **V — Sky**
- Chapters: **26/26** (`b5c1`–`b5c26`, global sections 54–79)
- Independent source oracle: `research/source-audit/book5-source-oracle.json`
- Production provenance compared: `research/book5-production-manifest.json`
- Runtime layers additionally checked where relevant: `data/identities.json`, `data/relationships.json` and canonical production data referenced by the manifest
- Source authority: `data/source/book5/chapter*.txt`
- First-pass oracle facts: **205**

The source oracle was committed before the production manifest was opened for comparison. Production data was not used to decide what belonged in the oracle.

## Executive result

Book V production is **very strong on the major narrative spine, final states, identity timing and long-range continuity**, but it is not semantically exhaustive.

The production model correctly preserves the large structural arcs of *Sky*:

- Matahachi abducting Otsū and separating her from Musashi and Jōtarō;
- Musashi's two encounters with Gonnosuke and the transition from opponent to respected peer;
- Gion Tōji and Okō's Buna Valley trap;
- Akemi's movement into the Sumiya/Yoshiwara world and the temporary `Hanagiri` house name;
- Daizō's coercive control of Jōtarō without normalizing it as consensual adoption;
- Osugi's arrival in Edo and alliance with Hangawara Yajibei and Kojirō;
- the Obata-school feud and Hōjō Shinzō's revenge attempt;
- Musashi and Iori's Hōtengahara cultivation/defense arc;
- the parallel Hosokawa interest in Kojirō and Musashi;
- Otsū's retrospective rescue by Kimura Sukekurō and her stay with the Yagyū household;
- Shinzō's survival and Musashi's deliberately nonlethal escape from the Hangawara gang.

The independent comparison nevertheless finds four recurring weakness classes:

1. **mentioned-character recall** — explicit memories, letters and named off-page people are omitted more often than physical participants;
2. **event-semantic compression** — several chapter-defining ethical or psychological transformations are reduced to surrounding actions;
3. **scene-location precision** — a small number of records use a later destination or broad container as if it were the current scene location;
4. **first-pass oracle misses** — reverse comparison exposes several named physical participants that the independent extraction itself failed to promote from functional/carry-over status.

The correct conclusion is:

> Book V is already a high-quality major-event map and continuity model, but it is not yet a complete semantic digitization of *Sky*.

## Strong positive findings

### The large-scale movement structure is coherent

Production correctly reconstructs the long eastward transition from the Kiso/Nakasendō area through Suwa, Hachiōji and Edo, while keeping uncertain or narrative-only sites conservative rather than inventing point precision.

Particularly good examples include:

- the Fukushima barrier passage and the split between Musashi ahead and Otsū/Jōtarō behind;
- the Nobu Pond/Gonnosuke search sequence;
- the Wada–Daimon/Buna Valley corridor;
- the Hachiōji stop and later Takanawa/Edo approach;
- Osugi's Takanawa → Nihombashi → Bakurōchō arrival;
- the Sumida/Sensōji and later Bakurōchō/Yoshiwara branches;
- Iori's failed Kobikichō delivery and wandering toward Higakubo;
- Otsū and Hyōgo's departure toward Koyagyū;
- the Ushigafuchi/Kudan/Ushigome escape at Book V's end.

The remaining geography findings are about **specific scene assignment or omitted waypoints**, not systemic geographic unreliability.

### Coercion and uncertainty are generally modeled responsibly

The production layer avoids sanitizing several difficult scenes:

- Matahachi's abduction and violent coercion of Otsū remain coercive acts rather than a romantic reunion;
- the Hachiōji assault on Akemi is represented with `strong_inference` rather than promoted to an explicitly narrated act that the text itself does not directly state;
- Daizō–Jōtarō is described as `coercive protector / claimed guardian` and explicitly not normalized as consensual adoption;
- Hyōgo's feeling for Otsū is not converted into reciprocal romance;
- Sado's interest in Musashi remains an `unfulfilled recruitment interest` because the two do not meet in Book V.

These distinctions should be preserved.

### Identity timing is spoiler-safe

`data/identities.json` correctly handles:

- `Sannosuke` only in b5c14, becoming `Misawa Iori` from b5c15 after Musashi explicitly renames him;
- `Hanagiri` as Akemi's Yoshiwara house name only for the chapter in which that identity is actually used;
- `Daizō` remaining the reader-facing assumed identity throughout Book V, with the later true identity withheld until the Book VI reveal.

No new identity abstraction is justified by this audit.

### Final states are unusually careful

The Book V manifest is strong at distinguishing last direct sighting from later report. Examples include:

- Jōtarō, Daizō and Sukeichi last directly shown traveling toward Edo in b5c9;
- Akemi last directly shown fleeing Sumiya in b5c12;
- Geki's later Sendai contact being reported rather than treated as a newly depicted scene;
- Kojirō's exact position after b5c23 remaining unknown;
- Osugi surviving the ditch fall without inventing a precise later location;
- Shinzō reaching the vicinity of his father's Ushigome house alive.

This is the right information-hiding boundary for production state.

## Confirmed production defects

### 1. b5c1 — Karasumaru is omitted and Kojirō is an unsupported referenced-character entry

Classification: `missing` + `unsupported_reference`

The chapter explicitly uses **Karasumaru Mitsuhiro's letter of introduction** to get Otsū and Jōtarō through the Fukushima checkpoint.

The source-first oracle therefore records `karasumaru_mitsuhiro` as referenced.

The manifest instead lists `kojiro` as the only referenced character. Kojirō is not named in this chapter.

This is a direct mention-recall false negative plus an unsupported false positive.

### 2. b5c1-e02 — Musashi is falsely co-located at the Fukushima checkpoint passage

Classification: `semantic_mismatch`

The source deliberately establishes that Musashi is walking ahead while Otsū and Jōtarō trail behind. Otsū uses Karasumaru's letter to pass the barrier with Jōtarō.

`b5c1-e02` places Musashi, Otsū and Jōtarō together in the checkpoint event.

The distinction matters because that separation is what makes Matahachi's subsequent interception possible. Production should not collapse the three travelers into one checkpoint-localized group.

### 3. b5c3 — explicit mentioned characters are missing

Classification: `missing`

During Matahachi's coercion of Otsū, the source explicitly invokes:

- **Musashi**, repeatedly, as Matahachi's perceived rival/enemy;
- **Kojirō**, whose warning Matahachi remembers;
- **Okō**, whom Otsū explicitly identifies as someone who helped lead Matahachi astray;
- **Jōtarō**, whom Otsū cries out for after Matahachi bites her.

The manifest records Musashi, Gonnosuke and Kojirō as referenced characters but omits Okō and Jōtarō.

Gonnosuke is not an explicit named recollection in this chapter; his association with the distant torch is at most a later-informed inference and should not substitute for the two explicit names the chapter actually contains.

### 4. b5c5 — several explicit personal references are omitted from the chapter roster

Classification: `missing`

Musashi's discussion and internal reassessment at Shimosuwa explicitly reaches back to people who shaped his current thinking, including Otsū/Jōtarō and earlier teachers/influences. The independent source pass records Otsū, Jōtarō, Karasumaru Mitsuhiro, Kōetsu, Takuan and Sekishūsai as narrative references, while the manifest chapter roster retains only Date Masamune in `referenced_characters`.

Some of these can remain historical/contextual rather than runtime characters, but the current chapter-level mention representation is not exhaustive.

### 5. b5c7 — Matahachi is omitted from referenced characters

Classification: `missing`

When Musashi, Okō and Gion Tōji exchange information, Musashi explicitly reports that **Akemi and Matahachi** had planned to go east and discusses Akemi's subsequent flight.

The manifest records Akemi and Kojirō as referenced, but not Matahachi.

### 6. b5c8 — Matahachi and Sekishūsai are omitted from referenced characters

Classification: `missing`

The Hachiōji chapter contains explicit retrospective/reference material beyond Musashi and Otsū. The source-first pass records Matahachi and Sekishūsai as named narrative references as well.

The manifest lists only Musashi and Otsū.

### 7. b5c11 — Musashi and Matahachi are omitted from the referenced roster

Classification: `missing`

At Sensōji, Osugi's prayer directly concerns both of them: she asks to strike Musashi down and to have Matahachi restored as a good son.

The manifest records Daizō and Obata Kagenori as referenced but omits both Musashi and Matahachi from the chapter roster.

This is another example of why presence and mention coverage need separate metrics.

### 8. b5c12 — Musashi is omitted from referenced characters

Classification: `missing`

The new Kojirō–Osugi–Yajibei alliance is explicitly connected to Osugi's ongoing search for Musashi. The source-first oracle records Musashi as referenced.

The manifest chapter roster lists only Obata Kagenori as a referenced character.

### 9. b5c13-e01 — the first Obata ambush is assigned to the school rather than the new-moat scene

Classification: `geography_mismatch`

Kojirō, Jūrō and Koroku are walking through the new-moat construction area when the Obata students emerge and attack. Only after the fight do surviving students return toward the Obata school, where Shinzō and Kagenori become involved in the aftermath.

`b5c13-e01` uses `obata_school` as the location of the ambush.

This conflates **the combat scene** with **the later institutional destination**.

The safest correction is an unresolved/new-moat route scene or a broader Edo-road location, not a fabricated exact point.

### 10. b5c18 — Yagyū Sekishūsai is missing from referenced characters

Classification: `missing`

Musashi explicitly reflects that he is now too late to have a bout with Sekishūsai and instead still wants to test himself against Munenori.

The manifest records Munenori and Takuan as referenced, but not Sekishūsai.

### 11. b5c18 — the chapter-defining fly demonstration has no production event

Classification: `missing`

This is not incidental color. Kumagorō and the horse traders are preparing a humiliating confrontation after Iori's noise complaint. Musashi responds without drawing a weapon: while eating soba he repeatedly catches live flies with his chopsticks. The demonstration changes the traders' assessment of him and causes the threatened violence to evaporate.

Kumagorō exists in the physical roster, but none of the four production events represents the scene.

Because the chapter is literally titled **The Flies**, this is a meaningful event-recall omission.

### 12. b5c18-e03 — Sukekurō's encounter is attached to the inn rather than the horse market

Classification: `geography_mismatch`

Musashi meets Kimura Sukekurō among the horses in the Bakurōchō market before settling into the nearby inn.

`b5c18-e03` assigns `bakurocho_inn` to the reunion.

The two places are narratively adjacent but not equivalent. This is a small scene-location mismatch, not merely naming style.

### 13. b5c19 — the ethical core of the “soul polisher” scene is over-compressed

Classification: `compressed`

Production correctly preserves:

- Kōsuke's initial refusal;
- the shared Kōetsu connection;
- the sword/Kannon exchange;
- recognition of Kojirō's Drying Pole.

What is not preserved as an event/state change is the central reason for the refusal and Musashi's response: Kōsuke explains that the craftsman's real task includes **polishing the samurai's soul**, and that the sword should preserve integrity/order rather than exist merely to cut people efficiently. Musashi accepts the criticism and reassesses the moral spirit of his own swordsmanship.

This is a legitimate compression for a minimal map, but it is not exhaustive semantic coverage and should be available to the context/wiki layer.

### 14. b5c20 — Sekishūsai and Munenori are missing from the chapter's reference roster

Classification: `missing`

The Otsū/Hyōgo material explicitly sits inside the Yagyū household context and includes direct reference to Sekishūsai and Munenori. The source-first oracle records both.

The manifest records only Musashi, Matahachi and Kimura Sukekurō.

### 15. b5c21 — Musashi is omitted from referenced characters

Classification: `missing`

The chapter's concluding irony depends on Musashi: Iori is carrying Musashi's letter while he passes Otsū without recognizing who she is, and Otsū likewise does not know the boy's connection to Musashi.

The manifest lists Sekishūsai and Shōda Kizaemon but omits Musashi from `referenced_characters`.

### 16. b5c22 — the filial-piety transformation is missing as an event

Classification: `missing`

Jūrō and the Hangawara men initially mock the sutra Osugi is copying. As the text describing parental sacrifice and filial neglect is read aloud, the room's mood changes and the men become emotionally overwhelmed.

Production preserves Osugi's departure, Koroku being sent after her and Kojirō's later arrival, but not the chapter-defining `sutra_effect` transformation.

This is semantically analogous to the missing fly demonstration in b5c18: the named chapter's central behavioral change falls between the extracted action events.

### 17. b5c24 — Sekishūsai and Obata Kagenori are omitted from referenced characters

Classification: `missing`

Sukekurō's letter says Hyōgo has left for Yamato because **Sekishūsai is gravely ill**. Musashi then leaves Kōsuke's house to report Shinzō's condition to the Obata side, whose institutional head is Kagenori.

The independent source pass records both as references; the manifest roster does not.

### 18. b5c24-e04 — an intended destination is represented as the current event location

Classification: `geography_mismatch`

At the end of the chapter Musashi is still at Kōsuke's house when he tells Iori he is going to a place near Hirakawa Shrine in Kōjimachi. He then departs.

`b5c24-e04` uses `obata_school` as the event's location while describing that departure.

The actual arrival and conversation at the Obata Academy belong to b5c25. This should be represented as `from Kōsuke's house -> intended Obata/Hirakawa destination`, not as an already-confirmed arrival.

### 19. b5c25 — Tadatoshi and Iwama Kakubei are missing from referenced characters

Classification: `missing`

Nakatogawa Handayū explicitly tells Yogorō that the Hosokawa household already knows of Shinzō's defeat, that Kojirō is Kakubei's guest and that even Lord Tadatoshi has heard the news.

The manifest records only Shinzō and Kojirō as referenced.

### 20. b5c25 — Kagenori's succession/peace doctrine is underrepresented

Classification: `compressed`

Kagenori does more than admire Musashi's alertness. He explicitly says that his military science is no longer aimed at conquest in the manner of earlier warlords: its purpose is now **peace and stability**. He judges Yogorō too immature to inherit that work and wants to find a mature person to whom he can entrust both his ideas and his son's future.

The existing production events preserve the sighting, Yogorō's failed search and Handayū's news, but not this major intellectual/succession decision.

This is one of the strongest semantic-compression findings in Book V.

### 21. b5c25-e04 — Handayū's meeting is located at the school instead of the Kōjimachi road

Classification: `geography_mismatch`

Yogorō fails to find Musashi, searches the shrine grounds and main Kōjimachi street, and then encounters Nakatogawa Handayū outside while returning.

`b5c25-e04` assigns `obata_school` to the news encounter.

The event belongs to the surrounding Kōjimachi road context; only Yogorō's subsequent return is toward the school.

### 22. b5c26 — Jūrō and Koroku are omitted from referenced characters

Classification: `missing`

During the confrontation, Shinzō explicitly explains that he had good reason for killing **Jūrō and Koroku** and that their actions were part of the Kojirō/Obata feud.

The manifest's referenced roster contains Kojirō, Yajibei and Osugi but omits the two named dead men whose deaths are the immediate reason the Hangawara gang is attacking Shinzō.

## Confirmed compression / secondary coverage gaps

These do not all need to become runtime events. They do matter if a downstream report claims exhaustive chapter semantics.

### b5c3 — coercion is more structured than a single confinement event

Production correctly records the confinement/bite, horse seizure and back-road travel. The source additionally distinguishes:

- repeated whipping;
- sexual threat/coercion;
- the bite deliberately used as a lasting “brand”;
- Otsū fainting from pain;
- the farmer being detained and then released at Otsū's insistence;
- the explicit Ubagami/Gombei clandestine route choice.

The current four-event representation is good for a map, but not a complete abuse/state-change record.

### b5c4 — the second Gonnosuke bout carries a specific mutual lesson

The production `rematch` event records the contest, and the separation event records the outcome. The source goes further: Musashi deliberately avoids a cutting strike, Gonnosuke still reaches Musashi's chest, and Musashi rejects a simplistic winner/loser interpretation while crediting both Gonnosuke and his mother's insight.

This transformation is worth preserving in the semantic/context layer.

### b5c5–b5c6 — Date recruitment and unsolicited money are one causal chain

Production represents the recruitment, Geki's departure and the later discovery of the money. The source explicitly frames the money as a potential **political obligation**: Musashi worries that accepting/using it would tacitly bind him to Date service.

The relationship between gift and obligation should remain available even if the UI keeps separate concise events.

### b5c9 — coercive adoption wording should remain stronger than generic protection

Production's relationship note correctly says not to normalize the situation as consensual adoption. That safeguard should also guide any future concise event wording: Daizō explicitly gives Jōtarō a choice between becoming his son and being killed, and later threatens death if the hidden gold is revealed.

### b5c15 — the agricultural arc is an explicit design lesson

Production preserves cultivation, supply, adaptation and the stable result. The source's deeper progression is:

1. brute effort fails repeatedly;
2. Musashi realizes the rectangular-field design is being imposed on the landscape;
3. he studies water/soil rather than fighting them;
4. the design changes to fit the terrain;
5. agricultural work becomes part of his martial discipline.

This is not a data-model defect; it is useful semantic depth for the mini-wiki/context layer.

### b5c16–b5c17 — Musashi's purpose is to make the village independent of him

The production defense and search events are correct. The source additionally emphasizes that Musashi's teaching culminates in a community that can work and defend itself after he disappears without ceremony.

That continuity helps explain why Sado's later arrival is a “missed recruitment” rather than simply an absent character.

### b5c20 — Otsū's rescue is retrospective, not a chapter-20 present-time encounter with Sukekurō

Production already marks this correctly in the relationship record. That distinction should be retained anywhere the event is later surfaced to the UI.

### b5c26 — the final escape is a doctrine of restraint, not merely route movement

Production correctly records the nonlethal escape and reputation attack. The source also has Musashi explicitly teach Shinzō that there are situations where running rather than answering insults with killing is the right course.

This matters because the subsequent “coward” reputation is deliberately ironic: Edo judges precisely the restraint the chapter has presented as mature judgment.

## Referenced-character recall

Mention extraction remains substantially weaker than physical-presence extraction.

Confirmed or source-supported omissions include at least:

- b5c1 — Karasumaru Mitsuhiro;
- b5c3 — Okō and Jōtarō;
- b5c5 — Otsū, Jōtarō, Karasumaru, Kōetsu, Takuan and Sekishūsai are part of the chapter's explicit personal reference field, while production preserves only a subset through character/context mechanisms;
- b5c7 — Matahachi;
- b5c8 — Matahachi and Sekishūsai;
- b5c11 — Musashi and Matahachi;
- b5c12 — Musashi;
- b5c18 — Sekishūsai;
- b5c19 — Iori and Myōshū are explicit source references not present in the chapter manifest roster;
- b5c20 — Sekishūsai and Munenori;
- b5c21 — Musashi;
- b5c22 — Matahachi and Koroku are source-level references around Osugi's vow/errand structure, though Koroku is also physically involved and should be normalized accordingly;
- b5c24 — Sekishūsai and Kagenori;
- b5c25 — Tadatoshi and Iwama Kakubei;
- b5c26 — Jūrō and Koroku.

This again demonstrates that **physical presence coverage and mention coverage must not share one completeness score**.

## First-pass oracle self-corrections

Reverse comparison exposed production facts that were rechecked against the source and found to be correct. These are errors or normalization omissions in the frozen first-pass oracle, not production defects.

### b5c6 — Gion Tōji is the later-revealed identity of the ambush leader

The chapter does not yet give the reader Tōji's name, so the oracle correctly avoided exposing the identity in reader-facing wording. However, the physical person who attacks Musashi carries into b5c7, where he is explicitly revealed as Gion Tōji.

Using canonical `gion_toji` internally for physical continuity is defensible provided the display layer remains spoiler-bounded.

### b5c8 — the unidentified attacker can legitimately use production's `scarred_ronin` canonical placeholder

The oracle retained him as a functional unnamed actor because the source does not supply a personal name. Production's dedicated unidentified-character ID is a reasonable normalization, not an invented identity.

### b5c9 — Akemi and Shōji Jinnai are physically present at the chapter boundary

The first-pass oracle roster listed only Jōtarō, Daizō and Sukeichi. The source explicitly states that before sunrise **Jinnai had his troupe, Akemi restored to it, on the road**.

Production is correct to include both `shoji_jinnai` and `akemi` in b5c9 physical presence.

### b5c10 — Ushi is a named physical participant

The oracle left Ushi under `functional_actors`. The source names him and production has a canonical `ushi` entry.

Production's physical roster is therefore more correctly normalized.

### b5c14 — San'emon's body is a physical narrative presence

San'emon is already dead when Musashi meets the boy, but the body is physically present and Musashi helps Iori carry and bury him.

Production's `sanemon` physical/state treatment is correct.

### b5c17 — Satō Genzō is a named physical attendant

The oracle recorded him as a functional actor. Production promotes `sato_genzo` to a named physical character, which is justified by the source.

### b5c19 and b5c26 — Kōsuke's wife is a named/normalized household participant

The oracle left her as a functional unnamed actor. Production's stable `kosuke_wife` placeholder is reasonable because she speaks and participates directly in the household/care scenes.

### b5c22 — Koroku is physically involved, not merely referenced

The first-pass oracle recorded Koroku in the referenced field. The source scene has him within the Hangawara action chain before Jūrō sends him after Osugi. Production's physical presence is the better normalization.

The oracle remains frozen for auditability; these corrections belong in the diff rather than being silently rewritten into the first pass.

## Relationships and identity

Book V does **not** reveal a structural failure in the relationship model.

Particularly good records include:

- `daizo -> jotaro`: coercive claimed guardianship, explicitly not consensual adoption;
- `nagaoka_sado -> musashi`: recruitment interest without a meeting;
- `kimura_sukekuro -> otsu`: retrospective rescue/protection rather than a present-time b5c20 encounter;
- `yagyu_hyogo -> otsu`: protective friendship with Hyōgo's unspoken affection, with no reciprocal romance inferred;
- `zushino_kosuke -> musashi`: artisan/client, host and ethical interlocutor;
- `zushino_kosuke -> hojo_shinzo`: rescuer/caregiver;
- `obata_kagenori -> obata_yogoro`: father/son succession tension;
- `kojiro -> osugi`: ally/second in the revenge plot.

The runtime relationship thresholds are also spoiler-safe. In particular, later Book VI/VII developments are not back-propagated into Book V.

No new relationship type or manager/helper layer is justified by these findings.

## Geography assessment

Book V geography is **high precision, incomplete recall**.

Strong design properties:

- unresolved private residences remain `unmappable` or `exact_site_unresolved`;
- real corridors such as the Nakasendō/Wada route are not converted into fabricated point coordinates;
- Hachiōji's mound/fortress material is kept unresolved;
- Hōtengahara remains a narrative toponym rather than receiving false modern precision;
- Yagyū/Hōjō private residences are not falsely geolocated.

Confirmed scene-location errors are comparatively few:

- b5c13 first Obata ambush: new-moat road scene incorrectly collapsed into `obata_school`;
- b5c18 Sukekurō reunion: horse market collapsed into `bakurocho_inn`;
- b5c24 departure toward Obata: intended destination used as if already current location;
- b5c25 Handayū encounter: Kōjimachi road encounter collapsed into `obata_school`.

These share one root cause: **destination/container leakage into event location**.

The remediation should therefore strengthen one invariant rather than patch four unrelated cases:

> An event `location` must describe where the represented action occurs. Intended destination, subsequent destination and institutional affiliation must remain separate fields/concepts.

## Root-cause diagnosis

Book V reinforces the diagnosis already seen in Books III–IV.

### What is not broken

- canonical identity design;
- spoiler thresholds;
- relationship taxonomy;
- conservative geographic precision policy;
- final-state modeling;
- structural validators and source provenance.

### What is still weak

1. **Mention recall has no independent completeness oracle in production.**
   The manifest can validate that recorded references are coherent, but it cannot discover names it never extracted.

2. **A fixed small event budget tends to preserve actions and discard transformations.**
   The fly demonstration, filial-piety effect, Kōsuke's moral lesson and Kagenori's peace/succession doctrine are exactly the kinds of chapter-defining changes that disappear when extraction prefers only travel/fight/arrival events.

3. **Location can leak from destination or scene container into the actual action.**
   The b5c13/b5c18/b5c24/b5c25 findings are all manifestations of the same modeling discipline problem.

The correct future fix is therefore not a larger API. It is tighter extraction/validation policy:

- independent source-first mention coverage;
- semantic-event coverage trigger for material changes in belief, relationship, information or decision;
- explicit `current scene` vs `intended destination` distinction when validating movement events.

## Recommended remediation after Books VI–VII

Do not patch these Book V records immediately in isolation.

After the remaining independent audits are complete, group findings by invariant and repair them coherently:

1. **Mention pass:** add missing referenced-character/context links in one corpus-wide pass.
2. **Location invariant:** correct every destination-as-current-location case and, if useful, add a validator/test fixture around the normalized event contract.
3. **Semantic-event pass:** add only chapter-defining transformations that materially improve the context/wiki layer; do not force every oracle fact into runtime events.
4. **Oracle normalization:** if a cleaned second-edition oracle is desired, preserve this frozen first pass and its self-correction trail rather than rewriting history.

## Book V conclusion

Book V is **substantially correct and structurally well designed**.

Its strongest layers are:

- major movements;
- final states;
- identities/aliases;
- relationship uncertainty;
- major conflicts and continuity;
- conservative geography.

Its weakest layers are:

- exhaustive mentioned-character coverage;
- chapter-defining ethical/psychological transformations;
- a few event-location assignments where destination and current scene are conflated.

The independent audit therefore changes the claim from:

> “Book V data is validated.”

into the more precise:

> “Book V production is internally validated and captures the major narrative structure very well; independent source comparison has identified a finite set of semantic recall and scene-location gaps that must be remediated before claiming exhaustive coverage.”
