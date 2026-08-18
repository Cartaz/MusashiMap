from pathlib import Path
import re
from collections import Counter

ROOT = Path('data/source')
BOOKS = {'I': ROOT / 'book1', 'II': ROOT / 'book2'}

# Strong signals for Japanese romanized personal names in this corpus.
NAME_PATTERNS = [
    re.compile(r'\b[A-Z][A-Za-zÀ-ÖØ-öø-ÿōūīāē]+(?:[-\'’][A-Za-zÀ-ÖØ-öø-ÿōūīāē]+)?\s+[A-Z][A-Za-zÀ-ÖØ-öø-ÿōūīāē]+(?:[-\'’][A-Za-zÀ-ÖØ-öø-ÿōūīāē]+)?\b'),
    re.compile(r'\b(?:Lord|Master|Young Master|Uncle|Father|Mother|Captain|Abbot|Priest|Doctor)\s+[A-Z][A-Za-zÀ-ÖØ-öø-ÿōūīāē]+(?:\s+[A-Z][A-Za-zÀ-ÖØ-öø-ÿōūīāē]+){0,2}\b'),
]

# Common non-person proper-name heads. These remain candidates for manual review,
# rather than being silently discarded.
NON_PERSON_HEADS = {
    'Mount','Mt','River','Lake','Hill','Hills','Temple','Shrine','School','Castle',
    'Bridge','Road','Avenue','Street','Mountain','Province','City','Village','Valley',
    'District','Plain','Gate','House','Hall','Garden','Station','Pond','River','Fief',
    'Army','Western','Eastern','Tokugawa','Yoshioka','Hōzōin','Kōfukuji','Kiyomizudera',
}

seen = {}
for book, d in BOOKS.items():
    for p in sorted(d.glob('*.txt')):
        text = p.read_text(encoding='utf-8')
        for pat in NAME_PATTERNS:
            for m in pat.finditer(text):
                cand = re.sub(r'\s+', ' ', m.group(0)).strip(' ,.;:!?\"“”')
                # retain all candidates, but count and collect contexts for manual audit
                line_start = text.rfind('\n', 0, m.start()) + 1
                line_end = text.find('\n', m.end())
                if line_end < 0: line_end = len(text)
                ctx = text[line_start:line_end].strip()
                key = cand.lower()
                rec = seen.setdefault(key, {'display': cand, 'books': set(), 'chapters': set(), 'count': 0, 'contexts': []})
                rec['books'].add(book)
                rec['chapters'].add(p.stem)
                rec['count'] += 1
                if len(rec['contexts']) < 4 and ctx not in rec['contexts']:
                    rec['contexts'].append(ctx)

print('# Exhaustive candidate character-name audit — Books I–II\n')
print('Generated mechanically from every source chapter. This is a candidate index, not a classification. Every candidate must be manually checked against the source context.\n')
print(f'Total unique candidate strings: {len(seen)}\n')
for key, rec in sorted(seen.items(), key=lambda kv: (-kv[1]['count'], kv[0])):
    print(f"## {rec['display']}")
    print(f"- Books: {', '.join(sorted(rec['books']))}")
    print(f"- Chapters: {', '.join(sorted(rec['chapters']))}")
    print(f"- Occurrences: {rec['count']}")
    for c in rec['contexts']:
        print(f"- Context: {c}")
    print()
