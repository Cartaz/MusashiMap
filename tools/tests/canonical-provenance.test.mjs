import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const read = file => JSON.parse(readFileSync(new URL(`../../${file}`, import.meta.url), "utf8"));
const normalizeName = name => name.normalize("NFKD")
  .replace(/\p{M}/gu, "")
  .toLowerCase()
  .replace(/[^a-z0-9]/g, "");

// Only compare authoritative production names and temporal display identities.
// Research-only people remain valid until they can be identified from evidence.
function findCanonicalNameConflicts(characters, identities, manifests) {
  const canonicalIds = new Set(characters.map(character => character.id));
  const owners = new Map();
  const register = (name, id) => {
    if (typeof name !== "string" || !name.trim()) return;
    const key = normalizeName(name);
    if (!owners.has(key)) owners.set(key, new Set());
    owners.get(key).add(id);
  };
  characters.forEach(character => register(character.name, character.id));
  identities.forEach(identity => register(identity.display_name, identity.character_id));

  const conflicts = [];
  for (const manifest of manifests) {
    for (const character of manifest.characters) {
      if (canonicalIds.has(character.id)) continue;
      const matches = owners.get(normalizeName(character.name));
      if (matches?.size === 1) {
        conflicts.push(`${manifest.book.number}: ${character.id} duplicates canonical ${[...matches][0]} (${character.name})`);
      }
    }
  }
  return conflicts;
}

test("a research character must reuse an identifiable production person ID", () => {
  const characters = read("data/characters.json").characters;
  const identities = read("data/identities.json").identities;
  const manifests = [3, 4, 5, 6, 7].map(book => read(`research/book${book}-production-manifest.json`));
  assert.deepEqual(findCanonicalNameConflicts(characters, identities, manifests), []);
});

test("the provenance contract detects a later-known name with a second internal ID", () => {
  const characters = [{ id: "original", name: "Earlier name" }];
  const identities = [{ character_id: "original", display_name: "Later name" }];
  const manifests = [{ book: { number: 7 }, characters: [{ id: "duplicate", name: "Later name" }] }];
  assert.deepEqual(findCanonicalNameConflicts(characters, identities, manifests), [
    "7: duplicate duplicates canonical original (Later name)"
  ]);
});

test("apostrophes and diacritics cannot hide a duplicate canonical identity", () => {
  const characters = [{ id: "koetsu", name: "Hon'ami Kōetsu" }];
  const manifests = [{ book: { number: 5 }, characters: [{ id: "duplicate", name: "Honami Koetsu" }] }];
  assert.deepEqual(findCanonicalNameConflicts(characters, [], manifests), [
    "5: duplicate duplicates canonical koetsu (Honami Koetsu)"
  ]);
});
