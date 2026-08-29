import { getPositionReference } from "./position-contract.js";

const canonicalState = {
  section: null,
  selectedCharacters: []
};

const subscribers = new Set();

const asInteger = value => {
  if (typeof value === "number") return Number.isSafeInteger(value) ? value : null;
  if (typeof value !== "string" || !/^-?\d+$/.test(value.trim())) return null;
  const parsed = Number(value);
  return Number.isSafeInteger(parsed) ? parsed : null;
};

const validSections = values => values
  .map(asInteger)
  .filter(Number.isInteger);

const earliestSection = values => {
  const sections = validSections(values);
  return sections.length ? Math.min(...sections) : null;
};

export function setCanonicalReaderState({ section, selectedCharacters = [] }) {
  const nextSection = asInteger(section);
  if (nextSection === null) return false;
  canonicalState.section = nextSection;
  canonicalState.selectedCharacters = [...new Set(selectedCharacters.filter(id => typeof id === "string"))];
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
  const section = asInteger(currentSection);
  if (section === null) return [];

  const latest = new Map();
  for (const state of states ?? []) {
    if (!Number.isInteger(state.section) || state.section > section || !state[idKey]) continue;
    const previous = latest.get(state[idKey]);
    if (!previous || state.section > previous.section) latest.set(state[idKey], state);
  }
  return [...latest.values()];
}

export function getDisplayCharacterName(character, section, identities = []) {
  const currentSection = asInteger(section);
  const identity = (identities ?? [])
    .filter(entry => entry.character_id === character?.id
      && currentSection !== null
      && asInteger(entry.valid_from_section) !== null
      && entry.valid_from_section <= currentSection
      && (entry.valid_until_section === null || asInteger(entry.valid_until_section) >= currentSection))
    .sort((a, b) => b.valid_from_section - a.valid_from_section)[0];
  if (identity?.status === "impersonated_name" && identity.reader_knows_canonical_identity && identity.display_name !== character?.name) {
    return `${character?.name ?? "Personaggio sconosciuto"} (come ${identity.display_name})`;
  }
  if (identity?.display_name) return identity.display_name;
  if (character?.id === "musashi" && currentSection !== null && currentSection <= 7) return "Shinmen Takezō";
  return character?.name ?? "Personaggio sconosciuto";
}

export function getProgressiveValue(values, section) {
  const currentSection = asInteger(section);
  if (currentSection === null) return null;
  const eligible = Object.keys(values ?? {})
    .map(asInteger)
    .filter(fromSection => fromSection !== null && fromSection <= currentSection);
  if (!eligible.length) return null;
  return values[String(Math.max(...eligible))] ?? null;
}

export function getProgressiveDisplayName(entry, section) {
  return getProgressiveValue(entry?.display_name_by_section, section)
    ?? entry?.display_name
    ?? "Personaggio sconosciuto";
}

// A name can be revealed only after at least one project-local narrative
// record introduces it. Missing evidence is treated conservatively: the
// character remains hidden instead of falling back to the first section.
export function getCharacterIntroductionSection(character, { states = [], events = [], characterWiki = {} } = {}) {
  if (!character?.id) return null;
  const candidates = [character.introduced_section, ...(character.present_in ?? [])];

  for (const state of states ?? []) {
    if (state.character === character.id) candidates.push(state.section);
  }
  for (const event of events ?? []) {
    if ([...(event.characters ?? []), ...(event.referenced_characters ?? [])].includes(character.id)) {
      candidates.push(event.section);
    }
  }

  const wikiEntry = characterWiki?.[character.id];
  if (wikiEntry) candidates.push(...Object.keys(wikiEntry.current_by_section ?? {}));
  return earliestSection(candidates);
}

export function getVisibleCharacters(characters, currentSection, evidence = {}) {
  const section = asInteger(currentSection);
  if (section === null) return [];
  return (characters ?? []).filter(character => {
    const introduced = getCharacterIntroductionSection(character, evidence);
    return introduced !== null && introduced <= section;
  });
}

export function getReaderSnapshot({ states = [], events = [] }, currentSection, selectedCharacters = []) {
  const section = asInteger(currentSection);
  if (section === null) return { latestStates: [], selectedStates: [], sectionEvents: [] };
  const selected = new Set(selectedCharacters);
  const latestStates = getLatestStates(states, section);
  return {
    latestStates,
    selectedStates: latestStates.filter(state => selected.has(state.character)),
    sectionEvents: (events ?? []).filter(event =>
      event.section === section && (event.characters ?? []).some(id => selected.has(id))
    )
  };
}

export function resolveCharacterPosition(state, locations) {
  const byId = locations instanceof Map
    ? locations
    : new Map((locations ?? []).map(location => [location.id, location]));
  const hasCoordinates = location => Array.isArray(location?.coordinates) && location.coordinates.length === 2;
  const { locationId, mode } = getPositionReference(state);
  const location = locationId ? byId.get(locationId) : null;

  return {
    location: hasCoordinates(location) ? location : null,
    referencedLocation: location ?? null,
    mode: location ? mode : "unmapped"
  };
}

export function getPositionStatusLabel(mode) {
  if (mode === "current") return "Presenza fisica";
  if (mode === "reported") return "Posizione riferita";
  if (mode === "last_known") return "Ultima posizione nota";
  return "Posizione non determinata";
}

export function createReaderProgress(chapters, progress) {
  const allSections = [...(chapters?.sections ?? [])]
    .filter(section => Number.isInteger(section.number))
    .sort((a, b) => a.number - b.number);
  if (!allSections.length) throw new Error("No reader sections available");

  const progressState = typeof progress === "object" && progress !== null
    ? (progress.state ?? progress)
    : null;
  const requestedMin = asInteger(progressState?.minimum_section);
  const requestedMax = asInteger(progressState?.maximum_section);
  if (requestedMin === null || requestedMax === null) {
    throw new Error("Reader progress requires explicit minimum_section and maximum_section");
  }
  if (requestedMin > requestedMax) throw new Error("Invalid reader progress range");

  // Only chapters inside the explicit reader-progress window are reachable.
  // This lets editorial data for future books coexist safely in chapters.json.
  const sections = allSections.filter(section => section.number >= requestedMin && section.number <= requestedMax);
  if (!sections.length) throw new Error("Reader progress range has no available sections");

  const sectionNumbers = sections.map(section => section.number);
  const sectionSet = new Set(sectionNumbers);
  const min = sectionNumbers[0];
  const max = sectionNumbers.at(-1);
  const requestedInitial = asInteger(progressState.current_section);
  let currentSection = sectionSet.has(requestedInitial) ? requestedInitial : min;

  return {
    get section() {
      return currentSection;
    },
    get current() {
      return sections.find(section => section.number === currentSection);
    },
    get sections() {
      return [...sections];
    },
    get min() {
      return min;
    },
    get max() {
      return max;
    },
    setSection(section) {
      const next = asInteger(section);
      if (next === null || !sectionSet.has(next)) return false;
      currentSection = next;
      return true;
    },
    next() {
      const index = sectionNumbers.indexOf(currentSection);
      return index >= 0 && index < sectionNumbers.length - 1
        ? this.setSection(sectionNumbers[index + 1])
        : false;
    },
    previous() {
      const index = sectionNumbers.indexOf(currentSection);
      return index > 0 ? this.setSection(sectionNumbers[index - 1]) : false;
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
  const section = asInteger(currentSection);
  if (section === null) return [];
  const previousSection = section - 1;
  return (entries ?? []).filter(entry => {
    const first = asInteger(entry.novel_trigger?.first_section ?? entry.novel_trigger?.first_book1_section);
    const spoilerSafeUntil = asInteger(entry.novel_trigger?.spoiler_safe_until);
    return first !== null && first <= section && (first === section || first === previousSection) &&
      (spoilerSafeUntil === null || spoilerSafeUntil <= section);
  });
}
