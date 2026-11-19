import assert from "node:assert/strict";
import test from "node:test";

import {
  createReaderProgress,
  getCanonicalReaderState,
  initializeCanonicalReaderState,
  setCanonicalReaderState,
  subscribeCanonicalReaderState
} from "../../js/reader-progress.js";


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

test("reader navigation exposes no mutable compatibility API", () => {
  const reader = createReaderProgress({ sections: [{ number: 2 }, { number: 4 }, { number: 7 }] }, {
    current_section: 2,
    minimum_section: 2,
    maximum_section: 7
  });

  for (const name of [
    "section",
    "current",
    "setSection",
    "next",
    "previous",
    "isVisible",
    "visibleByFirstSection",
    "visibleLatestStates"
  ]) {
    assert.equal(name in reader, false, name);
  }
});
