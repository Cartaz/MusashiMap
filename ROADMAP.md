# MusashiMap — Project Roadmap

> Living project record. Update this file whenever a major research, data-model, or product milestone is completed. The goal is to preserve context so future work does not repeat completed research or drift from the project's original purpose.

## 1. Product goal

MusashiMap is a **follow-along reading companion for Eiji Yoshikawa's _Musashi_**, not a general historical GIS or encyclopedia.

The core experience should let a reader follow the current scene geographically, understand who is present and where they are, and consult a compact historical micro-wiki without exposing information that the reader has not reached yet.

Guiding principle:

> The map represents the novel first. Historical reconstruction is supporting context, not a replacement for the novel.

## 2. Source policy

### Primary narrative source

All claims about what the novel says must be derived from the Internet Archive transcription:

`https://archive.org/stream/EijiYoshikawaMusashi/Eiji%20Yoshikawa%20-%20Musashi_djvu.txt`

This applies to:

- narrative presence;
- names and aliases;
- locations as described by Yoshikawa;
- movements and destinations;
- relationships revealed by the text;
- chronology;
- spoiler boundaries;
- identifying which historical people, families, clans, factions or events deserve a micro-wiki trigger.

### External sources

External sources are allowed for:

- modern geographic identification;
- modern coordinates;
- historical/topographic verification;
- historical context used by the micro-wiki.

They must never be used to manufacture or overwrite novel evidence.

## 3. Completed work

### Project foundation

- Initial repository and project structure created.
- Static GitHub Pages deployment configured.
- Application/data/research directories organized.
- Core analysis and validation protocols established.

### Book I narrative dataset

Book I / _Earth_ has been structured into eight project-local sections:

1. The Little Bell
2. The Comb
3. The Flower Festival
4. The Dowager's Wrath
5. The Art of War
6. The Old Cryptomeria Tree
7. The Rock and the Tree
8. The Birth of Musashi

Existing structured layers include:

- narrative analysis;
- character states;
- location registry;
- location states;
- normalized movement transitions;
- section events;
- character identity checkpoints.

The dataset explicitly distinguishes intended destinations from confirmed arrivals and does not guess unknown locations.

### Spoiler-safe identity model

The same internal character ID is retained while the reader-facing name changes when the narrative establishes a new identity. The Book I checkpoint currently includes Takezo → Miyamoto Musashi at the appropriate narrative point.

### Geographic research

A high-precision topographic methodology was established and applied to Book I locations.

Important principle:

> A modern location is not accepted merely because its name matches. It must be compatible with the narrative network and, where possible, historical geography.

The following distinctions are now part of the data model:

- narrative identity;
- modern identification;
- geographic confidence;
- historical compatibility/status;
- modern coordinates versus historical estimate.

Examples already investigated include:

- Sekigahara — exact modern anchor;
- Tarui — exact modern anchor;
- Mount Ibuki — exact modern anchor;
- Miyamoto — strong modern identification;
- Himeji — exact modern anchor;
- Himeji Castle — exact modern anchor;
- Hanada Bridge — strong modern literary identification, but explicitly anachronistic as a modern bridge reference;
- Hinagura — strong/probable identification around the modern Musashi-related landmark;
- Nakayama Pass — strong candidate around Kamazaka Pass, but not promoted to exact;
- Sayo and Mikazuki — strong modern area identifications.

Some locations remain intentionally unresolved, including candidates such as Tsujinohara, Aida River and Sanumo where evidence did not justify false precision. Mount Fuwa is now confirmed as a **narrative landmark** by the primary text, but its modern coordinate remains a separate question.

### Bounded topographic research protocol

A reusable protocol was added for future geographic research. It requires:

1. extracting the narrative description first;
2. identifying anchor points;
3. building geographic constraints and relationships;
4. searching modern candidates;
5. testing candidates against the network;
6. recording contradictions;
7. assigning confidence/status;
8. preserving uncertainty explicitly.

#### Research budget rule

After **two substantive research rounds** without a meaningful improvement in confidence or map usefulness, stop.

The result should then be recorded as:

- `possible` area/candidate; or
- `unknown`.

Do not continue researching merely to turn an unresolved area into a precise pin when that precision does not materially improve the reading companion.

### Historical micro-wiki

The micro-wiki is explicitly defined as a **contextual lookup for tertiary historical references**, not a biography database for major characters.

The model is:

```text
Archive.org novel
      ↓
name/reference appears
      ↓
identify historical entity
      ↓
authoritative external historical source
      ↓
2–3 line salient summary
```

The novel provides:

- the trigger/name;
- reading context;
- first relevant appearance;
- spoiler boundary.

The external authoritative source provides:

- historical identity;
- dates/titles where useful;
- historical role;
- clan/family/faction affiliation;
- the few facts necessary to understand the reference.

The micro-wiki should prioritize:

- lightly mentioned historical people;
- daimyo and commanders;
- clans and families;
- ruling houses;
- factions and armies;
- institutions;
- historical events.

It should **not** duplicate the main narrative data for major characters such as Musashi or Takuan merely because they are historical figures. The default entry length is roughly **30–70 words / 2–3 lines**.

Every historical summary must retain its external source metadata and must never be presented as though it were information supplied by Yoshikawa.

### Micro-wiki source audit — pass 1

The first source-completion pass has now populated authoritative external sources for the initial Book I set:

- Kobayakawa Hideaki;
- Ishida Mitsunari;
- Ukita Hideie;
- Shimazu Yoshihiro;
- Konishi Yukinaga;
- Tokugawa Ieyasu;
- Battle of Sekigahara;
- Eastern Army;
- Western Army.

The same pass added two tertiary references discovered directly in the primary text:

- Akamatsu clan — Section 3;
- Minamoto no Hiromasa — Section 5.

The Akamatsu source is the Hyogo Prefectural Museum of History. Hiromasa is supported by the National Theatre of Japan, with an additional cultural source from the Ota Memorial Museum of Art.

`data/context/micro-wiki.json` now stores the external source metadata with each approved entry.

### Primary-text audit — pass 3

The dedicated `research/book1-primary-text-audit.md` now reflects the corrected micro-wiki scope.

Important distinction established:

- Takuan Soho has extensive in-novel characterization and therefore belongs primarily to the main narrative layer;
- Ikeda Terumasa / House of Ikeda are historically useful contextual candidates but are not automatically promoted to the tertiary set;
- lightly mentioned historical references such as Akamatsu and Minamoto no Hiromasa are exactly the type of entity the micro-wiki is designed to explain.

The audit also confirms that the Akamatsu lineage reference occurs in the Flower Festival section and the Hiromasa flute reference occurs in The Art of War.

## 4. Current work in progress

### A. Complete Book I primary-text audit — IN PROGRESS

Continue validating only high-value items:

- complete character presence and absence;
- every named location and meaningful spatial relation;
- movement transitions and intended-vs-confirmed status;
- historical people/families/factions/events that should trigger the micro-wiki;
- aliases and identity transitions;
- spoiler boundaries.

Do not reopen already settled topographic research unless the primary text produces a contradiction.

### B. Complete historical micro-wiki extraction — IN PROGRESS

Use the Book I primary-text audit to identify lightly mentioned historical people, families, clans, factions, institutions and events that a modern reader may not recognize.

For each trigger:

1. verify the name/reference in Archive.org;
2. identify the historical entity;
3. find an authoritative external historical source;
4. write only 2–3 lines of salient context;
5. attach the source metadata;
6. enforce the reader's spoiler boundary.

Do not perform exhaustive biographies unless ambiguity makes them necessary.

### C. Archive.org → Luni edition mapping — NEXT

The Archive.org section numbers are project-local source indices and must not be treated as the Italian Luni chapter numbers.

Build an explicit mapping layer between:

```text
Archive.org section
        ↓
Luni chapter/title
        ↓
reader progress
```

This mapping must be evidence-based and should not alter the primary corpus structure.

## 5. Next product milestones

### Milestone 1 — Canonical Book I data

Finish and validate the narrative, character, location, movement, event and historical-entity datasets.

### Milestone 2 — Historical micro-wiki source completion

Audit the remaining approved candidates, including Ikeda Terumasa / House of Ikeda if the final UI test shows that their historical context materially helps the reader. Do not expand the set simply for completeness.

### Milestone 3 — Geographic layer

Attach modern coordinates only after the narrative location registry is stable.

Represent uncertainty honestly:

```text
exact
strong
probable
possible
unknown
literary / anachronistic
```

Never imply that a modern coordinate is automatically the historical location of the 1600 setting.

### Milestone 4 — Reader-progress engine

The application needs a single reader-progress state controlling what is visible.

Conceptually:

```text
reader_progress
      ↓
visible characters
visible locations
visible events
visible routes
visible relationships
visible wiki triggers
```

### Milestone 5 — Spoiler firewall

No future route, relationship, identity, location or historical context may appear before the reader reaches the corresponding narrative point.

### Milestone 6 — Follow-along map

The map should emphasize the current scene and active movement rather than displaying the entire novel's geography at once.

### Milestone 7 — Micro-wiki UI

Historical entities should be accessible from the reading/map interface with a compact card containing:

- why the reference appears here;
- 2–3 lines of historical context;
- source attribution;
- spoiler-safe visibility.

### Milestone 8 — Reading test

Test the companion as an actual reader would use it:

- read a section;
- advance the companion;
- inspect the map;
- inspect characters;
- open a historical context card;
- verify that no future information leaks.

The key question is always:

> Does this improve understanding of the current reading experience?

If not, it should not automatically become another research task.

## 6. Explicit non-goals

MusashiMap is **not** currently trying to become:

- a complete historical atlas of Sengoku Japan;
- a scholarly reconstruction of every 1600 road;
- a general biography database;
- a replacement for the novel;
- a GIS project requiring exact historical coordinates for every ambiguous toponym;
- an exhaustive historical encyclopedia.

Precision is valuable when it changes the reader's understanding. False precision is worse than an explicitly uncertain area. Historical context is valuable when it answers a likely reader question quickly; additional detail belongs outside the core companion.

## 7. Working rules for future agents

1. Read this roadmap before beginning a new research task.
2. Check existing datasets and research notes before repeating research.
3. Treat Archive.org as the sole authority for claims about the novel.
4. Use external sources only for explicitly separated modern/historical context.
5. For the micro-wiki, use the novel only to identify the trigger and reading context; use an authoritative external source for the historical summary.
6. Keep micro-wiki summaries to roughly 2–3 lines unless ambiguity requires more research.
7. Do not build full biographies for major characters when the novel already supplies the needed context.
8. Preserve uncertainty instead of inventing coordinates.
9. Apply the two-round stopping rule to difficult topographic identifications.
10. Prefer network consistency over name matching.
11. Never leak future information through the map or micro-wiki.
12. Do not expand research merely because a more precise answer is theoretically possible.
13. Optimize for the usefulness of the reading companion.

## 8. Current state at a glance

```text
PROJECT FOUNDATION              DONE
BOOK I STRUCTURED DATA          DONE / VALIDATING
SPOILER-SAFE CHARACTER MODEL    DONE
LOCATION NORMALIZATION          DONE / VALIDATING
TOPOGRAPHIC METHODOLOGY         DONE
TOPOGRAPHIC INITIAL AUDIT       DONE / SELECTIVE FOLLOW-UP ONLY
HISTORICAL MICRO-WIKI MODEL     DONE
MICRO-WIKI SOURCE AUDIT         IN PROGRESS — PASS 1
BOOK I PRIMARY-TEXT AUDIT       IN PROGRESS — PASS 3
ARCHIVE → LUNI MAPPING          NEXT
COORDINATE INTEGRATION          NEXT
READER-PROGRESS ENGINE          NEXT
SPOILER FIREWALL                NEXT
FOLLOW-ALONG MAP                NEXT
MICRO-WIKI UI                   NEXT
FULL READING TEST               LATER
```

The roadmap is intentionally a living document. Update it at each meaningful milestone rather than creating a separate history document that can drift out of date.
