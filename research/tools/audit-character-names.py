from pathlib import Path
import re

ROOT = Path('data/source')
BOOKS = {'I': ROOT / 'book1', 'II': ROOT / 'book2'}

NAME_PATTERNS = [
    re.compile(r"\b[A-Z][A-Za-zÀ-ÖØ-öø-ÿōūīāē]+(?:[-'’][A-Za-zÀ-ÖØ-öø-ÿōūīāē]+)?\s+[A-Z][A-Za-zÀ-ÖØ-öø-ÿōūīāē]+(?:[-'’][A-Za-zÀ-ÖØ-öø-ÿōūīāē]+)?\b"),
    re.compile(r"\b(?:Lord|Master|Young Master|Uncle|Father|Mother|Captain|Abbot|Priest|Doctor|Brother|Sister)\s+[A-Z][A-Za-zÀ-ÖØ-öø-ÿōūīāē]+(?:\s+[A-Z][A-Za-zÀ-ÖØ-öø-ÿōūīāē]+){0,2}\b"),
]

NON_PERSON_WORDS = {
    'Mount','Mt','River','Lake','Hill','Hills','Temple','Shrine','School','Castle','Bridge',
    'Road','Avenue','Street','Mountain','Province','City','Village','Valley','District','Plain',
    'Gate','House','Hall','Garden','Station','Pond','Fief','Army','Western','Eastern','Tokugawa',
    'Yoshioka','Hōzōin','Kōfukuji','Kiyomizudera','Kyoto','Nara','Ise','Yamato','Mino','Himeji',
    'Mimasaka','Tajima','Kishū','Koyagyū','Kamo','Kizu','Uji','Takase','Hannya','Hōzōin',
}

SENTENCE_STARTERS = {
    'As','When','While','Where','After','Before','Since','Though','Although','But','And','Or','If',
    'This','That','These','Those','The','A','An','His','Her','Their','Our','Your','My','One','Some',
    'Many','Several','Each','Both','Then','Now','Just','Even','Only','Still','Yet','From','Into','At',
    'On','In','To','For','With','Without','Through','Around','Near','Beside','During','Under','Over',
}

seen = {}
for book, d in BOOKS.items():
    for p in sorted(d.glob('*.txt')):
        text = p.read_text(encoding='utf-8')
        for pat in NAME_PATTERNS:
            for m in pat.finditer(text):
                cand = re.sub(r'\s+', ' ', m.group(0)).strip(' ,.;:!?\"“”')
                words = cand.split()
                if not words or words[0] in SENTENCE_STARTERS:
                    continue
                if any(w in NON_PERSON_WORDS for w in words):
                    continue
                # A capitalized two-token phrase is still only a candidate: context decides.
                line_start = text.rfind('\n', 0, m.start()) + 1
                line_end = text.find('\n', m.end())
                if line_end < 0:
                    line_end = len(text)
                ctx = text[line_start:line_end].strip()
                key = cand.lower()
                rec = seen.setdefault(key, {'display': cand, 'books': set(), 'chapters': set(), 'count': 0, 'contexts': []})
                rec['books'].add(book)
                rec['chapters'].add(p.stem)
                rec['count'] += 1
                if len(rec['contexts']) < 6 and ctx not in rec['contexts']:
                    rec['contexts'].append(ctx)

print('# Exhaustive candidate character-name audit — Books I–II\n')
print('Generated mechanically from every source chapter. Candidates are deliberately over-inclusive; classification requires source-context review.\n')
print(f'Total unique candidate strings after non-person filtering: {len(seen)}\n')
for key, rec in sorted(seen.items(), key=lambda kv: (-kv[1]['count'], kv[0])):
    print(f"## {rec['display']}")
    print(f"- Books: {', '.join(sorted(rec['books']))}")
    print(f"- Chapters: {', '.join(sorted(rec['chapters']))}")
    print(f"- Occurrences: {rec['count']}")
    for c in rec['contexts']:
        print(f"- Context: {c}")
    print()
