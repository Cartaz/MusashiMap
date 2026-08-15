# MusashiMap

Interactive, spoiler-safe map for following the movements and relationships of the principal characters in Eiji Yoshikawa's *Musashi*.

## Project goals

- Represent character locations chapter by chapter.
- Track arrivals, departures, journeys, meetings and other relevant events.
- Never expose information from chapters beyond the reader's selected chapter.
- Distinguish explicit textual facts from deductions.
- Preserve uncertainty instead of inventing geographic precision.
- Keep the application static and deployable through GitHub Pages.

## Source corpus

The research corpus is the Internet Archive text:

https://archive.org/stream/EijiYoshikawaMusashi/Eiji%20Yoshikawa%20-%20Musashi_djvu.txt

This corpus is used for research and analysis only. The repository should not contain a reproduction of the copyrighted novel.

## Architecture

The project separates:

1. source/chapter research;
2. normalized narrative events;
3. character state by chapter;
4. locations;
5. the static web application.

Analysis is performed using overlapping chapter windows (1–2, 2–3, 3–4, ...), while the resulting data is stored at chapter/event level.

## Spoiler rule

The UI may only query data whose `chapter` is less than or equal to the currently selected reader chapter.

No future location, relationship, event, or destination may be revealed.

## Status

Initial project scaffold. No narrative data has been validated yet.
