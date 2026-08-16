import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const readJson = file => JSON.parse(fs.readFileSync(path.join(root, file), "utf8"));
const locationsData = readJson("data/locations.json");
const eventsData = readJson("data/events.json");
const statesData = readJson("data/character-states.json");
const charactersData = readJson("data/characters.json");

const locations = new Map(locationsData.locations.map(x => [x.id, x]));
const characters = new Map(charactersData.characters.map(x => [x.id, x]));
const events = eventsData.events;
const states = statesData.character_states;
const errors = [];
const warnings = [];
const movementStatuses = new Set(["arrival_confirmed", "confirmed_route", "intended_destination", "direction_only", "uncertain_route"]);
const movementTypes = new Set(["journey", "arrival", "departure", "escape", "pursuit"]);

const hasCoords = location => Array.isArray(location?.coordinates) && location.coordinates.length === 2 && location.coordinates.every(Number.isFinite);
const report = (level, message) => (level === "error" ? errors : warnings).push(message);

for (const location of locations.values()) {
  if (hasCoords(location) && (!location.coordinate_precision || !location.geographic_confidence)) {
    report("warning", `Location ${location.id} has coordinates but incomplete precision/confidence metadata.`);
  }
  if (location.coordinate_precision === "approximate_area" && (!location.coordinate_radius_m || location.coordinate_radius_m > 1000)) {
    report("error", `Location ${location.id} is approximate_area but has no valid radius <= 1000m.`);
  }
}

for (const event of events) {
  for (const id of [...(event.characters ?? []), ...(event.referenced_characters ?? [])]) {
    if (!characters.has(id)) report("error", `Event ${event.id} references unknown character ${id}.`);
  }
  for (const id of [event.location, event.origin, event.destination, ...(event.via ?? [])].filter(Boolean).filter(id => id !== "unknown")) {
    if (!locations.has(id)) report("error", `Event ${event.id} references unknown location ${id}.`);
  }
  if (movementTypes.has(event.type) && event.origin && event.destination) {
    if (!movementStatuses.has(event.movement_status)) {
      report("warning", `Legacy movement event ${event.id} lacks movement_status; migrate it before using this schema for a new book.`);
    }
    if (event.destination === "unknown" && event.movement_status && !["uncertain_route", "intended_destination"].includes(event.movement_status)) {
      report("warning", `Movement event ${event.id} has unknown destination but status ${event.movement_status}.`);
    }
  }
}

const latestByCharacter = new Map();
for (const state of [...states].sort((a, b) => a.section - b.section)) {
  if (!characters.has(state.character)) report("error", `State section ${state.section} references unknown character ${state.character}.`);
  if (state.location && !locations.has(state.location)) report("error", `State ${state.character}@${state.section} references unknown location ${state.location}.`);
  if (state.location === null && state.status === "away" && !state.location_status && !state.last_known_location) {
    report("warning", `State ${state.character}@${state.section} is away with no location_status/last_known_location metadata.`);
  }
  const previous = latestByCharacter.get(state.character);
  if (previous && previous.location && state.location && previous.location !== state.location) {
    const hasMovement = events.some(e => e.section === state.section && (e.characters ?? []).includes(state.character) && (e.origin === previous.location || e.location === state.location || e.destination === state.location));
    if (!hasMovement) report("warning", `State transition ${state.character}: ${previous.location} → ${state.location} in section ${state.section} has no obvious movement event.`);
  }
  if (previous?.status === "dead" && state.status !== "dead") report("error", `${state.character} is dead in section ${previous.section} but becomes ${state.status} in section ${state.section}.`);
  latestByCharacter.set(state.character, state);
}

for (const event of events) {
  if (event.movement_status === "arrival_confirmed" && event.destination === "unknown") report("error", `Event ${event.id} claims arrival_confirmed with unknown destination.`);
  if (event.movement_status === "direction_only" && event.destination === "unknown") report("warning", `Event ${event.id} is direction_only but has no named destination.`);
}

const sections = [...new Set(events.map(e => e.section))].sort((a, b) => a - b);
for (let section = 1; section <= 8; section += 1) {
  if (!sections.includes(section)) report("error", `Book I section ${section} has no events.`);
}

console.log(`MusashiMap Book I validator: ${sections.length} sections, ${events.length} events, ${states.length} states, ${locations.size} locations.`);
if (warnings.length) {
  console.log(`\nWarnings (${warnings.length}):`);
  warnings.forEach(x => console.log(`- ${x}`));
}
if (errors.length) {
  console.error(`\nErrors (${errors.length}):`);
  errors.forEach(x => console.error(`- ${x}`));
  process.exitCode = 1;
} else {
  console.log("\nNo structural errors found.");
}
