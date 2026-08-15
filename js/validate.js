import { loadData } from "./data.js";

export function validateData({ characters, locations, chapters, events, states }) {
  const characterIds = new Set(characters.characters.map(c => c.id));
  const locationIds = new Set(locations.locations.map(l => l.id));
  const sectionNumbers = new Set(chapters.sections.map(s => s.number));
  const errors = [];
  const warnings = [];

  for (const event of events.events) {
    if (!sectionNumbers.has(event.section)) errors.push(`Event ${event.id}: sezione inesistente ${event.section}`);
    for (const id of event.characters ?? []) if (!characterIds.has(id)) errors.push(`Event ${event.id}: personaggio inesistente ${id}`);
    for (const key of ["from", "to", "location"]) if (event[key] && !locationIds.has(event[key])) errors.push(`Event ${event.id}: luogo inesistente ${event[key]}`);
    for (const id of event.via ?? []) if (!locationIds.has(id)) errors.push(`Event ${event.id}: luogo via inesistente ${id}`);
  }

  for (const state of states.character_states) {
    if (!sectionNumbers.has(state.section)) errors.push(`State ${state.character}/${state.section}: sezione inesistente`);
    if (!characterIds.has(state.character)) errors.push(`State ${state.character}/${state.section}: personaggio inesistente`);
    if (state.location && !locationIds.has(state.location)) errors.push(`State ${state.character}/${state.section}: luogo inesistente ${state.location}`);
  }

  const explicitFutureDestinations = events.events.filter(e => e.certainty === "intended_destination");
  if (explicitFutureDestinations.length) warnings.push(`${explicitFutureDestinations.length} destinazione/i intenzionale/i non equivalgono a un arrivo.`);

  return { valid: errors.length === 0, errors, warnings };
}

export async function validateLoadedData() {
  const data = await loadData();
  return { data, result: validateData(data) };
}
