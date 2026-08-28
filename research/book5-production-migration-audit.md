# Book V production migration audit

Date: 2026-08-29
Scope: Book V (*Sky*), global sections 54–79 (`b5c1`–`b5c26`)

## Result

The canonical Book V staging manifest has been reconciled with the existing
production registries and migrated as one publication unit. Production adds
105 events, 86 progressive end-of-chapter states, 29 characters, 48 unmapped
locations and eight groups. It also publishes 17 relationships whose reveal
timing is useful and narratively mature; the broader staging relationship set
remains research data rather than becoming a collection of timeless claims.

The manifest's 24 states are a sparse book-end ledger and cannot support the
runtime's chapter-by-chapter position contract. Weakening that contract would
make every later consumer account for missing chronology. Production therefore
derives 86 progressive states from the local chapter files and keeps the runtime
interface unchanged. The public boundary advances from section 53 to 79 only
after this complete dataset passes the semantic validator on a temporary copy
without errors or warnings.

## Canonical reconciliation

- Staging IDs `honami_koetsu` and `yagyu_munenori` resolve to the existing
  `koetsu` and `munenori` records.
- The established `edo` location is reused as a direction or intended
  destination. It is never treated as an arrival merely because the name is
  mentioned.
- Sannosuke is not a global alias for Iori. A temporal identity displays
  Sannosuke in section 67 and Misawa Iori from the explicit renaming in section
  68.
- Hanagiri is Akemi's house name only in section 65. “Masana,” used in a
  signature by Musashi, is not promoted to a new character or global identity.
- Objects held by Kōsuke and donation records naming Daizō do not establish the
  owners' physical presence.

## Semantic correction ledger

The migration was reviewed against all 26 local Book V chapter files rather
than accepted mechanically from staging. Material decisions include:

- Section 54: Matahachi attacks Jōtarō and abducts Otsū. The route after the
  Kōzenji turn remains unknown, while Musashi stays physically separate and
  returns to search.
- Sections 55–59: reports about Jōtarō and Daizō guide Musashi's search but do
  not create their physical presence. Geki leaves alone toward Wada; Musashi
  resumes his own search.
- Section 61: the scarred rōnin's assault of Akemi is encoded from the explicit
  aftermath and the chapter's own implication. No stronger detail is invented.
- Sections 63–64 and 69–70: the narrative contains explicit long time jumps.
  States are tied to the new chapter present instead of assuming continuous
  travel across the skipped interval.
- Section 65: Hanagiri is a temporary house name. Akemi escapes along an
  unestablished route; her destination is not inferred.
- Sections 67–68: Sannosuke becomes Musashi's pupil before being renamed Iori.
  The wiki, sidebar identity and tests all share this reveal boundary.
- Section 70: Sado is ordered to find Musashi but learns that Musashi and Iori
  have already left. No encounter is created.
- Sections 72–74: Kojirō's sword at Kōsuke's shop does not place Kojirō there.
  Iori, Otsū and Hyōgo cross paths without Iori recognizing Otsū or producing a
  reunion.
- Section 76: Jūrō and Koroku die explicitly. Shinzō survives Kojirō's severe
  neck wound, and Osugi survives being pushed into a ditch.
- Section 78: Kagenori remains gravely ill, not dead. Yogorō makes a decision,
  but the content is withheld and remains undisclosed in production prose.
- Section 79: Musashi throws Tazaemon into the moat and escapes with Shinzō;
  no death is inferred. Shinzō reaches sight of his father's house alive, while
  Musashi departs toward an unknown destination.

Mixed movement events list only physical travelers. People involved through
reports, memories, letters, ownership or plans remain in reference fields and
cannot generate cartographic lines.

## Traceability

The staging manifest and scrape audit use file-granular `source_ref` values for
all 105 events and 24 sparse states. Production retains file-granular references
as the common baseline. The independently derived state ledger also records its
exact source file. Critical reveals, deaths, departures, time jumps and semantic
ambiguities receive explicit line ranges: 20 Book V events and ten Book V
states carry line-level references at publication.

Key evidence ranges include:

- `b5c1`, lines 120–153: Jōtarō is injured and Otsū is carried away by
  Matahachi along a route not established beyond the turn;
- `b5c8`, lines 393–446: Jōtarō is knocked unconscious and Akemi is found in
  the explicit aftermath of the assault;
- `b5c11`, lines 4–14, and `b5c17`, lines 44–49: the two roughly
  year-and-a-half narrative jumps;
- `b5c12`, lines 250–283: Hanagiri/Akemi evades Kojirō and escapes without a
  stated destination;
- `b5c14`, lines 180–289, and `b5c15`, lines 4–22: San'emon's burial,
  Sannosuke's acceptance as pupil and the subsequent Iori renaming;
- `b5c20`, lines 297–327: Sukekurō's rescue of Otsū is retrospective rather
  than a current physical event;
- `b5c21`, lines 85–246: the urgent letter, Hyōgo and Otsū's departure, and
  their unrecognized crossing with Iori;
- `b5c23`, lines 155–277: the confirmed deaths of Jūrō and Koroku and Shinzō's
  surviving severe wound;
- `b5c25`, lines 158–175: Yogorō's undisclosed decision;
- `b5c26`, lines 145–208: nonlethal escape, Shinzō's safe delivery and the
  subsequent reputation campaign.

This ledger supplements rather than replaces the immutable staging manifest
and its chapter-by-chapter scrape audit.

## Validation design

Progressive wiki display names are now resolved by the reader-progress module,
not by individual render callers. The data validator checks their reveal keys,
the Pages builder filters them at the publication boundary, the artifact
validator rejects leaks and a runtime test protects the threshold. This applies
the already established `display_name_by_section` contract uniformly, including
the earlier Kojirō reveal, instead of adding an Iori-only branch.

Route geometry remains owned by the production event contract. Referenced-only
reports cannot draw routes, and confirmed or uncertain route status requires
explicit geometry or a direction label.

## Geographic and historical context

All 48 Book V locations remain `coordinates: null`. Official sources establish
broad historical context but do not pinpoint private, fictional or uncertain
narrative sites:

- Fukushima barrier: Kiso Town — https://www.town-kiso.com/manabu/rekishi/bunkazai/m100079/
- Narai-juku: Shiojiri City — https://www.city.shiojiri.lg.jp/site/bunkazaihouhou/29585.html
- Shimosuwa: Shimosuwa Town — https://www.town.shimosuwa.lg.jp/www/contents/1001000000491/index.html
- Mount Takao and Yakuōin: Hachiōji City — https://www.city.hachioji.tokyo.jp/kankobunka/003/monogatari/p026961.html
- Sensōji — https://www.senso-ji.jp/english/
- Kanda Myōjin — https://www.kandamyoujin.or.jp/what/
- Tone River works: MLIT Kanto Regional Development Bureau — https://www.ktr.mlit.go.jp/tonejo/tonejo00185.html
- Azabu historical place names: Minato City — https://www.city.minato.tokyo.jp/kouhou/kuse/gaiyo/chimerekishi/index-azabu.html
- Akagi and Ushigome context: Shinjuku City — https://www.city.shinjuku.lg.jp/content/000360259.pdf

These sources never substitute for the local novel text when determining plot,
presence, identity, death, departure or arrival.

## Visual certification

The built Pages artifact was exercised at section 79 in Firefox at 1440×1000
and 390×844 through WebDriver BiDi, after asynchronous data initialization. Both
layouts show *Sky — The Talk of the Town*, report `Database: validato` and emit
no browser-console errors. Measured document width equals client width in both
viewports, so there is no horizontal overflow; the mobile document scrolls only
vertically as expected.

The remote vector surface is optional. In this run the OSM/Leaflet fallback
loaded and the established narrative place markers remained visible and usable
on desktop and mobile. The artifact therefore also retains its designed
degraded behavior when the vector basemap or a remote style is unavailable.

## Acceptance gates

- production semantic validation at sections 1–79 with no warning;
- exact semantic hashes for all event and state records at sections 1–53 against
  the Book IV checkpoint;
- canonical staging validation for Books V–VII;
- frontend/static validation and the complete runtime/CLI test suite;
- spoiler-filtered Pages build and artifact validation;
- desktop and mobile visual certification, including the unmapped narrative
  overlay and graceful basemap degradation;
- clean whitespace diff before the atomic commit.
