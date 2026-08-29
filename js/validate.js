import { loadData } from "./data.js";
import { validateMovementEvent } from "./movement-contract.js";
import { isNonPhysicalLocationStatus, validatePositionState } from "./position-contract.js";

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
      if (event[key] && event[key] !== specialUnknownLocation && !locationIds.has(event[key])) errors.push(`Event ${event.id}: luogo inesistente ${event[key]}`);
    }
    for (const id of event.via ?? []) if (!locationIds.has(id)) errors.push(`Event ${event.id}: luogo via inesistente ${id}`);

    for (const violation of validateMovementEvent(event)) {
      if (violation === "movement_status_required") errors.push(`Event ${event.id}: i dati di rotta richiedono un movement_status valido`);
      if (violation === "physical_participant_required") errors.push(`Event ${event.id}: una rotta richiede almeno un partecipante fisico`);
      if (violation === "arrival_target_required") errors.push(`Event ${event.id}: arrival_confirmed richiede destination o location nota`);
      if (violation === "destination_evidence_required") errors.push(`Event ${event.id}: ${event.movement_status} richiede destination o destination_label`);
      if (violation === "route_evidence_required") errors.push(`Event ${event.id}: ${event.movement_status} richiede dati o etichette di rotta`);
    }
  }

  for (const state of states.character_states) {
    if (!sectionNumbers.has(state.section)) errors.push(`State ${state.character}/${state.section}: sezione inesistente`);
    if (!state.chapter) errors.push(`State ${state.character}/${state.section}: chapter mancante`);
    else if (!chapterIds.has(state.chapter)) errors.push(`State ${state.character}/${state.section}: chapter inesistente ${state.chapter}`);
    else if (chapterBySection.get(state.section) !== state.chapter) errors.push(`State ${state.character}/${state.section}: chapter ${state.chapter} non corrisponde alla sezione ${state.section}`);
    if (!characterIds.has(state.character)) errors.push(`State ${state.character}/${state.section}: personaggio inesistente`);
    if (state.location && !locationIds.has(state.location)) errors.push(`State ${state.character}/${state.section}: luogo inesistente ${state.location}`);
    if (state.last_known_location && !locationIds.has(state.last_known_location)) errors.push(`State ${state.character}/${state.section}: last_known_location inesistente ${state.last_known_location}`);
    for (const violation of validatePositionState(state)) {
      if (violation === "invalid_location_status") errors.push(`State ${state.character}/${state.section}: location_status non valido ${state.location_status}`);
      if (violation === "non_physical_location") errors.push(`State ${state.character}/${state.section}: ${state.location_status} non può avere una posizione fisica corrente (${state.location})`);
      if (violation === "reported_location_required") errors.push(`State ${state.character}/${state.section}: reported_position senza luogo riferito`);
    }
    if (isNonPhysicalLocationStatus(state.location_status) && !state.last_known_location && state.location_status !== "unknown") warnings.push(`State ${state.character}/${state.section}: ${state.location_status} senza last_known_location`);
    if (state.location_status === "departed_with_group" && !state.departure_from) warnings.push(`State ${state.character}/${state.section}: departed_with_group senza departure_from`);
    const key = `${state.character}:${state.section}`;
    if (stateSections.has(key)) errors.push(`State ${state.character}/${state.section}: stato duplicato nella stessa sezione`);
    stateSections.set(key, state);
  }

  // present_in means that the character is physically present somewhere in
  // the chapter. It does not require a resolved end-of-chapter map point.
  for (const character of characters.characters) {
    const declared = [...new Set(character.present_in ?? [])].sort((a, b) => a - b);
    const declaredSet = new Set(declared);
    const stateSectionsForCharacter = [...stateSections.values()]
      .filter(state => state.character === character.id)
      .map(state => state.section)
      .sort((a, b) => a - b);
    const physicalSections = [...stateSections.values()]
      .filter(state => state.character === character.id && state.location)
      .map(state => state.section)
      .sort((a, b) => a - b);
    const stateSet = new Set(stateSectionsForCharacter);

    for (const section of declared) {
      if (!stateSet.has(section)) warnings.push(`Character ${character.id}: present_in include ${section} ma manca uno stato narrativo di sezione`);
    }
    for (const section of physicalSections) {
      if (!declaredSet.has(section)) warnings.push(`Character ${character.id}: esiste una posizione fisica in ${section} ma present_in non lo dichiara`);
    }
    if (character.importance === "main" && character.present_in?.length && !stateSectionsForCharacter.length) {
      warnings.push(`Character ${character.id}: personaggio principale senza stato narrativo verificabile`);
    }
  }

  // Only strong terminal anchors are compared with an end-of-section
  // physical state. Ordinary meetings, conversations and searches are not
  // terminal evidence because a character may move later in the same section.
  const terminalAnchorTypes = new Set(["arrival", "capture", "imprisonment", "restraint"]);
  const terminalEventLocations = new Map();
  events.events.forEach(event => {
    const isStrongMovementAnchor = ["arrival_confirmed", "confirmed_route"].includes(event.movement_status);
    const isStrongEventAnchor = terminalAnchorTypes.has(event.type);
    if (!isStrongMovementAnchor && !isStrongEventAnchor) return;

    let location = null;
    if (event.location && event.location !== specialUnknownLocation) location = event.location;
    else if (event.destination && event.destination !== specialUnknownLocation) location = event.destination;
    if (!location) return;

    for (const characterId of event.characters ?? []) {
      terminalEventLocations.set(`${characterId}:${event.section}`, { location, eventId: event.id });
    }
  });

  for (const [key, terminal] of terminalEventLocations) {
    const state = stateSections.get(key);
    if (!state?.location || isNonPhysicalLocationStatus(state.location_status)) continue;
    if (state.location !== terminal.location) {
      warnings.push(`State/event mismatch ${key}: stato finale ${state.location} ma ultimo anchor ${terminal.eventId} indica ${terminal.location}`);
    }
  }

  const explicitFutureDestinations = events.events.filter(e => e.certainty === "intended_destination");
  if (explicitFutureDestinations.length) warnings.push(`${explicitFutureDestinations.length} destinazione/i intenzionale/i non equivalgono a un arrivo.`);

  return { valid: errors.length === 0, errors, warnings };
}

export async function validateLoadedData() {
  const data = await loadData();
  return { data, result: validateData(data) };
}
