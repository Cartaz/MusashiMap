import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

import {
  createReaderProgress,
  getCanonicalReaderState,
  initializeCanonicalReaderState,
  setCanonicalReaderState,
  subscribeCanonicalReaderState
} from "../../js/reader-progress.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");

test("reader navigation is immutable configuration over the canonical state", () => {
  initializeCanonicalReaderState({ section: 2, selectedCharacters: ["a"] });
  const reader = createReaderProgress({ sections: [{ number: 2 }, { number: 4 }, { number: 7 }] }, {
    current_section: 2,
    minimum_section: 2,
    maximum_section: 7
  });

  assert.equal(reader.initialSection, 2);
  assert.equal(reader.hasSection("4"), true);
  assert.equal(reader.hasSection(3), false);
  assert.equal(reader.nextSection(2), 4);
  assert.equal(reader.previousSection(7), 4);
  assert.equal(reader.previousSection(2), null);
  assert.equal(reader.nextSection(7), null);
});

test("canonical state owns furthest section and exposes transitions to subscribers", () => {
  initializeCanonicalReaderState({ section: 2, selectedCharacters: ["a"] });
  const transitions = [];
  const unsubscribe = subscribeCanonicalReaderState((next, previous) => transitions.push({ next, previous }));

  assert.equal(transitions.length, 1);
  assert.equal(transitions[0].previous, null);
  assert.equal(transitions[0].next.furthestSection, 2);

  setCanonicalReaderState({ section: 5, selectedCharacters: ["a", "b", "b"] });
  assert.deepEqual(getCanonicalReaderState(), {
    section: 5,
    furthestSection: 5,
    selectedCharacters: ["a", "b"]
  });
  assert.equal(transitions.at(-1).previous.section, 2);
  assert.equal(transitions.at(-1).previous.furthestSection, 2);

  setCanonicalReaderState({ section: 3 });
  assert.equal(getCanonicalReaderState().furthestSection, 5);
  assert.equal(transitions.at(-1).previous.section, 5);

  const countBeforeNoop = transitions.length;
  setCanonicalReaderState({ section: 3, selectedCharacters: ["a", "b"] });
  assert.equal(transitions.length, countBeforeNoop);
  unsubscribe();
});

test("legacy reader mutators delegate to canonical state instead of storing a second section", () => {
  initializeCanonicalReaderState({ section: 2, selectedCharacters: ["a"] });
  const reader = createReaderProgress({ sections: [{ number: 2 }, { number: 4 }, { number: 7 }] }, {
    current_section: 2,
    minimum_section: 2,
    maximum_section: 7
  });

  assert.equal(reader.next(), true);
  assert.equal(reader.section, 4);
  assert.equal(getCanonicalReaderState().section, 4);
  assert.equal(reader.previous(), true);
  assert.equal(reader.section, 2);
  assert.equal(reader.setSection(3), false);
});

test("app and map runtime do not keep duplicate reader-state ownership", () => {
  const app = fs.readFileSync(path.join(root, "js/app.js"), "utf8");
  const mapRuntime = fs.readFileSync(path.join(root, "js/map-runtime.js"), "utf8");

  assert.doesNotMatch(app, /furthestSectionReached/);
  assert.doesNotMatch(app, /reader\.(?:setSection|next|previous)\(/);
  assert.match(app, /initializeCanonicalReaderState/);
  assert.doesNotMatch(mapRuntime, /let selectedCharacters\b|let previousSection\b|previousSelectedCharacters/);
  assert.match(mapRuntime, /subscribeCanonicalReaderState\(\(state, previousState\)/);
});
