import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import { validateMovementEvent } from "./movement-contract.js";

import {
  createReaderProgress,
  getCharacterIntroductionSection,
  getProgressiveDisplayName,
  getReaderSnapshot,
  getRelevantHistoricalWiki,
  getVisibleCharacters,
  resolveCharacterPosition
} from "./reader-progress.js";

test("CLI and browser share one movement evidence contract", () => {
  assert.deepEqual(validateMovementEvent({
    characters: ["traveler"],
    movement_status: "confirmed_route",
    destination_label: "east toward Edo"
  }), []);
  assert.deepEqual(validateMovementEvent({
    characters: ["traveler"],
    movement_status: "confirmed_route"
  }), ["route_evidence_required"]);
  assert.deepEqual(validateMovementEvent({
    characters: [],
    origin: "reported-place",
    movement_status: null
  }), ["movement_status_required", "physical_participant_required"]);
});

test("wiki display names follow their narrative reveal threshold", () => {
  const entry = {
    display_name: "Giovane sconosciuto",
    display_name_by_section: { 22: "Giovane sconosciuto", 25: "Sasaki Kojirō" }
  };

  assert.equal(getProgressiveDisplayName(entry, 24), "Giovane sconosciuto");
  assert.equal(getProgressiveDisplayName(entry, 25), "Sasaki Kojirō");
  assert.equal(getProgressiveDisplayName({ display_name: "Nome stabile" }, 25), "Nome stabile");
});

test("reader-progress is authoritative over chapters prepared for future books", () => {
  const chapters = { sections: Array.from({ length: 19 }, (_, index) => ({ number: index + 1 })) };
  const reader = createReaderProgress(chapters, {
    state: { current_section: 1, minimum_section: 1, maximum_section: 8 }
  });

  assert.equal(reader.max, 8);
  assert.deepEqual(reader.sections.map(section => section.number), [1, 2, 3, 4, 5, 6, 7, 8]);
  assert.equal(reader.setSection(9), false);
  assert.equal(reader.section, 1);
});

test("reader-progress fails closed when a publication boundary is missing", () => {
  const chapters = { sections: Array.from({ length: 112 }, (_, index) => ({ number: index + 1 })) };

  assert.throws(
    () => createReaderProgress(chapters, { state: { current_section: 1, minimum_section: 1 } }),
    /requires explicit minimum_section and maximum_section/
  );
  assert.throws(
    () => createReaderProgress(chapters, 1),
    /requires explicit minimum_section and maximum_section/
  );
  assert.throws(
    () => createReaderProgress(chapters, { state: { current_section: 1, minimum_section: 1, maximum_section: "112junk" } }),
    /requires explicit minimum_section and maximum_section/
  );
  assert.throws(
    () => createReaderProgress(chapters, { state: { current_section: 1, minimum_section: 1, maximum_section: 112.9 } }),
    /requires explicit minimum_section and maximum_section/
  );
  for (const malformedMaximum of [[112], true, { value: 112 }]) {
    assert.throws(
      () => createReaderProgress(chapters, { state: { current_section: 1, minimum_section: 1, maximum_section: malformedMaximum } }),
      /requires explicit minimum_section and maximum_section/
    );
  }
});

test("reader navigation follows available sections without inventing gaps", () => {
  const reader = createReaderProgress({ sections: [{ number: 2 }, { number: 4 }, { number: 7 }] }, {
    current_section: 2,
    minimum_section: 2,
    maximum_section: 7
  });

  assert.equal(reader.next(), true);
  assert.equal(reader.section, 4);
  assert.equal(reader.previous(), true);
  assert.equal(reader.section, 2);
  assert.equal(reader.setSection(3), false);
});

test("character names remain hidden until project-local narrative evidence", () => {
  const characters = [
    { id: "early", present_in: [1] },
    { id: "future", present_in: [12] },
    { id: "unknown", present_in: [] }
  ];

  assert.equal(getCharacterIntroductionSection(characters[1]), 12);
  assert.equal(getCharacterIntroductionSection(characters[2]), null);
  assert.deepEqual(getVisibleCharacters(characters, 8).map(character => character.id), ["early"]);
  assert.deepEqual(getVisibleCharacters(characters, 12).map(character => character.id), ["early", "future"]);
});

test("temporal identities do not reveal canonical names before the source does", async () => {
  const { getDisplayCharacterName } = await import("./reader-progress.js");
  const identities = [
    { character_id: "kohei", display_name: "Shishido Baiken", valid_from_section: 26, valid_until_section: 27, reader_knows_canonical_identity: false, status: "assumed_name" },
    { character_id: "kohei", display_name: "Tsujikaze Kōhei", valid_from_section: 28, valid_until_section: null, reader_knows_canonical_identity: true, status: "revealed_alias" },
    { character_id: "matahachi", display_name: "Sasaki Kojirō", valid_from_section: 21, valid_until_section: null, reader_knows_canonical_identity: true, status: "impersonated_name" }
  ];

  assert.equal(getDisplayCharacterName({ id: "kohei", name: "Tsujikaze Kōhei" }, 26, identities), "Shishido Baiken");
  assert.equal(getDisplayCharacterName({ id: "kohei", name: "Tsujikaze Kōhei" }, 28, identities), "Tsujikaze Kōhei");
  assert.equal(getDisplayCharacterName({ id: "matahachi", name: "Hon'iden Matahachi" }, 21, identities), "Hon'iden Matahachi (come Sasaki Kojirō)");
});

test("Book III reader-facing prose respects identity reveal sections", () => {
  const events = JSON.parse(readFileSync(new URL("../data/events.json", import.meta.url))).events;
  const states = JSON.parse(readFileSync(new URL("../data/character-states.json", import.meta.url))).character_states;
  const prose = (minimum, maximum) => [
    ...events.filter(entry => entry.section >= minimum && entry.section <= maximum).map(entry => entry.description),
    ...states.filter(entry => entry.section >= minimum && entry.section <= maximum).map(entry => entry.activity)
  ].join("\n");

  assert.doesNotMatch(prose(22, 24), /Sasaki|Kojirō|Ganryū/i);
  assert.doesNotMatch(prose(26, 27), /Tsujikaze|Kōhei|Kohei/i);
});

test("Matahachi's impersonation ends in the section where it is exposed", async () => {
  const { getDisplayCharacterName } = await import("./reader-progress.js");
  const characters = JSON.parse(readFileSync(new URL("../data/characters.json", import.meta.url))).characters;
  const identities = JSON.parse(readFileSync(new URL("../data/identities.json", import.meta.url))).identities;
  const matahachi = characters.find(character => character.id === "matahachi");

  assert.match(getDisplayCharacterName(matahachi, 34, identities), /come Sasaki Kojirō/);
  assert.equal(getDisplayCharacterName(matahachi, 35, identities), "Hon'den Matahachi");
  assert.equal((matahachi.aliases ?? []).some(alias => /Inugami/i.test(alias)), false);
  assert.equal(identities.some(identity => identity.character_id === "matahachi" && /Inugami/i.test(identity.display_name)), false);
});

test("Book V names follow the Sannosuke renaming and Hanagiri house-name windows", async () => {
  const { getDisplayCharacterName } = await import("./reader-progress.js");
  const characters = JSON.parse(readFileSync(new URL("../data/characters.json", import.meta.url))).characters;
  const identities = JSON.parse(readFileSync(new URL("../data/identities.json", import.meta.url))).identities;
  const iori = characters.find(character => character.id === "iori");
  const akemi = characters.find(character => character.id === "akemi");

  assert.equal(getDisplayCharacterName(iori, 67, identities), "Sannosuke");
  assert.equal(getDisplayCharacterName(iori, 68, identities), "Misawa Iori");
  assert.equal(getDisplayCharacterName(akemi, 64, identities), "Akemi");
  assert.match(getDisplayCharacterName(akemi, 65, identities), /Hanagiri/);
  assert.equal(getDisplayCharacterName(akemi, 66, identities), "Akemi");
  assert.equal((iori.aliases ?? []).includes("Sannosuke"), false);
});

test("Book VI reveals identities without promoting inference or temporary names globally", async () => {
  const { getDisplayCharacterName } = await import("./reader-progress.js");
  const characters = JSON.parse(readFileSync(new URL("../data/characters.json", import.meta.url))).characters;
  const identities = JSON.parse(readFileSync(new URL("../data/identities.json", import.meta.url))).identities;
  const relationships = JSON.parse(readFileSync(new URL("../data/relationships.json", import.meta.url))).relationships;
  const events = JSON.parse(readFileSync(new URL("../data/events.json", import.meta.url))).events;
  const states = JSON.parse(readFileSync(new URL("../data/character-states.json", import.meta.url))).character_states;
  const daizo = characters.find(character => character.id === "daizo");
  const tadaaki = characters.find(character => character.id === "mikogami_tenzen");
  const jotaro = characters.find(character => character.id === "jotaro");

  assert.equal(getDisplayCharacterName(daizo, 92, identities), "Daizō");
  assert.equal(getDisplayCharacterName(daizo, 93, identities), "Mizoguchi Shinano");
  assert.equal(getDisplayCharacterName(tadaaki, 86, identities), "Mikogami Tenzen");
  assert.equal(getDisplayCharacterName(tadaaki, 87, identities), "Ono Tadaaki");
  assert.equal((daizo.aliases ?? []).includes("Mizoguchi Shinano"), false);
  assert.equal((jotaro.aliases ?? []).includes("Jōta"), false);
  assert.equal(relationships.some(({ from, to }) => [from, to].includes("iori") && [from, to].includes("otsu")), false);

  const preRevealProse = [
    ...events.filter(entry => entry.section < 93).map(entry => entry.description),
    ...states.filter(entry => entry.section < 93).map(entry => entry.activity)
  ].join("\n");
  assert.doesNotMatch(preRevealProse, /Mizoguchi Shinano/i);
  assert.equal(states.find(entry => entry.character === "gion_toji" && entry.section === 90)?.certainty, "strong_inference");
});

test("Book VI mixed scenes assign movement only to actual travelers", () => {
  const events = JSON.parse(readFileSync(new URL("../data/events.json", import.meta.url))).events;
  const byId = id => events.find(event => event.id === id);

  assert.deepEqual(byId("b6c7-e01").characters, ["akemi"]);
  assert.equal(byId("b6c8-e03").movement_status, null);
  assert.deepEqual(byId("b6c12-e05").characters, ["gonnosuke", "iori"]);
  assert.deepEqual(byId("b6c16-e05").characters, ["musashi"]);
  assert.deepEqual(byId("b6c17-e04").characters, ["musashi"]);
});

test("Book VII keeps cover names and unresolved family facts progressive", async () => {
  const { getDisplayCharacterName } = await import("./reader-progress.js");
  const characters = JSON.parse(readFileSync(new URL("../data/characters.json", import.meta.url))).characters;
  const identities = JSON.parse(readFileSync(new URL("../data/identities.json", import.meta.url))).identities;
  const relationships = JSON.parse(readFileSync(new URL("../data/relationships.json", import.meta.url))).relationships;
  const events = JSON.parse(readFileSync(new URL("../data/events.json", import.meta.url))).events;
  const states = JSON.parse(readFileSync(new URL("../data/character-states.json", import.meta.url))).character_states;
  const musashi = characters.find(character => character.id === "musashi");
  const benzo = characters.find(character => character.id === "toriumi_benzo");
  const baby = characters.find(character => character.id === "akemi_baby");

  assert.equal(getDisplayCharacterName(musashi, 101, identities), "Miyamoto Musashi");
  assert.equal(getDisplayCharacterName(musashi, 102, identities), "Muka");
  assert.equal(getDisplayCharacterName(musashi, 103, identities), "Miyamoto Musashi");
  assert.equal(getDisplayCharacterName(benzo, 98, identities), "Mountain priest");
  assert.equal(getDisplayCharacterName(benzo, 99, identities), "Mountain priest");
  assert.equal(getDisplayCharacterName(benzo, 100, identities), "Toriumi Benzō");
  assert.equal((musashi.aliases ?? []).includes("Muka"), false);
  assert.equal((benzo.aliases ?? []).includes("Rinshōbō"), false);
  assert.equal((baby.aliases ?? []).length, 0);
  assert.equal(relationships.some(({ from, to, subtype }) =>
    [from, to].includes("matahachi") && [from, to].includes("akemi_baby") && /biological_father/i.test(subtype)), false);

  const preBenzoReveal = [
    ...events.filter(entry => entry.section >= 98 && entry.section < 100).map(entry => entry.description),
    ...states.filter(entry => entry.section >= 98 && entry.section < 100).map(entry => entry.activity)
  ].join("\n");
  assert.doesNotMatch(preBenzoReveal, /Toriumi|Benzō|Benzo|Rinshōbō|Rinshobo/i);
  assert.doesNotMatch(states.find(entry => entry.character === "omitsu" && entry.section === 111)?.activity ?? "", /death|dead|dies|killed/i);
});

test("Book VII separates farewells, crossings and the unknown final route", () => {
  const events = JSON.parse(readFileSync(new URL("../data/events.json", import.meta.url))).events;
  const states = JSON.parse(readFileSync(new URL("../data/character-states.json", import.meta.url))).character_states;
  const byId = id => events.find(event => event.id === id);

  assert.equal(byId("b7c15-e01").movement_status, null);
  assert.deepEqual(byId("b7c15-e07").characters, ["musashi", "sasuke"]);
  assert.equal(byId("b7c15-e07").destination, "funashima");
  assert.deepEqual(byId("b7c14-e06").characters, ["matahachi", "akemi", "akemi_baby"]);
  assert.equal(byId("b7c16-e06").movement_status, "uncertain_route");
  assert.equal(byId("b7c16-e06").destination, undefined);
  assert.match(byId("b7c16-e06").destination_label, /unrecorded/i);
  assert.equal(states.find(entry => entry.character === "kojiro" && entry.section === 112)?.status, "dead");
  assert.equal(states.find(entry => entry.character === "musashi" && entry.section === 112)?.location, null);
});

test("event, state and wiki evidence can safely establish an introduction", () => {
  const character = { id: "mentioned", present_in: [] };
  const evidence = {
    states: [{ character: "mentioned", section: 6 }],
    events: [{ section: 4, referenced_characters: ["mentioned"] }],
    characterWiki: { mentioned: { current_by_section: { 5: "Known" } } }
  };
  assert.equal(getCharacterIntroductionSection(character, evidence), 4);
});

test("reader snapshot computes latest selected states and current events once", () => {
  const snapshot = getReaderSnapshot({
    states: [
      { character: "a", section: 1, activity: "old" },
      { character: "a", section: 3, activity: "new" },
      { character: "b", section: 2 }
    ],
    events: [
      { id: "visible", section: 3, characters: ["a"] },
      { id: "other", section: 3, characters: ["b"] },
      { id: "past", section: 2, characters: ["a"] }
    ]
  }, 3, ["a"]);

  assert.equal(snapshot.latestStates.length, 2);
  assert.equal(snapshot.selectedStates[0].activity, "new");
  assert.deepEqual(snapshot.sectionEvents.map(event => event.id), ["visible"]);
});

test("character position semantics are shared by diary and map", () => {
  const locations = new Map([
    ["known", { id: "known", name: "Known", coordinates: [1, 2] }],
    ["unmapped", { id: "unmapped", name: "Unmapped", coordinates: null }]
  ]);

  assert.equal(resolveCharacterPosition({ location_status: "unknown", last_known_location: "known" }, locations).mode, "last_known");
  const reported = resolveCharacterPosition({ location_status: "reported_position", last_known_location: "unmapped" }, locations);
  assert.equal(reported.mode, "reported");
  assert.equal(reported.location, null);
  assert.equal(reported.referencedLocation.name, "Unmapped");
});

test("micro-wiki entries cannot cross their spoiler-safe threshold", () => {
  const entries = [{
    id: "future-context",
    novel_trigger: { first_book1_section: 3, spoiler_safe_until: 4 }
  }, {
    id: "book-aware-context",
    novel_trigger: { first_section: 9, spoiler_safe_until: 9 }
  }];

  assert.deepEqual(getRelevantHistoricalWiki(entries, 3), []);
  assert.deepEqual(getRelevantHistoricalWiki(entries, 4).map(entry => entry.id), ["future-context"]);
  assert.deepEqual(getRelevantHistoricalWiki(entries, 9).map(entry => entry.id), ["book-aware-context"]);
});
