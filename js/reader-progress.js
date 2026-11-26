import { t } from "./i18n.js";
import { getPositionReference } from "./position-contract.js";

const canonicalState = {
  section: null,
  furthestSection: null,
  selectedCharacters: []
};

const subscribers = new Set();

const copyCanonicalState = () => ({
  section: canonicalState.section,
  furthestSection: canonicalState.furthestSection,
  selectedCharacters: [...canonicalState.selectedCharacters]
});

const normalizeSelection = values => [...new Set((values ?? []).filter(id => typeof id === "string"))];
const sameSelection = (left, right) => left.length === right.length && left.every((id, index) => id === right[index]);
const notifyCanonicalState = previousState => {
  const nextState = copyCanonicalState();
  for (const subscriber of subscribers) subscriber(nextState, previousState);
};

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

export function initializeCanonicalReaderState({ section, selectedCharacters = [] }) {
  const nextSection = asInteger(section);
  if (nextSection === null) return false;
  canonicalState.section = nextSection;
  canonicalState.furthestSection = nextSection;
  canonicalState.selectedCharacters = normalizeSelection(selectedCharacters);
  notifyCanonicalState(null);
  return true;
}

export function setCanonicalReaderState(update = {}) {
  const nextSection = asInteger(update.section ?? canonicalState.section);
  if (nextSection === null) return false;
  const previousState = copyCanonicalState();
  const nextSelection = normalizeSelection(update.selectedCharacters ?? canonicalState.selectedCharacters);
  const nextFurthestSection = canonicalState.furthestSection === null
    ? nextSection
    : Math.max(canonicalState.furthestSection, nextSection);
  if (nextSection === canonicalState.section
    && nextFurthestSection === canonicalState.furthestSection
    && sameSelection(nextSelection, canonicalState.selectedCharacters)) return true;

  canonicalState.section = nextSection;
  canonicalState.furthestSection = nextFurthestSection;
  canonicalState.selectedCharacters = nextSelection;
  notifyCanonicalState(previousState);
  return true;
}

export function getCanonicalReaderState() {
  return copyCanonicalState();
}

export function subscribeCanonicalReaderState(subscriber) {
  if (typeof subscriber !== "function") return () => {};
  subscribers.add(subscriber);
  if (canonicalState.section !== null) subscriber(copyCanonicalState(), null);
  return () => subscribers.delete(subscriber);
}

function getLatestStates(states, currentSection, idKey = "character") {
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
  // The reading position is a whole section, and the reveal happens inside it:
  // the reader has met the canonical name by the end of the section. Only the
  // archive's per-event projection keeps the earlier events under the
  // concealed display_name.
  if (identity?.revealed_by_event_id) return character?.name ?? t("character.unknown");
  if (identity?.status === "impersonated_name" && identity.reader_knows_canonical_identity && identity.display_name !== character?.name) {
    return t("character.as", { name: character?.name ?? t("character.unknown"), alias: identity.display_name });
  }
  if (identity?.display_name) return identity.display_name;
  return character?.name ?? t("character.unknown");
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
    ?? t("character.unknown");
}

// Earliest state/event section per character, built once per evidence arrays.
// Rendering asks for visibility many times per interaction; rescanning every
// state and event for every character made each pass O(characters × records).
const evidenceIndexCache = new WeakMap();
const NO_RECORDS = Object.freeze([]);
const recordEarliest = (index, id, value) => {
  const section = asInteger(value);
  if (!id || section === null) return;
  const previous = index.get(id);
  if (previous === undefined || section < previous) index.set(id, section);
};

function getEvidenceIndex(states, events) {
  const stateKey = Array.isArray(states) ? states : NO_RECORDS;
  const eventKey = Array.isArray(events) ? events : NO_RECORDS;
  let byEvents = evidenceIndexCache.get(stateKey);
  if (!byEvents) {
    byEvents = new WeakMap();
    evidenceIndexCache.set(stateKey, byEvents);
  }
  let cached = byEvents.get(eventKey);
  // Runtime data is loaded once and never mutated; the length check only
  // guards callers (tests, generators) that append records after a lookup.
  if (!cached || cached.stateCount !== stateKey.length || cached.eventCount !== eventKey.length) {
    const index = new Map();
    for (const state of stateKey) recordEarliest(index, state.character, state.section);
    for (const event of eventKey) {
      for (const id of [...(event.characters ?? []), ...(event.referenced_characters ?? []), ...(event.witnesses ?? [])]) {
        recordEarliest(index, id, event.section);
      }
    }
    cached = { stateCount: stateKey.length, eventCount: eventKey.length, index };
    byEvents.set(eventKey, cached);
  }
  return cached.index;
}

// A name can be revealed only after at least one project-local narrative
// record introduces it. Missing evidence is treated conservatively: the
// character remains hidden instead of falling back to the first section.
export function getCharacterIntroductionSection(character, { states = [], events = [], characterWiki = {} } = {}) {
  if (!character?.id) return null;
  const candidates = [
    character.introduced_section,
    ...(character.present_in ?? []),
    getEvidenceIndex(states, events).get(character.id)
  ];
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
      event.section === section && [...(event.characters ?? []), ...(event.witnesses ?? [])].some(id => selected.has(id))
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
  return t(["current", "reported", "last_known"].includes(mode) ? `position.${mode}` : "position.unmapped");
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

  const sections = allSections.filter(section => section.number >= requestedMin && section.number <= requestedMax);
  if (!sections.length) throw new Error("Reader progress range has no available sections");

  const sectionNumbers = sections.map(section => section.number);
  const sectionSet = new Set(sectionNumbers);
  const min = sectionNumbers[0];
  const max = sectionNumbers.at(-1);
  const requestedInitial = asInteger(progressState.current_section);
  const initialSection = sectionSet.has(requestedInitial) ? requestedInitial : min;
  const adjacentSection = (section, direction) => {
    const current = asInteger(section);
    const index = sectionNumbers.indexOf(current);
    if (index === -1) return null;
    const candidate = sectionNumbers[index + direction];
    return Number.isInteger(candidate) ? candidate : null;
  };

  return {
    get initialSection() {
      return initialSection;
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
    hasSection(section) {
      return sectionSet.has(asInteger(section));
    },
    nextSection(section) {
      return adjacentSection(section, 1);
    },
    previousSection(section) {
      return adjacentSection(section, -1);
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
    const first = asInteger(entry.novel_trigger?.first_section);
    return first !== null && (first === section || first === previousSection);
  });
}
