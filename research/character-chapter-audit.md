# Coerenza dei dati personaggio per capitolo

> Generato da `node tools/generate-character-chapter-audit.mjs`. Le fonti narrative locali, non il web, sono l'autorità per presenza, azioni e relazioni.

## Esito e metodo

- Capitoli confrontati con i dossier di produzione: **112/112**.
- Personaggi censiti: **155**.
- Eventi/azioni verificati: **758**.
- Stati/posizioni finali verificati: **420**.
- Relazioni canoniche verificate alla soglia d'introduzione: **83**.
- Errori bloccanti: **0**.
- Presenze sceniche senza evento o stato dedicato (controllate contro i dossier indipendenti): **25**.

Questo rapporto verifica la coerenza dei record esistenti con i dossier di produzione. Non certifica che ogni fatto del romanzo sia stato estratto: dossier e dati possono condividere la stessa omissione o lo stesso errore. Per la completezza narrativa consultare `research/source-audit/` e il riesame capitolo per capitolo del 2026-09-30.

La posizione intra-capitolo deriva esclusivamente dagli eventi con partecipazione fisica; lo stato finale è riportato solo quando esiste un record esplicito. I personaggi nominati, ricordati o riferiti restano separati. Le co-azioni indicano interazione nello stesso evento, non creano automaticamente una relazione canonica.

## Diagnostica

- Nessun errore bloccante.

- NOTA — b3c9: iwa è presenza scenica attestata dal dossier, senza evento/stato strutturato dedicato
- NOTA — b3c9: baiken_infant è presenza scenica attestata dal dossier, senza evento/stato strutturato dedicato
- NOTA — b4c4: miike_jurozaemon è presenza scenica attestata dal dossier, senza evento/stato strutturato dedicato
- NOTA — b5c12: osugi è presenza scenica attestata dal dossier, senza evento/stato strutturato dedicato
- NOTA — b6c2: osugi è presenza scenica attestata dal dossier, senza evento/stato strutturato dedicato
- NOTA — b6c3: iwama_kakubei è presenza scenica attestata dal dossier, senza evento/stato strutturato dedicato
- NOTA — b6c6: hojo_shinzo è presenza scenica attestata dal dossier, senza evento/stato strutturato dedicato
- NOTA — b6c8: yajibei è presenza scenica attestata dal dossier, senza evento/stato strutturato dedicato
- NOTA — b6c8: omitsu è presenza scenica attestata dal dossier, senza evento/stato strutturato dedicato
- NOTA — b6c8: numata_kajuro è presenza scenica attestata dal dossier, senza evento/stato strutturato dedicato
- NOTA — b6c8: kamei_hyosuke è presenza scenica attestata dal dossier, senza evento/stato strutturato dedicato
- NOTA — b6c8: negoro_hachikuro è presenza scenica attestata dal dossier, senza evento/stato strutturato dedicato
- NOTA — b6c8: ito_magobei è presenza scenica attestata dal dossier, senza evento/stato strutturato dedicato
- NOTA — b6c11: iori è presenza scenica attestata dal dossier, senza evento/stato strutturato dedicato
- NOTA — b6c11: kuro è presenza scenica attestata dal dossier, senza evento/stato strutturato dedicato
- NOTA — b6c12: kuro è presenza scenica attestata dal dossier, senza evento/stato strutturato dedicato
- NOTA — b6c15: hojo_shinzo è presenza scenica attestata dal dossier, senza evento/stato strutturato dedicato
- NOTA — b6c16: takuan è presenza scenica attestata dal dossier, senza evento/stato strutturato dedicato
- NOTA — b6c16: iori è presenza scenica attestata dal dossier, senza evento/stato strutturato dedicato
- NOTA — b6c16: hojo_ujikatsu è presenza scenica attestata dal dossier, senza evento/stato strutturato dedicato
- NOTA — b7c4: daisuke_wife è presenza scenica attestata dal dossier, senza evento/stato strutturato dedicato
- NOTA — b7c5: nambanya è presenza scenica attestata dal dossier, senza evento/stato strutturato dedicato
- NOTA — b7c9: jotaro è presenza scenica attestata dal dossier, senza evento/stato strutturato dedicato
- NOTA — b7c12: tatsunosuke è presenza scenica attestata dal dossier, senza evento/stato strutturato dedicato
- NOTA — b7c13: omitsu è presenza scenica attestata dal dossier, senza evento/stato strutturato dedicato

## Libro I — Earth

### 1. The Little Bell (b1c1)

Fonte: `data/source/book1/chapter1-the-little-bell.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Shinmen Takezo (`musashi`) | scena: `sekigahara`; percorso (confirmed_route): `sekigahara` → `mount_ibuki_area`; percorso (direction_only): `mount_ibuki_area` → `tarui`; scena: `oko_akemi_house` | `oko_akemi_house`; hiding; arrived wounded with Matahachi and is recovering (explicit; data/source/book1/chapter1-the-little-bell.txt) | Canoniche: Hon'den Matahachi: friend_ally/childhood_best_friend (introdotta qui)<br>Co-azioni: Hon'den Matahachi, Akemi, Oko |
| Hon'den Matahachi (`matahachi`) | scena: `sekigahara`; percorso (confirmed_route): `sekigahara` → `mount_ibuki_area`; percorso (direction_only): `mount_ibuki_area` → `tarui`; scena: `oko_akemi_house` | `oko_akemi_house`; present; recovers from illness with Takezo (explicit; data/source/book1/chapter1-the-little-bell.txt) | Canoniche: Shinmen Takezo: friend_ally/childhood_best_friend (introdotta qui); Oko: partner_family/intended_marriage (introdotta qui)<br>Co-azioni: Shinmen Takezo, Akemi, Oko |
| Akemi (`akemi`) | scena: `oko_akemi_house` | `oko_akemi_house`; present; shelters and tends the two stragglers (explicit; data/source/book1/chapter1-the-little-bell.txt) | Canoniche: Oko: family/daughter_mother (introdotta qui)<br>Co-azioni: Shinmen Takezo, Hon'den Matahachi, Oko |
| Oko (`oko`) | scena: `oko_akemi_house` | `oko_akemi_house`; present; shelters Takezo and Matahachi (explicit; data/source/book1/chapter1-the-little-bell.txt) | Canoniche: Hon'den Matahachi: partner_family/intended_marriage (introdotta qui); Akemi: family/daughter_mother (introdotta qui)<br>Co-azioni: Shinmen Takezo, Hon'den Matahachi, Akemi |

Azioni ed evidenza:

- `b1c1-01` — **battle_context** @ `sekigahara`: Takezo is wounded and left among the dead after the Battle of Sekigahara; the chapter recounts the collapse of the Western Army. — fisici: Shinmen Takezō. Evidenza: explicit; book1/chapter1.
- `b1c1-02` — **meeting** @ `sekigahara`: Takezo discovers that Matahachi survived and the two reunite on the battlefield. — fisici: Shinmen Takezō, Hon'den Matahachi. Evidenza: explicit; book1/chapter1.
- `b1c1-audit-s03` — **danger_evasion** @ `sekigahara`: They play dead while mounted troops pass directly through the battlefield. — fisici: Shinmen Takezō, Hon'den Matahachi. Evidenza: explicit; data/source/book1/chapter1-the-little-bell.txt.
- `b1c1-03` — **journey**: The two leave the battlefield and spend two days foraging in the Mount Ibuki area. — fisici: Shinmen Takezō, Hon'den Matahachi. Evidenza: explicit; book1/chapter1.
- `b1c1-04` — **journey**: They travel in what they believe is the direction of Tarui; the text does not establish an arrival in Tarui before the next refuge scene. — fisici: Shinmen Takezō, Hon'den Matahachi. Evidenza: explicit; book1/chapter1.
- `b1c1-audit-s06` — **first_encounter**: They physically encounter Akemi among battlefield corpses before reaching her home. — fisici: Shinmen Takezō, Hon'den Matahachi, Akemi. Evidenza: explicit; data/source/book1/chapter1-the-little-bell.txt.
- `b1c1-05` — **arrival** @ `oko_akemi_house`: Akemi and Oko shelter the two sick stragglers in their mountain house. — fisici: Shinmen Takezō, Hon'den Matahachi, Akemi, Oko. Evidenza: explicit; book1/chapter1.
- `b1c1-audit-s08` — **recovery** @ `oko_akemi_house`: Matahachi is treated for illness and Takezo tends his bullet wounds during an extended stay. — fisici: Shinmen Takezō, Hon'den Matahachi, Akemi, Oko. Evidenza: explicit; data/source/book1/chapter1-the-little-bell.txt.
- `b1c1-06` — **conversation** @ `oko_akemi_house`: Akemi reveals that her family makes and sells moxa and that patrols remain active after Sekigahara. — fisici: Shinmen Takezō, Hon'den Matahachi, Akemi. Evidenza: explicit; book1/chapter1.
- `b1c1-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Ogin, Matahachi's mother, Otsu. Evidenza: explicit; data/source/book1/chapter1-the-little-bell.txt.

Relazioni introdotte o rivelate qui:

- Shinmen Takezo → Hon'den Matahachi: **friend_ally/childhood_best_friend** (soglia 1).
- Hon'den Matahachi → Shinmen Takezo: **friend_ally/childhood_best_friend** (soglia 1).
- Hon'den Matahachi → Oko: **partner_family/intended_marriage** (soglia 1).
- Akemi → Oko: **family/daughter_mother** (soglia 1).

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Takezō's sister (`ogin`), Matahachi's mother (`osugi`), Otsu (`otsu`).

### 2. The Comb (b1c2)

Fonte: `data/source/book1/chapter2-the-comb.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Shinmen Takezo (`musashi`) | percorso (confirmed_route): `oko_akemi_house` → `mount_ibuki_area`; scena: `mount_ibuki_area`; scena: `oko_akemi_house`; percorso (uncertain_route): `oko_akemi_house` → `unknown` | `oko_akemi_house`; present; returns from the mountain after the confrontation with Temma and finds the house empty (explicit; data/source/book1/chapter2-the-comb.txt) | Canoniche: Hon'den Matahachi: friend_ally/childhood_best_friend; Tsujikaze Temma: enemy/direct_combat (introdotta qui)<br>Co-azioni: Hon'den Matahachi, Akemi, Oko, Tsujikaze Temma |
| Hon'den Matahachi (`matahachi`) | scena: `oko_akemi_house` | luogo non risolto; away; leaves the refuge with Oko and Akemi during the night (explicit; data/source/book1/chapter2-the-comb.txt) | Canoniche: Shinmen Takezo: friend_ally/childhood_best_friend; Oko: partner_family/intended_marriage<br>Co-azioni: Shinmen Takezo, Akemi, Oko, Tsujikaze Temma |
| Akemi (`akemi`) | percorso (confirmed_route): `oko_akemi_house` → `mount_ibuki_area`; scena: `mount_ibuki_area`; scena: `oko_akemi_house` | luogo non risolto; away; leaves the refuge with Oko and Matahachi during the night (explicit; data/source/book1/chapter2-the-comb.txt) | Canoniche: Oko: family/daughter_mother; Tsujikaze Temma: enemy/territorial_extortion_and_father_death_claim (introdotta qui)<br>Co-azioni: Shinmen Takezo, Hon'den Matahachi, Oko, Tsujikaze Temma |
| Oko (`oko`) | scena: `oko_akemi_house` | luogo non risolto; away; leaves the refuge with Matahachi and Akemi during the night (explicit; data/source/book1/chapter2-the-comb.txt) | Canoniche: Hon'den Matahachi: partner_family/intended_marriage; Akemi: family/daughter_mother; Tsujikaze Temma: enemy/territorial_conflict (introdotta qui)<br>Co-azioni: Shinmen Takezo, Hon'den Matahachi, Akemi |
| Tsujikaze Temma (`temma`) | scena: `mount_ibuki_area`; scena: `oko_akemi_house` | `mount_ibuki_area`; dead; is killed by Takezo on Mount Ibuki (explicit; data/source/book1/chapter2-the-comb.txt) | Canoniche: Shinmen Takezo: enemy/direct_combat (introdotta qui); Akemi: enemy/territorial_extortion_and_father_death_claim (introdotta qui); Oko: enemy/territorial_conflict (introdotta qui)<br>Co-azioni: Shinmen Takezo, Hon'den Matahachi, Akemi |

Azioni ed evidenza:

- `b1c2-01` — **journey**: Takezo goes mushroom hunting in the mountain with Akemi. — fisici: Shinmen Takezō, Akemi. Evidenza: explicit; book1/chapter2.
- `b1c2-02` — **meeting** @ `mount_ibuki_area`: Tsujikaze Temma confronts Akemi and demands a share of her family's illicit earnings. — fisici: Shinmen Takezō, Akemi, Tsujikaze Temma. Evidenza: explicit; book1/chapter2.
- `b1c2-03` — **revelation** @ `mount_ibuki_area`: Akemi admits that she scavenges battlefields for valuables and says Temma is believed to have killed her father. — fisici: Shinmen Takezō, Akemi. Evidenza: explicit; book1/chapter2.
- `b1c2-audit-s04` — **object_transfer** @ `oko_akemi_house`: Oko gives Takezo a heavy black-oak practice sword taken from battlefield plunder. — fisici: Shinmen Takezō, Oko. Evidenza: explicit; data/source/book1/chapter2-the-comb.txt.
- `b1c2-audit-s05` — **sexual_advance** @ `oko_akemi_house`: Oko enters Takezo's sleeping space at night and makes a sexual advance that he rejects. — fisici: Shinmen Takezō, Oko. Evidenza: explicit; data/source/book1/chapter2-the-comb.txt.
- `b1c2-04` — **fight** @ `oko_akemi_house`: Temma and his men raid the house; Takezo and Matahachi resist them. — fisici: Shinmen Takezō, Hon'den Matahachi, Tsujikaze Temma. Evidenza: explicit; book1/chapter2.
- `b1c2-05` — **fight** @ `mount_ibuki_area`: Takezo pursues Temma and kills him with the wooden sword. — fisici: Shinmen Takezō, Tsujikaze Temma. Evidenza: explicit; book1/chapter2.
- `b1c2-audit-s08` — **violent_death** @ `oko_akemi_house`: Matahachi kills one unnamed member of Temma's group during the fighting. — fisici: Hon'den Matahachi. Evidenza: explicit; data/source/book1/chapter2-the-comb.txt.
- `b1c2-audit-s09` — **warning** @ `oko_akemi_house`: The household warns that Temma's younger brother Kohei is more dangerous and may retaliate. — fisici: Shinmen Takezō, Akemi, Oko, Hon'den Matahachi. Evidenza: explicit; data/source/book1/chapter2-the-comb.txt.
- `b1c2-audit-s10` — **relationship_shift** @ `oko_akemi_house`: Matahachi and Oko become increasingly intimate during the final night at the house. — fisici: Hon'den Matahachi, Oko. Evidenza: explicit; data/source/book1/chapter2-the-comb.txt.
- `b1c2-06` — **departure**: The final scene establishes that Oko, Akemi and Matahachi have left the refuge together; their destination is not established. Takezo remains behind and discovers the empty house. — fisici: Shinmen Takezō; menzionati: Hon'den Matahachi, Oko, Akemi. Evidenza: explicit; book1/chapter2.
- `b1c2-audit-s12` — **discovery** @ `oko_akemi_house`: Takezo wakes to the empty house, finds Oko's red comb and thinks of Otsu. — fisici: Shinmen Takezō. Evidenza: explicit; data/source/book1/chapter2-the-comb.txt.
- `b1c2-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Tsujikaze Kohei, Takezō's sister, Otsu. Evidenza: explicit; data/source/book1/chapter2-the-comb.txt.

Relazioni introdotte o rivelate qui:

- Shinmen Takezo → Tsujikaze Temma: **enemy/direct_combat** (soglia 2).
- Akemi → Tsujikaze Temma: **enemy/territorial_extortion_and_father_death_claim** (soglia 2).
- Oko → Tsujikaze Temma: **enemy/territorial_conflict** (soglia 2).
- Tsujikaze Temma → Tsujikaze Kohei: **family/older_brother_younger_brother** (soglia 2).

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Tsujikaze Kohei (`kohei`), Ogin (`ogin`), Otsu (`otsu`).

### 3. The Flower Festival (b1c3)

Fonte: `data/source/book1/chapter3-the-flower-festival.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Shinmen Takezo (`musashi`) | scena: `shippoji` | `shippoji`; fled; appears at the flower festival and flees when Otsu recognizes him (explicit; data/source/book1/chapter3-the-flower-festival.txt) | Canoniche: Ogin: family/younger_brother_older_sister (introdotta qui); Takuan Sōhō: master/spiritual_and_moral_guide (introdotta qui); Otsu: friend_ally/deep_personal_bond (introdotta qui)<br>Co-azioni: Otsu |
| Otsu (`otsu`) | scena: `shippoji`; percorso (confirmed_route): `shippoji` → `aida_river`; percorso (confirmed_route): `aida_river` → `ogin_house`; scena: `ogin_house` | `shippoji`; present; participates in the flower festival (explicit; data/source/book1/chapter3-the-flower-festival.txt) | Canoniche: Shinmen Takezo: friend_ally/deep_personal_bond (introdotta qui); Takuan Sōhō: acquaintance/trusted_guide (introdotta qui); Ogin: acquaintance/friend_and_seamstress (introdotta qui)<br>Co-azioni: Shinmen Takezo, Takuan Sōhō, Ogin |
| Takuan Sōhō (`takuan`) | scena: `shippoji`; percorso (confirmed_route): `shippoji` → `aida_river`; percorso (confirmed_route): `aida_river` → `ogin_house`; scena: `ogin_house` | `shippoji`; present; stays at the temple during the festival (explicit; data/source/book1/chapter3-the-flower-festival.txt) | Canoniche: Shinmen Takezo: master/spiritual_and_moral_guide (introdotta qui); Otsu: acquaintance/trusted_guide (introdotta qui)<br>Co-azioni: Otsu, Ogin |
| Ogin (`ogin`) | scena: `ogin_house` | `ogin_house`; present; meets Otsu and Takuan and discusses the presumed deaths of Takezo and Matahachi (explicit; data/source/book1/chapter3-the-flower-festival.txt) | Canoniche: Shinmen Takezo: family/younger_brother_older_sister (introdotta qui); Otsu: acquaintance/friend_and_seamstress (introdotta qui)<br>Co-azioni: Otsu, Takuan Sōhō |

Azioni ed evidenza:

- `b1c3-01` — **arrival** @ `shippoji`: The narrative shifts to Miyamoto, where Otsu lives at Shippoji and Takuan is staying at the temple. — fisici: Otsu, Takuan Sōhō. Evidenza: explicit; book1/chapter3.
- `b1c3-02` — **journey**: Otsu and Takuan walk down to the Aida River to gather flowers for the festival. — fisici: Otsu, Takuan Sōhō. Evidenza: explicit; book1/chapter3.
- `b1c3-03` — **journey**: Otsu and Takuan go to Ogin's house to collect Otsu's festival obi. — fisici: Otsu, Takuan Sōhō. Evidenza: explicit; book1/chapter3.
- `b1c3-04` — **meeting** @ `ogin_house`: Otsu meets Ogin and learns that the family believes Takezo and Matahachi died at Sekigahara. — fisici: Otsu, Takuan Sōhō, Ogin. Evidenza: explicit; book1/chapter3.
- `b1c3-audit-s05` — **memorial_action** @ `ogin_house`: Otsu reacts emotionally to memorial inscriptions treating Takezo and Matahachi as dead. — fisici: Otsu. Evidenza: explicit; data/source/book1/chapter3-the-flower-festival.txt.
- `b1c3-05` — **appearance** @ `shippoji`: Otsu sees Takezo in the crowd during the flower festival; he immediately disappears to avoid capture. — fisici: Shinmen Takezō, Otsu. Evidenza: explicit; book1/chapter3.
- `b1c3-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Hon'den Matahachi. Evidenza: explicit; data/source/book1/chapter3-the-flower-festival.txt.

Relazioni introdotte o rivelate qui:

- Shinmen Takezo → Ogin: **family/younger_brother_older_sister** (soglia 3).
- Shinmen Takezo → Takuan Sōhō: **master/spiritual_and_moral_guide** (soglia 3).
- Shinmen Takezo → Otsu: **friend_ally/deep_personal_bond** (soglia 3).
- Hon'den Matahachi → Otsu: **partner_family/betrothed_at_book_start** (soglia 3).
- Otsu → Takuan Sōhō: **acquaintance/trusted_guide** (soglia 3).
- Ogin → Otsu: **acquaintance/friend_and_seamstress** (soglia 3).

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Hon'den Matahachi (`matahachi`).

### 4. The Dowager's Wrath (b1c4)

Fonte: `data/source/book1/chapter4-the-dowagers-wrath.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Shinmen Takezo (`musashi`) | percorso (confirmed_route): `shippoji` → `sanumo_mountains`; scena: `shippoji`; scena: `honiden_house` | `sanumo_mountains`; hiding; evades the search and moves between the mountains and the village outskirts (explicit; data/source/book1/chapter4-the-dowagers-wrath.txt) | Canoniche: Ogin: family/younger_brother_older_sister; Takuan Sōhō: master/spiritual_and_moral_guide; Otsu: friend_ally/deep_personal_bond; Obaba Osugi: enemy/family_conflict_and_pursuit (introdotta qui)<br>Co-azioni: Otsu, Obaba Osugi, Himeji garrison captain |
| Otsu (`otsu`) | scena: `ogin_house`; scena: `shippoji` | `shippoji`; present; returns to Shippoji after witnessing Ogin's arrest and remains under Takuan's protection (explicit; data/source/book1/chapter4-the-dowagers-wrath.txt) | Canoniche: Shinmen Takezo: friend_ally/deep_personal_bond; Obaba Osugi: partner_family/future_daughter_in_law (introdotta qui); Takuan Sōhō: acquaintance/trusted_guide; Ogin: acquaintance/friend_and_seamstress<br>Co-azioni: Shinmen Takezo, Takuan Sōhō, Obaba Osugi, Ogin, Himeji garrison captain |
| Takuan Sōhō (`takuan`) | scena: `shippoji` | `shippoji`; present; receives Otsu after the raid and continues managing Takezo's situation (explicit; data/source/book1/chapter4-the-dowagers-wrath.txt) | Canoniche: Shinmen Takezo: master/spiritual_and_moral_guide; Otsu: acquaintance/trusted_guide<br>Co-azioni: Otsu |
| Obaba Osugi (`osugi`) | scena: `honiden_house`; scena: `miyamoto`; scena: `ogin_house` | `honiden_house`; present; organizes the trap that attempts to capture Takezo (explicit; data/source/book1/chapter4-the-dowagers-wrath.txt) | Canoniche: Shinmen Takezo: enemy/family_conflict_and_pursuit (introdotta qui); Otsu: partner_family/future_daughter_in_law (introdotta qui)<br>Co-azioni: Shinmen Takezo, Otsu, Ogin, Heita, Himeji garrison captain |
| Ogin (`ogin`) | scena: `ogin_house`; percorso (uncertain_route): `ogin_house` → `hinagura` | luogo non risolto; imprisoned; is arrested at her house; a villager reports only a rumor that she is held at Hinagura (explicit; data/source/book1/chapter4-the-dowagers-wrath.txt) | Canoniche: Shinmen Takezo: family/younger_brother_older_sister; Otsu: acquaintance/friend_and_seamstress<br>Co-azioni: Otsu, Obaba Osugi, Himeji garrison captain |
| Heita (`heita`) | scena: `honiden_house` | `honiden_house`; present; brings Osugi news about Takezo (explicit; data/source/book1/chapter4-the-dowagers-wrath.txt) | Co-azioni: Obaba Osugi |
| Himeji garrison captain (`aoki_tanzaemon`) | scena: `miyamoto`; percorso (uncertain_route): `ogin_house` → `hinagura`; scena: `shippoji`; scena: `honiden_house` | `miyamoto`; searching; leads the Himeji search and participates in Ogin's arrest (explicit; data/source/book1/chapter4-the-dowagers-wrath.txt) | Co-azioni: Shinmen Takezo, Otsu, Obaba Osugi, Ogin |

Azioni ed evidenza:

- `b1c4-audit-s01` — **information** @ `honiden_house`: Heita tells Osugi that Otsu saw Takezo at the festival. — fisici: Heita, Matahachi's mother. Evidenza: explicit; data/source/book1/chapter4-the-dowagers-wrath.txt.
- `b1c4-01` — **search** @ `miyamoto`: Osugi learns that Takezo has been seen and the Himeji garrison begins an intensified search. — fisici: Obaba Osugi, Aoki Tanzaemon; menzionati: Shinmen Takezō. Evidenza: explicit; book1/chapter4.
- `b1c4-02` — **escape**: Takezo repeatedly evades the Himeji soldiers and hides in the Sanumo Mountains. — fisici: Shinmen Takezō. Evidenza: explicit; book1/chapter4.
- `b1c4-audit-s02` — **visit** @ `ogin_house`: Osugi and Otsu go to Ogin's house seeking Takezo and information about Matahachi. — fisici: Obaba Osugi, Otsu, Ogin. Evidenza: explicit; data/source/book1/chapter4-the-dowagers-wrath.txt.
- `b1c4-03` — **capture**: Himeji soldiers raid Ogin's house and arrest her. A villager later reports only a rumor that she is held at Hinagura, so arrival there is not yet confirmed. Otsu witnesses the arrest and escapes. — fisici: Ogin, Aoki Tanzaemon. Evidenza: explicit; book1/chapter4.
- `b1c4-audit-s04` — **refuge_and_information** @ `shippoji`: Otsu reaches Takuan at Shippoji and reports Ogin's arrest. — fisici: Otsu, Takuan Sōhō. Evidenza: explicit; data/source/book1/chapter4-the-dowagers-wrath.txt.
- `b1c4-audit-s06` — **forced_information**: Takezo questions a charcoal maker and learns Ogin was arrested and is rumored to be at Hinagura. — fisici: Shinmen Takezō. Evidenza: explicit; data/source/book1/chapter4-the-dowagers-wrath.txt.
- `b1c4-audit-s07` — **intervention_and_escape** @ `shippoji`: Takezo returns physically to Shippoji, sees the Himeji officer assaulting Otsu, strikes him and escapes as the alarm is raised. — fisici: Shinmen Takezō, Otsu, Aoki Tanzaemon. Evidenza: explicit; data/source/book1/chapter4-the-dowagers-wrath.txt.
- `b1c4-04` — **conversation** @ `honiden_house`: Takezo secretly tells Osugi that Matahachi is alive and asks her to pass the news to Otsu. — fisici: Shinmen Takezō, Matahachi's mother. Evidenza: explicit; book1/chapter4.
- `b1c4-audit-summons` — **betrayal_preparation** @ `honiden_house`: Osugi sends her daughter-in-law to summon armed help while Takezō is bathing. — fisici: Obaba Osugi; menzionati: Shinmen Takezō. Evidenza: explicit; data/source/book1/chapter4-the-dowagers-wrath.txt.
- `b1c4-05` — **trap** @ `honiden_house`: Osugi deceives Takezo into taking a bath while a group of soldiers and villagers surround the house; Takezo escapes. — fisici: Shinmen Takezō, Matahachi's mother, Aoki Tanzaemon. Evidenza: explicit; book1/chapter4.
- `b1c4-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Hon'den Matahachi. Evidenza: explicit; data/source/book1/chapter4-the-dowagers-wrath.txt.

Relazioni introdotte o rivelate qui:

- Shinmen Takezo → Obaba Osugi: **enemy/family_conflict_and_pursuit** (soglia 4).
- Hon'den Matahachi → Obaba Osugi: **family/son_mother** (soglia 4).
- Obaba Osugi → Otsu: **partner_family/future_daughter_in_law** (soglia 4).

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Hon'den Matahachi (`matahachi`).

### 5. The Art of War (b1c5)

Fonte: `data/source/book1/chapter5-the-art-of-war.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Shinmen Takezo (`musashi`) | scena: `itadori_pasture` | `itadori_pasture`; captured; approaches Takuan and Otsu and is captured (explicit; data/source/book1/chapter5-the-art-of-war.txt) | Canoniche: Takuan Sōhō: master/spiritual_and_moral_guide; Otsu: friend_ally/deep_personal_bond; Obaba Osugi: enemy/family_conflict_and_pursuit<br>Co-azioni: Otsu, Takuan Sōhō |
| Otsu (`otsu`) | scena: `shippoji`; percorso (confirmed_route): `shippoji` → `sanumo_mountains` → `tsujinohara` → `itadori_pasture`; scena: `itadori_pasture` | `itadori_pasture`; present; stays with Takuan and helps bring Takezo into the camp (explicit; data/source/book1/chapter5-the-art-of-war.txt) | Canoniche: Shinmen Takezo: friend_ally/deep_personal_bond; Obaba Osugi: partner_family/future_daughter_in_law; Takuan Sōhō: acquaintance/trusted_guide<br>Co-azioni: Shinmen Takezo, Takuan Sōhō |
| Takuan Sōhō (`takuan`) | percorso (confirmed_route): `shippoji` → `sanumo_mountains` → `tsujinohara` → `itadori_pasture`; scena: `itadori_pasture` | `itadori_pasture`; present; captures Takezo according to his plan (explicit; data/source/book1/chapter5-the-art-of-war.txt) | Canoniche: Shinmen Takezo: master/spiritual_and_moral_guide; Otsu: acquaintance/trusted_guide<br>Co-azioni: Shinmen Takezo, Otsu, Himeji garrison captain |
| Obaba Osugi (`osugi`) | Presenza attestata dal dossier; nessuna tappa evento dedicata | `honiden_house`; present; remains at the Hon'den residence while Takezo is hunted (explicit; data/source/book1/chapter5-the-art-of-war.txt) | Canoniche: Shinmen Takezo: enemy/family_conflict_and_pursuit; Otsu: partner_family/future_daughter_in_law |
| Himeji garrison captain (`aoki_tanzaemon`) | Presenza attestata dal dossier; nessuna tappa evento dedicata | `miyamoto`; searching; continues the search for Takezo (explicit; data/source/book1/chapter5-the-art-of-war.txt) | Co-azioni: Takuan Sōhō |

Azioni ed evidenza:

- `b1c5-01` — **relationship_change** @ `shippoji`: Otsu receives letters from Oko and Matahachi explaining that Matahachi is alive in another province and intends to marry Oko. — fisici: Otsu; menzionati: Hon'den Matahachi, Oko. Evidenza: explicit; book1/chapter5.
- `b1c5-audit-s02` — **emotional_crisis**: The letters trigger a severe emotional crisis before Takuan intervenes. — fisici: Otsu. Evidenza: explicit; data/source/book1/chapter5-the-art-of-war.txt.
- `b1c5-audit-s03` — **confrontation**: Takuan confronts the Himeji officer over the failed manhunt and establishes his personal connection to Ikeda Terumasa. — fisici: Takuan Sōhō, Aoki Tanzaemon. Evidenza: explicit; data/source/book1/chapter5-the-art-of-war.txt.
- `b1c5-audit-s04` — **wager_and_authority_transfer**: The officer agrees that Takuan may decide Takezo's fate if he captures him within three days; Takuan stakes his own life on failure. — fisici: Takuan Sōhō, Aoki Tanzaemon. Evidenza: explicit; data/source/book1/chapter5-the-art-of-war.txt:L299-L360.
- `b1c5-02` — **journey**: Takuan takes Otsu into the mountains and chooses Itadori Pasture as their camp. — fisici: Takuan Sōhō, Otsu. Evidenza: explicit; book1/chapter5.
- `b1c5-audit-s06` — **vigil**: They remain in the mountain area for three days waiting for Takezo; Otsu's flute becomes part of the encounter that draws him near. — fisici: Takuan Sōhō, Otsu. Evidenza: explicit; data/source/book1/chapter5-the-art-of-war.txt.
- `b1c5-03` — **meeting** @ `itadori_pasture`: Takezo approaches their camp after hearing Otsu's flute and is persuaded to come to the fire. — fisici: Shinmen Takezō, Takuan Sōhō, Otsu. Evidenza: explicit; book1/chapter5.
- `b1c5-04` — **capture** @ `itadori_pasture`: Takuan subdues Takezo psychologically and ties him up, completing the promised capture. — fisici: Shinmen Takezō, Takuan Sōhō, Otsu. Evidenza: explicit; book1/chapter5.
- `b1c5-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Ikeda Terumasa, Takezō's sister. Evidenza: explicit; data/source/book1/chapter5-the-art-of-war.txt.

Relazioni introdotte o rivelate qui:

- Takuan Sōhō → Ikeda Terumasa: **acquaintance/trusted_personal_connection** (soglia 5).

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Hon'den Matahachi (`matahachi`), Oko (`oko`), Ikeda Terumasa (`lord_ikeda`), Ogin (`ogin`).

### 6. The Old Cryptomeria Tree (b1c6)

Fonte: `data/source/book1/chapter6-the-old-cryptomeria-tree.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Shinmen Takezo (`musashi`) | percorso (arrival_confirmed): `itadori_pasture` → `shippoji`; scena: `shippoji`; scena: `old_cryptomeria_shippoji` | `old_cryptomeria_shippoji`; imprisoned; is tied to the old cryptomeria at Shippoji (explicit; data/source/book1/chapter6-the-old-cryptomeria-tree.txt) | Canoniche: Takuan Sōhō: master/spiritual_and_moral_guide; Otsu: friend_ally/deep_personal_bond; Obaba Osugi: enemy/family_conflict_and_pursuit<br>Co-azioni: Otsu, Takuan Sōhō, Obaba Osugi, Himeji garrison captain |
| Otsu (`otsu`) | percorso (arrival_confirmed): `itadori_pasture` → `shippoji`; scena: `shippoji`; scena: `old_cryptomeria_shippoji` | `shippoji`; present; remains at the temple and argues for Takezo's life (explicit; data/source/book1/chapter6-the-old-cryptomeria-tree.txt) | Canoniche: Shinmen Takezo: friend_ally/deep_personal_bond; Obaba Osugi: partner_family/future_daughter_in_law; Takuan Sōhō: acquaintance/trusted_guide<br>Co-azioni: Shinmen Takezo, Takuan Sōhō, Obaba Osugi |
| Takuan Sōhō (`takuan`) | percorso (arrival_confirmed): `itadori_pasture` → `shippoji`; scena: `shippoji`; scena: `old_cryptomeria_shippoji` | `shippoji`; present; controls the punishment and prepares Takezo for transformation (explicit; data/source/book1/chapter6-the-old-cryptomeria-tree.txt) | Canoniche: Shinmen Takezo: master/spiritual_and_moral_guide; Otsu: acquaintance/trusted_guide<br>Co-azioni: Shinmen Takezo, Otsu, Obaba Osugi, Himeji garrison captain |
| Obaba Osugi (`osugi`) | scena: `shippoji`; scena: `old_cryptomeria_shippoji` | `old_cryptomeria_shippoji`; present; confronts Takezo at the punishment scene (explicit; data/source/book1/chapter6-the-old-cryptomeria-tree.txt) | Canoniche: Shinmen Takezo: enemy/family_conflict_and_pursuit; Otsu: partner_family/future_daughter_in_law<br>Co-azioni: Shinmen Takezo, Otsu, Takuan Sōhō, Himeji garrison captain |
| Himeji garrison captain (`aoki_tanzaemon`) | scena: `shippoji` | Nessuno stato finale strutturato | Co-azioni: Shinmen Takezo, Takuan Sōhō, Obaba Osugi |

Azioni ed evidenza:

- `b1c6-01` — **arrival**: Takuan brings the captured Takezo back to Shippoji, and Otsu returns to the temple from the mountain camp. — fisici: Shinmen Takezō, Takuan Sōhō, Otsu. Evidenza: explicit; book1/chapter6.
- `b1c6-audit-s02` — **public_judgment** @ `shippoji`: Villagers debate Takezo's fate; Osugi demands harsh punishment and the Himeji officer tries to reclaim official authority. — fisici: Shinmen Takezō, Takuan Sōhō, Matahachi's mother, Aoki Tanzaemon. Evidenza: explicit; data/source/book1/chapter6-the-old-cryptomeria-tree.txt.
- `b1c6-audit-s03` — **authority_dispute** @ `shippoji`: Takuan invokes the prior bargain and prevents the officer from taking custody. — fisici: Takuan Sōhō, Aoki Tanzaemon. Evidenza: explicit; data/source/book1/chapter6-the-old-cryptomeria-tree.txt.
- `b1c6-02` — **restraint** @ `old_cryptomeria_shippoji`: Takezo is tied to the old cryptomeria tree and the villagers demand punishment; Takuan retains authority over his fate. — fisici: Shinmen Takezō, Takuan Sōhō, Matahachi's mother. Evidenza: explicit; book1/chapter6.
- `b1c6-audit-s05` — **marriage_pressure** @ `shippoji`: Osugi pressures Otsu to enter the Hon'iden household as Matahachi's bride before his return. — fisici: Otsu, Matahachi's mother. Evidenza: explicit; data/source/book1/chapter6-the-old-cryptomeria-tree.txt.
- `b1c6-audit-s06` — **transformative_confrontation** @ `shippoji`: Takuan challenges Takezo's ideas of strength, courage and the samurai way while he is bound in the tree. — fisici: Shinmen Takezō, Takuan Sōhō. Evidenza: explicit; data/source/book1/chapter6-the-old-cryptomeria-tree.txt.
- `b1c6-03` — **relationship_change** @ `old_cryptomeria_shippoji`: Otsu increasingly identifies with Takezo's suffering and begins actively seeking his survival. — fisici: Otsu, Shinmen Takezo. Evidenza: explicit; book1/chapter6.
- `b1c6-audit-s08` — **plea** @ `shippoji`: During the storm Otsu repeatedly begs Takuan to release Takezo; he refuses. — fisici: Otsu, Takuan Sōhō. Evidenza: explicit; data/source/book1/chapter6-the-old-cryptomeria-tree.txt.
- `b1c6-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Hon'den Matahachi, Takezō's sister. Evidenza: explicit; data/source/book1/chapter6-the-old-cryptomeria-tree.txt.

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Hon'den Matahachi (`matahachi`), Ogin (`ogin`).

### 7. The Rock and the Tree (b1c7)

Fonte: `data/source/book1/chapter7-the-rock-and-the-tree.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Shinmen Takezo (`musashi`) | percorso (confirmed_route): `old_cryptomeria_shippoji` → `nakayama_pass`; scena: `nakayama_pass`; scena: `hinagura_stockade`; percorso (uncertain_route): `hinagura_stockade` → `unknown` | luogo non risolto; fled; Escapes the Hinagura stockade into the gorge; arrival at Himeji is not established in this chapter. (explicit; data/source/book1/chapter7-the-rock-and-the-tree.txt) | Canoniche: Takuan Sōhō: master/spiritual_and_moral_guide; Otsu: friend_ally/deep_personal_bond; Obaba Osugi: enemy/family_conflict_and_pursuit<br>Co-azioni: Otsu, Takuan Sōhō |
| Otsu (`otsu`) | percorso (confirmed_route): `old_cryptomeria_shippoji` → `nakayama_pass`; scena: `nakayama_pass`; percorso (arrival_confirmed): `nakayama_pass` → `mikazuki_teahouse` | luogo non risolto; away; falls ill at Mikazuki, escapes Osugi and Gonroku, and disappears into a ravine; later recovery is established only in chapter 8 (explicit; data/source/book1/chapter7-the-rock-and-the-tree.txt) | Canoniche: Shinmen Takezo: friend_ally/deep_personal_bond; Obaba Osugi: partner_family/future_daughter_in_law; Takuan Sōhō: acquaintance/trusted_guide<br>Co-azioni: Shinmen Takezo |
| Takuan Sōhō (`takuan`) | Presenza attestata dal dossier; nessuna tappa evento dedicata | `shippoji`; present; remains at Shippoji while Takezo and Otsu escape (explicit; data/source/book1/chapter7-the-rock-and-the-tree.txt) | Canoniche: Shinmen Takezo: master/spiritual_and_moral_guide; Otsu: acquaintance/trusted_guide<br>Co-azioni: Shinmen Takezo |
| Obaba Osugi (`osugi`) | scena: `mikazuki_ravine`; percorso (uncertain_route): `mikazuki_teahouse` → `unknown` | luogo non risolto; away; pursues Otsu with Gonroku after reaching the Mikazuki Teahouse (explicit; data/source/book1/chapter7-the-rock-and-the-tree.txt) | Canoniche: Shinmen Takezo: enemy/family_conflict_and_pursuit; Otsu: partner_family/future_daughter_in_law; Fuchikawa Gonroku: family/sister_in_law_brother_in_law (introdotta qui)<br>Co-azioni: Heita, Fuchikawa Gonroku |
| Heita (`heita`) | Presenza attestata dal dossier; nessuna tappa evento dedicata | `honiden_house`; present; remains in Miyamoto and provides news that triggers Osugi's pursuit (explicit; data/source/book1/chapter7-the-rock-and-the-tree.txt) | Co-azioni: Obaba Osugi, Fuchikawa Gonroku |
| Fuchikawa Gonroku (`gonroku`) | scena: `mikazuki_ravine`; percorso (uncertain_route): `mikazuki_teahouse` → `unknown` | luogo non risolto; away; pursues Otsu with Osugi after reaching the teahouse (explicit; data/source/book1/chapter7-the-rock-and-the-tree.txt) | Canoniche: Obaba Osugi: family/sister_in_law_brother_in_law (introdotta qui)<br>Co-azioni: Obaba Osugi, Heita |

Azioni ed evidenza:

- `b1c7-audit-s01` — **transformative_dialogue**: Takuan continues the confrontation over courage and human purpose until Takezo explicitly asks to live and change. — fisici: Shinmen Takezō, Takuan Sōhō. Evidenza: explicit; data/source/book1/chapter7-the-rock-and-the-tree.txt.
- `b1c7-01` — **escape**: Otsu climbs the tree, cuts Takezo free and escapes with him through the mountains. — fisici: Shinmen Takezō, Otsu. Evidenza: explicit; book1/chapter7.
- `b1c7-02` — **separation** @ `nakayama_pass`: At Nakayama Pass, Takezo decides to rescue Ogin while Otsu agrees to continue toward Himeji and wait at Hanada Bridge. — fisici: Shinmen Takezō, Otsu. Evidenza: explicit; book1/chapter7.
- `b1c7-03` — **journey**: Otsu travels alone toward Himeji, becomes ill and collapses at the Mikazuki Teahouse. — fisici: Otsu. Evidenza: explicit; book1/chapter7.
- `b1c7-audit-s05` — **mobilization**: Heita reports the escape; Osugi mobilizes relatives and tenants and begins pursuit with Gonroku. — fisici: Heita, Matahachi's mother, Fuchikawa Gonroku. Evidenza: explicit; data/source/book1/chapter7-the-rock-and-the-tree.txt.
- `b1c7-audit-s06` — **border_crossing**: A border official refuses the large pursuit party; only Osugi and Gonroku continue across. — fisici: Obaba Osugi, Fuchikawa Gonroku. Evidenza: explicit; data/source/book1/chapter7-the-rock-and-the-tree.txt.
- `b1c7-04` — **pursuit** @ `mikazuki_ravine`: Osugi and Gonroku discover Otsu at the teahouse and pursue her; she escapes by diving into a ravine. The later recovery is deferred to chapter 8. — fisici: Obaba Osugi, Fuchikawa Gonroku. Evidenza: explicit; book1/chapter7.
- `b1c7-05` — **search** @ `hinagura_stockade`: Takezo studies the Hinagura stockade and attacks it to rescue Ogin. — fisici: Shinmen Takezō. Evidenza: explicit; book1/chapter7.
- `b1c7-06` — **revelation** @ `hinagura_stockade`: Takezo learns that Ogin was moved to Himeji before his assault. — fisici: Shinmen Takezō; menzionati: Ogin. Evidenza: explicit; book1/chapter7.
- `b1c7-07` — **journey**: Takezo escapes the Hinagura stockade and runs into the gorge; this chapter does not establish arrival at Himeji. — fisici: Shinmen Takezō. Evidenza: explicit; book1/chapter7.
- `b1c7-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Hon'den Matahachi. Evidenza: explicit; data/source/book1/chapter7-the-rock-and-the-tree.txt.

Relazioni introdotte o rivelate qui:

- Obaba Osugi → Fuchikawa Gonroku: **family/sister_in_law_brother_in_law** (soglia 7).

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Ogin (`ogin`), Hon'den Matahachi (`matahachi`).

### 8. The Birth of Musashi (b1c8)

Fonte: `data/source/book1/chapter8-the-birth-of-musashi.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Miyamoto Musashi (`musashi`) | percorso (arrival_confirmed): `himeji_area` → `hanada_bridge`; scena: `himeji_area`; scena: `himeji_castle`; scena: `hanada_bridge` | luogo non risolto; departed; after release, renaming and meeting Otsu, leaves Himeji to begin his new life (explicit; data/source/book1/chapter8-the-birth-of-musashi.txt) | Canoniche: Takuan Sōhō: master/spiritual_and_moral_guide; Otsu: friend_ally/deep_personal_bond; Ikeda Terumasa: authority/daimyo_and_subject_under_confinement (introdotta qui)<br>Co-azioni: Otsu, Takuan Sōhō, Ikeda Terumasa |
| Otsu (`otsu`) | scena: `hanada_bridge` | `hanada_bridge`; present; meets Musashi after having waited three years at Hanada Bridge (explicit; data/source/book1/chapter8-the-birth-of-musashi.txt) | Canoniche: Miyamoto Musashi: friend_ally/deep_personal_bond; Takuan Sōhō: acquaintance/trusted_guide<br>Co-azioni: Miyamoto Musashi, Takuan Sōhō |
| Takuan Sōhō (`takuan`) | scena: `himeji_area`; scena: `himeji_castle`; scena: `hanada_bridge` | luogo non risolto; departed; releases Musashi, helps establish his new identity and then departs (explicit; data/source/book1/chapter8-the-birth-of-musashi.txt) | Canoniche: Miyamoto Musashi: master/spiritual_and_moral_guide; Otsu: acquaintance/trusted_guide; Ikeda Terumasa: acquaintance/trusted_personal_connection<br>Co-azioni: Miyamoto Musashi, Otsu, Ikeda Terumasa |
| Ikeda Terumasa (`lord_ikeda`) | scena: `himeji_castle` | `himeji_castle`; present; receives Takezo and participates in his release and renaming (explicit; data/source/book1/chapter8-the-birth-of-musashi.txt) | Canoniche: Miyamoto Musashi: authority/daimyo_and_subject_under_confinement (introdotta qui); Takuan Sōhō: acquaintance/trusted_personal_connection<br>Co-azioni: Miyamoto Musashi, Takuan Sōhō |

Azioni ed evidenza:

- `b1c8-01` — **arrival**: Takezo waits around Himeji, including under and on Hanada Bridge, while trying to locate Ogin. — fisici: Shinmen Takezō. Evidenza: explicit; book1/chapter8.
- `b1c8-02` — **meeting** @ `himeji_area`: Takuan finds Takezo and brings him into Himeji Castle. — fisici: Shinmen Takezō, Takuan Sōhō. Evidenza: explicit; book1/chapter8.
- `b1c8-03` — **meeting** @ `himeji_castle`: Takezo appears before Ikeda Terumasa, who accepts Takuan's proposed form of punishment and confinement. — fisici: Shinmen Takezō, Takuan Sōhō, Ikeda Terumasa. Evidenza: explicit; book1/chapter8.
- `b1c8-audit-s04` — **identity_reconciliation** @ `himeji_castle`: The text retrospectively identifies the officer who made the capture bargain as Aoki Tanzaemon; earlier 'Himeji captain/Scraggly Beard' scenes belong to this same person. — fisici: Takuan Sōhō, Ikeda Terumasa; menzionati: Aoki Tanzaemon. Evidenza: explicit; data/source/book1/chapter8-the-birth-of-musashi.txt.
- `b1c8-04` — **imprisonment** @ `himeji_castle`: Takezo remains confined in the castle's dark chamber for approximately three years, studying and reflecting. — fisici: Shinmen Takezō. Evidenza: explicit; book1/chapter8.
- `b1c8-05` — **release** @ `himeji_castle`: After three years, Takuan returns and Takezo is released from confinement. — fisici: Shinmen Takezō, Takuan Sōhō, Ikeda Terumasa. Evidenza: explicit; book1/chapter8.
- `b1c8-06` — **relationship_change** @ `himeji_castle`: Takezo is renamed Miyamoto Musashi and rejects immediate service as a vassal, choosing to travel independently. — fisici: Shinmen Takezō, Takuan Sōhō, Ikeda Terumasa. Evidenza: explicit; book1/chapter8.
- `b1c8-07` — **information** @ `himeji_area`: Takuan reports the later whereabouts of Ogin, the continued search by Osugi and Gonroku, and Aoki Tanzaemon's dismissal from Ikeda's service. — fisici: Shinmen Takezō, Takuan Sōhō; menzionati: Ogin, Matahachi's mother, Fuchikawa Gonroku, Aoki Tanzaemon. Evidenza: explicit; book1/chapter8.
- `b1c8-08` — **meeting** @ `hanada_bridge`: Musashi meets Otsu, who has waited for him for three years at Hanada Bridge. — fisici: Shinmen Takezō, Otsu. Evidenza: explicit; book1/chapter8.
- `b1c8-audit-s11` — **retrospective_rescue_report** @ `hanada_bridge`: Otsu explains that Takuan rescued her from the ravine near Mikazuki and arranged her work near Hanada Bridge. — fisici: Otsu, Takuan Sōhō. Evidenza: explicit; data/source/book1/chapter8-the-birth-of-musashi.txt.
- `b1c8-09` — **separation** @ `hanada_bridge`: Musashi refuses to take Otsu with him and leaves alone toward the east after leaving her a farewell message. — fisici: Shinmen Takezō, Otsu. Evidenza: explicit; book1/chapter8.
- `b1c8-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Hon'den Matahachi. Evidenza: explicit; data/source/book1/chapter8-the-birth-of-musashi.txt.

Relazioni introdotte o rivelate qui:

- Miyamoto Musashi → Ikeda Terumasa: **authority/daimyo_and_subject_under_confinement** (soglia 8).
- Aoki Tanzaemon → Ikeda Terumasa: **servant_employer/vassal** (soglia 8).

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Aoki Tanzaemon (`aoki_tanzaemon`), Ogin (`ogin`), Obaba Osugi (`osugi`), Fuchikawa Gonroku (`gonroku`), Hon'den Matahachi (`matahachi`).

## Libro II — Water

### 9. The Yoshioka School (b2c1)

Fonte: `data/source/book2/chapter1-the-yoshioka-school.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Hon'den Matahachi (`matahachi`) | scena: `yomogi` | `yomogi`; present; remains isolated in a back room within the establishment (explicit; data/source/book2/chapter1-the-yoshioka-school.txt) | Canoniche: Oko: partner_family/intended_marriage<br>Co-azioni: Akemi, Oko |
| Akemi (`akemi`) | percorso (arrival_confirmed): `kamo_river_pleasure_district` → `yomogi`; scena: `yomogi` | `yomogi`; present; remains at Yomogi after entertaining Seijuro (explicit; data/source/book2/chapter1-the-yoshioka-school.txt) | Canoniche: Oko: family/daughter_mother<br>Co-azioni: Hon'den Matahachi, Oko, Yoshioka Seijūrō, Gion Tōji |
| Oko (`oko`) | percorso (arrival_confirmed): `kamo_river_pleasure_district` → `yomogi`; scena: `yomogi` | `yomogi`; present; receives the Yoshioka visitors and remains at her establishment (explicit; data/source/book2/chapter1-the-yoshioka-school.txt) | Canoniche: Hon'den Matahachi: partner_family/intended_marriage; Akemi: family/daughter_mother<br>Co-azioni: Hon'den Matahachi, Akemi, Yoshioka Seijūrō, Gion Tōji |
| Yoshioka Seijūrō (`yoshioka_seijuro`) | percorso (confirmed_route): `yoshioka_school` → `kamo_river_pleasure_district`; scena: `kamo_river_pleasure_district`; percorso (confirmed_route): `kamo_river_pleasure_district` → `yomogi`; percorso (arrival_confirmed): `kamo_river_pleasure_district` → `yomogi`; scena: `yomogi` | `yomogi`; present; remains at Yomogi after leaving the first pleasure-district house (explicit; data/source/book2/chapter1-the-yoshioka-school.txt) | Canoniche: Gion Tōji: master/school_head_and_senior_follower (introdotta qui); Ueda Ryōhei: master/school_head_and_senior_disciple (introdotta qui)<br>Co-azioni: Akemi, Oko, Gion Tōji, Ueda Ryōhei |
| Gion Tōji (`gion_toji`) | percorso (confirmed_route): `yoshioka_school` → `kamo_river_pleasure_district`; scena: `kamo_river_pleasure_district`; percorso (confirmed_route): `kamo_river_pleasure_district` → `yomogi`; percorso (arrival_confirmed): `kamo_river_pleasure_district` → `yomogi`; scena: `yomogi` | `yomogi`; present; stays overnight at Yomogi after negotiating with Oko (explicit; data/source/book2/chapter1-the-yoshioka-school.txt) | Canoniche: Yoshioka Seijūrō: master/school_head_and_senior_follower (introdotta qui)<br>Co-azioni: Akemi, Oko, Yoshioka Seijūrō, Ueda Ryōhei |
| Ueda Ryōhei (`ueda_ryohei`) | percorso (confirmed_route): `yoshioka_school` → `kamo_river_pleasure_district`; scena: `kamo_river_pleasure_district` | `kamo_river_pleasure_district`; present; remains with the Yoshioka students when Seijuro and Toji leave (explicit; data/source/book2/chapter1-the-yoshioka-school.txt) | Canoniche: Yoshioka Seijūrō: master/school_head_and_senior_disciple (introdotta qui)<br>Co-azioni: Yoshioka Seijūrō, Gion Tōji |

Azioni ed evidenza:

- `b2c1-e01` — **journey**: Seijuro, Toji, Ryohei and the Yoshioka students leave the school for the Kamo River pleasure district. — fisici: Yoshioka Seijūrō, Gion Tōji, Ueda Ryōhei. Evidenza: explicit; book2/chapter1.
- `b2c1-e02` — **conversation** @ `kamo_river_pleasure_district`: The Yoshioka group drinks, sings and argues in a pleasure-district house. — fisici: Yoshioka Seijūrō, Gion Tōji, Ueda Ryōhei. Evidenza: explicit; book2/chapter1.
- `b2c1-e03` — **intervention** @ `kamo_river_pleasure_district`: Toji and Ryohei separate two students after a fight. — fisici: Gion Tōji, Ueda Ryōhei. Evidenza: explicit; book2/chapter1.
- `b2c1-e04` — **departure**: Seijuro leaves the first establishment and Toji follows him to Yomogi while Ryohei remains with the students. — fisici: Yoshioka Seijūrō, Gion Tōji. Evidenza: explicit; book2/chapter1.
- `b2c1-e05` — **arrival**: Seijuro and Toji arrive at Yomogi, where Oko and Akemi receive them. — fisici: Yoshioka Seijūrō, Gion Tōji, Oko, Akemi. Evidenza: explicit; book2/chapter1.
- `b2c1-e06` — **conversation** @ `yomogi`: Toji and Oko negotiate privately at Yomogi. — fisici: Gion Tōji, Oko. Evidenza: explicit; book2/chapter1.
- `b2c1-e07` — **relationship** @ `yomogi`: Seijuro drinks and flirts with Akemi at Yomogi. — fisici: Yoshioka Seijūrō, Akemi. Evidenza: explicit; book2/chapter1.
- `b2c1-e08` — **relationship** @ `yomogi`: Oko and Matahachi argue about their marriage while Matahachi remains isolated in a back room. — fisici: Oko, Hon'den Matahachi. Evidenza: explicit; book2/chapter1.
- `b2c1-audit-s07` — **memory_and_regret**: Matahachi remembers Otsu, his mother and Miyamoto, recognizes his decline and resolves to leave Oko. — fisici: Hon'den Matahachi. Evidenza: explicit; data/source/book2/chapter1-the-yoshioka-school.txt.
- `b2c1-audit-s08` — **attempted_departure**: Matahachi leaves by the kitchen door, returns for money, searches Oko's belongings and remains trapped by indecision. — fisici: Hon'den Matahachi. Evidenza: explicit; data/source/book2/chapter1-the-yoshioka-school.txt.
- `b2c1-e09` — **relationship** @ `yomogi`: Akemi interacts with Matahachi within the Yomogi household. — fisici: Akemi, Hon'den Matahachi. Evidenza: explicit; book2/chapter1.
- `b2c1-audit-messenger` — **reported_challenge**: A Yoshioka messenger reports that Musashi is at the school defeating its men and waiting for Seijūrō. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Shinmen Takezō, Yoshioka Seijūrō. Evidenza: explicit; data/source/book2/chapter1-the-yoshioka-school.txt.
- `b2c1-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Otsu, Yoshioka Denshichirō, Yoshioka Kempō. Evidenza: explicit; data/source/book2/chapter1-the-yoshioka-school.txt.

Relazioni introdotte o rivelate qui:

- Yoshioka Seijūrō → Gion Tōji: **master/school_head_and_senior_follower** (soglia 9).
- Yoshioka Seijūrō → Ueda Ryōhei: **master/school_head_and_senior_disciple** (soglia 9).
- Yoshioka Seijūrō → Yoshioka Denshichirō: **family/older_brother_younger_brother** (soglia 9).

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Miyamoto Musashi (`musashi`), Otsu (`otsu`), Yoshioka Denshichirō (`yoshioka_denshichiro`), Yoshioka Kempō (`yoshioka_kempo`).

### 10. The Wheel of Fortune (b2c2)

Fonte: `data/source/book2/chapter2-the-wheel-of-fortune.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Miyamoto Musashi (`musashi`) | percorso (arrival_confirmed): `yoshioka_school`; scena: `yoshioka_school`; percorso (uncertain_route): `yoshioka_school` → `unknown` | luogo non risolto; fled; escapes the school through the floorboards; his immediate destination is not established (explicit; data/source/book2/chapter2-the-wheel-of-fortune.txt) | Canoniche: Hon'den Matahachi: friend_ally/childhood_best_friend; Yoshioka Seijūrō: rival/formal_school_challenge (introdotta qui)<br>Co-azioni: Gion Tōji, Ueda Ryōhei |
| Hon'den Matahachi (`matahachi`) | scena: `honnoji_ruins` | `honnoji_ruins`; present; remains beside the Honnōji moat after the Yoshioka pursuers release him (explicit; data/source/book2/chapter2-the-wheel-of-fortune.txt) | Canoniche: Miyamoto Musashi: friend_ally/childhood_best_friend<br>Co-azioni: Gion Tōji, Ueda Ryōhei |
| Yoshioka Seijūrō (`yoshioka_seijuro`) | percorso (arrival_confirmed): `yoshioka_school`; scena: `yoshioka_school` | `yoshioka_school`; present; returns to the school and participates in the deliberation over Musashi (explicit; data/source/book2/chapter2-the-wheel-of-fortune.txt) | Canoniche: Gion Tōji: master/school_head_and_senior_follower; Ueda Ryōhei: master/school_head_and_senior_disciple; Miyamoto Musashi: rival/formal_school_challenge (introdotta qui)<br>Co-azioni: Gion Tōji, Ueda Ryōhei |
| Gion Tōji (`gion_toji`) | percorso (arrival_confirmed): `yoshioka_school`; scena: `yoshioka_school`; percorso (confirmed_route): `yoshioka_school` → `honnoji_ruins`; scena: `honnoji_ruins` | `yoshioka_school`; present; returns with Seijuro and coordinates the response to Musashi (explicit; data/source/book2/chapter2-the-wheel-of-fortune.txt) | Canoniche: Yoshioka Seijūrō: master/school_head_and_senior_follower<br>Co-azioni: Miyamoto Musashi, Hon'den Matahachi, Yoshioka Seijūrō, Ueda Ryōhei |
| Ueda Ryōhei (`ueda_ryohei`) | scena: `yoshioka_school`; percorso (confirmed_route): `yoshioka_school` → `honnoji_ruins`; scena: `honnoji_ruins` | `yoshioka_school`; present; participates in consultation, guard activity and the pursuit (explicit; data/source/book2/chapter2-the-wheel-of-fortune.txt) | Canoniche: Yoshioka Seijūrō: master/school_head_and_senior_disciple<br>Co-azioni: Miyamoto Musashi, Hon'den Matahachi, Yoshioka Seijūrō, Gion Tōji |

Azioni ed evidenza:

- `b2c2-e01` — **arrival**: Musashi enters the Yoshioka School after accepting its challenge. — fisici: Shinmen Takezō. Evidenza: explicit; book2/chapter2.
- `b2c2-e02` — **fight** @ `yoshioka_school`: Musashi defeats successive Yoshioka challengers; several disciples are wounded and two later die. — fisici: Shinmen Takezō. Evidenza: explicit; book2/chapter2.
- `b2c2-e03` — **arrival**: Seijuro and Toji return to the school and assess the aftermath of Musashi's bouts. — fisici: Yoshioka Seijūrō, Gion Tōji. Evidenza: explicit; book2/chapter2.
- `b2c2-e04` — **deliberation** @ `yoshioka_school`: Seijuro, Toji, Ryohei and senior disciples deliberate on how to deal with Musashi. — fisici: Yoshioka Seijūrō, Gion Tōji, Ueda Ryōhei. Evidenza: explicit; book2/chapter2.
- `b2c2-e05` — **ambush** @ `yoshioka_school`: The Yoshioka group attempts a night ambush in Musashi's assigned room. — fisici: Shinmen Takezō, Gion Tōji, Ueda Ryōhei. Evidenza: explicit; book2/chapter2.
- `b2c2-e06` — **escape**: Musashi escapes through the floorboards and leaves the school by an unestablished route. — fisici: Shinmen Takezō. Evidenza: explicit; book2/chapter2.
- `b2c2-e07` — **pursuit**: Yoshioka pursuers leave the back gate and chase a fleeing figure toward the burned Honnōji ruins. — fisici: Gion Tōji, Ueda Ryōhei. Evidenza: explicit; book2/chapter2.
- `b2c2-e08` — **capture** @ `honnoji_ruins`: The pursuers capture Matahachi near Honnōji, mistaking him for Musashi. — fisici: Hon'den Matahachi, Gion Tōji, Ueda Ryōhei. Evidenza: explicit; book2/chapter2.
- `b2c2-e09` — **recognition** @ `honnoji_ruins`: Toji recognizes Matahachi from Yomogi and the pursuers discover their error. — fisici: Hon'den Matahachi, Gion Tōji. Evidenza: explicit; book2/chapter2.
- `b2c2-e10` — **revelation** @ `honnoji_ruins`: Left by the Honnōji moat, Matahachi recognizes Musashi's new name and resolves to warn him. — fisici: Hon'den Matahachi; menzionati: Shinmen Takezō. Evidenza: explicit; book2/chapter2.
- `b2c2-e11` — **reported_location**: Denshichiro is reported absent in Ise; this report does not place him physically at the Yoshioka School. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Yoshioka Denshichirō. Evidenza: explicit; book2/chapter2.
- `b2c2-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Yoshioka Kempō. Evidenza: explicit; data/source/book2/chapter2-the-wheel-of-fortune.txt.

Relazioni introdotte o rivelate qui:

- Miyamoto Musashi → Yoshioka Seijūrō: **rival/formal_school_challenge** (soglia 10).

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Yoshioka Denshichirō (`yoshioka_denshichiro`), Yoshioka Kempō (`yoshioka_kempo`).

### 11. Encounter and Retreat (b2c3)

Fonte: `data/source/book2/chapter3-encounter-and-retreat.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Miyamoto Musashi (`musashi`) | scena: `chawan_hill`; percorso (arrival_confirmed): `chawan_hill` → `kiyomizudera`; scena: `kiyomizudera`; percorso (arrival_confirmed): `kiyomizudera` → `hongando`; percorso (arrival_confirmed): `hongando`; scena: `hongando`; percorso (uncertain_route): `hongando` → `kiyomizudera` | luogo non risolto; fled; escapes the Kiyomizudera and Hongando search area after refusing the confrontation (explicit; data/source/book2/chapter3-encounter-and-retreat.txt) | Canoniche: Obaba Osugi: enemy/family_conflict_and_pursuit<br>Co-azioni: Obaba Osugi, Fuchikawa Gonroku |
| Obaba Osugi (`osugi`) | percorso (arrival_confirmed): `hongando`; scena: `hongando`; percorso (uncertain_route): `hongando` → `kiyomizudera` | `kiyomizudera`; searching; joins the search of the temple grounds and surrounding hills after confronting Musashi (explicit; data/source/book2/chapter3-encounter-and-retreat.txt) | Canoniche: Miyamoto Musashi: enemy/family_conflict_and_pursuit; Fuchikawa Gonroku: family/sister_in_law_brother_in_law<br>Co-azioni: Miyamoto Musashi, Fuchikawa Gonroku |
| Fuchikawa Gonroku (`gonroku`) | percorso (arrival_confirmed): `hongando`; scena: `hongando`; percorso (uncertain_route): `hongando` → `kiyomizudera` | `kiyomizudera`; searching; searches the temple area with Osugi after Musashi escapes (explicit; data/source/book2/chapter3-encounter-and-retreat.txt) | Canoniche: Obaba Osugi: family/sister_in_law_brother_in_law<br>Co-azioni: Miyamoto Musashi, Obaba Osugi |

Azioni ed evidenza:

- `b2c3-e01` — **observation** @ `chawan_hill`: Musashi observes potters in the ceramic district on the road below Kiyomizudera. — fisici: Shinmen Takezō. Evidenza: explicit; book2/chapter3.
- `b2c3-e02` — **journey**: Musashi climbs to the Kiyomizudera grounds and stops at a cliff overlooking Kyoto. — fisici: Shinmen Takezō. Evidenza: explicit; book2/chapter3.
- `b2c3-e03` — **identification** @ `kiyomizudera`: A palanquin bearer identifies Musashi and carries the information back toward Chawan Hill. — fisici: Shinmen Takezō. Evidenza: explicit; book2/chapter3.
- `b2c3-e04` — **confrontation**: Porters surround Musashi on the approach to Hongando. — fisici: Shinmen Takezō. Evidenza: explicit; book2/chapter3.
- `b2c3-e05` — **arrival**: Osugi and Gonroku arrive at Hongando and confront Musashi. — fisici: Obaba Osugi, Fuchikawa Gonroku, Shinmen Takezo. Evidenza: explicit; book2/chapter3.
- `b2c3-e06` — **confrontation** @ `hongando`: Musashi refuses the family revenge confrontation and walks through the crowd without fighting Osugi or Gonroku. — fisici: Shinmen Takezō, Matahachi's mother, Fuchikawa Gonroku. Evidenza: explicit; book2/chapter3.
- `b2c3-e07` — **escape**: The crowd searches the Kiyomizudera hills until sunset while Musashi escapes through the wider area. — fisici: Shinmen Takezō, Matahachi's mother, Fuchikawa Gonroku. Evidenza: explicit; book2/chapter3.
- `b2c3-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Hon'den Matahachi, Takezō's sister, Takuan Sōhō. Evidenza: explicit; data/source/book2/chapter3-encounter-and-retreat.txt.

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Hon'den Matahachi (`matahachi`), Ogin (`ogin`), Takuan Sōhō (`takuan`).

### 12. The Water Sprite (b2c4)

Fonte: `data/source/book2/chapter4-the-water-sprite.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Miyamoto Musashi (`musashi`) | scena: `kyoto_cheap_inn`; percorso (confirmed_route): `kyoto_cheap_inn` → `daigo`; scena: `sanjo_checkpoint`; scena: `daigo`; scena: `rokuamida`; percorso (direction_only): `rokuamida` → `unknown` | luogo non risolto; departed; leaves Rokuamida toward Nara; arrival is not yet established (explicit; data/source/book2/chapter4-the-water-sprite.txt) | Canoniche: Hon'den Matahachi: friend_ally/childhood_best_friend; Jōtarō: master/traveling_mentor_and_young_follower (introdotta qui)<br>Co-azioni: Jōtarō |
| Hon'den Matahachi (`matahachi`) | scena: `sake_shop` | `sake_shop`; present; writes a letter to Musashi and entrusts it to Jotaro (explicit; data/source/book2/chapter4-the-water-sprite.txt) | Canoniche: Miyamoto Musashi: friend_ally/childhood_best_friend<br>Co-azioni: Jōtarō |
| Jōtarō (`jotaro`) | scena: `kyoto_cheap_inn`; scena: `sake_shop`; percorso (confirmed_route): `kyoto_cheap_inn` → `daigo`; scena: `daigo`; scena: `rokuamida`; percorso (direction_only): `rokuamida` → `unknown` | luogo non risolto; departed; turns back toward Kyoto after separating from Musashi (explicit; data/source/book2/chapter4-the-water-sprite.txt) | Canoniche: Miyamoto Musashi: master/traveling_mentor_and_young_follower (introdotta qui)<br>Co-azioni: Miyamoto Musashi, Hon'den Matahachi |

Azioni ed evidenza:

- `b2c4-e01` — **meeting** @ `kyoto_cheap_inn`: Jotaro visits the innkeeper at a cheap inn northwest of Kyoto. — fisici: Jōtarō. Evidenza: explicit; book2/chapter4.
- `b2c4-e02` — **meeting** @ `kyoto_cheap_inn`: Musashi returns to the inn and talks with Jotaro in the hearth room. — fisici: Shinmen Takezō, Jōtarō. Evidenza: explicit; book2/chapter4.
- `b2c4-e03` — **message** @ `kyoto_cheap_inn`: Jotaro writes the innkeeper's letter and handles it for Musashi. — fisici: Jōtarō, Shinmen Takezo. Evidenza: explicit; book2/chapter4.
- `b2c4-e04` — **meeting** @ `sake_shop`: Jotaro works at the sake shop, where Matahachi later gives him a letter for Musashi. — fisici: Jōtarō, Hon'den Matahachi. Evidenza: explicit; book2/chapter4.
- `b2c4-audit-s02` — **family_reveal**: Jotaro states that his father is Aoki Tanzaemon, a former 2,500-koku samurai who lost his status; Musashi explicitly reflects on his own role in Tanzaemon's misfortune. — fisici: Jōtarō, Shinmen Takezo. Evidenza: explicit; data/source/book2/chapter4-the-water-sprite.txt.
- `b2c4-audit-s03` — **discipleship_request**: Jotaro asks to become Musashi's follower and Musashi conditionally agrees if the boy obtains his master's consent. — fisici: Jōtarō, Shinmen Takezo. Evidenza: explicit; data/source/book2/chapter4-the-water-sprite.txt.
- `b2c4-e05` — **departure**: Musashi leaves the inn toward Nara and Jotaro follows him. — fisici: Shinmen Takezō, Jōtarō. Evidenza: explicit; book2/chapter4.
- `b2c4-e06` — **journey** @ `sanjo_checkpoint`: Musashi passes the Sanjo Avenue security checkpoint. — fisici: Shinmen Takezō. Evidenza: explicit; book2/chapter4.
- `b2c4-e07` — **reunion** @ `daigo`: Musashi and Jotaro reunite on the Daigo mountain road after Jotaro's pursuit. — fisici: Shinmen Takezō, Jōtarō. Evidenza: explicit; book2/chapter4.
- `b2c4-e08` — **message** @ `rokuamida`: Musashi and Jotaro stop at Rokuamida, where Musashi writes to Seijuro. — fisici: Shinmen Takezō, Jōtarō; menzionati: Yoshioka Seijūrō. Evidenza: explicit; book2/chapter4.
- `b2c4-e09` — **separation**: Jotaro turns back toward Kyoto while Musashi continues toward Nara; neither arrival occurs in this event. — fisici: Shinmen Takezō, Jōtarō. Evidenza: explicit; book2/chapter4.
- `b2c4-e10` — **message** @ `sake_shop`: Jotaro receives Matahachi's letter for Musashi; no physical meeting between the two men occurs. — fisici: Jōtarō; menzionati: Hon'den Matahachi, Shinmen Takezo. Evidenza: explicit; book2/chapter4.
- `b2c4-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Aoki Tanzaemon, Yagyū Munenori, Takuan Sōhō, Tsukahara Bokuden, Yoshioka Kempō. Evidenza: explicit; data/source/book2/chapter4-the-water-sprite.txt.

Relazioni introdotte o rivelate qui:

- Miyamoto Musashi → Jōtarō: **master/traveling_mentor_and_young_follower** (soglia 12).
- Aoki Tanzaemon → Jōtarō: **family/father_and_separated_son** (soglia 12).

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Yoshioka Seijūrō (`yoshioka_seijuro`), Aoki Tanzaemon (`aoki_tanzaemon`), Yagyū sword instructor (`munenori`), Takuan Sōhō (`takuan`), Tsukahara Bokuden (`tsukahara_bokuden`), Yoshioka Kempō (`yoshioka_kempo`).

### 13. A Spring Breeze (b2c5)

Fonte: `data/source/book2/chapter5-a-spring-breeze.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Otsu (`otsu`) | scena: `mampukuji`; percorso (confirmed_route): `mampukuji` → `uji_bridge`; scena: `uji_bridge`; percorso (confirmed_route): `uji_bridge` → `kizugawa_ferry`; scena: `kizugawa_ferry` | luogo non risolto; departed; continues toward Koyagyu with Kizaemon after separating from Jotaro (explicit; data/source/book2/chapter5-a-spring-breeze.txt) | Canoniche: Jōtarō: friend_ally/travel_companions_and_message_bearers (introdotta qui); Shōda Kizaemon: acquaintance/travel_companions_toward_koyagyu (introdotta qui)<br>Co-azioni: Jōtarō, Shōda Kizaemon |
| Jōtarō (`jotaro`) | scena: `yomogi`; percorso (confirmed_route): `yomogi` → `yamato_highroad` → `mampukuji`; scena: `mampukuji`; percorso (confirmed_route): `mampukuji` → `uji_bridge`; scena: `uji_bridge`; percorso (confirmed_route): `uji_bridge` → `kizugawa_ferry`; scena: `kizugawa_ferry` | luogo non risolto; departed; separates from Otsu and Kizaemon and continues toward Nara (explicit; data/source/book2/chapter5-a-spring-breeze.txt) | Canoniche: Otsu: friend_ally/travel_companions_and_message_bearers (introdotta qui)<br>Co-azioni: Otsu, Akemi, Shōda Kizaemon |
| Akemi (`akemi`) | scena: `yomogi` | `yomogi`; present; meets Jotaro and answers his questions about Matahachi (explicit; data/source/book2/chapter5-a-spring-breeze.txt) | Co-azioni: Jōtarō |
| Shōda Kizaemon (`shoda_kizaemon`) | scena: `mampukuji`; percorso (confirmed_route): `mampukuji` → `uji_bridge`; scena: `uji_bridge`; percorso (confirmed_route): `uji_bridge` → `kizugawa_ferry`; scena: `kizugawa_ferry` | luogo non risolto; departed; continues toward Koyagyu with Otsu after separating from Jotaro (explicit; data/source/book2/chapter5-a-spring-breeze.txt) | Canoniche: Otsu: acquaintance/travel_companions_toward_koyagyu (introdotta qui)<br>Co-azioni: Otsu, Jōtarō |

Azioni ed evidenza:

- `b2c5-e01` — **meeting** @ `yomogi`: Jotaro meets Akemi in the Takase River and Yomogi area and asks about Matahachi. — fisici: Jōtarō, Akemi. Evidenza: explicit; book2/chapter5.
- `b2c5-e02` — **message** @ `yomogi`: Jotaro delivers Musashi's message at Yomogi and learns that Matahachi has left. — fisici: Jōtarō, Akemi; menzionati: Shinmen Takezō, Hon'den Matahachi. Evidenza: explicit; book2/chapter5.
- `b2c5-audit-s02` — **identity_recognition** @ `yomogi`: From the written name and Jotaro's description, Akemi realizes Miyamoto Musashi is Takezo and revives her long-held hope of seeing him again. — fisici: Akemi, Jōtarō. Evidenza: explicit; data/source/book2/chapter5-a-spring-breeze.txt.
- `b2c5-e03` — **journey**: Jotaro travels south on the Yamato highroad by ox cart toward Mampukuji. — fisici: Jōtarō. Evidenza: explicit; book2/chapter5.
- `b2c5-e04` — **meeting** @ `mampukuji`: Jotaro loses his bamboo tube near Mampukuji and Otsu helps identify it. — fisici: Jōtarō, Otsu. Evidenza: explicit; book2/chapter5.
- `b2c5-e05` — **object_return** @ `mampukuji`: Kizaemon returns Jotaro's lost bamboo tube. — fisici: Jōtarō, Shōda Kizaemon. Evidenza: explicit; book2/chapter5.
- `b2c5-e06` — **journey**: Jotaro, Otsu and Kizaemon travel together toward Uji. — fisici: Jōtarō, Otsu, Shōda Kizaemon. Evidenza: explicit; book2/chapter5.
- `b2c5-e07` — **conversation** @ `uji_bridge`: The trio rests at a Uji Bridge teahouse while Kizaemon discusses conditions in Nara with its proprietor. — fisici: Jōtarō, Otsu, Shōda Kizaemon. Evidenza: explicit; book2/chapter5.
- `b2c5-audit-s08` — **decision**: Otsu accepts largely because the Yagyu household may have records or visitors who can lead her to Musashi. — fisici: Otsu. Evidenza: explicit; data/source/book2/chapter5-a-spring-breeze.txt.
- `b2c5-e08` — **departure**: Otsu chooses the Koyagyu route with Kizaemon while Jotaro continues toward Nara. — fisici: Jōtarō, Otsu, Shōda Kizaemon. Evidenza: explicit; book2/chapter5.
- `b2c5-e09` — **separation** @ `kizugawa_ferry`: Jotaro separates from Otsu and Kizaemon at the Kizu River ferry. — fisici: Jōtarō, Otsu, Shōda Kizaemon. Evidenza: explicit; book2/chapter5.
- `b2c5-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Yagyū Munenori, Yagyū Sekishūsai, Yoshioka Kempō. Evidenza: explicit; data/source/book2/chapter5-a-spring-breeze.txt.

Relazioni introdotte o rivelate qui:

- Jōtarō → Otsu: **friend_ally/travel_companions_and_message_bearers** (soglia 13).
- Otsu → Shōda Kizaemon: **acquaintance/travel_companions_toward_koyagyu** (soglia 13).

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Miyamoto Musashi (`musashi`), Hon'den Matahachi (`matahachi`), Yagyū Munenori (`munenori`), Yagyū Sekishūsai (`sekishusai`), Yoshioka Kempō (`yoshioka_kempo`).

### 14. The Hōzōin (b2c6)

Fonte: `data/source/book2/chapter6-the-hozoin.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Miyamoto Musashi (`musashi`) | scena: `abura_hill`; percorso (intended_destination): `abura_hill` → `hozoin`; percorso (arrival_confirmed): `hozoin`; scena: `hozoin`; percorso (confirmed_route): `hozoin` → `sarusawa_pond`; scena: `sarusawa_boardinghouse`; percorso (arrival_confirmed): `sarusawa_boardinghouse` | `sarusawa_pond`; present; lodges at the boardinghouse near Sarusawa Pond after the Hozoin encounter (explicit; data/source/book2/chapter6-the-hozoin.txt) | Canoniche: Jōtarō: master/traveling_mentor_and_young_follower; Nikkan: master/brief_spiritual_instruction (introdotta qui); Agon: enemy/fatal_hozoin_bout (introdotta qui)<br>Co-azioni: Jōtarō, Nikkan, Agon, Yamazoe Dampachi, Otomo Banryū, Yasukawa Yasubei |
| Jōtarō (`jotaro`) | scena: `sarusawa_boardinghouse`; percorso (arrival_confirmed): `sarusawa_boardinghouse` | `sarusawa_pond`; present; arrives at the boardinghouse with the Yoshioka reply and reunites with Musashi (explicit; data/source/book2/chapter6-the-hozoin.txt) | Canoniche: Miyamoto Musashi: master/traveling_mentor_and_young_follower<br>Co-azioni: Miyamoto Musashi |
| Nikkan (`nikkan`) | scena: `abura_hill`; scena: `hozoin` | `hozoin`; present; teaches Musashi after the duel with Agon (explicit; data/source/book2/chapter6-the-hozoin.txt) | Canoniche: Miyamoto Musashi: master/brief_spiritual_instruction (introdotta qui)<br>Co-azioni: Miyamoto Musashi |
| Agon (`agon`) | scena: `hozoin` | `hozoin`; dead; is killed by Musashi during their duel (explicit; data/source/book2/chapter6-the-hozoin.txt) | Canoniche: Miyamoto Musashi: enemy/fatal_hozoin_bout (introdotta qui)<br>Co-azioni: Miyamoto Musashi |
| Yamazoe Dampachi (`yamazoe_dampachi`) | scena: `sarusawa_boardinghouse` | luogo non risolto; departed; leaves after Musashi refuses the proposed public matches (strong_inference; data/source/book2/chapter6-the-hozoin.txt) | Co-azioni: Miyamoto Musashi, Otomo Banryū, Yasukawa Yasubei |
| Otomo Banryū (`otomo_banryu`) | scena: `sarusawa_boardinghouse` | luogo non risolto; departed; leaves after Musashi refuses the proposed public matches (strong_inference; data/source/book2/chapter6-the-hozoin.txt) | Co-azioni: Miyamoto Musashi, Yamazoe Dampachi, Yasukawa Yasubei |
| Yasukawa Yasubei (`yasukawa_yasubei`) | scena: `sarusawa_boardinghouse` | luogo non risolto; departed; leaves after Musashi refuses the proposed public matches (strong_inference; data/source/book2/chapter6-the-hozoin.txt) | Co-azioni: Miyamoto Musashi, Yamazoe Dampachi, Otomo Banryū |

Azioni ed evidenza:

- `b2c6-e01` — **search** @ `abura_hill`: Musashi searches the Abura Hill and Ozoin vicinity for Hozoin. — fisici: Shinmen Takezō. Evidenza: explicit; book2/chapter6.
- `b2c6-e02` — **direction**: A young monk directs Musashi through Ozoin toward Hozoin. — fisici: Shinmen Takezō. Evidenza: explicit; book2/chapter6.
- `b2c6-e03` — **meeting** @ `abura_hill`: Musashi meets Nikkan in the Ozoin garden and is affected by the abbot's spiritual pressure. — fisici: Shinmen Takezō, Nikkan. Evidenza: explicit; book2/chapter6.
- `b2c6-e04` — **arrival**: Musashi registers at Hozoin as a visiting student. — fisici: Shinmen Takezō. Evidenza: explicit; book2/chapter6.
- `b2c6-e05` — **observation** @ `hozoin`: Musashi watches Agon and the other Hozoin students train in the dojo. — fisici: Shinmen Takezō, Agon. Evidenza: explicit; book2/chapter6.
- `b2c6-e06` — **fight** @ `hozoin`: Musashi fights Agon on the dojo floor and kills him. — fisici: Shinmen Takezō, Agon. Evidenza: explicit; book2/chapter6.
- `b2c6-e07` — **conversation** @ `hozoin`: Nikkan speaks privately with Musashi and explains the lesson about his excessive fighting spirit. — fisici: Shinmen Takezō, Nikkan. Evidenza: explicit; book2/chapter6.
- `b2c6-audit-s07` — **inner_defeat** @ `hozoin`: Although Musashi won physically against Agon, he leaves feeling spiritually outclassed by Nikkan. — fisici: Shinmen Takezō, Nikkan. Evidenza: explicit; data/source/book2/chapter6-the-hozoin.txt.
- `b2c6-e08` — **departure**: Musashi leaves Hozoin, briefly returns to leave instructions for Jotaro, then proceeds toward Sarusawa Pond. — fisici: Shinmen Takezō; menzionati: Jōtarō. Evidenza: explicit; book2/chapter6.
- `b2c6-e09` — **arrival** @ `sarusawa_boardinghouse`: Musashi takes lodging at a boardinghouse near Sarusawa Pond. — fisici: Shinmen Takezō. Evidenza: explicit; book2/chapter6.
- `b2c6-e10` — **recruitment** @ `sarusawa_boardinghouse`: Dampachi, Banryu and Yasubei try to recruit Musashi for public matches, but he refuses. — fisici: Shinmen Takezō, Yamazoe Dampachi, Otomo Banryū, Yasukawa Yasubei. Evidenza: explicit; book2/chapter6.
- `b2c6-audit-jotaro-arrival` — **arrival** @ `sarusawa_boardinghouse`: Jōtarō reaches the boardinghouse where Musashi is already lodging; only the boy makes this arrival. — fisici: Jōtarō; menzionati: Shinmen Takezō. Evidenza: explicit; data/source/book2/chapter6-the-hozoin.txt.
- `b2c6-e11` — **reunion** @ `sarusawa_boardinghouse`: Jotaro arrives at the Sarusawa boardinghouse with the Yoshioka response and reunites with Musashi. — fisici: Shinmen Takezō, Jōtarō. Evidenza: explicit; book2/chapter6.
- `b2c6-e12` — **reported_absence**: Inshun is absent during Musashi's initial Hozoin visit; no physical presence is inferred. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Hōzōin Inshun. Evidenza: explicit; book2/chapter6.
- `b2c6-audit-s12` — **gift_and_departure_preparation** @ `sarusawa_boardinghouse`: The widow gives Musashi clothing and permits Jotaro to keep an old Noh mask before they prepare to leave. — fisici: Shinmen Takezō, Jōtarō. Evidenza: explicit; data/source/book2/chapter6-the-hozoin.txt:L646-L723.
- `b2c6-audit-s13` — **ambush_warning** @ `sarusawa_boardinghouse`: The dumpling-maker's wife warns that Hozoin priests and ronin are waiting toward Hannya Plain because forged insults have been attributed to Musashi; he chooses to leave anyway. — fisici: Shinmen Takezō, Jōtarō. Evidenza: explicit; data/source/book2/chapter6-the-hozoin.txt:L724-L767.
- `b2c6-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Kakuzenbō Hōzōin In'ei, Otsu, Yagyū Sekishūsai, Takuan Sōhō, Yoshioka Seijūrō. Evidenza: explicit; data/source/book2/chapter6-the-hozoin.txt.

Relazioni introdotte o rivelate qui:

- Miyamoto Musashi → Nikkan: **master/brief_spiritual_instruction** (soglia 14).
- Miyamoto Musashi → Agon: **enemy/fatal_hozoin_bout** (soglia 14).

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Hōzōin Inshun (`inshun`), Kakuzenbō Hōzōin In'ei (`in_ei`), Otsu (`otsu`), Yagyū Sekishūsai (`sekishusai`), Takuan Sōhō (`takuan`), Yoshioka Seijūrō (`yoshioka_seijuro`).

### 15. Hannya Plain (b2c7)

Fonte: `data/source/book2/chapter7-hannya-plain.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Miyamoto Musashi (`musashi`) | percorso (confirmed_route): `nara` → `todaiji_area` → `hannya_plain`; scena: `hannya_observation_knoll`; scena: `hannya_plain`; percorso (arrival_confirmed): `hannya_plain`; percorso (arrival_confirmed): `hannya_observation_knoll` → `hannya_plain` | `hannya_plain`; present; survives the Hannya Plain combat and receives Nikkan's advice (explicit; data/source/book2/chapter7-hannya-plain.txt) | Canoniche: Jōtarō: master/traveling_mentor_and_young_follower; Nikkan: master/brief_spiritual_instruction; Yamazoe Dampachi: enemy/hannya_plain_combat (introdotta qui); Hōzōin Inshun: acquaintance/hozoin_encounter_without_personal_duel (introdotta qui)<br>Co-azioni: Jōtarō, Hōzōin Inshun, Nikkan, Yamazoe Dampachi, Otomo Banryū, Yasukawa Yasubei |
| Jōtarō (`jotaro`) | percorso (confirmed_route): `nara` → `todaiji_area` → `hannya_plain`; scena: `hannya_observation_knoll`; percorso (arrival_confirmed): `hannya_plain`; scena: `hannya_plain`; percorso (arrival_confirmed): `hannya_observation_knoll` → `hannya_plain` | `hannya_plain`; present; runs from the observation knoll to Musashi and joins the final rites (explicit; data/source/book2/chapter7-hannya-plain.txt) | Canoniche: Miyamoto Musashi: master/traveling_mentor_and_young_follower<br>Co-azioni: Miyamoto Musashi, Hōzōin Inshun, Nikkan |
| Hōzōin Inshun (`inshun`) | scena: `hannya_plain`; percorso (arrival_confirmed): `hannya_plain` | `hannya_plain`; present; leads the Hozoin charge and remains for the aftermath (explicit; data/source/book2/chapter7-hannya-plain.txt) | Canoniche: Miyamoto Musashi: acquaintance/hozoin_encounter_without_personal_duel (introdotta qui)<br>Co-azioni: Miyamoto Musashi, Jōtarō, Nikkan, Otomo Banryū, Yasukawa Yasubei |
| Nikkan (`nikkan`) | percorso (arrival_confirmed): `hannya_plain`; scena: `hannya_plain` | `hannya_plain`; present; arrives with officials, explains the purge and advises Musashi (explicit; data/source/book2/chapter7-hannya-plain.txt) | Canoniche: Miyamoto Musashi: master/brief_spiritual_instruction<br>Co-azioni: Miyamoto Musashi, Jōtarō, Hōzōin Inshun |
| Yamazoe Dampachi (`yamazoe_dampachi`) | scena: `hannya_plain` | `hannya_plain`; dead; is killed by Musashi before the larger battle (explicit; data/source/book2/chapter7-hannya-plain.txt) | Canoniche: Miyamoto Musashi: enemy/hannya_plain_combat (introdotta qui)<br>Co-azioni: Miyamoto Musashi |
| Otomo Banryū (`otomo_banryu`) | scena: `hannya_plain` | `hannya_plain`; dead; is killed during the Hozoin purge of the ronin (explicit; data/source/book2/chapter7-hannya-plain.txt) | Co-azioni: Miyamoto Musashi, Hōzōin Inshun, Yasukawa Yasubei |
| Yasukawa Yasubei (`yasukawa_yasubei`) | scena: `hannya_plain` | `hannya_plain`; dead; is killed during the Hozoin purge of the ronin (explicit; data/source/book2/chapter7-hannya-plain.txt) | Co-azioni: Miyamoto Musashi, Hōzōin Inshun, Otomo Banryū |

Azioni ed evidenza:

- `b2c7-e01` — **journey**: Musashi and Jotaro travel from Nara through the Todaiji area toward Hannya Plain. — fisici: Shinmen Takezō, Jōtarō. Evidenza: explicit; book2/chapter7.
- `b2c7-e02` — **separation** @ `hannya_observation_knoll`: Musashi positions Jotaro on a nearby knoll to observe the wider Hannya Plain scene. — fisici: Shinmen Takezō, Jōtarō. Evidenza: explicit; book2/chapter7.
- `b2c7-e03` — **fight** @ `hannya_plain`: Musashi recognizes Dampachi's trap and kills him on Hannya Plain. — fisici: Shinmen Takezō, Yamazoe Dampachi. Evidenza: explicit; book2/chapter7.
- `b2c7-e04` — **encampment** @ `hannya_plain`: Hozoin priests and ronin, including Banryu and Yasubei, are encamped around a bonfire. — fisici: Otomo Banryū, Yasukawa Yasubei. Evidenza: explicit; book2/chapter7.
- `b2c7-e05` — **fight** @ `hannya_plain`: Musashi fights the ronin group and kills several of its members. — fisici: Shinmen Takezō, Otomo Banryū, Yasukawa Yasubei. Evidenza: explicit; book2/chapter7.
- `b2c7-e06` — **fight** @ `hannya_plain`: Inshun leads the Hozoin priests in the deliberate purge of the remaining ronin, including Banryu and Yasubei. — fisici: Hōzōin Inshun, Otomo Banryū, Yasukawa Yasubei. Evidenza: explicit; book2/chapter7.
- `b2c7-e07` — **arrival**: Nikkan arrives with five government officials, who inspect the bodies after the battle. — fisici: Nikkan, Shinmen Takezo, Jōtarō, Hōzōin Inshun. Evidenza: explicit; book2/chapter7.
- `b2c7-e08` — **conversation** @ `hannya_plain`: Nikkan explains the purge, advises Musashi and involves Jotaro in rites for the dead. — fisici: Nikkan, Shinmen Takezo, Hōzōin Inshun, Jōtarō. Evidenza: explicit; book2/chapter7.
- `b2c7-e09` — **reunion**: Jotaro runs from the observation knoll toward Musashi when the Hozoin charge begins. — fisici: Shinmen Takezō, Jōtarō. Evidenza: explicit; book2/chapter7.
- `b2c7-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Yagyū Munenori, Yagyū Sekishūsai. Evidenza: explicit; data/source/book2/chapter7-hannya-plain.txt.

Relazioni introdotte o rivelate qui:

- Miyamoto Musashi → Yamazoe Dampachi: **enemy/hannya_plain_combat** (soglia 15).
- Miyamoto Musashi → Hōzōin Inshun: **acquaintance/hozoin_encounter_without_personal_duel** (soglia 15).

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Yagyū Munenori (`munenori`), Yagyū Sekishūsai (`sekishusai`).

### 16. The Koyagyū Fief (b2c8)

Fonte: `data/source/book2/chapter8-the-koyagyu-fief.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Miyamoto Musashi (`musashi`) | percorso (arrival_confirmed): `hannya_plain` → `yagyu_valley`; percorso (confirmed_route): `yagyu_valley` → `koyagyu_castle`; scena: `wataya` | `wataya`; present; stays at Wataya after inspecting Yagyu Valley and Koyagyu Castle (explicit; data/source/book2/chapter8-the-koyagyu-fief.txt) | Canoniche: Jōtarō: master/traveling_mentor_and_young_follower<br>Co-azioni: Jōtarō, Yoshioka Denshichirō, Kocha |
| Jōtarō (`jotaro`) | percorso (arrival_confirmed): `hannya_plain` → `yagyu_valley`; percorso (confirmed_route): `yagyu_valley` → `koyagyu_castle`; scena: `wataya` | `wataya`; present; stays at Wataya and quarrels playfully with Kocha (explicit; data/source/book2/chapter8-the-koyagyu-fief.txt) | Canoniche: Miyamoto Musashi: master/traveling_mentor_and_young_follower; Kocha: acquaintance/children_meeting_at_wataya (introdotta qui)<br>Co-azioni: Miyamoto Musashi, Kocha |
| Yoshioka Denshichirō (`yoshioka_denshichiro`) | scena: `wataya` | `wataya`; present; stays at Wataya with two companions and shares the bath without recognizing Musashi (strong_inference; data/source/book2/chapter8-the-koyagyu-fief.txt) | Co-azioni: Miyamoto Musashi |
| Kocha (`kocha`) | scena: `wataya` | `wataya`; present; works at Wataya and interacts with Jotaro and Musashi (explicit; data/source/book2/chapter8-the-koyagyu-fief.txt) | Canoniche: Jōtarō: acquaintance/children_meeting_at_wataya (introdotta qui)<br>Co-azioni: Miyamoto Musashi, Jōtarō |

Azioni ed evidenza:

- `b2c8-e01` — **arrival**: About ten days after Hannya Plain, Musashi and Jotaro arrive in Yagyu Valley. — fisici: Shinmen Takezō, Jōtarō. Evidenza: explicit; book2/chapter8.
- `b2c8-e02` — **observation**: Musashi and Jotaro tour the valley and inspect the exterior of Koyagyu Castle. — fisici: Shinmen Takezō, Jōtarō. Evidenza: explicit; book2/chapter8.
- `b2c8-audit-s02` — **teaching**: Musashi explains that serious martial study includes geography, agriculture, customs, governance and the condition of a lord's territory, not just fighting. — fisici: Shinmen Takezō, Jōtarō. Evidenza: explicit; data/source/book2/chapter8-the-koyagyu-fief.txt.
- `b2c8-e03` — **relationship** @ `wataya`: At Wataya, Jotaro meets Kocha and their teasing becomes a playful physical quarrel. — fisici: Jōtarō, Kocha. Evidenza: explicit; book2/chapter8.
- `b2c8-e04` — **co_presence** @ `wataya`: Musashi bathes with three Kyoto visitors; the narrative identifies Denshichiro among them through Musashi's recognition, but no direct interaction follows. — fisici: Shinmen Takezō, Yoshioka Denshichirō. Evidenza: strong_inference; book2/chapter8.
- `b2c8-e05` — **conversation** @ `wataya`: Musashi, Jotaro and Kocha interact at the inn after the children's quarrel. — fisici: Shinmen Takezō, Jōtarō, Kocha. Evidenza: explicit; book2/chapter8.
- `b2c8-e06` — **decision** @ `wataya`: Musashi decides to seek a test against the Yagyu name. — fisici: Shinmen Takezō; menzionati: Yagyū Sekishūsai. Evidenza: explicit; book2/chapter8.
- `b2c8-e07` — **reported_visit**: Kizaemon's earlier visit to the Kyoto guests is reported in the bath conversation and is not treated as present co-location. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Shōda Kizaemon, Yoshioka Denshichirō. Evidenza: explicit; book2/chapter8.
- `b2c8-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Yagyū Munenori, Yagyū Hyōgo, Yoshioka Kempō. Evidenza: explicit; data/source/book2/chapter8-the-koyagyu-fief.txt.

Relazioni introdotte o rivelate qui:

- Jōtarō → Kocha: **acquaintance/children_meeting_at_wataya** (soglia 16).

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Yagyū Sekishūsai (`sekishusai`), Shōda Kizaemon (`shoda_kizaemon`), Yagyū Munenori (`munenori`), Yagyū Hyōgo (`yagyu_hyogo`), Yoshioka Kempō (`yoshioka_kempo`).

### 17. The Peony (b2c9)

Fonte: `data/source/book2/chapter9-the-peony.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Miyamoto Musashi (`musashi`) | scena: `wataya` | `wataya`; present; examines the peony stem and sends his answer toward the Yagyu household (explicit; data/source/book2/chapter9-the-peony.txt) | Canoniche: Otsu: friend_ally/deep_personal_bond; Jōtarō: master/traveling_mentor_and_young_follower<br>Co-azioni: Kocha |
| Otsu (`otsu`) | scena: `sekishusai_mountain_house`; percorso (arrival_confirmed): `sekishusai_mountain_house`; percorso (arrival_confirmed): `koyagyu_castle` → `wataya`; scena: `wataya`; percorso (confirmed_route): `wataya` → `koyagyu_castle` | luogo non risolto; departed; returns from Wataya toward Koyagyu after delivering Sekishusai's message (explicit; data/source/book2/chapter9-the-peony.txt) | Canoniche: Miyamoto Musashi: friend_ally/deep_personal_bond; Jōtarō: friend_ally/travel_companions_and_message_bearers; Shōda Kizaemon: acquaintance/travel_companions_toward_koyagyu; Yagyū Sekishūsai: acquaintance/trusted_companion_at_mountain_house (introdotta qui); Yoshioka Denshichirō: acquaintance/direct_messenger_for_sekishusai (introdotta qui)<br>Co-azioni: Jōtarō, Yoshioka Denshichirō, Shōda Kizaemon, Yagyū Sekishūsai, Kocha |
| Jōtarō (`jotaro`) | percorso (confirmed_route): `wataya` → `koyagyu_castle`; scena: `koyagyu_castle` | `koyagyu_castle`; present; delivers Musashi's letter and peony stem and remains on the castle grounds (explicit; data/source/book2/chapter9-the-peony.txt) | Canoniche: Miyamoto Musashi: master/traveling_mentor_and_young_follower; Otsu: friend_ally/travel_companions_and_message_bearers; Kocha: acquaintance/children_meeting_at_wataya<br>Co-azioni: Otsu, Shōda Kizaemon |
| Yoshioka Denshichirō (`yoshioka_denshichiro`) | scena: `wataya` | `wataya`; present; receives Sekishusai's letter and peony from Otsu (explicit; data/source/book2/chapter9-the-peony.txt) | Canoniche: Otsu: acquaintance/direct_messenger_for_sekishusai (introdotta qui)<br>Co-azioni: Otsu |
| Shōda Kizaemon (`shoda_kizaemon`) | percorso (arrival_confirmed): `sekishusai_mountain_house`; scena: `sekishusai_mountain_house`; scena: `koyagyu_castle` | `shinindo`; present; examines the peony stem with the senior Yagyu retainers (explicit; data/source/book2/chapter9-the-peony.txt) | Canoniche: Otsu: acquaintance/travel_companions_toward_koyagyu; Yagyū Sekishūsai: servant_employer/household_master_and_retainer (introdotta qui)<br>Co-azioni: Otsu, Jōtarō, Yagyū Sekishūsai, Kimura Sukekurō, Debuchi Magobei, Murata Yozō |
| Yagyū Sekishūsai (`sekishusai`) | scena: `sekishusai_mountain_house`; percorso (arrival_confirmed): `sekishusai_mountain_house` | `sekishusai_mountain_house`; present; remains at his mountain house after sending Otsu with the peony and letter (explicit; data/source/book2/chapter9-the-peony.txt) | Canoniche: Otsu: acquaintance/trusted_companion_at_mountain_house (introdotta qui); Shōda Kizaemon: servant_employer/household_master_and_retainer (introdotta qui)<br>Co-azioni: Otsu, Shōda Kizaemon |
| Kimura Sukekurō (`kimura_sukekuro`) | scena: `koyagyu_castle` | `shinindo`; present; examines the peony stem with Kizaemon, Debuchi and Murata (explicit; data/source/book2/chapter9-the-peony.txt) | Co-azioni: Shōda Kizaemon, Debuchi Magobei, Murata Yozō |
| Debuchi Magobei (`debuchi_magobei`) | scena: `koyagyu_castle` | `shinindo`; present; examines the peony stem with the other senior retainers (explicit; data/source/book2/chapter9-the-peony.txt) | Co-azioni: Shōda Kizaemon, Kimura Sukekurō, Murata Yozō |
| Murata Yozō (`murata_yozo`) | scena: `koyagyu_castle` | `shinindo`; present; examines the peony stem with the other senior retainers (explicit; data/source/book2/chapter9-the-peony.txt) | Co-azioni: Shōda Kizaemon, Kimura Sukekurō, Debuchi Magobei |
| Kocha (`kocha`) | scena: `wataya` | `wataya`; present; receives Otsu at Wataya and brings the peony into the inn sequence (explicit; data/source/book2/chapter9-the-peony.txt) | Canoniche: Jōtarō: acquaintance/children_meeting_at_wataya<br>Co-azioni: Miyamoto Musashi, Otsu |

Azioni ed evidenza:

- `b2c9-e01` — **conversation** @ `sekishusai_mountain_house`: Sekishusai and Otsu discuss flower arrangement and life at the mountain house. — fisici: Yagyū Sekishūsai, Otsu. Evidenza: explicit; book2/chapter9.
- `b2c9-e02` — **arrival**: Kizaemon returns from his errand and reports at the mountain-house entrance. — fisici: Shōda Kizaemon, Otsu, Yagyū Sekishūsai. Evidenza: explicit; book2/chapter9.
- `b2c9-e03` — **message** @ `sekishusai_mountain_house`: Kizaemon reports delivering the Yagyu response to Denshichiro's party and receives further instructions. — fisici: Shōda Kizaemon, Yagyū Sekishūsai, Otsu; menzionati: Yoshioka Denshichirō. Evidenza: explicit; book2/chapter9.
- `b2c9-e04` — **decision** @ `sekishusai_mountain_house`: Sekishusai decides to send Otsu to Wataya with a letter and peony instead of receiving Denshichiro. — fisici: Yagyū Sekishūsai, Otsu; menzionati: Yoshioka Denshichirō. Evidenza: explicit; book2/chapter9.
- `b2c9-e05` — **journey**: Otsu rides from the Yagyu estate to Wataya. — fisici: Otsu. Evidenza: explicit; book2/chapter9.
- `b2c9-e06` — **meeting** @ `wataya`: Otsu meets Kocha at Wataya and asks for Denshichiro. — fisici: Otsu, Kocha. Evidenza: explicit; book2/chapter9.
- `b2c9-e07` — **message** @ `wataya`: Otsu delivers Sekishusai's letter and peony directly to Denshichiro. — fisici: Otsu, Yoshioka Denshichirō; menzionati: Yagyū Sekishūsai. Evidenza: explicit; book2/chapter9.
- `b2c9-audit-s05` — **object_transfer** @ `wataya`: Otsu gives the rejected peony to Kocha rather than taking it back to the castle. — fisici: Otsu, Kocha. Evidenza: explicit; data/source/book2/chapter9-the-peony.txt.
- `b2c9-e08` — **analysis** @ `wataya`: Musashi examines the peony stem, reproduces its cut and recognizes the work of an exceptional swordsman. — fisici: Shinmen Takezō, Kocha; menzionati: Yagyū Sekishūsai. Evidenza: explicit; book2/chapter9.
- `b2c9-e09` — **journey**: Otsu rides back toward Koyagyu and encounters Jotaro near the castle and river area. — fisici: Otsu, Jōtarō. Evidenza: explicit; book2/chapter9.
- `b2c9-audit-s09` — **evaluation** @ `sekishusai_mountain_house`: Sekishusai learns Denshichiro failed even to notice the peony's cut and judges that the Yoshioka house effectively ended with Kempo. — fisici: Yagyū Sekishūsai, Otsu. Evidenza: explicit; data/source/book2/chapter9-the-peony.txt.
- `b2c9-audit-s10` — **training_scene** @ `koyagyu_castle`: At the Yagyu dojo Kizaemon drives students through severe Shinkage-style training, illustrating the household's standard. — fisici: Shōda Kizaemon. Evidenza: explicit; data/source/book2/chapter9-the-peony.txt.
- `b2c9-audit-s11` — **letter_delivery** @ `koyagyu_castle`: Jotaro enters the castle and forces Kizaemon to read Musashi's unusual letter asking who made the peony cut. — fisici: Jōtarō, Shōda Kizaemon. Evidenza: explicit; data/source/book2/chapter9-the-peony.txt:L497-L579.
- `b2c9-audit-s12` — **object_analysis** @ `koyagyu_castle`: The Yagyu retainers compare the two cuts, learn Sekishusai made the original and infer that Musashi has unusual perception. — fisici: Shōda Kizaemon, Murata Yozō, Kimura Sukekurō, Debuchi Magobei. Evidenza: explicit; data/source/book2/chapter9-the-peony.txt:L580-L603.
- `b2c9-audit-s13` — **invitation_decision** @ `koyagyu_castle`: The retainers decide to invite Musashi informally to the Shin'indo for food, sake and martial conversation. — fisici: Shōda Kizaemon, Murata Yozō, Kimura Sukekurō, Debuchi Magobei. Evidenza: explicit; data/source/book2/chapter9-the-peony.txt.
- `b2c9-audit-s14` — **animal_attack** @ `koyagyu_castle`: While waiting, Jotaro provokes and strikes the large black dog Taro; the dog attacks and injures him. — fisici: Jōtarō. Evidenza: explicit; data/source/book2/chapter9-the-peony.txt.
- `b2c9-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Kakuzenbō Hōzōin In'ei, Yagyū Munenori, Yagyū Hyōgo, Yoshioka Kempō. Evidenza: explicit; data/source/book2/chapter9-the-peony.txt.

Relazioni introdotte o rivelate qui:

- Otsu → Yagyū Sekishūsai: **acquaintance/trusted_companion_at_mountain_house** (soglia 17).
- Yagyū Sekishūsai → Shōda Kizaemon: **servant_employer/household_master_and_retainer** (soglia 17).
- Otsu → Yoshioka Denshichirō: **acquaintance/direct_messenger_for_sekishusai** (soglia 17).

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Kakuzenbō Hōzōin In'ei (`in_ei`), Yagyū Munenori (`munenori`), Yagyū Hyōgo (`yagyu_hyogo`), Yoshioka Kempō (`yoshioka_kempo`).

### 18. Jōtarō’s Revenge (b2c10)

Fonte: `data/source/book2/chapter10-jotaros-revenge.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Miyamoto Musashi (`musashi`) | scena: `wataya`; percorso (confirmed_route): `wataya` → `koyagyu_castle`; percorso (arrival_confirmed): `koyagyu_castle`; percorso (arrival_confirmed): `koyagyu_castle` → `shinindo`; scena: `shinindo`; percorso (confirmed_route): `shinindo` → `koyagyu_castle`; scena: `koyagyu_castle`; percorso (confirmed_route): `koyagyu_castle` → `koyagyu_castle`; percorso (uncertain_route): `koyagyu_castle` → `unknown` | luogo non risolto; fled; escapes the castle confrontation toward the inner moat and darkness (explicit; data/source/book2/chapter10-jotaros-revenge.txt) | Canoniche: Jōtarō: master/traveling_mentor_and_young_follower<br>Co-azioni: Jōtarō, Shōda Kizaemon, Kimura Sukekurō, Debuchi Magobei, Murata Yozō, Kocha |
| Jōtarō (`jotaro`) | scena: `wataya`; percorso (confirmed_route): `wataya` → `koyagyu_castle`; percorso (arrival_confirmed): `koyagyu_castle`; percorso (arrival_confirmed): `koyagyu_castle` → `shinindo`; scena: `koyagyu_castle`; percorso (confirmed_route): `koyagyu_castle` → `koyagyu_castle` | `koyagyu_castle`; present; remains on the castle grounds after the dog incident and fight sequence; he is not assumed to escape with Musashi (explicit; data/source/book2/chapter10-jotaros-revenge.txt) | Canoniche: Miyamoto Musashi: master/traveling_mentor_and_young_follower; Kocha: acquaintance/children_meeting_at_wataya<br>Co-azioni: Miyamoto Musashi, Shōda Kizaemon, Kimura Sukekurō, Debuchi Magobei, Murata Yozō, Kocha |
| Shōda Kizaemon (`shoda_kizaemon`) | scena: `shinindo`; percorso (confirmed_route): `shinindo` → `koyagyu_castle`; scena: `koyagyu_castle`; percorso (confirmed_route): `koyagyu_castle` → `koyagyu_castle` | `koyagyu_castle`; present; participates in the confrontation with Musashi on the castle grounds (explicit; data/source/book2/chapter10-jotaros-revenge.txt) | Co-azioni: Miyamoto Musashi, Jōtarō, Kimura Sukekurō, Debuchi Magobei, Murata Yozō |
| Kimura Sukekurō (`kimura_sukekuro`) | scena: `shinindo`; percorso (confirmed_route): `shinindo` → `koyagyu_castle`; scena: `koyagyu_castle`; percorso (confirmed_route): `koyagyu_castle` → `koyagyu_castle` | `koyagyu_castle`; present; fights Musashi during the castle confrontation (explicit; data/source/book2/chapter10-jotaros-revenge.txt) | Co-azioni: Miyamoto Musashi, Jōtarō, Shōda Kizaemon, Debuchi Magobei, Murata Yozō |
| Debuchi Magobei (`debuchi_magobei`) | scena: `shinindo`; percorso (confirmed_route): `shinindo` → `koyagyu_castle`; scena: `koyagyu_castle`; percorso (confirmed_route): `koyagyu_castle` → `koyagyu_castle` | `koyagyu_castle`; present; joins the senior retainers confronting Musashi (explicit; data/source/book2/chapter10-jotaros-revenge.txt) | Co-azioni: Miyamoto Musashi, Jōtarō, Shōda Kizaemon, Kimura Sukekurō, Murata Yozō |
| Murata Yozō (`murata_yozo`) | scena: `shinindo`; percorso (confirmed_route): `shinindo` → `koyagyu_castle`; scena: `koyagyu_castle` | `koyagyu_castle`; present; joins the senior retainers confronting Musashi (explicit; data/source/book2/chapter10-jotaros-revenge.txt) | Co-azioni: Miyamoto Musashi, Jōtarō, Shōda Kizaemon, Kimura Sukekurō, Debuchi Magobei |
| Kocha (`kocha`) | scena: `wataya`; percorso (confirmed_route): `wataya` → `koyagyu_castle` | `wataya`; present; remains at Wataya after Musashi and Jotaro depart (strong_inference; data/source/book2/chapter10-jotaros-revenge.txt) | Canoniche: Jōtarō: acquaintance/children_meeting_at_wataya<br>Co-azioni: Miyamoto Musashi, Jōtarō |

Azioni ed evidenza:

- `b2c10-e01` — **message** @ `wataya`: Jotaro returns to Wataya and gives Musashi Kizaemon's reply letter; Kizaemon is not physically present. — fisici: Jōtarō, Shinmen Takezo; menzionati: Shōda Kizaemon. Evidenza: explicit; book2/chapter10.
- `b2c10-e02` — **care** @ `wataya`: Kocha tends Jotaro's wounds at the inn and stream. — fisici: Jōtarō, Kocha. Evidenza: explicit; book2/chapter10.
- `b2c10-e03` — **relationship** @ `wataya`: Jotaro and Kocha interact privately in the fodder shed until Kocha's unnamed father interrupts them. — fisici: Jōtarō, Kocha. Evidenza: explicit; book2/chapter10.
- `b2c10-e04` — **departure**: Musashi and Jotaro depart Wataya after Jotaro briefly remains behind to say farewell to Kocha. — fisici: Shinmen Takezō, Jōtarō, Kocha. Evidenza: explicit; book2/chapter10.
- `b2c10-e05` — **arrival**: Musashi and Jotaro arrive at the main gate of Koyagyu Castle. — fisici: Shinmen Takezō, Jōtarō. Evidenza: explicit; book2/chapter10.
- `b2c10-e06` — **separation**: Musashi is admitted and taken to Shin'indo while Jotaro is left in the attendants' waiting room. — fisici: Shinmen Takezō, Jōtarō. Evidenza: explicit; book2/chapter10.
- `b2c10-e07` — **meeting** @ `shinindo`: Kizaemon enters Shin'indo with Kimura, Debuchi and Murata and receives Musashi. — fisici: Shinmen Takezō, Shōda Kizaemon, Kimura Sukekurō, Debuchi Magobei, Murata Yozō. Evidenza: explicit; book2/chapter10.
- `b2c10-e08` — **conversation** @ `shinindo`: The four Yagyu retainers question and test Musashi during the sake and conversation sequence. — fisici: Shinmen Takezō, Shōda Kizaemon, Kimura Sukekurō, Debuchi Magobei, Murata Yozō. Evidenza: explicit; book2/chapter10.
- `b2c10-e09` — **challenge** @ `shinindo`: Musashi challenges the hosts to a sword test and they decline to provoke the encounter. — fisici: Shinmen Takezō, Shōda Kizaemon, Kimura Sukekurō, Debuchi Magobei, Murata Yozō. Evidenza: explicit; book2/chapter10.
- `b2c10-e10` — **alarm**: Taro's unusual barking causes Debuchi, then Murata and Kimura, to leave Shin'indo. — fisici: Debuchi Magobei, Murata Yozō, Kimura Sukekurō, Shinmen Takezo, Shōda Kizaemon. Evidenza: explicit; book2/chapter10.
- `b2c10-e11` — **search**: Kizaemon learns Jotaro is missing and goes with Musashi toward the disturbance. — fisici: Shinmen Takezō, Shōda Kizaemon. Evidenza: explicit; book2/chapter10.
- `b2c10-audit-s07` — **animal_killing** @ `koyagyu_castle`: Jotaro finds Taro and kills the dog as revenge for the earlier attack. — fisici: Jōtarō. Evidenza: explicit; data/source/book2/chapter10-jotaros-revenge.txt.
- `b2c10-e12` — **confrontation** @ `koyagyu_castle`: Musashi and Kizaemon reach the crowd where Jotaro stands beside the dead dog Taro. — fisici: Shinmen Takezō, Jōtarō, Shōda Kizaemon, Kimura Sukekurō, Debuchi Magobei, Murata Yozō. Evidenza: explicit; book2/chapter10.
- `b2c10-e13` — **fight** @ `koyagyu_castle`: The dog's unnamed keeper attacks Jotaro and Musashi intervenes to protect him. — fisici: Shinmen Takezō, Jōtarō. Evidenza: explicit; book2/chapter10.
- `b2c10-e14` — **confrontation** @ `koyagyu_castle`: Musashi challenges the surrounding Yagyu personnel on Jotaro's behalf. — fisici: Shinmen Takezō, Jōtarō, Shōda Kizaemon, Kimura Sukekurō, Debuchi Magobei, Murata Yozō. Evidenza: explicit; book2/chapter10.
- `b2c10-e15` — **de_escalation** @ `koyagyu_castle`: Kizaemon assumes responsibility and orders the crowd to disperse. — fisici: Shōda Kizaemon, Shinmen Takezo, Jōtarō, Kimura Sukekurō, Debuchi Magobei, Murata Yozō. Evidenza: explicit; book2/chapter10.
- `b2c10-e16` — **confrontation** @ `koyagyu_castle`: Debuchi proposes that Musashi commit suicide and Musashi refuses. — fisici: Shinmen Takezō, Debuchi Magobei, Shōda Kizaemon, Kimura Sukekurō, Murata Yozō, Jōtarō. Evidenza: explicit; book2/chapter10.
- `b2c10-e17` — **movement**: Kimura orders Musashi toward the cells; Musashi instead walks toward the keep and tells Jotaro to wait under a pine in the garden. — fisici: Shinmen Takezō, Jōtarō, Kimura Sukekurō, Shōda Kizaemon, Debuchi Magobei. Evidenza: explicit; book2/chapter10.
- `b2c10-e18` — **confrontation** @ `koyagyu_castle`: Kizaemon and Debuchi try to pull Musashi back while Kimura begins to draw his sword and is restrained. — fisici: Shinmen Takezō, Shōda Kizaemon, Debuchi Magobei, Kimura Sukekurō, Jōtarō. Evidenza: explicit; book2/chapter10.
- `b2c10-e19` — **challenge** @ `koyagyu_castle`: Musashi declares that he intends to see Sekishusai and challenges the castle to battle. — fisici: Shinmen Takezō, Shōda Kizaemon, Debuchi Magobei, Kimura Sukekurō, Murata Yozō; menzionati: Yagyū Sekishūsai. Evidenza: explicit; book2/chapter10.
- `b2c10-e20` — **fight_setup** @ `koyagyu_castle`: Kimura accepts the challenge while the senior retainers position themselves around Musashi and Jotaro remains nearby. — fisici: Shinmen Takezō, Kimura Sukekurō, Shōda Kizaemon, Debuchi Magobei, Murata Yozō, Jōtarō. Evidenza: explicit; book2/chapter10.
- `b2c10-e21` — **fight** @ `koyagyu_castle`: Jotaro throws sand to disrupt Kimura's initial sword strike while Musashi evades. — fisici: Shinmen Takezō, Jōtarō, Kimura Sukekurō. Evidenza: explicit; book2/chapter10.
- `b2c10-e22` — **fight** @ `koyagyu_castle`: Musashi and Kimura enter a direct sword confrontation while Kizaemon, Debuchi and Murata take positions around them. — fisici: Shinmen Takezō, Kimura Sukekurō, Shōda Kizaemon, Debuchi Magobei, Murata Yozō. Evidenza: explicit; book2/chapter10.
- `b2c10-e23` — **fight** @ `koyagyu_castle`: Kizaemon, Debuchi and Murata move in together against Musashi. — fisici: Shinmen Takezō, Shōda Kizaemon, Debuchi Magobei, Murata Yozō. Evidenza: explicit; book2/chapter10.
- `b2c10-e24` — **auditory_recall** @ `koyagyu_castle`: Otsu's distant flute affects Musashi during the fight; she is not physically present in the castle scene. — fisici: Shinmen Takezō; menzionati: Otsu. Evidenza: explicit; book2/chapter10.
- `b2c10-e25` — **escape**: Musashi escapes from the castle grounds toward the inner moat and outer darkness; Jotaro is not assumed to remain with him. — fisici: Shinmen Takezō. Evidenza: explicit; book2/chapter10.
- `b2c10-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Yagyū Munenori. Evidenza: explicit; data/source/book2/chapter10-jotaros-revenge.txt.

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Yagyū Sekishūsai (`sekishusai`), Otsu (`otsu`), Yagyū Munenori (`munenori`).

### 19. The Nightingales (b2c11)

Fonte: `data/source/book2/chapter11-the-nightingales.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Miyamoto Musashi (`musashi`) | scena: `koyagyu_castle`; percorso (confirmed_route): `koyagyu_castle` → `sekishusai_mountain_house`; percorso (arrival_confirmed): `sekishusai_mountain_house`; percorso (confirmed_route): `sekishusai_mountain_house` → `tsukigase_iga_back_road` | `tsukigase_iga_back_road`; travelling; leaves the mountain-house gate and flees toward the wooded foothills on the Tsukigase-Iga back road (explicit; data/source/book2/chapter11-the-nightingales.txt) | Canoniche: Takuan Sōhō: master/spiritual_and_moral_guide; Otsu: friend_ally/deep_personal_bond; Jōtarō: master/traveling_mentor_and_young_follower<br>Co-azioni: Otsu, Jōtarō |
| Otsu (`otsu`) | scena: `tsukigase_iga_back_road` | `tsukigase_iga_back_road`; travelling; searches for Musashi with Jotaro, meets Takuan and later parts from him on the road (explicit; data/source/book2/chapter11-the-nightingales.txt) | Canoniche: Miyamoto Musashi: friend_ally/deep_personal_bond; Takuan Sōhō: acquaintance/trusted_guide; Jōtarō: friend_ally/travel_companions_and_message_bearers<br>Co-azioni: Miyamoto Musashi, Takuan Sōhō, Jōtarō |
| Takuan Sōhō (`takuan`) | scena: `tsukigase_iga_back_road` | `tsukigase_iga_back_road`; travelling; meets Otsu and Jotaro near the chestnut tree and speaks with them before they part (explicit; data/source/book2/chapter11-the-nightingales.txt) | Canoniche: Miyamoto Musashi: master/spiritual_and_moral_guide; Otsu: acquaintance/trusted_guide<br>Co-azioni: Otsu, Jōtarō |
| Jōtarō (`jotaro`) | scena: `tsukigase_iga_back_road` | `koyagyu_castle`; returning; turns back toward Koyagyu Castle to retrieve his mask before following Musashi (explicit; data/source/book2/chapter11-the-nightingales.txt) | Canoniche: Miyamoto Musashi: master/traveling_mentor_and_young_follower; Otsu: friend_ally/travel_companions_and_message_bearers<br>Co-azioni: Miyamoto Musashi, Otsu, Takuan Sōhō |

Azioni ed evidenza:

- `b2c11-e01` — **escape** @ `koyagyu_castle`: Musashi hides by the inner moat after escaping the four retainers. — fisici: Shinmen Takezō. Evidenza: explicit; book2/chapter11.
- `b2c11-e02` — **search**: Musashi searches through the castle woods and valleys for Sekishusai's mountain house. — fisici: Shinmen Takezō. Evidenza: explicit; book2/chapter11.
- `b2c11-e03` — **arrival**: Musashi reaches the mountain-house gate, reads its plaques and chooses not to enter; no face-to-face meeting with Sekishusai occurs. — fisici: Shinmen Takezō; menzionati: Yagyū Sekishūsai. Evidenza: explicit; book2/chapter11.
- `b2c11-e04` — **journey**: Musashi leaves the mountain-house gate and flees toward the wooded Tsukigase-Iga back road. — fisici: Shinmen Takezō. Evidenza: explicit; book2/chapter11.
- `b2c11-e05` — **meeting** @ `tsukigase_iga_back_road`: Otsu and Jotaro search for Musashi on the back road and meet Takuan; Jotaro later turns back for his mask while Otsu and Takuan part. — fisici: Otsu, Jōtarō, Takuan Sōhō; menzionati: Shinmen Takezō, Yagyū Sekishūsai. Evidenza: explicit; book2/chapter11.
- `b2c11-audit-s06` — **pursuit**: Otsu and Jotaro chase Musashi onto the Tsukigase-Iga back road until he disappears into wooded foothills. — fisici: Otsu, Jōtarō, Shinmen Takezo. Evidenza: explicit; data/source/book2/chapter11-the-nightingales.txt.
- `b2c11-audit-s09` — **emotional_confrontation**: Otsu tells Takuan she remains determined to find Musashi; Takuan warns that her fixation may lead her toward self-destruction. — fisici: Otsu, Takuan Sōhō. Evidenza: explicit; data/source/book2/chapter11-the-nightingales.txt.
- `b2c11-audit-s10` — **separation_decision**: Otsu refuses to remain peacefully at Koyagyu; Jotaro chooses to continue with her after retrieving his mask, while Takuan accepts that he cannot stop them. — fisici: Otsu, Jōtarō, Takuan Sōhō. Evidenza: explicit; data/source/book2/chapter11-the-nightingales.txt.
- `b2c11-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Hon'den Matahachi, Yagyū Munenori, Yagyū Hyōgo. Evidenza: explicit; data/source/book2/chapter11-the-nightingales.txt.

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Yagyū Sekishūsai (`sekishusai`), Hon'den Matahachi (`matahachi`), Yagyū Munenori (`munenori`), Yagyū Hyōgo (`yagyu_hyogo`).

## Libro III — Fire

### 20. Sasaki Kojirō (b3c1)

Fonte: `data/source/book3/chapter1-sasaki-kojiro.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Hon'den Matahachi (`matahachi`) | scena: `fushimi_castle_works`; scena: `fushimi_deserted_house`; percorso (arrival_confirmed): `fushimi_castle_works` → `fushimi_deserted_house` | `fushimi_deserted_house`; present; asleep with the traveler's bundle, money and certificate (explicit; chapter1-sasaki-kojiro.txt:L640-L648) | Co-azioni: Unidentified certificate bearer |
| Aoki Tanzaemon (`aoki_tanzaemon`) | Presenza attestata dal dossier; nessuna tappa evento dedicata | luogo non risolto; away; wandering nearby and lamenting Jōtarō; precise final position unresolved (strong_inference; chapter1-sasaki-kojiro.txt:L532-L600) | Nessuna relazione/co-azione strutturata nel capitolo |
| Unidentified certificate bearer (`unknown_certificate_bearer`) | scena: `fushimi_castle_works` | `fushimi_castle_works`; dead; dead (explicit; chapter1-sasaki-kojiro.txt:L390-L430) | Co-azioni: Hon'den Matahachi, Unidentified Fushimi works inspector |
| Unidentified Fushimi works inspector (`fushimi_inspector`) | scena: `fushimi_castle_works` | Nessuno stato finale strutturato | Co-azioni: Unidentified certificate bearer |

Azioni ed evidenza:

- `b3c1_e01` — **arrival** @ `fushimi_castle_works`: Matahachi works at the Fushimi Castle construction site and becomes ill. — fisici: Hon'den Matahachi. Evidenza: explicit; chapter1-sasaki-kojiro.txt:L68-L151.
- `b3c1_e02` — **violent_death** @ `fushimi_castle_works`: The traveler kills an inspector and is then fatally attacked by the laborers and guards. — fisici: Unidentified certificate bearer, Unidentified Fushimi works inspector. Evidenza: explicit; chapter1-sasaki-kojiro.txt:L242-L410.
- `b3c1_e03` — **object_transfer** @ `fushimi_castle_works`: Matahachi takes the dead traveler's bundle, money and sword-school certificate. — fisici: Hon'den Matahachi, Unidentified certificate bearer. Evidenza: explicit; chapter1-sasaki-kojiro.txt:L411-L484.
- `b3c1_e04` — **movement** @ `fushimi_deserted_house`: Matahachi flees and takes shelter in an abandoned Fushimi house. — fisici: Hon'den Matahachi. Evidenza: explicit; chapter1-sasaki-kojiro.txt:L485-L565.
- `b3c1-audit-s07` — **biographical_revelation**: A mendicant priest laments his lost samurai status, his conduct involving Otsū and the harm done to his only son Jōtarō. — fisici: Aoki Tanzaemon. Evidenza: explicit; data/source/book3/chapter1-sasaki-kojiro.txt.
- `b3c1_e05` — **identity_evidence** @ `fushimi_deserted_house`: He reads a certificate addressed to Sasaki Kojirō; the text does not establish that the dead bearer was Kojirō. — fisici: Hon'den Matahachi; menzionati: Sasaki Kojiro. Evidenza: explicit; chapter1-sasaki-kojiro.txt:L602-L648.
- `b3c1-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Itō Ittōsai, Jōtarō, Kanemaki Jisai, Ikeda Terumasa, Shinmen Takezo, Oko, Otsu, Toda Seigen. Evidenza: explicit; data/source/book3/chapter1-sasaki-kojiro.txt.

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Sasaki Kojirō (`kojiro`), Itō Ittōsai (`ito_ittosai`), Jōtarō (`jotaro`), Kanemaki Jisai (`kanemaki_jisai`), Ikeda Terumasa (`lord_ikeda`), Miyamoto Musashi (`musashi`), Oko (`oko`), Otsu (`otsu`), Toda Seigen (`toda_seigen`).

### 21. Reunion in Osaka (b3c2)

Fonte: `data/source/book3/chapter2-reunion-in-osaka.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Hon'den Matahachi (come Sasaki Kojirō) (`matahachi`) | scena: `fushimi_deserted_house`; scena: `fushimi_osaka_road`; percorso (arrival_confirmed): `fushimi_deserted_house` → `osaka`; scena: `osaka_town_of_priestesses`; scena: `osaka_sideshow_lot`; scena: `osaka` | `osaka`; present; carrying Osugi toward an inn and committed to her revenge plan (explicit; chapter2-reunion-in-osaka.txt:L815-L837) | Canoniche: Obaba Osugi: family/son_mother<br>Co-azioni: Obaba Osugi, Fuchikawa Gonroku, Aoki Tanzaemon, Akakabe Yasoma |
| Obaba Osugi (`osugi`) | scena: `osaka_sideshow_lot`; scena: `osaka` | `osaka`; present; with Matahachi and Gonroku, seeking lodging (explicit; chapter2-reunion-in-osaka.txt:L815-L837) | Canoniche: Hon'den Matahachi (come Sasaki Kojirō): family/son_mother; Fuchikawa Gonroku: family/sister_in_law_brother_in_law<br>Co-azioni: Hon'den Matahachi (come Sasaki Kojirō), Fuchikawa Gonroku |
| Fuchikawa Gonroku (`gonroku`) | scena: `osaka_sideshow_lot`; scena: `osaka` | `osaka`; present; accompanying Osugi and Matahachi (explicit; chapter2-reunion-in-osaka.txt:L815-L837) | Canoniche: Obaba Osugi: family/sister_in_law_brother_in_law<br>Co-azioni: Hon'den Matahachi (come Sasaki Kojirō), Obaba Osugi |
| Aoki Tanzaemon (`aoki_tanzaemon`) | scena: `fushimi_deserted_house` | Nessuno stato finale strutturato | Co-azioni: Hon'den Matahachi (come Sasaki Kojirō) |
| Akakabe Yasoma (`akakabe_yasoma`) | scena: `osaka_town_of_priestesses` | Nessuno stato finale strutturato | Co-azioni: Hon'den Matahachi (come Sasaki Kojirō) |

Azioni ed evidenza:

- `b3c2_e01` — **encounter** @ `fushimi_deserted_house`: Matahachi and the mendicant priest fight over food; the priest nearly gives the Aoki name and describes his Himeji background. — fisici: Hon'den Matahachi, Aoki Tanzaemon. Evidenza: explicit; chapter2-reunion-in-osaka.txt:L1-L164.
- `b3c2_e02` — **movement** @ `fushimi_osaka_road`: Matahachi leaves Fushimi to seek information in Osaka. — fisici: Hon'den Matahachi. Evidenza: explicit; chapter2-reunion-in-osaka.txt:L165-L264.
- `b3c2_e03` — **false_identity** @ `osaka_town_of_priestesses`: Matahachi claims the name Sasaki Kojirō; Yasoma flatters and swindles him. — fisici: Hon'den Matahachi, Akakabe Yasoma; menzionati: Sasaki Kojiro. Evidenza: explicit; chapter2-reunion-in-osaka.txt:L332-L465.
- `b3c2_e04` — **reunion** @ `osaka_sideshow_lot`: After a gambling fight and flight into a tiger show, Matahachi reunites with Osugi and Gonroku. — fisici: Hon'den Matahachi, Matahachi's mother, Fuchikawa Gonroku. Evidenza: explicit; chapter2-reunion-in-osaka.txt:L520-L694.
- `b3c2_e05` — **alliance** @ `osaka`: Osugi accepts Matahachi's swordsmanship claims and draws him into her revenge plan against Musashi and Otsū. — fisici: Hon'den Matahachi, Matahachi's mother, Fuchikawa Gonroku; menzionati: Shinmen Takezō, Otsu. Evidenza: explicit; chapter2-reunion-in-osaka.txt:L695-L837.
- `b3c2-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Itō Ittōsai, Kanemaki Jisai, Oko, Toda Seigen. Evidenza: explicit; data/source/book3/chapter2-reunion-in-osaka.txt.

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Sasaki Kojirō (`kojiro`), Miyamoto Musashi (`musashi`), Otsu (`otsu`), Itō Ittōsai (`ito_ittosai`), Kanemaki Jisai (`kanemaki_jisai`), Oko (`oko`), Toda Seigen (`toda_seigen`).

### 22. The Handsome Young Man (b3c3)

Fonte: `data/source/book3/chapter3-the-handsome-young-man.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Handsome young man (`kojiro`) | scena: `inland_sea_ship`; percorso (confirmed_route): `osaka` | `inland_sea_ship`; present; aboard the Osaka-bound ship with the monkey after confronting Tōji and the captain (explicit; chapter3-the-handsome-young-man.txt:L430-L471) | Co-azioni: Gion Tōji, Kojirō's monkey, Unidentified ship captain |
| Gion Tōji (`gion_toji`) | scena: `inland_sea_ship`; percorso (confirmed_route): `osaka` | `inland_sea_ship`; present; aboard ship with topknot severed (explicit; chapter3-the-handsome-young-man.txt:L280-L471) | Co-azioni: Handsome young man, Kojirō's monkey |
| Kojirō's monkey (`monkey`) | scena: `inland_sea_ship`; percorso (confirmed_route): `osaka` | Nessuno stato finale strutturato | Co-azioni: Handsome young man, Gion Tōji, Unidentified ship captain |
| Unidentified ship captain (`ship_captain`) | scena: `inland_sea_ship` | Nessuno stato finale strutturato | Co-azioni: Handsome young man, Kojirō's monkey |

Azioni ed evidenza:

- `b3c3_e01` — **movement** @ `inland_sea_ship`: A passenger ship crosses the Inland Sea from Awa toward Osaka. — fisici: Sasaki Kojiro, Gion Tōji, Kojirō's monkey. Evidenza: explicit; chapter3-the-handsome-young-man.txt:L1-L90.
- `b3c3_e02` — **biographical_disclosure** @ `inland_sea_ship`: The handsome young man describes his training lineage, Iwakuni home, Drying Pole and intended equinox meeting with Tenki; his canonical identity is not yet disclosed. — fisici: Sasaki Kojiro, Gion Tōji; menzionati: Kanemaki Jisai, Toda Seigen, Itō Ittōsai, Kusanagi Tenki. Evidenza: explicit; chapter3-the-handsome-young-man.txt:L136-L247.
- `b3c3_e03` — **assault** @ `inland_sea_ship`: The handsome young man cuts off Tōji's topknot during their confrontation. — fisici: Sasaki Kojiro, Gion Tōji. Evidenza: explicit; chapter3-the-handsome-young-man.txt:L248-L318.
- `b3c3_e04` — **weapon_intervention** @ `inland_sea_ship`: After the monkey steals playing cards, the handsome young man deflects the captain's musket barrel and prevents the shot from striking it. — fisici: Sasaki Kojiro, Kojirō's monkey, Unidentified ship captain. Evidenza: explicit; chapter3-the-handsome-young-man.txt:L330-L471.
- `b3c3-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Oko, Yoshioka Denshichirō, Yoshioka Kempō, Yoshioka Seijūrō. Evidenza: explicit; data/source/book3/chapter3-the-handsome-young-man.txt.

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Kanemaki Jisai (`kanemaki_jisai`), Toda Seigen (`toda_seigen`), Itō Ittōsai (`ito_ittosai`), Kusanagi Tenki (`kusanagi_tenki`), Oko (`oko`), Yoshioka Denshichirō (`yoshioka_denshichiro`), Yoshioka Kempō (`yoshioka_kempo`), Yoshioka Seijūrō (`yoshioka_seijuro`).

### 23. The Seashell of Forgetfulness (b3c4)

Fonte: `data/source/book3/chapter4-the-seashell-of-forgetfulness.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Handsome young man (`kojiro`) | scena: `kizugawa_harbor`; percorso (arrival_confirmed): `inland_sea_ship` → `kizugawa_harbor` | luogo non risolto; departed; last seen leaving the harbor; destination not stated (explicit; chapter4-the-seashell-of-forgetfulness.txt:L36-L58) | Co-azioni: Gion Tōji, Kojirō's monkey |
| Akemi (`akemi`) | scena: `sumiyoshi_inn`; scena: `sumiyoshi_shore` | `sumiyoshi_inn`; present; elsewhere in the inn after fleeing Seijūrō's room (explicit; chapter4-the-seashell-of-forgetfulness.txt:L344-L356) | Canoniche: Oko: family/daughter_mother; Yoshioka Seijūrō: enemy/sexual_assault_and_aftermath (introdotta qui)<br>Co-azioni: Oko, Yoshioka Seijūrō, Gion Tōji |
| Oko (`oko`) | scena: `sumiyoshi_inn` | Nessuno stato finale strutturato | Canoniche: Akemi: family/daughter_mother<br>Co-azioni: Akemi, Yoshioka Seijūrō, Gion Tōji |
| Yoshioka Seijūrō (`yoshioka_seijuro`) | scena: `sumiyoshi_inn` | `sumiyoshi_inn`; present; in the inn after assaulting Akemi (strong_inference; chapter4-the-seashell-of-forgetfulness.txt:L344-L356) | Canoniche: Gion Tōji: master/school_head_and_senior_follower; Akemi: enemy/sexual_assault_and_aftermath (introdotta qui)<br>Co-azioni: Akemi, Oko, Gion Tōji |
| Gion Tōji (`gion_toji`) | scena: `kizugawa_harbor`; percorso (arrival_confirmed): `inland_sea_ship` → `kizugawa_harbor`; scena: `sumiyoshi_inn` | Nessuno stato finale strutturato | Canoniche: Yoshioka Seijūrō: master/school_head_and_senior_follower<br>Co-azioni: Handsome young man, Akemi, Oko, Yoshioka Seijūrō, Kojirō's monkey |
| Kojirō's monkey (`monkey`) | scena: `kizugawa_harbor`; percorso (arrival_confirmed): `inland_sea_ship` → `kizugawa_harbor` | Nessuno stato finale strutturato | Co-azioni: Handsome young man, Gion Tōji |

Azioni ed evidenza:

- `b3c4_e01` — **arrival** @ `kizugawa_harbor`: The ship reaches Kizugawa harbor and the handsome young man disembarks separately. — fisici: Sasaki Kojiro, Gion Tōji, Kojirō's monkey. Evidenza: explicit; chapter4-the-seashell-of-forgetfulness.txt:L1-L58.
- `b3c4_e02` — **reunion** @ `sumiyoshi_inn`: Tōji rejoins the Yoshioka party at a Sumiyoshi inn and his missing topknot becomes visible. — fisici: Gion Tōji, Oko, Akemi, Yoshioka Seijūrō. Evidenza: explicit; chapter4-the-seashell-of-forgetfulness.txt:L59-L185.
- `b3c4_e03` — **search** @ `sumiyoshi_shore`: Akemi searches symbolically for a seashell of forgetfulness on the Sumiyoshi shore. — fisici: Akemi. Evidenza: explicit; chapter4-the-seashell-of-forgetfulness.txt:L226-L268.
- `b3c4_e04` — **sexual_assault** @ `sumiyoshi_inn`: Seijūrō isolates and sexually assaults Akemi; she escapes the room afterward. — fisici: Yoshioka Seijūrō, Akemi. Evidenza: explicit; chapter4-the-seashell-of-forgetfulness.txt:L269-L356.
- `b3c4-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Hon'den Matahachi, Shinmen Takezo. Evidenza: explicit; data/source/book3/chapter4-the-seashell-of-forgetfulness.txt.

Relazioni introdotte o rivelate qui:

- Yoshioka Seijūrō → Akemi: **enemy/sexual_assault_and_aftermath** (soglia 23).

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Hon'den Matahachi (come Sasaki Kojirō) (`matahachi`), Miyamoto Musashi (`musashi`).

### 24. A Hero’s Passing (b3c5)

Fonte: `data/source/book3/chapter5-a-heros-passing.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Hon'den Matahachi (come Sasaki Kojirō) (`matahachi`) | scena: `sumiyoshi_taisha` | Nessuno stato finale strutturato | Canoniche: Obaba Osugi: family/son_mother<br>Co-azioni: Obaba Osugi, Fuchikawa Gonroku |
| Obaba Osugi (`osugi`) | scena: `sumiyoshi_taisha` | Nessuno stato finale strutturato | Canoniche: Hon'den Matahachi (come Sasaki Kojirō): family/son_mother; Fuchikawa Gonroku: family/sister_in_law_brother_in_law<br>Co-azioni: Hon'den Matahachi (come Sasaki Kojirō), Fuchikawa Gonroku |
| Akemi (`akemi`) | scena: `sumiyoshi_shore`; scena: `sumiyoshi_inn` | `sumiyoshi_inn`; present; feverish and left in the innkeeper's care (explicit; chapter5-a-heros-passing.txt:L253-L344) | Canoniche: Yoshioka Seijūrō: enemy/sexual_assault_and_aftermath<br>Co-azioni: Fuchikawa Gonroku, Yoshioka Seijūrō |
| Fuchikawa Gonroku (`gonroku`) | scena: `sumiyoshi_taisha`; scena: `sumiyoshi_shore` | `sumiyoshi_shore`; dead; dead, with Osugi beside his body (explicit; chapter5-a-heros-passing.txt:L200-L252) | Canoniche: Obaba Osugi: family/sister_in_law_brother_in_law<br>Co-azioni: Hon'den Matahachi (come Sasaki Kojirō), Obaba Osugi, Akemi |
| Yoshioka Seijūrō (`yoshioka_seijuro`) | scena: `sumiyoshi_inn` | luogo non risolto; departed; departed on Ryōhei's horse toward Kyoto (explicit; chapter5-a-heros-passing.txt:L318-L344) | Canoniche: Ueda Ryōhei: master/school_head_and_senior_disciple; Akemi: enemy/sexual_assault_and_aftermath<br>Co-azioni: Akemi, Ueda Ryōhei |
| Ueda Ryōhei (`ueda_ryohei`) | scena: `sumiyoshi_inn` | luogo non risolto; travelling; following Seijūrō on foot (explicit; chapter5-a-heros-passing.txt:L330-L344) | Canoniche: Yoshioka Seijūrō: master/school_head_and_senior_disciple<br>Co-azioni: Yoshioka Seijūrō |

Azioni ed evidenza:

- `b3c5_e01` — **visit** @ `sumiyoshi_taisha`: Osugi, Matahachi and Gonroku tour the shrine precincts; Matahachi quarrels and leaves. — fisici: Obaba Osugi, Hon'den Matahachi, Fuchikawa Gonroku. Evidenza: explicit; chapter5-a-heros-passing.txt:L1-L107.
- `b3c5_e02` — **rescue_and_death** @ `sumiyoshi_shore`: Akemi walks into the sea intending to die; Gonroku rescues her but drowns. — fisici: Akemi, Fuchikawa Gonroku. Evidenza: explicit; chapter5-a-heros-passing.txt:L108-L218.
- `b3c5_e03` — **care** @ `sumiyoshi_inn`: Fishermen revive Akemi and Seijūrō tends her fever at the inn. — fisici: Akemi, Yoshioka Seijūrō. Evidenza: explicit; chapter5-a-heros-passing.txt:L219-L278.
- `b3c5_e04` — **challenge_delivery** @ `sumiyoshi_inn`: Ryōhei delivers Musashi's challenge; Seijūrō takes his horse and rides toward Kyoto. — fisici: Ueda Ryōhei, Yoshioka Seijūrō; menzionati: Shinmen Takezō. Evidenza: explicit; chapter5-a-heros-passing.txt:L279-L344.
- `b3c5-audit-s06` — **involuntary_revelation**: In delirium Akemi mentions Musashi, New Year's and Gojō Bridge, revealing the expected meeting. — fisici: Akemi, Yoshioka Seijūrō. Evidenza: explicit; data/source/book3/chapter5-a-heros-passing.txt.
- `b3c5-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Otsu. Evidenza: explicit; data/source/book3/chapter5-a-heros-passing.txt.

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Miyamoto Musashi (`musashi`), Otsu (`otsu`).

### 25. The Drying Pole (b3c6)

Fonte: `data/source/book3/chapter6-the-drying-pole.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Sasaki Kojirō (`kojiro`) | scena: `temma_landing`; percorso (confirmed_route): `osaka_east_moat` → `kema_landing`; scena: `kema_landing`; scena: `yodo_river`; percorso (intended_destination): `kema_landing` → `yoshioka_school` | `yodo_river`; travelling; traveling toward Kyoto with Seijūrō, Ryōhei, monkey and surviving disciples (explicit; chapter6-the-drying-pole.txt:L274-L310) | Canoniche: Yoshioka Seijūrō: acquaintance/friendly_but_competitive_martial_association (introdotta qui)<br>Co-azioni: Yoshioka Seijūrō, Ueda Ryōhei, Kojirō's monkey |
| Yoshioka Seijūrō (`yoshioka_seijuro`) | scena: `kema_landing`; scena: `yodo_river`; percorso (intended_destination): `kema_landing` → `yoshioka_school` | `yodo_river`; travelling; traveling toward Kyoto with Kojirō (explicit; chapter6-the-drying-pole.txt:L274-L310) | Canoniche: Ueda Ryōhei: master/school_head_and_senior_disciple; Sasaki Kojirō: acquaintance/friendly_but_competitive_martial_association (introdotta qui)<br>Co-azioni: Sasaki Kojirō, Ueda Ryōhei, Kojirō's monkey |
| Ueda Ryōhei (`ueda_ryohei`) | scena: `kema_landing`; scena: `yodo_river`; percorso (intended_destination): `kema_landing` → `yoshioka_school` | `yodo_river`; travelling; traveling toward Kyoto after failed attack (explicit; chapter6-the-drying-pole.txt:L274-L310) | Canoniche: Yoshioka Seijūrō: master/school_head_and_senior_disciple<br>Co-azioni: Sasaki Kojirō, Yoshioka Seijūrō, Kojirō's monkey |
| Kojirō's monkey (`monkey`) | scena: `temma_landing`; percorso (confirmed_route): `osaka_east_moat` → `kema_landing`; scena: `yodo_river`; percorso (intended_destination): `kema_landing` → `yoshioka_school` | Nessuno stato finale strutturato | Co-azioni: Sasaki Kojirō, Yoshioka Seijūrō, Ueda Ryōhei |

Azioni ed evidenza:

- `b3c6_e01` — **pursuit** @ `temma_landing`: Seven Yoshioka disciples trace Kojirō to the last upstream boat and pursue him toward Kema. — fisici: Sasaki Kojiro, Kojirō's monkey. Evidenza: explicit; chapter6-the-drying-pole.txt:L1-L122.
- `b3c6_e02` — **combat** @ `kema_landing`: Kojirō lands to meet the challenge and kills multiple disciples; three survivors later bury the dead. — fisici: Sasaki Kojiro. Evidenza: explicit; chapter6-the-drying-pole.txt:L123-L218.
- `b3c6_e03` — **interrupted_combat** @ `kema_landing`: Ryōhei attacks Kojirō and falls; Seijūrō recognizes Ganryū and defuses the confrontation. — fisici: Sasaki Kojiro, Ueda Ryōhei, Yoshioka Seijūrō. Evidenza: explicit; chapter6-the-drying-pole.txt:L219-L273.
- `b3c6_e04` — **movement** @ `yodo_river`: The parties become outwardly friendly and continue toward Kyoto; the Yoshioka school is the intended destination. — fisici: Sasaki Kojiro, Kojirō's monkey, Yoshioka Seijūrō, Ueda Ryōhei. Evidenza: explicit; chapter6-the-drying-pole.txt:L274-L310.
- `b3c6-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Gion Tōji, Itō Ittōsai, Kanemaki Jisai, Shinmen Takezo, Toda Seigen. Evidenza: explicit; data/source/book3/chapter6-the-drying-pole.txt.

Relazioni introdotte o rivelate qui:

- Sasaki Kojirō → Yoshioka Seijūrō: **acquaintance/friendly_but_competitive_martial_association** (soglia 25).

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Gion Tōji (`gion_toji`), Itō Ittōsai (`ito_ittosai`), Kanemaki Jisai (`kanemaki_jisai`), Miyamoto Musashi (`musashi`), Toda Seigen (`toda_seigen`).

### 26. Eagle Mountain (b3c7)

Fonte: `data/source/book3/chapter7-eagle-mountain.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Miyamoto Musashi (`musashi`) | scena: `yokkaichi`; percorso (confirmed_route): `baiken_smithy`; scena: `baiken_smithy`; scena: `ise_naiku`; percorso (arrival_confirmed): `baiken_smithy` → `yamada_ise` → `ise_naiku`; scena: `eagle_mountain`; percorso (arrival_confirmed): `house_of_virgins` → `eagle_mountain` | `eagle_mountain`; present; at the summit with drained foot abscess and improving condition (explicit; chapter7-eagle-mountain.txt:L510-L550) | Co-azioni: Baiken's wife, Iwa, Baiken household infant, Unidentified groom |
| Baiken's wife (`baiken_wife`) | scena: `baiken_smithy` | `baiken_smithy`; present; last seen at the smithy with apprentice and infant (explicit; chapter7-eagle-mountain.txt:L330-L363) | Co-azioni: Miyamoto Musashi, Iwa, Baiken household infant, Unidentified groom |
| Iwa (`iwa`) | scena: `baiken_smithy` | Nessuno stato finale strutturato | Co-azioni: Miyamoto Musashi, Baiken's wife, Baiken household infant, Unidentified groom |
| Baiken household infant (`baiken_infant`) | scena: `baiken_smithy` | Nessuno stato finale strutturato | Co-azioni: Miyamoto Musashi, Baiken's wife, Iwa, Unidentified groom |
| Unidentified groom (`unnamed_groom`) | scena: `yokkaichi`; percorso (confirmed_route): `baiken_smithy`; scena: `baiken_smithy`; scena: `ise_naiku`; percorso (arrival_confirmed): `baiken_smithy` → `yamada_ise` → `ise_naiku` | Nessuno stato finale strutturato | Co-azioni: Miyamoto Musashi, Baiken's wife, Iwa, Baiken household infant |

Azioni ed evidenza:

- `b3c7_e01` — **movement** @ `yokkaichi`: Musashi travels through Yokkaichi toward Kameyama/Ujii while a foot injury worsens. — fisici: Shinmen Takezō, Unidentified groom. Evidenza: explicit; chapter7-eagle-mountain.txt:L94-L245.
- `b3c7_e02` — **visit** @ `baiken_smithy`: Musashi seeks Baiken, meets the household, examines the chain-and-sickle weapon and sleeps at the smithy. — fisici: Shinmen Takezō, Baiken's wife, Iwa, Baiken household infant, Unidentified groom; menzionati: Tsujikaze Kohei. Evidenza: explicit; chapter7-eagle-mountain.txt:L246-L363.
- `b3c7_e03` — **movement** @ `ise_naiku`: Musashi reaches Yamada, seeks Baiken again and approaches the Inner Shrine as infection worsens. — fisici: Shinmen Takezō, Unidentified groom. Evidenza: explicit; chapter7-eagle-mountain.txt:L364-L448.
- `b3c7_e04` — **pilgrimage_climb** @ `eagle_mountain`: After purification in the Isuzu River and leaving his swords at the House of Virgins, Musashi climbs Eagle Mountain; the abscess drains at the summit. — fisici: Shinmen Takezō. Evidenza: explicit; chapter7-eagle-mountain.txt:L449-L550.
- `b3c7-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Hon'den Matahachi, Ono Tadaaki, Nikkan, Otsu, Yagyū Sekishūsai, Takuan Sōhō, Yoshioka Seijūrō. Evidenza: explicit; data/source/book3/chapter7-eagle-mountain.txt.

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Shishido Baiken (`kohei`), Hon'den Matahachi (come Sasaki Kojirō) (`matahachi`), Mikogami Tenzen (`mikogami_tenzen`), Nikkan (`nikkan`), Otsu (`otsu`), Yagyū Sekishūsai (`sekishusai`), Takuan Sōhō (`takuan`), Yoshioka Seijūrō (`yoshioka_seijuro`).

### 27. The Mayfly in Winter (b3c8)

Fonte: `data/source/book3/chapter8-the-mayfly-in-winter.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Otsu (`otsu`) | scena: `house_of_virgins`; scena: `arakida_house`; percorso (intended_destination): `karasumaru_house`; scena: `ise_naiku`; percorso (intended_destination): `ise_naiku` → `karasumaru_house` | luogo non risolto; travelling; departing for Kyoto with scrolls and Jōtarō (explicit; chapter8-the-mayfly-in-winter.txt:L355-L410) | Canoniche: Jōtarō: friend_ally/travel_companions_and_message_bearers<br>Co-azioni: Jōtarō, Arakida Ujitomi |
| Jōtarō (`jotaro`) | scena: `house_of_virgins`; scena: `ise_naiku`; percorso (intended_destination): `ise_naiku` → `karasumaru_house` | luogo non risolto; travelling; departing for Kyoto with Otsū (explicit; chapter8-the-mayfly-in-winter.txt:L355-L410) | Canoniche: Otsu: friend_ally/travel_companions_and_message_bearers<br>Co-azioni: Otsu |
| Arakida Ujitomi (`arakida_ujitomi`) | scena: `arakida_house`; percorso (intended_destination): `karasumaru_house` | Nessuno stato finale strutturato | Co-azioni: Otsu |

Azioni ed evidenza:

- `b3c8_e01` — **trace_discovery** @ `house_of_virgins`: Otsū and Jōtarō encounter Musashi's pack and swords but do not securely identify them as his. — fisici: Otsu, Jōtarō; menzionati: Shinmen Takezō. Evidenza: explicit; chapter8-the-mayfly-in-winter.txt:L1-L104.
- `b3c8_e02` — **dismissal** @ `arakida_house`: After gossip about Otsū's chastity, Ujitomi dismisses her from the House of Virgins. — fisici: Otsu, Arakida Ujitomi. Evidenza: explicit; chapter8-the-mayfly-in-winter.txt:L188-L262.
- `b3c8_e03` — **commission** @ `arakida_house`: Ujitomi entrusts painted scrolls to Otsū for delivery to Karasumaru Mitsuhiro in Kyoto. — fisici: Otsu, Arakida Ujitomi; menzionati: Karasumaru Mitsuhiro. Evidenza: explicit; chapter8-the-mayfly-in-winter.txt:L263-L319.
- `b3c8_e04` — **object_transfer** @ `house_of_virgins`: A servant reports that Musashi's belongings were released to an unidentified claimant against a receipt. — fisici: Otsu, Jōtarō; menzionati: Shinmen Takezō. Evidenza: explicit; chapter8-the-mayfly-in-winter.txt:L320-L354.
- `b3c8_e05` — **departure** @ `ise_naiku`: Otsū and Jōtarō pay respects and depart Ise for Kyoto with the scroll box; the Karasumaru residence remains an intended destination. — fisici: Otsu, Jōtarō. Evidenza: explicit; chapter8-the-mayfly-in-winter.txt:L355-L410.

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Miyamoto Musashi (`musashi`), Karasumaru Mitsuhiro (`karasumaru_mitsuhiro`).

### 28. The Pinwheel (b3c9)

Fonte: `data/source/book3/chapter9-the-pinwheel.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Miyamoto Musashi (`musashi`) | scena: `ominato`; percorso (intended_destination): `tsu`; scena: `baiken_smithy`; percorso (uncertain_route): `baiken_smithy` → `unknown` | luogo non risolto; departed; departed alive; next destination unstated (explicit; chapter9-the-pinwheel.txt:L448-L464) | Co-azioni: Tsujikaze Kōhei |
| Tsujikaze Kōhei (`kohei`) | scena: `baiken_smithy`; percorso (uncertain_route): `baiken_smithy` → `unknown` | `baiken_smithy`; present; asleep/alive with his weapon left at his neck (explicit; chapter9-the-pinwheel.txt:L430-L464) | Co-azioni: Miyamoto Musashi |
| Baiken's wife (`baiken_wife`) | Presenza attestata dal dossier; nessuna tappa evento dedicata | `baiken_smithy`; present; asleep in the household (explicit; chapter9-the-pinwheel.txt:L430-L464) | Nessuna relazione/co-azione strutturata nel capitolo |
| Iwa (`iwa`) | Presenza attestata dal dossier; nessuna tappa evento dedicata | Nessuno stato finale strutturato | Nessuna relazione/co-azione strutturata nel capitolo |
| Baiken household infant (`baiken_infant`) | Presenza attestata dal dossier; nessuna tappa evento dedicata | Nessuno stato finale strutturato | Nessuna relazione/co-azione strutturata nel capitolo |

Azioni ed evidenza:

- `b3c9_e01` — **movement** @ `ominato`: With his foot healed, Musashi ferries to Ōminato and boards a boat to Tsu; arrival at Tsu is not shown in this event. — fisici: Shinmen Takezō. Evidenza: explicit; chapter9-the-pinwheel.txt:L1-L102.
- `b3c9_e02` — **identity_reveal** @ `baiken_smithy`: At Tsu Musashi follows the chain-sickle-carrying blacksmith and identifies him as Shishido Baiken; the narrator’s later reconciliation with Kōhei is separate. — fisici: Shinmen Takezō, Tsujikaze Kohei. Evidenza: explicit; chapter9-the-pinwheel.txt:L103-L255.
- `b3c9_e03` — **ambush** @ `baiken_smithy`: Kōhei plies Musashi with drink and stages a night ambush; Musashi hides inside the house while attackers search the roads. — fisici: Shinmen Takezō, Tsujikaze Kohei. Evidenza: explicit; chapter9-the-pinwheel.txt:L256-L408.
- `b3c9_e04` — **mercy** @ `baiken_smithy`: Musashi leaves the wrapped chain-and-sickle at Kōhei's neck instead of killing him, then departs for an unstated destination. — fisici: Shinmen Takezō, Tsujikaze Kohei. Evidenza: explicit; chapter9-the-pinwheel.txt:L409-L464.
- `b3c9-audit-s08` — **identity_reveal**: The narration explicitly identifies Shishido Baiken as Tsujikaze Kōhei and confirms Tsujikaze Temma was his brother. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Tsujikaze Kohei. Evidenza: explicit; data/source/book3/chapter9-the-pinwheel.txt:L415-L419.
- `b3c9-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Hon'den Matahachi, Ono Tadaaki, Oko, Takuan Sōhō, Tsujikaze Temma. Evidenza: explicit; data/source/book3/chapter9-the-pinwheel.txt.

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Hon'den Matahachi (come Sasaki Kojirō) (`matahachi`), Mikogami Tenzen (`mikogami_tenzen`), Oko (`oko`), Takuan Sōhō (`takuan`), Tsujikaze Temma (`temma`).

### 29. The Flying Horse (b3c10)

Fonte: `data/source/book3/chapter10-the-flying-horse.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Otsu (`otsu`) | scena: `tokaido_omi_corridor`; percorso (confirmed_route): `mount_fudesute` → `yonkenjaya` → `unknown`; percorso (intended_destination): `yasugawa`; scena: `koji_hill`; percorso (direction_only): `kaga_village` → `makado_pass` → `seto_otsu`; percorso (intended_destination): `seto_otsu` → `omi_lakeside` → `seta_karahashi` → `keage` → `karasumaru_house` | luogo non risolto; travelling; in Kyoto, heading to the Karasumaru residence with Jōtarō; arrival at the residence is not shown (explicit; chapter10-the-flying-horse.txt:L603-L623) | Canoniche: Jōtarō: friend_ally/travel_companions_and_message_bearers<br>Co-azioni: Jōtarō, Tsujikaze Kōhei, Tsuge Sannojō |
| Jōtarō (`jotaro`) | scena: `tokaido_omi_corridor`; percorso (confirmed_route): `mount_fudesute` → `yonkenjaya` → `unknown`; scena: `koji_hill`; percorso (direction_only): `kaga_village` → `makado_pass` → `seto_otsu`; percorso (intended_destination): `seto_otsu` → `omi_lakeside` → `seta_karahashi` → `keage` → `karasumaru_house` | luogo non risolto; travelling; in Kyoto, accompanying Otsū toward the Karasumaru residence; arrival at the residence is not shown (explicit; chapter10-the-flying-horse.txt:L603-L623) | Canoniche: Otsu: friend_ally/travel_companions_and_message_bearers<br>Co-azioni: Otsu, Tsujikaze Kōhei, Tsuge Sannojō |
| Tsujikaze Kōhei (`kohei`) | scena: `tokaido_omi_corridor` | luogo non risolto; departed; last seen injured after pursuit; exact final position not stated (explicit; chapter10-the-flying-horse.txt:L210-L284) | Co-azioni: Otsu, Jōtarō |
| Tsuge Sannojō (`tsuge_sannojo`) | scena: `koji_hill`; percorso (direction_only): `kaga_village` → `makado_pass` → `seto_otsu` | Nessuno stato finale strutturato | Co-azioni: Otsu, Jōtarō |

Azioni ed evidenza:

- `b3c10_e01` — **movement** @ `tokaido_omi_corridor`: Otsū and Jōtarō pass Mount Fudesute and reach Yonkenjaya; their longer journey toward Kyoto continues. — fisici: Otsu, Jōtarō. Evidenza: explicit; chapter10-the-flying-horse.txt:L1-L100.
- `b3c10_e02` — **abduction** @ `tokaido_omi_corridor`: Baiken tries to seize the horse; the wounded horse bolts with Jōtarō, while his men bind Otsū and take her toward Yasugawa. Arrival there is not established. — fisici: Otsu, Jōtarō, Tsujikaze Kohei. Evidenza: explicit; chapter10-the-flying-horse.txt:L101-L284.
- `b3c10-audit-captive-route` — **coerced_journey**: Baiken’s associates take Otsū toward Yasugawa; Jōtarō has escaped on the bolting horse and does not share this route. Arrival at Yasugawa is not established. — fisici: Otsu; menzionati: Tsujikaze Kohei. Evidenza: explicit; data/source/book3/chapter10-the-flying-horse.txt:L403-L414.
- `b3c10_e03` — **separation** @ `koji_hill`: Jōtarō escapes the runaway horse by grabbing a tree branch, falls unharmed, and runs back searching for Otsū. — fisici: Jōtarō. Evidenza: explicit; chapter10-the-flying-horse.txt:L285-L338.
- `b3c10_e04` — **rescue** @ `koji_hill`: Sannojō deceives the henchmen with a false Musashi ambush story; Jōtarō frees Otsū and Sannojō guides them onward. — fisici: Tsuge Sannojō, Otsu, Jōtarō. Evidenza: explicit; chapter10-the-flying-horse.txt:L339-L566.
- `b3c10-audit-s08` — **route_guidance**: Sannojō guides them above Kaga Village to Makado Pass and directs them toward Seto in Otsu. — fisici: Otsu, Jōtarō, Tsuge Sannojō. Evidenza: explicit; data/source/book3/chapter10-the-flying-horse.txt.
- `b3c10_e05` — **movement**: They reach Kyoto and continue toward the Karasumaru residence to deliver the scrolls; arrival at the residence is not shown. — fisici: Otsu, Jōtarō. Evidenza: explicit; chapter10-the-flying-horse.txt:L567-L623.
- `b3c10-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Karasumaru Mitsuhiro, Hon'den Matahachi, Shinmen Takezo, Watanabe Hanzō. Evidenza: explicit; data/source/book3/chapter10-the-flying-horse.txt.

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Karasumaru Mitsuhiro (`karasumaru_mitsuhiro`), Hon'den Matahachi (come Sasaki Kojirō) (`matahachi`), Miyamoto Musashi (`musashi`), Watanabe Hanzō (`watanabe_hanzo`).

### 30. The Butterfly in Winter (b3c11)

Fonte: `data/source/book3/chapter11-the-butterfly-in-winter.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Sasaki Kojirō (`kojiro`) | scena: `toribe_ruined_temple`; percorso (uncertain_route): `toribe_ruined_temple` → `unknown` | luogo non risolto; travelling; departing while carrying Akemi, with monkey nearby (explicit; chapter11-the-butterfly-in-winter.txt:L480-L512) | Canoniche: Yoshioka Seijūrō: acquaintance/friendly_but_competitive_martial_association; Akemi: friend_ally/rescuer_and_protected_traveler (introdotta qui)<br>Co-azioni: Akemi, Yoshioka Seijūrō, Kojirō's monkey |
| Akemi (`akemi`) | scena: `yodo_river`; percorso (confirmed_route): `sumiyoshi_inn`; scena: `toribe_ruined_temple`; percorso (uncertain_route): `toribe_ruined_temple` → `unknown` | luogo non risolto; departed; carried away from the temple by Kojirō; destination unstated in this chapter (explicit; chapter11-the-butterfly-in-winter.txt:L480-L512) | Canoniche: Yoshioka Seijūrō: enemy/sexual_assault_and_aftermath; Sasaki Kojirō: friend_ally/rescuer_and_protected_traveler (introdotta qui)<br>Co-azioni: Sasaki Kojirō, Aoki Tanzaemon, Yoshioka Seijūrō, Akakabe Yasoma, Kojirō's monkey |
| Aoki Tanzaemon (`aoki_tanzaemon`) | scena: `toribe_ruined_temple` | `toribe_ruined_temple`; present; left at the ruined temple (strong_inference; chapter11-the-butterfly-in-winter.txt:L480-L512) | Co-azioni: Akemi, Akakabe Yasoma |
| Yoshioka Seijūrō (`yoshioka_seijuro`) | scena: `toribe_ruined_temple`; percorso (uncertain_route): `toribe_ruined_temple` → `unknown` | Nessuno stato finale strutturato | Canoniche: Akemi: enemy/sexual_assault_and_aftermath; Sasaki Kojirō: acquaintance/friendly_but_competitive_martial_association<br>Co-azioni: Sasaki Kojirō, Akemi, Kojirō's monkey |
| Akakabe Yasoma (`akakabe_yasoma`) | scena: `toribe_ruined_temple` | Nessuno stato finale strutturato | Co-azioni: Akemi, Aoki Tanzaemon |
| Kojirō's monkey (`monkey`) | scena: `toribe_ruined_temple`; percorso (uncertain_route): `toribe_ruined_temple` → `unknown` | Nessuno stato finale strutturato | Co-azioni: Sasaki Kojirō, Akemi, Yoshioka Seijūrō |

Azioni ed evidenza:

- `b3c11_e01` — **movement** @ `yodo_river`: Akemi slips away from the Sumiyoshi inn and travels by boat up the Yodo toward Kyoto. — fisici: Akemi. Evidenza: explicit; chapter11-the-butterfly-in-winter.txt:L1-L78.
- `b3c11_e02` — **assault_and_rescue** @ `toribe_ruined_temple`: Yasoma attacks Akemi; Tanzaemon knocks him unconscious and shelters her in a ruined temple. — fisici: Akemi, Akakabe Yasoma, Aoki Tanzaemon. Evidenza: explicit; chapter11-the-butterfly-in-winter.txt:L79-L216.
- `b3c11_e03` — **disclosure** @ `toribe_ruined_temple`: Akemi tells Tanzaemon about Seijūrō's assault. — fisici: Akemi, Aoki Tanzaemon; menzionati: Yoshioka Seijūrō. Evidenza: explicit; chapter11-the-butterfly-in-winter.txt:L217-L318.
- `b3c11_e04` — **rescue** @ `toribe_ruined_temple`: During a falcon hunt, Kojirō tracks a dog to the temple, kills it after it bites Akemi, treats her wound and carries her away toward an unstated destination. — fisici: Akemi, Sasaki Kojiro, Yoshioka Seijūrō, Kojirō's monkey. Evidenza: explicit; chapter11-the-butterfly-in-winter.txt:L319-L512.
- `b3c11-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Jōtarō, Shinmen Takezo, Otsu, Yoshioka Denshichirō. Evidenza: explicit; data/source/book3/chapter11-the-butterfly-in-winter.txt.

Relazioni introdotte o rivelate qui:

- Sasaki Kojirō → Akemi: **friend_ally/rescuer_and_protected_traveler** (soglia 30).

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Jōtarō (`jotaro`), Miyamoto Musashi (`musashi`), Otsu (`otsu`), Yoshioka Denshichirō (`yoshioka_denshichiro`).

### 31. The Announcement (b3c12)

Fonte: `data/source/book3/chapter12-the-announcement.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Miyamoto Musashi (`musashi`) | scena: `matsuo_house`; percorso (arrival_confirmed): `matsuo_house` → `kamo_river_gojo`; scena: `kamo_river_gojo` | `kamo_river_gojo`; present; at the Gojō riverbank after restraining Osugi (explicit; chapter12-the-announcement.txt:L610-L645) | Canoniche: Obaba Osugi: enemy/family_conflict_and_pursuit; Yoshioka Seijūrō: rival/formal_school_challenge<br>Co-azioni: Obaba Osugi, Matsuo Kaname, Musashi's unnamed aunt |
| Obaba Osugi (`osugi`) | scena: `kamo_river_gojo` | `kamo_river_gojo`; present; tied in a boat to await Matahachi (explicit; chapter12-the-announcement.txt:L610-L645) | Canoniche: Miyamoto Musashi: enemy/family_conflict_and_pursuit<br>Co-azioni: Miyamoto Musashi |
| Yoshioka Seijūrō (`yoshioka_seijuro`) | scena: `yoshioka_school`; percorso (intended_destination): `rendaiji_field` | luogo non risolto; away; duel announced for Rendaiji; remains associated with school, exact final room unstated (strong_inference; chapter12-the-announcement.txt:L145-L165) | Canoniche: Ueda Ryōhei: master/school_head_and_senior_disciple; Miyamoto Musashi: rival/formal_school_challenge<br>Co-azioni: Ueda Ryōhei |
| Ueda Ryōhei (`ueda_ryohei`) | scena: `yoshioka_school`; percorso (intended_destination): `rendaiji_field` | Nessuno stato finale strutturato | Canoniche: Yoshioka Seijūrō: master/school_head_and_senior_disciple<br>Co-azioni: Yoshioka Seijūrō |
| Matsuo Kaname (`matsuo_kaname`) | scena: `matsuo_house` | Nessuno stato finale strutturato | Co-azioni: Miyamoto Musashi, Musashi's unnamed aunt |
| Musashi's unnamed aunt (`musashi_aunt`) | scena: `matsuo_house`; percorso (arrival_confirmed): `matsuo_house` → `kamo_river_gojo` | Nessuno stato finale strutturato | Co-azioni: Miyamoto Musashi, Matsuo Kaname |

Azioni ed evidenza:

- `b3c12_e01` — **duel_scheduling** @ `yoshioka_school`: The Yoshioka school schedules the duel for the ninth day of the first month at Rendaiji and posts the announcement at Gojō Bridge. — fisici: Yoshioka Seijūrō, Ueda Ryōhei; menzionati: Shinmen Takezō. Evidenza: explicit; chapter12-the-announcement.txt:L1-L165.
- `b3c12-audit-s01` — **financial_crisis** @ `yoshioka_school`: Creditors crowd the Yoshioka school while Seijūrō hides and Ryōhei drives them out by intimidation. — fisici: Yoshioka Seijūrō, Ueda Ryōhei. Evidenza: explicit; data/source/book3/chapter12-the-announcement.txt.
- `b3c12_e02` — **family_visit** @ `matsuo_house`: Musashi finds his aunt and uncle but receives a hostile reception shaped by Osugi's accusations. — fisici: Shinmen Takezō, Matsuo Kaname, Musashi's unnamed aunt. Evidenza: explicit; chapter12-the-announcement.txt:L166-L326.
- `b3c12_e03` — **departure** @ `matsuo_house`: Musashi leaves around midnight/New Year and reaches the Kamo River, where he eats rice cakes and bathes. — fisici: Shinmen Takezō, Musashi's unnamed aunt. Evidenza: explicit; chapter12-the-announcement.txt:L327-L421.
- `b3c12_e04` — **attack_and_restraint** @ `kamo_river_gojo`: Osugi attacks with sword and blow needles; Musashi disarms her, carries her to a boat and ties her there to await Matahachi. — fisici: Obaba Osugi, Shinmen Takezo. Evidenza: explicit; chapter12-the-announcement.txt:L422-L645.
- `b3c12-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Gion Tōji, Fuchikawa Gonroku, Sasaki Kojiro, Hon'den Matahachi, Ogin, Oko, Otsu, Yoshioka Denshichirō, Yoshioka Kempō. Evidenza: explicit; data/source/book3/chapter12-the-announcement.txt.

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Gion Tōji (`gion_toji`), Fuchikawa Gonroku (`gonroku`), Sasaki Kojirō (`kojiro`), Hon'den Matahachi (come Sasaki Kojirō) (`matahachi`), Ogin (`ogin`), Oko (`oko`), Otsu (`otsu`), Yoshioka Denshichirō (`yoshioka_denshichiro`), Yoshioka Kempō (`yoshioka_kempo`).

### 32. The Great Bridge at Gojō Avenue (b3c13)

Fonte: `data/source/book3/chapter13-the-great-bridge-at-gojo-avenue.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Miyamoto Musashi (`musashi`) | scena: `kamo_river_gojo`; percorso (intended_destination): `rendaiji_field`; percorso (intended_destination): `zuzuya_inn` | luogo non risolto; departed; departed across the river; onward destination not stated (explicit; chapter13-the-great-bridge-at-gojo-avenue.txt:L350-L438) | Canoniche: Otsu: friend_ally/deep_personal_bond; Obaba Osugi: enemy/family_conflict_and_pursuit; Jōtarō: master/traveling_mentor_and_young_follower; Sasaki Kojirō: rival/first_encounter_and_mutual_martial_interest (introdotta qui)<br>Co-azioni: Otsu, Sasaki Kojirō, Obaba Osugi, Jōtarō, Akemi |
| Otsu (`otsu`) | scena: `kamo_river_gojo` | luogo non risolto; travelling; with Osugi, intending to go to her Sannen Hill inn and seek Matahachi (explicit; chapter13-the-great-bridge-at-gojo-avenue.txt:L500-L557) | Canoniche: Miyamoto Musashi: friend_ally/deep_personal_bond; Obaba Osugi: partner_family/future_daughter_in_law; Jōtarō: friend_ally/travel_companions_and_message_bearers<br>Co-azioni: Miyamoto Musashi, Obaba Osugi, Jōtarō, Akemi |
| Sasaki Kojirō (`kojiro`) | scena: `kamo_river_gojo`; percorso (intended_destination): `zuzuya_inn` | luogo non risolto; travelling; escorting Akemi toward the inn; arrival not shown (explicit; chapter13-the-great-bridge-at-gojo-avenue.txt:L238-L270) | Canoniche: Akemi: friend_ally/rescuer_and_protected_traveler; Miyamoto Musashi: rival/first_encounter_and_mutual_martial_interest (introdotta qui)<br>Co-azioni: Miyamoto Musashi, Akemi |
| Obaba Osugi (`osugi`) | scena: `kamo_river_gojo` | luogo non risolto; travelling; with Otsū, directing her toward the Sannen Hill inn (explicit; chapter13-the-great-bridge-at-gojo-avenue.txt:L500-L557) | Canoniche: Miyamoto Musashi: enemy/family_conflict_and_pursuit; Otsu: partner_family/future_daughter_in_law<br>Co-azioni: Miyamoto Musashi, Otsu, Jōtarō |
| Jōtarō (`jotaro`) | scena: `kamo_river_gojo` | luogo non risolto; departed; intending to return to the Karasumaru house (explicit; chapter13-the-great-bridge-at-gojo-avenue.txt:L520-L557) | Canoniche: Miyamoto Musashi: master/traveling_mentor_and_young_follower; Otsu: friend_ally/travel_companions_and_message_bearers<br>Co-azioni: Miyamoto Musashi, Otsu, Obaba Osugi, Akemi |
| Akemi (`akemi`) | scena: `kamo_river_gojo`; percorso (intended_destination): `zuzuya_inn` | luogo non risolto; travelling; sent back with Kojirō; arrival at the inn is not shown (explicit; chapter13-the-great-bridge-at-gojo-avenue.txt:L238-L270) | Canoniche: Sasaki Kojirō: friend_ally/rescuer_and_protected_traveler<br>Co-azioni: Miyamoto Musashi, Otsu, Sasaki Kojirō, Jōtarō |

Azioni ed evidenza:

- `b3c13_e01` — **challenge_reading** @ `kamo_river_gojo`: Musashi reads the posted Rendaiji duel announcement and recovers Osugi's blow needles. — fisici: Shinmen Takezō. Evidenza: explicit; chapter13-the-great-bridge-at-gojo-avenue.txt:L1-L58.
- `b3c13_e02` — **reunion_and_disclosure** @ `kamo_river_gojo`: Akemi meets Musashi and discloses Seijūrō's assault and her feelings; Jōtarō observes while Otsū hides behind an oxcart. — fisici: Akemi, Shinmen Takezo, Jōtarō, Otsu; menzionati: Yoshioka Seijūrō. Evidenza: explicit; chapter13-the-great-bridge-at-gojo-avenue.txt:L59-L181.
- `b3c13_e03` — **first_encounter** @ `kamo_river_gojo`: Musashi and the real Kojirō see and assess one another; Musashi sends Akemi back with Kojirō toward the Zuzuya Inn. — fisici: Shinmen Takezō, Sasaki Kojiro, Akemi. Evidenza: explicit; chapter13-the-great-bridge-at-gojo-avenue.txt:L182-L270.
- `b3c13_e04` — **escape** @ `kamo_river_gojo`: Musashi frees Osugi and crosses the Kamo; Otsū and Jōtarō chase while Osugi pursues them. — fisici: Shinmen Takezō, Matahachi's mother, Otsu, Jōtarō. Evidenza: explicit; chapter13-the-great-bridge-at-gojo-avenue.txt:L271-L438.
- `b3c13_e05` — **manipulation** @ `kamo_river_gojo`: Osugi persuades Otsū to seek Matahachi with her; Jōtarō plans to return to the Karasumaru house, and they see the duel notice again. — fisici: Obaba Osugi, Otsu, Jōtarō; menzionati: Hon'den Matahachi. Evidenza: explicit; chapter13-the-great-bridge-at-gojo-avenue.txt:L439-L557.
- `b3c13-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Aoki Tanzaemon, Oko. Evidenza: explicit; data/source/book3/chapter13-the-great-bridge-at-gojo-avenue.txt.

Relazioni introdotte o rivelate qui:

- Miyamoto Musashi → Sasaki Kojirō: **rival/first_encounter_and_mutual_martial_interest** (soglia 32).

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Yoshioka Seijūrō (`yoshioka_seijuro`), Hon'den Matahachi (come Sasaki Kojirō) (`matahachi`), Aoki Tanzaemon (`aoki_tanzaemon`), Oko (`oko`).

## Libro IV — Wind

### 33. The Withered Field (b4c1)

Fonte: `data/source/book4/chapter1-the-withered-field.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Sasaki Kojirō (`kojiro`) | scena: `rendaiji_field` | luogo non risolto; travelling; Leaves the field with Akemi; their immediate destination is not established. (explicit; data/source/book4/chapter1-the-withered-field.txt) | Canoniche: Yoshioka Seijūrō: acquaintance/friendly_but_competitive_martial_association; Akemi: friend_ally/rescuer_and_protected_traveler<br>Co-azioni: Akemi, Yoshioka Seijūrō, Ueda Ryōhei |
| Jōtarō (`jotaro`) | scena: `rendaiji_field` | luogo non risolto; away; Last seen searching the field for Otsū; his final position is not restated. (explicit; data/source/book4/chapter1-the-withered-field.txt) | Co-azioni: Ueda Ryōhei, Kojirō's monkey, Miike Jūrōzaemon |
| Akemi (`akemi`) | scena: `rendaiji_field` | Nessuno stato finale strutturato | Canoniche: Yoshioka Seijūrō: enemy/sexual_assault_and_aftermath; Sasaki Kojirō: friend_ally/rescuer_and_protected_traveler<br>Co-azioni: Sasaki Kojirō |
| Yoshioka Seijūrō (`yoshioka_seijuro`) | scena: `rendaiji_field`; percorso (intended_destination): `yoshioka_school` | luogo non risolto; travelling; Alive, gravely wounded and newly one-armed; being carried home. (explicit; data/source/book4/chapter1-the-withered-field.txt) | Canoniche: Ueda Ryōhei: master/school_head_and_senior_disciple; Akemi: enemy/sexual_assault_and_aftermath; Sasaki Kojirō: acquaintance/friendly_but_competitive_martial_association<br>Co-azioni: Sasaki Kojirō, Ueda Ryōhei, Miike Jūrōzaemon, Tamihachi |
| Ueda Ryōhei (`ueda_ryohei`) | scena: `rendaiji_field`; percorso (intended_destination): `yoshioka_school` | Nessuno stato finale strutturato | Canoniche: Yoshioka Seijūrō: master/school_head_and_senior_disciple<br>Co-azioni: Sasaki Kojirō, Jōtarō, Yoshioka Seijūrō, Kojirō's monkey, Miike Jūrōzaemon |
| Kojirō's monkey (`monkey`) | scena: `rendaiji_field` | Nessuno stato finale strutturato | Co-azioni: Jōtarō, Ueda Ryōhei, Miike Jūrōzaemon |
| Miike Jūrōzaemon (`miike_jurozaemon`) | scena: `rendaiji_field`; percorso (intended_destination): `yoshioka_school` | Nessuno stato finale strutturato | Co-azioni: Jōtarō, Yoshioka Seijūrō, Ueda Ryōhei, Kojirō's monkey |
| Tamihachi (`tamihachi`) | scena: `rendaiji_field` | Nessuno stato finale strutturato | Co-azioni: Yoshioka Seijūrō |

Azioni ed evidenza:

- `b4c1-e01` — **search** @ `rendaiji_field`: Jōtarō searches among the waiting Yoshioka men for Otsū. — fisici: Jōtarō, Ueda Ryōhei, Miike Jūrōzaemon, Kojirō's monkey; menzionati: Otsu. Evidenza: explicit; data/source/book4/chapter1-the-withered-field.txt.
- `b4c1-e02` — **arrival** @ `rendaiji_field`: Kojirō and Akemi reach the withered field after Akemi's attempted escape. — fisici: Sasaki Kojiro, Akemi. Evidenza: explicit; data/source/book4/chapter1-the-withered-field.txt:L315-L317.
- `b4c1-e03` — **reported_duel** @ `rendaiji_field`: Tamihachi reports that Musashi shattered Seijūrō's right shoulder with one wooden-sword blow in the adjacent field. — fisici: Yoshioka Seijūrō, Tamihachi; menzionati: Shinmen Takezō. Evidenza: explicit; data/source/book4/chapter1-the-withered-field.txt:L290-L303.
- `b4c1-e04` — **medical_emergency** @ `rendaiji_field`: At Seijūrō's request Kojirō amputates the irreparably injured right arm. — fisici: Sasaki Kojiro, Yoshioka Seijūrō, Ueda Ryōhei. Evidenza: explicit; data/source/book4/chapter1-the-withered-field.txt:L324-L356.
- `b4c1-e05` — **departure** @ `rendaiji_field`: The Yoshioka party carries Seijūrō away from the field toward the Shijō school and a doctor; arrival is not shown. — fisici: Yoshioka Seijūrō, Ueda Ryōhei, Miike Jūrōzaemon; menzionati: Shinmen Takezō. Evidenza: explicit; data/source/book4/chapter1-the-withered-field.txt:L357-L371.
- `b4c1-audit-s09` — **coercive_relationship**: Kojirō continues to control and taunt Akemi while she fears his cruelty but remains in his company. — fisici: Sasaki Kojiro, Akemi. Evidenza: explicit; data/source/book4/chapter1-the-withered-field.txt.
- `b4c1-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Obaba Osugi, Yoshioka Kempō. Evidenza: explicit; data/source/book4/chapter1-the-withered-field.txt.

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Otsu (`otsu`), Miyamoto Musashi (`musashi`), Obaba Osugi (`osugi`), Yoshioka Kempō (`yoshioka_kempo`).

### 34. A Man of Parts (b4c2)

Fonte: `data/source/book4/chapter2-a-man-of-parts.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Miyamoto Musashi (`musashi`) | scena: `rendaiji_field`; scena: `koetsu_field_picnic` | luogo non risolto; departed; Leaves the field alone; immediate destination unknown. (explicit; data/source/book4/chapter2-a-man-of-parts.txt) | Canoniche: Hon’ami Kōetsu: acquaintance/tea_encounter_and_artistic_influence (introdotta qui)<br>Co-azioni: Hon’ami Kōetsu, Myōshū |
| Hon’ami Kōetsu (`koetsu`) | scena: `koetsu_field_picnic` | `koetsu_field_picnic`; present; Invites Musashi to visit Hon'ami Lane; no stay has yet been accepted. (explicit; data/source/book4/chapter2-a-man-of-parts.txt:L393-L406) | Canoniche: Miyamoto Musashi: acquaintance/tea_encounter_and_artistic_influence (introdotta qui); Myōshū: family/son_and_mother (introdotta qui)<br>Co-azioni: Miyamoto Musashi, Myōshū |
| Myōshū (`myoshu`) | scena: `koetsu_field_picnic` | Nessuno stato finale strutturato | Canoniche: Hon’ami Kōetsu: family/son_and_mother (introdotta qui)<br>Co-azioni: Miyamoto Musashi, Hon’ami Kōetsu |

Azioni ed evidenza:

- `b4c2-e01` — **departure** @ `rendaiji_field`: Musashi leaves the duel field, troubled by victory and its consequences. — fisici: Shinmen Takezō; menzionati: Yoshioka Seijūrō. Evidenza: explicit; data/source/book4/chapter2-a-man-of-parts.txt.
- `b4c2-e02` — **encounter** @ `koetsu_field_picnic`: Musashi encounters Myōshū and Kōetsu at an outdoor tea picnic beside a brook. — fisici: Shinmen Takezō, Hon’ami Kōetsu, Myōshū. Evidenza: explicit; data/source/book4/chapter2-a-man-of-parts.txt.
- `b4c2-e03` — **artistic_instruction** @ `koetsu_field_picnic`: Kōetsu's tea bowl, manner and account of the Hon’ami arts broaden Musashi's idea of mastery. — fisici: Shinmen Takezō, Hon’ami Kōetsu, Myōshū; menzionati: Yoshioka Kempō, Yagyū Sekishūsai, Takuan Sōhō. Evidenza: explicit; data/source/book4/chapter2-a-man-of-parts.txt.
- `b4c2-e04` — **invitation** @ `koetsu_field_picnic`: Myōshū and Kōetsu invite Musashi to visit their Hon’ami Lane home; he does not accept a stay in this chapter. — fisici: Shinmen Takezō, Hon’ami Kōetsu, Myōshū. Evidenza: explicit; data/source/book4/chapter2-a-man-of-parts.txt:L393-L406.
- `b4c2-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Nikkan. Evidenza: explicit; data/source/book4/chapter2-a-man-of-parts.txt.

Relazioni introdotte o rivelate qui:

- Miyamoto Musashi → Hon’ami Kōetsu: **acquaintance/tea_encounter_and_artistic_influence** (soglia 34).
- Hon’ami Kōetsu → Myōshū: **family/son_and_mother** (soglia 34).

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Yoshioka Seijūrō (`yoshioka_seijuro`), Yoshioka Kempō (`yoshioka_kempo`), Yagyū Sekishūsai (`sekishusai`), Takuan Sōhō (`takuan`), Nikkan (`nikkan`).

### 35. Too Many Kojirōs (b4c3)

Fonte: `data/source/book4/chapter3-too-many-kojiros.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Hon'den Matahachi (`matahachi`) | scena: `toji_outskirts`; scena: `kyoto_south_avenues`; percorso (confirmed_route): `kyoto_south_avenues`; scena: `matsubara_pine_wood` | `matsubara_pine_wood`; present; Tied to a pine with a public impostor notice. (explicit; data/source/book4/chapter3-too-many-kojiros.txt:L638-L668) | Co-azioni: Sasaki Kojirō, Akemi, Ichinomiya Gempachi |
| Sasaki Kojirō (`kojiro`) | scena: `matsubara_pine_wood` | luogo non risolto; searching; Searching for Akemi. (explicit; data/source/book4/chapter3-too-many-kojiros.txt) | Canoniche: Akemi: friend_ally/rescuer_and_protected_traveler<br>Co-azioni: Hon'den Matahachi, Akemi, Ichinomiya Gempachi |
| Akemi (`akemi`) | scena: `matsubara_pine_wood` | luogo non risolto; fled; Escaped; exact destination unknown. (explicit; data/source/book4/chapter3-too-many-kojiros.txt) | Canoniche: Sasaki Kojirō: friend_ally/rescuer_and_protected_traveler<br>Co-azioni: Hon'den Matahachi, Sasaki Kojirō |
| Ichinomiya Gempachi (`ichinomiya_gempachi`) | scena: `kyoto_south_avenues`; percorso (confirmed_route): `kyoto_south_avenues`; scena: `matsubara_pine_wood`; percorso (intended_destination): `kozukeshimonida` | luogo non risolto; travelling; Returning toward Shimonida in Kōzuke. (explicit; data/source/book4/chapter3-too-many-kojiros.txt) | Co-azioni: Hon'den Matahachi, Sasaki Kojirō |

Azioni ed evidenza:

- `b4c3-e01` — **impersonation** @ `toji_outskirts`: Matahachi drinks without money, wounds two men and claims the name Sasaki Kojirō. — fisici: Hon'den Matahachi; menzionati: Sasaki Kojiro, Shinmen Takezo. Evidenza: explicit; data/source/book4/chapter3-too-many-kojiros.txt.
- `b4c3-e02` — **pursuit** @ `kyoto_south_avenues`: Gempachi recognizes Tenki's pillbox and pursues Matahachi across Kyoto's southern avenues. — fisici: Hon'den Matahachi, Ichinomiya Gempachi; menzionati: Kusanagi Tenki. Evidenza: explicit; data/source/book4/chapter3-too-many-kojiros.txt.
- `b4c3-e03` — **encounter** @ `matsubara_pine_wood`: At Matsubara, Matahachi meets Akemi fleeing the real Kojirō and repeats the false identity. — fisici: Hon'den Matahachi, Akemi, Sasaki Kojiro. Evidenza: explicit; data/source/book4/chapter3-too-many-kojiros.txt.
- `b4c3-e04` — **identity_correction** @ `matsubara_pine_wood`: Kojirō identifies himself and his Ganryū name, then knocks the impostor unconscious. — fisici: Hon'den Matahachi, Sasaki Kojiro, Akemi. Evidenza: explicit; data/source/book4/chapter3-too-many-kojiros.txt:L362-L424.
- `b4c3-e05` — **recovery** @ `matsubara_pine_wood`: Gempachi recovers Tenki's pillbox and certificate from Matahachi. — fisici: Hon'den Matahachi, Ichinomiya Gempachi; menzionati: Kusanagi Tenki, Kanemaki Jisai. Evidenza: explicit; data/source/book4/chapter3-too-many-kojiros.txt.
- `b4c3-e06` — **intervention** @ `matsubara_pine_wood`: Kojirō prevents Gempachi from killing Matahachi and refuses Jisai's certificate. — fisici: Hon'den Matahachi, Ichinomiya Gempachi, Sasaki Kojiro; menzionati: Kanemaki Jisai. Evidenza: explicit; data/source/book4/chapter3-too-many-kojiros.txt.
- `b4c3-e07` — **departure** @ `matsubara_pine_wood`: Gempachi leaves intending to return to Kōzuke; Matahachi remains tied to a tree with an impostor notice while Akemi has escaped again. — fisici: Ichinomiya Gempachi; menzionati: Hon'den Matahachi, Akemi. Evidenza: explicit; data/source/book4/chapter3-too-many-kojiros.txt.

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Miyamoto Musashi (`musashi`), Kusanagi Tenki (`kusanagi_tenki`), Kanemaki Jisai (`kanemaki_jisai`).

### 36. The Younger Brother (b4c4)

Fonte: `data/source/book4/chapter4-the-younger-brother.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Hon'den Matahachi (`matahachi`) | scena: `matsubara_pine_wood` | luogo non risolto; away; Freed and moving independently in Kyoto. (explicit; data/source/book4/chapter4-the-younger-brother.txt) | Co-azioni: Yoshioka Denshichirō |
| Yoshioka Seijūrō (`yoshioka_seijuro`) | scena: `yoshioka_school` | luogo non risolto; departed; Departed to an unknown destination. (explicit; data/source/book4/chapter4-the-younger-brother.txt) | Canoniche: Ueda Ryōhei: master/school_head_and_senior_disciple; Yoshioka Denshichirō: family/older_brother_younger_brother<br>Co-azioni: Ueda Ryōhei, Yoshioka Denshichirō |
| Ueda Ryōhei (`ueda_ryohei`) | scena: `yoshioka_school`; percorso (intended_destination): `honami_lane_house` | Nessuno stato finale strutturato | Canoniche: Yoshioka Seijūrō: master/school_head_and_senior_disciple<br>Co-azioni: Yoshioka Seijūrō, Yoshioka Denshichirō, Ōtaguro Hyōsuke |
| Yoshioka Denshichirō (`yoshioka_denshichiro`) | scena: `matsubara_pine_wood`; scena: `yoshioka_school`; percorso (intended_destination): `honami_lane_house` | `yoshioka_school`; present; Head of the Yoshioka school and committed to challenging Musashi. (explicit; data/source/book4/chapter4-the-younger-brother.txt) | Canoniche: Yoshioka Seijūrō: family/older_brother_younger_brother<br>Co-azioni: Hon'den Matahachi, Yoshioka Seijūrō, Ueda Ryōhei, Ōtaguro Hyōsuke |
| Miike Jūrōzaemon (`miike_jurozaemon`) | Presenza attestata dal dossier; nessuna tappa evento dedicata | Nessuno stato finale strutturato | Nessuna relazione/co-azione strutturata nel capitolo |
| Ōtaguro Hyōsuke (`otaguro_hyosuke`) | scena: `yoshioka_school`; percorso (intended_destination): `honami_lane_house` | Nessuno stato finale strutturato | Co-azioni: Ueda Ryōhei, Yoshioka Denshichirō |
| Nampo Yoichibei (`nampo_yoichibei`) | scena: `yoshioka_school` | luogo non risolto; departed; Has left the school. (explicit; data/source/book4/chapter4-the-younger-brother.txt) | Nessuna relazione/co-azione strutturata nel capitolo |

Azioni ed evidenza:

- `b4c4-e01` — **arrival** @ `matsubara_pine_wood`: Denshichirō returns to Kyoto from travel through Ise, Yamato and Osaka. — fisici: Yoshioka Denshichirō. Evidenza: explicit; data/source/book4/chapter4-the-younger-brother.txt.
- `b4c4-e02` — **release** @ `matsubara_pine_wood`: Denshichirō cuts Matahachi free from the tree. — fisici: Yoshioka Denshichirō, Hon'den Matahachi. Evidenza: explicit; data/source/book4/chapter4-the-younger-brother.txt.
- `b4c4-e03` — **succession** @ `yoshioka_school`: Seijūrō cedes the Yoshioka house and school to Denshichirō and warns him not to fight Musashi. — fisici: Yoshioka Seijūrō, Yoshioka Denshichirō, Ueda Ryōhei; menzionati: Shinmen Takezō. Evidenza: explicit; data/source/book4/chapter4-the-younger-brother.txt.
- `b4c4-e04` — **rupture** @ `yoshioka_school`: Denshichirō rejects restraint; Nampo Yoichibei leaves the school rather than support revenge. — fisici: Nampo Yoichibei; menzionati: Yoshioka Denshichirō, Miike Jūrōzaemon, Ōtaguro Hyōsuke. Evidenza: explicit; data/source/book4/chapter4-the-younger-brother.txt.
- `b4c4-e05` — **challenge_preparation** @ `yoshioka_school`: After learning Musashi is staying with Kōetsu, Denshichirō prepares a formal challenge. — fisici: Yoshioka Denshichirō, Ueda Ryōhei, Ōtaguro Hyōsuke; menzionati: Shinmen Takezō, Hon’ami Kōetsu. Evidenza: explicit; data/source/book4/chapter4-the-younger-brother.txt.
- `b4c4-e06` — **disappearance** @ `yoshioka_school`: Seijūrō leaves a long letter and disappears from the school. — fisici: Yoshioka Seijūrō. Evidenza: explicit; data/source/book4/chapter4-the-younger-brother.txt.
- `b4c4-audit-s03` — **deception**: Matahachi gives Denshichirō a distorted story portraying Musashi as the abductor of his fiancée and himself as a revenge-seeker. — fisici: Hon'den Matahachi, Yoshioka Denshichirō. Evidenza: explicit; data/source/book4/chapter4-the-younger-brother.txt.
- `b4c4-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Gion Tōji, Oko, Matahachi's mother, Yoshioka Kempō. Evidenza: explicit; data/source/book4/chapter4-the-younger-brother.txt.

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Miyamoto Musashi (`musashi`), Hon’ami Kōetsu (`koetsu`), Gion Tōji (`gion_toji`), Oko (`oko`), Obaba Osugi (`osugi`), Yoshioka Kempō (`yoshioka_kempo`).

### 37. A Mother’s Love (b4c5)

Fonte: `data/source/book4/chapter5-a-mothers-love.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Hon'den Matahachi (`matahachi`) | scena: `mountain_god_hall` | luogo non risolto; fled; Fled with Osugi after killing Yasoma. (explicit; data/source/book4/chapter5-a-mothers-love.txt) | Canoniche: Obaba Osugi: family/son_mother; Otsu: partner_family/betrothed_at_book_start<br>Co-azioni: Otsu, Obaba Osugi, Akakabe Yasoma |
| Otsu (`otsu`) | scena: `sannen_hill_inn`; scena: `mountain_god_hall` | `mountain_god_hall`; present; Alive but unconscious, under the rescuers' care. (explicit; data/source/book4/chapter5-a-mothers-love.txt:L810-L821) | Canoniche: Hon'den Matahachi: partner_family/betrothed_at_book_start; Obaba Osugi: partner_family/future_daughter_in_law; Takuan Sōhō: acquaintance/trusted_guide<br>Co-azioni: Hon'den Matahachi, Takuan Sōhō, Sasaki Kojirō, Obaba Osugi, Akemi |
| Takuan Sōhō (`takuan`) | scena: `mountain_god_hall` | `mountain_god_hall`; present; At the rescue scene with Otsū. (explicit; data/source/book4/chapter5-a-mothers-love.txt) | Canoniche: Otsu: acquaintance/trusted_guide<br>Co-azioni: Otsu |
| Sasaki Kojirō (`kojiro`) | scena: `mountain_god_hall` | Nessuno stato finale strutturato | Canoniche: Akemi: friend_ally/rescuer_and_protected_traveler<br>Co-azioni: Otsu, Obaba Osugi |
| Obaba Osugi (`osugi`) | scena: `sannen_hill_inn`; scena: `mountain_god_hall` | luogo non risolto; fled; Fled with Matahachi. (explicit; data/source/book4/chapter5-a-mothers-love.txt) | Canoniche: Hon'den Matahachi: family/son_mother; Otsu: partner_family/future_daughter_in_law<br>Co-azioni: Hon'den Matahachi, Otsu, Sasaki Kojirō, Akemi, Akakabe Yasoma |
| Akemi (`akemi`) | scena: `sannen_hill_inn` | Nessuno stato finale strutturato | Canoniche: Sasaki Kojirō: friend_ally/rescuer_and_protected_traveler<br>Co-azioni: Otsu, Obaba Osugi |
| Akakabe Yasoma (`akakabe_yasoma`) | scena: `mountain_god_hall` | `mountain_god_hall`; dead; Dead; watchmen prepare burial. (explicit; data/source/book4/chapter5-a-mothers-love.txt:L716-L726) | Co-azioni: Hon'den Matahachi, Obaba Osugi |

Azioni ed evidenza:

- `b4c5-e01` — **confinement** @ `sannen_hill_inn`: Osugi keeps Otsū under coercive control at the Sannen Hill inn; Akemi arrives at the same inn. — fisici: Otsu, Matahachi's mother, Akemi. Evidenza: explicit; data/source/book4/chapter5-a-mothers-love.txt.
- `b4c5-e02` — **lure** @ `mountain_god_hall`: A priest delivers Matahachi's letter and Osugi takes Otsū to the mountain-god hall at night. — fisici: Otsu, Matahachi's mother; menzionati: Hon'den Matahachi. Evidenza: explicit; data/source/book4/chapter5-a-mothers-love.txt.
- `b4c5-e03` — **encounter** @ `mountain_god_hall`: Kojirō, still searching for Akemi, crosses the group's path. — fisici: Sasaki Kojiro, Otsu, Matahachi's mother; menzionati: Akemi. Evidenza: explicit; data/source/book4/chapter5-a-mothers-love.txt.
- `b4c5-e04` — **rejection** @ `mountain_god_hall`: Otsū rejects Matahachi and explicitly affirms her love for Musashi. — fisici: Otsu, Hon'den Matahachi, Matahachi's mother; menzionati: Shinmen Takezō. Evidenza: explicit; data/source/book4/chapter5-a-mothers-love.txt.
- `b4c5-e05` — **mistaken_killing** @ `mountain_god_hall`: Matahachi repeatedly strikes a body in the dark, believing it Otsū; the victim is Akakabe Yasoma. — fisici: Hon'den Matahachi, Akakabe Yasoma, Matahachi's mother; menzionati: Otsu. Evidenza: explicit; data/source/book4/chapter5-a-mothers-love.txt:L580-L726.
- `b4c5-e06` — **rescue** @ `mountain_god_hall`: Takuan and temple watchmen find Otsū unconscious but alive near the marsh. — fisici: Takuan Sōhō, Otsu. Evidenza: explicit; data/source/book4/chapter5-a-mothers-love.txt:L810-L821.
- `b4c5-e07` — **flight** @ `mountain_god_hall`: Takuan confronts Osugi; Osugi and Matahachi flee the scene. — fisici: Obaba Osugi, Hon'den Matahachi; menzionati: Takuan Sōhō. Evidenza: explicit; data/source/book4/chapter5-a-mothers-love.txt.
- `b4c5-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Jōtarō, Karasumaru Mitsuhiro, Oko. Evidenza: explicit; data/source/book4/chapter5-a-mothers-love.txt.

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Miyamoto Musashi (`musashi`), Jōtarō (`jotaro`), Karasumaru Mitsuhiro (`karasumaru_mitsuhiro`), Oko (`oko`).

### 38. The Urbane Craftsman (b4c6)

Fonte: `data/source/book4/chapter6-the-urbane-craftsman.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Miyamoto Musashi (`musashi`) | scena: `honami_lane_house`; percorso (intended_destination): `rengeoin_sanjusangendo`; scena: `ogiya_yanagimachi` | luogo non risolto; travelling; Walking alone toward the Rengeōin duel. (explicit; data/source/book4/chapter6-the-urbane-craftsman.txt) | Canoniche: Hon’ami Kōetsu: acquaintance/tea_encounter_and_artistic_influence<br>Co-azioni: Hon’ami Kōetsu, Myōshū, Haiya Shōyū, Sumigiku, Rin’ya, Ōtaguro Hyōsuke |
| Hon’ami Kōetsu (`koetsu`) | scena: `honami_lane_house`; percorso (intended_destination): `rengeoin_sanjusangendo`; scena: `ogiya_yanagimachi` | `ogiya_yanagimachi`; present; At the Ōgiya social gathering. (explicit; data/source/book4/chapter6-the-urbane-craftsman.txt) | Canoniche: Miyamoto Musashi: acquaintance/tea_encounter_and_artistic_influence; Myōshū: family/son_and_mother<br>Co-azioni: Miyamoto Musashi, Myōshū, Haiya Shōyū, Sumigiku, Rin’ya, Ōtaguro Hyōsuke |
| Myōshū (`myoshu`) | scena: `honami_lane_house` | Nessuno stato finale strutturato | Canoniche: Hon’ami Kōetsu: family/son_and_mother<br>Co-azioni: Miyamoto Musashi, Hon’ami Kōetsu |
| Haiya Shōyū (`haiya_shoyu`) | scena: `ogiya_yanagimachi` | Nessuno stato finale strutturato | Co-azioni: Miyamoto Musashi, Hon’ami Kōetsu, Sumigiku, Rin’ya |
| Sumigiku (`sumigiku`) | scena: `ogiya_yanagimachi` | Nessuno stato finale strutturato | Co-azioni: Miyamoto Musashi, Hon’ami Kōetsu, Haiya Shōyū, Rin’ya |
| Rin’ya (`rinya`) | scena: `ogiya_yanagimachi` | Nessuno stato finale strutturato | Co-azioni: Miyamoto Musashi, Hon’ami Kōetsu, Haiya Shōyū, Sumigiku |
| Ōtaguro Hyōsuke (`otaguro_hyosuke`) | scena: `honami_lane_house`; percorso (intended_destination): `rengeoin_sanjusangendo` | Nessuno stato finale strutturato | Co-azioni: Miyamoto Musashi, Hon’ami Kōetsu |

Azioni ed evidenza:

- `b4c6-e01` — **residence** @ `honami_lane_house`: Musashi spends about four days as Kōetsu and Myōshū's guest, observing art and craft. — fisici: Shinmen Takezō, Hon’ami Kōetsu, Myōshū. Evidenza: explicit; data/source/book4/chapter6-the-urbane-craftsman.txt.
- `b4c6-e02` — **challenge_delivery** @ `honami_lane_house`: Ōtaguro and Yoshioka messengers deliver Denshichirō's challenge for nine at night at Rengeōin. — fisici: Shinmen Takezō, Hon’ami Kōetsu, Ōtaguro Hyōsuke; menzionati: Yoshioka Denshichirō. Evidenza: explicit; data/source/book4/chapter6-the-urbane-craftsman.txt.
- `b4c6-e03` — **social_visit** @ `ogiya_yanagimachi`: Kōetsu and Shōyū take Musashi to the Ōgiya in Yanagimachi. — fisici: Shinmen Takezō, Hon’ami Kōetsu, Haiya Shōyū, Sumigiku, Rin’ya. Evidenza: explicit; data/source/book4/chapter6-the-urbane-craftsman.txt.
- `b4c6-e04` — **poetry_exchange** @ `ogiya_yanagimachi`: Shōyū drafts an invitation poem, Kōetsu completes it and Sumigiku carries it to Yoshino’s party. Karasumaru returns blank paper; Kōetsu interprets its whiteness as snow and a refusal to leave the other guests. Musashi does not author the reply. — fisici: Shinmen Takezō, Sumigiku; menzionati: Yoshino Tayū, Karasumaru Mitsuhiro. Evidenza: explicit; data/source/book4/chapter6-the-urbane-craftsman.txt:L468-L535.
- `b4c6-e05` — **departure** @ `ogiya_yanagimachi`: Musashi quietly leaves the Ōgiya intending to keep the duel appointment at Rengeōin. — fisici: Shinmen Takezō; menzionati: Yoshioka Denshichirō. Evidenza: explicit; data/source/book4/chapter6-the-urbane-craftsman.txt.

Relazioni introdotte o rivelate qui:

- Miyamoto Musashi → Yoshioka Denshichirō: **enemy/formal_challenge_and_duel_at_rengeoin** (soglia 38).

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Yoshioka Denshichirō (`yoshioka_denshichiro`), Yoshino Tayū (`yoshino_tayu`), Karasumaru Mitsuhiro (`karasumaru_mitsuhiro`).

### 39. Reverberations in the Snow (b4c7)

Fonte: `data/source/book4/chapter7-reverberations-in-the-snow.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Miyamoto Musashi (`musashi`) | scena: `gion_woods`; percorso (confirmed_route): `rengeoin_sanjusangendo`; scena: `rengeoin_sanjusangendo`; percorso (direction_only): `rengeoin_sanjusangendo` → `unknown` | luogo non risolto; fled; Escaped Rengeōin; destination not yet stated. (explicit; data/source/book4/chapter7-reverberations-in-the-snow.txt) | Canoniche: Yoshioka Denshichirō: enemy/formal_challenge_and_duel_at_rengeoin<br>Co-azioni: Yoshioka Denshichirō, Rin’ya, Ōtaguro Hyōsuke |
| Ueda Ryōhei (`ueda_ryohei`) | scena: `rengeoin_sanjusangendo` | Nessuno stato finale strutturato | Co-azioni: Yoshioka Denshichirō, Miike Jūrōzaemon, Ōtaguro Hyōsuke |
| Yoshioka Denshichirō (`yoshioka_denshichiro`) | scena: `rengeoin_sanjusangendo` | `rengeoin_sanjusangendo`; dead; Dead. (explicit; data/source/book4/chapter7-reverberations-in-the-snow.txt:L398-L427) | Canoniche: Miyamoto Musashi: enemy/formal_challenge_and_duel_at_rengeoin<br>Co-azioni: Miyamoto Musashi, Ueda Ryōhei, Miike Jūrōzaemon, Ōtaguro Hyōsuke |
| Rin’ya (`rinya`) | scena: `gion_woods`; percorso (confirmed_route): `rengeoin_sanjusangendo` | Nessuno stato finale strutturato | Co-azioni: Miyamoto Musashi |
| Miike Jūrōzaemon (`miike_jurozaemon`) | scena: `rengeoin_sanjusangendo` | Nessuno stato finale strutturato | Co-azioni: Ueda Ryōhei, Yoshioka Denshichirō, Ōtaguro Hyōsuke |
| Ōtaguro Hyōsuke (`otaguro_hyosuke`) | scena: `rengeoin_sanjusangendo` | `rengeoin_sanjusangendo`; dead; Dead. (explicit; data/source/book4/chapter7-reverberations-in-the-snow.txt:L398-L427) | Co-azioni: Miyamoto Musashi, Ueda Ryōhei, Yoshioka Denshichirō, Miike Jūrōzaemon |
| Yoshioka Genzaemon (`yoshioka_genzaemon`) | Presenza attestata dal dossier; nessuna tappa evento dedicata | `rengeoin_sanjusangendo`; present; Leading the search at the temple. (explicit; data/source/book4/chapter7-reverberations-in-the-snow.txt) | Nessuna relazione/co-azione strutturata nel capitolo |

Azioni ed evidenza:

- `b4c7-e01` — **route** @ `gion_woods`: Musashi walks through snowy Shijō, the Kamo crossing and Gion woods to Rengeōin. — fisici: Shinmen Takezō, Rin’ya. Evidenza: explicit; data/source/book4/chapter7-reverberations-in-the-snow.txt.
- `b4c7-e02` — **duel_setup** @ `rengeoin_sanjusangendo`: Denshichirō waits at Rengeōin with Ōtaguro and senior Yoshioka retainers; Musashi has not entered this scene. — fisici: Yoshioka Denshichirō, Ōtaguro Hyōsuke, Ueda Ryōhei, Miike Jūrōzaemon. Evidenza: explicit; data/source/book4/chapter7-reverberations-in-the-snow.txt.
- `b4c7-audit-arrival` — **duel_setup** @ `rengeoin_sanjusangendo`: Musashi reaches Rengeōin, warms himself in the temple and takes the veranda position before revealing himself. — fisici: Shinmen Takezō, Yoshioka Denshichirō. Evidenza: explicit; data/source/book4/chapter7-reverberations-in-the-snow.txt.
- `b4c7-e03` — **killing** @ `rengeoin_sanjusangendo`: Musashi detects the ambush and kills Ōtaguro before the main duel. — fisici: Shinmen Takezō, Ōtaguro Hyōsuke, Yoshioka Denshichirō. Evidenza: explicit; data/source/book4/chapter7-reverberations-in-the-snow.txt:L398-L423.
- `b4c7-e04` — **duel** @ `rengeoin_sanjusangendo`: Musashi kills Denshichirō with his sword. — fisici: Shinmen Takezō, Yoshioka Denshichirō. Evidenza: explicit; data/source/book4/chapter7-reverberations-in-the-snow.txt:L398-L427.
- `b4c7-e05` — **escape** @ `rengeoin_sanjusangendo`: Genzaemon and the disciples search while Musashi hides under the eaves and escapes from the north side. — fisici: Shinmen Takezō; menzionati: Yoshioka Genzaemon. Evidenza: explicit; data/source/book4/chapter7-reverberations-in-the-snow.txt.
- `b4c7-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Yoshioka Kempō, Yoshioka Seijūrō. Evidenza: explicit; data/source/book4/chapter7-reverberations-in-the-snow.txt.

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Yoshioka Kempō (`yoshioka_kempo`), Yoshioka Seijūrō (`yoshioka_seijuro`).

### 40. The Elegant People (b4c8)

Fonte: `data/source/book4/chapter8-the-elegant-people.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Miyamoto Musashi (`musashi`) | scena: `ogiya_yanagimachi`; scena: `yoshino_cottage` | `yoshino_cottage`; present; Sheltered in Yoshino's private cottage. (explicit; data/source/book4/chapter8-the-elegant-people.txt) | Canoniche: Takuan Sōhō: master/spiritual_and_moral_guide; Hon’ami Kōetsu: acquaintance/tea_encounter_and_artistic_influence; Yoshino Tayū: acquaintance/meeting_and_care_at_ogiya (introdotta qui)<br>Co-azioni: Takuan Sōhō, Karasumaru Mitsuhiro, Hon’ami Kōetsu, Konoe Nobutada, Haiya Shōyū, Yoshino Tayū, Sumigiku, Rin’ya |
| Takuan Sōhō (`takuan`) | scena: `ogiya_yanagimachi`; scena: `yoshino_cottage` | Nessuno stato finale strutturato | Canoniche: Miyamoto Musashi: master/spiritual_and_moral_guide<br>Co-azioni: Miyamoto Musashi, Karasumaru Mitsuhiro, Hon’ami Kōetsu, Konoe Nobutada, Haiya Shōyū, Yoshino Tayū, Sumigiku, Rin’ya |
| Karasumaru Mitsuhiro (`karasumaru_mitsuhiro`) | scena: `ogiya_yanagimachi`; scena: `yoshino_cottage` | Nessuno stato finale strutturato | Co-azioni: Miyamoto Musashi, Takuan Sōhō, Hon’ami Kōetsu, Konoe Nobutada, Haiya Shōyū, Yoshino Tayū, Sumigiku, Rin’ya |
| Hon’ami Kōetsu (`koetsu`) | scena: `ogiya_yanagimachi`; scena: `yoshino_cottage` | Nessuno stato finale strutturato | Canoniche: Miyamoto Musashi: acquaintance/tea_encounter_and_artistic_influence<br>Co-azioni: Miyamoto Musashi, Takuan Sōhō, Karasumaru Mitsuhiro, Konoe Nobutada, Haiya Shōyū, Yoshino Tayū, Sumigiku, Rin’ya |
| Konoe Nobutada (`konoe_nobutada`) | scena: `ogiya_yanagimachi`; scena: `yoshino_cottage` | Nessuno stato finale strutturato | Co-azioni: Miyamoto Musashi, Takuan Sōhō, Karasumaru Mitsuhiro, Hon’ami Kōetsu, Haiya Shōyū, Yoshino Tayū, Sumigiku, Rin’ya |
| Haiya Shōyū (`haiya_shoyu`) | scena: `ogiya_yanagimachi`; scena: `yoshino_cottage` | Nessuno stato finale strutturato | Co-azioni: Miyamoto Musashi, Takuan Sōhō, Karasumaru Mitsuhiro, Hon’ami Kōetsu, Konoe Nobutada, Yoshino Tayū, Sumigiku, Rin’ya |
| Yoshino Tayū (`yoshino_tayu`) | scena: `ogiya_yanagimachi`; scena: `yoshino_cottage` | `yoshino_cottage`; present; Hosting the private hearth gathering. (explicit; data/source/book4/chapter8-the-elegant-people.txt) | Canoniche: Miyamoto Musashi: acquaintance/meeting_and_care_at_ogiya (introdotta qui)<br>Co-azioni: Miyamoto Musashi, Takuan Sōhō, Karasumaru Mitsuhiro, Hon’ami Kōetsu, Konoe Nobutada, Haiya Shōyū, Sumigiku, Rin’ya |
| Sumigiku (`sumigiku`) | scena: `yoshino_cottage` | Nessuno stato finale strutturato | Co-azioni: Miyamoto Musashi, Takuan Sōhō, Karasumaru Mitsuhiro, Hon’ami Kōetsu, Konoe Nobutada, Haiya Shōyū, Yoshino Tayū, Rin’ya |
| Rin’ya (`rinya`) | scena: `yoshino_cottage` | Nessuno stato finale strutturato | Co-azioni: Miyamoto Musashi, Takuan Sōhō, Karasumaru Mitsuhiro, Hon’ami Kōetsu, Konoe Nobutada, Haiya Shōyū, Yoshino Tayū, Sumigiku |

Azioni ed evidenza:

- `b4c8-e01` — **social_contest** @ `ogiya_yanagimachi`: Shōyū confronts Karasumaru and Konoe over access to Yoshino; Takuan referees their game. — fisici: Haiya Shōyū, Karasumaru Mitsuhiro, Konoe Nobutada, Takuan Sōhō, Yoshino Tayū. Evidenza: explicit; data/source/book4/chapter8-the-elegant-people.txt.
- `b4c8-e02` — **reunion** @ `ogiya_yanagimachi`: Musashi returns from Rengeōin and reunites with Takuan at the Ōgiya. — fisici: Shinmen Takezō, Takuan Sōhō, Hon’ami Kōetsu; menzionati: Yoshioka Denshichirō. Evidenza: explicit; data/source/book4/chapter8-the-elegant-people.txt.
- `b4c8-e03` — **gathering** @ `yoshino_cottage`: The party moves into Yoshino's rustic cottage behind the pleasure house. — fisici: Shinmen Takezō, Yoshino Tayū, Hon’ami Kōetsu, Takuan Sōhō, Haiya Shōyū, Karasumaru Mitsuhiro, Konoe Nobutada, Sumigiku, Rin’ya. Evidenza: explicit; data/source/book4/chapter8-the-elegant-people.txt.
- `b4c8-e04` — **care** @ `yoshino_cottage`: Yoshino wipes Denshichirō's blood from Musashi's sleeve and calls the stain a peony petal. — fisici: Shinmen Takezō, Yoshino Tayū; menzionati: Yoshioka Denshichirō. Evidenza: explicit; data/source/book4/chapter8-the-elegant-people.txt.
- `b4c8-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Jōtarō, Otsu. Evidenza: explicit; data/source/book4/chapter8-the-elegant-people.txt.

Relazioni introdotte o rivelate qui:

- Miyamoto Musashi → Yoshino Tayū: **acquaintance/meeting_and_care_at_ogiya** (soglia 40).

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Yoshioka Denshichirō (`yoshioka_denshichiro`), Jōtarō (`jotaro`), Otsu (`otsu`).

### 41. The Broken Lute (b4c9)

Fonte: `data/source/book4/chapter9-the-broken-lute.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Miyamoto Musashi (`musashi`) | scena: `yoshino_cottage`; scena: `ogiya_yanagimachi` | `yoshino_cottage`; present; Remains hidden in the cottage behind the blockaded Ōgiya. (explicit; data/source/book4/chapter9-the-broken-lute.txt) | Canoniche: Takuan Sōhō: master/spiritual_and_moral_guide; Hon’ami Kōetsu: acquaintance/tea_encounter_and_artistic_influence; Yoshino Tayū: acquaintance/meeting_and_care_at_ogiya<br>Co-azioni: Takuan Sōhō, Karasumaru Mitsuhiro, Hon’ami Kōetsu, Haiya Shōyū, Yoshino Tayū |
| Takuan Sōhō (`takuan`) | scena: `yoshino_cottage` | Nessuno stato finale strutturato | Canoniche: Miyamoto Musashi: master/spiritual_and_moral_guide<br>Co-azioni: Miyamoto Musashi, Karasumaru Mitsuhiro, Hon’ami Kōetsu, Haiya Shōyū, Yoshino Tayū |
| Karasumaru Mitsuhiro (`karasumaru_mitsuhiro`) | scena: `yoshino_cottage` | Nessuno stato finale strutturato | Co-azioni: Miyamoto Musashi, Takuan Sōhō, Hon’ami Kōetsu, Haiya Shōyū, Yoshino Tayū |
| Hon’ami Kōetsu (`koetsu`) | scena: `yoshino_cottage` | Nessuno stato finale strutturato | Canoniche: Miyamoto Musashi: acquaintance/tea_encounter_and_artistic_influence<br>Co-azioni: Miyamoto Musashi, Takuan Sōhō, Karasumaru Mitsuhiro, Haiya Shōyū, Yoshino Tayū |
| Haiya Shōyū (`haiya_shoyu`) | scena: `yoshino_cottage` | Nessuno stato finale strutturato | Co-azioni: Miyamoto Musashi, Takuan Sōhō, Karasumaru Mitsuhiro, Hon’ami Kōetsu, Yoshino Tayū |
| Yoshino Tayū (`yoshino_tayu`) | scena: `yoshino_cottage`; scena: `ogiya_yanagimachi` | `yoshino_cottage`; present; Remains with Musashi after the others retire. (explicit; data/source/book4/chapter9-the-broken-lute.txt) | Canoniche: Miyamoto Musashi: acquaintance/meeting_and_care_at_ogiya<br>Co-azioni: Miyamoto Musashi, Takuan Sōhō, Karasumaru Mitsuhiro, Hon’ami Kōetsu, Haiya Shōyū |

Azioni ed evidenza:

- `b4c9-e01` — **artistic_gathering** @ `yoshino_cottage`: The hearth party composes verse and Yoshino plays the biwa. — fisici: Shinmen Takezō, Yoshino Tayū, Hon’ami Kōetsu, Takuan Sōhō, Haiya Shōyū, Karasumaru Mitsuhiro. Evidenza: explicit; data/source/book4/chapter9-the-broken-lute.txt.
- `b4c9-e02` — **blockade_report** @ `ogiya_yanagimachi`: Word arrives that Yoshioka men have surrounded the quarter, preventing Musashi's safe departure. — fisici: Shinmen Takezō, Yoshino Tayū. Evidenza: explicit; data/source/book4/chapter9-the-broken-lute.txt.
- `b4c9-e03` — **artistic_instruction** @ `yoshino_cottage`: Alone with Musashi, Yoshino diagnoses his spiritual rigidity and breaks open the biwa to reveal its varied inner structure. — fisici: Shinmen Takezō, Yoshino Tayū. Evidenza: explicit; data/source/book4/chapter9-the-broken-lute.txt.
- `b4c9-e04` — **emotional_intimacy** @ `yoshino_cottage`: Musashi and Yoshino acknowledge mutual attraction, but the text does not establish a sexual union. — fisici: Shinmen Takezō, Yoshino Tayū. Evidenza: strong_inference; data/source/book4/chapter9-the-broken-lute.txt.
- `b4c9-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Yoshioka Denshichirō, Yoshioka Seijūrō. Evidenza: explicit; data/source/book4/chapter9-the-broken-lute.txt.

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Yoshioka Denshichirō (`yoshioka_denshichiro`), Yoshioka Seijūrō (`yoshioka_seijuro`).

### 42. A Sickness of the Heart (b4c10)

Fonte: `data/source/book4/chapter10-a-sickness-of-the-heart.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Otsu (`otsu`) | scena: `karasumaru_house` | `karasumaru_house`; present; Ill and sheltered by Karasumaru. (explicit; data/source/book4/chapter10-a-sickness-of-the-heart.txt) | Canoniche: Takuan Sōhō: acquaintance/trusted_guide; Jōtarō: friend_ally/travel_companions_and_message_bearers<br>Co-azioni: Takuan Sōhō, Jōtarō, Karasumaru Mitsuhiro |
| Takuan Sōhō (`takuan`) | scena: `karasumaru_house`; percorso (intended_destination): `tajima` | luogo non risolto; travelling; Traveling to his ailing mother in Tajima. (explicit; data/source/book4/chapter10-a-sickness-of-the-heart.txt) | Canoniche: Otsu: acquaintance/trusted_guide<br>Co-azioni: Otsu, Jōtarō, Karasumaru Mitsuhiro |
| Jōtarō (`jotaro`) | scena: `karasumaru_house`; percorso (intended_destination): `ogiya_yanagimachi` | luogo non risolto; travelling; Searching for Musashi in Yanagimachi. (explicit; data/source/book4/chapter10-a-sickness-of-the-heart.txt) | Canoniche: Otsu: friend_ally/travel_companions_and_message_bearers<br>Co-azioni: Otsu, Takuan Sōhō, Karasumaru Mitsuhiro |
| Karasumaru Mitsuhiro (`karasumaru_mitsuhiro`) | scena: `karasumaru_house` | Nessuno stato finale strutturato | Co-azioni: Otsu, Takuan Sōhō, Jōtarō |

Azioni ed evidenza:

- `b4c10-e01` — **illness** @ `karasumaru_house`: Otsū lies feverish and unable to eat at Karasumaru's residence while Jōtarō cares for her. — fisici: Otsu, Jōtarō, Karasumaru Mitsuhiro. Evidenza: explicit; data/source/book4/chapter10-a-sickness-of-the-heart.txt.
- `b4c10-e02` — **return** @ `karasumaru_house`: Takuan returns from Daitokuji after receiving news that his mother is seriously ill. — fisici: Takuan Sōhō, Otsu, Jōtarō, Karasumaru Mitsuhiro. Evidenza: explicit; data/source/book4/chapter10-a-sickness-of-the-heart.txt.
- `b4c10-e03` — **departure** @ `karasumaru_house`: Takuan entrusts Otsū and Jōtarō to Karasumaru, then departs intending to reach his seriously ill mother in Tajima. — fisici: Takuan Sōhō; menzionati: Karasumaru Mitsuhiro, Otsu, Jōtarō. Evidenza: explicit; data/source/book4/chapter10-a-sickness-of-the-heart.txt.
- `b4c10-e04` — **information_transfer** @ `karasumaru_house`: Takuan tells Jōtarō that Musashi is at the Ōgiya with Yoshino. — fisici: Takuan Sōhō, Jōtarō; menzionati: Shinmen Takezō, Yoshino Tayū. Evidenza: explicit; data/source/book4/chapter10-a-sickness-of-the-heart.txt.
- `b4c10-e05` — **departure** @ `karasumaru_house`: Jōtarō angrily sets out intending to find Yanagimachi and the Ōgiya; Otsū remains ill at Karasumaru's residence. — fisici: Jōtarō; menzionati: Otsu, Shinmen Takezo. Evidenza: explicit; data/source/book4/chapter10-a-sickness-of-the-heart.txt.
- `b4c10-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Hon’ami Kōetsu, Myōshū. Evidenza: explicit; data/source/book4/chapter10-a-sickness-of-the-heart.txt.

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Miyamoto Musashi (`musashi`), Yoshino Tayū (`yoshino_tayu`), Hon’ami Kōetsu (`koetsu`), Myōshū (`myoshu`).

### 43. The Scent of Aloeswood (b4c11)

Fonte: `data/source/book4/chapter11-the-scent-of-aloeswood.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Miyamoto Musashi (`musashi`) | scena: `yoshino_cottage`; scena: `ogiya_yanagimachi` | `ogiya_yanagimachi`; present; At the Ōgiya gate with Jōtarō, attempting to leave. (explicit; data/source/book4/chapter11-the-scent-of-aloeswood.txt) | Canoniche: Jōtarō: master/traveling_mentor_and_young_follower<br>Co-azioni: Jōtarō, Rin’ya |
| Jōtarō (`jotaro`) | scena: `ogiya_yanagimachi`; scena: `yoshino_cottage` | `ogiya_yanagimachi`; present; Reunited with Musashi and joining the exit attempt. (explicit; data/source/book4/chapter11-the-scent-of-aloeswood.txt) | Canoniche: Miyamoto Musashi: master/traveling_mentor_and_young_follower<br>Co-azioni: Miyamoto Musashi |
| Rin’ya (`rinya`) | scena: `ogiya_yanagimachi` | Nessuno stato finale strutturato | Co-azioni: Miyamoto Musashi |

Azioni ed evidenza:

- `b4c11-e01` — **fight** @ `ogiya_yanagimachi`: Jōtarō enters the Ōgiya and injures a servant with his wooden sword; the servant later survives. — fisici: Jōtarō. Evidenza: explicit; data/source/book4/chapter11-the-scent-of-aloeswood.txt.
- `b4c11-e02` — **reunion** @ `yoshino_cottage`: An attendant leads Jōtarō to Musashi in Yoshino's cottage. — fisici: Jōtarō, Shinmen Takezo. Evidenza: explicit; data/source/book4/chapter11-the-scent-of-aloeswood.txt.
- `b4c11-e03` — **escape_preparation** @ `yoshino_cottage`: Musashi learns the Yoshioka blockade; Kōetsu sends old clothes and a note for disguise. — fisici: Shinmen Takezō, Jōtarō; menzionati: Hon’ami Kōetsu. Evidenza: explicit; data/source/book4/chapter11-the-scent-of-aloeswood.txt.
- `b4c11-e04` — **farewell_message** @ `ogiya_yanagimachi`: Unable to reach busy Yoshino directly, Musashi receives her scented aloeswood note from Rin’ya. — fisici: Shinmen Takezō, Rin’ya; menzionati: Yoshino Tayū. Evidenza: explicit; data/source/book4/chapter11-the-scent-of-aloeswood.txt.
- `b4c11-e05` — **departure** @ `ogiya_yanagimachi`: Musashi and Jōtarō approach the main gate in disguise. — fisici: Shinmen Takezō, Jōtarō. Evidenza: explicit; data/source/book4/chapter11-the-scent-of-aloeswood.txt.
- `b4c11-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Myōshū, Takezō's sister, Otsu, Takuan Sōhō. Evidenza: explicit; data/source/book4/chapter11-the-scent-of-aloeswood.txt.

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Hon’ami Kōetsu (`koetsu`), Yoshino Tayū (`yoshino_tayu`), Myōshū (`myoshu`), Ogin (`ogin`), Otsu (`otsu`), Takuan Sōhō (`takuan`).

### 44. The Gate (b4c12)

Fonte: `data/source/book4/chapter12-the-gate.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Miyamoto Musashi (`musashi`) | scena: `ogiya_yanagimachi`; percorso (intended_destination): `ichijoji_sagarimatsu`; scena: `yanagi_riding_ground`; scena: `karasumaru_house` | luogo non risolto; away; Alone and preparing for the Ichijōji duel. (explicit; data/source/book4/chapter12-the-gate.txt) | Canoniche: Otsu: friend_ally/deep_personal_bond; Jōtarō: master/traveling_mentor_and_young_follower; Sasaki Kojirō: rival/first_encounter_and_mutual_martial_interest<br>Co-azioni: Sasaki Kojirō, Jōtarō, Miike Jūrōzaemon |
| Otsu (`otsu`) | scena: `karasumaru_house` | `karasumaru_house`; present; Outside Karasumaru's rear gate with Jōtarō. (explicit; data/source/book4/chapter12-the-gate.txt) | Canoniche: Miyamoto Musashi: friend_ally/deep_personal_bond; Jōtarō: friend_ally/travel_companions_and_message_bearers<br>Co-azioni: Jōtarō |
| Sasaki Kojirō (`kojiro`) | scena: `ogiya_yanagimachi`; percorso (intended_destination): `ichijoji_sagarimatsu` | Nessuno stato finale strutturato | Canoniche: Miyamoto Musashi: rival/first_encounter_and_mutual_martial_interest<br>Co-azioni: Miyamoto Musashi, Miike Jūrōzaemon |
| Jōtarō (`jotaro`) | scena: `yanagi_riding_ground`; scena: `karasumaru_house` | `karasumaru_house`; present; With Otsū, carrying Musashi's farewell message. (explicit; data/source/book4/chapter12-the-gate.txt) | Canoniche: Miyamoto Musashi: master/traveling_mentor_and_young_follower; Otsu: friend_ally/travel_companions_and_message_bearers<br>Co-azioni: Miyamoto Musashi, Otsu |
| Miike Jūrōzaemon (`miike_jurozaemon`) | scena: `ogiya_yanagimachi`; percorso (intended_destination): `ichijoji_sagarimatsu` | Nessuno stato finale strutturato | Co-azioni: Miyamoto Musashi, Sasaki Kojirō |

Azioni ed evidenza:

- `b4c12-e01` — **confrontation** @ `ogiya_yanagimachi`: Musashi sends Jōtarō over the wall before the Yoshioka confrontation at the Yanagimachi gate. — fisici: Shinmen Takezō, Miike Jūrōzaemon; menzionati: Jōtarō. Evidenza: explicit; data/source/book4/chapter12-the-gate.txt:L291-L328.
- `b4c12-e02` — **intervention** @ `ogiya_yanagimachi`: Kojirō prevents an illegal street melee and invokes magistrate Itakura's authority. — fisici: Sasaki Kojiro, Shinmen Takezo, Miike Jūrōzaemon; menzionati: Itakura Katsushige. Evidenza: explicit; data/source/book4/chapter12-the-gate.txt.
- `b4c12-e03` — **duel_agreement** @ `ogiya_yanagimachi`: A public duel is set for five the morning after next at the spreading pine; child Genjirō is named Yoshioka representative with disciples as seconds. — fisici: Shinmen Takezō, Sasaki Kojiro, Miike Jūrōzaemon; menzionati: Yoshioka Genjirō, Yoshioka Genzaemon. Evidenza: explicit; data/source/book4/chapter12-the-gate.txt.
- `b4c12-e04` — **reunion** @ `yanagi_riding_ground`: Musashi and Jōtarō reunite at the Yanagi Riding Grounds after escaping the crowd. — fisici: Shinmen Takezō, Jōtarō. Evidenza: explicit; data/source/book4/chapter12-the-gate.txt:L291-L328.
- `b4c12-e05` — **refusal** @ `karasumaru_house`: At Karasumaru's rear gate Musashi refuses to visit sick Otsū before the likely fatal duel and leaves Jōtarō a message. — fisici: Shinmen Takezō; menzionati: Jōtarō, Otsu. Evidenza: explicit; data/source/book4/chapter12-the-gate.txt.
- `b4c12-e06` — **encounter** @ `karasumaru_house`: Otsū comes outside and finds Jōtarō crying after Musashi's departure. — fisici: Otsu, Jōtarō; menzionati: Shinmen Takezō. Evidenza: explicit; data/source/book4/chapter12-the-gate.txt.
- `b4c12-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Karasumaru Mitsuhiro, Takuan Sōhō, Yoshioka Denshichirō, Yoshioka Kempō, Yoshioka Seijūrō. Evidenza: explicit; data/source/book4/chapter12-the-gate.txt.

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Itakura Katsushige (`itakura_katsushige`), Yoshioka Genjirō (`yoshioka_genjiro`), Yoshioka Genzaemon (`yoshioka_genzaemon`), Karasumaru Mitsuhiro (`karasumaru_mitsuhiro`), Takuan Sōhō (`takuan`), Yoshioka Denshichirō (`yoshioka_denshichiro`), Yoshioka Kempō (`yoshioka_kempo`), Yoshioka Seijūrō (`yoshioka_seijuro`).

### 45. A Toast to the Morrow (b4c13)

Fonte: `data/source/book4/chapter13-a-toast-to-the-morrow.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Hon'den Matahachi (`matahachi`) | scena: `sannen_hill_inn`; percorso (intended_destination): `ichijoji_sagarimatsu` | luogo non risolto; travelling; En route toward Ichijōji with Osugi. (explicit; data/source/book4/chapter13-a-toast-to-the-morrow.txt) | Canoniche: Obaba Osugi: family/son_mother<br>Co-azioni: Obaba Osugi, Akemi |
| Obaba Osugi (`osugi`) | scena: `sannen_hill_inn`; percorso (uncertain_route): `sannen_hill_inn` → `unknown`; percorso (intended_destination): `ichijoji_sagarimatsu` | luogo non risolto; travelling; En route toward Ichijōji with Matahachi. (explicit; data/source/book4/chapter13-a-toast-to-the-morrow.txt) | Canoniche: Hon'den Matahachi: family/son_mother<br>Co-azioni: Hon'den Matahachi, Akemi |
| Akemi (`akemi`) | scena: `sannen_hill_inn`; percorso (uncertain_route): `sannen_hill_inn` → `unknown` | luogo non risolto; fled; Fled alone with Osugi's money; destination unknown. (explicit; data/source/book4/chapter13-a-toast-to-the-morrow.txt) | Co-azioni: Hon'den Matahachi, Obaba Osugi |

Azioni ed evidenza:

- `b4c13-e01` — **information_transfer** @ `sannen_hill_inn`: Matahachi tells Osugi that Musashi's Ichijōji duel is the next morning. — fisici: Hon'den Matahachi, Matahachi's mother; menzionati: Shinmen Takezō. Evidenza: explicit; data/source/book4/chapter13-a-toast-to-the-morrow.txt.
- `b4c13-e02` — **conversation** @ `sannen_hill_inn`: Akemi tells Matahachi that Okō ran away with Gion Tōji. — fisici: Akemi, Hon'den Matahachi; menzionati: Oko, Gion Tōji. Evidenza: explicit; data/source/book4/chapter13-a-toast-to-the-morrow.txt.
- `b4c13-e03` — **theft_and_flight** @ `sannen_hill_inn`: Akemi takes Osugi's travel money, leaves a note and flees the inn. — fisici: Akemi, Matahachi's mother. Evidenza: explicit; data/source/book4/chapter13-a-toast-to-the-morrow.txt.
- `b4c13-e04` — **departure** @ `sannen_hill_inn`: Around two in the morning Osugi and Matahachi leave with a drawn map, intending to reach Ichijōji. — fisici: Obaba Osugi, Hon'den Matahachi; menzionati: Shinmen Takezō. Evidenza: explicit; data/source/book4/chapter13-a-toast-to-the-morrow.txt.
- `b4c13-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Otsu. Evidenza: explicit; data/source/book4/chapter13-a-toast-to-the-morrow.txt.

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Miyamoto Musashi (`musashi`), Oko (`oko`), Gion Tōji (`gion_toji`), Otsu (`otsu`).

### 46. The Death Trap (b4c14)

Fonte: `data/source/book4/chapter14-the-death-trap.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Sasaki Kojirō (`kojiro`) | scena: `ichijoji_sagarimatsu` | `ichijoji_sagarimatsu`; present; Present as observer and tactical adviser, not a declared combatant. (explicit; data/source/book4/chapter14-the-death-trap.txt) | Co-azioni: Miike Jūrōzaemon, Yoshioka Genzaemon |
| Miike Jūrōzaemon (`miike_jurozaemon`) | scena: `ichijoji_sagarimatsu` | Nessuno stato finale strutturato | Co-azioni: Sasaki Kojirō, Yoshioka Genzaemon, Yoshioka Genjirō |
| Yoshioka Genzaemon (`yoshioka_genzaemon`) | scena: `ichijoji_sagarimatsu` | Nessuno stato finale strutturato | Co-azioni: Sasaki Kojirō, Miike Jūrōzaemon, Yoshioka Genjirō |
| Yoshioka Genjirō (`yoshioka_genjiro`) | scena: `ichijoji_sagarimatsu` | `ichijoji_sagarimatsu`; present; Child figurehead positioned at the ambush site. (explicit; data/source/book4/chapter14-the-death-trap.txt) | Co-azioni: Miike Jūrōzaemon, Yoshioka Genzaemon |

Azioni ed evidenza:

- `b4c14-e01` — **ambush_deployment** @ `ichijoji_sagarimatsu`: Before dawn roughly seventy Yoshioka men deploy on three roads with bows and a musket around the spreading pine. — fisici: Yoshioka Genzaemon, Yoshioka Genjirō, Miike Jūrōzaemon; menzionati: Shinmen Takezō. Evidenza: explicit; data/source/book4/chapter14-the-death-trap.txt.
- `b4c14-e02` — **arrival** @ `ichijoji_sagarimatsu`: Kojirō arrives as an observer and clashes verbally with the Yoshioka group. — fisici: Sasaki Kojiro, Yoshioka Genzaemon, Miike Jūrōzaemon. Evidenza: explicit; data/source/book4/chapter14-the-death-trap.txt.
- `b4c14-e03` — **intelligence** @ `ichijoji_sagarimatsu`: Kojirō supplies a hostile account of Musashi's past and tactical habits. — fisici: Sasaki Kojiro, Yoshioka Genzaemon, Miike Jūrōzaemon; menzionati: Shinmen Takezō. Evidenza: explicit; data/source/book4/chapter14-the-death-trap.txt.
- `b4c14-e04` — **unresolved_plan** @ `ichijoji_sagarimatsu`: Kojirō whispers an additional trick intended to ensure Musashi arrives; the text withholds its content. — fisici: Sasaki Kojiro, Yoshioka Genzaemon; menzionati: Shinmen Takezō. Evidenza: explicit; data/source/book4/chapter14-the-death-trap.txt.
- `b4c14-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Akemi, Yoshioka Denshichirō, Yoshioka Seijūrō. Evidenza: explicit; data/source/book4/chapter14-the-death-trap.txt.

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Miyamoto Musashi (`musashi`), Akemi (`akemi`), Yoshioka Denshichirō (`yoshioka_denshichiro`), Yoshioka Seijūrō (`yoshioka_seijuro`).

### 47. A Meeting in the Moonlight (b4c15)

Fonte: `data/source/book4/chapter15-a-meeting-in-the-moonlight.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Miyamoto Musashi (`musashi`) | scena: `kitano_inn`; scena: `upper_kamo_bridge`; percorso (confirmed_route): `ichijoji_sagarimatsu`; scena: `ichijoji_mountain_approach`; percorso (intended_destination): `ichijoji_sagarimatsu` | luogo non risolto; travelling; Continuing alone toward the spreading pine. (explicit; data/source/book4/chapter15-a-meeting-in-the-moonlight.txt:L545-L565) | Canoniche: Otsu: friend_ally/deep_personal_bond; Jōtarō: master/traveling_mentor_and_young_follower; Sasaki Kojirō: rival/first_encounter_and_mutual_martial_interest<br>Co-azioni: Otsu, Sasaki Kojirō, Jōtarō |
| Otsu (`otsu`) | scena: `ichijoji_mountain_approach` | `ichijoji_mountain_approach`; present; Ill but conscious, together with Jōtarō on the mountain route. (explicit; data/source/book4/chapter15-a-meeting-in-the-moonlight.txt) | Canoniche: Miyamoto Musashi: friend_ally/deep_personal_bond; Jōtarō: friend_ally/travel_companions_and_message_bearers<br>Co-azioni: Miyamoto Musashi, Jōtarō |
| Sasaki Kojirō (`kojiro`) | scena: `upper_kamo_bridge`; percorso (confirmed_route): `ichijoji_sagarimatsu` | luogo non risolto; travelling; Ahead toward the duel site. (explicit; data/source/book4/chapter15-a-meeting-in-the-moonlight.txt:L180-L213) | Canoniche: Miyamoto Musashi: rival/first_encounter_and_mutual_martial_interest<br>Co-azioni: Miyamoto Musashi |
| Jōtarō (`jotaro`) | scena: `ichijoji_mountain_approach` | `ichijoji_mountain_approach`; present; With Otsū; his Nara mask triggers the scream explained next chapter. (explicit; data/source/book4/chapter15-a-meeting-in-the-moonlight.txt) | Canoniche: Miyamoto Musashi: master/traveling_mentor_and_young_follower; Otsu: friend_ally/travel_companions_and_message_bearers<br>Co-azioni: Miyamoto Musashi, Otsu |

Azioni ed evidenza:

- `b4c15-e01` — **preparation** @ `kitano_inn`: After meditating at Kurama, Musashi returns to a small inn north of Kitano, buys food and new underclothes, and prepares. — fisici: Shinmen Takezō. Evidenza: explicit; data/source/book4/chapter15-a-meeting-in-the-moonlight.txt.
- `b4c15-e02` — **death_notice** @ `kitano_inn`: Musashi learns from a coffin-maker that his uncle Matsuo Kaname has died. — fisici: Shinmen Takezō; menzionati: Matsuo Kaname. Evidenza: explicit; data/source/book4/chapter15-a-meeting-in-the-moonlight.txt.
- `b4c15-e03` — **warning** @ `upper_kamo_bridge`: At the Upper Kamo crossing Kojirō warns Musashi about the Yoshioka numbers; Musashi insists on going alone. — fisici: Shinmen Takezō, Sasaki Kojiro. Evidenza: explicit; data/source/book4/chapter15-a-meeting-in-the-moonlight.txt:L180-L213.
- `b4c15-e04` — **reunion** @ `ichijoji_mountain_approach`: Otsū and Jōtarō encounter Musashi on the mountain route; the ill Otsū coughs blood and receives water and support. — fisici: Shinmen Takezō, Otsu, Jōtarō. Evidenza: explicit; data/source/book4/chapter15-a-meeting-in-the-moonlight.txt.
- `b4c15-e05` — **mutual_confession** @ `ichijoji_mountain_approach`: Musashi and Otsū explicitly confess their love while discussing death and discipline. — fisici: Shinmen Takezō, Otsu. Evidenza: explicit; data/source/book4/chapter15-a-meeting-in-the-moonlight.txt.
- `b4c15-e06` — **departure** @ `ichijoji_mountain_approach`: Musashi leaves Otsū and Jōtarō and continues toward Ichijōji; arrival is not shown in this chapter. — fisici: Shinmen Takezō; menzionati: Otsu, Jōtarō. Evidenza: explicit; data/source/book4/chapter15-a-meeting-in-the-moonlight.txt:L545-L565.
- `b4c15-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Karasumaru Mitsuhiro, Musashi's unnamed aunt, Ogin, Takuan Sōhō. Evidenza: explicit; data/source/book4/chapter15-a-meeting-in-the-moonlight.txt.

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Matsuo Kaname (`matsuo_kaname`), Karasumaru Mitsuhiro (`karasumaru_mitsuhiro`), Musashi's unnamed aunt (`musashi_aunt`), Ogin (`ogin`), Takuan Sōhō (`takuan`).

### 48. Stray Geese (b4c16)

Fonte: `data/source/book4/chapter16-stray-geese.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Hon'den Matahachi (`matahachi`) | scena: `mount_daimonji_ravine`; percorso (uncertain_route): `ichijoji_sagarimatsu`; percorso (intended_destination): `edo` | luogo non risolto; travelling; Traveling east with Akemi, nominally toward Edo. (explicit; data/source/book4/chapter16-stray-geese.txt) | Canoniche: Obaba Osugi: family/son_mother; Akemi: acquaintance/temporary_eastbound_travel_companions (introdotta qui)<br>Co-azioni: Obaba Osugi, Akemi |
| Obaba Osugi (`osugi`) | scena: `mount_daimonji_ravine`; percorso (uncertain_route): `ichijoji_sagarimatsu` | `mount_daimonji_ravine`; present; Abandoned alone near Mount Daimonji. (explicit; data/source/book4/chapter16-stray-geese.txt) | Canoniche: Hon'den Matahachi: family/son_mother<br>Co-azioni: Hon'den Matahachi |
| Akemi (`akemi`) | scena: `mount_daimonji_ravine`; percorso (intended_destination): `edo` | luogo non risolto; travelling; Traveling east with Matahachi. (explicit; data/source/book4/chapter16-stray-geese.txt) | Canoniche: Hon'den Matahachi: acquaintance/temporary_eastbound_travel_companions (introdotta qui)<br>Co-azioni: Hon'den Matahachi |

Azioni ed evidenza:

- `b4c16-e01` — **lost_route** @ `mount_daimonji_ravine`: Osugi and Matahachi lose their way near Mount Daimonji while trying to reach Ichijōji. — fisici: Obaba Osugi, Hon'den Matahachi; menzionati: Shinmen Takezō. Evidenza: explicit; data/source/book4/chapter16-stray-geese.txt.
- `b4c16-e02` — **continuity_resolution** @ `mount_daimonji_ravine`: Matahachi finds Akemi below the cliff; her scream was caused by Jōtarō's Nara mask. — fisici: Hon'den Matahachi, Akemi; menzionati: Jōtarō. Evidenza: explicit; data/source/book4/chapter16-stray-geese.txt.
- `b4c16-e03` — **alliance** @ `mount_daimonji_ravine`: Matahachi persuades Akemi to abandon her Musashi search and travel east with him. — fisici: Hon'den Matahachi, Akemi; menzionati: Shinmen Takezō. Evidenza: explicit; data/source/book4/chapter16-stray-geese.txt.
- `b4c16-e04` — **abandonment** @ `mount_daimonji_ravine`: Matahachi chooses Akemi and leaves Osugi alone on the mountain. — fisici: Hon'den Matahachi, Akemi; menzionati: Obaba Osugi. Evidenza: explicit; data/source/book4/chapter16-stray-geese.txt.
- `b4c16-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Otsu. Evidenza: explicit; data/source/book4/chapter16-stray-geese.txt.

Relazioni introdotte o rivelate qui:

- Hon'den Matahachi → Akemi: **acquaintance/temporary_eastbound_travel_companions** (soglia 48).

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Miyamoto Musashi (`musashi`), Jōtarō (`jotaro`), Otsu (`otsu`).

### 49. The Spreading Pine (b4c17)

Fonte: `data/source/book4/chapter17-the-spreading-pine.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Miyamoto Musashi (`musashi`) | scena: `ichijoji_sagarimatsu`; scena: `hachidai_shrine`; scena: `shugakuin_escape_route`; percorso (confirmed_route): `shugakuin_escape_route` | `shugakuin_escape_route`; present; Wounded but escaped and hidden beyond the ambush area. (explicit; data/source/book4/chapter17-the-spreading-pine.txt) | Canoniche: Sasaki Kojirō: rival/first_encounter_and_mutual_martial_interest<br>Co-azioni: Miike Jūrōzaemon, Kobashi Kurando, Yoshioka Genzaemon, Yoshioka Genjirō |
| Sasaki Kojirō (`kojiro`) | scena: `ichijoji_sagarimatsu` | `ichijoji_sagarimatsu`; present; Observer of the battle; not recorded fighting. (explicit; data/source/book4/chapter17-the-spreading-pine.txt) | Canoniche: Miyamoto Musashi: rival/first_encounter_and_mutual_martial_interest<br>Co-azioni: Yoshioka Genzaemon, Yoshioka Genjirō |
| Miike Jūrōzaemon (`miike_jurozaemon`) | scena: `ichijoji_sagarimatsu` | `ichijoji_sagarimatsu`; dead; Dead. (explicit; data/source/book4/chapter17-the-spreading-pine.txt:L265-L305) | Co-azioni: Miyamoto Musashi, Kobashi Kurando, Yoshioka Genzaemon |
| Kobashi Kurando (`kobashi_kurando`) | scena: `ichijoji_sagarimatsu` | `ichijoji_sagarimatsu`; present; Struck by Musashi; survival is unresolved. (explicit; data/source/book4/chapter17-the-spreading-pine.txt:L265-L305) | Co-azioni: Miyamoto Musashi, Miike Jūrōzaemon, Yoshioka Genzaemon |
| Yoshioka Genzaemon (`yoshioka_genzaemon`) | scena: `ichijoji_sagarimatsu` | Nessuno stato finale strutturato | Co-azioni: Miyamoto Musashi, Sasaki Kojirō, Miike Jūrōzaemon, Kobashi Kurando, Yoshioka Genjirō |
| Yoshioka Genjirō (`yoshioka_genjiro`) | scena: `ichijoji_sagarimatsu` | `ichijoji_sagarimatsu`; dead; Dead. (explicit; data/source/book4/chapter17-the-spreading-pine.txt:L205-L233) | Co-azioni: Miyamoto Musashi, Sasaki Kojirō, Yoshioka Genzaemon |

Azioni ed evidenza:

- `b4c17-e01` — **arrival** @ `ichijoji_sagarimatsu`: Kojirō reaches the spreading pine and takes an elevated observer's position. — fisici: Sasaki Kojiro, Yoshioka Genzaemon, Yoshioka Genjirō. Evidenza: explicit; data/source/book4/chapter17-the-spreading-pine.txt.
- `b4c17-e02` — **approach** @ `ichijoji_sagarimatsu`: Musashi approaches by a difficult detour and purifies himself at a shrine basin without entrusting the outcome to a deity. — fisici: Shinmen Takezō. Evidenza: explicit; data/source/book4/chapter17-the-spreading-pine.txt.
- `b4c17-audit-s03` — **spiritual_crisis** @ `hachidai_shrine`: At Hachidai Shrine Musashi nearly prays for supernatural protection, stops himself and reframes the episode as a warning against hidden attachment to life. — fisici: Shinmen Takezō. Evidenza: explicit; data/source/book4/chapter17-the-spreading-pine.txt.
- `b4c17-e03` — **counter_ambush** @ `ichijoji_sagarimatsu`: Musashi disables the musketeer's fuse with a thrown stone. — fisici: Shinmen Takezō. Evidenza: explicit; data/source/book4/chapter17-the-spreading-pine.txt.
- `b4c17-e04` — **killing** @ `ichijoji_sagarimatsu`: Musashi deliberately attacks the symbolic head and kills child Genjirō by decapitation. — fisici: Shinmen Takezō, Yoshioka Genjirō. Evidenza: explicit; data/source/book4/chapter17-the-spreading-pine.txt:L205-L233.
- `b4c17-e05` — **battle** @ `ichijoji_sagarimatsu`: Musashi kills Miike and multiple unnamed Yoshioka men; Kobashi is struck, but the chapter does not establish Kobashi's death. — fisici: Shinmen Takezō, Miike Jūrōzaemon, Kobashi Kurando, Yoshioka Genzaemon. Evidenza: explicit; data/source/book4/chapter17-the-spreading-pine.txt:L265-L305.
- `b4c17-e06` — **injury** @ `ichijoji_sagarimatsu`: Musashi sustains wounds to his knee and forearm during the mass fight. — fisici: Shinmen Takezō. Evidenza: explicit; data/source/book4/chapter17-the-spreading-pine.txt.
- `b4c17-e07` — **technique_emergence** @ `ichijoji_sagarimatsu`: Under pressure Musashi instinctively fights with two swords, later conceptualized as a method against a large force. — fisici: Shinmen Takezō. Evidenza: explicit; data/source/book4/chapter17-the-spreading-pine.txt.
- `b4c17-e08` — **escape** @ `shugakuin_escape_route`: Musashi escapes along the Shugakuin path through barley fields and woods as the pursuit disperses. — fisici: Shinmen Takezō. Evidenza: explicit; data/source/book4/chapter17-the-spreading-pine.txt.
- `b4c17-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Jōtarō, Takezō's sister, Otsu. Evidenza: explicit; data/source/book4/chapter17-the-spreading-pine.txt.

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Jōtarō (`jotaro`), Ogin (`ogin`), Otsu (`otsu`).

### 50. An Offering for the Dead (b4c18)

Fonte: `data/source/book4/chapter18-an-offering-for-the-dead.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Miyamoto Musashi (`musashi`) | scena: `mudoji_mount_hiei`; scena: `enryakuji`; percorso (intended_destination): `mount_hiei_otsu_road` | `mudoji_mount_hiei`; present; At Mudōji after accepting the cow for a planned descent toward Ōtsu. (explicit; data/source/book4/chapter18-an-offering-for-the-dead.txt:L325-L344) | Canoniche: Obaba Osugi: enemy/family_conflict_and_pursuit<br>Co-azioni: Obaba Osugi, Seinen |
| Obaba Osugi (`osugi`) | scena: `mudoji_mount_hiei` | `mudoji_mount_hiei`; present; Ill and under Musashi's care at Mudōji; the descent has not yet begun. (explicit; data/source/book4/chapter18-an-offering-for-the-dead.txt:L325-L344) | Canoniche: Miyamoto Musashi: enemy/family_conflict_and_pursuit<br>Co-azioni: Miyamoto Musashi, Seinen |
| Seinen (`seinen`) | scena: `mudoji_mount_hiei` | `mudoji_mount_hiei`; present; Remains at Mudōji; the completed Kannon stays with the temple. (explicit; data/source/book4/chapter18-an-offering-for-the-dead.txt) | Co-azioni: Miyamoto Musashi, Obaba Osugi |

Azioni ed evidenza:

- `b4c18-e01` — **recovery** @ `mudoji_mount_hiei`: Musashi recuperates for ten days at Mudōji with the acolyte Seinen. — fisici: Shinmen Takezō, Seinen. Evidenza: explicit; data/source/book4/chapter18-an-offering-for-the-dead.txt.
- `b4c18-e02` — **memorial_craft** @ `mudoji_mount_hiei`: Musashi carves a sandalwood Kannon as a penitential offering for Genjirō. — fisici: Shinmen Takezō, Seinen; menzionati: Yoshioka Genjirō. Evidenza: explicit; data/source/book4/chapter18-an-offering-for-the-dead.txt.
- `b4c18-e03` — **expulsion** @ `enryakuji`: Sannōin and Enryakuji authorities condemn the killing of a child and order Musashi off the mountain. — fisici: Shinmen Takezō; menzionati: Yoshioka Genjirō. Evidenza: explicit; data/source/book4/chapter18-an-offering-for-the-dead.txt.
- `b4c18-e04` — **attack** @ `mudoji_mount_hiei`: Osugi infiltrates Mudōji at night and attacks Musashi; he throws and disarms her. — fisici: Shinmen Takezō, Matahachi's mother. Evidenza: explicit; data/source/book4/chapter18-an-offering-for-the-dead.txt.
- `b4c18-e05` — **care** @ `mudoji_mount_hiei`: Musashi nurses the injured and feverish Osugi despite her hostility. — fisici: Shinmen Takezō, Matahachi's mother, Seinen. Evidenza: explicit; data/source/book4/chapter18-an-offering-for-the-dead.txt.
- `b4c18-e06` — **departure_preparation** @ `mudoji_mount_hiei`: The temple supplies a cow for the planned descent toward Ōtsu; Musashi and the ill Osugi remain at Mudōji at chapter end. — fisici: Shinmen Takezō, Matahachi's mother, Seinen. Evidenza: explicit; data/source/book4/chapter18-an-offering-for-the-dead.txt:L333-L344.
- `b4c18-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Otsu, Yoshioka Denshichirō, Yoshioka Seijūrō. Evidenza: explicit; data/source/book4/chapter18-an-offering-for-the-dead.txt.

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Yoshioka Genjirō (`yoshioka_genjiro`), Otsu (`otsu`), Yoshioka Denshichirō (`yoshioka_denshichiro`), Yoshioka Seijūrō (`yoshioka_seijuro`).

### 51. A Drink of Milk (b4c19)

Fonte: `data/source/book4/chapter19-a-drink-of-milk.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Miyamoto Musashi (`musashi`) | scena: `mount_hiei_otsu_road`; percorso (confirmed_route): `mount_hiei_otsu_road`; percorso (intended_destination): `seta_karahashi`; scena: `otsu_pass_inn`; percorso (intended_destination): `edo` | `otsu_pass_inn`; present; Waiting at the pass inn for Otsū's response and the Seta rendezvous. (explicit; data/source/book4/chapter19-a-drink-of-milk.txt) | Canoniche: Hon'den Matahachi: friend_ally/childhood_best_friend; Obaba Osugi: enemy/family_conflict_and_pursuit; Sasaki Kojirō: rival/first_encounter_and_mutual_martial_interest<br>Co-azioni: Hon'den Matahachi, Sasaki Kojirō, Obaba Osugi |
| Hon'den Matahachi (`matahachi`) | scena: `otsu_pass_inn`; percorso (intended_destination): `edo`; percorso (intended_destination): `seta_karahashi` | luogo non risolto; searching; Searching for Osugi with instructions to meet Musashi at Seta. (explicit; data/source/book4/chapter19-a-drink-of-milk.txt) | Canoniche: Miyamoto Musashi: friend_ally/childhood_best_friend; Obaba Osugi: family/son_mother<br>Co-azioni: Miyamoto Musashi |
| Sasaki Kojirō (`kojiro`) | scena: `otsu_pass_inn` | `otsu_pass_inn`; present; Now openly regards Musashi as a future rival. (explicit; data/source/book4/chapter19-a-drink-of-milk.txt) | Canoniche: Miyamoto Musashi: rival/first_encounter_and_mutual_martial_interest<br>Co-azioni: Miyamoto Musashi |
| Obaba Osugi (`osugi`) | scena: `mount_hiei_otsu_road`; percorso (confirmed_route): `mount_hiei_otsu_road` | luogo non risolto; fled; Escaped; exact location unresolved. (explicit; data/source/book4/chapter19-a-drink-of-milk.txt) | Canoniche: Miyamoto Musashi: enemy/family_conflict_and_pursuit; Hon'den Matahachi: family/son_mother<br>Co-azioni: Miyamoto Musashi |

Azioni ed evidenza:

- `b4c19-e01` — **route** @ `mount_hiei_otsu_road`: Musashi escorts Osugi and the cow down past Miidera toward Ōmi. — fisici: Shinmen Takezō, Matahachi's mother. Evidenza: explicit; data/source/book4/chapter19-a-drink-of-milk.txt.
- `b4c19-e02` — **escape** @ `mount_hiei_otsu_road`: After secretly drinking fresh milk, Osugi abandons Musashi and escapes toward Sakamoto or Ōtsu. — fisici: Obaba Osugi; menzionati: Shinmen Takezō. Evidenza: explicit; data/source/book4/chapter19-a-drink-of-milk.txt.
- `b4c19-e03` — **message** @ `mount_hiei_otsu_road`: Musashi gives a country woman a letter for Otsū via Karasumaru, asking Otsū to meet at Seta's Kara Bridge. — fisici: Shinmen Takezō; menzionati: Otsu, Karasumaru Mitsuhiro. Evidenza: explicit; data/source/book4/chapter19-a-drink-of-milk.txt.
- `b4c19-e04` — **reunion** @ `otsu_pass_inn`: At a pass inn Musashi and Matahachi meet for the first time since Sekigahara. — fisici: Shinmen Takezō, Hon'den Matahachi. Evidenza: explicit; data/source/book4/chapter19-a-drink-of-milk.txt.
- `b4c19-e05` — **departure_report** @ `otsu_pass_inn`: Akemi, who had traveled with Matahachi, has already left the inn with their belongings and money. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Akemi, Hon'den Matahachi. Evidenza: explicit; data/source/book4/chapter19-a-drink-of-milk.txt:L282-L310.
- `b4c19-e06` — **counsel** @ `otsu_pass_inn`: Musashi urges Matahachi to begin again, seek learning and join the journey to Edo. — fisici: Shinmen Takezō, Hon'den Matahachi. Evidenza: explicit; data/source/book4/chapter19-a-drink-of-milk.txt.
- `b4c19-e07` — **errand** @ `otsu_pass_inn`: Musashi sends Matahachi to find Osugi and meet him at Seta's Kara Bridge. — fisici: Hon'den Matahachi; menzionati: Shinmen Takezō, Matahachi's mother. Evidenza: explicit; data/source/book4/chapter19-a-drink-of-milk.txt.
- `b4c19-e08` — **rivalry** @ `otsu_pass_inn`: Kojirō arrives with three Mount Hiei priests, disparages Musashi to stonecutters, then discovers Musashi overheard him; their future rivalry is acknowledged. — fisici: Shinmen Takezō, Sasaki Kojiro. Evidenza: explicit; data/source/book4/chapter19-a-drink-of-milk.txt.
- `b4c19-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Yoshioka Denshichirō, Yoshioka Genjirō, Yoshioka Kempō, Yoshioka Seijūrō. Evidenza: explicit; data/source/book4/chapter19-a-drink-of-milk.txt.

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Otsu (`otsu`), Karasumaru Mitsuhiro (`karasumaru_mitsuhiro`), Akemi (`akemi`), Yoshioka Denshichirō (`yoshioka_denshichiro`), Yoshioka Genjirō (`yoshioka_genjiro`), Yoshioka Kempō (`yoshioka_kempo`), Yoshioka Seijūrō (`yoshioka_seijuro`).

### 52. Entwining Branches (b4c20)

Fonte: `data/source/book4/chapter20-entwining-branches.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Miyamoto Musashi (`musashi`) | scena: `uchidegahama`; percorso (confirmed_route): `seta_karahashi`; scena: `seta_karahashi`; percorso (intended_destination): `edo`; scena: `nakatsugawa` | `nakatsugawa`; travelling; Traveling east with Otsū and Jōtarō near Nakatsugawa. (explicit; data/source/book4/chapter20-entwining-branches.txt:L345-L365) | Canoniche: Hon'den Matahachi: friend_ally/childhood_best_friend; Otsu: friend_ally/deep_personal_bond; Jōtarō: master/traveling_mentor_and_young_follower; Sasaki Kojirō: rival/first_encounter_and_mutual_martial_interest<br>Co-azioni: Hon'den Matahachi, Otsu, Jōtarō |
| Hon'den Matahachi (`matahachi`) | scena: `nakasendo_omi_mino`; percorso (confirmed_route): `seta_karahashi` → `kusatsu_nakasendo` → `hikone_nakasendo` → `toriimoto` → `suribachi_pass` → `nakatsugawa`; scena: `nakatsugawa` | `nakatsugawa`; travelling; Catches sight of the group near Nakatsugawa and turns resentfully against Musashi. (explicit; data/source/book4/chapter20-entwining-branches.txt:L345-L365) | Canoniche: Miyamoto Musashi: friend_ally/childhood_best_friend; Otsu: partner_family/betrothed_at_book_start<br>Co-azioni: Miyamoto Musashi, Otsu, Sasaki Kojirō, Jōtarō |
| Otsu (`otsu`) | scena: `mountain_moon_hermitage`; scena: `shiga_pass`; percorso (confirmed_route): `seta_karahashi`; scena: `seta_karahashi`; percorso (intended_destination): `edo`; scena: `nakatsugawa` | `nakatsugawa`; travelling; Traveling east with Musashi and Jōtarō near Nakatsugawa, riding the cow when seen by Matahachi. (explicit; data/source/book4/chapter20-entwining-branches.txt:L345-L365) | Canoniche: Miyamoto Musashi: friend_ally/deep_personal_bond; Hon'den Matahachi: partner_family/betrothed_at_book_start; Jōtarō: friend_ally/travel_companions_and_message_bearers<br>Co-azioni: Miyamoto Musashi, Hon'den Matahachi, Jōtarō |
| Sasaki Kojirō (`kojiro`) | Presenza attestata dal dossier; nessuna tappa evento dedicata | luogo non risolto; away; Remains at the unidentified brothel after diverting Matahachi; his subsequent route is not established. (explicit; data/source/book4/chapter20-entwining-branches.txt:L231-L339) | Canoniche: Miyamoto Musashi: rival/first_encounter_and_mutual_martial_interest<br>Co-azioni: Hon'den Matahachi |
| Jōtarō (`jotaro`) | scena: `mountain_moon_hermitage`; scena: `shiga_pass`; percorso (confirmed_route): `seta_karahashi`; scena: `seta_karahashi`; percorso (intended_destination): `edo`; scena: `nakatsugawa` | `nakatsugawa`; travelling; Traveling east with Musashi and Otsū near Nakatsugawa. (explicit; data/source/book4/chapter20-entwining-branches.txt:L345-L365) | Canoniche: Miyamoto Musashi: master/traveling_mentor_and_young_follower; Otsu: friend_ally/travel_companions_and_message_bearers<br>Co-azioni: Miyamoto Musashi, Hon'den Matahachi, Otsu |

Azioni ed evidenza:

- `b4c20-e01` — **message_receipt** @ `mountain_moon_hermitage`: At the Hermitage of the Mountain Moon, Otsū and Jōtarō receive Musashi's letter. — fisici: Otsu, Jōtarō; menzionati: Shinmen Takezō. Evidenza: explicit; data/source/book4/chapter20-entwining-branches.txt.
- `b4c20-e02` — **route** @ `shiga_pass`: Otsū and Jōtarō leave via Shiga Pass for the Seta rendezvous. — fisici: Otsu, Jōtarō; menzionati: Shinmen Takezō. Evidenza: explicit; data/source/book4/chapter20-entwining-branches.txt.
- `b4c20-e03` — **route** @ `uchidegahama`: Musashi rents the cow onward at Uchidegahama and continues to Seta. — fisici: Shinmen Takezō. Evidenza: explicit; data/source/book4/chapter20-entwining-branches.txt.
- `b4c20-e04` — **reunion** @ `seta_karahashi`: Musashi reunites with Otsū and Jōtarō at the Kara Bridge tea shop during a storm. — fisici: Shinmen Takezō, Otsu, Jōtarō. Evidenza: explicit; data/source/book4/chapter20-entwining-branches.txt.
- `b4c20-e05` — **future_plan** @ `seta_karahashi`: Musashi plans an eastward life: Edo, education for Otsū and training for Jōtarō. — fisici: Shinmen Takezō, Otsu, Jōtarō. Evidenza: explicit; data/source/book4/chapter20-entwining-branches.txt.
- `b4c20-e06` — **delay**: Matahachi is diverted into an unidentified brothel by Kojirō, becomes drunk and misses the Seta rendezvous. — fisici: Hon'den Matahachi, Sasaki Kojiro; menzionati: Shinmen Takezō. Evidenza: explicit; data/source/book4/chapter20-entwining-branches.txt:L231-L339.
- `b4c20-e07` — **pursuit_route** @ `nakasendo_omi_mino`: The next day Matahachi follows the Nakasendō through Kusatsu, Hikone, Toriimoto and Suribachi Pass toward Nakatsugawa. — fisici: Hon'den Matahachi; menzionati: Shinmen Takezō. Evidenza: explicit; data/source/book4/chapter20-entwining-branches.txt.
- `b4c20-e08` — **jealousy_reversal** @ `nakatsugawa`: Outside Nakatsugawa Matahachi sees Otsū riding the cow with Musashi's party and turns resentfully against Musashi. — fisici: Hon'den Matahachi, Shinmen Takezo, Otsu, Jōtarō. Evidenza: explicit; data/source/book4/chapter20-entwining-branches.txt.
- `b4c20-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Akemi, Karasumaru Mitsuhiro, Matahachi's mother. Evidenza: explicit; data/source/book4/chapter20-entwining-branches.txt.

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Akemi (`akemi`), Karasumaru Mitsuhiro (`karasumaru_mitsuhiro`), Obaba Osugi (`osugi`).

### 53. The Male and Female Waterfalls (b4c21)

Fonte: `data/source/book4/chapter21-the-male-and-female-waterfalls.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Miyamoto Musashi (`musashi`) | scena: `otaki_metaki` | `otaki_metaki`; present; Performing austerity under the male waterfall; alive and still oriented toward the eastward journey. (explicit; data/source/book4/chapter21-the-male-and-female-waterfalls.txt:L114-L158) | Canoniche: Otsu: friend_ally/deep_personal_bond; Jōtarō: master/traveling_mentor_and_young_follower<br>Co-azioni: Otsu, Jōtarō |
| Otsu (`otsu`) | scena: `otaki_metaki` | `otaki_metaki`; present; Waiting in the hut with Musashi's clothing and swords. (explicit; data/source/book4/chapter21-the-male-and-female-waterfalls.txt:L159-L174) | Canoniche: Miyamoto Musashi: friend_ally/deep_personal_bond; Jōtarō: friend_ally/travel_companions_and_message_bearers<br>Co-azioni: Miyamoto Musashi, Jōtarō |
| Jōtarō (`jotaro`) | scena: `otaki_metaki` | `otaki_metaki`; present; At the waterfalls with Otsū; the planned Edo journey is paused, not completed. (explicit; data/source/book4/chapter21-the-male-and-female-waterfalls.txt:L159-L174) | Canoniche: Miyamoto Musashi: master/traveling_mentor_and_young_follower; Otsu: friend_ally/travel_companions_and_message_bearers<br>Co-azioni: Miyamoto Musashi, Otsu |

Azioni ed evidenza:

- `b4c21-e01` — **arrival** @ `otaki_metaki`: The eastbound group pauses near Magome Pass at the Male and Female Waterfalls. — fisici: Shinmen Takezō, Otsu, Jōtarō. Evidenza: explicit; data/source/book4/chapter21-the-male-and-female-waterfalls.txt.
- `b4c21-e02` — **conflict** @ `otaki_metaki`: Questioning Otsū about Matahachi, Musashi forcefully embraces and throws her down; she rejects him and flees. — fisici: Shinmen Takezō, Otsu; menzionati: Hon'den Matahachi. Evidenza: explicit; data/source/book4/chapter21-the-male-and-female-waterfalls.txt.
- `b4c21-e03` — **remorse** @ `otaki_metaki`: Otsū regrets the pain caused by her rejection and returns toward the waterfall area. — fisici: Otsu; menzionati: Shinmen Takezō. Evidenza: explicit; data/source/book4/chapter21-the-male-and-female-waterfalls.txt.
- `b4c21-e04` — **austerity** @ `otaki_metaki`: Musashi stands under the male waterfall to purge desire and renew discipline; the act is not presented as suicide. — fisici: Shinmen Takezō. Evidenza: explicit; data/source/book4/chapter21-the-male-and-female-waterfalls.txt:L114-L158.
- `b4c21-e05` — **pause** @ `otaki_metaki`: Otsū waits in the hut with Musashi's kimono and swords while Jōtarō understands that the journey has entered a serious pause. — fisici: Otsu, Jōtarō, Shinmen Takezo. Evidenza: explicit; data/source/book4/chapter21-the-male-and-female-waterfalls.txt:L159-L174.
- `b4c21-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Obaba Osugi. Evidenza: explicit; data/source/book4/chapter21-the-male-and-female-waterfalls.txt.

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Hon'den Matahachi (`matahachi`), Obaba Osugi (`osugi`).

## Libro V — Sky

### 54. The Abduction (b5c1)

Fonte: `data/source/book5/chapter1-the-abduction.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Miyamoto Musashi (`musashi`) | scena: `suhara_nezame`; percorso (confirmed_route): `fukushima_checkpoint`; scena: `kiso_highroad` | `kiso_highroad`; searching; Running back along the Kiso highroad after noticing Otsū and Jōtarō are missing. (explicit; book5/chapter1) | Canoniche: Hon'den Matahachi: friend_ally/childhood_best_friend; Otsu: friend_ally/deep_personal_bond; Jōtarō: master/traveling_mentor_and_young_follower<br>Co-azioni: Otsu, Jōtarō |
| Hon'den Matahachi (`matahachi`) | scena: `kozenji_turn`; percorso (confirmed_route): `kozenji_turn` | luogo non risolto; travelling; Abducting Otsū along an unestablished side road. (explicit; book5/chapter1) | Canoniche: Miyamoto Musashi: friend_ally/childhood_best_friend; Otsu: partner_family/betrothed_at_book_start<br>Co-azioni: Otsu, Jōtarō |
| Otsu (`otsu`) | scena: `suhara_nezame`; percorso (confirmed_route): `fukushima_checkpoint`; scena: `fukushima_checkpoint`; scena: `kozenji_turn`; percorso (confirmed_route): `kozenji_turn` | luogo non risolto; travelling; Carried away by Matahachi; her route after the Kōzenji turn is not established. (explicit; data/source/book5/chapter1-the-abduction.txt:L120-L153) | Canoniche: Miyamoto Musashi: friend_ally/deep_personal_bond; Hon'den Matahachi: partner_family/betrothed_at_book_start; Jōtarō: friend_ally/travel_companions_and_message_bearers<br>Co-azioni: Miyamoto Musashi, Hon'den Matahachi, Jōtarō |
| Jōtarō (`jotaro`) | scena: `suhara_nezame`; percorso (confirmed_route): `fukushima_checkpoint`; scena: `fukushima_checkpoint`; scena: `kozenji_turn`; percorso (confirmed_route): `kozenji_turn` | `kozenji_turn`; present; Injured beside the road after Matahachi attacks him. (explicit; data/source/book5/chapter1-the-abduction.txt:L127-L155) | Canoniche: Miyamoto Musashi: master/traveling_mentor_and_young_follower; Otsu: friend_ally/travel_companions_and_message_bearers<br>Co-azioni: Miyamoto Musashi, Hon'den Matahachi, Otsu |

Azioni ed evidenza:

- `b5c1-e01` — **travel** @ `suhara_nezame`: Musashi walks ahead while Otsū rides the cow and Jōtarō accompanies her toward Fukushima. — fisici: Shinmen Takezō, Otsu, Jōtarō. Evidenza: explicit; book5/chapter1.
- `b5c1-e02` — **checkpoint_passage** @ `fukushima_checkpoint`: Karasumaru’s letter allows Otsū and Jōtarō through the Fukushima checkpoint; Musashi has already gone ahead. — fisici: Otsu, Jōtarō; menzionati: Shinmen Takezō, Karasumaru Mitsuhiro. Evidenza: explicit; book5/chapter1.
- `b5c1-e03` — **abduction** @ `kozenji_turn`: Matahachi attacks Jōtarō, takes the cow rope and carries Otsū away against her will. — fisici: Hon'den Matahachi, Otsu, Jōtarō. Evidenza: explicit; data/source/book5/chapter1-the-abduction.txt:L120-L153.
- `b5c1-e04` — **search** @ `kiso_highroad`: Noticing the delay, Musashi runs back along the road to search. — fisici: Shinmen Takezō. Evidenza: explicit; book5/chapter1.

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Karasumaru Mitsuhiro (`karasumaru_mitsuhiro`).

### 55. The Warrior of Kiso (b5c2)

Fonte: `data/source/book5/chapter2-the-warrior-of-kiso.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Miyamoto Musashi (`musashi`) | scena: `nobu_pond`; scena: `gonnosuke_farmhouse` | `nobu_pond`; searching; Searching around Nobu Pond after finding the abandoned cow. (explicit; book5/chapter2) | Co-azioni: Musō Gonnosuke, Gonnosuke's unnamed mother |
| Musō Gonnosuke (`gonnosuke`) | scena: `gonnosuke_farmhouse`; scena: `nobu_pond` | `nobu_pond`; searching; Cooperating with Musashi in the search after their reconciliation. (explicit; book5/chapter2) | Canoniche: Gonnosuke's unnamed mother: family/son_and_mother (introdotta qui)<br>Co-azioni: Miyamoto Musashi, Gonnosuke's unnamed mother |
| Gonnosuke's unnamed mother (`gonnosuke_mother`) | scena: `gonnosuke_farmhouse` | `gonnosuke_farmhouse`; present; At the farmhouse after intervening in the first contest. (explicit; book5/chapter2) | Canoniche: Musō Gonnosuke: family/son_and_mother (introdotta qui)<br>Co-azioni: Miyamoto Musashi, Musō Gonnosuke |

Azioni ed evidenza:

- `b5c2-e01` — **search** @ `nobu_pond`: Musashi follows reports and finds the abandoned cow associated with Gonnosuke's farmhouse. — fisici: Shinmen Takezō. Evidenza: explicit; book5/chapter2.
- `b5c2-e02` — **fight** @ `gonnosuke_farmhouse`: A false accusation leads to a staff contest; Musashi pins Gonnosuke and his mother intervenes with a lance. — fisici: Shinmen Takezō, Musō Gonnosuke, Gonnosuke's unnamed mother. Evidenza: explicit; book5/chapter2.
- `b5c2-e03` — **reconciliation** @ `gonnosuke_farmhouse`: They establish that Gonnosuke found, rather than stole, the cow and reconcile. — fisici: Shinmen Takezō, Musō Gonnosuke, Gonnosuke's unnamed mother. Evidenza: explicit; book5/chapter2.
- `b5c2-e04` — **reported_lead** @ `nobu_pond`: A farmer's household reports Jōtarō ran toward Yabuhara and was directed to Daizō in Narai; Musashi and Gonnosuke cross the pond while continuing the search. — fisici: Shinmen Takezō, Musō Gonnosuke; menzionati: Jōtarō, Daizō of Narai. Evidenza: explicit; book5/chapter2.
- `b5c2-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Otsu. Evidenza: explicit; data/source/book5/chapter2-the-warrior-of-kiso.txt.

Relazioni introdotte o rivelate qui:

- Musō Gonnosuke → Gonnosuke's unnamed mother: **family/son_and_mother** (soglia 55).

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Jōtarō (`jotaro`), Daizō (`daizo`), Otsu (`otsu`).

### 56. Poisonous Fangs (b5c3)

Fonte: `data/source/book5/chapter3-poisonous-fangs.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Hon'den Matahachi (`matahachi`) | scena: `nobu_shrine`; scena: `nobu_pond`; scena: `ina_koshu_backroad` | `ina_koshu_backroad`; travelling; Forcing Otsū along the back road through Ina toward Kōshū. (explicit; book5/chapter3) | Canoniche: Otsu: partner_family/betrothed_at_book_start<br>Co-azioni: Otsu |
| Otsu (`otsu`) | scena: `nobu_shrine`; scena: `nobu_pond`; scena: `ina_koshu_backroad` | `ina_koshu_backroad`; travelling; Traveling under Matahachi's coercive control. (explicit; book5/chapter3) | Canoniche: Hon'den Matahachi: partner_family/betrothed_at_book_start<br>Co-azioni: Hon'den Matahachi |

Azioni ed evidenza:

- `b5c3-e01` — **confinement** @ `nobu_shrine`: Matahachi binds Otsū in the tiny shrine and renews his coercion, biting her arm. — fisici: Hon'den Matahachi, Otsu. Evidenza: explicit; book5/chapter3.
- `b5c3-e02` — **distant_sighting** @ `nobu_pond`: A distant torch on the pond is seen, but no contact or identification on the spot occurs. — fisici: Hon'den Matahachi, Otsu; menzionati: Shinmen Takezō, Musō Gonnosuke. Evidenza: strong_inference; book5/chapter3.
- `b5c3-e03` — **horse_seizure** @ `ina_koshu_backroad`: Matahachi seizes a farmer and horse; Otsū later secures the farmer's release. — fisici: Hon'den Matahachi, Otsu. Evidenza: explicit; book5/chapter3.
- `b5c3-e04` — **abducted_travel** @ `ina_koshu_backroad`: They continue by the back route through Ina toward Kōshū and Edo. — fisici: Hon'den Matahachi, Otsu. Evidenza: explicit; book5/chapter3.
- `b5c3-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Jōtarō, Sasaki Kojiro, Oko. Evidenza: explicit; data/source/book5/chapter3-poisonous-fangs.txt.

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Miyamoto Musashi (`musashi`), Musō Gonnosuke (`gonnosuke`), Jōtarō (`jotaro`), Sasaki Kojirō (`kojiro`), Oko (`oko`).

### 57. A Maternal Warning (b5c4)

Fonte: `data/source/book5/chapter4-a-maternal-warning.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Miyamoto Musashi (`musashi`) | scena: `gonnosuke_farmhouse`; scena: `narai`; scena: `inojigahara` | luogo non risolto; travelling; Proceeding toward Kamisuwa after the second contest. (explicit; book5/chapter4) | Co-azioni: Musō Gonnosuke, Gonnosuke's unnamed mother |
| Musō Gonnosuke (`gonnosuke`) | scena: `inojigahara` | `inojigahara`; present; Remains with his mother after recognizing Musashi's skill. (explicit; book5/chapter4) | Canoniche: Gonnosuke's unnamed mother: family/son_and_mother<br>Co-azioni: Miyamoto Musashi, Gonnosuke's unnamed mother |
| Gonnosuke's unnamed mother (`gonnosuke_mother`) | scena: `inojigahara` | `inojigahara`; present; Remains with Gonnosuke after the rematch. (explicit; book5/chapter4) | Canoniche: Musō Gonnosuke: family/son_and_mother<br>Co-azioni: Miyamoto Musashi, Musō Gonnosuke |

Azioni ed evidenza:

- `b5c4-e01` — **departure** @ `gonnosuke_farmhouse`: Musashi overhears the mother's demand for a rematch and slips away. — fisici: Shinmen Takezō. Evidenza: explicit; book5/chapter4.
- `b5c4-e02` — **investigation** @ `narai`: At Daizō's business Musashi learns that Daizō and Jōtarō have already departed, but their branch beyond Shiojiri is uncertain. — fisici: Shinmen Takezō; menzionati: Daizō of Narai, Jōtarō. Evidenza: explicit; book5/chapter4.
- `b5c4-e03` — **rematch** @ `inojigahara`: Gonnosuke catches Musashi and they conduct a formal second contest near the larches. — fisici: Shinmen Takezō, Musō Gonnosuke, Gonnosuke's unnamed mother. Evidenza: explicit; book5/chapter4.
- `b5c4-e04` — **separation** @ `inojigahara`: After mutual recognition, Musashi proceeds toward Kamisuwa while Gonnosuke and his mother separate from him. — fisici: Shinmen Takezō, Musō Gonnosuke, Gonnosuke's unnamed mother. Evidenza: explicit; book5/chapter4.
- `b5c4-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Otsu. Evidenza: explicit; data/source/book5/chapter4-a-maternal-warning.txt.

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Daizō (`daizo`), Jōtarō (`jotaro`), Otsu (`otsu`).

### 58. A One-Night Love Affair (b5c5)

Fonte: `data/source/book5/chapter5-a-one-night-love-affair.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Miyamoto Musashi (`musashi`) | scena: `shimosuwa` | `shimosuwa`; present; Staying overnight at Shimosuwa without accepting service. (explicit; book5/chapter5) | Co-azioni: Ishimoda Geki |
| Ishimoda Geki (`geki`) | scena: `shimosuwa` | `shimosuwa`; present; Hosting Musashi and proposing Date service. (explicit; book5/chapter5) | Co-azioni: Miyamoto Musashi |

Azioni ed evidenza:

- `b5c5-e01` — **arrival** @ `shimosuwa`: Musashi stops at the hot springs on Lake Suwa to bathe and tend his injury. — fisici: Shinmen Takezō. Evidenza: explicit; book5/chapter5.
- `b5c5-e02` — **meeting** @ `shimosuwa`: Ishimoda Geki identifies Musashi and hosts him overnight at the daimyō inn. — fisici: Shinmen Takezō, Ishimoda Geki. Evidenza: explicit; book5/chapter5.
- `b5c5-e03` — **recruitment** @ `shimosuwa`: Geki urges Musashi to consider service under Date Masamune and discusses governance and the warrior's role. — fisici: Shinmen Takezō, Ishimoda Geki; menzionati: Date Masamune. Evidenza: explicit; book5/chapter5.
- `b5c5-e04` — **decision_deferred** @ `shimosuwa`: Musashi does not accept the offer and continues considering his Way. — fisici: Shinmen Takezō, Ishimoda Geki. Evidenza: explicit; book5/chapter5.
- `b5c5-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Jōtarō, Karasumaru Mitsuhiro, Hon’ami Kōetsu, Otsu, Yagyū Sekishūsai, Takuan Sōhō. Evidenza: explicit; data/source/book5/chapter5-a-one-night-love-affair.txt.

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Date Masamune (`date_masamune`), Jōtarō (`jotaro`), Karasumaru Mitsuhiro (`karasumaru_mitsuhiro`), Hon’ami Kōetsu (`koetsu`), Otsu (`otsu`), Yagyū Sekishūsai (`sekishusai`), Takuan Sōhō (`takuan`).

### 59. A Gift of Money (b5c6)

Fonte: `data/source/book5/chapter6-a-gift-of-money.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Miyamoto Musashi (`musashi`) | scena: `suwa_myojin`; scena: `wada_daimon_corridor`; scena: `buna_valley` | `buna_valley`; present; Under attack in Buna Valley after continuing the search. (explicit; book5/chapter6) | Co-azioni: Gion Tōji |
| Gion Tōji (`gion_toji`) | scena: `buna_valley` | Nessuno stato finale strutturato | Co-azioni: Miyamoto Musashi |
| Ishimoda Geki (`geki`) | scena: `shimosuwa`; percorso (direction_only): `shimosuwa` | luogo non risolto; travelling; Has departed toward Wada Pass. (explicit; book5/chapter6) | Nessuna relazione/co-azione strutturata nel capitolo |

Azioni ed evidenza:

- `b5c6-e01` — **separation** @ `shimosuwa`: Geki leaves toward Wada Pass while Musashi resumes the search. — fisici: Ishimoda Geki; menzionati: Shinmen Takezō. Evidenza: explicit; book5/chapter6.
- `b5c6-e02` — **reported_lead** @ `suwa_myojin`: One hired laborer honestly reports that Daizō and Jōtarō went toward Wada. — fisici: Shinmen Takezō; menzionati: Jōtarō, Daizō of Narai. Evidenza: explicit; book5/chapter6.
- `b5c6-e03` — **gift_discovered** @ `wada_daimon_corridor`: At a roadside teahouse Musashi discovers Geki's money and letter hidden in his bag. — fisici: Shinmen Takezō; menzionati: Ishimoda Geki. Evidenza: explicit; book5/chapter6.
- `b5c6-e04` — **ambush** @ `buna_valley`: Bandits lure Musashi onto a ravine log; he kills the first attacker and comes under gunfire from the opposite bank. — fisici: Shinmen Takezō, Gion Tōji. Evidenza: explicit; book5/chapter6.
- `b5c6-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Otsu. Evidenza: explicit; data/source/book5/chapter6-a-gift-of-money.txt.

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Jōtarō (`jotaro`), Daizō (`daizo`), Otsu (`otsu`).

### 60. A Cleansing Fire (b5c7)

Fonte: `data/source/book5/chapter7-a-cleansing-fire.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Miyamoto Musashi (`musashi`) | scena: `buna_valley`; percorso (uncertain_route): `buna_valley` | luogo non risolto; fled; Escaped the burning Buna Valley cabin; immediate route unknown. (explicit; book5/chapter7) | Co-azioni: Oko, Gion Tōji |
| Oko (`oko`) | scena: `buna_valley` | `buna_valley`; present; Alive but tied to a tree near the burning cabin. (explicit; book5/chapter7) | Canoniche: Gion Tōji: partner_family/described_as_husband_and_wife (introdotta qui)<br>Co-azioni: Miyamoto Musashi, Gion Tōji |
| Gion Tōji (`gion_toji`) | scena: `buna_valley` | `buna_valley`; present; Wounded and still in the Buna Valley area with his band. (explicit; book5/chapter7) | Canoniche: Oko: partner_family/described_as_husband_and_wife (introdotta qui)<br>Co-azioni: Miyamoto Musashi, Oko |

Azioni ed evidenza:

- `b5c7-e01` — **fight** @ `buna_valley`: Musashi defeats the gunmen, wounds their leader and recognizes Gion Tōji. — fisici: Shinmen Takezō, Gion Tōji. Evidenza: explicit; book5/chapter7.
- `b5c7-e02` — **reunion** @ `buna_valley`: Musashi recognizes Okō; the three exchange information about Akemi's reported movements. — fisici: Shinmen Takezō, Oko, Gion Tōji; menzionati: Akemi. Evidenza: explicit; book5/chapter7.
- `b5c7-e03` — **trap_escape** @ `buna_valley`: Tōji and Okō trigger a collapsing guest-room trap, but Musashi escapes the fall. — fisici: Shinmen Takezō, Oko, Gion Tōji. Evidenza: explicit; book5/chapter7.
- `b5c7-e04` — **escape_and_fire** @ `buna_valley`: Musashi ties Okō to a tree, burns the cabin and disappears before the band can find him. — fisici: Shinmen Takezō; menzionati: Oko, Gion Tōji. Evidenza: explicit; book5/chapter7.
- `b5c7-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Hon'den Matahachi. Evidenza: explicit; data/source/book5/chapter7-a-cleansing-fire.txt.

Relazioni introdotte o rivelate qui:

- Gion Tōji → Oko: **partner_family/described_as_husband_and_wife** (soglia 60).

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Akemi (`akemi`), Hon'den Matahachi (`matahachi`).

### 61. Playing with Fire (b5c8)

Fonte: `data/source/book5/chapter8-playing-with-fire.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Sasaki Kojirō (`kojiro`) | scena: `kobotoke_pass`; percorso (direction_only): `edo` | luogo non risolto; travelling; Continuing from Kobotoke toward Edo. (explicit; book5/chapter8) | Canoniche: Akemi: friend_ally/rescuer_and_protected_traveler<br>Co-azioni: Akemi, Shōji Jinnai, Onao |
| Jōtarō (`jotaro`) | scena: `yakuoin_takao`; percorso (confirmed_route): `yakuoin_takao` → `hachioji`; scena: `hachioji` | `hachioji`; present; Alive after being knocked unconscious by the unidentified scarred rōnin. (explicit; book5/chapter8) | Co-azioni: Akemi, Daizō, Sukeichi, Unidentified scarred rōnin |
| Akemi (`akemi`) | scena: `kobotoke_pass`; percorso (direction_only): `edo`; scena: `hachioji` | `hachioji`; present; Alive and recovered disheveled near the Hachiōji inn after the assault. (explicit; book5/chapter8) | Canoniche: Sasaki Kojirō: friend_ally/rescuer_and_protected_traveler; Shōji Jinnai: servant_employer/troupe_leader_and_charge (introdotta qui)<br>Co-azioni: Sasaki Kojirō, Jōtarō, Shōji Jinnai, Onao, Unidentified scarred rōnin |
| Shōji Jinnai (`shoji_jinnai`) | scena: `kobotoke_pass`; percorso (direction_only): `edo` | `hachioji`; present; At Hachiōji with his troupe. (explicit; book5/chapter8) | Canoniche: Akemi: servant_employer/troupe_leader_and_charge (introdotta qui)<br>Co-azioni: Sasaki Kojirō, Akemi, Onao |
| Onao (`onao`) | scena: `kobotoke_pass`; percorso (direction_only): `edo` | `hachioji`; present; At Hachiōji with Jinnai's troupe. (explicit; book5/chapter8) | Co-azioni: Sasaki Kojirō, Akemi, Shōji Jinnai |
| Daizō (`daizo`) | scena: `yakuoin_takao`; percorso (confirmed_route): `yakuoin_takao` → `hachioji` | Nessuno stato finale strutturato | Co-azioni: Jōtarō, Sukeichi |
| Sukeichi (`sukeichi`) | scena: `yakuoin_takao`; percorso (confirmed_route): `yakuoin_takao` → `hachioji` | Nessuno stato finale strutturato | Co-azioni: Jōtarō, Daizō |
| Unidentified scarred rōnin (`scarred_ronin`) | scena: `hachioji` | Nessuno stato finale strutturato | Co-azioni: Jōtarō, Akemi |

Azioni ed evidenza:

- `b5c8-e01` — **passing_encounter** @ `kobotoke_pass`: Kojirō meets Jinnai's moving troupe at Kobotoke and continues toward Edo; Akemi hides briefly and rejoins. — fisici: Sasaki Kojiro, Shōji Jinnai, Onao, Akemi. Evidenza: explicit; book5/chapter8.
- `b5c8-e02` — **pilgrimage** @ `yakuoin_takao`: Daizō, Sukeichi and Jōtarō visit Yakuōin and then proceed to Hachiōji. — fisici: Daizō of Narai, Sukeichi, Jōtarō. Evidenza: explicit; book5/chapter8.
- `b5c8-e03` — **reunion** @ `hachioji`: Jōtarō recognizes Akemi; they exchange news and Akemi reacts with jealousy and distress. — fisici: Jōtarō, Akemi; menzionati: Shinmen Takezō, Otsu. Evidenza: explicit; book5/chapter8.
- `b5c8-e04` — **assault** @ `hachioji`: After Akemi's moat-side crisis, the scarred rōnin knocks Jōtarō unconscious and sexually assaults Akemi; the chapter presents the assault through explicit aftermath and implication. — fisici: Jōtarō, Akemi, Unidentified scarred rōnin. Evidenza: strong_inference; data/source/book5/chapter8-playing-with-fire.txt:L393-L446.
- `b5c8-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Hon'den Matahachi, Yagyū Sekishūsai. Evidenza: explicit; data/source/book5/chapter8-playing-with-fire.txt.

Relazioni introdotte o rivelate qui:

- Shōji Jinnai → Akemi: **servant_employer/troupe_leader_and_charge** (soglia 61).

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Miyamoto Musashi (`musashi`), Otsu (`otsu`), Hon'den Matahachi (`matahachi`), Yagyū Sekishūsai (`sekishusai`).

### 62. A Cricket in the Grass (b5c9)

Fonte: `data/source/book5/chapter9-a-cricket-in-the-grass.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Jōtarō (`jotaro`) | scena: `hachioji_mound`; scena: `takanawa_highroad`; percorso (direction_only): `hachioji` → `edo` | `takanawa_highroad`; travelling; Traveling toward Edo under Daizō's coercive protection. (explicit; book5/chapter9) | Canoniche: Daizō: authority/coercive_claimed_guardianship (introdotta qui)<br>Co-azioni: Daizō, Sukeichi |
| Akemi (`akemi`) | scena: `hachioji`; percorso (direction_only): `hachioji` → `edo` | luogo non risolto; travelling; Has left Hachiōji before sunrise with Jinnai's troupe. (explicit; book5/chapter9) | Canoniche: Shōji Jinnai: servant_employer/troupe_leader_and_charge<br>Co-azioni: Shōji Jinnai |
| Shōji Jinnai (`shoji_jinnai`) | scena: `hachioji`; percorso (direction_only): `hachioji` → `edo` | Nessuno stato finale strutturato | Canoniche: Akemi: servant_employer/troupe_leader_and_charge<br>Co-azioni: Akemi |
| Daizō (`daizo`) | scena: `hachioji_mound`; scena: `takanawa_highroad`; percorso (direction_only): `hachioji` → `edo` | `takanawa_highroad`; travelling; Traveling toward Edo with Jōtarō and Sukeichi. (explicit; book5/chapter9) | Canoniche: Jōtarō: authority/coercive_claimed_guardianship (introdotta qui)<br>Co-azioni: Jōtarō, Sukeichi |
| Sukeichi (`sukeichi`) | scena: `takanawa_highroad`; percorso (direction_only): `hachioji` → `edo` | `takanawa_highroad`; travelling; Accompanying Daizō and Jōtarō toward Edo. (explicit; book5/chapter9) | Co-azioni: Jōtarō, Daizō |

Azioni ed evidenza:

- `b5c9-e01` — **departure** @ `hachioji`: Jinnai's troupe, with Akemi restored to it, leaves Hachiōji before sunrise. — fisici: Shōji Jinnai, Akemi. Evidenza: explicit; book5/chapter9.
- `b5c9-e02` — **secret_observation** @ `hachioji_mound`: Jōtarō follows Daizō and witnesses him bury a large quantity of gold beneath a pine by the mound. — fisici: Jōtarō, Daizō of Narai. Evidenza: explicit; book5/chapter9.
- `b5c9-e03` — **coercive_guardianship** @ `hachioji_mound`: Daizō discovers the spying, binds Jōtarō to secrecy and declares that he is taking the boy under his protection. — fisici: Jōtarō, Daizō of Narai. Evidenza: explicit; book5/chapter9.
- `b5c9-e04` — **travel** @ `takanawa_highroad`: Daizō, Sukeichi and Jōtarō continue toward Edo. — fisici: Jōtarō, Daizō of Narai, Sukeichi. Evidenza: explicit; book5/chapter9.

Relazioni introdotte o rivelate qui:

- Daizō → Jōtarō: **authority/coercive_claimed_guardianship** (soglia 62).

### 63. The Pioneers (b5c10)

Fonte: `data/source/book5/chapter10-the-pioneers.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Obaba Osugi (`osugi`) | scena: `takanawa_highroad`; scena: `nihombashi`; percorso (confirmed_route): `takanawa_highroad` → `nihombashi`; scena: `bakurocho_yajibei` | `bakurocho_yajibei`; present; Sheltered at Yajibei's Bakurōchō house after entering Edo. (explicit; book5/chapter10) | Canoniche: Hangawara Yajibei: friend_ally/host_and_protector (introdotta qui)<br>Co-azioni: Hangawara Yajibei, Ushi |
| Hangawara Yajibei (`yajibei`) | scena: `nihombashi`; scena: `bakurocho_yajibei` | `bakurocho_yajibei`; present; Protecting the injured Osugi in his household. (explicit; book5/chapter10) | Canoniche: Obaba Osugi: friend_ally/host_and_protector (introdotta qui)<br>Co-azioni: Obaba Osugi, Ushi |
| Ushi (`ushi`) | scena: `nihombashi`; scena: `bakurocho_yajibei` | `bakurocho_yajibei`; present; Helping Osugi on Yajibei's orders. (explicit; book5/chapter10) | Co-azioni: Obaba Osugi, Hangawara Yajibei |

Azioni ed evidenza:

- `b5c10-e01` — **arrival** @ `takanawa_highroad`: After two months of travel Osugi enters rapidly expanding Edo by the Takanawa route. — fisici: Obaba Osugi. Evidenza: explicit; book5/chapter10.
- `b5c10-e02` — **urban_travel** @ `nihombashi`: Osugi walks through the construction zones and reaches Nihombashi. — fisici: Obaba Osugi. Evidenza: explicit; book5/chapter10.
- `b5c10-e03` — **intervention** @ `nihombashi`: Yajibei catches a thief who attacked Osugi, recovers her property and orders Ushi to help her. — fisici: Obaba Osugi, Hangawara Yajibei, Ushi. Evidenza: explicit; book5/chapter10.
- `b5c10-e04` — **shelter** @ `bakurocho_yajibei`: The injured Osugi is carried to Yajibei's Bakurōchō house. — fisici: Obaba Osugi, Hangawara Yajibei, Ushi. Evidenza: explicit; book5/chapter10.

Relazioni introdotte o rivelate qui:

- Hangawara Yajibei → Obaba Osugi: **friend_ally/host_and_protector** (soglia 63).

### 64. Slaughter by the Riverside (b5c11)

Fonte: `data/source/book5/chapter11-slaughter-by-the-riverside.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Sasaki Kojirō (`kojiro`) | scena: `sensoji_riverside`; scena: `sumida_river`; percorso (confirmed_route): `sensoji_riverside` → `bakurocho_yajibei` | `sumida_river`; travelling; Returning downstream by boat with Yajibei's party. (explicit; book5/chapter11) | Co-azioni: Obaba Osugi, Hangawara Yajibei, Jūrō, Koroku |
| Obaba Osugi (`osugi`) | scena: `bakurocho_yajibei`; scena: `sensoji`; scena: `sumida_river`; percorso (confirmed_route): `sensoji_riverside` → `bakurocho_yajibei` | `sumida_river`; travelling; Returning from Sensōji by boat with Yajibei's party. (explicit; book5/chapter11) | Canoniche: Hangawara Yajibei: friend_ally/host_and_protector<br>Co-azioni: Sasaki Kojirō, Hangawara Yajibei, Jūrō, Koroku |
| Hangawara Yajibei (`yajibei`) | scena: `bakurocho_yajibei`; scena: `sensoji`; scena: `sumida_river`; percorso (confirmed_route): `sensoji_riverside` → `bakurocho_yajibei` | `sumida_river`; travelling; Returning by boat after the Sensōji pilgrimage. (explicit; book5/chapter11) | Canoniche: Obaba Osugi: friend_ally/host_and_protector<br>Co-azioni: Sasaki Kojirō, Obaba Osugi, Jūrō, Koroku |
| Jūrō (`juro`) | scena: `sensoji`; scena: `sumida_river`; percorso (confirmed_route): `sensoji_riverside` → `bakurocho_yajibei` | `sumida_river`; travelling; On Yajibei's return boat. (explicit; book5/chapter11) | Co-azioni: Sasaki Kojirō, Obaba Osugi, Hangawara Yajibei, Koroku |
| Koroku (`koroku`) | scena: `sensoji`; scena: `sumida_river`; percorso (confirmed_route): `sensoji_riverside` → `bakurocho_yajibei` | `sumida_river`; travelling; On Yajibei's return boat. (explicit; book5/chapter11) | Co-azioni: Sasaki Kojirō, Obaba Osugi, Hangawara Yajibei, Jūrō |

Azioni ed evidenza:

- `b5c11-e01` — **time_jump** @ `bakurocho_yajibei`: The narrative establishes that Osugi has remained with Yajibei for roughly a year and a half. — fisici: Obaba Osugi, Hangawara Yajibei. Evidenza: explicit; data/source/book5/chapter11-slaughter-by-the-riverside.txt:L4-L14.
- `b5c11-e02` — **pilgrimage** @ `sensoji`: Yajibei's party travels by boat to Sensōji; a donation plaque mentions Daizō but does not place him there. — fisici: Obaba Osugi, Hangawara Yajibei, Jūrō, Koroku. Evidenza: explicit; book5/chapter11.
- `b5c11-e03` — **fight** @ `sensoji_riverside`: Kojirō kills or disables the Obata swordsmen who confront him beside the river. — fisici: Sasaki Kojiro. Evidenza: explicit; book5/chapter11.
- `b5c11-e04` — **meeting_and_return** @ `sumida_river`: Kojirō meets Osugi and Yajibei and accepts an invitation onto their return boat. — fisici: Sasaki Kojiro, Matahachi's mother, Hangawara Yajibei, Jūrō, Koroku. Evidenza: explicit; book5/chapter11.
- `b5c11-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Daizō of Narai, Hon'den Matahachi, Shinmen Takezo. Evidenza: explicit; data/source/book5/chapter11-slaughter-by-the-riverside.txt.

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Daizō (`daizo`), Hon'den Matahachi (`matahachi`), Miyamoto Musashi (`musashi`).

### 65. Shavings (b5c12)

Fonte: `data/source/book5/chapter12-shavings.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Sasaki Kojirō (`kojiro`) | scena: `bakurocho_yajibei`; scena: `sumiya_yoshiwara` | Nessuno stato finale strutturato | Canoniche: Hanagiri: friend_ally/rescuer_and_protected_traveler<br>Co-azioni: Shōji Jinnai, Onao, Hangawara Yajibei, Jūrō, Koroku |
| Obaba Osugi (`osugi`) | Presenza attestata dal dossier; nessuna tappa evento dedicata | Nessuno stato finale strutturato | Canoniche: Hangawara Yajibei: friend_ally/host_and_protector |
| Hanagiri (`akemi`) | scena: `sumiya_yoshiwara`; percorso (uncertain_route): `sumiya_yoshiwara` | luogo non risolto; fled; Fled Sumiya into the darkness along the moat; subsequent position unknown. (explicit; book5/chapter12) | Canoniche: Sasaki Kojirō: friend_ally/rescuer_and_protected_traveler; Shōji Jinnai: servant_employer/troupe_leader_and_charge |
| Shōji Jinnai (`shoji_jinnai`) | scena: `sumiya_yoshiwara` | Nessuno stato finale strutturato | Canoniche: Hanagiri: servant_employer/troupe_leader_and_charge<br>Co-azioni: Sasaki Kojirō, Onao, Jūrō, Koroku |
| Onao (`onao`) | scena: `sumiya_yoshiwara` | Nessuno stato finale strutturato | Co-azioni: Sasaki Kojirō, Shōji Jinnai, Jūrō, Koroku |
| Hangawara Yajibei (`yajibei`) | scena: `bakurocho_yajibei` | Nessuno stato finale strutturato | Canoniche: Obaba Osugi: friend_ally/host_and_protector<br>Co-azioni: Sasaki Kojirō |
| Jūrō (`juro`) | scena: `sumiya_yoshiwara` | Nessuno stato finale strutturato | Co-azioni: Sasaki Kojirō, Shōji Jinnai, Onao, Koroku |
| Koroku (`koroku`) | scena: `sumiya_yoshiwara` | Nessuno stato finale strutturato | Co-azioni: Sasaki Kojirō, Shōji Jinnai, Onao, Jūrō |

Azioni ed evidenza:

- `b5c12-e01` — **employment** @ `bakurocho_yajibei`: Yajibei hires Kojirō to train his men three times a month. — fisici: Sasaki Kojiro, Hangawara Yajibei. Evidenza: explicit; book5/chapter12.
- `b5c12-e02` — **fatal_training** @ `bakurocho_yajibei`: Kojirō's first training session maims men and kills one trainee. — fisici: Sasaki Kojiro. Evidenza: explicit; book5/chapter12.
- `b5c12-e03` — **visit** @ `sumiya_yoshiwara`: Kojirō, Jūrō and Koroku visit Sumiya and ask for Hanagiri. — fisici: Sasaki Kojiro, Jūrō, Koroku, Onao, Shōji Jinnai. Evidenza: explicit; book5/chapter12.
- `b5c12-e04` — **avoidance_escape** @ `sumiya_yoshiwara`: Akemi, now called Hanagiri, avoids Kojirō and escapes into the darkness along the moat. — fisici: Akemi; menzionati: Sasaki Kojiro. Evidenza: explicit; data/source/book5/chapter12-shavings.txt:L250-L283.
- `b5c12-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Shinmen Takezō, Obata Kagenori. Evidenza: explicit; data/source/book5/chapter12-shavings.txt.

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Miyamoto Musashi (`musashi`), Obata Kagenori (`obata_kagenori`).

### 66. The Owl (b5c13)

Fonte: `data/source/book5/chapter13-the-owl.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Sasaki Kojirō (`kojiro`) | scena: `edo_new_moat_road`; scena: `obata_school` | `obata_school`; present; At the school grove after humiliating the surviving students. (explicit; book5/chapter13) | Canoniche: Obata Kagenori: enemy/escalating_school_feud (introdotta qui)<br>Co-azioni: Jūrō, Koroku |
| Jūrō (`juro`) | scena: `obata_school` | Nessuno stato finale strutturato | Co-azioni: Sasaki Kojirō, Koroku |
| Koroku (`koroku`) | scena: `obata_school` | Nessuno stato finale strutturato | Co-azioni: Sasaki Kojirō, Jūrō |
| Obata Kagenori (`obata_kagenori`) | scena: `obata_school` | `obata_school`; present; Gravely ill at the depleted Obata School. (explicit; book5/chapter13) | Canoniche: Sasaki Kojirō: enemy/escalating_school_feud (introdotta qui); Hōjō Shinzō: master/teacher_and_senior_pupil (introdotta qui)<br>Co-azioni: Hōjō Shinzō |
| Hōjō Shinzō (`hojo_shinzo`) | scena: `obata_school`; percorso (intended_destination): `obata_school` | luogo non risolto; travelling; Has left the school intending to find and kill Kojirō. (explicit; book5/chapter13) | Canoniche: Obata Kagenori: master/teacher_and_senior_pupil (introdotta qui)<br>Co-azioni: Obata Kagenori |

Azioni ed evidenza:

- `b5c13-e01` — **ambush** @ `edo_new_moat_road`: Ten Obata students ambush Kojirō on the road beside the new Edo moat; five are killed before the later school confrontation. — fisici: Sasaki Kojiro. Evidenza: explicit; book5/chapter13.
- `b5c13-e02` — **rebuke** @ `obata_school`: Shinzō tends Kagenori and condemns the students' unauthorized revenge. — fisici: Hōjō Shinzō, Obata Kagenori. Evidenza: explicit; book5/chapter13.
- `b5c13-e03` — **humiliation** @ `obata_school`: Kojirō follows survivors home and openly humiliates the Obata group in the shrine grove. — fisici: Sasaki Kojiro, Jūrō, Koroku. Evidenza: explicit; book5/chapter13.
- `b5c13-e04` — **revenge_departure** @ `obata_school`: Before Yogorō's expected return, Shinzō leaves a farewell letter and departs to kill Kojirō. — fisici: Hōjō Shinzō; menzionati: Sasaki Kojiro, Obata Kagenori, Obata Yogorō. Evidenza: explicit; book5/chapter13.

Relazioni introdotte o rivelate qui:

- Sasaki Kojirō → Obata Kagenori: **enemy/escalating_school_feud** (soglia 66).
- Obata Kagenori → Hōjō Shinzō: **master/teacher_and_senior_pupil** (soglia 66).

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Obata Yogorō (`obata_yogoro`).

### 67. A Plate of Loaches (b5c14)

Fonte: `data/source/book5/chapter14-a-plate-of-loaches.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Miyamoto Musashi (`musashi`) | scena: `hotengahara`; scena: `hotengahara_burial`; scena: `hotengahara_shack` | `hotengahara_shack`; present; At Hōtengahara with the newly accepted pupil Sannosuke. (explicit; book5/chapter14) | Canoniche: Sannosuke: master/teacher_and_practical_guardian (introdotta qui)<br>Co-azioni: San'emon, Sannosuke |
| San'emon (`sanemon`) | scena: `hotengahara_burial` | `hotengahara_burial`; dead; Dead before Musashi meets the boy and buried at the family grave. (explicit; book5/chapter14) | Co-azioni: Miyamoto Musashi, Sannosuke |
| Sannosuke (`iori`) | scena: `hotengahara`; scena: `hotengahara_burial`; scena: `hotengahara_shack` | `hotengahara_shack`; present; Still known as Sannosuke; accepted as Musashi's pupil after his father's burial. (explicit; data/source/book5/chapter14-a-plate-of-loaches.txt:L201-L289) | Canoniche: Miyamoto Musashi: master/teacher_and_practical_guardian (introdotta qui)<br>Co-azioni: Miyamoto Musashi, San'emon |

Azioni ed evidenza:

- `b5c14-e01` — **reported_journey** @ `hotengahara`: The chapter reports that Musashi briefly passed through Edo, traveled to Sendai to return Geki's money, then came back south to Shimōsa. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Shinmen Takezō, Ishimoda Geki. Evidenza: explicit; book5/chapter14.
- `b5c14-e02` — **meeting** @ `hotengahara`: Musashi meets twelve-year-old Sannosuke catching loaches and follows him to the isolated shack. — fisici: Shinmen Takezō, Misawa Iori. Evidenza: explicit; data/source/book5/chapter14-a-plate-of-loaches.txt:L201-L213.
- `b5c14-e03` — **burial** @ `hotengahara_burial`: Musashi helps the boy carry and bury his father San'emon, who died that morning. — fisici: Shinmen Takezō, Misawa Iori, San'emon. Evidenza: explicit; data/source/book5/chapter14-a-plate-of-loaches.txt:L180-L204.
- `b5c14-e04` — **discipleship** @ `hotengahara_shack`: After testing the orphan's resolve, Musashi accepts Sannosuke as his pupil. — fisici: Shinmen Takezō, Misawa Iori. Evidenza: explicit; data/source/book5/chapter14-a-plate-of-loaches.txt:L225-L289.
- `b5c14-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Jōtarō, Otsu. Evidenza: explicit; data/source/book5/chapter14-a-plate-of-loaches.txt.

Relazioni introdotte o rivelate qui:

- Miyamoto Musashi → Sannosuke: **master/teacher_and_practical_guardian** (soglia 67).

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Ishimoda Geki (`geki`), Jōtarō (`jotaro`), Otsu (`otsu`).

### 68. Like Teacher, Like Pupil (b5c15)

Fonte: `data/source/book5/chapter15-like-teacher-like-pupil.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Miyamoto Musashi (`musashi`) | scena: `hotengahara_shack`; scena: `tone_floodplain` | `hotengahara_shack`; present; Living and cultivating the Hōtengahara land with Iori. (explicit; book5/chapter15) | Canoniche: Misawa Iori: master/teacher_and_practical_guardian<br>Co-azioni: Misawa Iori |
| Misawa Iori (`iori`) | scena: `hotengahara_shack`; scena: `tone_floodplain`; scena: `tokuganji`; percorso (confirmed_route): `hotengahara_shack` → `tokuganji` | `hotengahara_shack`; present; Renamed Misawa Iori and sharing Musashi's agricultural settlement. (explicit; data/source/book5/chapter15-like-teacher-like-pupil.txt:L4-L22) | Canoniche: Miyamoto Musashi: master/teacher_and_practical_guardian<br>Co-azioni: Miyamoto Musashi |

Azioni ed evidenza:

- `b5c15-e01` — **renaming_and_settlement** @ `hotengahara_shack`: Musashi renames Sannosuke Iori, burns the old shack and builds a new cabin on a knoll. — fisici: Shinmen Takezō, Misawa Iori. Evidenza: explicit; data/source/book5/chapter15-like-teacher-like-pupil.txt:L4-L22.
- `b5c15-e02` — **cultivation** @ `tone_floodplain`: They clear land and repeatedly attempt to create fields in the flood-prone plain. — fisici: Shinmen Takezō, Misawa Iori. Evidenza: explicit; book5/chapter15.
- `b5c15-e03` — **supply_run** @ `tokuganji`: During a storm Iori reaches Tokuganji and returns with supplies; the trip is explicitly narrated through his return account. — fisici: Misawa Iori. Evidenza: explicit; book5/chapter15.
- `b5c15-e04` — **adaptation** @ `tone_floodplain`: Musashi changes the water-and-field strategy; after winter and thaw the cultivation becomes stable enough to continue. — fisici: Shinmen Takezō, Misawa Iori. Evidenza: explicit; book5/chapter15.
- `b5c15-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Takuan Sōhō. Evidenza: explicit; data/source/book5/chapter15-like-teacher-like-pupil.txt.

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Takuan Sōhō (`takuan`).

### 69. Mountain Devils (b5c16)

Fonte: `data/source/book5/chapter16-mountain-devils.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Miyamoto Musashi (`musashi`) | scena: `raid_village` | `raid_village`; present; Leading the villagers' collective defense after freeing the captives. (explicit; book5/chapter16) | Canoniche: Misawa Iori: master/teacher_and_practical_guardian; Nagaoka Sado: acquaintance/unfulfilled_recruitment_interest_without_meeting (introdotta qui) |
| Misawa Iori (`iori`) | scena: `tokuganji`; scena: `raid_village`; percorso (confirmed_route): `raid_village` → `hotengahara_shack` | `raid_village`; present; With Musashi after escaping the brigands and reporting the raid. (explicit; book5/chapter16) | Canoniche: Miyamoto Musashi: master/teacher_and_practical_guardian<br>Co-azioni: Nagaoka Sado |
| Nagaoka Sado (`nagaoka_sado`) | scena: `tokuganji`; scena: `raid_village` | luogo non risolto; travelling; Leaves after investigating the defended village without meeting Musashi. (explicit; book5/chapter16) | Canoniche: Miyamoto Musashi: acquaintance/unfulfilled_recruitment_interest_without_meeting (introdotta qui)<br>Co-azioni: Misawa Iori |

Azioni ed evidenza:

- `b5c16-e01` — **visit** @ `tokuganji`: Sado stays at Tokuganji for his father's memorial anniversary and briefly meets Iori, who is collecting millet. — fisici: Nagaoka Sado, Misawa Iori. Evidenza: explicit; book5/chapter16.
- `b5c16-e02` — **raid_and_escape** @ `raid_village`: Iori witnesses the brigand raid, is tied to a bridge post, escapes and runs back to Musashi. — fisici: Misawa Iori. Evidenza: explicit; book5/chapter16.
- `b5c16-e03` — **collective_defense** @ `raid_village`: Musashi frees captives, organizes villagers into ambush groups and leads them against the raiders. — fisici: Shinmen Takezō. Evidenza: explicit; book5/chapter16.
- `b5c16-e04` — **investigation** @ `raid_village`: Sado investigates the next day, learns Musashi's name and sees his written injunction, but leaves without meeting him. — fisici: Nagaoka Sado; menzionati: Shinmen Takezō, Misawa Iori. Evidenza: explicit; book5/chapter16.

Relazioni introdotte o rivelate qui:

- Nagaoka Sado → Miyamoto Musashi: **acquaintance/unfulfilled_recruitment_interest_without_meeting** (soglia 69).

### 70. First Planting (b5c17)

Fonte: `data/source/book5/chapter17-first-planting.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Nagaoka Sado (`nagaoka_sado`) | scena: `hosokawa_edo`; scena: `hotengahara` | `hosokawa_edo`; present; Back at the Hosokawa residence after failing to find Musashi. (explicit; book5/chapter17) | Co-azioni: Hosokawa Tadatoshi, Iwama Kakubei, Satō Genzō |
| Hosokawa Tadatoshi (`hosokawa_tadatoshi`) | scena: `hosokawa_edo` | Nessuno stato finale strutturato | Co-azioni: Nagaoka Sado |
| Iwama Kakubei (`iwama_kakubei`) | scena: `hosokawa_edo` | Nessuno stato finale strutturato | Co-azioni: Nagaoka Sado |
| Satō Genzō (`sato_genzo`) | scena: `hotengahara` | Nessuno stato finale strutturato | Co-azioni: Nagaoka Sado |

Azioni ed evidenza:

- `b5c17-e01` — **time_jump** @ `hosokawa_edo`: The narrative marks roughly a year and a half since Sado's Tokuganji visit. — fisici: Nagaoka Sado. Evidenza: explicit; data/source/book5/chapter17-first-planting.txt:L44-L49.
- `b5c17-e02` — **recommendation** @ `hosokawa_edo`: Kakubei recommends his household guest Kojirō for Hosokawa service. — fisici: Iwama Kakubei, Nagaoka Sado; menzionati: Sasaki Kojiro. Evidenza: explicit; book5/chapter17.
- `b5c17-e03` — **commission** @ `hosokawa_edo`: Tadatoshi agrees to inspect Kojirō and instructs Sado to locate the Musashi he previously praised. — fisici: Hosokawa Tadatoshi, Nagaoka Sado; menzionati: Sasaki Kojiro, Shinmen Takezo. Evidenza: explicit; book5/chapter17.
- `b5c17-e04` — **failed_search** @ `hotengahara`: At Hōtengahara Sado learns that Musashi and Iori vanished the morning after the first-planting celebration a month earlier. — fisici: Nagaoka Sado, Satō Genzō; menzionati: Shinmen Takezō, Misawa Iori. Evidenza: explicit; book5/chapter17.

Relazioni introdotte o rivelate qui:

- Iwama Kakubei → Sasaki Kojirō: **servant_employer/recruitment_sponsor** (soglia 70).

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Sasaki Kojirō (`kojiro`), Miyamoto Musashi (`musashi`), Misawa Iori (`iori`).

### 71. The Flies (b5c18)

Fonte: `data/source/book5/chapter18-the-flies.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Miyamoto Musashi (`musashi`) | scena: `edo_east_barrier`; scena: `sumida_river`; scena: `bakurocho_horse_market`; scena: `bakurocho_inn` | `bakurocho_inn`; present; Staying at the Bakurōchō horse-traders' inn after entering Edo. (explicit; book5/chapter18) | Canoniche: Misawa Iori: master/teacher_and_practical_guardian<br>Co-azioni: Kimura Sukekurō, Jūrō, Misawa Iori, Kumagorō of Chichibu |
| Kimura Sukekurō (`kimura_sukekuro`) | scena: `bakurocho_horse_market` | `bakurocho_inn`; present; Reunited with Musashi at the horse market inn. (explicit; book5/chapter18) | Co-azioni: Miyamoto Musashi |
| Jūrō (`juro`) | scena: `sumida_river` | Nessuno stato finale strutturato | Co-azioni: Miyamoto Musashi, Misawa Iori |
| Misawa Iori (`iori`) | scena: `edo_east_barrier`; scena: `sumida_river`; scena: `bakurocho_inn`; percorso (intended_destination): `bakurocho_inn` → `higakubo_yagyu` | luogo non risolto; travelling; Carrying Musashi's reply toward the Yagyū residence. (explicit; book5/chapter18) | Canoniche: Miyamoto Musashi: master/teacher_and_practical_guardian<br>Co-azioni: Miyamoto Musashi, Jūrō |
| Kumagorō of Chichibu (`kumagoro`) | scena: `bakurocho_inn` | Nessuno stato finale strutturato | Co-azioni: Miyamoto Musashi |

Azioni ed evidenza:

- `b5c18-e01` — **entry** @ `edo_east_barrier`: Musashi and Iori pass the eastern barrier after Musashi names Yagyū Munenori as his Edo connection. — fisici: Shinmen Takezō, Misawa Iori; menzionati: Yagyū Munenori. Evidenza: explicit; book5/chapter18.
- `b5c18-e02` — **ferry_encounter** @ `sumida_river`: After the ferry crossing, Iori's pouch dispute reveals Jūrō as a Hangawara man; Jūrō recognizes Musashi's name. — fisici: Shinmen Takezō, Misawa Iori, Jūrō. Evidenza: explicit; book5/chapter18.
- `b5c18-audit-s04` — **manners_instruction**: Musashi uses the incident to teach Iori that etiquette restrains people's bad side and is essential in crowded civic life. — fisici: Shinmen Takezō, Misawa Iori. Evidenza: explicit; data/source/book5/chapter18-the-flies.txt.
- `b5c18-e03` — **reunion** @ `bakurocho_horse_market`: At the horse market Sukekurō recognizes Musashi and invites him to the Yagyū household, alluding to an unidentified 'beautiful treasure.' — fisici: Shinmen Takezō, Kimura Sukekurō. Evidenza: explicit; book5/chapter18.
- `b5c18-audit-s07` — **intimidation_without_strike** @ `bakurocho_inn`: When horse trader Kumagorō threatens him over noise complaints, Musashi silently plucks live flies from his soba with chopsticks, causing the traders to retreat. — fisici: Shinmen Takezō, Kumagorō of Chichibu. Evidenza: explicit; data/source/book5/chapter18-the-flies.txt.
- `b5c18-e04` — **message_departure** @ `bakurocho_inn`: Musashi replies that he will visit only for a bout and sends Iori with the letter toward the Yagyū residence. — fisici: Misawa Iori; menzionati: Shinmen Takezō, Kimura Sukekurō, Yagyū Munenori. Evidenza: explicit; book5/chapter18.
- `b5c18-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Yagyū Sekishūsai, Takuan Sōhō. Evidenza: explicit; data/source/book5/chapter18-the-flies.txt.

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Yagyū Munenori (`munenori`), Yagyū Sekishūsai (`sekishusai`), Takuan Sōhō (`takuan`).

### 72. The Soul Polisher (b5c19)

Fonte: `data/source/book5/chapter19-the-soul-polisher.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Miyamoto Musashi (`musashi`) | scena: `kosuke_shop` | `bakurocho_inn`; present; Waiting uneasily for Iori after arranging to move into Kōsuke's house. (explicit; book5/chapter19) | Canoniche: Zushino Kōsuke: acquaintance/artisan_client_host_and_ethical_interlocutor (introdotta qui)<br>Co-azioni: Zushino Kōsuke, Kōsuke's unnamed wife |
| Zushino Kōsuke (`zushino_kosuke`) | scena: `kosuke_shop` | `kosuke_shop`; present; At his shop after agreeing to polish Musashi's sword and host him. (explicit; book5/chapter19) | Canoniche: Miyamoto Musashi: acquaintance/artisan_client_host_and_ethical_interlocutor (introdotta qui)<br>Co-azioni: Miyamoto Musashi, Kōsuke's unnamed wife |
| Kōsuke's unnamed wife (`kosuke_wife`) | scena: `kosuke_shop` | `kosuke_shop`; present; At Kōsuke's shop and household. (explicit; book5/chapter19) | Co-azioni: Miyamoto Musashi, Zushino Kōsuke |

Azioni ed evidenza:

- `b5c19-e01` — **artisan_refusal** @ `kosuke_shop`: Kōsuke initially refuses to polish Musashi's sword because he believes the owner seeks only a better killing edge. — fisici: Shinmen Takezō, Zushino Kōsuke. Evidenza: explicit; book5/chapter19.
- `b5c19-audit-s02` — **ethical_instruction** @ `kosuke_shop`: Kōsuke explains Kōetsu's teaching that the craftsman's real work is polishing the samurai's soul and that a sword exists to preserve integrity and order, not delight in killing. — fisici: Zushino Kōsuke, Shinmen Takezo; menzionati: Hon’ami Kōetsu. Evidenza: explicit; data/source/book5/chapter19-the-soul-polisher.txt.
- `b5c19-audit-s03` — **self_reassessment** @ `kosuke_shop`: Musashi accepts the criticism and recognizes that he has not adequately considered the moral spirit of the sword he carries. — fisici: Shinmen Takezō. Evidenza: explicit; data/source/book5/chapter19-the-soul-polisher.txt.
- `b5c19-e02` — **recognition_and_agreement** @ `kosuke_shop`: Their shared connection to Hon'ami Kōetsu changes the exchange; Kōsuke agrees to polish the blade. — fisici: Shinmen Takezō, Zushino Kōsuke; menzionati: Hon’ami Kōetsu. Evidenza: explicit; book5/chapter19.
- `b5c19-e03` — **exchange_and_lodging** @ `kosuke_shop`: Kōsuke offers an ancient sword in exchange for a Kannon carving and invites Musashi to lodge in his house. — fisici: Shinmen Takezō, Zushino Kōsuke, Kōsuke's unnamed wife. Evidenza: explicit; book5/chapter19.
- `b5c19-e04` — **object_identification** @ `kosuke_shop`: Musashi recognizes Kojirō's Drying Pole among Kōsuke's commissions; the owner is not physically present. — fisici: Shinmen Takezō, Zushino Kōsuke; menzionati: Sasaki Kojiro, Iwama Kakubei. Evidenza: explicit; book5/chapter19.
- `b5c19-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Misawa Iori, Myōshū. Evidenza: explicit; data/source/book5/chapter19-the-soul-polisher.txt.

Relazioni introdotte o rivelate qui:

- Zushino Kōsuke → Miyamoto Musashi: **acquaintance/artisan_client_host_and_ethical_interlocutor** (soglia 72).

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Hon’ami Kōetsu (`koetsu`), Sasaki Kojirō (`kojiro`), Iwama Kakubei (`iwama_kakubei`), Misawa Iori (`iori`), Myōshū (`myoshu`).

### 73. The Fox (b5c20)

Fonte: `data/source/book5/chapter20-the-fox.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Otsu (`otsu`) | scena: `azabu_hill` | `azabu_hill`; present; Near the Yagyū residence with Hyōgo; Iori does not recognize her. (explicit; book5/chapter20) | Canoniche: Yagyū Hyōgo: friend_ally/protective_friendship_unreciprocated_affection_not_inferred (introdotta qui)<br>Co-azioni: Misawa Iori, Yagyū Hyōgo |
| Misawa Iori (`iori`) | scena: `kobikicho`; scena: `edo_castle_hibiya`; percorso (confirmed_route): `kobikicho` → `edo_castle_hibiya` → `azabu_hill`; scena: `azabu_hill` | `azabu_hill`; hiding; Disoriented near Azabu after mistaking Otsū and Hyōgo for fox transformations. (explicit; book5/chapter20) | Co-azioni: Otsu, Yagyū Hyōgo |
| Yagyū Hyōgo (`yagyu_hyogo`) | scena: `azabu_hill` | `azabu_hill`; present; Near the Yagyū residence with Otsū. (explicit; book5/chapter20) | Canoniche: Otsu: friend_ally/protective_friendship_unreciprocated_affection_not_inferred (introdotta qui)<br>Co-azioni: Otsu, Misawa Iori |

Azioni ed evidenza:

- `b5c20-e01` — **misdirected_delivery** @ `kobikicho`: Iori reaches the Yagyū storehouses, sleeps there and receives a rough map to the residence at Higakubo. — fisici: Misawa Iori. Evidenza: explicit; book5/chapter20.
- `b5c20-e02` — **urban_route** @ `edo_castle_hibiya`: Iori loses time watching the castle and Hibiya construction before climbing toward Azabu. — fisici: Misawa Iori. Evidenza: explicit; book5/chapter20.
- `b5c20-e03` — **mistaken_identity** @ `azabu_hill`: After wounding a fox, Iori sees Otsū and Hyōgo but mistakes both for fox transformations and hides. — fisici: Misawa Iori, Otsu, Yagyū Hyōgo. Evidenza: explicit; book5/chapter20.
- `b5c20-e04` — **reported_rescue** @ `higakubo_yagyu`: The narrative reports that Sukekurō rescued Otsū from Matahachi the previous year and brought her into Yagyū protection. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Otsu, Hon'den Matahachi, Kimura Sukekurō. Evidenza: explicit; data/source/book5/chapter20-the-fox.txt:L297-L327.
- `b5c20-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Yagyū Munenori, Shinmen Takezo, Yagyū Sekishūsai. Evidenza: explicit; data/source/book5/chapter20-the-fox.txt.

Relazioni introdotte o rivelate qui:

- Kimura Sukekurō → Otsu: **friend_ally/rescuer_and_protector_reported_retrospectively** (soglia 73).
- Yagyū Hyōgo → Otsu: **friend_ally/protective_friendship_unreciprocated_affection_not_inferred** (soglia 73).

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Hon'den Matahachi (`matahachi`), Kimura Sukekurō (`kimura_sukekuro`), Yagyū Munenori (`munenori`), Miyamoto Musashi (`musashi`), Yagyū Sekishūsai (`sekishusai`).

### 74. An Urgent Letter (b5c21)

Fonte: `data/source/book5/chapter21-an-urgent-letter.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Otsu (`otsu`) | scena: `higakubo_yagyu`; percorso (direction_only): `higakubo_yagyu` → `koyagyu_castle`; scena: `dogen_slope`; scena: `sangenya_route`; percorso (confirmed_route): `dogen_slope` | `sangenya_route`; travelling; Traveling rapidly with Hyōgo toward Koyagyū. (explicit; book5/chapter21) | Canoniche: Kimura Sukekurō: friend_ally/rescuer_and_protector_reported_retrospectively; Yagyū Hyōgo: friend_ally/protective_friendship_unreciprocated_affection_not_inferred<br>Co-azioni: Misawa Iori, Yagyū Hyōgo |
| Yagyū Munenori (`munenori`) | scena: `higakubo_yagyu` | `higakubo_yagyu`; present; Unable to leave official duties after sending Hyōgo in his stead. (explicit; book5/chapter21) | Canoniche: Yagyū Hyōgo: family/uncle_and_nephew (introdotta qui)<br>Co-azioni: Kimura Sukekurō, Yagyū Hyōgo |
| Kimura Sukekurō (`kimura_sukekuro`) | scena: `higakubo_yagyu` | Nessuno stato finale strutturato | Canoniche: Otsu: friend_ally/rescuer_and_protector_reported_retrospectively<br>Co-azioni: Yagyū Munenori, Yagyū Hyōgo |
| Misawa Iori (`iori`) | scena: `dogen_slope` | luogo non risolto; travelling; Directed toward the nearby Yagyū residence while Otsū and Hyōgo continue away. (explicit; book5/chapter21) | Co-azioni: Otsu, Yagyū Hyōgo |
| Yagyū Hyōgo (`yagyu_hyogo`) | scena: `higakubo_yagyu`; percorso (direction_only): `higakubo_yagyu` → `koyagyu_castle`; scena: `dogen_slope`; scena: `sangenya_route`; percorso (confirmed_route): `dogen_slope` | `sangenya_route`; travelling; Accompanying Otsū toward Koyagyū as Munenori's representative. (explicit; book5/chapter21) | Canoniche: Yagyū Munenori: family/uncle_and_nephew (introdotta qui); Otsu: friend_ally/protective_friendship_unreciprocated_affection_not_inferred<br>Co-azioni: Otsu, Yagyū Munenori, Kimura Sukekurō, Misawa Iori |

Azioni ed evidenza:

- `b5c21-e01` — **urgent_letter** @ `higakubo_yagyu`: A fast courier's letter from Shōda reports Sekishūsai's critical illness. — fisici: Yagyū Munenori, Yagyū Hyōgo, Kimura Sukekurō; menzionati: Yagyū Sekishūsai, Shōda Kizaemon. Evidenza: explicit; data/source/book5/chapter21-an-urgent-letter.txt:L85-L109.
- `b5c21-e02` — **departure** @ `higakubo_yagyu`: Munenori sends Hyōgo in his stead; Otsū obtains permission to accompany him and they depart that night. — fisici: Yagyū Hyōgo, Otsu; menzionati: Yagyū Munenori, Yagyū Sekishūsai. Evidenza: explicit; data/source/book5/chapter21-an-urgent-letter.txt:L101-L141.
- `b5c21-e03` — **road_encounter** @ `dogen_slope`: Hyōgo and Otsū find the exhausted Iori, calm his fox panic and learn of his letter. — fisici: Yagyū Hyōgo, Otsu, Misawa Iori. Evidenza: explicit; data/source/book5/chapter21-an-urgent-letter.txt:L159-L222.
- `b5c21-e04` — **separation** @ `sangenya_route`: They direct Iori to the nearby Yagyū house, then resume their fast journey toward Sangen'ya and the Tōkaidō route. — fisici: Yagyū Hyōgo, Otsu; menzionati: Misawa Iori. Evidenza: explicit; data/source/book5/chapter21-an-urgent-letter.txt:L223-L246.
- `b5c21-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Shinmen Takezō. Evidenza: explicit; data/source/book5/chapter21-an-urgent-letter.txt.

Relazioni introdotte o rivelate qui:

- Yagyū Munenori → Yagyū Hyōgo: **family/uncle_and_nephew** (soglia 74).

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Yagyū Sekishūsai (`sekishusai`), Shōda Kizaemon (`shoda_kizaemon`), Miyamoto Musashi (`musashi`).

### 75. Filial Piety (b5c22)

Fonte: `data/source/book5/chapter22-filial-piety.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Sasaki Kojirō (`kojiro`) | scena: `bakurocho_yajibei` | `bakurocho_yajibei`; present; At Yajibei's house after joining the discussion of Osugi's revenge. (explicit; book5/chapter22) | Co-azioni: Jūrō |
| Obaba Osugi (`osugi`) | scena: `bakurocho_yajibei`; scena: `isarago_hill`; percorso (direction_only): `bakurocho_yajibei` → `isarago_hill` | luogo non risolto; travelling; Has set out alone toward Kakubei's house on Isarago Hill. (explicit; book5/chapter22) | Co-azioni: Jūrō |
| Jūrō (`juro`) | scena: `bakurocho_yajibei` | Nessuno stato finale strutturato | Co-azioni: Sasaki Kojirō, Obaba Osugi |
| Koroku (`koroku`) | scena: `bakurocho_yajibei`; percorso (direction_only): `bakurocho_yajibei` → `isarago_hill` | luogo non risolto; travelling; Sent after Osugi toward Isarago Hill. (explicit; book5/chapter22) | Nessuna relazione/co-azione strutturata nel capitolo |

Azioni ed evidenza:

- `b5c22-e01` — **information** @ `bakurocho_yajibei`: Jūrō tells Osugi he saw Musashi at the Sumida ferry and had his lodging watched. — fisici: Jūrō, Matahachi's mother; menzionati: Shinmen Takezō. Evidenza: explicit; book5/chapter22.
- `b5c22-e02` — **search_departure** @ `isarago_hill`: Impatient with delay, Osugi sets out alone for Kakubei's house on Isarago Hill to find Kojirō. — fisici: Obaba Osugi; menzionati: Sasaki Kojiro, Iwama Kakubei. Evidenza: explicit; book5/chapter22.
- `b5c22-e03` — **retrieval** @ `bakurocho_yajibei`: Jūrō sends Koroku after Osugi to see her safely to or back from Kakubei's house. — fisici: Koroku; menzionati: Obaba Osugi. Evidenza: explicit; book5/chapter22.
- `b5c22-e04` — **arrival** @ `bakurocho_yajibei`: Kojirō enters while Jūrō and the men are emotionally affected by Osugi's copied filial-piety sutra. — fisici: Sasaki Kojiro, Jūrō. Evidenza: explicit; book5/chapter22.
- `b5c22-audit-s05` — **sutra_effect**: Jūrō and the Hangawara men initially mock Osugi's sutra but become emotionally overwhelmed by its description of parental sacrifice and filial neglect. — fisici: Jūrō. Evidenza: explicit; data/source/book5/chapter22-filial-piety.txt.
- `b5c22-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Hon'den Matahachi, Hangawara Yajibei. Evidenza: explicit; data/source/book5/chapter22-filial-piety.txt.

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Miyamoto Musashi (`musashi`), Iwama Kakubei (`iwama_kakubei`), Hon'den Matahachi (`matahachi`), Hangawara Yajibei (`yajibei`).

### 76. Spring Shower in Red (b5c23)

Fonte: `data/source/book5/chapter23-spring-shower-in-red.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Sasaki Kojirō (`kojiro`) | scena: `bakurocho_yajibei`; scena: `kosuke_shop`; scena: `yanagihara` | luogo non risolto; fled; Fled after severely wounding Shinzō; exact route unknown. (explicit; book5/chapter23) | Canoniche: Obaba Osugi: friend_ally/self_appointed_second_in_revenge_plot (introdotta qui)<br>Co-azioni: Obaba Osugi, Jūrō, Koroku, Hōjō Shinzō, Zushino Kōsuke |
| Obaba Osugi (`osugi`) | scena: `bakurocho_yajibei`; scena: `kosuke_shop`; scena: `yanagihara` | `yanagihara`; present; Alive after Shinzō pushes her into a ditch. (explicit; book5/chapter23) | Canoniche: Sasaki Kojirō: friend_ally/self_appointed_second_in_revenge_plot (introdotta qui)<br>Co-azioni: Sasaki Kojirō, Jūrō, Koroku, Hōjō Shinzō |
| Jūrō (`juro`) | scena: `bakurocho_yajibei`; scena: `kosuke_shop`; scena: `yanagihara` | `yanagihara`; dead; Killed by Shinzō during the ambush. (explicit; data/source/book5/chapter23-spring-shower-in-red.txt:L175-L193) | Co-azioni: Sasaki Kojirō, Obaba Osugi, Koroku, Hōjō Shinzō |
| Koroku (`koroku`) | scena: `bakurocho_yajibei`; scena: `kosuke_shop`; scena: `yanagihara` | `yanagihara`; dead; Killed by Shinzō during the ambush. (explicit; data/source/book5/chapter23-spring-shower-in-red.txt:L175-L193) | Co-azioni: Sasaki Kojirō, Obaba Osugi, Jūrō, Hōjō Shinzō |
| Hōjō Shinzō (`hojo_shinzo`) | scena: `yanagihara` | `yanagihara`; present; Alive but critically wounded by Kojirō. (explicit; data/source/book5/chapter23-spring-shower-in-red.txt:L237-L277) | Canoniche: Zushino Kōsuke: friend_ally/rescuer_and_caregiver (introdotta qui)<br>Co-azioni: Sasaki Kojirō, Obaba Osugi, Jūrō, Koroku, Zushino Kōsuke |
| Zushino Kōsuke (`zushino_kosuke`) | scena: `yanagihara` | `yanagihara`; present; Supporting the wounded Shinzō after Kojirō flees. (explicit; book5/chapter23) | Canoniche: Hōjō Shinzō: friend_ally/rescuer_and_caregiver (introdotta qui)<br>Co-azioni: Sasaki Kojirō, Hōjō Shinzō |

Azioni ed evidenza:

- `b5c23-e01` — **ambush_plan** @ `bakurocho_yajibei`: The four agree that Kojirō will lure Musashi out so Osugi can strike him the following night. — fisici: Sasaki Kojiro, Matahachi's mother, Jūrō, Koroku; menzionati: Shinmen Takezō. Evidenza: explicit; book5/chapter23.
- `b5c23-e02` — **approach** @ `kosuke_shop`: They take positions around Kōsuke's house while Kojirō goes to the door for his sword and asks for Musashi. — fisici: Sasaki Kojiro, Matahachi's mother, Jūrō, Koroku. Evidenza: explicit; book5/chapter23.
- `b5c23-e03` — **fatal_attack** @ `yanagihara`: Shinzō, who had followed the party, kills Jūrō and Koroku and shoves Osugi into a ditch. — fisici: Hōjō Shinzō, Jūrō, Koroku, Matahachi's mother. Evidenza: explicit; data/source/book5/chapter23-spring-shower-in-red.txt:L155-L213.
- `b5c23-e04` — **duel** @ `yanagihara`: Kojirō cuts a severe wound from Shinzō's neck and flees as Kōsuke arrives to support the wounded man. — fisici: Sasaki Kojiro, Hōjō Shinzō, Zushino Kōsuke. Evidenza: explicit; data/source/book5/chapter23-spring-shower-in-red.txt:L237-L277.
- `b5c23-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Hon'den Matahachi, Hangawara Yajibei. Evidenza: explicit; data/source/book5/chapter23-spring-shower-in-red.txt.

Relazioni introdotte o rivelate qui:

- Zushino Kōsuke → Hōjō Shinzō: **friend_ally/rescuer_and_caregiver** (soglia 76).
- Sasaki Kojirō → Obaba Osugi: **friend_ally/self_appointed_second_in_revenge_plot** (soglia 76).

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Miyamoto Musashi (`musashi`), Hon'den Matahachi (`matahachi`), Hangawara Yajibei (`yajibei`).

### 77. A Block of Wood (b5c24)

Fonte: `data/source/book5/chapter24-a-block-of-wood.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Miyamoto Musashi (`musashi`) | scena: `kosuke_shop`; percorso (intended_destination): `kosuke_shop` → `obata_school` | luogo non risolto; travelling; Leaves Kōsuke's house to notify the Obata School. (explicit; book5/chapter24) | Canoniche: Misawa Iori: master/teacher_and_practical_guardian; Zushino Kōsuke: acquaintance/artisan_client_host_and_ethical_interlocutor<br>Co-azioni: Hōjō Shinzō, Misawa Iori, Zushino Kōsuke, Kōsuke's unnamed wife |
| Hōjō Shinzō (`hojo_shinzo`) | scena: `kosuke_shop` | `kosuke_shop`; present; Alive and recovering under Kōsuke's care. (explicit; book5/chapter24) | Canoniche: Zushino Kōsuke: friend_ally/rescuer_and_caregiver<br>Co-azioni: Miyamoto Musashi, Zushino Kōsuke, Kōsuke's unnamed wife |
| Misawa Iori (`iori`) | scena: `kosuke_shop` | `kosuke_shop`; present; Remains in Kōsuke's household after returning with Sukekurō's reply. (explicit; book5/chapter24) | Canoniche: Miyamoto Musashi: master/teacher_and_practical_guardian<br>Co-azioni: Miyamoto Musashi |
| Zushino Kōsuke (`zushino_kosuke`) | scena: `kosuke_shop` | `kosuke_shop`; present; Caring for Shinzō in his household. (explicit; book5/chapter24) | Canoniche: Miyamoto Musashi: acquaintance/artisan_client_host_and_ethical_interlocutor; Hōjō Shinzō: friend_ally/rescuer_and_caregiver<br>Co-azioni: Miyamoto Musashi, Hōjō Shinzō, Kōsuke's unnamed wife |
| Kōsuke's unnamed wife (`kosuke_wife`) | scena: `kosuke_shop` | Nessuno stato finale strutturato | Co-azioni: Miyamoto Musashi, Hōjō Shinzō, Zushino Kōsuke |

Azioni ed evidenza:

- `b5c24-e01` — **medical_care** @ `kosuke_shop`: Kōsuke brings Shinzō home; the wound is cauterized and Musashi attributes its form to Kojirō's swallow-flight stroke. — fisici: Zushino Kōsuke, Kōsuke's unnamed wife, Hōjō Shinzō, Shinmen Takezo. Evidenza: strong_inference; book5/chapter24.
- `b5c24-e02` — **failed_carving** @ `kosuke_shop`: After almost forty-eight hours of work, Musashi reduces the old block without producing the intended Kannon and stops to meditate. — fisici: Shinmen Takezō. Evidenza: explicit; book5/chapter24.
- `b5c24-e03` — **return** @ `kosuke_shop`: Iori returns after three days, apologizes and gives Musashi Sukekurō's reply. — fisici: Misawa Iori, Shinmen Takezo. Evidenza: explicit; book5/chapter24.
- `b5c24-e04` — **message_and_departure** @ `kosuke_shop`: The reply postpones a Yagyū test; Musashi leaves to notify the Obata School while Iori remains to reflect on his conduct. — fisici: Shinmen Takezō; menzionati: Misawa Iori, Kimura Sukekurō, Yagyū Munenori, Yagyū Hyōgo. Evidenza: explicit; book5/chapter24.
- `b5c24-audit-s07` — **conscience_lesson**: Iori blames his long delay on a fox; Musashi reframes the punishment as Iori's own invisible conscience reacting to his choices. — fisici: Shinmen Takezō, Misawa Iori. Evidenza: explicit; data/source/book5/chapter24-a-block-of-wood.txt.
- `b5c24-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Sasaki Kojiro, Obata Kagenori, Yagyū Sekishūsai. Evidenza: explicit; data/source/book5/chapter24-a-block-of-wood.txt.

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Kimura Sukekurō (`kimura_sukekuro`), Yagyū Munenori (`munenori`), Yagyū Hyōgo (`yagyu_hyogo`), Sasaki Kojirō (`kojiro`), Obata Kagenori (`obata_kagenori`), Yagyū Sekishūsai (`sekishusai`).

### 78. The Deserted Prophet (b5c25)

Fonte: `data/source/book5/chapter25-the-deserted-prophet.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Miyamoto Musashi (`musashi`) | scena: `obata_school` | luogo non risolto; away; Has left the Obata School; his next position is not disclosed. (explicit; book5/chapter25) | Co-azioni: Obata Kagenori, Obata Yogorō |
| Obata Kagenori (`obata_kagenori`) | scena: `obata_school` | `obata_school`; present; Gravely ill; no death occurs in Book V. (explicit; book5/chapter25) | Canoniche: Obata Yogorō: family/father_and_son (introdotta qui)<br>Co-azioni: Miyamoto Musashi, Obata Yogorō |
| Obata Yogorō (`obata_yogoro`) | scena: `obata_school`; scena: `kojimachi_road`; percorso (uncertain_route): `obata_school` | `obata_school`; present; Returns after making a decision whose content is not disclosed. (explicit; data/source/book5/chapter25-the-deserted-prophet.txt:L158-L175) | Canoniche: Obata Kagenori: family/father_and_son (introdotta qui)<br>Co-azioni: Miyamoto Musashi, Obata Kagenori, Nakatogawa Handayū |
| Nakatogawa Handayū (`nakatogawa_handayu`) | scena: `kojimachi_road` | `obata_school`; present; At the school after bringing news from the Hosokawa house. (explicit; book5/chapter25) | Co-azioni: Obata Yogorō |

Azioni ed evidenza:

- `b5c25-e01` — **notification** @ `obata_school`: Musashi reports Shinzō's condition and warns Yogorō not to continue the feud with Kojirō. — fisici: Shinmen Takezō, Obata Yogorō; menzionati: Hōjō Shinzō, Sasaki Kojiro. Evidenza: explicit; book5/chapter25.
- `b5c25-e02` — **recognition** @ `obata_school`: After glimpsing Musashi from afar, Kagenori recognizes unusual alertness and orders Yogorō to bring him back. — fisici: Obata Kagenori, Obata Yogorō; menzionati: Shinmen Takezō. Evidenza: explicit; book5/chapter25.
- `b5c25-audit-s05` — **succession_intent** @ `obata_school`: Kagenori tells Yogorō that his military science is now aimed at peace and stability and that he needs the right mature man to receive it because Yogorō is not ready. — fisici: Obata Kagenori, Obata Yogorō, Shinmen Takezo. Evidenza: explicit; data/source/book5/chapter25-the-deserted-prophet.txt.
- `b5c25-e03` — **failed_search** @ `kojimachi_road`: Yogorō searches the shrine grounds and Kōjimachi street but cannot find Musashi. — fisici: Obata Yogorō; menzionati: Shinmen Takezō. Evidenza: explicit; book5/chapter25.
- `b5c25-e04` — **news** @ `kojimachi_road`: Handayū says the Hosokawa house already knows of Shinzō's defeat; Yogorō returns with an undisclosed decision. — fisici: Obata Yogorō, Nakatogawa Handayū; menzionati: Hōjō Shinzō, Sasaki Kojiro. Evidenza: explicit; data/source/book5/chapter25-the-deserted-prophet.txt:L158-L175.
- `b5c25-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Hosokawa Tadatoshi, Iwama Kakubei. Evidenza: explicit; data/source/book5/chapter25-the-deserted-prophet.txt.

Relazioni introdotte o rivelate qui:

- Obata Kagenori → Obata Yogorō: **family/father_and_son** (soglia 78).

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Hōjō Shinzō (`hojo_shinzo`), Sasaki Kojirō (`kojiro`), Hosokawa Tadatoshi (`hosokawa_tadatoshi`), Iwama Kakubei (`iwama_kakubei`).

### 79. The Talk of the Town (b5c26)

Fonte: `data/source/book5/chapter26-the-talk-of-the-town.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Miyamoto Musashi (`musashi`) | scena: `kosuke_shop`; percorso (direction_only): `kosuke_shop` → `hojo_ushigome`; scena: `ushigafuchi_kudan`; percorso (confirmed_route): `ushigafuchi_kudan` → `hojo_ushigome`; scena: `hojo_ushigome` | luogo non risolto; departed; Leaves alone after escorting Shinzō; exact destination unknown. (explicit; data/source/book5/chapter26-the-talk-of-the-town.txt:L187-L193) | Canoniche: Misawa Iori: master/teacher_and_practical_guardian; Zushino Kōsuke: acquaintance/artisan_client_host_and_ethical_interlocutor<br>Co-azioni: Hōjō Shinzō, Nembutsu Tazaemon |
| Hōjō Shinzō (`hojo_shinzo`) | scena: `kosuke_shop`; percorso (direction_only): `kosuke_shop` → `hojo_ushigome`; scena: `ushigafuchi_kudan`; percorso (confirmed_route): `ushigafuchi_kudan` → `hojo_ushigome`; scena: `hojo_ushigome` | `hojo_ushigome`; present; Delivered alive within sight of his father's Ushigome house. (explicit; data/source/book5/chapter26-the-talk-of-the-town.txt:L187-L193) | Canoniche: Zushino Kōsuke: friend_ally/rescuer_and_caregiver<br>Co-azioni: Miyamoto Musashi, Nembutsu Tazaemon |
| Misawa Iori (`iori`) | Presenza attestata dal dossier; nessuna tappa evento dedicata | `kosuke_shop`; present; Remains in Kōsuke's household while Musashi escorts Shinzō. (explicit; book5/chapter26) | Canoniche: Miyamoto Musashi: master/teacher_and_practical_guardian |
| Zushino Kōsuke (`zushino_kosuke`) | Presenza attestata dal dossier; nessuna tappa evento dedicata | `kosuke_shop`; present; At his home and shop after caring for Shinzō. (explicit; book5/chapter26) | Canoniche: Miyamoto Musashi: acquaintance/artisan_client_host_and_ethical_interlocutor; Hōjō Shinzō: friend_ally/rescuer_and_caregiver |
| Kōsuke's unnamed wife (`kosuke_wife`) | Presenza attestata dal dossier; nessuna tappa evento dedicata | `kosuke_shop`; present; At the Kōsuke household. (explicit; book5/chapter26) | Nessuna relazione/co-azione strutturata nel capitolo |
| Nembutsu Tazaemon (`nembutsu_tazaemon`) | scena: `ushigafuchi_kudan`; percorso (confirmed_route): `ushigafuchi_kudan` → `hojo_ushigome` | Nessuno stato finale strutturato | Co-azioni: Miyamoto Musashi, Hōjō Shinzō |

Azioni ed evidenza:

- `b5c26-e01` — **recovery_departure** @ `kosuke_shop`: Recovering Shinzō decides to leave; Musashi insists on escorting him toward his father's Ushigome house. — fisici: Hōjō Shinzō, Shinmen Takezo; menzionati: Zushino Kōsuke, Kōsuke's unnamed wife. Evidenza: explicit; book5/chapter26.
- `b5c26-e02` — **ambush_confrontation** @ `ushigafuchi_kudan`: Hangawara men surround the pair and demand Shinzō; Musashi argues against the vendetta and holds them off. — fisici: Shinmen Takezō, Hōjō Shinzō, Nembutsu Tazaemon. Evidenza: explicit; book5/chapter26.
- `b5c26-e03` — **nonlethal_escape** @ `ushigafuchi_kudan`: Musashi throws Tazaemon into the moat, carries Shinzō clear and then runs with him rather than fight the gang. — fisici: Shinmen Takezō, Hōjō Shinzō, Nembutsu Tazaemon. Evidenza: explicit; data/source/book5/chapter26-the-talk-of-the-town.txt:L145-L186.
- `b5c26-e04` — **safe_delivery** @ `hojo_ushigome`: Musashi brings Shinzō within sight of his father's house near Akagi Myōjin and leaves without entering. — fisici: Shinmen Takezō, Hōjō Shinzō. Evidenza: explicit; data/source/book5/chapter26-the-talk-of-the-town.txt:L187-L193.
- `b5c26-e05` — **reputation_attack** @ `nihombashi`: Hangawara propaganda spreads through Edo, publicly branding Musashi a coward and demanding he answer Osugi's revenge claim. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Shinmen Takezō, Matahachi's mother. Evidenza: explicit; data/source/book5/chapter26-the-talk-of-the-town.txt:L196-L208.
- `b5c26-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Jūrō, Sasaki Kojiro, Koroku, Hangawara Yajibei. Evidenza: explicit; data/source/book5/chapter26-the-talk-of-the-town.txt.

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Obaba Osugi (`osugi`), Jūrō (`juro`), Sasaki Kojirō (`kojiro`), Koroku (`koroku`), Hangawara Yajibei (`yajibei`).

## Libro VI — Sun and Moon

### 80. A Chat with the Men (b6c1)

Fonte: `data/source/book6/chapter1-a-chat-with-the-men.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Nagaoka Sado (`nagaoka_sado`) | scena: `hosokawa_edo_residence` | Nessuno stato finale strutturato | Co-azioni: Hosokawa Tadatoshi, Iwama Kakubei |
| Hosokawa Tadatoshi (`hosokawa_tadatoshi`) | scena: `hosokawa_edo_residence` | `hosokawa_edo_residence`; present; At the archery range after authorizing both searches. (explicit; data/source/book6/chapter1-a-chat-with-the-men.txt:L145-L162) | Co-azioni: Nagaoka Sado, Iwama Kakubei, Okatani Gorōji, Matsushita Mainosuke, Mori (Hosokawa retainer) |
| Iwama Kakubei (`iwama_kakubei`) | scena: `hosokawa_edo_residence` | Nessuno stato finale strutturato | Co-azioni: Nagaoka Sado, Hosokawa Tadatoshi |
| Okatani Gorōji (`okatani_goroji`) | scena: `hosokawa_edo_residence` | Nessuno stato finale strutturato | Co-azioni: Hosokawa Tadatoshi, Matsushita Mainosuke, Mori (Hosokawa retainer) |
| Matsushita Mainosuke (`matsushita_mainosuke`) | scena: `hosokawa_edo_residence` | Nessuno stato finale strutturato | Co-azioni: Hosokawa Tadatoshi, Okatani Gorōji, Mori (Hosokawa retainer) |
| Mori (Hosokawa retainer) (`mori_retainer`) | scena: `hosokawa_edo_residence` | Nessuno stato finale strutturato | Co-azioni: Hosokawa Tadatoshi, Okatani Gorōji, Matsushita Mainosuke |

Azioni ed evidenza:

- `b6c1-e01` — **discussion** @ `hosokawa_edo_residence`: Tadatoshi compares lance and sword practice and weighs Kojirō against Musashi. — fisici: Hosokawa Tadatoshi, Okatani Gorōji, Matsushita Mainosuke, Mori (Hosokawa retainer). Evidenza: explicit; data/source/book6/chapter1-a-chat-with-the-men.txt:L1-L118.
- `b6c1-e02` — **summons_plan** @ `hosokawa_edo_residence`: Sado is to bring Musashi if found; Kakubei may bring Kojirō for an interview. — fisici: Hosokawa Tadatoshi, Nagaoka Sado, Iwama Kakubei; menzionati: Shinmen Takezō, Sasaki Kojiro. Evidenza: explicit; data/source/book6/chapter1-a-chat-with-the-men.txt:L119-L162.
- `b6c1-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Hosokawa Tadaoki. Evidenza: explicit; data/source/book6/chapter1-a-chat-with-the-men.txt.

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Miyamoto Musashi (`musashi`), Sasaki Kojirō (`kojiro`), Hosokawa Tadaoki (`hosokawa_tadaoki`).

### 81. Buzzing Insects (b6c2)

Fonte: `data/source/book6/chapter2-buzzing-insects.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Sasaki Kojirō (`kojiro`) | scena: `tsukinomisaki`; scena: `isarago_hill` | `isarago_hill`; present; Advancing in a lethal confrontation with Yogorō; outcome unresolved in this chapter. (explicit; data/source/book6/chapter2-buzzing-insects.txt:L245-L263) | Canoniche: Iwama Kakubei: servant_employer/recruitment_sponsor; Obaba Osugi: friend_ally/self_appointed_second_in_revenge_plot<br>Co-azioni: Iwama Kakubei, Obata Yogorō |
| Obaba Osugi (`osugi`) | Presenza attestata dal dossier; nessuna tappa evento dedicata | Nessuno stato finale strutturato | Canoniche: Sasaki Kojirō: friend_ally/self_appointed_second_in_revenge_plot |
| Iwama Kakubei (`iwama_kakubei`) | scena: `tsukinomisaki` | Nessuno stato finale strutturato | Canoniche: Sasaki Kojirō: servant_employer/recruitment_sponsor<br>Co-azioni: Sasaki Kojirō |
| Obata Yogorō (`obata_yogoro`) | scena: `isarago_hill` | `isarago_hill`; present; Facing Kojirō at Isarago; the chapter ends before his fate is stated. (explicit; data/source/book6/chapter2-buzzing-insects.txt:L245-L263) | Co-azioni: Sasaki Kojirō |

Azioni ed evidenza:

- `b6c2-e01` — **invitation** @ `tsukinomisaki`: Kakubei brings Tadatoshi's interview invitation; Kojirō first accepts, then refuses out of pride. — fisici: Iwama Kakubei, Sasaki Kojiro; menzionati: Hosokawa Tadatoshi. Evidenza: explicit; data/source/book6/chapter2-buzzing-insects.txt:L65-L184.
- `b6c2-e02` — **ambush** @ `isarago_hill`: Yogorō ambushes the sleeping Kojirō; the chapter closes before the duel's outcome is stated. — fisici: Obata Yogorō, Sasaki Kojiro. Evidenza: explicit; data/source/book6/chapter2-buzzing-insects.txt:L185-L263.
- `b6c2-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Hōjō Shinzō, Hosokawa Tadaoki, Hon'den Matahachi, Shinmen Takezo, Hangawara Yajibei. Evidenza: explicit; data/source/book6/chapter2-buzzing-insects.txt.

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Hosokawa Tadatoshi (`hosokawa_tadatoshi`), Hōjō Shinzō (`hojo_shinzo`), Hosokawa Tadaoki (`hosokawa_tadaoki`), Hon'den Matahachi (`matahachi`), Miyamoto Musashi (`musashi`), Hangawara Yajibei (`yajibei`).

### 82. The Eagle (b6c3)

Fonte: `data/source/book6/chapter3-the-eagle.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Sasaki Kojirō (`kojiro`) | scena: `isarago_hill`; scena: `hosokawa_edo_residence`; scena: `goroji_house` | `goroji_house`; present; Making repeated visits to Gorōji. (explicit; data/source/book6/chapter3-the-eagle.txt:L246-L265) | Canoniche: Iwama Kakubei: servant_employer/recruitment_sponsor; Okatani Gorōji: acquaintance/injured_opponent_then_regular_visitor (introdotta qui)<br>Co-azioni: Hosokawa Tadatoshi, Obata Yogorō, Okatani Gorōji |
| Hosokawa Tadatoshi (`hosokawa_tadatoshi`) | scena: `hosokawa_edo_residence` | Nessuno stato finale strutturato | Co-azioni: Sasaki Kojirō, Okatani Gorōji |
| Iwama Kakubei (`iwama_kakubei`) | Presenza attestata dal dossier; nessuna tappa evento dedicata | Nessuno stato finale strutturato | Canoniche: Sasaki Kojirō: servant_employer/recruitment_sponsor |
| Obata Yogorō (`obata_yogoro`) | scena: `isarago_hill` | `isarago_hill`; dead; His corpse is directly seen near the temple; this chapter confirms his death. (explicit; data/source/book6/chapter3-the-eagle.txt:L49-L76) | Co-azioni: Sasaki Kojirō |
| Okatani Gorōji (`okatani_goroji`) | scena: `hosokawa_edo_residence`; scena: `goroji_house` | `goroji_house`; present; Alive, immobilized by severe pelvic and thigh injuries. (explicit; data/source/book6/chapter3-the-eagle.txt:L226-L265) | Canoniche: Sasaki Kojirō: acquaintance/injured_opponent_then_regular_visitor (introdotta qui)<br>Co-azioni: Sasaki Kojirō, Hosokawa Tadatoshi |

Azioni ed evidenza:

- `b6c3-e01` — **death_discovery** @ `isarago_hill`: Yogorō's corpse is discovered and Kojirō supplies funeral money. — fisici: Sasaki Kojiro, Obata Yogorō; menzionati: Iwama Kakubei. Evidenza: explicit; data/source/book6/chapter3-the-eagle.txt:L1-L63.
- `b6c3-e02` — **combat_test** @ `hosokawa_edo_residence`: In the interview bout Kojirō breaks Gorōji's real lance and severely injures his pelvis and thigh. — fisici: Sasaki Kojiro, Okatani Gorōji, Hosokawa Tadatoshi. Evidenza: explicit; data/source/book6/chapter3-the-eagle.txt:L93-L225.
- `b6c3-e03` — **visit** @ `goroji_house`: Kojirō repeatedly visits the injured Gorōji, strengthening his position among the retainers. — fisici: Sasaki Kojiro, Okatani Gorōji. Evidenza: explicit; data/source/book6/chapter3-the-eagle.txt:L226-L265.
- `b6c3-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Hosokawa Tadaoki, Kanemaki Jisai. Evidenza: explicit; data/source/book6/chapter3-the-eagle.txt.

Relazioni introdotte o rivelate qui:

- Sasaki Kojirō → Okatani Gorōji: **acquaintance/injured_opponent_then_regular_visitor** (soglia 82).

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Hosokawa Tadaoki (`hosokawa_tadaoki`), Kanemaki Jisai (`kanemaki_jisai`).

### 83. Green Persimmons (b6c4)

Fonte: `data/source/book6/chapter4-green-persimmons.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Hon'den Matahachi (`matahachi`) | scena: `matahachi_nishikubo` | `matahachi_nishikubo`; present; Living with Akemi. (explicit; data/source/book6/chapter4-green-persimmons.txt:L195-L251) | Canoniche: Akemi: acquaintance/temporary_eastbound_travel_companions<br>Co-azioni: Sasaki Kojirō, Akemi, Umpei |
| Sasaki Kojirō (`kojiro`) | scena: `donjiki_eatery`; scena: `matahachi_nishikubo` | luogo non risolto; unknown; Walking back toward town after spying on the tenement. (explicit; data/source/book6/chapter4-green-persimmons.txt:L234-L251) | Canoniche: Akemi: friend_ally/rescuer_and_protected_traveler<br>Co-azioni: Hon'den Matahachi, Akemi, Hamada Toranosuke's elder brother |
| Akemi (`akemi`) | scena: `matahachi_nishikubo` | Nessuno stato finale strutturato | Canoniche: Sasaki Kojirō: friend_ally/rescuer_and_protected_traveler; Hon'den Matahachi: acquaintance/temporary_eastbound_travel_companions<br>Co-azioni: Hon'den Matahachi, Sasaki Kojirō |
| Umpei (`umpei`) | scena: `matahachi_nishikubo` | Nessuno stato finale strutturato | Co-azioni: Hon'den Matahachi |
| Hamada Toranosuke's elder brother (`hamada_elder_brother`) | scena: `donjiki_eatery` | Nessuno stato finale strutturato | Co-azioni: Sasaki Kojirō |

Azioni ed evidenza:

- `b6c4-e01` — **violent_death** @ `donjiki_eatery`: Kojirō kills two samurai attacking Matahachi and publicly assumes responsibility. — fisici: Sasaki Kojiro, Hamada Toranosuke's elder brother. Evidenza: explicit; data/source/book6/chapter4-green-persimmons.txt:L1-L105.
- `b6c4-e02` — **discovery** @ `matahachi_nishikubo`: After hearing Matahachi's story, Kojirō follows him and discovers Akemi living with him. — fisici: Sasaki Kojiro, Hon'den Matahachi, Akemi. Evidenza: explicit; data/source/book6/chapter4-green-persimmons.txt:L106-L251.
- `b6c4-audit-s06` — **employment_offer** @ `matahachi_nishikubo`: Umpei, an experienced well-digger boss working for the shōgun's castle project, again offers Matahachi higher-paid work inside the castle grounds. — fisici: Umpei, Hon'den Matahachi. Evidenza: explicit; data/source/book6/chapter4-green-persimmons.txt.
- `b6c4-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Daizō of Narai, Iwama Kakubei, Shinmen Takezo, Matahachi's mother. Evidenza: explicit; data/source/book6/chapter4-green-persimmons.txt.

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Daizō (`daizo`), Iwama Kakubei (`iwama_kakubei`), Miyamoto Musashi (`musashi`), Obaba Osugi (`osugi`).

### 84. Eyes (b6c5)

Fonte: `data/source/book6/chapter5-eyes.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Miyamoto Musashi (`musashi`) | scena: `musashino_cabin`; percorso (confirmed_route): `musashino_cabin` → `hojo_ushigome` | luogo non risolto; in_transit; Riding with Shinzō toward Ushigome. (explicit; data/source/book6/chapter5-eyes.txt:L249-L266) | Canoniche: Misawa Iori: master/teacher_and_practical_guardian<br>Co-azioni: Hōjō Shinzō, Misawa Iori |
| Hōjō Shinzō (`hojo_shinzo`) | scena: `musashino_cabin`; percorso (confirmed_route): `musashino_cabin` → `hojo_ushigome` | Nessuno stato finale strutturato | Co-azioni: Miyamoto Musashi |
| Misawa Iori (`iori`) | scena: `musashino_cabin` | `musashino_cabin`; present; Left alone at the new cabin. (explicit; data/source/book6/chapter5-eyes.txt:L249-L266) | Canoniche: Miyamoto Musashi: master/teacher_and_practical_guardian<br>Co-azioni: Miyamoto Musashi |

Azioni ed evidenza:

- `b6c5-e01` — **construction** @ `musashino_cabin`: Musashi and Iori build a cabin and Musashi trains the boy's gaze. — fisici: Shinmen Takezō, Misawa Iori. Evidenza: explicit; data/source/book6/chapter5-eyes.txt:L1-L142.
- `b6c5-e02` — **news_and_departure** @ `musashino_cabin`: Shinzō reports Yogorō's death and invites Musashi to Ujikatsu's residence; they ride away together. — fisici: Hōjō Shinzō, Shinmen Takezo; menzionati: Obata Yogorō, Hōjō Ujikatsu. Evidenza: explicit; data/source/book6/chapter5-eyes.txt:L143-L266.
- `b6c5-audit-s05` — **death_news** @ `musashino_cabin`: Shinzō reports that Kagenori has died and that Yogorō also died after going alone to seek revenge on Kojirō. — fisici: Hōjō Shinzō, Shinmen Takezo; menzionati: Obata Yogorō, Obata Kagenori. Evidenza: explicit; data/source/book6/chapter5-eyes.txt:L170-L185.
- `b6c5-audit-s06` — **succession_revelation** @ `musashino_cabin`: With Yogorō dead, Shinzō says adoption proceedings arranged through his father and Munenori will make him Kagenori's heir and successor to the Obata name. — fisici: Hōjō Shinzō; menzionati: Obata Kagenori, Yagyū Munenori. Evidenza: explicit; data/source/book6/chapter5-eyes.txt:L170-L185.
- `b6c5-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Jōtarō, Otsu, Zushino Kōsuke. Evidenza: explicit; data/source/book6/chapter5-eyes.txt.

Relazioni introdotte o rivelate qui:

- Obata Kagenori → Hōjō Shinzō: **family/planned_adoption_and_obata_succession** (soglia 84).

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Obata Yogorō (`obata_yogoro`), Hōjō Ujikatsu (`hojo_ujikatsu`), Obata Kagenori (`obata_kagenori`), Yagyū Munenori (`munenori`), Jōtarō (`jotaro`), Otsu (`otsu`), Zushino Kōsuke (`zushino_kosuke`).

### 85. Four Sages with a Single Light (b6c6)

Fonte: `data/source/book6/chapter6-four-sages-with-a-single-light.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Miyamoto Musashi (`musashi`) | scena: `hojo_ushigome` | `hojo_ushigome`; present; Present while his patrons treat the recommendation as decided. (explicit; data/source/book6/chapter6-four-sages-with-a-single-light.txt:L284-L311) | Canoniche: Takuan Sōhō: master/spiritual_and_moral_guide<br>Co-azioni: Takuan Sōhō, Yagyū Munenori, Hōjō Ujikatsu |
| Takuan Sōhō (`takuan`) | scena: `hojo_ushigome` | Nessuno stato finale strutturato | Canoniche: Miyamoto Musashi: master/spiritual_and_moral_guide<br>Co-azioni: Miyamoto Musashi, Yagyū Munenori, Hōjō Ujikatsu |
| Yagyū Munenori (`munenori`) | scena: `hojo_ushigome` | Nessuno stato finale strutturato | Co-azioni: Miyamoto Musashi, Takuan Sōhō, Hōjō Ujikatsu |
| Hōjō Shinzō (`hojo_shinzo`) | Presenza attestata dal dossier; nessuna tappa evento dedicata | Nessuno stato finale strutturato | Nessuna relazione/co-azione strutturata nel capitolo |
| Hōjō Ujikatsu (`hojo_ujikatsu`) | scena: `hojo_ushigome` | Nessuno stato finale strutturato | Co-azioni: Miyamoto Musashi, Takuan Sōhō, Yagyū Munenori |

Azioni ed evidenza:

- `b6c6-e01` — **test** @ `hojo_ushigome`: Musashi detects and circumvents the staged garden ambush prepared to test him. — fisici: Shinmen Takezō, Hōjō Ujikatsu, Yagyū Munenori. Evidenza: explicit; data/source/book6/chapter6-four-sages-with-a-single-light.txt:L1-L159.
- `b6c6-e02` — **recommendation_plan** @ `hojo_ushigome`: The group proposes Musashi as shogunal instructor and discusses marrying him to Otsū; Musashi remains reluctant. — fisici: Shinmen Takezō, Takuan Sōhō, Hōjō Ujikatsu, Yagyū Munenori; menzionati: Otsu. Evidenza: explicit; data/source/book6/chapter6-four-sages-with-a-single-light.txt:L160-L311.
- `b6c6-audit-s09` — **sword_doctrine** @ `hojo_ushigome`: Musashi internally rejects the sword of conquest and mere technical instruction, defining the Way instead as a means to establish order, protect and refine the spirit and ultimately contribute to peace and good government. — fisici: Shinmen Takezō. Evidenza: explicit; data/source/book6/chapter6-four-sages-with-a-single-light.txt.
- `b6c6-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Karasumaru Mitsuhiro, Kimura Sukekurō, Ono Tadaaki, Yagyū Sekishūsai, Tokugawa Hidetada, Tokugawa Ieyasu, Yagyū Hyōgo. Evidenza: explicit; data/source/book6/chapter6-four-sages-with-a-single-light.txt.

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Otsu (`otsu`), Karasumaru Mitsuhiro (`karasumaru_mitsuhiro`), Kimura Sukekurō (`kimura_sukekuro`), Mikogami Tenzen (`mikogami_tenzen`), Yagyū Sekishūsai (`sekishusai`), Tokugawa Hidetada (`tokugawa_hidetada`), Tokugawa Ieyasu (`tokugawa_ieyasu`), Yagyū Hyōgo (`yagyu_hyogo`).

### 86. The Locust Tree (b6c7)

Fonte: `data/source/book6/chapter7-the-locust-tree.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Hon'den Matahachi (`matahachi`) | scena: `daizo_pawnshop`; percorso (intended_destination): `edo_castle` | `matahachi_nishikubo`; present; Committed to entering the castle under the well-digger cover. (explicit; data/source/book6/chapter7-the-locust-tree.txt:L170-L205) | Canoniche: Akemi: acquaintance/temporary_eastbound_travel_companions; Daizō: authority/assassination_recruiter_and_recruited_agent (introdotta qui)<br>Co-azioni: Daizō |
| Akemi (`akemi`) | scena: `matahachi_nishikubo`; percorso (confirmed_route): `matahachi_nishikubo` | `daizo_pawnshop`; present; Working for and following Daizō. (explicit; data/source/book6/chapter7-the-locust-tree.txt:L206-L236) | Canoniche: Hon'den Matahachi: acquaintance/temporary_eastbound_travel_companions |
| Daizō (`daizo`) | scena: `daizo_pawnshop`; percorso (intended_destination): `edo_castle` | Nessuno stato finale strutturato | Canoniche: Hon'den Matahachi: authority/assassination_recruiter_and_recruited_agent (introdotta qui)<br>Co-azioni: Hon'den Matahachi |

Azioni ed evidenza:

- `b6c7-e01` — **departure** @ `matahachi_nishikubo`: Akemi leaves Matahachi. — fisici: Akemi; menzionati: Hon'den Matahachi. Evidenza: explicit; data/source/book6/chapter7-the-locust-tree.txt:L1-L51.
- `b6c7-e02` — **assassination_plot** @ `daizo_pawnshop`: Daizō pays Matahachi to enter Edo Castle as a well digger and kill Hidetada with a hidden musket. — fisici: Daizō of Narai, Hon'den Matahachi; menzionati: Tokugawa Hidetada. Evidenza: explicit; data/source/book6/chapter7-the-locust-tree.txt:L52-L205.
- `b6c7-e03` — **funds_audit** @ `daizo_pawnshop`: Daizō retrieves the cached advance and finds twenty-eight of thirty gold pieces remaining. — fisici: Daizō of Narai. Evidenza: explicit; data/source/book6/chapter7-the-locust-tree.txt:L206-L236.
- `b6c7-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Umpei. Evidenza: explicit; data/source/book6/chapter7-the-locust-tree.txt.

Relazioni introdotte o rivelate qui:

- Hon'den Matahachi → Daizō: **authority/assassination_recruiter_and_recruited_agent** (soglia 86).

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Tokugawa Hidetada (`tokugawa_hidetada`), Umpei (`umpei`).

### 87. Tadaaki’s Madness (b6c8)

Fonte: `data/source/book6/chapter8-tadaakis-madness.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Sasaki Kojirō (`kojiro`) | percorso (confirmed_route): `takanawa_highroad` → `yajibei_route_house` → `kanda_hill` → `saikachi_slope` → `ono_dojo`; scena: `ono_dojo` | Nessuno stato finale strutturato | Canoniche: Obaba Osugi: friend_ally/self_appointed_second_in_revenge_plot<br>Co-azioni: Ono Tadaaki |
| Obaba Osugi (`osugi`) | scena: `hamacho_house`; percorso (confirmed_route): `hamacho_house`; scena: `ono_dojo` | Nessuno stato finale strutturato | Canoniche: Hangawara Yajibei: friend_ally/host_and_protector; Sasaki Kojirō: friend_ally/self_appointed_second_in_revenge_plot<br>Co-azioni: Ono Tadaaki, Hamada Toranosuke |
| Ono Tadaaki (`mikogami_tenzen`) | scena: `ono_dojo`; percorso (confirmed_route): `ono_dojo` | luogo non risolto; unknown; Has withdrawn from the dojo and disappeared from Edo; rumors of madness are unverified reports. (explicit; data/source/book6/chapter8-tadaakis-madness.txt:L458-L496) | Co-azioni: Sasaki Kojirō, Obaba Osugi, Hamada Toranosuke |
| Hangawara Yajibei (`yajibei`) | Presenza attestata dal dossier; nessuna tappa evento dedicata | Nessuno stato finale strutturato | Canoniche: Obaba Osugi: friend_ally/host_and_protector |
| Hamada Toranosuke (`hamada_toranosuke`) | scena: `hamacho_house`; percorso (confirmed_route): `hamacho_house`; scena: `ono_dojo` | luogo non risolto; unknown; Expelled from the Ono school. (explicit; data/source/book6/chapter8-tadaakis-madness.txt:L421-L457) | Co-azioni: Obaba Osugi, Ono Tadaaki |
| Omitsu (`omitsu`) | Presenza attestata dal dossier; nessuna tappa evento dedicata | Nessuno stato finale strutturato | Nessuna relazione/co-azione strutturata nel capitolo |
| Numata Kajūrō (`numata_kajuro`) | Presenza attestata dal dossier; nessuna tappa evento dedicata | Nessuno stato finale strutturato | Nessuna relazione/co-azione strutturata nel capitolo |
| Kamei Hyōsuke (`kamei_hyosuke`) | Presenza attestata dal dossier; nessuna tappa evento dedicata | Nessuno stato finale strutturato | Nessuna relazione/co-azione strutturata nel capitolo |
| Negoro Hachikurō (`negoro_hachikuro`) | Presenza attestata dal dossier; nessuna tappa evento dedicata | Nessuno stato finale strutturato | Nessuna relazione/co-azione strutturata nel capitolo |
| Itō Magobei (`ito_magobei`) | Presenza attestata dal dossier; nessuna tappa evento dedicata | Nessuno stato finale strutturato | Nessuna relazione/co-azione strutturata nel capitolo |

Azioni ed evidenza:

- `b6c8-e01` — **abduction** @ `hamacho_house`: Toranosuke's group abducts Osugi to lure Kojirō. — fisici: Hamada Toranosuke, Matahachi's mother; menzionati: Sasaki Kojiro. Evidenza: explicit; data/source/book6/chapter8-tadaakis-madness.txt:L1-L165.
- `b6c8-audit-route` — **journey**: Kojirō follows news of Osugi’s kidnapping from Takanawa via Yajibei’s house and Kanda toward the Ono residence at Saikachi Slope. — fisici: Sasaki Kojiro. Evidenza: explicit; data/source/book6/chapter8-tadaakis-madness.txt:L138-L174.
- `b6c8-e02` — **dojo_confrontation** @ `ono_dojo`: Tadaaki first concedes defeat as a fighter. Kojirō nevertheless attacks and cuts his topknot while Tadaaki cuts Kojirō’s sleeve. Tadaaki accepts responsibility for his students later. — fisici: Sasaki Kojiro, Ono Tadaaki. Evidenza: explicit; data/source/book6/chapter8-tadaakis-madness.txt:L166-L420.
- `b6c8-e03` — **retirement_and_release** @ `ono_dojo`: After accepting responsibility, Tadaaki announces retirement, expels Toranosuke, orders the students to train elsewhere and releases Osugi. Later public talk of madness is not a medical fact. — fisici: Ono Tadaaki, Hamada Toranosuke, Matahachi's mother. Evidenza: explicit; data/source/book6/chapter8-tadaakis-madness.txt:L421-L496.
- `b6c8-e04` — **departure**: Not many days after the confrontation, Tadaaki leaves Edo for an unstated destination. — fisici: Ono Tadaaki. Evidenza: explicit; data/source/book6/chapter8-tadaakis-madness.txt:L489-L496.
- `b6c8-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Itō Ittōsai, Hon'den Matahachi, Yagyū Munenori, Shinmen Takezo. Evidenza: explicit; data/source/book6/chapter8-tadaakis-madness.txt.

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Itō Ittōsai (`ito_ittosai`), Hon'den Matahachi (`matahachi`), Yagyū Munenori (`munenori`), Miyamoto Musashi (`musashi`).

### 88. The Poignancy of Things (b6c9)

Fonte: `data/source/book6/chapter9-the-poignancy-of-things.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Miyamoto Musashi (`musashi`) | scena: `musashino_cabin`; percorso (confirmed_route): `musashino_cabin` → `tanashi`; scena: `kotesashigahara`; percorso (confirmed_route): `tanashi` → `kotesashigahara` | `kotesashigahara`; present; Continuing with Iori toward Mitsumine. (explicit; data/source/book6/chapter9-the-poignancy-of-things.txt:L180-L198) | Canoniche: Misawa Iori: master/teacher_and_practical_guardian<br>Co-azioni: Misawa Iori |
| Misawa Iori (`iori`) | scena: `musashino_cabin`; percorso (confirmed_route): `musashino_cabin` → `tanashi`; scena: `kotesashigahara`; percorso (confirmed_route): `tanashi` → `kotesashigahara` | Nessuno stato finale strutturato | Canoniche: Miyamoto Musashi: master/teacher_and_practical_guardian<br>Co-azioni: Miyamoto Musashi |

Azioni ed evidenza:

- `b6c9-e01` — **storm_damage** @ `musashino_cabin`: A typhoon destroys the cabin; Musashi helps neighboring farmers before departing with Iori. — fisici: Shinmen Takezō, Misawa Iori. Evidenza: explicit; data/source/book6/chapter9-the-poignancy-of-things.txt:L1-L111.
- `b6c9-e02` — **journey** @ `kotesashigahara`: After an overnight stop at Tanashi, they are delayed at the Iruma River; Iori finds and buries old battle bones. — fisici: Shinmen Takezō, Misawa Iori. Evidenza: explicit; data/source/book6/chapter9-the-poignancy-of-things.txt:L112-L198.
- `b6c9-audit-s08` — **compassion_doctrine**: Pressed by Iori's questions about loyal and rebel dead, Musashi concludes that a genuine samurai and swordsman must possess compassion and an appreciation of life's poignancy, not merely destructive skill. — fisici: Shinmen Takezō, Misawa Iori. Evidenza: explicit; data/source/book6/chapter9-the-poignancy-of-things.txt.
- `b6c9-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Jōtarō. Evidenza: explicit; data/source/book6/chapter9-the-poignancy-of-things.txt.

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Jōtarō (`jotaro`).

### 89. Two Drumsticks (b6c10)

Fonte: `data/source/book6/chapter10-two-drumsticks.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Miyamoto Musashi (`musashi`) | scena: `mitsumine_shrine` | `mitsumine_shrine`; present; Lodged at Kannon'in and planning to climb to the inner shrine next day. (explicit; data/source/book6/chapter10-two-drumsticks.txt:L173-L193) | Canoniche: Misawa Iori: master/teacher_and_practical_guardian<br>Co-azioni: Misawa Iori |
| Misawa Iori (`iori`) | scena: `mitsumine_shrine` | Nessuno stato finale strutturato | Canoniche: Miyamoto Musashi: master/teacher_and_practical_guardian<br>Co-azioni: Miyamoto Musashi |

Azioni ed evidenza:

- `b6c10-e01` — **investigation** @ `mitsumine_shrine`: Musashi searches donor records for Daizō without finding him. — fisici: Shinmen Takezō; menzionati: Daizō of Narai. Evidenza: explicit; data/source/book6/chapter10-two-drumsticks.txt:L1-L97.
- `b6c10-e02` — **technical_insight** @ `mitsumine_shrine`: Watching a drummer use two sticks gives Musashi a new formulation of his two-sword principle. — fisici: Shinmen Takezō, Misawa Iori. Evidenza: explicit; data/source/book6/chapter10-two-drumsticks.txt:L98-L193.
- `b6c10-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Fuchikawa Gonroku, Hon'den Matahachi, Otsu. Evidenza: explicit; data/source/book6/chapter10-two-drumsticks.txt.

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Daizō (`daizo`), Fuchikawa Gonroku (`gonroku`), Hon'den Matahachi (`matahachi`), Otsu (`otsu`).

### 90. The Demon’s Attendant (b6c11)

Fonte: `data/source/book6/chapter11-the-demons-attendant.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Miyamoto Musashi (`musashi`) | scena: `mitsumine_inner_approach`; scena: `kosaruzawa_bridge`; percorso (confirmed_route): `mitsumine_shrine` | luogo non risolto; in_transit; Bound and escorted toward town by officials. (explicit; data/source/book6/chapter11-the-demons-attendant.txt:L408-L437) | Canoniche: Misawa Iori: master/teacher_and_practical_guardian; Musō Gonnosuke: friend_ally/combat_ally_and_advocate (introdotta qui)<br>Co-azioni: Oko, Tsujikaze Kōhei, Gion Tōji, Musō Gonnosuke |
| Oko (`oko`) | scena: `mitsumine_inner_approach` | luogo non risolto; unknown; Escaped the ambush site. (explicit; data/source/book6/chapter11-the-demons-attendant.txt:L350-L390) | Canoniche: Gion Tōji: partner_family/described_as_husband_and_wife<br>Co-azioni: Miyamoto Musashi, Tsujikaze Kōhei, Gion Tōji, Musō Gonnosuke |
| Tsujikaze Kōhei (`kohei`) | scena: `mitsumine_inner_approach` | `mitsumine_inner_approach`; dead; Dead. (explicit; data/source/book6/chapter11-the-demons-attendant.txt:L300-L367) | Co-azioni: Miyamoto Musashi, Oko, Gion Tōji, Musō Gonnosuke |
| Gion Tōji (`gion_toji`) | scena: `mitsumine_inner_approach` | `mitsumine_inner_approach`; dead; Dead among Gonnosuke's victims; chapter 12 confirms Oko's husband was killed by him. (strong_inference; data/source/book6/chapter11-the-demons-attendant.txt:L300-L367) | Canoniche: Oko: partner_family/described_as_husband_and_wife<br>Co-azioni: Miyamoto Musashi, Oko, Tsujikaze Kōhei, Musō Gonnosuke |
| Musō Gonnosuke (`gonnosuke`) | scena: `mitsumine_inner_approach` | Nessuno stato finale strutturato | Canoniche: Miyamoto Musashi: friend_ally/combat_ally_and_advocate (introdotta qui)<br>Co-azioni: Miyamoto Musashi, Oko, Tsujikaze Kōhei, Gion Tōji |
| Misawa Iori (`iori`) | Presenza attestata dal dossier; nessuna tappa evento dedicata | Nessuno stato finale strutturato | Canoniche: Miyamoto Musashi: master/teacher_and_practical_guardian |
| Kuro (`kuro`) | Presenza attestata dal dossier; nessuna tappa evento dedicata | Nessuno stato finale strutturato | Nessuna relazione/co-azione strutturata nel capitolo |

Azioni ed evidenza:

- `b6c11-e01` — **ambush** @ `mitsumine_inner_approach`: Baiken's group ambushes Musashi; Musashi kills five and Gonnosuke kills seven with his staff, leaving one lancer-priest survivor. — fisici: Tsujikaze Kohei, Oko, Gion Tōji, Shinmen Takezo, Musō Gonnosuke. Evidenza: explicit; data/source/book6/chapter11-the-demons-attendant.txt:L125-L367.
- `b6c11-e02` — **arrest** @ `kosaruzawa_bridge`: When Musashi reports the attack, officials bind him as the suspected shrine-treasure thief. — fisici: Shinmen Takezō. Evidenza: explicit; data/source/book6/chapter11-the-demons-attendant.txt:L368-L437.
- `b6c11-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Tsujikaze Temma. Evidenza: explicit; data/source/book6/chapter11-the-demons-attendant.txt.

Relazioni introdotte o rivelate qui:

- Musō Gonnosuke → Miyamoto Musashi: **friend_ally/combat_ally_and_advocate** (soglia 90).

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Tsujikaze Temma (`temma`).

### 91. Brother Disciples (b6c12)

Fonte: `data/source/book6/chapter12-brother-disciples.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Takuan Sōhō (`takuan`) | scena: `musashino_cabin` | Nessuno stato finale strutturato | Co-azioni: Jōtarō, Daizō, Misawa Iori |
| Jōtarō (`jotaro`) | scena: `head_burying_mound`; scena: `musashino_cabin`; percorso (intended_destination): `shojuan` | `musashino_cabin`; present; Instructed to seek his father at Shōjuan and flee. (explicit; data/source/book6/chapter12-brother-disciples.txt:L545-L582) | Canoniche: Aoki Tanzaemon: family/father_and_separated_son; Daizō: authority/coercive_claimed_guardianship<br>Co-azioni: Takuan Sōhō, Daizō, Misawa Iori |
| Oko (`oko`) | scena: `oinu_teahouse` | Nessuno stato finale strutturato | Co-azioni: Musō Gonnosuke |
| Aoki Tanzaemon (`aoki_tanzaemon`) | percorso (intended_destination): `shojuan` | luogo non risolto; in_transit; Traveling toward Shōjuan. (explicit; data/source/book6/chapter12-brother-disciples.txt:L430-L474) | Canoniche: Jōtarō: family/father_and_separated_son |
| Musō Gonnosuke (`gonnosuke`) | scena: `oinu_teahouse`; scena: `shomaru_pass`; percorso (confirmed_route): `oinu_teahouse` → `shomaru_pass` | luogo non risolto; in_transit; Traveling back toward Chichibu. (explicit; data/source/book6/chapter12-brother-disciples.txt:L130-L157) | Co-azioni: Oko, Misawa Iori |
| Daizō (`daizo`) | scena: `head_burying_mound` | Nessuno stato finale strutturato | Canoniche: Jōtarō: authority/coercive_claimed_guardianship<br>Co-azioni: Takuan Sōhō, Jōtarō, Misawa Iori |
| Misawa Iori (`iori`) | scena: `head_burying_mound`; scena: `musashino_cabin`; scena: `shomaru_pass`; percorso (confirmed_route): `oinu_teahouse` → `shomaru_pass` | `musashino_cabin`; present; With Takuan after recovering consciousness. (explicit; data/source/book6/chapter12-brother-disciples.txt:L505-L582) | Co-azioni: Takuan Sōhō, Jōtarō, Musō Gonnosuke, Daizō |
| Kuro (`kuro`) | Presenza attestata dal dossier; nessuna tappa evento dedicata | Nessuno stato finale strutturato | Nessuna relazione/co-azione strutturata nel capitolo |

Azioni ed evidenza:

- `b6c12-e01` — **violent_death** @ `oinu_teahouse`: Oko attacks Gonnosuke and he kills her with her own dagger. — fisici: Musō Gonnosuke, Oko. Evidenza: explicit; data/source/book6/chapter12-brother-disciples.txt:L1-L157.
- `b6c12-e02` — **theft_discovery** @ `head_burying_mound`: Iori follows Daizō and Jōtarō and witnesses the transfer and caching of Mitsumine's stolen treasure. — fisici: Misawa Iori, Daizō of Narai, Jōtarō. Evidenza: explicit; data/source/book6/chapter12-brother-disciples.txt:L158-L338.
- `b6c12-e03` — **near_reunion**: Takuan sends Tanzaemon toward Shōjuan before finding the unconscious boys; father and son narrowly miss one another. — fisici: Aoki Tanzaemon; menzionati: Jōtarō. Evidenza: explicit; data/source/book6/chapter12-brother-disciples.txt:L339-L504.
- `b6c12-audit-s08` — **pursuit_and_duel** @ `musashino_cabin`: Iori follows Jōtarō, denounces him as a thief and eventually fights him near the Musashino cabin, using Musashi's eye-training lesson. — fisici: Misawa Iori, Jōtarō. Evidenza: explicit; data/source/book6/chapter12-brother-disciples.txt.
- `b6c12-audit-s09` — **brother_disciple_reveal** @ `musashino_cabin`: The boys discover that both regard Musashi as their teacher; their hostility gives way to shocked recognition even though mistrust remains. — fisici: Misawa Iori, Jōtarō; menzionati: Shinmen Takezō. Evidenza: explicit; data/source/book6/chapter12-brother-disciples.txt.
- `b6c12-audit-s10` — **mutual_injury**: Still struggling in a tree, Iori and Jōtarō fall together and are knocked unconscious. — fisici: Misawa Iori, Jōtarō. Evidenza: explicit; data/source/book6/chapter12-brother-disciples.txt.
- `b6c12-audit-s14` — **ideological_confrontation**: Jōtarō admits helping Daizō rob the treasure house while claiming the theft serves the public; Takuan attacks the logic of a half-educated do-gooder imposing his own idea of social good. — fisici: Takuan Sōhō, Jōtarō, Daizō of Narai. Evidenza: explicit; data/source/book6/chapter12-brother-disciples.txt.
- `b6c12-e04` — **confession_and_instruction** @ `musashino_cabin`: Jōtarō explains Daizō's plot; Takuan tells him to reunite with his father and flee in disguise. — fisici: Jōtarō, Takuan Sōhō, Misawa Iori; menzionati: Daizō of Narai. Evidenza: explicit; data/source/book6/chapter12-brother-disciples.txt:L505-L582.
- `b6c12-e05` — **escape** @ `shomaru_pass`: Gonnosuke and Iori escape the pursuing villagers and shake off the last searchers at Shōmaru Pass. — fisici: Musō Gonnosuke, Misawa Iori. Evidenza: explicit; data/source/book6/chapter12-brother-disciples.txt:L54-L70.
- `b6c12-e06` — **departure_plan** @ `musashino_cabin`: After Jōtarō's confession, Takuan directs him to seek his father at Shōjuan and flee in disguise. — fisici: Jōtarō; menzionati: Aoki Tanzaemon. Evidenza: explicit; data/source/book6/chapter12-brother-disciples.txt:L505-L582.
- `b6c12-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Otsu. Evidenza: explicit; data/source/book6/chapter12-brother-disciples.txt.

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Miyamoto Musashi (`musashi`), Otsu (`otsu`).

### 92. The Pomegranate (b6c13)

Fonte: `data/source/book6/chapter13-the-pomegranate.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Takuan Sōhō (`takuan`) | Presenza attestata dal dossier; nessuna tappa evento dedicata | luogo non risolto; unknown; Has left for Edo Castle. (explicit; data/source/book6/chapter13-the-pomegranate.txt:L1-L20) | Nessuna relazione/co-azione strutturata nel capitolo |
| Obaba Osugi (`osugi`) | scena: `hojo_ushigome` | Nessuno stato finale strutturato | Co-azioni: Hōjō Shinzō, Misawa Iori |
| Hōjō Shinzō (`hojo_shinzo`) | scena: `hojo_ushigome` | Nessuno stato finale strutturato | Co-azioni: Obaba Osugi, Misawa Iori |
| Misawa Iori (`iori`) | scena: `hojo_ushigome` | `hojo_ushigome`; present; Ashamed after attacking Osugi, remaining with Shinzō. (explicit; data/source/book6/chapter13-the-pomegranate.txt:L80-L100) | Co-azioni: Obaba Osugi, Hōjō Shinzō |

Azioni ed evidenza:

- `b6c13-e01` — **accusation** @ `hojo_ushigome`: Osugi arrives to slander Musashi and his recommendation; Iori pelts her with a pomegranate and manure. — fisici: Obaba Osugi, Hōjō Shinzō, Misawa Iori; menzionati: Shinmen Takezō. Evidenza: explicit; data/source/book6/chapter13-the-pomegranate.txt:L20-L89.
- `b6c13-audit-s02` — **slander_campaign** @ `hojo_ushigome`: Osugi appears at the mansion and gives Shinzō a long denunciation of Musashi, citing Sekigahara, alleged crimes and the Otsū dispute to argue he is unfit to teach the shōgun. — fisici: Obaba Osugi, Hōjō Shinzō; menzionati: Shinmen Takezō. Evidenza: explicit; data/source/book6/chapter13-the-pomegranate.txt.
- `b6c13-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Hōjō Ujikatsu, Hon'den Matahachi. Evidenza: explicit; data/source/book6/chapter13-the-pomegranate.txt.

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Miyamoto Musashi (`musashi`), Hōjō Ujikatsu (`hojo_ujikatsu`), Hon'den Matahachi (`matahachi`).

### 93. Land of Dreams (b6c14)

Fonte: `data/source/book6/chapter14-land-of-dreams.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Hon'den Matahachi (`matahachi`) | scena: `edo_castle`; scena: `otemachi_prison` | luogo non risolto; in_transit; Alive, shaven and running away after public lashing and banishment. (explicit; data/source/book6/chapter14-land-of-dreams.txt:L389-L435) | Canoniche: Akemi: acquaintance/temporary_eastbound_travel_companions<br>Co-azioni: Takuan Sōhō, Akemi |
| Takuan Sōhō (`takuan`) | scena: `edo_castle` | Nessuno stato finale strutturato | Co-azioni: Hon'den Matahachi, Hōjō Ujikatsu, Tokugawa Hidetada, Sakai Tadakatsu |
| Akemi (`akemi`) | scena: `otemachi_prison` | `otemachi_prison`; present; Alive at the punishment site after lashing and banishment sentence. (explicit; data/source/book6/chapter14-land-of-dreams.txt:L389-L435) | Canoniche: Hon'den Matahachi: acquaintance/temporary_eastbound_travel_companions<br>Co-azioni: Hon'den Matahachi |
| Hōjō Ujikatsu (`hojo_ujikatsu`) | scena: `edo_castle` | Nessuno stato finale strutturato | Co-azioni: Takuan Sōhō, Tokugawa Hidetada, Sakai Tadakatsu |
| Tokugawa Hidetada (`tokugawa_hidetada`) | scena: `edo_castle` | Nessuno stato finale strutturato | Co-azioni: Takuan Sōhō, Hōjō Ujikatsu, Sakai Tadakatsu |
| Sakai Tadakatsu (`sakai_tadakatsu`) | scena: `edo_castle` | Nessuno stato finale strutturato | Co-azioni: Takuan Sōhō, Hōjō Ujikatsu, Tokugawa Hidetada |

Azioni ed evidenza:

- `b6c14-e01` — **abandoned_assassination** @ `edo_castle`: Matahachi abandons the assassination, tries to remove the undelivered musket, escapes confinement and is caught digging by Takuan. — fisici: Hon'den Matahachi, Takuan Sōhō; menzionati: Tokugawa Hidetada, Daizō of Narai. Evidenza: explicit; data/source/book6/chapter14-land-of-dreams.txt:L1-L223.
- `b6c14-e02` — **identity_reveal** @ `edo_castle`: Takuan reveals that Daizō is Mizoguchi Shinano and shaves Matahachi's head. — fisici: Takuan Sōhō, Hon'den Matahachi; menzionati: Daizō of Narai. Evidenza: explicit; data/source/book6/chapter14-land-of-dreams.txt:L224-L292.
- `b6c14-e04` — **release_report**: A retainer reports that Musashi has already been released on Lord Sakai’s instructions after the shrine-treasure misunderstanding was cleared, and handed over to Gonnosuke. This is separate from Hidetada’s later judgment. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Shinmen Takezō, Musō Gonnosuke. Evidenza: explicit; data/source/book6/chapter14-land-of-dreams.txt:L245-L254.
- `b6c14-e03` — **judgment** @ `edo_castle`: After Musashi’s separate release has been reported, Hidetada accepts Takuan’s counsel for constructive government, approves lenient penalties for the conspiracy and looks favorably on Musashi as a tutor. — fisici: Tokugawa Hidetada, Sakai Tadakatsu, Hōjō Ujikatsu, Takuan Sōhō; menzionati: Hon'den Matahachi, Akemi, Shinmen Takezo, Musō Gonnosuke. Evidenza: explicit; data/source/book6/chapter14-land-of-dreams.txt:L261-L291.
- `b6c14-e05` — **punishment_and_banishment** @ `otemachi_prison`: Matahachi and Akemi are lashed and banished from Edo rather than executed; both remain alive after punishment. — fisici: Hon'den Matahachi, Akemi. Evidenza: explicit; data/source/book6/chapter14-land-of-dreams.txt:L361-L435.
- `b6c14-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Jōtarō, Yagyū Munenori, Oko, Otsu, Yagyū Sekishūsai, Tokugawa Ieyasu. Evidenza: explicit; data/source/book6/chapter14-land-of-dreams.txt.

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Mizoguchi Shinano (`daizo`), Miyamoto Musashi (`musashi`), Musō Gonnosuke (`gonnosuke`), Jōtarō (`jotaro`), Yagyū Munenori (`munenori`), Oko (`oko`), Otsu (`otsu`), Yagyū Sekishūsai (`sekishusai`), Tokugawa Ieyasu (`tokugawa_ieyasu`).

### 94. The Challenge (b6c15)

Fonte: `data/source/book6/chapter15-the-challenge.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Miyamoto Musashi (`musashi`) | scena: `musashino_cabin` | `musashino_cabin`; present; With Gonnosuke after receiving Kojirō's challenge. (explicit; data/source/book6/chapter15-the-challenge.txt:L270-L305) | Canoniche: Obaba Osugi: enemy/family_conflict_and_pursuit; Sasaki Kojirō: rival/first_encounter_and_mutual_martial_interest; Misawa Iori: master/teacher_and_practical_guardian; Musō Gonnosuke: friend_ally/combat_ally_and_advocate<br>Co-azioni: Musō Gonnosuke, Misawa Iori |
| Sasaki Kojirō (`kojiro`) | scena: `nobidome` | Nessuno stato finale strutturato | Canoniche: Miyamoto Musashi: rival/first_encounter_and_mutual_martial_interest; Obaba Osugi: friend_ally/self_appointed_second_in_revenge_plot<br>Co-azioni: Obaba Osugi, Misawa Iori |
| Obaba Osugi (`osugi`) | scena: `nobidome` | Nessuno stato finale strutturato | Canoniche: Miyamoto Musashi: enemy/family_conflict_and_pursuit; Sasaki Kojirō: friend_ally/self_appointed_second_in_revenge_plot<br>Co-azioni: Sasaki Kojirō, Misawa Iori |
| Musō Gonnosuke (`gonnosuke`) | scena: `musashino_cabin` | Nessuno stato finale strutturato | Canoniche: Miyamoto Musashi: friend_ally/combat_ally_and_advocate<br>Co-azioni: Miyamoto Musashi, Misawa Iori |
| Hōjō Shinzō (`hojo_shinzo`) | Presenza attestata dal dossier; nessuna tappa evento dedicata | Nessuno stato finale strutturato | Nessuna relazione/co-azione strutturata nel capitolo |
| Misawa Iori (`iori`) | scena: `nobidome`; scena: `musashino_cabin`; percorso (confirmed_route): `musashino_cabin` → `hojo_ushigome` | luogo non risolto; in_transit; Riding toward the Hōjō residence. (explicit; data/source/book6/chapter15-the-challenge.txt:L280-L305) | Canoniche: Miyamoto Musashi: master/teacher_and_practical_guardian<br>Co-azioni: Miyamoto Musashi, Sasaki Kojirō, Obaba Osugi, Musō Gonnosuke |

Azioni ed evidenza:

- `b6c15-e01` — **challenge_delivery** @ `nobidome`: Iori meets the Hosokawa advance party; Kojirō writes a life-and-death challenge for him to carry to Musashi. — fisici: Misawa Iori, Sasaki Kojiro, Matahachi's mother. Evidenza: explicit; data/source/book6/chapter15-the-challenge.txt:L1-L175.
- `b6c15-e02` — **reunion** @ `musashino_cabin`: Iori finds Musashi and Gonnosuke, delivers the challenge, and returns with them to the cabin. — fisici: Misawa Iori, Shinmen Takezo, Musō Gonnosuke. Evidenza: explicit; data/source/book6/chapter15-the-challenge.txt:L176-L279.
- `b6c15-e03` — **departure** @ `musashino_cabin`: Next morning Iori rides to return the borrowed horse to the Hōjō household. — fisici: Misawa Iori. Evidenza: explicit; data/source/book6/chapter15-the-challenge.txt:L280-L305.
- `b6c15-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Fuchikawa Gonroku, Hōjō Ujikatsu, Hon'den Matahachi, Takuan Sōhō. Evidenza: explicit; data/source/book6/chapter15-the-challenge.txt.

Relazioni introdotte o rivelate qui:

- Sasaki Kojirō → Hosokawa Tadatoshi: **authority/hosokawa_vassal_and_lord** (soglia 94).

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Fuchikawa Gonroku (`gonroku`), Hōjō Ujikatsu (`hojo_ujikatsu`), Hon'den Matahachi (`matahachi`), Takuan Sōhō (`takuan`).

### 95. The Gateway to Glory (b6c16)

Fonte: `data/source/book6/chapter16-the-gateway-to-glory.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Miyamoto Musashi (`musashi`) | scena: `musashino_cabin`; scena: `wadakura_pavilion`; percorso (confirmed_route): `hojo_ushigome` → `wadakura_pavilion`; percorso (confirmed_route): `wadakura_pavilion` | luogo non risolto; in_transit; Departed the pavilion after the appointment's cancellation. (explicit; data/source/book6/chapter16-the-gateway-to-glory.txt:L270-L283) | Canoniche: Takuan Sōhō: master/spiritual_and_moral_guide; Misawa Iori: master/teacher_and_practical_guardian; Musō Gonnosuke: friend_ally/combat_ally_and_advocate<br>Co-azioni: Musō Gonnosuke, Hōjō Shinzō, Sakai Tadakatsu |
| Takuan Sōhō (`takuan`) | Presenza attestata dal dossier; nessuna tappa evento dedicata | Nessuno stato finale strutturato | Canoniche: Miyamoto Musashi: master/spiritual_and_moral_guide |
| Musō Gonnosuke (`gonnosuke`) | scena: `musashino_cabin` | Nessuno stato finale strutturato | Canoniche: Miyamoto Musashi: friend_ally/combat_ally_and_advocate<br>Co-azioni: Miyamoto Musashi, Hōjō Shinzō |
| Hōjō Shinzō (`hojo_shinzo`) | scena: `musashino_cabin` | Nessuno stato finale strutturato | Co-azioni: Miyamoto Musashi, Musō Gonnosuke |
| Misawa Iori (`iori`) | Presenza attestata dal dossier; nessuna tappa evento dedicata | Nessuno stato finale strutturato | Canoniche: Miyamoto Musashi: master/teacher_and_practical_guardian |
| Hōjō Ujikatsu (`hojo_ujikatsu`) | Presenza attestata dal dossier; nessuna tappa evento dedicata | Nessuno stato finale strutturato | Nessuna relazione/co-azione strutturata nel capitolo |
| Sakai Tadakatsu (`sakai_tadakatsu`) | scena: `wadakura_pavilion` | `wadakura_pavilion`; present; Examining Musashi's painting. (explicit; data/source/book6/chapter16-the-gateway-to-glory.txt:L270-L283) | Co-azioni: Miyamoto Musashi |

Azioni ed evidenza:

- `b6c16-e01` — **summons** @ `musashino_cabin`: Shinzō brings the official summons to Musashi and Gonnosuke at the cabin; Iori is at the Hōjō household. — fisici: Hōjō Shinzō, Shinmen Takezo, Musō Gonnosuke; menzionati: Misawa Iori. Evidenza: explicit; data/source/book6/chapter16-the-gateway-to-glory.txt:L127-L138.
- `b6c16-e04` — **appointment_journey** @ `wadakura_pavilion`: Musashi travels from the Hōjō household at Ushigome to Wadakura in response to the summons; the previous evening’s cabin-to-Hōjō journey is separate. — fisici: Shinmen Takezō. Evidenza: explicit; data/source/book6/chapter16-the-gateway-to-glory.txt:L139-L176.
- `b6c16-e02` — **appointment_canceled** @ `wadakura_pavilion`: Sakai tells Musashi the appointment has been canceled after a sudden change and adverse reports; Musashi expresses relief. — fisici: Shinmen Takezō, Sakai Tadakatsu. Evidenza: explicit; data/source/book6/chapter16-the-gateway-to-glory.txt:L125-L231.
- `b6c16-e03` — **artwork** @ `wadakura_pavilion`: At Sakai's request Musashi paints a Musashino sunrise as a wordless statement of his character. — fisici: Shinmen Takezō, Sakai Tadakatsu. Evidenza: explicit; data/source/book6/chapter16-the-gateway-to-glory.txt:L232-L283.
- `b6c16-e05` — **departure**: After finishing the painting, Musashi leaves the pavilion for an unstated destination. — fisici: Shinmen Takezō; menzionati: Sakai Tadakatsu. Evidenza: explicit; data/source/book6/chapter16-the-gateway-to-glory.txt:L271-L283.
- `b6c16-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Sasaki Kojiro, Obata Kagenori, Obata Yogorō, Matahachi's mother. Evidenza: explicit; data/source/book6/chapter16-the-gateway-to-glory.txt.

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Sasaki Kojirō (`kojiro`), Obata Kagenori (`obata_kagenori`), Obata Yogorō (`obata_yogoro`), Obaba Osugi (`osugi`).

### 96. The Sound of Heaven (b6c17)

Fonte: `data/source/book6/chapter17-the-sound-of-heaven.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Miyamoto Musashi (`musashi`) | scena: `musashino_cabin`; percorso (confirmed_route): `musashino_cabin` | luogo non risolto; in_transit; Departed alone for an unspecified mountain journey. (explicit; data/source/book6/chapter17-the-sound-of-heaven.txt:L72-L93) | Canoniche: Takuan Sōhō: master/spiritual_and_moral_guide; Misawa Iori: master/teacher_and_practical_guardian; Musō Gonnosuke: friend_ally/combat_ally_and_advocate<br>Co-azioni: Musō Gonnosuke, Misawa Iori |
| Takuan Sōhō (`takuan`) | scena: `hojo_ushigome`; scena: `musashino_cabin` | Nessuno stato finale strutturato | Canoniche: Miyamoto Musashi: master/spiritual_and_moral_guide<br>Co-azioni: Musō Gonnosuke, Hōjō Shinzō, Misawa Iori, Hōjō Ujikatsu |
| Musō Gonnosuke (`gonnosuke`) | scena: `musashino_cabin`; scena: `hojo_ushigome` | Nessuno stato finale strutturato | Canoniche: Miyamoto Musashi: friend_ally/combat_ally_and_advocate<br>Co-azioni: Miyamoto Musashi, Takuan Sōhō, Hōjō Shinzō, Misawa Iori, Hōjō Ujikatsu |
| Hōjō Shinzō (`hojo_shinzo`) | scena: `hojo_ushigome`; scena: `musashino_cabin` | Nessuno stato finale strutturato | Co-azioni: Takuan Sōhō, Musō Gonnosuke, Misawa Iori, Hōjō Ujikatsu |
| Misawa Iori (`iori`) | scena: `musashino_cabin`; scena: `hojo_ushigome` | `musashino_cabin`; present; With Gonnosuke, Takuan and the Hōjō party; aware his sister may be found. (explicit; data/source/book6/chapter17-the-sound-of-heaven.txt:L152-L174) | Canoniche: Miyamoto Musashi: master/teacher_and_practical_guardian<br>Co-azioni: Miyamoto Musashi, Takuan Sōhō, Musō Gonnosuke, Hōjō Shinzō, Hōjō Ujikatsu |
| Hōjō Ujikatsu (`hojo_ujikatsu`) | scena: `hojo_ushigome`; scena: `musashino_cabin` | Nessuno stato finale strutturato | Co-azioni: Takuan Sōhō, Musō Gonnosuke, Hōjō Shinzō, Misawa Iori |

Azioni ed evidenza:

- `b6c17-e01` — **guardianship_decision** @ `musashino_cabin`: Musashi chooses further wandering, entrusts Iori and the father's pouch to Gonnosuke, and leaves a letter for Hōjō. — fisici: Shinmen Takezō, Musō Gonnosuke, Misawa Iori. Evidenza: explicit; data/source/book6/chapter17-the-sound-of-heaven.txt:L1-L93.
- `b6c17-e02` — **kinship_discovery** @ `hojo_ushigome`: Takuan decodes the pouch's clue: Iori's abandoned sister is linked to the single sound of Otsū's flute. — fisici: Musō Gonnosuke, Takuan Sōhō, Hōjō Ujikatsu, Hōjō Shinzō, Misawa Iori; menzionati: Otsu. Evidenza: strong_inference; data/source/book6/chapter17-the-sound-of-heaven.txt:L94-L151.
- `b6c17-e03` — **failed_pursuit** @ `musashino_cabin`: The group hurries to the cabin but finds Musashi already gone. — fisici: Musō Gonnosuke, Takuan Sōhō, Hōjō Ujikatsu, Hōjō Shinzō, Misawa Iori; menzionati: Shinmen Takezō. Evidenza: explicit; data/source/book6/chapter17-the-sound-of-heaven.txt:L152-L174.
- `b6c17-e04` — **departure**: Musashi leaves the cabin alone for an unspecified mountain journey. — fisici: Shinmen Takezō; menzionati: Musō Gonnosuke, Misawa Iori. Evidenza: explicit; data/source/book6/chapter17-the-sound-of-heaven.txt:L43-L83.
- `b6c17-audit-s02` — **government_doctrine_revision**: Musashi says the Way of the Sword and good government should ultimately align, but he now sees that governance requires a perfect blending of military and literary arts and that he still has much to learn from the country itself. — fisici: Shinmen Takezō, Musō Gonnosuke. Evidenza: explicit; data/source/book6/chapter17-the-sound-of-heaven.txt.
- `b6c17-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Obaba Osugi, San'emon. Evidenza: explicit; data/source/book6/chapter17-the-sound-of-heaven.txt.

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Otsu (`otsu`), Obaba Osugi (`osugi`), San'emon (`sanemon`).

## Libro VII — The Perfect Light

### 97. The Runaway Ox (b7c1)

Fonte: `data/source/book7/chapter1-the-runaway-ox.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Otsu (`otsu`) | scena: `tsukigase_route`; percorso (confirmed_route): `koyagyu_castle` → `tsukigase_route`; percorso (confirmed_route): `tsukigase_route`; scena: `hannya_plain` | `hannya_plain`; present; Safe near Hannya Plain after Toranosuke stops the runaway ox. (explicit; data/source/book7/chapter1-the-runaway-ox.txt) | Canoniche: Kimura Sukekurō: friend_ally/rescuer_and_protector_reported_retrospectively; Yagyū Hyōgo: friend_ally/protective_friendship_unreciprocated_affection_not_inferred<br>Co-azioni: Kimura Sukekurō, Hamada Toranosuke, Ushinosuke |
| Hōzōin Inshun (`inshun`) | scena: `koyagyu_castle` | Nessuno stato finale strutturato | Co-azioni: Kimura Sukekurō, Yagyū Hyōgo |
| Kimura Sukekurō (`kimura_sukekuro`) | scena: `koyagyu_castle`; scena: `hannya_plain` | Nessuno stato finale strutturato | Canoniche: Otsu: friend_ally/rescuer_and_protector_reported_retrospectively<br>Co-azioni: Otsu, Hōzōin Inshun, Yagyū Hyōgo, Hamada Toranosuke |
| Yagyū Hyōgo (`yagyu_hyogo`) | scena: `koyagyu_castle` | `koyagyu_castle`; present; At Koyagyū after the Tsukigase dispute is clarified. (explicit; data/source/book7/chapter1-the-runaway-ox.txt) | Canoniche: Otsu: friend_ally/protective_friendship_unreciprocated_affection_not_inferred<br>Co-azioni: Hōzōin Inshun, Kimura Sukekurō |
| Hamada Toranosuke (`hamada_toranosuke`) | scena: `hannya_plain` | luogo non risolto; in_transit; Alive, traveling under the Torazō concealment after rescuing Otsū; exact subsequent location unknown. (explicit; data/source/book7/chapter1-the-runaway-ox.txt) | Co-azioni: Otsu, Kimura Sukekurō |
| Ushinosuke (`ushinosuke`) | scena: `tsukigase_route`; percorso (confirmed_route): `koyagyu_castle` → `tsukigase_route`; percorso (confirmed_route): `tsukigase_route` | Nessuno stato finale strutturato | Co-azioni: Otsu |

Azioni ed evidenza:

- `b7c1-e01` — **visit_and_warning** @ `koyagyu_castle`: Inshun visits Koyagyū and raises an alleged encroachment near Tsukigase while seeking Hyōgo's measure as a fighter. — fisici: Hōzōin Inshun, Kimura Sukekurō, Yagyū Hyōgo. Evidenza: explicit; data/source/book7/chapter1-the-runaway-ox.txt.
- `b7c1-e02` — **unauthorized_excursion** @ `tsukigase_route`: Otsū leaves with Ushinosuke and the ox to see the blossoms without notifying the household. — fisici: Otsu, Ushinosuke. Evidenza: explicit; data/source/book7/chapter1-the-runaway-ox.txt.
- `b7c1-e03` — **assault_and_escape** @ `tsukigase_route`: Three rōnin threaten Otsū; Ushinosuke fights them, accidentally cuts the ox, and the animal bolts carrying Otsū. — fisici: Otsu, Ushinosuke. Evidenza: explicit; data/source/book7/chapter1-the-runaway-ox.txt.
- `b7c1-e04` — **rescue** @ `hannya_plain`: Toranosuke stops the runaway ox and Sukekurō reaches Otsū near the Kasagi road. — fisici: Otsu, Hamada Toranosuke, Kimura Sukekurō. Evidenza: explicit; data/source/book7/chapter1-the-runaway-ox.txt.
- `b7c1-e05` — **identity_disclosure** @ `hannya_plain`: Sukekurō recognizes Torazō as Hamada Toranosuke; Toranosuke explains the rōnin are expelled men, not Tōdō troops, and conceals himself because of Ono Tadaaki's disgrace. — fisici: Hamada Toranosuke, Kimura Sukekurō. Evidenza: explicit; data/source/book7/chapter1-the-runaway-ox.txt.
- `b7c1-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Kakuzenbō Hōzōin In'ei, Jōtarō, Sasaki Kojiro, Ono Tadaaki, Yagyū Munenori, Yagyū Sekishūsai. Evidenza: explicit; data/source/book7/chapter1-the-runaway-ox.txt.

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Kakuzenbō Hōzōin In'ei (`in_ei`), Jōtarō (`jotaro`), Sasaki Kojirō (`kojiro`), Ono Tadaaki (`mikogami_tenzen`), Yagyū Munenori (`munenori`), Yagyū Sekishūsai (`sekishusai`).

### 98. Hemp Seed (b7c2)

Fonte: `data/source/book7/chapter2-hemp-seed.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Otsu (`otsu`) | scena: `koyagyu_castle`; percorso (confirmed_route): `koyagyu_castle` | Nessuno stato finale strutturato | Canoniche: Kimura Sukekurō: friend_ally/rescuer_and_protector_reported_retrospectively; Yagyū Hyōgo: friend_ally/protective_friendship_unreciprocated_affection_not_inferred<br>Co-azioni: Yagyū Hyōgo |
| Kimura Sukekurō (`kimura_sukekuro`) | scena: `kofukuji` | Nessuno stato finale strutturato | Canoniche: Otsu: friend_ally/rescuer_and_protector_reported_retrospectively<br>Co-azioni: Musō Gonnosuke, Misawa Iori, Yagyū Hyōgo, Ushinosuke, Nankōbō, Daun, Mountain priest |
| Musō Gonnosuke (`gonnosuke`) | scena: `kofukuji` | `kofukuji`; present; With Iori after de-escalating the boys' fight. (explicit; data/source/book7/chapter2-hemp-seed.txt) | Canoniche: Misawa Iori: master/guardian_teacher_and_child_companion (introdotta qui)<br>Co-azioni: Kimura Sukekurō, Misawa Iori, Ushinosuke |
| Misawa Iori (`iori`) | scena: `kofukuji` | `kofukuji`; present; Reconciled with Ushinosuke after their contest. (explicit; data/source/book7/chapter2-hemp-seed.txt) | Canoniche: Musō Gonnosuke: master/guardian_teacher_and_child_companion (introdotta qui)<br>Co-azioni: Kimura Sukekurō, Musō Gonnosuke, Ushinosuke |
| Yagyū Hyōgo (`yagyu_hyogo`) | scena: `koyagyu_castle`; percorso (confirmed_route): `koyagyu_castle`; scena: `koyagyu_dojo`; scena: `uji_road`; percorso (confirmed_route): `koyagyu_castle` → `uji_road` → `koyagyu_castle`; scena: `kofukuji` | `koyagyu_castle`; present; Alive and based at Koyagyū, having accepted Ushinosuke as a pupil and stated an intention to serve the Owari Tokugawa in Nagoya. (explicit; data/source/book7/chapter2-hemp-seed.txt) | Canoniche: Otsu: friend_ally/protective_friendship_unreciprocated_affection_not_inferred; Ushinosuke: master/teacher_and_accepted_pupil (introdotta qui)<br>Co-azioni: Otsu, Kimura Sukekurō, Ushinosuke, Nankōbō, Daun, Mountain priest |
| Ushinosuke (`ushinosuke`) | scena: `koyagyu_dojo`; scena: `kofukuji` | `koyagyu_dojo`; present; Alive at the Yagyū orbit as Hyōgo's accepted pupil. (explicit; data/source/book7/chapter2-hemp-seed.txt) | Canoniche: Yagyū Hyōgo: master/teacher_and_accepted_pupil (introdotta qui)<br>Co-azioni: Kimura Sukekurō, Musō Gonnosuke, Misawa Iori, Yagyū Hyōgo, Nankōbō, Daun, Mountain priest |
| Nankōbō (`nankobo`) | scena: `kofukuji` | Nessuno stato finale strutturato | Co-azioni: Kimura Sukekurō, Yagyū Hyōgo, Ushinosuke, Daun, Mountain priest |
| Daun (`daun`) | scena: `kofukuji` | Nessuno stato finale strutturato | Co-azioni: Kimura Sukekurō, Yagyū Hyōgo, Ushinosuke, Nankōbō, Mountain priest |
| Mountain priest (`toriumi_benzo`) | scena: `kofukuji` | Nessuno stato finale strutturato | Co-azioni: Kimura Sukekurō, Yagyū Hyōgo, Ushinosuke, Nankōbō, Daun |

Azioni ed evidenza:

- `b7c2-e01` — **departure** @ `koyagyu_castle`: After reading Takuan's old letter, Otsū insists on leaving for Edo the next morning and declines Hyōgo's escort. — fisici: Otsu, Yagyū Hyōgo. Evidenza: explicit; data/source/book7/chapter2-hemp-seed.txt.
- `b7c2-e02` — **training_test** @ `koyagyu_dojo`: Hyōgo tests Ushinosuke and accepts his request for training, using hemp-seed jumping to explain gradual skill. — fisici: Yagyū Hyōgo, Ushinosuke. Evidenza: explicit; data/source/book7/chapter2-hemp-seed.txt.
- `b7c2-e03` — **aborted_pursuit** @ `uji_road`: Hyōgo rides toward Uji after news that Musashi's appointment was canceled, then turns back rather than impose the news on Otsū. — fisici: Yagyū Hyōgo. Evidenza: explicit; data/source/book7/chapter2-hemp-seed.txt.
- `b7c2-e04` — **tournament** @ `kofukuji`: At the Kōfukuji field tournament Nankōbō defeats Daun and refuses to fight an unidentified mountain priest. — fisici: Yagyū Hyōgo, Kimura Sukekurō, Ushinosuke, Nankōbō, Daun, Toriumi Benzō. Evidenza: explicit; data/source/book7/chapter2-hemp-seed.txt.
- `b7c2-e05` — **boys_duel_and_reconciliation** @ `kofukuji`: Ushinosuke takes Iori's reed mat, defeats him near the pagoda, and the adults de-escalate; the boys reconcile through a potato contest. — fisici: Ushinosuke, Misawa Iori, Musō Gonnosuke, Kimura Sukekurō. Evidenza: explicit; data/source/book7/chapter2-hemp-seed.txt.
- `b7c2-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Ono Tadaaki, Yagyū Munenori, Shinmen Takezo, Yagyū Sekishūsai, Takuan Sōhō. Evidenza: explicit; data/source/book7/chapter2-hemp-seed.txt.

Relazioni introdotte o rivelate qui:

- Musō Gonnosuke → Misawa Iori: **master/guardian_teacher_and_child_companion** (soglia 98).
- Yagyū Hyōgo → Ushinosuke: **master/teacher_and_accepted_pupil** (soglia 98).

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Ono Tadaaki (`mikogami_tenzen`), Yagyū Munenori (`munenori`), Miyamoto Musashi (`musashi`), Yagyū Sekishūsai (`sekishusai`), Takuan Sōhō (`takuan`).

### 99. Sweepers and Salesmen (b7c3)

Fonte: `data/source/book7/chapter3-sweepers-and-salesmen.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Hon’ami Kōetsu (`koetsu`) | scena: `kongoji` | Nessuno stato finale strutturato | Canoniche: Myōshū: family/son_and_mother<br>Co-azioni: Myōshū, Musō Gonnosuke, Misawa Iori |
| Myōshū (`myoshu`) | scena: `kongoji` | Nessuno stato finale strutturato | Canoniche: Hon’ami Kōetsu: family/son_and_mother<br>Co-azioni: Hon’ami Kōetsu, Musō Gonnosuke, Misawa Iori |
| Musō Gonnosuke (`gonnosuke`) | scena: `kongoji`; scena: `amami_plateau`; percorso (uncertain_route): `amami_plateau` | `amami_plateau`; captured; Bound by the false cord merchants after Iori falls away. (explicit; data/source/book7/chapter3-sweepers-and-salesmen.txt) | Canoniche: Misawa Iori: master/guardian_teacher_and_child_companion<br>Co-azioni: Hon’ami Kōetsu, Myōshū, Misawa Iori, Mountain priest, Oan, Tōroku, Sugizō, Gensuke |
| Misawa Iori (`iori`) | scena: `kongoji`; scena: `amami_plateau`; percorso (uncertain_route): `amami_plateau` | luogo non risolto; unknown; Separated after falling into the gully during the ambush. (explicit; data/source/book7/chapter3-sweepers-and-salesmen.txt) | Canoniche: Musō Gonnosuke: master/guardian_teacher_and_child_companion<br>Co-azioni: Hon’ami Kōetsu, Myōshū, Musō Gonnosuke, Mountain priest, Oan, Tōroku, Sugizō, Gensuke |
| Mountain priest (`toriumi_benzo`) | scena: `amami_plateau` | Nessuno stato finale strutturato | Co-azioni: Musō Gonnosuke, Misawa Iori |
| Oan (`oan`) | scena: `kongoji` | Nessuno stato finale strutturato | Canoniche: Tōroku: partner_family/husband_and_wife (introdotta qui)<br>Co-azioni: Musō Gonnosuke, Misawa Iori, Tōroku |
| Tōroku (`toroku`) | scena: `kongoji` | Nessuno stato finale strutturato | Canoniche: Oan: partner_family/husband_and_wife (introdotta qui)<br>Co-azioni: Musō Gonnosuke, Misawa Iori, Oan |
| Sugizō (`sugizo`) | scena: `amami_plateau`; percorso (uncertain_route): `amami_plateau` | Nessuno stato finale strutturato | Co-azioni: Musō Gonnosuke, Misawa Iori, Gensuke |
| Gensuke (`gensuke`) | scena: `amami_plateau`; percorso (uncertain_route): `amami_plateau` | Nessuno stato finale strutturato | Co-azioni: Musō Gonnosuke, Misawa Iori, Sugizō |

Azioni ed evidenza:

- `b7c3-e01` — **memorial_visit** @ `kongoji`: Gonnosuke visits Kongōji through Oan and Tōroku and commissions a memorial service for his deceased mother. — fisici: Musō Gonnosuke, Misawa Iori, Oan, Tōroku. Evidenza: explicit; data/source/book7/chapter3-sweepers-and-salesmen.txt.
- `b7c3-e02` — **encounter** @ `kongoji`: Gonnosuke and Iori meet Kōetsu and Myōshū sweeping the temple grounds and discuss Musashi and the place's history. — fisici: Musō Gonnosuke, Misawa Iori, Hon’ami Kōetsu, Myōshū. Evidenza: explicit; data/source/book7/chapter3-sweepers-and-salesmen.txt.
- `b7c3-e03` — **attack_repulsed** @ `amami_plateau`: The pursuing mountain priest attacks at a bridge; Iori strikes his eye with a stone and he retreats. — fisici: Musō Gonnosuke, Misawa Iori, Toriumi Benzō. Evidenza: explicit; data/source/book7/chapter3-sweepers-and-salesmen.txt.
- `b7c3-e04` — **ambush_and_capture** @ `amami_plateau`: False cord merchants rig a log bridge and ambush Gonnosuke as an alleged Hōjō spy; Iori drops into the gully and Gonnosuke is bound. — fisici: Musō Gonnosuke, Misawa Iori, Sugizō, Gensuke. Evidenza: explicit; data/source/book7/chapter3-sweepers-and-salesmen.txt.
- `b7c3-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Hōjō Ujikatsu, Kimura Sukekurō, Shinmen Takezo, Otsu, Toyotomi Hideyoshi, Yagyū Hyōgo. Evidenza: explicit; data/source/book7/chapter3-sweepers-and-salesmen.txt.

Relazioni introdotte o rivelate qui:

- Tōroku → Oan: **partner_family/husband_and_wife** (soglia 99).

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Hōjō Ujikatsu (`hojo_ujikatsu`), Kimura Sukekurō (`kimura_sukekuro`), Miyamoto Musashi (`musashi`), Otsu (`otsu`), Toyotomi Hideyoshi (`toyotomi_hideyoshi`), Yagyū Hyōgo (`yagyu_hyogo`).

### 100. A Pear Blossom (b7c4)

Fonte: `data/source/book7/chapter4-a-pear-blossom.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Musō Gonnosuke (`gonnosuke`) | scena: `kamuro` | `kamuro`; captured; Alive but bound at Kamuro while the spy accusation is suppressed. (explicit; data/source/book7/chapter4-a-pear-blossom.txt) | Co-azioni: Nagaoka Sado, Toriumi Benzō, Nuinosuke, Sanada Daisuke |
| Nagaoka Sado (`nagaoka_sado`) | scena: `mount_koya`; percorso (confirmed_route): `mount_koya` → `mount_kudo`; scena: `mount_kudo`; scena: `kamuro` | `kamuro`; present; Present when the captive Gonnosuke is brought before Daisuke. (explicit; data/source/book7/chapter4-a-pear-blossom.txt) | Co-azioni: Musō Gonnosuke, Toriumi Benzō, Nuinosuke, Sanada Daisuke, Sanada Yukimura |
| Toriumi Benzō (`toriumi_benzo`) | scena: `kamuro` | Nessuno stato finale strutturato | Canoniche: Sanada Yukimura: authority/lord_and_leading_retainer (introdotta qui)<br>Co-azioni: Musō Gonnosuke, Nagaoka Sado, Nuinosuke, Sanada Daisuke |
| Nuinosuke (`nuinosuke`) | scena: `mount_koya`; percorso (confirmed_route): `mount_koya` → `mount_kudo`; scena: `kamuro` | Nessuno stato finale strutturato | Co-azioni: Musō Gonnosuke, Nagaoka Sado, Toriumi Benzō, Sanada Daisuke |
| Sanada Daisuke (`sanada_daisuke`) | scena: `mount_koya`; percorso (confirmed_route): `mount_koya` → `mount_kudo`; scena: `mount_kudo`; scena: `kamuro` | Nessuno stato finale strutturato | Co-azioni: Musō Gonnosuke, Nagaoka Sado, Toriumi Benzō, Nuinosuke, Sanada Yukimura |
| Daisuke's unnamed wife (`daisuke_wife`) | Presenza attestata dal dossier; nessuna tappa evento dedicata | Nessuno stato finale strutturato | Nessuna relazione/co-azione strutturata nel capitolo |
| Sanada Yukimura (`sanada_yukimura`) | scena: `mount_kudo` | Nessuno stato finale strutturato | Canoniche: Toriumi Benzō: authority/lord_and_leading_retainer (introdotta qui)<br>Co-azioni: Nagaoka Sado, Sanada Daisuke |

Azioni ed evidenza:

- `b7c4-e01` — **departure_and_invitation** @ `mount_koya`: Sado and Nuinosuke leave Mount Kōya; Daisuke invites them to Yukimura's Mount Kudo residence. — fisici: Nagaoka Sado, Nuinosuke, Sanada Daisuke. Evidenza: explicit; data/source/book7/chapter4-a-pear-blossom.txt.
- `b7c4-e02` — **political_conversation** @ `mount_kudo`: Sado and Yukimura discuss loyalty, Gudō, Musashi and the Hosokawa position while Sado remains wary of Osaka alignment. — fisici: Nagaoka Sado, Sanada Yukimura, Sanada Daisuke. Evidenza: explicit; data/source/book7/chapter4-a-pear-blossom.txt.
- `b7c4-e03` — **captive_arrival** @ `kamuro`: Benzō arrives at Kamuro leading the bound Gonnosuke and calls him an Edo spy; Daisuke suppresses the accusation in Sado's presence. — fisici: Sanada Daisuke, Toriumi Benzō, Musō Gonnosuke, Nagaoka Sado, Nuinosuke. Evidenza: explicit; data/source/book7/chapter4-a-pear-blossom.txt.
- `b7c4-e04` — **identity_reconciliation** @ `kamuro`: The narrative explicitly identifies Rinshōbō, the mountain priest, as Toriumi Benzō, a leading Yukimura retainer. — fisici: Sanada Daisuke, Toriumi Benzō. Evidenza: explicit; data/source/book7/chapter4-a-pear-blossom.txt.
- `b7c4-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Gudō, Hosokawa Tadatoshi, Shinmen Takezo, Toyotomi Hideyoshi. Evidenza: explicit; data/source/book7/chapter4-a-pear-blossom.txt.

Relazioni introdotte o rivelate qui:

- Sanada Yukimura → Toriumi Benzō: **authority/lord_and_leading_retainer** (soglia 100).

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Gudō (`gudo`), Hosokawa Tadatoshi (`hosokawa_tadatoshi`), Miyamoto Musashi (`musashi`), Toyotomi Hideyoshi (`toyotomi_hideyoshi`).

### 101. The Port (b7c5)

Fonte: `data/source/book7/chapter5-the-port.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Otsu (`otsu`) | scena: `sakai_port` | Nessuno stato finale strutturato | Co-azioni: Misawa Iori |
| Sasaki Kojirō (`kojiro`) | scena: `sakai_port`; scena: `tatsumimaru`; percorso (confirmed_route): `sakai_port` | luogo non risolto; in_transit; Sailing with the Hosokawa party toward Kokura. (explicit; data/source/book7/chapter5-the-port.txt) | Co-azioni: Misawa Iori, Nagaoka Sado, Nuinosuke |
| Misawa Iori (`iori`) | scena: `kishiwada`; percorso (confirmed_route): `kishiwada`; scena: `sakai_port`; scena: `tatsumimaru`; percorso (confirmed_route): `sakai_port` | luogo non risolto; in_transit; Sailing from Sakai with Sado's household toward Kokura. (explicit; data/source/book7/chapter5-the-port.txt) | Canoniche: Nagaoka Sado: authority/household_patron_and_ward (introdotta qui)<br>Co-azioni: Otsu, Sasaki Kojirō, Nagaoka Sado, Nuinosuke, Osei, Otsuru, Sahei |
| Nagaoka Sado (`nagaoka_sado`) | scena: `sakai_port`; scena: `tatsumimaru`; percorso (confirmed_route): `sakai_port` | Nessuno stato finale strutturato | Canoniche: Misawa Iori: authority/household_patron_and_ward (introdotta qui)<br>Co-azioni: Sasaki Kojirō, Misawa Iori, Nuinosuke, Osei |
| Nuinosuke (`nuinosuke`) | scena: `sakai_port`; scena: `tatsumimaru`; percorso (confirmed_route): `sakai_port` | Nessuno stato finale strutturato | Co-azioni: Sasaki Kojirō, Misawa Iori, Nagaoka Sado |
| Osei (`osei`) | scena: `kishiwada`; percorso (confirmed_route): `kishiwada`; scena: `sakai_port` | Nessuno stato finale strutturato | Co-azioni: Misawa Iori, Nagaoka Sado, Otsuru, Sahei |
| Otsuru (`otsuru`) | scena: `kishiwada`; percorso (confirmed_route): `kishiwada`; scena: `sakai_port` | Nessuno stato finale strutturato | Co-azioni: Misawa Iori, Osei, Sahei |
| Sahei (`sahei`) | scena: `sakai_port` | Nessuno stato finale strutturato | Co-azioni: Misawa Iori, Osei, Otsuru |
| Namban'ya (`nambanya`) | Presenza attestata dal dossier; nessuna tappa evento dedicata | Nessuno stato finale strutturato | Nessuna relazione/co-azione strutturata nel capitolo |

Azioni ed evidenza:

- `b7c5-e01` — **rescue_and_travel** @ `kishiwada`: Injured and separated from Gonnosuke, Iori meets Osei and Otsuru, descends to Kishiwada and crosses Osaka Bay with them. — fisici: Misawa Iori, Osei, Otsuru. Evidenza: explicit; data/source/book7/chapter5-the-port.txt.
- `b7c5-e02` — **work_and_punishment** @ `sakai_port`: Iori works at the Kobayashi establishment, fights Sahei over his sword and is tied outside as punishment. — fisici: Misawa Iori, Osei, Otsuru, Sahei. Evidenza: explicit; data/source/book7/chapter5-the-port.txt.
- `b7c5-e03` — **missed_recognition** @ `sakai_port`: Otsū walks past physically, but the gagged Iori cannot call effectively and she does not see him. — fisici: Misawa Iori, Otsu. Evidenza: explicit; data/source/book7/chapter5-the-port.txt.
- `b7c5-e04` — **assault_interrupted** @ `sakai_port`: Months later Iori recognizes and attacks Kojirō; Kojirō orders a boiling-water punishment before Sado's arrival halts the danger. — fisici: Misawa Iori, Sasaki Kojiro, Nagaoka Sado, Nuinosuke. Evidenza: explicit; data/source/book7/chapter5-the-port.txt.
- `b7c5-e05` — **adoption_into_household** @ `sakai_port`: Sado asks to take Iori to Kokura and train him as a samurai; Osei consents and Iori accepts. — fisici: Misawa Iori, Nagaoka Sado, Osei. Evidenza: explicit; data/source/book7/chapter5-the-port.txt.
- `b7c5-e06` — **sea_departure** @ `tatsumimaru`: Iori sails from Sakai aboard Tatsumimaru with the Hosokawa party for Kokura. — fisici: Misawa Iori, Nagaoka Sado, Nuinosuke, Sasaki Kojiro. Evidenza: explicit; data/source/book7/chapter5-the-port.txt.
- `b7c5-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Musō Gonnosuke, Kobayashi Tarōzaemon, Shinmen Takezo. Evidenza: explicit; data/source/book7/chapter5-the-port.txt.

Relazioni introdotte o rivelate qui:

- Nagaoka Sado → Misawa Iori: **authority/household_patron_and_ward** (soglia 101).

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Musō Gonnosuke (`gonnosuke`), Kobayashi Tarōzaemon (`kobayashi_tarozaemon`), Miyamoto Musashi (`musashi`).

### 102. The Writing Teacher (b7c6)

Fonte: `data/source/book7/chapter6-the-writing-teacher.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Muka (`musashi`) | scena: `okazaki_fish_district`; scena: `hachijoji`; scena: `yahagi_bridge`; scena: `honda_castle`; scena: `tokaido_west` | luogo non risolto; in_transit; Following west toward Kyoto after Gudō and Matahachi. (explicit; data/source/book7/chapter6-the-writing-teacher.txt) | Canoniche: Hon'den Matahachi: friend_ally/childhood_best_friend<br>Co-azioni: Hon'den Matahachi, Gudō, Watari Shima, Miyake Gumbei |
| Hon'den Matahachi (`matahachi`) | scena: `hachijoji`; scena: `tokaido_west` | luogo non risolto; in_transit; Walking west with Gudō toward Kyoto. (explicit; data/source/book7/chapter6-the-writing-teacher.txt) | Canoniche: Muka: friend_ally/childhood_best_friend<br>Co-azioni: Muka, Gudō |
| Gudō (`gudo`) | scena: `tokaido_west` | Nessuno stato finale strutturato | Co-azioni: Muka, Hon'den Matahachi |
| Watari Shima (`watari_shima`) | scena: `honda_castle` | Nessuno stato finale strutturato | Co-azioni: Muka, Miyake Gumbei |
| Miyake Gumbei (`miyake_gumbei`) | scena: `honda_castle` | Nessuno stato finale strutturato | Co-azioni: Muka, Watari Shima |

Azioni ed evidenza:

- `b7c6-e01` — **concealed_residence** @ `okazaki_fish_district`: Under the name Muka, Musashi has spent about a year teaching writing in Okazaki's fishmongers' district. — fisici: Shinmen Takezō. Evidenza: explicit; data/source/book7/chapter6-the-writing-teacher.txt.
- `b7c6-e02` — **reunion_and_confession** @ `hachijoji`: Musashi meets Matahachi, who repents, urges him to marry Otsū and says his earlier coercion did not result in sexual contact. — fisici: Shinmen Takezō, Hon'den Matahachi. Evidenza: explicit; data/source/book7/chapter6-the-writing-teacher.txt.
- `b7c6-e03` — **musket_ambush** @ `yahagi_bridge`: Honda/Yoshioka-connected men ambush Musashi with muskets before dawn; he kills two and one escapes. — fisici: Shinmen Takezō. Evidenza: explicit; data/source/book7/chapter6-the-writing-teacher.txt.
- `b7c6-e04` — **castle_demonstration** @ `honda_castle`: Watari Shima apologizes at the castle and Miyake Gumbei asks for instruction; Musashi demonstrates a two-weapons-as-one principle using muskets. — fisici: Shinmen Takezō, Watari Shima, Miyake Gumbei. Evidenza: explicit; data/source/book7/chapter6-the-writing-teacher.txt.
- `b7c6-e05` — **westward_departure** @ `tokaido_west`: Gudō refuses Musashi's plea with 'not one thing' and walks west with Matahachi; Musashi follows toward Kyoto. — fisici: Shinmen Takezō, Hon'den Matahachi, Gudō. Evidenza: explicit; data/source/book7/chapter6-the-writing-teacher.txt.
- `b7c6-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Sasaki Kojiro, Otsu, Takuan Sōhō, Yoshioka Kempō. Evidenza: explicit; data/source/book7/chapter6-the-writing-teacher.txt.

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Sasaki Kojirō (`kojiro`), Otsu (`otsu`), Takuan Sōhō (`takuan`), Yoshioka Kempō (`yoshioka_kempo`).

### 103. The Circle (b7c7)

Fonte: `data/source/book7/chapter7-the-circle.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Miyamoto Musashi (`musashi`) | scena: `daisenji`; percorso (confirmed_route): `daisenji` → `lake_biwa_temple`; scena: `lake_biwa_temple`; scena: `seta_hiei_route` | `seta_hiei_route`; present; Remains behind after ceasing to follow Gudō. (explicit; data/source/book7/chapter7-the-circle.txt) | Canoniche: Hon'den Matahachi: friend_ally/childhood_best_friend<br>Co-azioni: Hon'den Matahachi, Gudō |
| Hon'den Matahachi (`matahachi`) | scena: `daisenji`; percorso (confirmed_route): `daisenji` → `lake_biwa_temple`; scena: `lake_biwa_temple`; scena: `seta_hiei_route`; percorso (confirmed_route): `seta_hiei_route` | Nessuno stato finale strutturato | Canoniche: Miyamoto Musashi: friend_ally/childhood_best_friend<br>Co-azioni: Miyamoto Musashi, Gudō |
| Gudō (`gudo`) | scena: `daisenji`; percorso (confirmed_route): `daisenji` → `lake_biwa_temple`; scena: `lake_biwa_temple`; scena: `seta_hiei_route`; percorso (confirmed_route): `seta_hiei_route` | `seta_hiei_route`; present; Alive, continuing toward Kyoto with Matahachi at the end of his direct appearance. (explicit; data/source/book7/chapter7-the-circle.txt) | Co-azioni: Miyamoto Musashi, Hon'den Matahachi |

Azioni ed evidenza:

- `b7c7-e01` — **ascetic_following** @ `daisenji`: Musashi continues following Gudō and Matahachi through an austere stay at Daisenji and onward toward Hikone. — fisici: Shinmen Takezō, Hon'den Matahachi, Gudō. Evidenza: explicit; data/source/book7/chapter7-the-circle.txt.
- `b7c7-e02` — **testament_reading** @ `lake_biwa_temple`: At a Lake Biwa temple Musashi reads Daitō Kokushi's testament while Gudō continues to deny him a conventional lesson. — fisici: Shinmen Takezō, Hon'den Matahachi, Gudō. Evidenza: explicit; data/source/book7/chapter7-the-circle.txt.
- `b7c7-e03` — **circle_instruction** @ `seta_hiei_route`: On the pass Gudō draws a circle around Musashi and departs with Matahachi; Musashi moves from anger to insight about universe, self and sword. — fisici: Shinmen Takezō, Gudō, Hon'den Matahachi. Evidenza: explicit; data/source/book7/chapter7-the-circle.txt.
- `b7c7-e04` — **separation** @ `seta_hiei_route`: Musashi stops pursuing; Gudō and Matahachi prepare to continue toward Kyoto while Musashi's next route is unspecified. — fisici: Shinmen Takezō, Gudō, Hon'den Matahachi. Evidenza: explicit; data/source/book7/chapter7-the-circle.txt.
- `b7c7-e05` — **departure**: Gudō and Matahachi continue toward Kyoto; Musashi remains behind and does not share their route. — fisici: Gudō, Hon'den Matahachi; menzionati: Shinmen Takezō. Evidenza: explicit; data/source/book7/chapter7-the-circle.txt:L87-L133.
- `b7c7-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Otsu. Evidenza: explicit; data/source/book7/chapter7-the-circle.txt.

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Otsu (`otsu`).

### 104. Shikama Blue (b7c8)

Fonte: `data/source/book7/chapter8-shikama-blue.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Otsu (`otsu`) | scena: `shikama`; percorso (confirmed_route): `shikama` → `mikazuki_shrine`; scena: `mikazuki_shrine`; scena: `sayo_river`; scena: `mikazuki_inn`; percorso (intended_destination): `himeji_aoki` | `mikazuki_inn`; present; Reunited with Jōtarō and considering a journey to his Himeji home. (explicit; data/source/book7/chapter8-shikama-blue.txt) | Canoniche: Obaba Osugi: partner_family/future_daughter_in_law; Jōtarō: friend_ally/travel_companions_and_message_bearers<br>Co-azioni: Obaba Osugi, Jōtarō, Asaya Mambei |
| Obaba Osugi (`osugi`) | scena: `mikazuki_shrine`; scena: `mikazuki_cave` | `mikazuki_cave`; confined; Confined in the cave by Jōtarō. (explicit; data/source/book7/chapter8-shikama-blue.txt) | Canoniche: Otsu: partner_family/future_daughter_in_law<br>Co-azioni: Otsu, Jōtarō, Asaya Mambei |
| Jōtarō (`jotaro`) | scena: `shikama`; percorso (confirmed_route): `shikama` → `mikazuki_shrine`; scena: `mikazuki_cave`; scena: `sayo_river`; scena: `mikazuki_inn`; percorso (intended_destination): `himeji_aoki` | `mikazuki_inn`; present; Reunited with Otsū after defeating her captors. (explicit; data/source/book7/chapter8-shikama-blue.txt) | Canoniche: Otsu: friend_ally/travel_companions_and_message_bearers<br>Co-azioni: Otsu, Obaba Osugi, Asaya Mambei |
| Asaya Mambei (`asaya_mambei`) | scena: `shikama`; percorso (confirmed_route): `shikama` → `mikazuki_shrine`; scena: `mikazuki_shrine`; scena: `mikazuki_cave` | Nessuno stato finale strutturato | Co-azioni: Otsu, Obaba Osugi, Jōtarō |

Azioni ed evidenza:

- `b7c8-e01` — **residence_and_lure** @ `shikama`: Otsū works among Shikama dyers; Mambei falsely promises news through Musashi's sister and Jōtarō follows after recognizing her. — fisici: Otsu, Asaya Mambei, Jōtarō. Evidenza: explicit; data/source/book7/chapter8-shikama-blue.txt.
- `b7c8-e02` — **abduction** @ `mikazuki_shrine`: Mambei delivers Otsū to Osugi and Hon'iden men at Mikazuki shrine for payment. — fisici: Otsu, Asaya Mambei, Matahachi's mother. Evidenza: explicit; data/source/book7/chapter8-shikama-blue.txt.
- `b7c8-e03` — **intervention** @ `mikazuki_cave`: Jōtarō kills Mambei, reveals himself as Aoki Jōtarō, confines Osugi in the cave and obtains her written instruction for the captors. — fisici: Jōtarō, Asaya Mambei, Matahachi's mother. Evidenza: explicit; data/source/book7/chapter8-shikama-blue.txt.
- `b7c8-e04` — **rescue_fight** @ `sayo_river`: Jōtarō catches the captors, kills two and wounds others; Otsū frees herself and helps with stones before stopping pursuit. — fisici: Jōtarō, Otsu. Evidenza: explicit; data/source/book7/chapter8-shikama-blue.txt.
- `b7c8-e05` — **reunion_and_plan** @ `mikazuki_inn`: Otsū and Jōtarō reunite and agree to go to his Aoki home in Himeji after discussing the rumor of a Kokura duel. — fisici: Jōtarō, Otsu. Evidenza: explicit; data/source/book7/chapter8-shikama-blue.txt.
- `b7c8-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Aoki Tanzaemon, Sasaki Kojiro, Shinmen Takezo, Nagaoka Sado, Ogin, Takuan Sōhō. Evidenza: explicit; data/source/book7/chapter8-shikama-blue.txt.

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Aoki Tanzaemon (`aoki_tanzaemon`), Sasaki Kojirō (`kojiro`), Miyamoto Musashi (`musashi`), Nagaoka Sado (`nagaoka_sado`), Ogin (`ogin`), Takuan Sōhō (`takuan`).

### 105. The Mercy of Kannon (b7c9)

Fonte: `data/source/book7/chapter9-the-mercy-of-kannon.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Otsu (`otsu`) | scena: `mikazuki_inn`; percorso (confirmed_route): `mikazuki_inn` → `mikazuki_cave`; scena: `mikazuki_cave` | `mikazuki_cave`; present; Unconscious but alive while Osugi repents and calls for help. (explicit; data/source/book7/chapter9-the-mercy-of-kannon.txt) | Canoniche: Obaba Osugi: partner_family/future_daughter_in_law; Jōtarō: friend_ally/travel_companions_and_message_bearers<br>Co-azioni: Obaba Osugi |
| Obaba Osugi (`osugi`) | scena: `mikazuki_cave` | `mikazuki_cave`; present; Trying to save Otsū after recognizing her own cruelty. (explicit; data/source/book7/chapter9-the-mercy-of-kannon.txt) | Canoniche: Otsu: partner_family/future_daughter_in_law<br>Co-azioni: Otsu |
| Jōtarō (`jotaro`) | Presenza attestata dal dossier; nessuna tappa evento dedicata | Nessuno stato finale strutturato | Canoniche: Otsu: friend_ally/travel_companions_and_message_bearers |

Azioni ed evidenza:

- `b7c9-e01` — **solitary_return** @ `mikazuki_inn`: Otsū leaves the sleeping Jōtarō at the inn during the storm and returns alone toward the shrine. — fisici: Otsu. Evidenza: explicit; data/source/book7/chapter9-the-mercy-of-kannon.txt.
- `b7c9-e02` — **release** @ `mikazuki_cave`: Otsū frees Osugi from the cave despite Osugi's prior abduction attempt. — fisici: Otsu, Matahachi's mother. Evidenza: explicit; data/source/book7/chapter9-the-mercy-of-kannon.txt.
- `b7c9-e03` — **assault** @ `mikazuki_cave`: Osugi rejects Otsū's mercy, beats her unconscious, believes she has killed her and carries her into the cave. — fisici: Obaba Osugi, Otsu. Evidenza: explicit; data/source/book7/chapter9-the-mercy-of-kannon.txt.
- `b7c9-e04` — **repentance** @ `mikazuki_cave`: An old maternal inscription forces Osugi to recognize her cruelty; she repents and tries to save Otsū. — fisici: Obaba Osugi, Otsu. Evidenza: explicit; data/source/book7/chapter9-the-mercy-of-kannon.txt.
- `b7c9-e05` — **rescue_requested** @ `mikazuki_cave`: A Hon'iden search party arrives and Osugi orders them to aid the unconscious Otsū. — fisici: Obaba Osugi, Otsu. Evidenza: explicit; data/source/book7/chapter9-the-mercy-of-kannon.txt.
- `b7c9-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Hon'den Matahachi. Evidenza: explicit; data/source/book7/chapter9-the-mercy-of-kannon.txt.

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Hon'den Matahachi (`matahachi`).

### 106. The Tides of Life (b7c10)

Fonte: `data/source/book7/chapter10-the-tides-of-life.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Miyamoto Musashi (`musashi`) | scena: `sakai_port`; percorso (confirmed_route): `sakai_port` | luogo non risolto; in_transit; Aboard a westbound ship from Sakai toward Kokura. (explicit; data/source/book7/chapter10-the-tides-of-life.txt) | Canoniche: Hon'den Matahachi: friend_ally/childhood_best_friend; Hon’ami Kōetsu: acquaintance/tea_encounter_and_artistic_influence; Musō Gonnosuke: friend_ally/combat_ally_and_advocate<br>Co-azioni: Hon'den Matahachi, Hon’ami Kōetsu, Second Yoshino Tayū, Haiya Shōeki |
| Hon'den Matahachi (`matahachi`) | scena: `sakai_port`; scena: `osaka`; percorso (confirmed_route): `sakai_port` → `osaka` | luogo non risolto; in_transit; Following Akemi and choosing work and social fatherhood. (explicit; data/source/book7/chapter10-the-tides-of-life.txt) | Canoniche: Miyamoto Musashi: friend_ally/childhood_best_friend; Akemi: acquaintance/temporary_eastbound_travel_companions; Akemi: partner_family/chosen_family_and_cohabiting_partners (introdotta qui); Akemi's unnamed baby: family/social_fatherhood_biological_paternity_unconfirmed (introdotta qui)<br>Co-azioni: Miyamoto Musashi, Akemi, Hon’ami Kōetsu, Second Yoshino Tayū, Musō Gonnosuke, Akemi's unnamed baby, Haiya Shōeki |
| Akemi (`akemi`) | scena: `osaka` | Nessuno stato finale strutturato | Canoniche: Hon'den Matahachi: acquaintance/temporary_eastbound_travel_companions; Hon'den Matahachi: partner_family/chosen_family_and_cohabiting_partners (introdotta qui); Akemi's unnamed baby: family/mother_and_child (introdotta qui)<br>Co-azioni: Hon'den Matahachi, Hon’ami Kōetsu, Musō Gonnosuke, Akemi's unnamed baby |
| Hon’ami Kōetsu (`koetsu`) | scena: `sakai_port`; scena: `osaka`; percorso (confirmed_route): `sakai_port` → `osaka` | `osaka`; present; Alive in Osaka after accompanying Gonnosuke and receiving Matahachi's returned priestly garments. (explicit; data/source/book7/chapter10-the-tides-of-life.txt) | Canoniche: Miyamoto Musashi: acquaintance/tea_encounter_and_artistic_influence<br>Co-azioni: Miyamoto Musashi, Hon'den Matahachi, Akemi, Second Yoshino Tayū, Musō Gonnosuke, Akemi's unnamed baby, Haiya Shōeki |
| Second Yoshino Tayū (`yoshino_second`) | scena: `sakai_port` | Nessuno stato finale strutturato | Canoniche: Haiya Shōeki: family/wife_and_husband (introdotta qui)<br>Co-azioni: Miyamoto Musashi, Hon'den Matahachi, Hon’ami Kōetsu, Haiya Shōeki |
| Musō Gonnosuke (`gonnosuke`) | scena: `sakai_port`; scena: `osaka`; percorso (confirmed_route): `sakai_port` → `osaka` | Nessuno stato finale strutturato | Canoniche: Miyamoto Musashi: friend_ally/combat_ally_and_advocate<br>Co-azioni: Hon'den Matahachi, Akemi, Hon’ami Kōetsu, Akemi's unnamed baby |
| Akemi's unnamed baby (`akemi_baby`) | scena: `osaka` | Nessuno stato finale strutturato | Canoniche: Hon'den Matahachi: family/social_fatherhood_biological_paternity_unconfirmed (introdotta qui); Akemi: family/mother_and_child (introdotta qui)<br>Co-azioni: Hon'den Matahachi, Akemi, Hon’ami Kōetsu, Musō Gonnosuke |
| Haiya Shōeki (`haiya_shoeki`) | scena: `sakai_port` | Nessuno stato finale strutturato | Canoniche: Second Yoshino Tayū: family/wife_and_husband (introdotta qui)<br>Co-azioni: Miyamoto Musashi, Hon'den Matahachi, Hon’ami Kōetsu, Second Yoshino Tayū |

Azioni ed evidenza:

- `b7c10-e01` — **farewell_and_boarding** @ `sakai_port`: In early fourth month 1612 Musashi says farewell to the party, including Shōeki and his wife, the second Yoshino Tayū, and boards a regular westbound ship at Sakai. The narrator recalls the first Yoshino, whose whereabouts remain unknown. — fisici: Shinmen Takezō, Hon’ami Kōetsu, Hon'den Matahachi, Haiya Shōeki, Second Yoshino Tayū; menzionati: Yoshino Tayū, Haiya Shōyū. Evidenza: explicit; data/source/book7/chapter10-the-tides-of-life.txt:L4-L35.
- `b7c10-e02` — **missed_departure** @ `sakai_port`: Gonnosuke arrives just after Musashi's vessel has left and learns that Iori is with Sado. — fisici: Musō Gonnosuke, Hon’ami Kōetsu, Hon'den Matahachi. Evidenza: explicit; data/source/book7/chapter10-the-tides-of-life.txt.
- `b7c10-e03` — **captivity_resolution_report** @ `sakai_port`: Gonnosuke reports that Yukimura recognized the error, freed him and apologized; he then searched neighboring provinces for Iori. — fisici: Musō Gonnosuke, Hon’ami Kōetsu, Hon'den Matahachi. Evidenza: explicit; data/source/book7/chapter10-the-tides-of-life.txt.
- `b7c10-e04` — **overland_plan** @ `osaka`: Gonnosuke elects to continue overland and walks with Kōetsu and Matahachi toward Osaka. — fisici: Musō Gonnosuke, Hon’ami Kōetsu, Hon'den Matahachi. Evidenza: explicit; data/source/book7/chapter10-the-tides-of-life.txt.
- `b7c10-e05` — **family_choice** @ `osaka`: Matahachi sees Akemi with a baby, abandons his unfinished priestly path, returns the robe and goes after her intending to work and act as father; biological paternity is not established. — fisici: Hon'den Matahachi, Akemi, Akemi's unnamed baby, Hon’ami Kōetsu, Musō Gonnosuke. Evidenza: explicit; data/source/book7/chapter10-the-tides-of-life.txt.
- `b7c10-e06` — **sea_departure**: Musashi's regular ship leaves Sakai westbound for the arranged duel at Kokura. — fisici: Shinmen Takezō. Evidenza: explicit; data/source/book7/chapter10-the-tides-of-life.txt:L5-L90.
- `b7c10-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Gudō, Misawa Iori, Sasaki Kojiro, Nagaoka Sado, Sanada Yukimura. Evidenza: explicit; data/source/book7/chapter10-the-tides-of-life.txt.

Relazioni introdotte o rivelate qui:

- Hon'den Matahachi → Akemi: **partner_family/chosen_family_and_cohabiting_partners** (soglia 106).
- Hon'den Matahachi → Akemi's unnamed baby: **family/social_fatherhood_biological_paternity_unconfirmed** (soglia 106).
- Akemi → Akemi's unnamed baby: **family/mother_and_child** (soglia 106).
- Second Yoshino Tayū → Haiya Shōeki: **family/wife_and_husband** (soglia 106).

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Yoshino Tayū (`yoshino_tayu`), Haiya Shōyū (`haiya_shoyu`), Gudō (`gudo`), Misawa Iori (`iori`), Sasaki Kojirō (`kojiro`), Nagaoka Sado (`nagaoka_sado`), Sanada Yukimura (`sanada_yukimura`).

### 107. The Evening Boat (b7c11)

Fonte: `data/source/book7/chapter11-the-evening-boat.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Otsu (`otsu`) | scena: `shippoji`; scena: `shikama_estuary`; percorso (confirmed_route): `shikama_estuary`; percorso (intended_destination): `kokura` | `shikama_estuary`; present; Resolved to continue toward Kokura despite illness. (explicit; data/source/book7/chapter11-the-evening-boat.txt) | Canoniche: Obaba Osugi: partner_family/future_daughter_in_law; Jōtarō: friend_ally/travel_companions_and_message_bearers; Obaba Osugi: friend_ally/reconciled_after_persecution_and_nursing_care (introdotta qui)<br>Co-azioni: Obaba Osugi, Jōtarō |
| Obaba Osugi (`osugi`) | scena: `shippoji`; scena: `shikama_estuary`; percorso (confirmed_route): `shikama_estuary`; percorso (intended_destination): `kokura` | `shikama_estuary`; present; Traveling with Otsū after their reconciliation. (explicit; data/source/book7/chapter11-the-evening-boat.txt) | Canoniche: Otsu: partner_family/future_daughter_in_law; Otsu: friend_ally/reconciled_after_persecution_and_nursing_care (introdotta qui)<br>Co-azioni: Otsu, Jōtarō |
| Jōtarō (`jotaro`) | scena: `shippoji`; scena: `shikama_estuary`; percorso (confirmed_route): `shikama_estuary`; percorso (intended_destination): `kokura` | `shikama_estuary`; present; Accompanying Otsū and Osugi. (explicit; data/source/book7/chapter11-the-evening-boat.txt) | Canoniche: Otsu: friend_ally/travel_companions_and_message_bearers; Aoki Tanzaemon: family/father_and_separated_son<br>Co-azioni: Otsu, Obaba Osugi |
| Aoki Tanzaemon (`aoki_tanzaemon`) | Presenza attestata dal dossier; nessuna tappa evento dedicata | Nessuno stato finale strutturato | Canoniche: Jōtarō: family/father_and_separated_son |

Azioni ed evidenza:

- `b7c11-e01` — **recovery_and_reconciliation** @ `shippoji`: After Otsū's illness at Shippōji, Osugi nurses her, publicly cancels the old betrothal claim and remains transformed in conduct. — fisici: Otsu, Matahachi's mother, Jōtarō. Evidenza: explicit; data/source/book7/chapter11-the-evening-boat.txt.
- `b7c11-audit-aoki` — **planning_flashback**: The directly narrated flashback stages Aoki in Himeji helping plan the attempt to contact Musashi’s ship. — fisici: Aoki Tanzaemon. Evidenza: explicit; data/source/book7/chapter11-the-evening-boat.txt:L88-L96.
- `b7c11-e02` — **coastal_watch** @ `shikama_estuary`: The party waits discreetly at Shikama while Himeji samurai prepare to contact Musashi's passing ship. — fisici: Otsu, Matahachi's mother, Jōtarō. Evidenza: explicit; data/source/book7/chapter11-the-evening-boat.txt.
- `b7c11-e03` — **ship_contact** @ `shikama_estuary`: Jōtarō reports the messenger’s contact with Musashi’s passing ship, his refusal to disembark and its continuation toward Kokura; Musashi is not directly staged. — fisici: Jōtarō, Otsu, Matahachi's mother; menzionati: Shinmen Takezō. Evidenza: explicit; data/source/book7/chapter11-the-evening-boat.txt:L175-L190.
- `b7c11-e04` — **journey_resolution** @ `shikama_estuary`: Otsū resolves to continue to Kokura despite illness, prepared even to receive Musashi's ashes. — fisici: Otsu, Matahachi's mother, Jōtarō. Evidenza: explicit; data/source/book7/chapter11-the-evening-boat.txt.
- `b7c11-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Hon'den Matahachi, Takezō's sister. Evidenza: explicit; data/source/book7/chapter11-the-evening-boat.txt.

Relazioni introdotte o rivelate qui:

- Otsu → Obaba Osugi: **friend_ally/reconciled_after_persecution_and_nursing_care** (soglia 107).

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Miyamoto Musashi (`musashi`), Hon'den Matahachi (`matahachi`), Ogin (`ogin`).

### 108. A Falcon and a Woman (b7c12)

Fonte: `data/source/book7/chapter12-a-falcon-and-a-woman.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Sasaki Kojirō (`kojiro`) | scena: `kokura_castle`; scena: `itatsu_kojiro`; percorso (intended_destination): `funashima` | `itatsu_kojiro`; present; Preparing for the Funashima duel; the marriage plan remains conditional. (explicit; data/source/book7/chapter12-a-falcon-and-a-woman.txt) | Canoniche: Iwama Kakubei: servant_employer/recruitment_sponsor; Hosokawa Tadatoshi: authority/hosokawa_vassal_and_lord; Omitsu: partner_family/lovers_with_conditional_unrealized_marriage_plan (introdotta qui)<br>Co-azioni: Hosokawa Tadatoshi, Iwama Kakubei, Omitsu, Ujiie Magoshirō |
| Hosokawa Tadatoshi (`hosokawa_tadatoshi`) | scena: `kokura_castle` | Nessuno stato finale strutturato | Canoniche: Sasaki Kojirō: authority/hosokawa_vassal_and_lord<br>Co-azioni: Sasaki Kojirō, Iwama Kakubei, Ujiie Magoshirō |
| Iwama Kakubei (`iwama_kakubei`) | scena: `kokura_castle`; scena: `itatsu_kojiro`; percorso (intended_destination): `funashima` | Nessuno stato finale strutturato | Canoniche: Sasaki Kojirō: servant_employer/recruitment_sponsor<br>Co-azioni: Sasaki Kojirō, Hosokawa Tadatoshi, Omitsu |
| Omitsu (`omitsu`) | scena: `itatsu_kojiro` | `itatsu_kojiro`; present; Anxious after Kakubei accepts a marriage only after the duel. (explicit; data/source/book7/chapter12-a-falcon-and-a-woman.txt) | Canoniche: Sasaki Kojirō: partner_family/lovers_with_conditional_unrealized_marriage_plan (introdotta qui)<br>Co-azioni: Sasaki Kojirō, Iwama Kakubei |
| Tatsunosuke (`tatsunosuke`) | Presenza attestata dal dossier; nessuna tappa evento dedicata | Nessuno stato finale strutturato | Nessuna relazione/co-azione strutturata nel capitolo |
| Ujiie Magoshirō (`ujiie_magoshiro`) | scena: `kokura_castle` | Nessuno stato finale strutturato | Co-azioni: Sasaki Kojirō, Hosokawa Tadatoshi |

Azioni ed evidenza:

- `b7c12-e01` — **court_demonstration** @ `kokura_castle`: Tadatoshi calls for a demonstration between Kojirō and Ujiie; both defer and the episode sharpens Kojirō's official standing and rivalry. — fisici: Sasaki Kojiro, Ujiie Magoshirō, Hosokawa Tadatoshi. Evidenza: explicit; data/source/book7/chapter12-a-falcon-and-a-woman.txt.
- `b7c12-audit-s02` — **reputation_hostility**: Praise of Musashi provokes Kojirō into repeated public attacks on Musashi's character and Ichijōji conduct, helping turn rivalry into expected confrontation. — fisici: Sasaki Kojiro; menzionati: Shinmen Takezō. Evidenza: explicit; data/source/book7/chapter12-a-falcon-and-a-woman.txt.
- `b7c12-e02` — **duel_arrangement** @ `kokura_castle`: At Tadatoshi's order the challenge with Musashi proceeds under Hosokawa administration. — fisici: Sasaki Kojiro, Iwama Kakubei, Hosokawa Tadatoshi. Evidenza: explicit; data/source/book7/chapter12-a-falcon-and-a-woman.txt.
- `b7c12-e03` — **site_selection_report** @ `itatsu_kojiro`: Kakubei reports that the council selected Funashima between Shimonoseki and Moji; Kojirō refuses to scout it. — fisici: Sasaki Kojiro, Iwama Kakubei. Evidenza: explicit; data/source/book7/chapter12-a-falcon-and-a-woman.txt.
- `b7c12-e04` — **marriage_understanding** @ `itatsu_kojiro`: Kakubei accepts the prospect of Kojirō marrying Omitsu after the duel; Omitsu remains anxious while Kojirō prepares through falconry. — fisici: Sasaki Kojiro, Omitsu, Iwama Kakubei. Evidenza: explicit; data/source/book7/chapter12-a-falcon-and-a-woman.txt.
- `b7c12-audit-s09` — **mortality_pressure**: Despite outward confidence, Kojirō increasingly thinks about Omitsu, his dead mother and the possibility of his own death. — fisici: Sasaki Kojiro, Omitsu. Evidenza: explicit; data/source/book7/chapter12-a-falcon-and-a-woman.txt.
- `b7c12-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Kanemaki Jisai, Ono Tadaaki, Yagyū Sekishūsai, Toda Seigen. Evidenza: explicit; data/source/book7/chapter12-a-falcon-and-a-woman.txt.

Relazioni introdotte o rivelate qui:

- Sasaki Kojirō → Omitsu: **partner_family/lovers_with_conditional_unrealized_marriage_plan** (soglia 108).

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Miyamoto Musashi (`musashi`), Kanemaki Jisai (`kanemaki_jisai`), Ono Tadaaki (`mikogami_tenzen`), Yagyū Sekishūsai (`sekishusai`), Toda Seigen (`toda_seigen`).

### 109. Before the Thirteenth Day (b7c13)

Fonte: `data/source/book7/chapter13-before-the-thirteenth-day.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Hon'den Matahachi (`matahachi`) | scena: `kokura` | `kokura`; present; Living with Akemi and acting as father to her baby. (explicit; data/source/book7/chapter13-before-the-thirteenth-day.txt) | Canoniche: Akemi: acquaintance/temporary_eastbound_travel_companions; Akemi: partner_family/chosen_family_and_cohabiting_partners; Akemi's unnamed baby: family/social_fatherhood_biological_paternity_unconfirmed<br>Co-azioni: Sasaki Kojirō, Akemi, Ichinomiya Gempachi, Akemi's unnamed baby |
| Sasaki Kojirō (`kojiro`) | scena: `itatsu_kojiro` | `itatsu_kojiro`; present; At his crowded house after writing testaments and receiving his aunt. (explicit; data/source/book7/chapter13-before-the-thirteenth-day.txt) | Canoniche: Akemi: friend_ally/rescuer_and_protected_traveler; Omitsu: partner_family/lovers_with_conditional_unrealized_marriage_plan; Tatsunosuke: master/teacher_and_live_in_pupil_attendant (introdotta qui); Kojirō's unnamed maternal aunt: family/nephew_and_maternal_aunt_who_raised_him (introdotta qui)<br>Co-azioni: Hon'den Matahachi, Ichinomiya Gempachi, Tatsunosuke, Kojirō's unnamed maternal aunt |
| Akemi (`akemi`) | scena: `kokura` | `kokura`; present; Caring for her baby with Matahachi; biological paternity remains unknown. (explicit; data/source/book7/chapter13-before-the-thirteenth-day.txt) | Canoniche: Sasaki Kojirō: friend_ally/rescuer_and_protected_traveler; Hon'den Matahachi: acquaintance/temporary_eastbound_travel_companions; Hon'den Matahachi: partner_family/chosen_family_and_cohabiting_partners; Akemi's unnamed baby: family/mother_and_child<br>Co-azioni: Hon'den Matahachi, Akemi's unnamed baby |
| Ichinomiya Gempachi (`ichinomiya_gempachi`) | scena: `itatsu_kojiro` | Nessuno stato finale strutturato | Co-azioni: Hon'den Matahachi, Sasaki Kojirō |
| Omitsu (`omitsu`) | Presenza attestata dal dossier; nessuna tappa evento dedicata | Nessuno stato finale strutturato | Canoniche: Sasaki Kojirō: partner_family/lovers_with_conditional_unrealized_marriage_plan |
| Akemi's unnamed baby (`akemi_baby`) | scena: `kokura` | Nessuno stato finale strutturato | Canoniche: Hon'den Matahachi: family/social_fatherhood_biological_paternity_unconfirmed; Akemi: family/mother_and_child<br>Co-azioni: Hon'den Matahachi, Akemi |
| Tatsunosuke (`tatsunosuke`) | scena: `itatsu_kojiro` | Nessuno stato finale strutturato | Canoniche: Sasaki Kojirō: master/teacher_and_live_in_pupil_attendant (introdotta qui)<br>Co-azioni: Sasaki Kojirō |
| Kojirō's unnamed maternal aunt (`kojiro_aunt`) | scena: `itatsu_kojiro` | Nessuno stato finale strutturato | Canoniche: Sasaki Kojirō: family/nephew_and_maternal_aunt_who_raised_him (introdotta qui)<br>Co-azioni: Sasaki Kojirō |

Azioni ed evidenza:

- `b7c13-e01` — **public_notice** @ `kokura`: Official notices announce the 13th-day, 8 a.m. Funashima bout and prohibit supporters and civilian vessels from the straits. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Shinmen Takezō, Sasaki Kojiro. Evidenza: explicit; data/source/book7/chapter13-before-the-thirteenth-day.txt.
- `b7c13-e02` — **family_arrival** @ `kokura`: Matahachi and Akemi enter Kokura as a poor but functioning family unit while caring for the baby. — fisici: Hon'den Matahachi, Akemi, Akemi's unnamed baby. Evidenza: explicit; data/source/book7/chapter13-before-the-thirteenth-day.txt.
- `b7c13-audit-s03` — **past_confronted**: Gempachi recognizes Matahachi from the period when he falsely called himself Sasaki Kojirō; Matahachi now looks back on that impersonation with shame rather than pride. — fisici: Hon'den Matahachi, Ichinomiya Gempachi, Sasaki Kojiro. Evidenza: explicit; data/source/book7/chapter13-before-the-thirteenth-day.txt.
- `b7c13-e03` — **supporter_arrival** @ `itatsu_kojiro`: Gempachi reaches Kojirō's crowded house from Kōzuke and recounts Kojirō's lineage and training to the supporters. — fisici: Ichinomiya Gempachi, Sasaki Kojiro. Evidenza: explicit; data/source/book7/chapter13-before-the-thirteenth-day.txt.
- `b7c13-e04` — **will_and_attendant** @ `itatsu_kojiro`: Kojirō says he has written testaments for Kakubei and Omitsu and appoints Tatsunosuke and the falcon as his attendants for the crossing. — fisici: Sasaki Kojiro, Tatsunosuke. Evidenza: explicit; data/source/book7/chapter13-before-the-thirteenth-day.txt.
- `b7c13-e05` — **aunt_visit** @ `itatsu_kojiro`: Kojirō's maternal aunt visits from Iwakuni, recalls raising him and gives an underrobe bearing supporters' protective inscriptions. — fisici: Sasaki Kojiro, Kojirō's unnamed maternal aunt. Evidenza: explicit; data/source/book7/chapter13-before-the-thirteenth-day.txt.
- `b7c13-audit-s07` — **win_pressure**: Surrounded by admirers and gifts, Kojirō becomes psychologically burdened by the repeated inner command that he must win. — fisici: Sasaki Kojiro. Evidenza: explicit; data/source/book7/chapter13-before-the-thirteenth-day.txt.
- `b7c13-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Hosokawa Tadatoshi, Itō Ittōsai, Kanemaki Jisai, Kusanagi Tenki, Obaba Osugi. Evidenza: explicit; data/source/book7/chapter13-before-the-thirteenth-day.txt.

Relazioni introdotte o rivelate qui:

- Sasaki Kojirō → Tatsunosuke: **master/teacher_and_live_in_pupil_attendant** (soglia 109).
- Sasaki Kojirō → Kojirō's unnamed maternal aunt: **family/nephew_and_maternal_aunt_who_raised_him** (soglia 109).

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Miyamoto Musashi (`musashi`), Hosokawa Tadatoshi (`hosokawa_tadatoshi`), Itō Ittōsai (`ito_ittosai`), Kanemaki Jisai (`kanemaki_jisai`), Kusanagi Tenki (`kusanagi_tenki`), Obaba Osugi (`osugi`).

### 110. At Daybreak (b7c14)

Fonte: `data/source/book7/chapter14-at-daybreak.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Miyamoto Musashi (`musashi`) | scena: `moji`; scena: `kokura`; scena: `tarozaemon_house`; percorso (intended_destination): `funashima` | Nessuno stato finale strutturato | Canoniche: Hon'den Matahachi: friend_ally/childhood_best_friend; Misawa Iori: master/teacher_and_practical_guardian; Nagaoka Sado: acquaintance/unfulfilled_recruitment_interest_without_meeting<br>Co-azioni: Misawa Iori, Nuinosuke, Utsumi Magobeinojō, Koyama Handayū, Kinami Kagashirō |
| Hon'den Matahachi (`matahachi`) | scena: `kokura`; percorso (confirmed_route): `kokura` → `kokura_hill` | `kokura_hill`; present; Alive with Akemi and the baby on a Kokura hill, watching and praying from afar; later movement is not shown. (explicit; data/source/book7/chapter14-at-daybreak.txt) | Canoniche: Miyamoto Musashi: friend_ally/childhood_best_friend; Akemi: acquaintance/temporary_eastbound_travel_companions; Akemi: partner_family/chosen_family_and_cohabiting_partners; Akemi's unnamed baby: family/social_fatherhood_biological_paternity_unconfirmed<br>Co-azioni: Akemi, Akemi's unnamed baby, Nuinosuke |
| Akemi (`akemi`) | scena: `kokura`; percorso (confirmed_route): `kokura` → `kokura_hill` | `kokura_hill`; present; Alive with Matahachi and her baby on a Kokura hill; biological paternity remains unstated. (explicit; data/source/book7/chapter14-at-daybreak.txt) | Canoniche: Hon'den Matahachi: acquaintance/temporary_eastbound_travel_companions; Hon'den Matahachi: partner_family/chosen_family_and_cohabiting_partners; Akemi's unnamed baby: family/mother_and_child<br>Co-azioni: Hon'den Matahachi, Akemi's unnamed baby, Nuinosuke |
| Misawa Iori (`iori`) | scena: `moji`; scena: `tarozaemon_house`; percorso (intended_destination): `funashima` | Nessuno stato finale strutturato | Canoniche: Miyamoto Musashi: master/teacher_and_practical_guardian; Nagaoka Sado: authority/household_patron_and_ward<br>Co-azioni: Miyamoto Musashi, Nagaoka Sado, Nuinosuke, Kobayashi Tarōzaemon |
| Nagaoka Sado (`nagaoka_sado`) | scena: `tarozaemon_house` | Nessuno stato finale strutturato | Canoniche: Miyamoto Musashi: acquaintance/unfulfilled_recruitment_interest_without_meeting; Misawa Iori: authority/household_patron_and_ward<br>Co-azioni: Misawa Iori, Nuinosuke, Kobayashi Tarōzaemon |
| Akemi's unnamed baby (`akemi_baby`) | scena: `kokura`; percorso (confirmed_route): `kokura` → `kokura_hill` | `kokura_hill`; present; Alive in Akemi's care on the Kokura hill. (explicit; data/source/book7/chapter14-at-daybreak.txt) | Canoniche: Hon'den Matahachi: family/social_fatherhood_biological_paternity_unconfirmed; Akemi: family/mother_and_child<br>Co-azioni: Hon'den Matahachi, Akemi, Nuinosuke |
| Nuinosuke (`nuinosuke`) | scena: `moji`; scena: `tarozaemon_house`; percorso (intended_destination): `funashima`; scena: `kokura` | Nessuno stato finale strutturato | Co-azioni: Miyamoto Musashi, Hon'den Matahachi, Akemi, Misawa Iori, Nagaoka Sado, Akemi's unnamed baby, Kobayashi Tarōzaemon |
| Kobayashi Tarōzaemon (`kobayashi_tarozaemon`) | scena: `tarozaemon_house` | Nessuno stato finale strutturato | Co-azioni: Misawa Iori, Nagaoka Sado, Nuinosuke |
| Utsumi Magobeinojō (`utsumi_magobeinojo`) | scena: `kokura` | Nessuno stato finale strutturato | Co-azioni: Miyamoto Musashi, Koyama Handayū, Kinami Kagashirō |
| Koyama Handayū (`koyama_handayu`) | scena: `kokura` | Nessuno stato finale strutturato | Co-azioni: Miyamoto Musashi, Utsumi Magobeinojō, Kinami Kagashirō |
| Kinami Kagashirō (`kinami_kagashiro`) | scena: `kokura` | Nessuno stato finale strutturato | Co-azioni: Miyamoto Musashi, Utsumi Magobeinojō, Koyama Handayū |

Azioni ed evidenza:

- `b7c14-e01` — **teacher_pupil_reunion** @ `moji`: Musashi visits Sado's house, reunites with Iori and gives him grave counsel, but declines to stay and sends respects to Sado. — fisici: Shinmen Takezō, Misawa Iori, Nuinosuke. Evidenza: explicit; data/source/book7/chapter14-at-daybreak.txt.
- `b7c14-e02` — **native_retainer_gathering** @ `kokura`: Six former Shimmen retainers invite Musashi to their annual horseshoe ceremony and simple feast, explaining their post-Sekigahara survival and Hosokawa service. — fisici: Shinmen Takezō, Utsumi Magobeinojō, Koyama Handayū, Kinami Kagashirō. Evidenza: explicit; data/source/book7/chapter14-at-daybreak.txt.
- `b7c14-e03` — **search_and_discovery** @ `tarozaemon_house`: After fears that Musashi has vanished, Iori suggests Tarōzaemon's house; Nuinosuke and Iori find Musashi sleeping there. — fisici: Nagaoka Sado, Nuinosuke, Misawa Iori, Kobayashi Tarōzaemon. Evidenza: explicit; data/source/book7/chapter14-at-daybreak.txt.
- `b7c14-e04` — **independent_crossing_decision** @ `tarozaemon_house`: Musashi refuses Sado's boat to avoid implying a factional challenge to Tadatoshi and confirms he will cross in Tarōzaemon's craft at his own time. — fisici: Shinmen Takezō, Nuinosuke, Misawa Iori. Evidenza: explicit; data/source/book7/chapter14-at-daybreak.txt.
- `b7c14-e05` — **letter_shared** @ `kokura`: Nuinosuke reads Musashi's reassuring letter to Akemi and Matahachi and tells them where Funashima can be seen. — fisici: Nuinosuke, Hon'den Matahachi, Akemi, Akemi's unnamed baby. Evidenza: explicit; data/source/book7/chapter14-at-daybreak.txt.
- `b7c14-e06` — **climb_to_watch_duel**: Matahachi and Akemi climb the indicated Kokura hill with the baby to watch Funashima and pray from afar. — fisici: Hon'den Matahachi, Akemi, Akemi's unnamed baby. Evidenza: explicit; data/source/book7/chapter14-at-daybreak.txt:L451-L480.
- `b7c14-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Hosokawa Tadatoshi, Iwama Kakubei, Sasaki Kojiro. Evidenza: explicit; data/source/book7/chapter14-at-daybreak.txt.

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Hosokawa Tadatoshi (`hosokawa_tadatoshi`), Iwama Kakubei (`iwama_kakubei`), Sasaki Kojirō (`kojiro`).

### 111. The Marriage (b7c15)

Fonte: `data/source/book7/chapter15-the-marriage.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Miyamoto Musashi (`musashi`) | scena: `tarozaemon_house`; percorso (confirmed_route): `tarozaemon_house` → `heike_pine`; scena: `heike_pine`; percorso (confirmed_route): `heike_pine` → `funashima` | Nessuno stato finale strutturato | Canoniche: Otsu: friend_ally/deep_personal_bond; Obaba Osugi: enemy/family_conflict_and_pursuit; Jōtarō: master/traveling_mentor_and_young_follower; Sasaki Kojirō: rival/first_encounter_and_mutual_martial_interest; Musō Gonnosuke: friend_ally/combat_ally_and_advocate; Otsu: partner_family/mutually_acknowledged_husband_and_wife_without_stated_ceremony (introdotta qui); Obaba Osugi: acquaintance/mutual_forgiveness_after_long_persecution (introdotta qui)<br>Co-azioni: Otsu, Obaba Osugi, Jōtarō, Musō Gonnosuke, Otsuru, Kobayashi Tarōzaemon, Sasuke |
| Otsu (`otsu`) | scena: `heike_pine` | `heike_pine`; present; Alive on the Shimonoseki shore; acknowledged by Musashi as his wife and awaiting the duel's outcome. (explicit; data/source/book7/chapter15-the-marriage.txt) | Canoniche: Miyamoto Musashi: friend_ally/deep_personal_bond; Obaba Osugi: partner_family/future_daughter_in_law; Jōtarō: friend_ally/travel_companions_and_message_bearers; Miyamoto Musashi: partner_family/mutually_acknowledged_husband_and_wife_without_stated_ceremony (introdotta qui); Obaba Osugi: friend_ally/reconciled_after_persecution_and_nursing_care<br>Co-azioni: Miyamoto Musashi, Obaba Osugi, Jōtarō, Musō Gonnosuke, Sasuke |
| Sasaki Kojirō (`kojiro`) | scena: `kokura`; scena: `funashima`; percorso (confirmed_route): `kokura` → `funashima` | Nessuno stato finale strutturato | Canoniche: Miyamoto Musashi: rival/first_encounter_and_mutual_martial_interest; Obaba Osugi: friend_ally/self_appointed_second_in_revenge_plot; Omitsu: partner_family/lovers_with_conditional_unrealized_marriage_plan; Tatsunosuke: master/teacher_and_live_in_pupil_attendant<br>Co-azioni: Omitsu, Nuinosuke, Tatsunosuke |
| Obaba Osugi (`osugi`) | scena: `heike_pine` | `heike_pine`; present; Alive, reconciled with both Otsū and Musashi, bowing from the shore as Musashi departs. (explicit; data/source/book7/chapter15-the-marriage.txt) | Canoniche: Miyamoto Musashi: enemy/family_conflict_and_pursuit; Otsu: partner_family/future_daughter_in_law; Sasaki Kojirō: friend_ally/self_appointed_second_in_revenge_plot; Otsu: friend_ally/reconciled_after_persecution_and_nursing_care; Miyamoto Musashi: acquaintance/mutual_forgiveness_after_long_persecution (introdotta qui)<br>Co-azioni: Miyamoto Musashi, Otsu, Jōtarō, Musō Gonnosuke, Sasuke |
| Jōtarō (`jotaro`) | scena: `heike_pine` | `heike_pine`; present; Alive on the Shimonoseki shore after helping restrain and support Otsū; he missed speaking directly to Musashi. (explicit; data/source/book7/chapter15-the-marriage.txt) | Canoniche: Miyamoto Musashi: master/traveling_mentor_and_young_follower; Otsu: friend_ally/travel_companions_and_message_bearers<br>Co-azioni: Miyamoto Musashi, Otsu, Obaba Osugi, Musō Gonnosuke, Sasuke |
| Musō Gonnosuke (`gonnosuke`) | scena: `heike_pine` | `heike_pine`; present; Alive on the Shimonoseki shore after reuniting with Musashi and witnessing the farewells. (explicit; data/source/book7/chapter15-the-marriage.txt) | Canoniche: Miyamoto Musashi: friend_ally/combat_ally_and_advocate<br>Co-azioni: Miyamoto Musashi, Otsu, Obaba Osugi, Jōtarō, Sasuke |
| Omitsu (`omitsu`) | scena: `kokura` | `kokura`; present; Alive in Kokura after watching Kojirō depart; the marriage plan remains conditional on his return. (explicit; data/source/book7/chapter15-the-marriage.txt) | Canoniche: Sasaki Kojirō: partner_family/lovers_with_conditional_unrealized_marriage_plan<br>Co-azioni: Sasaki Kojirō, Nuinosuke, Tatsunosuke |
| Nuinosuke (`nuinosuke`) | scena: `kokura` | Nessuno stato finale strutturato | Co-azioni: Sasaki Kojirō, Omitsu, Tatsunosuke |
| Otsuru (`otsuru`) | scena: `tarozaemon_house`; percorso (confirmed_route): `tarozaemon_house` → `heike_pine` | Nessuno stato finale strutturato | Co-azioni: Miyamoto Musashi, Kobayashi Tarōzaemon, Sasuke |
| Tatsunosuke (`tatsunosuke`) | scena: `kokura`; scena: `funashima`; percorso (confirmed_route): `kokura` → `funashima` | Nessuno stato finale strutturato | Canoniche: Sasaki Kojirō: master/teacher_and_live_in_pupil_attendant<br>Co-azioni: Sasaki Kojirō, Omitsu, Nuinosuke |
| Kobayashi Tarōzaemon (`kobayashi_tarozaemon`) | scena: `tarozaemon_house`; percorso (confirmed_route): `tarozaemon_house` → `heike_pine` | Nessuno stato finale strutturato | Co-azioni: Miyamoto Musashi, Otsuru, Sasuke |
| Sasuke (`sasuke`) | scena: `tarozaemon_house`; percorso (confirmed_route): `tarozaemon_house` → `heike_pine`; scena: `heike_pine`; percorso (confirmed_route): `heike_pine` → `funashima` | Nessuno stato finale strutturato | Co-azioni: Miyamoto Musashi, Otsu, Obaba Osugi, Jōtarō, Musō Gonnosuke, Otsuru, Kobayashi Tarōzaemon |

Azioni ed evidenza:

- `b7c15-e01` — **departure_preparation** @ `kokura`: Kojirō boards Tadatoshi's new boat with Tatsunosuke while Omitsu watches unseen and Nuinosuke attends the departure. — fisici: Sasaki Kojiro, Tatsunosuke, Omitsu, Nuinosuke. Evidenza: explicit; data/source/book7/chapter15-the-marriage.txt.
- `b7c15-e02` — **renunciation_of_charms** @ `funashima`: During the crossing Kojirō releases the falcon and casts away the protective gifts and writings so he can face the fight without their burden. — fisici: Sasaki Kojiro, Tatsunosuke. Evidenza: explicit; data/source/book7/chapter15-the-marriage.txt.
- `b7c15-e03` — **painting_before_departure** @ `tarozaemon_house`: Musashi delays preparations while completing two paintings, then dresses and leaves the house for Sasuke's hidden boat. — fisici: Shinmen Takezō, Kobayashi Tarōzaemon, Otsuru, Sasuke. Evidenza: explicit; data/source/book7/chapter15-the-marriage.txt.
- `b7c15-e04` — **mutual_forgiveness** @ `heike_pine`: Osugi apologizes for her long persecution; Musashi forgives her and asks forgiveness for the trouble he caused since youth. — fisici: Shinmen Takezō, Matahachi's mother, Musō Gonnosuke. Evidenza: explicit; data/source/book7/chapter15-the-marriage.txt.
- `b7c15-e05` — **marital_acknowledgment** @ `heike_pine`: Musashi and Otsū reunite; when she asks to be called his wife for life, he silently nods and speaks of her as a samurai's wife and of himself as her husband. — fisici: Shinmen Takezō, Otsu, Matahachi's mother, Musō Gonnosuke. Evidenza: explicit; data/source/book7/chapter15-the-marriage.txt.
- `b7c15-e06` — **farewell** @ `heike_pine`: Musashi takes leave of Otsū, Jōtarō, Osugi and Gonnosuke at the shore before boarding Sasuke's boat. — fisici: Shinmen Takezō, Sasuke, Otsu, Jōtarō, Obaba Osugi, Musō Gonnosuke. Evidenza: explicit; data/source/book7/chapter15-the-marriage.txt.
- `b7c15-e07` — **departure_for_funashima**: Musashi and Sasuke leave the shore by boat for Funashima; Otsū, Jōtarō, Osugi and Gonnosuke remain ashore. — fisici: Shinmen Takezō, Sasuke. Evidenza: explicit; data/source/book7/chapter15-the-marriage.txt:L364-L394.
- `b7c15-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Hosokawa Tadatoshi, Nagaoka Sado. Evidenza: explicit; data/source/book7/chapter15-the-marriage.txt.

Relazioni introdotte o rivelate qui:

- Miyamoto Musashi → Otsu: **partner_family/mutually_acknowledged_husband_and_wife_without_stated_ceremony** (soglia 111).
- Obaba Osugi → Miyamoto Musashi: **acquaintance/mutual_forgiveness_after_long_persecution** (soglia 111).

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Hosokawa Tadatoshi (`hosokawa_tadatoshi`), Nagaoka Sado (`nagaoka_sado`).

### 112. The Soul of the Deep (b7c16)

Fonte: `data/source/book7/chapter16-the-soul-of-the-deep.txt`

| Personaggio presente | Scene e percorsi (destinazione non equivale ad arrivo) | Stato a fine capitolo | Relazioni/interazioni pertinenti |
|---|---|---|---|
| Miyamoto Musashi (`musashi`) | scena: `kanmon_crossing_boat`; percorso (confirmed_route): `shimonoseki` → `funashima`; scena: `funashima`; percorso (uncertain_route): `funashima` | luogo non risolto; in_transit; Alive after defeating Kojirō; departs Funashima with Sasuke. Destination and any clash with revenge parties are unrecorded. (explicit; data/source/book7/chapter16-the-soul-of-the-deep.txt) | Canoniche: Sasaki Kojirō: rival/first_encounter_and_mutual_martial_interest; Misawa Iori: master/teacher_and_practical_guardian; Nagaoka Sado: acquaintance/unfulfilled_recruitment_interest_without_meeting<br>Co-azioni: Sasaki Kojirō, Misawa Iori, Nagaoka Sado, Iwama Kakubei, Tatsunosuke, Sasuke |
| Sasaki Kojirō (`kojiro`) | scena: `funashima` | `funashima`; dead; Narratively dead after Musashi's blow. A trace of breath is detected before departure, but the narrator explicitly says he did not return to the living. (explicit; data/source/book7/chapter16-the-soul-of-the-deep.txt) | Canoniche: Miyamoto Musashi: rival/first_encounter_and_mutual_martial_interest; Iwama Kakubei: servant_employer/recruitment_sponsor; Tatsunosuke: master/teacher_and_live_in_pupil_attendant<br>Co-azioni: Miyamoto Musashi, Misawa Iori, Nagaoka Sado, Iwama Kakubei, Tatsunosuke, Sasuke |
| Misawa Iori (`iori`) | scena: `funashima` | `funashima`; present; Alive on Funashima as Sado's attendant and witness to the duel. (explicit; data/source/book7/chapter16-the-soul-of-the-deep.txt) | Canoniche: Miyamoto Musashi: master/teacher_and_practical_guardian; Nagaoka Sado: authority/household_patron_and_ward<br>Co-azioni: Miyamoto Musashi, Sasaki Kojirō, Nagaoka Sado, Iwama Kakubei, Tatsunosuke, Sasuke |
| Nagaoka Sado (`nagaoka_sado`) | scena: `hikojima`; scena: `funashima` | `funashima`; present; Alive on Funashima, acting as senior witness and guardian of Iori. (explicit; data/source/book7/chapter16-the-soul-of-the-deep.txt) | Canoniche: Miyamoto Musashi: acquaintance/unfulfilled_recruitment_interest_without_meeting; Misawa Iori: authority/household_patron_and_ward<br>Co-azioni: Miyamoto Musashi, Sasaki Kojirō, Misawa Iori, Iwama Kakubei, Tatsunosuke, Sasuke |
| Iwama Kakubei (`iwama_kakubei`) | scena: `hikojima`; scena: `funashima` | `funashima`; present; Alive on Funashima, shocked by Kojirō's defeat but restrained by official duty. (explicit; data/source/book7/chapter16-the-soul-of-the-deep.txt) | Canoniche: Sasaki Kojirō: servant_employer/recruitment_sponsor<br>Co-azioni: Miyamoto Musashi, Sasaki Kojirō, Misawa Iori, Nagaoka Sado, Tatsunosuke, Sasuke |
| Tatsunosuke (`tatsunosuke`) | scena: `funashima` | `funashima`; present; Alive on Funashima as Kojirō's attendant; his post-duel disposition is not narrated. (explicit; data/source/book7/chapter16-the-soul-of-the-deep.txt) | Canoniche: Sasaki Kojirō: master/teacher_and_live_in_pupil_attendant<br>Co-azioni: Miyamoto Musashi, Sasaki Kojirō, Misawa Iori, Nagaoka Sado, Iwama Kakubei, Sasuke |
| Sasuke (`sasuke`) | scena: `kanmon_crossing_boat`; percorso (confirmed_route): `shimonoseki` → `funashima`; scena: `funashima`; percorso (uncertain_route): `funashima` | luogo non risolto; in_transit; Alive, taking Musashi away from Funashima by boat; destination unknown. (explicit; data/source/book7/chapter16-the-soul-of-the-deep.txt) | Co-azioni: Miyamoto Musashi, Sasaki Kojirō, Misawa Iori, Nagaoka Sado, Iwama Kakubei, Tatsunosuke |

Azioni ed evidenza:

- `b7c16-e01` — **weapon_making_crossing** @ `kanmon_crossing_boat`: On the tide-driven crossing Musashi carves a wooden sword from a broken oar and makes a paper tasuki. — fisici: Shinmen Takezō, Sasuke. Evidenza: explicit; data/source/book7/chapter16-the-soul-of-the-deep.txt.
- `b7c16-e02` — **revenge_ambush_prepared** @ `hikojima`: Officials expel roughly forty unauthorized Kojirō supporters from Funashima to Hikojima, where they wait in armed boats for possible revenge. — fisici: Nagaoka Sado, Iwama Kakubei. Evidenza: explicit; data/source/book7/chapter16-the-soul-of-the-deep.txt.
- `b7c16-e03` — **late_arrival** @ `funashima`: Musashi lands at Funashima around ten, about two hours after the appointed time, while Kojirō and the witnesses wait. — fisici: Shinmen Takezō, Sasuke, Sasaki Kojiro, Tatsunosuke, Nagaoka Sado, Misawa Iori, Iwama Kakubei. Evidenza: explicit; data/source/book7/chapter16-the-soul-of-the-deep.txt.
- `b7c16-e04` — **duel** @ `funashima`: Kojirō throws away his scabbard, cuts Musashi's headband with the Drying Pole, and is struck in the skull by Musashi's oar sword. — fisici: Shinmen Takezō, Sasaki Kojiro. Evidenza: explicit; data/source/book7/chapter16-the-soul-of-the-deep.txt.
- `b7c16-e05` — **death** @ `funashima`: The narration states that Kojirō does not return to life; Musashi detects only a trace of breath before leaving and the book ultimately treats him as dead. — fisici: Sasaki Kojiro, Shinmen Takezo, Iwama Kakubei, Nagaoka Sado, Misawa Iori. Evidenza: explicit; data/source/book7/chapter16-the-soul-of-the-deep.txt.
- `b7c16-e06` — **departure_unknown** @ `funashima`: Musashi bows, returns to Sasuke's boat and leaves; the destination and any encounter with the armed supporters are explicitly unrecorded. — fisici: Shinmen Takezō, Sasuke. Evidenza: explicit; data/source/book7/chapter16-the-soul-of-the-deep.txt.
- `b7c16-audit-references` — **chapter_references**: Additional chapter-scoped memories, reports or biographical references; no physical presence is asserted. — fisici: nessun partecipante fisico (resoconto/contesto); menzionati: Akemi, Musō Gonnosuke, Hon'den Matahachi, Matahachi's mother, Otsu. Evidenza: explicit; data/source/book7/chapter16-the-soul-of-the-deep.txt.

Riferimenti negli eventi, esclusi i personaggi fisicamente presenti (elenco non esaustivo delle menzioni nel testo): Akemi (`akemi`), Musō Gonnosuke (`gonnosuke`), Hon'den Matahachi (`matahachi`), Obaba Osugi (`osugi`), Otsu (`otsu`).

## Criteri di chiusura

Il controllo di coerenza passa quando la diagnostica ha zero errori: roster di produzione uguale ai dossier, partecipanti fisici inclusi in `present_in`, sorgenti esistenti, identificativi validi e soglie relazionali agganciate a un capitolo con almeno un endpoint registrato. Questo risultato non chiude l'audit di completezza del testo. Le note identificano figure presenti nel dossier senza un evento o uno stato autonomo; non provano che quelle presenze siano semanticamente corrette.

