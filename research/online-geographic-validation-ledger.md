# MusashiMap — Online Geographic Validation Ledger

Date: 2026-08-20

## Scope and evidence rule

This ledger records external evidence used only for modern geographic
identification, coordinate confidence and bounded historical context. Narrative
presence, events and movements continue to come exclusively from the chapter
files under `data/source/`.

An official source confirming a modern place or historical association does not
prove that a scene in the novel occurred at an exact modern point.

## Book II — Water

### Hannya Plain / Hannya area

- Narrative entity: `hannya_plain` (`b2c7`, section 15).
- Official evidence: Nara City documents Hannya-ji and the historical Hannya-ji
  village, including medieval cultural material held by the temple:
  https://www.city.nara.lg.jp/site/bunkazai/105906.html
- Result: the external evidence supports an area-level association with the
  Hannya-ji / northern Nara context, not an exact scene point and not a bounded
  one-kilometre fictional-site placement.
- Production implication: retain an area or representative-point semantic. The
  current three-kilometre radius must not be silently forced through a validator
  written for fictional houses and inns; either the precision class or the
  validation rule must distinguish broad named areas from approximate sites.
- Confidence: `high` for the modern Hannya-ji-area association; `unknown` for an
  exact narrative scene footprint.

### Yagyu / Sekishusai context

- Narrative entities: `yagyu_valley`, `koyagyu_castle`, `sekishusai`.
- Official evidence: Nara City identifies the Yagyu road and its Yagyu-family
  sites: https://www.city.nara.lg.jp/sightseeing/naraharu/111707.html
- Official evidence: Nara City cultural-property material identifies Yagyu
  Munetoshi (Sekishusai), his relationship to Kamiizumi Nobutsuna and the Yagyu
  family context:
  https://www.city.nara.lg.jp/uploaded/attachment/150695.pdf
- Official evidence: Nara City records the Yagyu family graveyard at Hotokuji as
  a designated historic site:
  https://www.city.nara.lg.jp/site/bunkazai/8411.html
- Result: Yagyu is a defensible modern area anchor and Sekishusai is a defensible
  historical identity. These sources do not identify the exact footprint of the
  novel's private mountain house or every estate building.

## Book III — Fire (staging validation)

These entries are recorded only because the corresponding place names have
been established and reconciled in the complete local Book III chapter scrape.
They remain staging evidence and do not authorize production coordinates by
themselves.

### Sumiyoshi Taisha

- Local narrative occurrence: `data/source/book3/chapter4-the-seashell-of-forgetfulness.txt`
  and subsequent Book III chapters.
- Official location evidence: the shrine publishes its address as 2-9-89
  Sumiyoshi, Sumiyoshi-ku, Osaka:
  https://www.sumiyoshitaisha.net/access/index.html
- Official historical evidence: the shrine describes its maritime, literary and
  pilgrimage roles and records shrine rebuilding in 1606:
  https://www.sumiyoshitaisha.net/about/history.html
- Result: the shrine is an exact modern anchor with strong historical continuity;
  individual narrative buildings or inns around it remain separate, less precise
  entities.

### Ominato, Ise

- Local narrative occurrence: `data/source/book3/chapter9-the-pinwheel.txt`.
- Official evidence: Ise City describes the Ominato document corpus as especially
  important evidence for late-medieval trade, maritime transport and
  shipbuilding:
  https://www.city.ise.mie.jp/cul_spo_edu/culture/bunkazai_shiseki/bunkazai/komonjo/1009622.html
- Supporting official tourism evidence: the Ise City Tourism Association records
  Ominato's shipbuilding tradition:
  https://en.ise-kanko.jp/iseguide/hajimarinomachiise/
- Result: Ominato is a defensible settlement/port-area anchor. A ferry landing or
  route mentioned in the novel must not inherit a fabricated exact point.

## Open questions

- No official source found in this pass establishes a precise historical polygon
  for the novel's Hannya Plain scene.
- Modern coordinates should be recorded only after the normalized Book III
  location registry distinguishes settlements, shrines, routes, ferry crossings
  and fictional narrative sites.
