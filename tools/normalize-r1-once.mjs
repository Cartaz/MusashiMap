import assert from 'node:assert/strict';
import { readFileSync, writeFileSync } from 'node:fs';

// One-off correction of independently corroborated provenance-only person IDs.
// Runtime data and primary source files are never modified.
const byBook = new Map([
  [6, new Map([
    ['baiken', 'kohei'],
    ['ono_tadaaki', 'mikogami_tenzen']
  ])],
  [7, new Map([
    ['ono_tadaaki', 'mikogami_tenzen'],
    ['toranosuke', 'hamada_toranosuke'],
    ['honami_koetsu', 'koetsu']
  ])]
]);

const canonical = new Set(JSON.parse(readFileSync('data/characters.json', 'utf8'))
  .characters.map(character => character.id));

for (const [book, mapping] of byBook) {
  const filename = `research/book${book}-production-manifest.json`;
  const manifest = JSON.parse(readFileSync(filename, 'utf8'));
  const remap = id => mapping.get(id) ?? id;
  const remapArray = (object, field) => {
    if (Array.isArray(object[field])) object[field] = object[field].map(remap);
  };

  for (const [oldId, newId] of mapping) {
    assert(canonical.has(newId), `Book ${book}: missing production ID ${newId}`);
    assert(!canonical.has(oldId), `Book ${book}: ${oldId} is already canonical`);
    assert.equal(manifest.characters.filter(character => character.id === oldId).length, 1,
      `Book ${book}: expected exactly one character ${oldId}`);
    assert(!manifest.characters.some(character => character.id === newId),
      `Book ${book}: cannot merge records automatically for ${oldId} → ${newId}`);
  }

  for (const character of manifest.characters) character.id = remap(character.id);
  for (const chapter of manifest.chapters) {
    remapArray(chapter, 'characters');
    remapArray(chapter, 'referenced_characters');
  }
  for (const event of manifest.events) {
    remapArray(event, 'characters');
    remapArray(event, 'referenced_characters');
  }
  for (const state of manifest.character_states) state.character = remap(state.character);
  for (const relationship of manifest.relationships) remapArray(relationship, 'participants');

  const ids = new Set(manifest.characters.map(character => character.id));
  assert.equal(ids.size, manifest.characters.length, `Book ${book}: duplicate person IDs`);
  for (const chapter of manifest.chapters) {
    for (const id of [...chapter.characters, ...chapter.referenced_characters]) {
      assert(ids.has(id), `Book ${book}: unresolved chapter person ${id}`);
    }
    const overlap = chapter.characters.filter(id => chapter.referenced_characters.includes(id));
    assert.equal(overlap.length, 0, `Book ${book}: presence/mention overlap: ${overlap}`);
  }
  for (const event of manifest.events) {
    for (const id of [...event.characters, ...event.referenced_characters]) {
      assert(ids.has(id), `Book ${book}: unresolved event person ${id}`);
    }
  }
  for (const state of manifest.character_states) {
    assert(ids.has(state.character), `Book ${book}: unresolved state person ${state.character}`);
  }
  for (const relationship of manifest.relationships) {
    for (const id of relationship.participants) {
      assert(ids.has(id) || manifest.groups.some(group => group.id === id),
        `Book ${book}: unresolved relationship participant ${id}`);
    }
  }
  writeFileSync(filename, JSON.stringify(manifest, null, 2) + '\n');
  console.log(`Book ${book}: normalized ${[...mapping].map(([from, to]) => `${from} → ${to}`).join(', ')}`);
}
