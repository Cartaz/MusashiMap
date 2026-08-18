#!/usr/bin/env python3
"""Temporary Books I-II character-candidate audit.

Generates an intentionally over-inclusive candidate index from every source
chapter, using spaCy PERSON NER plus independent textual heuristics. The goal
is recall, not precision; the output is a review queue and never production
JSON.
"""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SOURCE_ROOTS = [ROOT / "data/source/musashi-book1", ROOT / "data/source/book2"]
OUT = ROOT / "research/generated-books1-2-character-audit.json"


def load_nlp():
    import spacy
    try:
        return spacy.load("en_core_web_sm")
    except OSError:
        return None


def heuristic_candidates(text: str):
    patterns = [
        r"\b(?:Lord|Lady|Master|Young Master|Old Master|Father|Mother|Brother|Sister|Captain|Prince|Emperor|Empress|General|Doctor|Reverend|Abbot|Priest)\s+[A-Z][A-Za-zÀ-ÖØ-öø-ÿ'ōūīāē]+(?:\s+[A-Z][A-Za-zÀ-ÖØ-öø-ÿ'ōūīāē]+){0,3}",
        r"\b[A-Z][A-Za-zÀ-ÖØ-öø-ÿ'ōūīāē]+\s+[A-Z][A-Za-zÀ-ÖØ-öø-ÿ'ōūīāē]+(?:\s+[A-Z][A-Za-zÀ-ÖØ-öø-ÿ'ōūīāē]+){0,2}",
    ]
    hits = []
    for p in patterns:
        for m in re.finditer(p, text):
            hits.append((m.group(0), m.start()))
    # Dialogue/reporting heuristic: names immediately before speech verbs.
    for m in re.finditer(r"\b([A-Z][A-Za-zÀ-ÖØ-öø-ÿ'ōūīāē]+(?:\s+[A-Z][A-Za-zÀ-ÖØ-öø-ÿ'ōūīāē]+){0,2})\s+(?:said|asked|replied|answered|shouted|cried|called|whispered|murmured|thought|told|ordered|warned|added)\b", text):
        hits.append((m.group(1), m.start()))
    return hits


def context(text: str, pos: int, radius: int = 180):
    a = max(0, pos - radius)
    b = min(len(text), pos + radius)
    return " ".join(text[a:b].split())


def main():
    nlp = load_nlp()
    records = []
    for root in SOURCE_ROOTS:
        for path in sorted(root.glob("*.txt")):
            text = path.read_text(encoding="utf-8")
            doc = nlp(text) if nlp else None
            hits = []
            if doc:
                for ent in doc.ents:
                    if ent.label_ == "PERSON":
                        hits.append((ent.text, ent.start_char, "spacy_person"))
            hits.extend((name, pos, "heuristic") for name, pos in heuristic_candidates(text))
            seen = set()
            for name, pos, method in hits:
                key = (name.lower(), context(text, pos))
                if key in seen:
                    continue
                seen.add(key)
                records.append({
                    "book": "I" if root.name == "musashi-book1" else "II",
                    "chapter_file": str(path.relative_to(ROOT)),
                    "candidate": name,
                    "method": method,
                    "context": context(text, pos),
                })
    records.sort(key=lambda r: (r["book"], r["chapter_file"], r["candidate"].lower(), r["method"]))
    OUT.write_text(json.dumps({"version": 1, "source": "data/source/book1 + data/source/book2", "records": records}, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Wrote {len(records)} candidate occurrences to {OUT}")

if __name__ == "__main__":
    main()
