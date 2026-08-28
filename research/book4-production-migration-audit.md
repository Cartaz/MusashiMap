# Book IV production migration audit

Date: 2026-08-28
Scope: Book IV (*Wind*), global sections 33–53 (`b4c1`–`b4c21`)

## Result

The canonical Book IV staging manifest has been reconciled with the existing
production registry and migrated as one publication unit. The migration adds
116 events, 71 end-of-chapter states, 23 character records, 35 location records
and six narrative groups. Four of the manifest's 39 places are existing
canonical locations (`rendaiji_field`, `yoshioka_school`, `sannen_hill_inn` and
`karasumaru_house`), and `yoshioka_disciples` is extended rather than duplicated.

Five relationships with mature reveal timing and seven progressive historical
context entries are published. Broader staging relationships remain in the
manifest instead of being promoted as timeless claims. The public boundary is
advanced from section 32 to 53 only after the full Book IV data passed the
semantic validator on a temporary copy without errors or warnings.

## Canonical reconciliation

- Staging IDs `sasaki_kojiro`, `seijuro`, `denshichiro` and
  `yagyu_sekishusai` resolve to `kojiro`, `yoshioka_seijuro`,
  `yoshioka_denshichiro` and `sekishusai` respectively.
- `karasumaru_residence` resolves to the established `karasumaru_house`.
- “False Sasaki Kojirō” and “Inugami Sensei” are not global aliases. The latter
  is a derisive name invented by Kojirō and immediately rejected by Matahachi.
- Matahachi's assumed Sasaki Kojirō identity ends at section 34. His canonical
  Hon'den Matahachi display resumes at the complete exposure in section 35.

## Semantic correction ledger

The migration was reviewed against the local Book IV chapter files rather than
accepted mechanically from staging. The material corrections are:

- Section 33: Seijūrō is carried away from Rendaiji toward medical care; he is
  not placed at the school. Kojirō and Akemi leave the field together, while
  Jōtarō retains only his last known field position.
- Section 34: Kōetsu invites Musashi to Hon'ami Lane, but Musashi neither accepts
  nor begins a stay in this section. Static wiki wording no longer anticipates
  the later hospitality.
- Section 35: the living Kojirō intervenes, recovers the certificate and exposes
  Matahachi's impersonation; the reader-facing identity window changes here.
- Section 38: the Musashi–Denshichirō duel is formally established. Yoshino is
  only named in a proposed visit and is not presented as already acquainted
  with Musashi.
- Section 43: Yoshino's position inside the Ōgiya is reported, not directly
  observed. Her state therefore has no physical map location.
- Section 47: Kojirō is travelling toward Ichijōji and has not arrived at the
  spreading pine. Musashi leaves Otsū and Jōtarō behind before proceeding alone.
- Section 49: Genjirō and Miike are explicitly dead. Kobashi is struck, but the
  chapter does not confirm his death.
- Section 50: accepting the cow is preparation for departure. Musashi and the
  ill Osugi remain at Mudōji until the following chapter.
- Section 51: Akemi's departure is a report received by Matahachi, not a
  physically observed route. Its event has no origin or destination geometry.
- Section 52: Kojirō diverts Matahachi into an unidentified brothel before Seta;
  no invented brothel location or false Seta position is assigned to Kojirō.
  The eastbound party's last explicit position is near Nakatsugawa, not Edo.
- Section 53: Musashi's act under the waterfall is austerity and purification,
  not suicide. The journey remains paused and does not reach Edo in Book IV.

The Ōgiya servant injured by Jōtarō is recorded as surviving. Mixed movement
events list only the people who physically move; named people involved solely
through reports or messages remain in `referenced_characters`.

## Traceability

The staging manifest and scrape audit use file-granular `source_ref` values for
all 116 events and 71 states. Production retains those references as the common
baseline, while critical reveals, deaths, departures and ambiguity corrections
receive explicit line ranges. At publication, 19 Book IV events and 23 Book IV
states carry line-level references.

Key evidence ranges include:

- `b4c1`, lines 290–398: duel report, Seijūrō's removal and the departure of
  Kojirō with Akemi;
- `b4c3`, lines 362–424 and 638–668: the living Kojirō, certificate recovery and
  Matahachi's complete exposure;
- `b4c5`, lines 716–726 and 810–821: Yasoma's confirmed death and Otsū found alive;
- `b4c7`, lines 398–427: confirmed deaths at Rengeōin;
- `b4c15`, lines 180–213 and 545–565: Kojirō's direction toward Ichijōji and
  Musashi's separate departure;
- `b4c17`, lines 205–305: Genjirō and Miike killed, Kobashi struck without a
  confirmed death;
- `b4c18`, lines 325–344: the cow accepted before the descent begins;
- `b4c19`, lines 282–310: Akemi's departure reported to Matahachi;
- `b4c20`, lines 231–339 and 345–365: the rejected “Inugami” nickname, the
  unidentified brothel and the final position near Nakatsugawa;
- `b4c21`, lines 114–174: austerity at the waterfall and the party's pause.

This ledger supplements rather than replaces the immutable staging manifest and
its scrape audit.

## Validation design

Movement geometry is owned by the production event contract. A route must have
both a recognized movement status and at least one physically participating
character; referenced-only reports cannot create a cartographic line. A CLI
regression test protects this invariant. This general rule prevents the class of
error exposed by Akemi's reported departure without adding a Book IV-specific
exception.

Runtime tests also protect the section-34/35 Matahachi identity transition and
verify that “Inugami” does not become an alias or temporal identity.

## Geographic and historical context

All 39 Book IV locations remain `coordinates: null`. Official modern or
institutional pages establish broad context, not precise narrative points, and
were not used to geocode modern monuments as scene coordinates:

- Kōetsu: Kyoto National Museum — https://www.kyohaku.go.jp/old/eng/special/koremade/20151010_rinpa.html
- Rengeōin/Sanjūsangendō — https://www.sanjusangendo.jp/history/
- Yoshino Tayū: Kyoto City Official Travel Guide — https://kyoto.travel/en/travel-inspiration/japanese-musical-instruments-show-tales-from-the-1000-year-capital/
- Ichijōji Sagarimatsu: Kyoto City Official Travel Guide — https://ja.kyoto.travel/tourism/single02.php?category_id=9&tourism_id=103
- Enryakuji — https://hieizan.or.jp/about/history.html
- Seta no Karahashi: Ōtsu Tourism Association — https://otsu.or.jp/en/thingstodo/spot62
- Otaki and Metaki: Nagiso Tourism Association — https://nagiso.jp/topics/o-taki-and-me-taki-waterfalls/

These sources never substitute for the local novel text when determining plot,
presence, identity, death, departure or arrival.

## Visual certification

The built Pages artifact was exercised at section 53 in headless Firefox at
1440×1000 and 390×844. Both layouts expose the Book IV title and section
controls without clipping or horizontal overflow. The remote basemap was not
available in the container; the Leaflet surface, narrative place icons,
unmapped overlay and responsive side controls still rendered and remained
usable in the designed degraded state.

## Acceptance gates

- production semantic validation at sections 1–53 with no warning;
- semantic equivalence of all production records at sections 1–32 to the Book
  III checkpoint;
- canonical staging validation for the remaining Books V–VII data;
- frontend/static validation and the complete runtime/CLI test suite;
- spoiler-filtered Pages artifact build and artifact validation;
- desktop and mobile visual certification of the built artifact, including the
  unmapped narrative overlay and graceful basemap degradation;
- clean whitespace diff before the atomic commit.
