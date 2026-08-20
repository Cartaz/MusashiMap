#!/usr/bin/env python3
"""Audit character-name occurrences chapter by chapter.

This is a research aid, not a narrative-state extractor. It deliberately keeps
occurrence evidence separate from presence, location, or movement conclusions.

Usage:
    python3 tools/audit-character-occurrences.py \
      --root data/source/book1 \
      --character "Jōtarō"

The report excludes chapter headings and page-number footer lines, because a
name appearing in a chapter title is not evidence that the character is
physically present in the chapter.
"""

from __future__ import annotations

import argparse
import json
import re
import unicodedata
from pathlib import Path

PAGE_RE = re.compile(r"^\s*(?:Page|Pagina)\s+\d+(?:\s+of\s+\d+|\s+di\s+\d+)?\s*$", re.I)


def normalize(s: str) -> str:
    s = unicodedata.normalize("NFC", s)
    return s.replace("’", "'").replace("‘", "'").replace("“", '"').replace("”", '"')


def paragraph_ranges(lines: list[str]) -> list[tuple[int, int]]:
    ranges: list[tuple[int, int]] = []
    start: int | None = None
    for i, line in enumerate(lines):
        if line.strip():
            if start is None:
                start = i
        elif start is not None:
            ranges.append((start, i))
            start = None
    if start is not None:
        ranges.append((start, len(lines)))
    return ranges


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--root", type=Path, required=True)
    parser.add_argument("--character", required=True)
    parser.add_argument("--output", type=Path)
    args = parser.parse_args()

    files = sorted(args.root.glob("*.txt"))
    if not files:
        raise SystemExit(f"No chapter .txt files found under {args.root}")

    target = normalize(args.character)
    # Match the complete name, not substrings inside another word.
    pattern = re.compile(rf"(?<!\w){re.escape(target)}(?!\w)", re.I)

    report: dict[str, object] = {
        "character": args.character,
        "root": str(args.root),
        "chapters": [],
        "totals": {"occurrences": 0, "chapters_with_occurrences": 0},
        "notes": [
            "Occurrences are evidence only; they do not imply physical presence.",
            "Chapter headings and page-number footer lines are excluded.",
            "A repeated occurrence inside one narrative paragraph remains one textual occurrence per match; downstream analysis must still group them by event/scene.",
        ],
    }

    chapter_results: list[dict[str, object]] = []

    for path in files:
        raw = path.read_text(encoding="utf-8")
        lines = [normalize(line.rstrip("\n")) for line in raw.splitlines()]

        # Chapter files in MusashiMap have the chapter title as their first
        # non-empty line. Remove it from searchable content, regardless of
        # whether the target happens to occur in the title.
        first_nonempty = next((i for i, line in enumerate(lines) if line.strip()), None)
        excluded: set[int] = set()
        if first_nonempty is not None:
            excluded.add(first_nonempty)

        # Also exclude OCR/page footer artefacts.
        for i, line in enumerate(lines):
            if PAGE_RE.match(line):
                excluded.add(i)

        paragraphs = paragraph_ranges(lines)
        paragraph_for_line: dict[int, tuple[int, int]] = {}
        for start, end in paragraphs:
            for i in range(start, end):
                paragraph_for_line[i] = (start, end)

        occurrences: list[dict[str, object]] = []
        for i, line in enumerate(lines):
            if i in excluded:
                continue
            for match in pattern.finditer(line):
                start, end = paragraph_for_line.get(i, (i, i + 1))
                context = " ".join(x.strip() for x in lines[start:end] if x.strip())
                occurrences.append(
                    {
                        "line": i + 1,
                        "column": match.start() + 1,
                        "text": line.strip(),
                        "paragraph": context,
                    }
                )

        result = {
            "file": str(path),
            "occurrences": len(occurrences),
            "evidence": occurrences,
        }
        chapter_results.append(result)

    totals = {
        "occurrences": sum(int(c["occurrences"]) for c in chapter_results),
        "chapters_with_occurrences": sum(1 for c in chapter_results if c["occurrences"]),
    }
    report["chapters"] = chapter_results
    report["totals"] = totals

    text = json.dumps(report, ensure_ascii=False, indent=2) + "\n"
    if args.output:
        args.output.write_text(text, encoding="utf-8")
    else:
        print(text, end="")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
