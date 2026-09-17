import assert from 'node:assert/strict';
import { readFileSync, writeFileSync } from 'node:fs';

// One-time repair: these name-identical person IDs were exposed by the new
// cross-layer identity regression test. No primary texts or runtime data change.
const changes = new Map([
  [4, new Map([
    ['seijuro', 'yoshioka_seijuro'],
    ['denshichiro', 'yoshioka_denshichiro'],
    ['yagyu_sekishusai', 'sekishusai']
  ])],
  [5, new Map([
    ['yagyu_munenori', 'munenori'],
    ['honami_koetsu', 'koetsu']
  ])],
  [6, new Map([['yagyu_munenori', 'munenori']])],
  [7, new Map([['yagyu_munenori', 'munenori']])]
]);
const canonical = new Set(JSON.parse(readFileSync('data/characters.json', 'utf8')).characters.map(character => character.id));
const updateList = (record, key, map) => {
  if (Array.isArray(record[key])) record[key] = record[key].map(id => map.get(id) ?? id);
};
for (const [book, mapping] of changes) {
  const path = `research/book${book}-production-manifest.json`;
  const manifest = JSON.parse(readFileSync(path, 'utf8'));
  for (const [oldId, newId] of mapping) {
    assert(canonical.has(newId), `Missing production character ${newId}`);
    assert(!canonical.has(oldId), `${oldId} already canonical`);
    assert.equal(manifest.characters.filter(character => character.id === oldId).length, 1,
      `Book ${book}: expected exactly one ${oldId}`);
    assert(!manifest.characters.some(character => character.id === newId),
      `Book ${book}: preexisting ${newId} needs a human-reviewed merge`);
  }
  for (const character of manifest.characters) character.id = mapping.get(character.id) ?? character.id;
  for (const chapter of manifest.chapters) {
    updateList(chapter, 'characters', mapping);
    updateList(chapter, 'referenced_characters', mapping);
  }
  for (const event of manifest.events) {
    updateList(event, 'characters', mapping);
    updateList(event, 'referenced_characters', mapping);
  }
  for (const state of manifest.character_states) state.character = mapping.get(state.character) ?? state.character;
  for (const relation of manifest.relationships) updateList(relation, 'participants', mapping);

  const personIds = new Set(manifest.characters.map(character => character.id));
  const groups = new Set(manifest.groups.map(group => group.id));
  assert.equal(personIds.size, manifest.characters.length, `Book ${book}: duplicate IDs`);
  for (const chapter of manifest.chapters) {
    for (const id of [...chapter.characters, ...chapter.referenced_characters]) {
      assert(personIds.has(id), `Book ${book}: missing chapter reference ${id}`);
    }
    assert(!chapter.characters.some(id => chapter.referenced_characters.includes(id)),
      `Book ${book}: physical/referenced overlap in ${chapter.id}`);
  }
  for (const event of manifest.events) {
    for (const id of [...event.characters, ...event.referenced_characters]) {
      assert(personIds.has(id), `Book ${book}: missing event reference ${id}`);
    }
  }
  for (const state of manifest.character_states) assert(personIds.has(state.character), `Book ${book}: missing state person ${state.character}`);
  for (const relation of manifest.relationships) {
    for (const id of relation.participants) assert(personIds.has(id) || groups.has(id), `Book ${book}: missing relationship person/group ${id}`);
  }
  writeFileSync(path, JSON.stringify(manifest, null, 2) + '\n');
  console.log(`Book ${book}: normalized ${[...mapping].map(([from, to]) => `${from} -> ${to}`).join(', ')}`);
}
