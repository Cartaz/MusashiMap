const clampSection = (section, min, max) => Math.min(max, Math.max(min, section));

const canonicalState = {
  section: null,
  selectedCharacters: []
};

const subscribers = new Set();

export function setCanonicalReaderState({ section, selectedCharacters = [] }) {
  const nextSection = Number.parseInt(section, 10);
  if (!Number.isInteger(nextSection)) return false;
  canonicalState.section = nextSection;
  canonicalState.selectedCharacters = [...new Set(selectedCharacters)];
  for (const subscriber of subscribers) subscriber(getCanonicalReaderState());
  return true;
}

export function getCanonicalReaderState() {
  return {
    section: canonicalState.section,
    selectedCharacters: [...canonicalState.selectedCharacters]
  };
}

export function subscribeCanonicalReaderState(subscriber) {
  if (typeof subscriber !== "function") return () => {};
  subscribers.add(subscriber);
  if (canonicalState.section !== null) subscriber(getCanonicalReaderState());
  return () => subscribers.delete(subscriber);
}

export function getLatestStates(states, currentSection, idKey = "character") {
  const section = Number.parseInt(currentSection, 10);
  if (!Number.isInteger(section)) return [];

  const latest = new Map();
  for (const state of states) {
    if (!Number.isInteger(state.section) || state.section > section) continue;
    const previous = latest.get(state[idKey]);
    if (!previous || state.section > previous.section) latest.set(state[idKey], state);
  }
  return [...latest.values()];
}

export function getDisplayCharacterName(character, section) {
  if (character?.id === "musashi" && Number(section) <= 7) return "Shinmen Takezō";
  return character?.name ?? "Personaggio sconosciuto";
}

export function createReaderProgress(chapters, initialSection = 1) {
  const sections = [...chapters.sections].sort((a, b) => a.number - b.number);
  if (!sections.length) throw new Error("No reader sections available");

  const min = sections[0].number;
  const max = sections.at(-1).number;
  let currentSection = clampSection(initialSection, min, max);

  return {
    get section() {
      return currentSection;
    },
    get current() {
      return sections.find(section => section.number === currentSection);
    },
    get min() {
      return min;
    },
    get max() {
      return max;
    },
    setSection(section) {
      const next = Number.parseInt(section, 10);
      if (!Number.isInteger(next) || next < min || next > max) return false;
      currentSection = next;
      return true;
    },
    next() {
      return this.setSection(currentSection + 1);
    },
    previous() {
      return this.setSection(currentSection - 1);
    },
    isVisible(firstSection) {
      return Number.isInteger(firstSection) && firstSection <= currentSection;
    },
    visibleByFirstSection(items, firstSectionKey = "section") {
      return items.filter(item => this.isVisible(item[firstSectionKey]));
    },
    visibleLatestStates(states, idKey = "character") {
      return getLatestStates(states, currentSection, idKey);
    }
  };
}

// The micro-wiki is a reading aid, not a permanent encyclopedia index.
// Show entries introduced in the current section and the immediately preceding one.
export function getRelevantHistoricalWiki(entries, currentSection) {
  const section = Number.parseInt(currentSection, 10);
  if (!Number.isInteger(section)) return [];
  const previousSection = section - 1;
  return entries.filter(entry => {
    const first = entry.novel_trigger?.first_book1_section;
    return first === section || first === previousSection;
  });
}
