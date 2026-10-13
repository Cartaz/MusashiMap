import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import { buildArchive, searchArchive, getRelationNeighbors, hasCoordinates } from "../../js/archive-model.js";
import { describeRelationship, relationshipTypes } from "../../js/relationship-labels.js";

const read = name => JSON.parse(fs.readFileSync(new URL(`../../data/${name}.json`, import.meta.url)));
const data = { characters: read("characters"), locations: read("locations"), events: read("events"),
  states: read("character-states"), chapters: read("chapters"), identities: read("identities"),
  characterWiki: read("context/character-wiki"), relationships: read("relationships") };

test("all 112 archive snapshots exclude future facts, states, places and relationships", () => {
  for (let section = 1; section <= 112; section++) {
    const archive = buildArchive(data, section);
    assert.ok(archive.events.every(item => item.section <= section));
    assert.equal(archive.events.length, data.events.events.filter(item => item.section <= section).length);
    assert.ok(archive.chapters.every(item => item.number <= section));
    assert.ok(archive.places.every(item => item.first <= section));
    for (const character of archive.characters) {
      assert.ok(character.first <= section);
      assert.ok(character.appearances.every(at => at <= section));
      assert.ok(!character.state || character.state.section <= section);
      assert.equal(character.aliases, undefined);
      assert.equal(character.role, undefined);
      assert.equal(character.current_by_section, undefined);
    }
    const ids = new Set(archive.characters.map(item => item.id));
    assert.ok(archive.relationships.every(item => item.first <= section && ids.has(item.from) && ids.has(item.to)));
  }
});

test("search never matches future names or aliases, including after a rewind", () => {
  assert.equal(searchArchive(buildArchive(data, 1), "characters", "Ogin").length, 0);
  assert.equal(searchArchive(buildArchive(data, 7), "characters", "Musashi").length, 0);
  assert.equal(searchArchive(buildArchive(data, 7), "characters", "Aoki").length, 0);
  assert.ok(searchArchive(buildArchive(data, 8), "characters", "Musashi").some(item => item.id === "musashi"));
  assert.ok(searchArchive(buildArchive(data, 8), "characters", "Takezo").some(item => item.id === "musashi"));
  buildArchive(data, 112);
  assert.equal(searchArchive(buildArchive(data, 1), "characters", "Musashi").length, 0);
  assert.equal(searchArchive(buildArchive(data, 1), "characters", "Kojiro").length, 0);
});

test("final roles and canonical aliases cannot contaminate early search", () => {
  const fixture = structuredClone(data);
  fixture.characters.characters[0].aliases.push("FutureSecretAlias");
  fixture.characterWiki.characters.musashi = { display_name: "Miyamoto Musashi", role: "FutureSecretRole", current_by_section: { "1": "Known fact", "112": "FutureSecretFact" } };
  const archive = buildArchive(fixture, 1);
  for (const secret of ["FutureSecretAlias", "FutureSecretRole", "FutureSecretFact"]) {
    assert.equal(searchArchive(archive, "characters", secret).length, 0);
  }
});

test("archive includes events about secondary characters without a main selection", () => {
  const archive = buildArchive(data, 112);
  const main = new Set(archive.characters.filter(item => item.main).map(item => item.id));
  const secondaryOnly = data.events.events.filter(item => !(item.characters ?? []).some(id => main.has(id)));
  assert.ok(secondaryOnly.length > 0);
  assert.ok(secondaryOnly.every(item => archive.events.some(event => event.id === item.id)));
});

test("unrevealed identity links cannot connect Baiken to Kohei or the young man to the certificate", () => {
  for (const section of [26, 27]) {
    const archive = buildArchive(data, section);
    const baiken = archive.characters.find(character => character.id === "kohei");
    assert.equal(baiken.name, "Shishido Baiken");
    assert.doesNotMatch(baiken.summary, /Temma|Kōhei|Kohei/);
    assert.ok(!archive.events.some(event => event.section < 26 && event.characters.includes(baiken.id)));
    assert.ok(!archive.relationships.some(relation => relation.first < 26 && [relation.from, relation.to].includes(baiken.id)));
    assert.ok(searchArchive(archive, "characters", "Kohei").every(character => character.id !== baiken.id));
    assert.ok(archive.characters.some(character => character.id === "kohei-before-26"));
  }
  const revealed = buildArchive(data, 28);
  assert.ok(!revealed.characters.some(character => character.id === "kohei-before-26"));
  assert.ok(searchArchive(revealed, "characters", "Baiken").some(character => character.id === "kohei"));
  const unnamed = buildArchive(data, 22);
  assert.equal(unnamed.characters.find(character => character.id === "kojiro").name, "Handsome young man");
  assert.ok(searchArchive(unnamed, "characters", "Sasaki").every(character => character.id !== "kojiro"));
  assert.ok(unnamed.events.filter(event => event.section < 22).every(event => !event.characters.includes("kojiro")));
});

test("unknown coordinates remain searchable without a fabricated map target", () => {
  const archive = buildArchive(data, 112);
  const unmapped = archive.places.find(item => item.id === "saikachi_slope");
  assert.ok(unmapped);
  assert.equal(hasCoordinates(unmapped), false);
  assert.ok(searchArchive(archive, "places", "Saikachi").includes(unmapped));
});

test("neighbor grouping deduplicates reciprocal facts but preserves distinct relationships", () => {
  const archive = buildArchive(data, 112);
  const neighbors = getRelationNeighbors(archive, "musashi");
  const matahachi = neighbors.find(item => item.character.id === "matahachi");
  assert.equal(matahachi.relations.filter(item => item.description === "Amici d'infanzia").length, 1);
  assert.ok(getRelationNeighbors(buildArchive(data, 1), "musashi").every(item => item.relations.every(relation => relation.first === 1)));
  assert.ok(getRelationNeighbors(archive, "musashi", "family").every(item => item.relations.every(relation => relation.type === "family")));
});

test("every recorded relationship has a readable Italian description", () => {
  for (const relationship of data.relationships.relationships) {
    assert.ok(relationshipTypes[relationship.type]);
    assert.notEqual(describeRelationship(relationship), relationshipTypes[relationship.type], relationship.subtype);
    assert.doesNotMatch(describeRelationship(relationship), /_/);
  }
});
