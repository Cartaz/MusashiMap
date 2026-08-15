# MusashiMap — Topographic Research Protocol

## 1. Purpose

Identify modern geographic counterparts for places named in *Musashi* while preserving the distinction between:

1. **narrative identity** — what Yoshikawa's text says;
2. **modern identification** — where the place can be located today;
3. **historical compatibility** — how safely the modern location can represent the place in the period of the story.

The goal is to improve the map as a **follow-along reading companion**. The goal is not to silently replace the novel's geography with a reconstructed historical map.

## 2. Source hierarchy

### Narrative source

The Internet Archive transcription of the English corpus is the authoritative source for what the novel says.

Use it to establish:

- place names;
- descriptions;
- spatial relationships stated by the narrator or characters;
- directions;
- journeys;
- sequence of locations;
- distances or travel times when explicitly given;
- narrative uncertainty.

Do not use external sources to alter or "correct" the novel's narrative geography.

### Modern identification sources

External sources may be used **only after the narrative location has been established** to identify its modern counterpart. Prefer authoritative institutional, municipal, prefectural, museum, academic, or historical-geographical sources.

## 3. Three-layer location model

Every investigated location should conceptually support:

```text
NARRATIVE
  text_name
  text_name_jp (when known)
  text_description
  text_relations

MODERN
  modern_name
  modern_name_jp
  modern_location
  modern_coordinates
  modern_landmark

HISTORICAL
  historical_match
  historical_notes
  historical_estimate
```

Coordinates belong to the modern identification unless a historical estimate is independently justified.

## 4. Never equate names automatically

A matching modern name is a candidate, not proof.

A candidate must be tested against as many applicable constraints as possible:

- textual fit;
- relation to nearby known locations;
- route/topological fit;
- distance fit;
- direction fit;
- landscape/topographic fit;
- historical plausibility;
- modern-name correspondence;
- known literary/commemorative association;
- contradictions.

A strong contradiction must outweigh a superficial name match.

## 5. Network-first reasoning

Treat locations as a network rather than isolated pins.

For each candidate, ask:

```text
Does this candidate simultaneously explain
multiple independent clues from the narrative?
```

Use anchor points of high confidence first, then test ambiguous places against them.

Useful relations include:

- A is north/south/east/west of B;
- A lies on the route between B and C;
- A is reached before/after B;
- A is near a river, pass, bridge, settlement, or castle;
- a journey crosses a stated boundary;
- the sequence of journeys is geographically plausible.

## 6. Historical-vs-modern distinction

A modern landmark may represent the literary location without being the physical structure that existed in the story's period.

Example pattern:

```text
Hanada Bridge (narrative)
        ↓
modern commemorative/associated area
        ↓
modern bridge
        ↓
modern structure may post-date the story
```

Never collapse these layers into one assertion.

Use `anachronistic_reference` when a modern identification is useful for the reader but the modern physical feature is demonstrably or plausibly later than the historical setting.

## 7. Recommended status fields

### Geographic identification

Use:

- `exact` — modern identity is effectively unambiguous;
- `strong` — one candidate clearly dominates and fits the network;
- `probable` — best-supported candidate, but meaningful alternatives remain;
- `possible` — plausible area/candidate without enough evidence for a point;
- `unknown` — no defensible modern identification yet.

### Historical compatibility

Treat this separately from geographic confidence:

- `compatible`;
- `uncertain`;
- `anachronistic`;
- `unknown`.

Do not use `anachronistic` as a confidence level.

## 8. Coordinate policy

Use three conceptual coordinate fields when useful:

```text
modern_coordinates
narrative_coordinates
historical_estimate
```

They are not interchangeable.

Most literary locations should have only `modern_coordinates` when a defensible modern identification exists.

If the historical position cannot be reconstructed, leave `historical_estimate` null. An empty field is preferable to false precision.

## 9. Two-round research budget

Ambiguous places receive **at most two substantive research rounds** before being downgraded to an area-level or unresolved result.

### Round 1 — direct identification

1. Establish the exact narrative name and all textual clues from the Internet Archive corpus.
2. Search authoritative modern sources for matching names and known literary/historical associations.
3. Generate plausible candidates.
4. Test obvious textual and geographic constraints.
5. Reject candidates with clear contradictions.

If one candidate is clearly supported, record it.

### Round 2 — network verification

1. Compare the remaining candidates against established anchor points.
2. Test route, direction, relative distance, and topography.
3. Check historical compatibility and anachronisms.
4. Look specifically for contradictions that would invalidate the leading candidate.
5. Select the best-supported candidate only if the evidence materially improves.

## 10. Stop rule

After two substantive rounds, **stop** if no candidate has produced a meaningful increase in confidence.

Do not continue researching merely to obtain a precise coordinate.

Instead record the best defensible representation:

```text
possible area
possible candidate
unknown
```

and preserve the reason for uncertainty in `notes` or `contradictions`.

This is intentional. A correct uncertain area is better than a falsely precise point.

## 11. What counts as meaningful improvement

Further research is justified only when it can change something relevant to the companion, such as:

- moving a location to a materially different area;
- changing the route between major locations;
- resolving which side of a river/pass/boundary a place belongs to;
- revealing a major contradiction in the current map;
- distinguishing two candidates with substantially different narrative implications;
- establishing a useful modern landmark for the reader.

Minor coordinate refinement that does not change the reader's understanding is not sufficient reason to continue.

## 12. Confidence is not scientific probability

Numeric scores may be used internally to compare candidates, but they must not be presented to readers as statistical certainty.

Suggested internal bands:

```text
95–100  exact
80–94   strong
60–79   probable
40–59   possible
<40     unknown
```

The frontend should translate these into readable labels rather than displaying pseudo-scientific precision.

## 13. Contradiction ledger

Every serious candidate should record important contradictions, not just supporting evidence.

Example:

```json
{
  "candidate": "X",
  "supports": ["near Himeji", "on described route"],
  "contradictions": ["modern bridge post-dates narrative period"],
  "status": "strong",
  "historical_match": "anachronistic"
}
```

A candidate with an unresolved major contradiction should not be upgraded solely because its name matches.

## 14. Literary landmarks

Some places exist primarily because the novel or later commemorative culture associates them with a scene.

Represent these as literary landmarks rather than pretending they are verified historical structures.

Typical pattern:

```text
location_type: literary_landmark
geographic_match: strong
historical_match: anachronistic
```

## 15. Research record

For every completed investigation retain:

- narrative name;
- modern candidate(s);
- round 1 findings;
- round 2 findings;
- decisive constraints;
- rejected candidates and why;
- contradictions;
- final geographic status;
- historical compatibility;
- coordinates, if justified;
- sources used for modern identification.

This makes later audits reproducible without repeating the entire investigation.

## 16. Final principle

**Be as precise as the evidence allows, but no more precise than the evidence allows.**

The map should represent the geography of the novel faithfully, with modern geography used as an aid to orientation. When two rounds of serious investigation cannot resolve a location, preserve the uncertainty and move on to the next location whose resolution will materially improve the reader's experience.
