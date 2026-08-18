# MusashiMap — Book I / EARTH — Entity Audit

Status: **research normalization audit**

This audit applies the same orthogonal character taxonomy now required for Book II to the existing Book I registry. It is based on the frozen Book I production character registry and existing narrative research; it does not alter production JSON.

## Mandatory taxonomy

| Field | Allowed values | Meaning |
|---|---|---|
| `entity_type` | `character`, `historical_figure`, `group`, `other` | Entity class in research data. |
| `narrative_presence` | `active`, `mentioned`, `historical_context` | Whether the entity participates in the current narrative scene. |
| `narrative_role` | `primary`, `secondary`, `tertiary`, `none` | Narrative importance, independent of historical status. |
| `historical_status` | `historical`, `fictional`, `fictionalized`, `unknown` | Historical status only when defensible. |
| `map_relevance` | `mapped`, `contextual`, `none` | Whether the entity affects the reader-facing map. |

## Existing Book I character registry — normalized classification

| ID | Character | Role | Narrative presence | Historical status | Map relevance | Notes |
|---|---|---|---|---|---|---|
| `musashi` | Miyamoto Musashi | primary | active | historical | mapped | Historical person, but the novel's protagonist and therefore a narrative character. |
| `matahachi` | Hon'den Matahachi | primary | active | unknown | mapped | Treat as narrative character; do not infer fictional status without dedicated verification. |
| `otsu` | Otsū | primary | active | unknown | mapped | Narrative character; historical status not assumed. |
| `takuan` | Takuan Sōhō | primary | active | historical | mapped | Historical monk who is an active narrative character. |
| `kojiro` | Sasaki Kojirō | primary | mentioned in Book I registry | historical | contextual | Historical person, but `present_in=[]` means no Book I physical presence is currently asserted. Do not render a Book I marker from mere mention. |
| `osugi` | Obaba Osugi | primary | active | unknown | mapped | Narrative character; historical status not assumed. |
| `jotaro` | Jōtarō | primary | mentioned / no physical presence in current registry | unknown | contextual | `present_in=[]`; do not infer map presence from later-book knowledge. |
| `akemi` | Akemi | primary | active | unknown | mapped | Narrative character; historical status not assumed. |
| `ogin` | Ogin | primary | active | unknown | mapped | Narrative character; historical status not assumed. |
| `oko` | Okō | secondary | active | unknown | mapped | Narrative character. |
| `temma` | Tsujikaze Temma | secondary | active | unknown | mapped | Narrative character. |
| `kohei` | Tsujikaze Kohei | secondary | no physical presence currently asserted | unknown | contextual | Do not promote to a marker until scene-level evidence establishes presence. |
| `heita` | Heita | secondary | active | unknown | mapped | Narrative character. |
| `gonroku` | Fuchikawa Gonroku | secondary | active | unknown | mapped | Narrative character; historical status not assumed. |
| `aoki_tanzaemon` | Aoki Tanzaemon | secondary | no physical presence currently asserted | unknown | contextual | Historical status requires separate verification; current registry does not justify Book I marker presence. |
| `lord_ikeda` | Ikeda Terumasa | secondary | active | historical | mapped | Historical daimyo treated as an active narrative character when present. |
| `himeji_captain` | Himeji garrison captain | secondary | active | unknown | mapped | Role/title is an identity only because the current source model has not established a personal name. Keep the title stable; do not invent a personal identity. |

## Important corrections to the old mental model

### 1. Historical does not mean contextual

`Musashi`, `Takuan`, and `Ikeda Terumasa` demonstrate that a historical person can be an active narrative character. Their historical status is metadata, not a reason to remove them from the character model.

### 2. Main-cast status does not prove physical presence

`Sasaki Kojirō` and `Jōtarō` are currently in the main cast but have empty `present_in` arrays. Therefore the current registry does not establish Book I physical presence for them. They must remain contextual/mentioned for Book I until source-level evidence changes that conclusion.

### 3. Unknown is a valid result

For characters such as Matahachi, Otsū, Osugi, Akemi, Ogin, Okō and others, this audit does not invent a historical classification. `unknown` means that historical status has not been independently established in this audit.

### 4. Narrative role and historical status are independent

A character can therefore be:

```text
entity_type = character
narrative_presence = active
narrative_role = secondary
historical_status = historical
map_relevance = mapped
```

or:

```text
entity_type = historical_figure
narrative_presence = historical_context
narrative_role = none
historical_status = historical
map_relevance = none
```

Those are fundamentally different cases.

## Groups and contextual entities

Historical figures mentioned in Book I research, unnamed retainers, schools, armies, houses and other collective entities must remain separate from individual character records. An unnamed group member must never receive a fabricated person ID merely to satisfy a database relation.

## Production implications

The existing `characters.json` schema is intentionally not modified by this audit. The new taxonomy should first be represented in research/staging data. During the eventual global schema migration, production character records should gain the equivalent fields without breaking the existing stable IDs or chapter-state semantics.

## Audit status

**PASS — taxonomy applied to the current Book I character registry.**

A future historical-status research pass may replace `unknown` with `historical` or `fictional`/`fictionalized` where authoritative evidence exists. Such a change must never alter narrative presence merely because the historical classification changes.
