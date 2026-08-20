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
  writeJson(root, "data/schema.json", { entities: {}, integrity_rules: [] });
  writeJson(root, "data/chapters.json", { sections });
  writeJson(root, "data/reader-progress.json", { state: { minimum_section: 1, current_section: 1, maximum_section: 2 } });
  writeJson(root, "data/characters.json", {
    characters: [{ id: "hero", name: "Hero", aliases: [], importance: "main", entity_type: "character", historical_status: "fictional", present_in: [1, 2] }]
  });
  writeJson(root, "data/locations.json", {
    locations: [{ id: "place", name: "Place", type: "city", introduced_section: 1, coordinates: null }]
  });
  writeJson(root, "data/events.json", { events: sections.map(event) });
  writeJson(root, "data/character-states.json", { character_states: sections.map(state) });
  writeJson(root, "data/relationships.json", { relationships: [] });
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
