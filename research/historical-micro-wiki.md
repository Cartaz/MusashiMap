# Historical micro-wiki protocol

## Purpose

The MusashiMap micro-wiki is a **reader aid for briefly explaining real historical people, families, clans, factions, institutions and events that are merely mentioned or lightly referenced in the novel**.

It is **not** a second character encyclopedia and it is not intended to duplicate the information Yoshikawa already gives the reader about major characters such as Musashi or Takuan.

The novel supplies the **trigger/name and reading context**. An authoritative external historical source supplies the **2–3 lines of useful historical context**.

The goal is to answer the reader's likely question:

> "Who/what was that person, family or faction Yoshikawa just mentioned?"

without interrupting the reading experience.

## Core model

The data flow is:

```text
NOVEL / ARCHIVE.ORG TRANSCRIPTION
        │
        │ detects or names entity
        ▼
  HISTORICAL ENTITY
        │
        │ external historical lookup
        ▼
AUTHORITATIVE HISTORICAL SOURCE
        │
        ▼
2–3 LINE MICRO-WIKI SUMMARY
```

The two layers must never be silently merged.

### Layer A — novel trigger

The Internet Archive transcription is the sole authority for:

- whether the entity is mentioned in the novel;
- the name/form used by Yoshikawa;
- where it first becomes relevant;
- the narrative context in which it is mentioned;
- the spoiler boundary for showing the entry;
- any relationship or claim that the novel itself makes about the entity.

### Layer B — historical context

External authoritative sources are the authority for:

- the person's historical identity;
- dates and titles;
- historical role;
- clan/family/faction affiliation;
- the one or two facts most useful for understanding the reference;
- historical identification of a family, clan, faction or event.

External sources must **never** be used to manufacture claims about what Yoshikawa wrote.

## Source hierarchy for the micro-wiki

Prefer, in order:

1. museums, archives and official cultural institutions;
2. universities and academic institutions;
3. established scholarly/academic reference works;
4. authoritative specialist historical institutions or publications;
5. other reputable secondary sources only when stronger sources are unavailable.

The source used for each wiki summary should be stored with the entry so that the claim is auditable.

## What belongs in the micro-wiki

Include historical entities that are:

- named but only briefly explained in the novel;
- likely to be unfamiliar to a modern reader;
- relevant to understanding the historical situation;
- useful as a quick contextual lookup.

Typical categories:

- historical people;
- daimyo and military commanders;
- monks and religious figures when they are only briefly referenced;
- clans and families;
- ruling houses;
- political factions;
- armies;
- institutions;
- historical battles and events;
- other named historical groups that benefit from a short explanation.

## What does NOT belong as a priority

Do not build full wiki entries for major fictional/narrative characters merely because they are historically associated with the period.

If Yoshikawa already gives the reader substantial information about a character in the current narrative, the micro-wiki should not duplicate that material. Historical context may still be added when the character is explicitly a real historical figure, but it should remain compact and clearly labeled as external historical context.

In particular, the micro-wiki is **not a replacement for the novel's character data**.

## Entry format

Every entry should conceptually contain:

```json
{
  "id": "kobayakawa_hideaki",
  "type": "historical_person",
  "display_name": "Kobayakawa Hideaki",
  "novel_trigger": {
    "first_book1_section": 1,
    "name_in_text": "Kobayakawa",
    "context": "Why the name is relevant at this point in the novel",
    "spoiler_safe_until": 1
  },
  "wiki": {
    "summary": "Two or three concise lines of salient historical context."
  },
  "source": {
    "title": "Authoritative source title",
    "publisher": "Institution / publisher",
    "url": "..."
  }
}
```

The field names may evolve with implementation, but the semantic separation must remain.

## Length rule

The default wiki summary is **2–3 lines / roughly 30–70 words**.

It should answer only:

1. Who/what was this?
2. Why is it historically significant?
3. If useful, what fact makes the reference in *Musashi* easier to understand?

Do not turn a micro-wiki entry into a biography.

## Spoiler rule

The novel controls **when the wiki trigger becomes visible**.

A reader at section N may only be offered an entity after its relevant name/reference has appeared in the novel.

Historical context must also be checked for spoilers. Do not reveal future narrative information merely because the external historical source contains it.

Example:

```text
novel mentions X at section 2
        ↓
wiki button becomes available at section 2
        ↓
historical summary is shown
        ↓
future novel revelations remain hidden
```

## Fictional portrayal vs. historical reality

A real historical person may be fictionalized by Yoshikawa. The UI must therefore distinguish:

**Nel romanzo** — only if the application needs to explain the immediate narrative reference.

**Contesto storico** — the short external historical summary.

Never present an external historical fact as though Yoshikawa stated it.

## Research stopping rule

The micro-wiki is intentionally shallow.

Once a trustworthy source provides enough information for a concise 2–3 line explanation, stop researching unless:

- the identity is ambiguous;
- authoritative sources contradict each other;
- the historical identification is uncertain;
- the extra information materially improves understanding of the reference.

The purpose is contextual clarity, not exhaustive historical scholarship.

## Initial Book I scope

The initial historical/contextual set includes:

- Kobayakawa Hideaki
- Ishida Mitsunari
- Ukita Hideie
- Shimazu Yoshihiro
- Konishi Yukinaga
- Tokugawa Ieyasu
- Battle of Sekigahara
- Eastern Army
- Western Army

Further entities should be discovered from the primary text, especially lightly mentioned names, families and factions that a reader is unlikely to recognize.

Takuan, Musashi and other major narrative figures should **not** be treated as priority micro-wiki targets simply because they are historically real. Their extensive narrative treatment already belongs to the main character/story layer.

## Quality gate

Before adding an entry, verify:

1. The entity is actually named/referenced by the primary novel text.
2. The modern/historical identity is unambiguous enough to research.
3. The external source is authoritative.
4. The summary is concise and salient.
5. The summary does not pretend to be novel evidence.
6. The entry does not leak future narrative information.
7. The entry materially helps a reader understand the reference.
