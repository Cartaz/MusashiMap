import { getCharacterIntroductionSection, getDisplayCharacterName, getProgressiveDisplayName, getProgressiveValue, getReaderSnapshot, getVisibleCharacters } from "./reader-progress.js";
import { describeRelationship, relationshipTypes } from "./relationship-labels.js";

export const normalizeSearch = value => String(value ?? "").normalize("NFD").replace(/\p{M}/gu, "").toLocaleLowerCase("it").trim();
export const eventCharacterIds = event => [...new Set([...(event.characters ?? []), ...(event.referenced_characters ?? []), ...(event.witnesses ?? [])])];
export const eventPlaceIds = event => [...new Set([event.location, event.origin, event.destination, ...(event.via ?? [])].filter(id => id && id !== "unknown"))];
export const hasCoordinates = place => Array.isArray(place?.coordinates) && place.coordinates.length === 2 && place.coordinates.every(Number.isFinite);

// Only this projection is searched or rendered. Canonical aliases, final roles,
// future appearances, and later wiki values never enter the public view model.
export function buildArchive(data, section) {
  const events = data.events.events.filter(event => Number.isInteger(event.section) && event.section <= section);
  const wiki = data.characterWiki?.characters ?? {};
  const identities = data.identities?.identities ?? [];
  const evidence = { states: data.states.character_states, events: data.events.events, characterWiki: wiki };
  const rawCharacters = getVisibleCharacters(data.characters.characters, section, evidence);
  const latest = new Map(getReaderSnapshot({ states: data.states.character_states }, section).latestStates.map(state => [state.character, state]));
  const characters = rawCharacters.map(character => {
    const entry = wiki[character.id];
    const activeIdentity = identities.some(identity => identity.character_id === character.id && identity.valid_from_section <= section && (identity.valid_until_section === null || identity.valid_until_section >= section));
    const name = activeIdentity ? getDisplayCharacterName(character, section, identities)
      : entry ? getProgressiveDisplayName(entry, section) : getDisplayCharacterName(character, section, identities);
    const names = [...new Set([name,
      ...identities.filter(identity => identity.character_id === character.id && identity.valid_from_section <= section).map(identity => identity.display_name),
      ...Object.entries(entry?.display_name_by_section ?? {}).filter(([at]) => Number(at) <= section).map(([, value]) => value)
    ])];
    return {
      id: character.id, name, names, main: character.importance === "main",
      summary: getProgressiveValue(entry?.current_by_section, section) ?? "Personaggio incontrato nel testo. Consulta gli eventi documentati qui sotto.",
      first: getCharacterIntroductionSection(character, evidence),
      appearances: (character.present_in ?? []).filter(at => at <= section),
      state: latest.get(character.id) ?? null
    };
  });
  const characterIds = new Set(characters.map(character => character.id));
  const places = data.locations.locations.filter(place => Number.isInteger(place.introduced_section) && place.introduced_section <= section)
    .map(place => ({ id: place.id, name: place.name, first: place.introduced_section,
      coordinates: hasCoordinates(place) ? place.coordinates : null, precision: place.coordinate_precision }));
  const placeIds = new Set(places.map(place => place.id));
  const projectedEvents = events.map(event => ({
    id: event.id, section: event.section, description: event.description ?? "Evento narrativo",
    characters: eventCharacterIds(event).filter(id => characterIds.has(id)),
    places: eventPlaceIds(event).filter(id => placeIds.has(id)),
    source: event.source_file ?? event.source_ref ?? null, certainty: event.certainty,
    // The corpus references are deliberately metadata, not exported chapter text.
    lines: event.source_lines ?? null
  }));
  const seen = new Set();
  const relationships = (data.relationships?.relationships ?? [])
    .filter(item => Number.isInteger(item.first_section) && item.first_section <= section && characterIds.has(item.from) && characterIds.has(item.to))
    .filter(item => {
      const key = `${[item.from, item.to].sort().join("|")}|${item.type}|${item.subtype}|${item.first_section}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    }).map(item => ({ from: item.from, to: item.to, first: item.first_section,
      type: item.type, category: relationshipTypes[item.type] ?? "Legame", description: describeRelationship(item) }));
  return { section, characters, places, events: projectedEvents, relationships,
    chapters: data.chapters.sections.filter(chapter => chapter.number <= section) };
}

export function searchArchive(model, category, query = "") {
  const terms = normalizeSearch(query).split(/\s+/).filter(Boolean);
  const characterById = new Map(model.characters.map(character => [character.id, character]));
  const placeById = new Map(model.places.map(place => [place.id, place]));
  const chapterByNumber = new Map(model.chapters.map(chapter => [chapter.number, chapter]));
  const items = category === "characters" ? model.characters : category === "places" ? model.places : model.events;
  return items.filter(item => {
    const chapter = chapterByNumber.get(item.section);
    const text = category === "characters" ? [item.name, ...item.names, item.summary]
      : category === "places" ? [item.name]
        : [item.description, ...item.characters.flatMap(id => characterById.get(id)?.names ?? []),
          ...item.places.map(id => placeById.get(id)?.name ?? ""), chapter?.title, chapter?.book_title, item.section];
    const normalized = normalizeSearch(text.join(" "));
    return terms.every(term => normalized.includes(term));
  });
}

export function getCharacterRelations(model, id, type = "all") {
  return model.relationships.filter(item => (item.from === id || item.to === id) && (type === "all" || item.type === type));
}

export function getRelationNeighbors(model, id, type = "all") {
  const grouped = new Map();
  for (const relation of getCharacterRelations(model, id, type)) {
    const other = relation.from === id ? relation.to : relation.from;
    if (!grouped.has(other)) grouped.set(other, { character: model.characters.find(character => character.id === other), relations: [] });
    grouped.get(other).relations.push(relation);
  }
  return [...grouped.values()].sort((a, b) => a.character.name.localeCompare(b.character.name, "it"));
}
