import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { runCli } from "../validate-data.mjs";

const writeJson = (root, relative, value) => {
  const target = path.join(root, relative);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, `${JSON.stringify(value, null, 2)}\n`);
};

const makeDataFixture = () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "musashimap-validator-"));
  const sections = [
    { id: "s001", chapter_id: "b1c1", number: 1, book: "I", book_number: 1, book_title: "Earth", title: "One", source_file: "data/source/book1/chapter1-test.txt" },
    { id: "s002", chapter_id: "b2c1", number: 2, book: "II", book_number: 2, book_title: "Water", title: "Two", source_file: "data/source/book2/chapter1-test.txt" }
  ];
  const event = section => ({
    id: `${section.chapter_id}-01`, chapter: section.chapter_id, section: section.number,
    type: "meeting", characters: ["hero"], location: "place", description: "Scene",
    certainty: "explicit", source_ref: `book${section.book_number}/chapter1`
  });
  const state = section => ({
    chapter: section.chapter_id, section: section.number, character: "hero", location: "place",
    status: "present", activity: "Present", certainty: "explicit"
  });
  writeJson(root, "data/chapters.json", { sections });
  writeJson(root, "data/reader-progress.json", { state: { minimum_section: 1, current_section: 1, maximum_section: 2 } });
  writeJson(root, "data/characters.json", {
    characters: [{ id: "hero", name: "Hero", aliases: [], importance: "main", entity_type: "character", historical_status: "fictional", present_in: [1, 2] }]
  });
  writeJson(root, "data/groups.json", { groups: [] });
  writeJson(root, "data/locations.json", {
    locations: [{ id: "place", name: "Place", type: "city", introduced_section: 1, coordinates: null }]
  });
  writeJson(root, "data/events.json", { events: sections.map(event) });
  writeJson(root, "data/character-states.json", { character_states: sections.map(state) });
  writeJson(root, "data/relationships.json", { relationships: [] });
  writeJson(root, "data/identities.json", { identities: [] });
  writeJson(root, "data/context/character-wiki.json", { characters: {} });
  writeJson(root, "data/context/micro-wiki.json", { entities: [] });
  writeJson(root, "data/i18n/it.json", {
    language: "it",
    events: Object.fromEntries(sections.map(section => [`${section.chapter_id}-01`, { description: "Scena" }])),
    states: Object.fromEntries(sections.map(section => [`hero@${section.number}`, { activity: "Presente" }])),
    chapters: { 1: { title: "Uno", book_title: "Terra" }, 2: { title: "Due", book_title: "Acqua" } }
  });
  writeJson(root, "data/i18n/en.json", { language: "en" });
  for (const section of sections) {
    const directory = path.join(root, `data/source/book${section.book_number}`);
    fs.mkdirSync(directory, { recursive: true });
    fs.writeFileSync(path.join(directory, "chapter1-test.txt"), `${section.title}\n`);
  }
  return root;
};

const run = root => {
  const output = [];
  const original = { log: console.log, warn: console.warn, error: console.error };
  console.log = (...parts) => output.push(parts.join(" "));
  console.warn = (...parts) => output.push(parts.join(" "));
  console.error = (...parts) => output.push(parts.join(" "));
  try {
    return { status: runCli(["--root", root]), output: output.join("\n") };
  } finally {
    Object.assign(console, original);
  }
};

test("semantic CLI accepts an atomically published Books I–II fixture", t => {
  const root = makeDataFixture();
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const result = run(root);
  assert.equal(result.status, 0, result.output);
  assert.match(result.output, /2\/2 published sections/);
  assert.match(result.output, /published book\(s\): I, II/);
});

test("semantic CLI rejects a partially published chapter and dangling reference", t => {
  const root = makeDataFixture();
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const eventsPath = path.join(root, "data/events.json");
  writeJson(root, "data/events.json", { events: JSON.parse(fs.readFileSync(eventsPath)).events.slice(0, 1) });
  writeJson(root, "data/relationships.json", { relationships: [{ from: "hero", to: "missing", type: "rival" }] });
  const result = run(root);
  assert.equal(result.status, 1);
  assert.match(result.output, /Published chapter b2c1 has no events/);
  assert.match(result.output, /unknown character missing/);
});

test("semantic CLI rejects a source path or title that disagrees with the corpus", t => {
  const root = makeDataFixture();
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const chaptersPath = path.join(root, "data/chapters.json");
  const chapters = JSON.parse(fs.readFileSync(chaptersPath));
  chapters.sections[0].source_file = "data/source/book1/chapter1-wrong.txt";
  chapters.sections[1].title = "Wrong title";
  writeJson(root, "data/chapters.json", chapters);

  const result = run(root);
  assert.equal(result.status, 1);
  assert.match(result.output, /source_file must be data\/source\/book1\/chapter1-test\.txt/);
  assert.match(result.output, /title must match its first source header/);
});

test("semantic CLI rejects cross-ID aliases and overlapping reveal windows", t => {
  const root = makeDataFixture();
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const charactersPath = path.join(root, "data/characters.json");
  const characters = JSON.parse(fs.readFileSync(charactersPath));
  characters.characters.push({
    id: "other", name: "Other", aliases: ["Héro"], importance: "secondary",
    entity_type: "character", historical_status: "fictional", present_in: []
  });
  writeJson(root, "data/characters.json", characters);
  writeJson(root, "data/identities.json", { identities: [
    {
      character_id: "hero", display_name: "Hero", valid_from_chapter: "b1c1",
      valid_until_chapter: "b2c1", valid_from_section: 1, valid_until_section: 2,
      reader_knows_canonical_identity: true, status: "canonical_name"
    },
    {
      character_id: "hero", display_name: "Alias", valid_from_chapter: "b2c1",
      valid_until_chapter: null, valid_from_section: 2, valid_until_section: null,
      reader_knows_canonical_identity: false, status: "assumed_name"
    }
  ] });

  const result = run(root);
  assert.equal(result.status, 1);
  assert.match(result.output, /collides between hero and other/);
  assert.match(result.output, /Identity ranges overlap for hero/);
});

test("semantic CLI validates event-level identity reveals", t => {
  const root = makeDataFixture();
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const eventsPath = path.join(root, "data/events.json");
  const events = JSON.parse(fs.readFileSync(eventsPath));
  events.events[0].reveals_identity = "hero";
  writeJson(root, "data/events.json", events);
  const scalar = run(root);
  assert.equal(scalar.status, 1);
  assert.match(scalar.output, /reveals_identity must be an array/);

  events.events[0].reveals_identity = ["missing"];
  writeJson(root, "data/events.json", events);
  const unresolved = run(root);
  assert.equal(unresolved.status, 1);
  assert.match(unresolved.output, /identity reveal references unknown character missing/);
  assert.match(unresolved.output, /reveals identity missing without an event character reference/);

  events.events[0].reveals_identity = ["hero"];
  events.events[0].source_ref = "data/source/book1/chapter1-test.txt:L1-L1";
  writeJson(root, "data/events.json", events);
  writeJson(root, "data/identities.json", { identities: [{
    character_id: "hero", display_name: "Unknown person", valid_from_chapter: "b1c1",
    valid_until_chapter: "b1c1", valid_from_section: 1, valid_until_section: 1,
    reader_knows_canonical_identity: false, status: "unidentified_person", revealed_by_event_id: events.events[0].id
  }] });
  const validReveal = run(root);
  assert.equal(validReveal.status, 0, validReveal.output);

  events.events[0].reveals_identity = [];
  writeJson(root, "data/events.json", events);
  const mismatch = run(root);
  assert.equal(mismatch.status, 1);
  assert.match(mismatch.output, /reveal event b1c1-01 does not reveal this character/);

  events.events[0].reveals_identity = ["hero"];
  events.events[0].section = 2;
  writeJson(root, "data/events.json", events);
  const wrongSection = run(root);
  assert.equal(wrongSection.status, 1);
  assert.match(wrongSection.output, /reveal event must be in its valid_from_section/);

  events.events[0].section = 1;
  writeJson(root, "data/events.json", events);
  writeJson(root, "data/identities.json", { identities: [] });
  const unclaimed = run(root);
  assert.equal(unclaimed.status, 1);
  assert.match(unclaimed.output, /reveals identity hero but 0 identity records point back to it/);

  writeJson(root, "data/identities.json", { identities: [{
    character_id: "hero", display_name: "Unknown person", valid_from_chapter: "b1c1",
    valid_until_chapter: "b1c1", valid_from_section: 1, valid_until_section: 1,
    reader_knows_canonical_identity: true, status: "unidentified_person", revealed_by_event_id: events.events[0].id
  }] });
  const alreadyKnown = run(root);
  assert.equal(alreadyKnown.status, 1);
  assert.match(alreadyKnown.output, /has a reveal event but the reader already knows/);
});

test("semantic CLI pins event-level reveals to one ordered section", t => {
  const root = makeDataFixture();
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const events = JSON.parse(fs.readFileSync(path.join(root, "data/events.json")));
  const sources = path.join(root, "data/source/book2/chapter1-test.txt");
  fs.writeFileSync(sources, "Two\nGarden\nName\nAfter\n");
  const reveal = { ...events.events[1], id: "b2c1-02", reveals_identity: ["hero"], source_ref: "data/source/book2/chapter1-test.txt:L3-L3" };
  const later = { ...events.events[1], id: "b2c1-03", source_ref: "data/source/book2/chapter1-test.txt:L4-L4" };
  events.events[1].source_ref = "data/source/book2/chapter1-test.txt:L2-L2";
  // Section 1 belongs to someone else, so the hero first appears in the reveal section.
  const opening = { ...events.events[0], characters: ["other"] };
  const identity = {
    character_id: "hero", display_name: "Unknown person", valid_from_chapter: "b2c1",
    valid_until_chapter: "b2c1", valid_from_section: 2, valid_until_section: 2,
    reader_knows_canonical_identity: false, status: "unidentified_person", revealed_by_event_id: "b2c1-02"
  };
  const characters = JSON.parse(fs.readFileSync(path.join(root, "data/characters.json")));
  characters.characters[0].present_in = [2];
  characters.characters.push({ ...characters.characters[0], id: "other", name: "Other", importance: "minor", present_in: [1] });
  events.events = [opening, events.events[1], reveal, later];
  const it = JSON.parse(fs.readFileSync(path.join(root, "data/i18n/it.json")));
  it.events = { "b1c1-01": { description: "Scena" }, "b2c1-01": { description: "Scena" }, "b2c1-02": { description: "Scena" }, "b2c1-03": { description: "Scena" } };
  it.states = { "other@1": { activity: "Presente" }, "hero@2": { activity: "Presente" } };
  const states = JSON.parse(fs.readFileSync(path.join(root, "data/character-states.json")));
  states.character_states[0].character = "other";
  const write = () => {
    writeJson(root, "data/events.json", events);
    writeJson(root, "data/characters.json", characters);
    writeJson(root, "data/identities.json", { identities: [identity] });
    writeJson(root, "data/i18n/it.json", it);
    writeJson(root, "data/character-states.json", states);
    return run(root);
  };
  const valid = write();
  assert.equal(valid.status, 0, valid.output);

  const garden = events.events[1];
  events.events = [opening, reveal, garden, later];
  const misordered = write();
  assert.equal(misordered.status, 1);
  assert.match(misordered.output, /Event b2c1-01 is ordered on the wrong side of reveal event b2c1-02/);

  events.events = [opening, garden, reveal, { ...later, source_ref: "book2/chapter1" }];
  const unanchored = write();
  assert.equal(unanchored.status, 1);
  assert.match(unanchored.output, /Event b2c1-03 involves hero in a reveal section and needs a line-anchored source_ref/);

  events.events[3] = later;
  identity.valid_until_section = null;
  identity.valid_until_chapter = null;
  const openEnded = write();
  assert.equal(openEnded.status, 1);
  assert.match(openEnded.output, /with a reveal event must end in its valid_from_section/);

  identity.valid_until_section = 2;
  identity.valid_until_chapter = "b2c1";
  events.events[0] = { ...opening, characters: ["other", "hero"] };
  characters.characters[0].present_in = [1, 2];
  const earlier = write();
  assert.equal(earlier.status, 1);
  assert.match(earlier.output, /already appears before section 2/);
});

test("semantic CLI rejects unknown groups and false physical end positions", t => {
  const root = makeDataFixture();
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));

  const eventsPath = path.join(root, "data/events.json");
  const events = JSON.parse(fs.readFileSync(eventsPath));
  events.events[0].groups = ["missing_group"];
  events.events[0].characters = [];
  events.events[0].referenced_characters = ["hero"];
  events.events[0].origin = "place";
  events.events[0].destination = "place";
  events.events[0].movement_status = "confirmed_route";
  events.events[1].movement_status = "confirmed_route";
  writeJson(root, "data/events.json", events);

  const statesPath = path.join(root, "data/character-states.json");
  const states = JSON.parse(fs.readFileSync(statesPath));
  states.character_states[0].status = "departed";
  states.character_states[0].location_status = "departed_with_group";
  writeJson(root, "data/character-states.json", states);

  const result = run(root);
  assert.equal(result.status, 1);
  assert.match(result.output, /unknown group missing_group/);
  assert.match(result.output, /route data without a physically participating character/);
  assert.match(result.output, /claims confirmed_route without any route evidence/);
  assert.match(result.output, /Non-present state hero@1 cannot retain a physical location/);
  assert.match(result.output, /non-physical location_status departed_with_group cannot retain a physical location/);
});

test("semantic CLI rejects overlapping event character roles and group roles", t => {
  const root = makeDataFixture();
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));

  const eventsPath = path.join(root, "data/events.json");
  const events = JSON.parse(fs.readFileSync(eventsPath));
  events.events[0].witnesses = ["hero"];
  events.events[0].referenced_characters = ["hero"];
  writeJson(root, "data/events.json", events);

  const groupsPath = path.join(root, "data/groups.json");
  writeJson(root, "data/groups.json", { groups: [{ id: "group", name: "Group" }] });
  events.events[0].groups = ["group"];
  events.events[0].referenced_groups = ["group"];
  writeJson(root, "data/events.json", events);

  const result = run(root);
  assert.equal(result.status, 1);
  assert.match(result.output, /Event b1c1-01 character hero is both participant and witness/);
  assert.match(result.output, /Event b1c1-01 character hero is both participant and referenced-only/);
  assert.match(result.output, /Event b1c1-01 character hero is both witness and referenced-only/);
  assert.match(result.output, /Event b1c1-01 group group is both participant and referenced-only/);
});

test("semantic CLI rejects retired micro-wiki thresholds and incomplete relationship labels", t => {
  const root = makeDataFixture();
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  writeJson(root, "data/characters.json", {
    characters: ["hero", "friend"].map(id => ({ id, name: id, aliases: [], importance: "main", entity_type: "character", historical_status: "fictional", present_in: [1, 2] }))
  });
  writeJson(root, "data/context/micro-wiki.json", {
    entities: [{ id: "old", novel_trigger: { first_book1_section: 1, spoiler_safe_until: 1 } }]
  });
  writeJson(root, "data/relationships.json", {
    relationship_types: { rival: { it: "Rivalità", en: "Rivalry" }, faction: { it: "Fazione", en: "Faction" } },
    subtype_labels: { duel: { it: "Duello" } },
    relationships: [{ from: "hero", to: "friend", type: "rival", subtype: "duel", first_section: 1 }]
  });
  const result = run(root);
  assert.equal(result.status, 1, result.output);
  assert.match(result.output, /Micro-wiki old has invalid reveal section undefined/);
  assert.match(result.output, /retired field novel_trigger\.first_book1_section/);
  assert.match(result.output, /retired field novel_trigger\.spoiler_safe_until/);
  assert.match(result.output, /Relationship type faction is declared but never used/);
  assert.match(result.output, /Relationship subtype duel needs a en label/);
});
