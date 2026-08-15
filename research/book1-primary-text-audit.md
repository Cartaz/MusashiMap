# Book I — Primary-text audit

Status: **in progress**  
Primary source: Internet Archive transcription only

Source:

`https://archive.org/stream/EijiYoshikawaMusashi/Eiji%20Yoshikawa%20-%20Musashi_djvu.txt`

## Scope

This audit validates the existing Book I structured dataset directly against the primary transcription. It does **not** use external sources to establish narrative facts.

The Archive.org text identifies Book I as **Earth** and gives the eight section titles used by the project:

1. The Little Bell
2. The Comb
3. The Flower Festival
4. The Dowager's Wrath
5. The Art of War
6. The Old Cryptomeria Tree
7. The Rock and the Tree
8. The Birth of Musashi

## Pass completed so far

### Section 1 — The Little Bell

Validated:

- Takezo and Matahachi survive the battlefield and reach the wooded hills.
- They spend two days foraging in the hollows of Mount Ibuki.
- They then move at night **in the direction of Tarui**.
- They subsequently reach the house of Oko and Akemi and remain there.
- The section explicitly identifies Ishida Mitsunari and Kobayakawa in the discussion of the war.
- The text describes Takezo and Matahachi as foot soldiers under Lord Shimmen of Iga rather than newly made samurai.

Important correction:

`mount_ibuki_area → tarui` must be represented as **intended/directional**, not as a confirmed arrival at Tarui. The text says they moved in what they thought was the direction of Tarui; it does not establish that they actually entered Tarui in this passage.

### Section 2 — The Comb

Validated:

- Takezo remains associated with the Oko/Akemi house at the beginning of the section.
- He goes into the mountain area with Akemi and returns to the house.
- The text explicitly connects Akemi's family trade to Mount Ibuki and Tarui: mugwort is gathered on Mount Ibuki and processed into moxa sold in Tarui.
- Tsujikaze Temma and his men search Oko's house.
- Takezo and Matahachi confront Temma's men.
- Takezo's connection to Miyamoto and his desire to return there are explicitly stated.

### Section 3 — The Flower Festival

Validated:

- The narrative returns to Miyamoto.
- Otsu is associated with Shippoji and the flower festival.
- Takuan is present at Shippoji.
- Ogin is established as Takezo's sister and is living at the house built by Munisai overlooking the river.
- Otsu sees Takezo at the festival; he disappears immediately.
- The text explicitly identifies Takuan Soho by name and gives narrative biographical information about him.

### Section 4 — The Dowager's Wrath

Validated:

- Osugi is the head of the Hon'iden family and is introduced as Matahachi's mother.
- After hearing that Takezo was seen, Osugi reacts and begins pursuing the matter.
- Takezo is hiding in the mountains while being hunted.
- Ogin is taken prisoner.
- Hinagura stockade is given as the reported location of Ogin's imprisonment.
- The narrative later has Takezo approaching Shippoji while avoiding the searchers.

### Section 5 — The Art of War

Validated at the current pass:

- Takuan negotiates with the Himeji representative/captain over capturing Takezo.
- Takuan explicitly invokes The Art of War / Sun-tzu.
- Takuan agrees to capture Takezo and decide his fate.
- Otsu is involved in Takuan's plan.
- The search operation around the mountains is explicitly described as extensive and unsuccessful.

### Section 6 — The Old Cryptomeria Tree

Validated:

- Takuan captures Takezo.
- Takezo is brought to Shippoji.
- Takezo is tied to the old cryptomeria tree.
- The villagers gather at Shippoji to witness the captured Takezo.
- Takuan's agreement with the representative of the House of Ikeda is explicitly referenced.
- The section centers on the punishment/transformation sequence around the tree.

### Section 7 — The Rock and the Tree

Validated:

- Takezo remains bound during the transformation sequence.
- Takuan continues the confrontation and teaching process.
- Takezo is ultimately freed.
- Takezo and Otsu travel together and explicitly reach **Nakayama Pass** before separating.
- Takezo proceeds toward Hinagura/Ogin.
- Otsu agrees to go toward Himeji and wait at **Hanada Bridge**.

Important data distinction:

The first statement about Otsu waiting at Hanada Bridge is a **declared/intended destination**. Later text is required to establish her actual arrival or subsequent position. Therefore the movement edge must not use the initial promise alone as proof of arrival.

### Section 8 — The Birth of Musashi

Validated at the current pass:

- Otsu reaches the Mikazuki Teahouse area and becomes ill there.
- Osugi and Gonroku encounter the teahouse and pursue Otsu.
- The text explicitly names the **Mikazuki Teahouse**.
- Takezo is positioned across the valley from the Hinagura stockade and is planning how to rescue Ogin.
- Takezo's movements subsequently lead toward Himeji.
- Takezo is brought before Lord Ikeda Terumasa at Himeji Castle.
- The naming sequence establishes the reader-facing transition from Shinmen/Shimmen Takezo to **Miyamoto Musashi**.

## Data corrections from this pass

### 1. Movement confidence

The movement dataset previously called all movement points `confirmed`. This was too coarse.

The dataset now distinguishes:

- `confirmed` — completed movement or destination explicitly established;
- `intended` — destination/direction stated without confirmed arrival;
- `relative` — movement relation is known but the route is insufficiently specified.

The clearest correction is:

`Mount Ibuki area → Tarui` = `intended`, not `confirmed`.

### 2. Destination versus arrival

The audit reinforces the existing project rule: a character saying they will go somewhere is not equivalent to the character being shown there.

This distinction is especially important for:

- Hanada Bridge;
- Himeji;
- Hinagura;
- other destinations introduced as plans before later scenes establish actual position.

## Historical-entity extraction notes

The primary text itself contains substantial material suitable for the micro-wiki. At this stage the audit confirms narrative relevance for historical figures/events including:

- Ishida Mitsunari;
- Kobayakawa Hideaki;
- Tokugawa forces / Tokugawa Ieyasu context;
- Takuan Soho;
- the House of Ikeda / Ikeda Terumasa;
- the Akamatsu clan context.

The micro-wiki must distinguish between:

```text
what the novel says
        vs.
historical context supplied separately
```

No external historical biography is being used to validate these narrative claims.

## Remaining audit work

Continue section-by-section verification for:

- complete character presence;
- every named location and spatial relation;
- all movement transitions;
- events;
- historical people/factions/events;
- aliases and identity transitions;
- spoiler boundaries.

After the primary-text audit is stable, coordinate integration and external geographic identification can proceed without changing the narrative corpus.

## Evidence rule

When a conflict appears between the existing dataset and the Archive.org transcription, the transcription wins. Do not repair a narrative fact using historical knowledge or a modern map.
