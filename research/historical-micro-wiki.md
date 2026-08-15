# Historical micro-wiki protocol

## Purpose

MusashiMap includes a small contextual wiki for real historical people, events and factions mentioned by Yoshikawa. It is a companion to the reading experience, not a general encyclopedia.

## Source hierarchy

### 1. Primary narrative source

All claims about the novel itself must come from the Internet Archive transcription:

`https://archive.org/stream/EijiYoshikawaMusashi/Eiji%20Yoshikawa%20-%20Musashi_djvu.txt`

This includes:

- first appearance in the novel;
- names and aliases as used by Yoshikawa;
- what the narrative says about the entity;
- relationships explicitly established by the novel;
- events and chronology as presented by the novel;
- spoiler visibility.

### 2. External historical sources

External sources may be used only to provide separate historical context or modern identification. They must never be used to infer what the novel says.

Keep `novel` and `context` as separate data layers.

## Spoiler rule

Every entity must have a narrative visibility boundary. A reader at section N may see only information supported by section N or earlier.

Historical context that would reveal a later narrative fact must also be gated. The existence of a historical person does not automatically authorize displaying all known biography.

## Entity types

- `historical_person`
- `historical_event`
- `historical_faction`

The micro-wiki is separate from the main fictional cast and from geographic locations.

## Minimum record

```json
{
  "id": "...",
  "type": "historical_person",
  "display_name": "...",
  "novel": {
    "first_book1_section": 1,
    "role": "...",
    "spoiler_safe_until": 1,
    "evidence": "..."
  },
  "context": {
    "summary": "..."
  }
}
```

## Important distinction

A historical person can be real while the novel's portrayal is fictionalized. The UI must not silently merge the two. Label contextual material as historical context and narrative material as novel context.

## Initial Book I scope

The first historical/contextual set includes:

- Kobayakawa Hideaki
- Ishida Mitsunari
- Ukita Hideie
- Shimazu Yoshihiro
- Konishi Yukinaga
- Tokugawa Ieyasu
- Battle of Sekigahara
- Eastern Army
- Western Army

This list can expand when the Book I primary-text audit identifies additional historically significant entities.

## Research stopping rule

Do not turn the micro-wiki into an independent historical research project. Once the contextual information is sufficient for a reader to understand why the entity matters in the current scene, further historical detail belongs outside the core companion unless it materially improves comprehension.
