import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { getReaderSnapshot, getVisibleCharacters, getProgressiveValue } from "../../js/reader-progress.js";

const read = file => JSON.parse(readFileSync(new URL(`../../${file}`, import.meta.url), "utf8"));
const characters = read("data/characters.json").characters;
const events = read("data/events.json").events;
const states = read("data/character-states.json").character_states;
const characterWiki = read("data/context/character-wiki.json").characters;
const evidence = { events, states, characterWiki };

test("a shared courtesan title does not merge the two women or reveal the successor early", () => {
  const before = getVisibleCharacters(characters, 105, evidence).map(character => character.id);
  const after = getVisibleCharacters(characters, 106, evidence).map(character => character.id);
  assert.ok(before.includes("yoshino_tayu"));
  assert.ok(!before.includes("yoshino_second"));
  assert.ok(after.includes("yoshino_tayu") && after.includes("yoshino_second"));

  const first = characters.find(character => character.id === "yoshino_tayu");
  const second = characters.find(character => character.id === "yoshino_second");
  assert.ok(!first.present_in.includes(106));
  assert.deepEqual(second.present_in, [106]);
  assert.equal(second.historical_status, "unknown");
});

test("the Sakai farewell uses the successor and recalls the first Yoshino without moving her there", () => {
  const first = getReaderSnapshot({ events, states }, 106, ["yoshino_tayu"]);
  const second = getReaderSnapshot({ events, states }, 106, ["yoshino_second"]);
  assert.equal(first.sectionEvents.length, 0);
  assert.equal(second.sectionEvents.length, 1);
  assert.ok(second.sectionEvents[0].referenced_characters.includes("yoshino_tayu"));
  assert.equal(first.selectedStates.at(-1)?.section, 43);
  assert.match(getProgressiveValue(characterWiki.yoshino_tayu.current_by_section, 106), /sconosciuta/);

  const manifest = read("research/book7-production-manifest.json");
  const farewell = manifest.events.find(event => event.id === "b7c10-e01");
  assert.ok(farewell.characters.includes("yoshino_second"));
  assert.ok(!farewell.characters.includes("yoshino_tayu"));
  assert.ok(!manifest.characters.some(character => character.id === "yoshino_dayu"));
  assert.match(farewell.source_ref, /:L4-L35$/);
});
