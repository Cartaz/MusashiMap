import { loadData } from "./data.js";

export function validateData({ characters, locations, chapters, events, states }) {
  const characterIds = new Set(characters.characters.map(c => c.id));
  const locationIds = new Set(locations.locations.map(l => l.id));
  const sectionNumbers = new Set(chapters.sections.map(s => s.number));
  const chapterIds = new Set(chapters.sections.map(s => s.chapter_id));
  const chapterBySection = new Map(chapters.sections.map(s => [s.number, s.chapter_id]));
  const errors = [];
  const warnings = [];
  const stateSections = new Map();
  const specialUnknownLocation = "unknown";

  for (const event of events.events) {
    if (!sectionNumbers.has(event.section)) errors.push(`Event ${event.id}: sezione inesistente ${event.section}`);
    if (!event.chapter) errors.push(`Event ${event.id}: chapter mancante`);
    else if (!chapterIds.has(event.chapter)) errors.push(`Event ${event.id}: chapter inesistente ${event.chapter}`);
    else if (chapterBySection.get(event.section) !== event.chapter) errors.push(`Event ${event.id}: chapter ${event.chapter} non corrisponde alla sezione ${event.section}`);
    for (const id of event.characters ?? []) if (!characterIds.has(id)) errors.push(`Event ${event.id}: personaggio inesistente ${id}`);
    for (const id of event.referenced_characters ?? []) if (!characterIds.has(id)) errors.push(`Event ${event.id}: personaggio referenziato inesistente ${id}`);
    for (const key of ["origin", "destination", "location"]) {
      if (event[key] && event[key] !== specialUnknownLocation && !locationIds.has(event[key])) {
        errors.push(`Event ${event.id}: luogo inesistente ${event[key]}`);
      }
    }
    for (const id of event.via ?? []) if (!locationIds.has(id)) errors.push(`Event ${event.id}: luogo via inesistente ${id}`);

    const hasRouteEndpoints = Boolean(event.origin || event.destination);
    if (hasRouteEndpoints && !event.movement_status) {
      warnings.push(`Event ${event.id}: spostamento con origin/destination ma movement_status mancante`);
    }
    if (event.movement_status === "arrival_confirmed" && !event.destination) {
      errors.push(`Event ${event.id}: arrival_confirmed richiede una destination`);
    }
    if (event.movement_status === "confirmed_route" && (!event.origin || !event.destination)) {
      errors.push(`Event ${event.id}: confirmed_route richiede origin e destination`);
    }
    if (["intended_destination", "direction_only"].includes(event.movement_status) && !event.destination) {
      warnings.push(`Event ${event.id}: ${event.movement_status} senza destination esplicita`);
    }
    if (event.movement_status === "uncertain_route" && event.destination !== specialUnknownLocation) {
      warnings.push(`Event ${event.id}: uncertain_route ha una destination cartografica esplicita`);
    }
  }

  const nonPhysicalLocationStatuses = new Set([
    "reported_position",
    "unknown",
    "departed_with_group",
    "departed_eastward",
    "departed_westward"
  ]);

  for (const state of states.character_states) {
    if (!sectionNumbers.has(state.section)) errors.push(`State ${state.character}/${state.section}: sezione inesistente`);
    if (!state.chapter) errors.push(`State ${state.character}/${state.section}: chapter mancante`);
    else if (!chapterIds.has(state.chapter)) errors.push(`State ${state.character}/${state.section}: chapter inesistente ${state.chapter}`);
    else if (chapterBySection.get(state.section) !== state.chapter) errors.push(`State ${state.character}/${state.section}: chapter ${state.chapter} non corrisponde alla sezione ${state.section}`);
    if (!characterIds.has(state.character)) errors.push(`State ${state.character}/${state.section}: personaggio inesistente`);
    if (state.location && !locationIds.has(state.location)) errors.push(`State ${state.character}/${state.section}: luogo inesistente ${state.location}`);
    if (state.last_known_location && !locationIds.has(state.last_known_location)) errors.push(`State ${state.character}/${state.section}: last_known_location inesistente ${state.last_known_location}`);
    if (nonPhysicalLocationStatuses.has(state.location_status) && state.location) {
      errors.push(`State ${state.character}/${state.section}: ${state.location_status} non può avere una posizione fisica corrente (${state.location})`);
    }
    if (nonPhysicalLocationStatuses.has(state.location_status) && !state.last_known_location && state.location_status !== "unknown") {
      warnings.push(`State ${state.character}/${state.section}: ${state.location_status} senza last_known_location`);
    }
    if (state.location_status === "reported_position" && !state.location && !state.last_known_location) {
      errors.push(`State ${state.character}/${state.section}: reported_position senza luogo riferito`);
    }
    if (state.location_status === "departed_with_group" && !state.departure_from) {
      warnings.push(`State ${state.character}/${state.section}: departed_with_group senza departure_from`);
    }
    const key = `${state.character}:${state.section}`;
    if (stateSections.has(key)) errors.push(`State ${state.character}/${state.section}: stato duplicato nella stessa sezione`);
    stateSections.set(key, state);
  }

  for (const character of characters.characters) {
    const actual = [...stateSections.values()]
      .filter(state => state.character === character.id && state.location)
      .map(state => state.section)
      .sort((a, b) => a - b);
    const declared = [...new Set(character.present_in ?? [])].sort((a, b) => a - b);
    const actualSet = new Set(actual);
    const declaredSet = new Set(declared);
    for (const section of declared) if (!actualSet.has(section)) warnings.push(`Character ${character.id}: present_in include ${section} ma manca uno stato di posizione`);
    for (const section of actual) if (!declaredSet.has(section)) warnings.push(`Character ${character.id}: esiste uno stato di posizione in ${section} ma present_in non lo dichiara`);
    if (character.importance === "main" && character.present_in?.length && !actual.length) warnings.push(`Character ${character.id}: personaggio principale senza alcuna posizione verificabile`);
  }

  const explicitFutureDestinations = events.events.filter(e => e.certainty === "intended_destination");
  if (explicitFutureDestinations.length) warnings.push(`${explicitFutureDestinations.length} destinazione/i intenzionale/i non equivalgono a un arrivo.`);

  return { valid: errors.length === 0, errors, warnings };
}

export async function validateLoadedData() {
  const data = await loadData();
  return { data, result: validateData(data) };
}
