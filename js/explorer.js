import { buildArchive, getCharacterRelations, getRelationNeighbors, normalizeSearch, searchArchive } from "./archive-model.js";
import { getCanonicalReaderState, resolveCharacterPosition, getPositionStatusLabel, subscribeCanonicalReaderState } from "./reader-progress.js";

const make = (tag, text = "", className = "") => {
  const node = document.createElement(tag);
  if (text) node.textContent = text;
  if (className) node.className = className;
  return node;
};
const button = (text, handler, className = "explorer-button") => {
  const node = make("button", text, className);
  node.type = "button";
  node.addEventListener("click", handler);
  return node;
};
const empty = text => make("p", text, "explorer-empty");

export function installExplorer(data, { applySection }) {
  const dialog = document.querySelector("#explorer-dialog");
  const results = document.querySelector("#archive-results");
  const detail = document.querySelector("#archive-detail");
  const query = document.querySelector("#archive-search");
  const categoryBar = document.querySelector("#archive-categories");
  const archivePanel = document.querySelector("#archive-panel");
  const relationPanel = document.querySelector("#relations-panel");
  const characterSelect = document.querySelector("#relation-character");
  const relationType = document.querySelector("#relation-type");
  const relationResults = document.querySelector("#relation-results");
  const graph = document.querySelector("#relation-graph");
  const graphPageLabel = document.querySelector("#graph-page-label");
  const size = 30;
  let view = "archive", category = "characters", page = 0, selected = null;
  let relationCharacter = null, relationFilter = "all", graphPage = 0, mode = "list";
  let model, opener;

  const chapterLabel = section => {
    const chapter = model.chapters.find(item => item.number === section);
    return chapter ? `${chapter.book} · ${chapter.title} · sezione ${section}` : `Sezione ${section}`;
  };
  const currentLabel = () => `Informazioni fino a ${chapterLabel(model.section)}`;
  const chapterButton = section => button(chapterLabel(section), () => {
    // A link may only move within the already visible chapter interval.
    if (section <= model.section) applySection(section);
  }, "explorer-chapter-link");
  const sourceLink = section => {
    const chapter = model.chapters.find(item => item.number === section);
    if (!/^data\/source\//.test(chapter?.source_file ?? "")) return null;
    const link = make("a", "Apri la trascrizione di questo capitolo", "explorer-source-link");
    link.href = `https://github.com/Cartaz/MusashiMap/blob/main/${chapter.source_file.split("/").map(encodeURIComponent).join("/")}`;
    link.target = "_blank"; link.rel = "noopener noreferrer";
    return link;
  };
  const mapButton = id => button("Mostra sulla mappa", () => {
    close();
    window.dispatchEvent(new CustomEvent("musashimap:focus-location", { detail: { id } }));
  });

  function close() {
    dialog.close();
  }

  function open(nextView, from) {
    view = nextView;
    opener = from ?? document.activeElement;
    refresh();
    if (!dialog.open) dialog.showModal();
    document.querySelector(view === "archive" ? "#archive-search" : "#relation-character").focus();
  }

  function renderView() {
    document.querySelector("#explorer-title").textContent = view === "archive" ? "Archivio del viaggio" : "Relazioni";
    document.querySelector("#explorer-boundary").textContent = currentLabel();
    archivePanel.hidden = view !== "archive";
    relationPanel.hidden = view !== "relations";
    document.querySelectorAll("[data-explorer-view]").forEach(node => node.setAttribute("aria-pressed", String(node.dataset.explorerView === view)));
  }

  function relatedEvents(items) {
    const container = make("div", "", "detail-events");
    container.append(make("h3", "Eventi documentati"));
    if (!items.length) container.append(empty("Nessun evento registrato fino a questo capitolo."));
    // Group long histories by chapter, opening text only on demand.
    const grouped = new Map();
    for (const event of items) {
      if (!grouped.has(event.section)) grouped.set(event.section, []);
      grouped.get(event.section).push(event);
    }
    for (const [section, events] of grouped) {
      const group = make("details", "", "timeline-chapter");
      group.append(make("summary", `${chapterLabel(section)} · ${events.length} eventi`));
      const list = make("ul");
      events.forEach(event => list.append(make("li", event.description)));
      group.append(list, chapterButton(section));
      const source = sourceLink(section);
      if (source) group.append(source);
      container.append(group);
    }
    return container;
  }

  function renderDetail() {
    detail.replaceChildren();
    archivePanel.classList.toggle("has-detail", Boolean(selected));
    if (!selected) {
      detail.append(empty("Apri una scheda per leggere i dettagli e i capitoli collegati."));
      return;
    }
    const collection = category === "characters" ? model.characters : category === "places" ? model.places : model.events;
    const item = collection.find(item => item.id === selected);
    if (!item) { selected = null; renderDetail(); return; }
    const back = button("← Torna ai risultati", () => { selected = null; renderDetail(); results.querySelector("button")?.focus(); }, "explorer-back");
    const heading = make("h2", item.name ?? "Evento narrativo");
    heading.tabIndex = -1;
    detail.append(back, heading);
    if (category === "characters") {
      detail.append(make("p", item.summary, "detail-summary"));
      if (item.names.length > 1) detail.append(make("p", `Nomi già incontrati: ${item.names.join(" · ")}`));
      detail.append(make("h3", "Prima introduzione"), chapterButton(item.first));
      if (item.state) {
        const placeMap = new Map(model.places.map(place => [place.id, place]));
        const position = resolveCharacterPosition(item.state, placeMap);
        detail.append(make("h3", "Ultima informazione sulla posizione"));
        detail.append(make("p", `${getPositionStatusLabel(position.mode)} · ${position.referencedLocation?.name ?? "Località non determinata"}`));
        if (item.state.activity) detail.append(make("p", item.state.activity));
        if (position.location) detail.append(mapButton(position.location.id));
      }
      const relations = getCharacterRelations(model, item.id);
      detail.append(make("h3", "Relazioni documentate"));
      if (!relations.length) detail.append(empty("Nessun legame registrato fino a questo capitolo."));
      for (const neighbor of getRelationNeighbors(model, item.id)) {
        const row = make("div", "", "detail-relation");
        row.append(button(neighbor.character.name, () => { selected = neighbor.character.id; renderDetail(); detail.querySelector("h2").focus(); }, "explorer-text-button"));
        neighbor.relations.forEach(relation => row.append(make("p", `${relation.description} · dalla sezione ${relation.first}`)));
        detail.append(row);
      }
      if (relations.length) detail.append(button("Esplora questi legami", () => {
        relationCharacter = item.id; graphPage = 0; view = "relations"; refresh(); characterSelect.focus();
      }));
      detail.append(relatedEvents(model.events.filter(event => event.characters.includes(item.id))));
    } else if (category === "places") {
      detail.append(make("p", item.coordinates
        ? item.precision === "exact" ? "Localizzazione moderna precisa." : "Localizzazione moderna indicativa; non identifica necessariamente il punto esatto della scena."
        : "Luogo documentato nel racconto. Coordinate attendibili non disponibili."));
      detail.append(make("h3", "Introduzione nel racconto"), chapterButton(item.first));
      if (item.coordinates) detail.append(mapButton(item.id));
      detail.append(relatedEvents(model.events.filter(event => event.places.includes(item.id))));
    } else {
      detail.append(make("p", item.description, "detail-summary"), chapterButton(item.section));
      if (item.characters.length) {
        detail.append(make("h3", "Personaggi presenti o citati"));
        item.characters.forEach(id => {
          const character = model.characters.find(character => character.id === id);
          detail.append(button(character.name, () => { category = "characters"; selected = id; query.value = ""; page = 0; renderArchive(); detail.querySelector("h2").focus(); }, "explorer-text-button"));
        });
      }
      item.places.forEach(id => {
        const place = model.places.find(place => place.id === id);
        detail.append(make("p", place.name));
        if (place.coordinates) detail.append(mapButton(id));
      });
      detail.append(make("h3", "Riferimento"), make("p", item.source
        ? `Trascrizione locale del capitolo: ${chapterLabel(item.section)}. Riferimento registrato nel dataset.`
        : "Evento registrato nel dataset; riferimento puntuale non disponibile."));
      if (item.source) detail.append(make("p", `Riferimento del record: ${item.source}`));
      const source = sourceLink(item.section);
      if (source) detail.append(source);
    }
  }

  function renderTimeline(items) {
    // Pagination is by chapter, not event, preserving order within each chapter.
    const chapters = model.chapters.filter(chapter => items.some(event => event.section === chapter.number));
    const pages = Math.max(1, Math.ceil(chapters.length / 12));
    page = Math.min(page, pages - 1);
    const books = new Map();
    for (const chapter of chapters.slice(page * 12, page * 12 + 12)) {
      if (!books.has(chapter.book)) {
        const section = make("section", "", "timeline-book");
        section.append(make("h2", `${chapter.book} · ${chapter.book_title}`));
        books.set(chapter.book, section);
        results.append(section);
      }
      const group = make("details", "", "timeline-chapter");
      const events = items.filter(event => event.section === chapter.number);
      group.append(make("summary", `${chapter.title} · sezione ${chapter.number} · ${events.length} eventi`));
      const list = make("ol");
      events.forEach(event => list.append(make("li", "", "timeline-event")));
      [...list.children].forEach((node, index) => node.append(button(events[index].description, () => {
        selected = events[index].id; renderDetail(); detail.querySelector("h2").focus();
      }, "explorer-text-button")));
      group.append(list);
      books.get(chapter.book).append(group);
    }
    return pages;
  }

  function renderArchive() {
    categoryBar.querySelectorAll("button").forEach(node => node.setAttribute("aria-pressed", String(node.dataset.category === category)));
    const items = searchArchive(model, category === "timeline" ? "events" : category, query.value);
    results.replaceChildren();
    let pages;
    if (category === "timeline") pages = renderTimeline(items);
    else {
      pages = Math.max(1, Math.ceil(items.length / size));
      page = Math.min(page, pages - 1);
      for (const item of items.slice(page * size, (page + 1) * size)) {
        const row = button("", () => { selected = item.id; renderDetail(); detail.querySelector("h2").focus(); }, "archive-result");
        row.dataset.recordId = item.id;
        row.append(make("strong", item.name ?? item.description));
        const subtitle = category === "characters" ? `${item.main ? "Protagonista" : "Personaggio"} · dalla sezione ${item.first}`
          : category === "places" ? item.coordinates ? "Localizzabile sulla mappa" : "Coordinate non determinate"
            : chapterLabel(item.section);
        row.append(make("span", subtitle));
        results.append(row);
      }
    }
    if (!items.length) results.append(empty("Nessun risultato nelle informazioni già disponibili. Prova un'altra ricerca."));
    document.querySelector("#archive-count").textContent = `${items.length} risultati · fino alla sezione ${model.section}`;
    document.querySelector("#archive-page-label").textContent = `Pagina ${page + 1} di ${pages}`;
    document.querySelector("#archive-prev").disabled = page === 0;
    document.querySelector("#archive-next").disabled = page + 1 >= pages;
    renderDetail();
  }

  function renderGraph(neighbors) {
    graph.replaceChildren();
    const pages = Math.max(1, Math.ceil(neighbors.length / 6));
    graphPage = Math.min(graphPage, pages - 1);
    graphPageLabel.textContent = `Collegamenti ${graphPage + 1} di ${pages}`;
    document.querySelector("#graph-prev").disabled = graphPage === 0;
    document.querySelector("#graph-next").disabled = graphPage + 1 >= pages;
    if (!relationCharacter) return;
    const character = model.characters.find(item => item.id === relationCharacter);
    if (!character) return;
    const ns = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(ns, "svg");
    svg.setAttribute("viewBox", "0 0 100 100");
    svg.setAttribute("preserveAspectRatio", "none");
    svg.setAttribute("aria-hidden", "true");
    graph.append(svg);
    const center = make("div", character.name, "graph-center");
    graph.append(center);
    const positions = [[18, 17], [82, 17], [18, 50], [82, 50], [18, 83], [82, 83]];
    neighbors.slice(graphPage * 6, graphPage * 6 + 6).forEach((neighbor, index) => {
      const [x, y] = positions[index];
      const line = document.createElementNS(ns, "line");
      for (const [key, value] of Object.entries({ x1: 50, y1: 50, x2: x, y2: y })) line.setAttribute(key, String(value));
      svg.append(line);
      const node = button("", () => { relationCharacter = neighbor.character.id; graphPage = 0; renderRelations(); characterSelect.focus(); }, "graph-node");
      node.style.left = `${x}%`; node.style.top = `${y}%`;
      node.append(make("strong", neighbor.character.name), make("span", [...new Set(neighbor.relations.map(item => item.category))].join(" · ")));
      graph.append(node);
    });
    if (!neighbors.length) graph.append(empty("Nessun collegamento documentato con questo filtro."));
  }

  function renderRelations() {
    const search = normalizeSearch(document.querySelector("#relation-search").value);
    const candidates = model.characters.filter(character => !search || normalizeSearch(character.names.join(" ")).includes(search));
    if (!candidates.some(item => item.id === relationCharacter)) relationCharacter = candidates[0]?.id ?? null;
    characterSelect.replaceChildren(...candidates.map(character => {
      const option = make("option", character.name); option.value = character.id; return option;
    }));
    characterSelect.disabled = !candidates.length;
    if (relationCharacter) characterSelect.value = relationCharacter;
    const availableTypes = [...new Map(model.relationships.map(item => [item.type, item.category]))];
    if (relationFilter !== "all" && !availableTypes.some(([type]) => type === relationFilter)) relationFilter = "all";
    relationType.replaceChildren(...[["all", "Tutti i legami"], ...availableTypes].map(([type, label]) => {
      const option = make("option", label); option.value = type; return option;
    }));
    relationType.value = relationFilter;
    const neighbors = getRelationNeighbors(model, relationCharacter, relationFilter);
    relationResults.replaceChildren();
    if (!neighbors.length) relationResults.append(empty("Nessun legame documentato con questa selezione."));
    for (const neighbor of neighbors) {
      const row = make("article", "", "relation-card");
      row.append(button(neighbor.character.name, () => { relationCharacter = neighbor.character.id; graphPage = 0; renderRelations(); characterSelect.focus(); }, "explorer-text-button"));
      for (const relation of neighbor.relations) {
        // Endpoints stay explicit: different subtypes can describe the same pair.
        const from = model.characters.find(item => item.id === relation.from).name;
        const to = model.characters.find(item => item.id === relation.to).name;
        row.append(make("p", `${from} — ${to}: ${relation.description}`), chapterButton(relation.first));
      }
      relationResults.append(row);
    }
    document.querySelector("#relations-note").textContent = "Legami documentati fino al capitolo scelto. L'introduzione di un legame non ne certifica la durata successiva. Scegli un collegamento per esplorare un altro personaggio.";
    document.querySelectorAll("[data-relation-mode]").forEach(node => node.setAttribute("aria-pressed", String(node.dataset.relationMode === mode)));
    document.querySelector("#graph-panel").hidden = mode !== "graph";
    relationResults.hidden = mode !== "list";
    renderGraph(neighbors);
  }

  function refresh() {
    const section = getCanonicalReaderState().section;
    if (!section) return;
    model = buildArchive(data, section);
    renderView();
    if (view === "archive") renderArchive(); else renderRelations();
  }

  document.querySelector("#open-archive").disabled = false;
  document.querySelector("#open-relations").disabled = false;
  document.querySelector("#open-archive").addEventListener("click", event => open("archive", event.currentTarget));
  document.querySelector("#open-relations").addEventListener("click", event => open("relations", event.currentTarget));
  document.querySelector("#explorer-close").addEventListener("click", close);
  dialog.addEventListener("close", () => { opener?.focus(); });
  document.querySelectorAll("[data-explorer-view]").forEach(node => node.addEventListener("click", () => { view = node.dataset.explorerView; refresh(); }));
  categoryBar.querySelectorAll("button").forEach(node => node.addEventListener("click", () => { category = node.dataset.category; page = 0; selected = null; renderArchive(); }));
  query.addEventListener("input", () => { page = 0; selected = null; renderArchive(); });
  document.querySelector("#archive-prev").addEventListener("click", () => { page--; renderArchive(); results.scrollTop = 0; });
  document.querySelector("#archive-next").addEventListener("click", () => { page++; renderArchive(); results.scrollTop = 0; });
  document.querySelector("#relation-search").addEventListener("input", () => { graphPage = 0; renderRelations(); });
  characterSelect.addEventListener("change", () => { relationCharacter = characterSelect.value; graphPage = 0; renderRelations(); });
  relationType.addEventListener("change", () => { relationFilter = relationType.value; graphPage = 0; renderRelations(); });
  document.querySelectorAll("[data-relation-mode]").forEach(node => node.addEventListener("click", () => { mode = node.dataset.relationMode; renderRelations(); }));
  document.querySelector("#graph-prev").addEventListener("click", () => { graphPage--; renderRelations(); });
  document.querySelector("#graph-next").addEventListener("click", () => { graphPage++; renderRelations(); });
  subscribeCanonicalReaderState(() => { if (dialog.open) refresh(); });
  return { open };
}
