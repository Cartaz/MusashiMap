import { mergeNewlyVisibleSelection } from "./character-selection.js";
import { loadData } from "./data.js";
import { getPlaceLegendEntries } from "./place-presentation.js";
import {
  createReaderProgress,
  getCanonicalReaderState,
  getDisplayCharacterName,
  getPositionStatusLabel,
  getProgressiveDisplayName,
  getProgressiveValue,
  getReaderSnapshot,
  getRelevantHistoricalWiki,
  getVisibleCharacters,
  resolveCharacterPosition,
  initializeCanonicalReaderState,
  setCanonicalReaderState,
  subscribeCanonicalReaderState
} from "./reader-progress.js";

const chapterInput = document.querySelector("#chapter");
const chapterApply = document.querySelector("#chapter-apply");
const prevButton = document.querySelector("#prev-section");
const nextButton = document.querySelector("#next-section");
const sectionSelect = document.querySelector("#section-select");
const bookLabel = document.querySelector("#book-label");
const title = document.querySelector("#section-title");
const status = document.querySelector("#status");
const characterList = document.querySelector("#character-list");
const eventList = document.querySelector("#event-list");
const wikiList = document.querySelector("#wiki-list");
const dataStatus = document.querySelector("#data-status");
const characterFilters = document.querySelector("#character-filters");
const placeLegend = document.querySelector("#place-legend");
const selectAll = document.querySelector("#select-all");
const selectNone = document.querySelector("#select-none");

let data;
let reader;

function getVisibleMainCharacters(section) {
  return getVisibleCharacters(data.characters.characters, section, {
    states: data.states.character_states,
    events: data.events.events,
    characterWiki: data.characterWiki?.characters
  }).filter(character => character.importance === "main");
}

function applySection(value) {
  if (!reader?.hasSection(value)) return false;
  const state = getCanonicalReaderState();
  const nextSection = Number(value);
  const furthestSection = state.furthestSection ?? state.section;
  const selectedCharacters = nextSection > furthestSection
    ? mergeNewlyVisibleSelection(
      getVisibleMainCharacters(furthestSection).map(character => character.id),
      getVisibleMainCharacters(nextSection).map(character => character.id),
      state.selectedCharacters
    )
    : state.selectedCharacters;
  setCanonicalReaderState({ section: nextSection, selectedCharacters });
  return true;
}

function renderPlaceLegend() {
  const types = data.locations.locations
    .filter(location => Array.isArray(location.coordinates) && location.coordinates.length === 2)
    .map(location => location.type);
  const entries = getPlaceLegendEntries(types).map(presentation => {
    const item = document.createElement("div");
    item.className = "legend-item";
    const swatch = document.createElement("span");
    swatch.className = "legend-swatch";
    swatch.setAttribute("aria-hidden", "true");
    const image = document.createElement("img");
    image.src = presentation.iconPath;
    image.alt = "";
    image.draggable = false;
    swatch.append(image);
    const text = document.createElement("span");
    text.textContent = presentation.legendLabel;
    item.append(swatch, text);
    return item;
  });
  placeLegend.replaceChildren(...entries);
}

function renderCharacterFilters(selectedCharacters, section) {
  characterFilters.replaceChildren(...getVisibleMainCharacters(section).map(character => {
    const label = document.createElement("label");
    label.className = "character-filter";
    const swatch = document.createElement("span");
    swatch.className = "character-swatch";
    swatch.style.setProperty("--character-color", character.color);
    swatch.setAttribute("aria-hidden", "true");
    const input = document.createElement("input");
    input.type = "checkbox";
    input.checked = selectedCharacters.has(character.id);
    const displayName = getDisplayCharacterName(character, section, data.identities?.identities);
    input.setAttribute("aria-label", `Segui ${displayName}`);
    input.addEventListener("change", () => {
      const nextSelected = new Set(selectedCharacters);
      if (input.checked) nextSelected.add(character.id);
      else nextSelected.delete(character.id);
      const state = getCanonicalReaderState();
      setCanonicalReaderState({ section: state.section, selectedCharacters: [...nextSelected] });
    });
    const name = document.createElement("span");
    name.className = "character-filter-name";
    name.textContent = displayName;
    label.append(swatch, input, name);
    return label;
  }));
}

function getStateLocationPresentation(state, locationById) {
  const resolved = resolveCharacterPosition(state, locationById);
  const location = resolved.referencedLocation;
  return {
    label: location?.name ?? "Posizione non determinata",
    meta: location ? getPositionStatusLabel(resolved.mode) : "Posizione non determinata"
  };
}

function createCharacterCard(state, character, section, locations) {
  const presentation = getStateLocationPresentation(state, locations);
  const card = document.createElement("article");
  const heading = document.createElement("h3");
  heading.textContent = getDisplayCharacterName(character, section, data.identities?.identities);
  const locationParagraph = document.createElement("p");
  const locationName = document.createElement("strong");
  locationName.textContent = presentation.label;
  locationParagraph.append(locationName);
  const activity = document.createElement("p");
  activity.textContent = state.activity ?? "";
  const metadata = document.createElement("small");
  metadata.textContent = `Stato: ${presentation.meta} · confidenza: ${state.location_confidence ?? state.certainty}`;
  card.append(heading, locationParagraph, activity, metadata);
  return card;
}

function createWikiCard(entry, { character = false, section = 1 } = {}) {
  const card = document.createElement("article");
  card.className = `wiki-card ${character ? "character-wiki-card" : ""}`;
  const button = document.createElement("button");
  button.type = "button";
  button.className = "wiki-card-toggle";
  button.setAttribute("aria-expanded", "false");
  const cardTitle = document.createElement("span");
  cardTitle.className = "wiki-card-title";
  cardTitle.textContent = character ? getProgressiveDisplayName(entry, section) : entry.display_name;
  const chevron = document.createElement("span");
  chevron.className = "wiki-card-chevron";
  chevron.setAttribute("aria-hidden", "true");
  chevron.textContent = "＋";
  button.append(cardTitle, chevron);
  const body = document.createElement("div");
  body.className = "wiki-card-body";
  body.hidden = true;
  const role = document.createElement("p");
  role.className = "wiki-trigger";
  role.textContent = character ? entry.role : (entry.novel_trigger?.context ?? "Riferimento incontrato nel romanzo.");
  const summary = document.createElement("p");
  const progressiveText = character ? getProgressiveValue(entry.current_by_section, section) : null;
  summary.textContent = progressiveText ?? (character ? entry.role : (entry.wiki?.summary ?? "Contesto storico non disponibile."));
  body.append(role, summary);
  if (!character && entry.source?.url && entry.source?.status !== "needs_authoritative_source_record") {
    const source = document.createElement("a");
    source.className = "wiki-source";
    source.href = entry.source.url;
    source.target = "_blank";
    source.rel = "noopener noreferrer";
    source.textContent = `${entry.source.publisher ?? "Fonte"} · fonte storica`;
    body.append(source);
  }
  button.addEventListener("click", () => {
    const open = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!open));
    body.hidden = open;
    card.classList.toggle("is-open", !open);
  });
  card.append(button, body);
  return card;
}

function renderWiki(section) {
  const historicalEntries = getRelevantHistoricalWiki(data.microWiki.entities, section);
  const characters = Object.values(data.characterWiki?.characters ?? {})
    .filter(entry => entry.category === "secondary"
      && Object.keys(entry.current_by_section ?? {}).some(key => Number(key) <= section));
  const nodes = [];
  if (characters.length) {
    const heading = document.createElement("h3");
    heading.className = "wiki-subheading character-wiki-heading";
    heading.textContent = "Personaggi secondari";
    nodes.push(heading, ...characters.map(entry => createWikiCard(entry, { character: true, section })));
  }
  if (historicalEntries.length || nodes.length) {
    const heading = document.createElement("h3");
    heading.className = "wiki-subheading";
    heading.textContent = "Contesto storico";
    nodes.push(heading);
  }
  nodes.push(...historicalEntries.map(entry => createWikiCard(entry, { section })));
  if (!nodes.length) {
    const empty = document.createElement("p");
    empty.className = "wiki-empty";
    empty.textContent = "Nessun personaggio secondario o riferimento storico rilevante nelle sezioni già lette.";
    nodes.push(empty);
  }
  wikiList.replaceChildren(...nodes);
}

function render() {
  if (!data || !reader) return;
  const readerState = getCanonicalReaderState();
  const section = readerState.section;
  const visibleMainCharacters = getVisibleMainCharacters(section);
  const visibleIds = new Set(visibleMainCharacters.map(character => character.id));
  const selectedCharacters = new Set(readerState.selectedCharacters.filter(id => visibleIds.has(id)));
  const sectionData = reader.sections.find(item => item.number === section);
  if (!sectionData) return;
  bookLabel.textContent = sectionData.book_title;
  title.textContent = sectionData.title;
  status.textContent = `Sezione ${section} · informazioni visibili fino a questo punto della storia`;
  sectionSelect.value = String(section);
  chapterInput.value = String(section);
  prevButton.disabled = section <= reader.min;
  nextButton.disabled = section >= reader.max;
  const characterById = new Map(data.characters.characters.map(character => [character.id, character]));
  const locationById = new Map(data.locations.locations.map(location => [location.id, location]));
  const snapshot = getReaderSnapshot({ states: data.states.character_states, events: data.events.events }, section, selectedCharacters);
  characterList.replaceChildren(...snapshot.selectedStates.map(state =>
    createCharacterCard(state, characterById.get(state.character), section, locationById)));
  eventList.replaceChildren(...snapshot.sectionEvents.map(event => {
    const item = document.createElement("li");
    item.textContent = event.description ?? "";
    return item;
  }));
  renderCharacterFilters(selectedCharacters, section);
  renderWiki(section);
}

subscribeCanonicalReaderState(() => render());

try {
  data = await loadData();
  reader = createReaderProgress(data.chapters, data.readerProgress);
  dataStatus.textContent = "Dati caricati";
  dataStatus.dataset.state = "ok";
  chapterInput.min = String(reader.min);
  chapterInput.max = String(reader.max);
  sectionSelect.replaceChildren(...reader.sections.map(section => {
    const option = document.createElement("option");
    option.value = String(section.number);
    option.textContent = `${section.book} — ${section.title}`;
    return option;
  }));
  renderPlaceLegend();
  const previousState = getCanonicalReaderState();
  const initialSection = reader.hasSection(previousState.section) ? previousState.section : reader.initialSection;
  const visibleIds = new Set(getVisibleMainCharacters(initialSection).map(character => character.id));
  const initialSelected = previousState.selectedCharacters.length
    ? previousState.selectedCharacters.filter(id => visibleIds.has(id))
    : [...visibleIds];
  initializeCanonicalReaderState({ section: initialSection, selectedCharacters: initialSelected });
} catch (error) {
  dataStatus.textContent = "Errore nel caricamento dei dati";
  dataStatus.dataset.state = "error";
  console.error(error);
}

// Controls that need reader metadata are installed only after initialization succeeds.
if (reader) {
  chapterInput.addEventListener("input", () => {
    chapterInput.setCustomValidity("");
    if (chapterInput.value !== "" && !reader.hasSection(chapterInput.value)) {
      chapterInput.setCustomValidity(`Inserisci una sezione disponibile da ${reader.min} a ${reader.max}.`);
    }
  });
  chapterInput.addEventListener("keydown", event => {
    if (event.key === "Enter") {
      if (!applySection(chapterInput.value)) chapterInput.reportValidity();
    } else if (event.key === "Escape") {
      chapterInput.value = String(getCanonicalReaderState().section);
    }
  });
  chapterApply.addEventListener("click", () => {
    if (!applySection(chapterInput.value)) chapterInput.reportValidity();
  });
  prevButton.addEventListener("click", () => {
    const previous = reader.previousSection(getCanonicalReaderState().section);
    if (previous !== null) applySection(previous);
  });
  nextButton.addEventListener("click", () => {
    const next = reader.nextSection(getCanonicalReaderState().section);
    if (next !== null) applySection(next);
  });
  sectionSelect.addEventListener("change", () => applySection(sectionSelect.value));
  selectAll.addEventListener("click", () => {
    const state = getCanonicalReaderState();
    setCanonicalReaderState({
      section: state.section,
      selectedCharacters: getVisibleMainCharacters(state.section).map(character => character.id)
    });
  });
  selectNone.addEventListener("click", () => {
    const state = getCanonicalReaderState();
    setCanonicalReaderState({ section: state.section, selectedCharacters: [] });
  });
} else {
  for (const control of [chapterInput, chapterApply, prevButton, nextButton, sectionSelect, selectAll, selectNone]) {
    control.disabled = true;
  }
}
