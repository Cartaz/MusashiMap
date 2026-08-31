import { loadMapData } from "./data.js";
import { getMovementRouteMode } from "./movement-contract.js";
import { getPlacePresentation, isApproximateLocation } from "./place-presentation.js";
import { popups } from "./popups.js";
import { getCanonicalReaderState, getDisplayCharacterName, getPositionStatusLabel, getReaderSnapshot, getVisibleCharacters, resolveCharacterPosition, subscribeCanonicalReaderState } from "./reader-progress.js";
import { isNonPhysicalLocationStatus } from "./position-contract.js";
import { installMarkerCollision } from "./marker-collision.js";

(() => {
  let map, markers, routes, characterMarkers;
  let locations = [], events = [], characterStates = [], characters = [], identities = [];
  let unmappedPopupOpen = false;

  const hasCoords = location => Array.isArray(location?.coordinates) && location.coordinates.length === 2;
  const locationLabel = location => location?.name || location?.modern_name_romaji || "Località non determinata";
  const precisionLabel = location => {
    if (!location?.coordinate_precision || location.coordinate_precision === "exact") return "Posizione moderna precisa";
    if (location.coordinate_precision === "modern_match") return "Corrispondenza moderna ad alta confidence";
    if (location.coordinate_precision === "modern_literary_reference") return "Riferimento letterario moderno";
    return "Posizione indicativa dell'area";
  };

  const icon = location => {
    const presentation = getPlacePresentation(location?.type) ?? getPlacePresentation("narrative_site");
    return L.divIcon({
      className: "musashi-map-marker-wrapper",
      html: `<span class="musashi-map-marker ${isApproximateLocation(location) ? "is-approximate" : ""}" style="--marker-color:${presentation.markerColor}"><img src="${presentation.iconPath}" alt="" aria-hidden="true"></span>`,
      iconSize: [32, 32],
      iconAnchor: [16, 16],
      popupAnchor: [0, -17]
    });
  };

  const characterIcon = (color, location, mode = "current") => L.divIcon({
    className: "musashi-character-marker-wrapper",
    html: `<span class="musashi-character-marker ${isApproximateLocation(location) ? "is-approximate" : ""} ${mode === "reported" ? "is-reported" : mode === "last_known" ? "is-last-known" : ""}" style="--marker-color:${color}"></span>`,
    iconSize: [26, 26],
    iconAnchor: [13, 13]
  });

  const routeStyle = mode => mode === "intended"
    ? { color: "#b99ad6", weight: 2, opacity: .68, dashArray: "6 8", interactive: true }
    : { color: "#d97706", weight: 3, opacity: .78, interactive: true };

  function showMapNotice(message) {
    const note = document.querySelector("#map-note");
    if (!note) return;
    note.textContent = message;
    note.hidden = !message;
  }

  const bindPopupIfAvailable = (layer, popup) => {
    if (popup?.content) layer.bindPopup(popup.content, popup.options);
    return layer;
  };

  function closeUnmappedPopup() {
    const node = document.querySelector("#map-unmapped");
    if (!node) return;
    node.hidden = true;
    unmappedPopupOpen = false;
  }

  function renderUnmapped(items) {
    const node = document.querySelector("#map-unmapped");
    if (!node) return;
    if (!items.length || !unmappedPopupOpen) {
      node.hidden = true;
      return;
    }

    node.replaceChildren();
    const header = document.createElement("div");
    header.className = "map-unmapped-header";
    const heading = document.createElement("div");
    const kicker = document.createElement("p");
    kicker.className = "map-unmapped-kicker";
    kicker.textContent = "TRACCIA NARRATIVA";
    const title = document.createElement("h3");
    title.className = "map-unmapped-title";
    title.textContent = "Posizione non ancora determinata";
    heading.append(kicker, title);
    const close = document.createElement("button");
    close.className = "map-unmapped-close";
    close.type = "button";
    close.setAttribute("aria-label", "Chiudi");
    close.textContent = "×";
    close.addEventListener("click", closeUnmappedPopup);
    header.append(heading, close);

    const list = document.createElement("ul");
    list.className = "map-unmapped-list";
    items.forEach(({ character, state, location }) => {
      const item = document.createElement("li");
      const name = document.createElement("span");
      name.className = "map-unmapped-name";
      name.textContent = getDisplayCharacterName(character, state.section, identities);
      const meta = document.createElement("span");
      meta.className = "map-unmapped-meta";
      if (state.location_status === "departed_with_group" && state.group) {
        meta.textContent = `Ha lasciato ${location ? locationLabel(location) : "la posizione precedente"} con il gruppo ${state.group.replaceAll("_", " ")}. La nuova posizione non è ancora determinata.`;
      } else {
        meta.textContent = `${location ? `Ultima area nota: ${locationLabel(location)}. ` : ""}La posizione attuale non è ancora determinata.`;
      }
      item.append(name, meta);
      list.append(item);
    });
    node.append(header, list);
    node.hidden = false;
  }

  function draw(section, selectedCharacterIds = []) {
    if (!map || !markers || !characterMarkers) return;
    markers.clearLayers();
    routes.clearLayers();
    characterMarkers.clearLayers();

    const byId = new Map(locations.map(location => [location.id, location]));
    const visibleCharacterIds = new Set(getVisibleCharacters(characters, section, { states: characterStates, events }).map(character => character.id));
    const spoilerSafeSelection = selectedCharacterIds.filter(id => visibleCharacterIds.has(id));
    const { selectedStates, sectionEvents } = getReaderSnapshot({ states: characterStates, events }, section, spoilerSafeSelection);
    const visibleCharacters = [];
    const unmapped = [];

    selectedStates.forEach(state => {
      const character = characters.find(item => item.id === state.character);
      const resolved = resolveCharacterPosition(state, byId);
      if (!resolved.location) {
        unmapped.push({ character, state, location: state.last_known_location ? byId.get(state.last_known_location) : null });
        return;
      }
      visibleCharacters.push({ state, characterId: state.character, character, location: resolved.location, color: character?.color, mode: resolved.mode });
    });

    renderUnmapped(unmapped);

    // Places are persistent narrative landmarks. Once a place is introduced,
    // it remains visible for every subsequent chapter, independently of
    // character presence and event activity.
    const visiblePlaces = locations
      .filter(location => Number.isInteger(location?.introduced_section) && location.introduced_section <= section)
      .filter(hasCoords);

    visibleCharacters.forEach(item => {
      const name = getDisplayCharacterName(item.character, section, identities);
      const status = getPositionStatusLabel(item.mode);
      const label = locationLabel(item.location);
      const detail = item.mode === "current"
        ? "Il testo colloca fisicamente il personaggio qui."
        : item.mode === "reported"
          ? "Il testo riferisce questo luogo, ma non stabilisce la presenza fisica del personaggio qui."
          : item.mode === "last_known"
            ? "Questo è il luogo più recente che possiamo mantenere come posizione nota; non è una presenza fisica accertata nel capitolo corrente."
            : "La posizione attuale non è determinata.";
      const popup = popups.character({
        name,
        location: `${status} · ${label}`,
        description: item.state.activity ? `${detail} ${item.state.activity}` : detail
      });
      bindPopupIfAvailable(L.marker(item.location.coordinates, {
        icon: characterIcon(item.color, item.location, item.mode),
        title: `${name} · ${status} · ${label}`
      }), popup).addTo(characterMarkers);
    });

    visiblePlaces.forEach(location => {
      const popup = popups.place({
        name: locationLabel(location),
        secondary: precisionLabel(location),
        description: location.map_note ?? "Localizzazione moderna"
      });
      bindPopupIfAvailable(L.marker(location.coordinates, { icon: icon(location), title: locationLabel(location) }), popup)
        .addTo(markers);
    });

    sectionEvents
      .filter(event => event.origin && event.destination && event.destination !== "unknown")
      .forEach(event => {
        const origin = byId.get(event.origin);
        const destination = byId.get(event.destination);
        if (!hasCoords(origin) || !hasCoords(destination)) return;
        const mode = getMovementRouteMode(event);
        if (!mode) return;
        const title = mode === "confirmed" ? "Spostamento confermato" : "Direzione / destinazione intenzionale";
        const popup = popups.movement({
          title,
          route: `${locationLabel(origin)} → ${locationLabel(destination)}`,
          description: event.description ?? ""
        });
        bindPopupIfAvailable(L.polyline([origin.coordinates, destination.coordinates], routeStyle(mode)), popup)
          .addTo(routes);
      });

    const focusCoordinates = [];
    sectionEvents.forEach(event => {
      [event.location, event.origin, event.destination, ...(event.via ?? [])].filter(Boolean).forEach(id => {
        const location = byId.get(id);
        if (hasCoords(location)) focusCoordinates.push(location.coordinates);
      });
    });
    const plotted = focusCoordinates.length
      ? focusCoordinates
      : [
          ...visibleCharacters.filter(item => item.mode === "current").map(item => item.location.coordinates),
          ...visiblePlaces.map(location => location.coordinates)
        ];
    if (plotted.length) map.fitBounds(L.latLngBounds(plotted).pad(.18), { maxZoom: 10, animate: false });
  }

  function romanizedLabelExpression() {
    return ["coalesce", ["get", "name:ja-Latn"], ["get", "name:ja_rm"], ["get", "name:latin"], ["get", "name_en"], ["get", "name"]];
  }

  function cleanAdministrativeSuffixExpression() {
    const suffixes = ["-machi", "-mura", "-chō", "-cho", "-ken", "-gun", "-shi", "-ku", "-son", "-to", "-fu"];
    const name = ["var", "labelName"];
    const cases = [];
    suffixes.forEach(suffix => {
      const length = suffix.length;
      cases.push(
        ["all", [">=", ["length", name], length], ["==", ["slice", name, ["-", ["length", name], length]], suffix]],
        ["slice", name, 0, ["-", ["length", name], length]]
      );
    });
    return ["let", "labelName", romanizedLabelExpression(), ["case", ...cases, name]];
  }

  function customizeBasemapStyle(nextStyle) {
    const labelSourceLayers = new Set(["place", "water_name", "waterway_name", "transportation_name", "poi", "mountain_peak", "park", "aerodrome_label"]);
    return {
      ...nextStyle,
      layers: (nextStyle.layers ?? []).map(layer => ({
        ...layer,
        ...(layer.type === "symbol" && layer.layout?.["text-field"] && layer.source === "openmaptiles" && labelSourceLayers.has(layer["source-layer"])
          ? { layout: { ...layer.layout, "text-field": cleanAdministrativeSuffixExpression() } }
          : {})
      }))
    };
  }

  function addRasterBasemap() {
    if (typeof L.tileLayer !== "function") {
      showMapNotice("Cartografia di base non disponibile; le tracce narrative restano consultabili.");
      return;
    }
    let tileFailureReported = false;
    const fallback = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
      maxZoom: 18
    });
    fallback.on("tileerror", () => {
      if (tileFailureReported) return;
      tileFailureReported = true;
      showMapNotice("Cartografia di base non raggiungibile; marker e percorsi restano disponibili.");
    });
    fallback.addTo(map);
    showMapNotice("Cartografia di base semplificata attiva.");
  }

  async function initializeBasemap() {
    try {
      if (typeof L.maplibreGL !== "function" || !window.maplibregl) throw new Error("MapLibre CDN unavailable");
      const controller = new AbortController();
      const timeout = window.setTimeout(() => controller.abort(), 8000);
      let styleResponse;
      try {
        styleResponse = await fetch("https://tiles.openfreemap.org/styles/liberty", { cache: "no-store", signal: controller.signal });
      } finally {
        window.clearTimeout(timeout);
      }
      if (!styleResponse.ok) throw new Error(`OpenFreeMap style: ${styleResponse.status}`);
      L.maplibreGL({ style: customizeBasemapStyle(await styleResponse.json()) }).addTo(map);
      showMapNotice("");
    } catch (error) {
      console.warn("Primary basemap unavailable; using raster fallback", error);
      addRasterBasemap();
    }
  }

  async function boot() {
    if (!window.L) {
      showMapNotice("Mappa interattiva non disponibile. Il diario di lettura resta utilizzabile.");
      console.error("Map initialization failed: Leaflet CDN unavailable");
      return;
    }

    try {
      map = L.map("map", {
        zoomControl: true,
        preferCanvas: true,
        minZoom: 1,
        maxZoom: 18
      }).setView([35.05, 135.55], 7);
      installMarkerCollision(map);

      markers = L.layerGroup().addTo(map);
      routes = L.layerGroup().addTo(map);
      characterMarkers = L.layerGroup().addTo(map);
      const basemapReady = initializeBasemap();

      const mapData = await loadMapData();
      locations = mapData.locations.locations;
      events = mapData.events.events;
      characterStates = mapData.states.character_states;
      characters = mapData.characters.characters;
      identities = mapData.identities.identities;

      const state = getCanonicalReaderState();
      if (state.section !== null) draw(state.section, state.selectedCharacters);
      await basemapReady;
    } catch (error) {
      showMapNotice("Dati cartografici non disponibili. Il diario di lettura resta utilizzabile.");
      console.error("Map initialization failed", error);
    }
  }

  subscribeCanonicalReaderState((state, previousState) => {
    const previousSelected = new Set(previousState?.selectedCharacters ?? []);
    const nextSelected = new Set(state.selectedCharacters);
    const sectionChanged = previousState !== null && state.section !== previousState.section;
    const selectionChanged = previousState !== null && (
      nextSelected.size !== previousSelected.size ||
      [...nextSelected].some(id => !previousSelected.has(id))
    );

    if (sectionChanged) unmappedPopupOpen = false;
    if (selectionChanged) {
      const visibleCharacterIds = new Set(getVisibleCharacters(characters, state.section, { states: characterStates, events }).map(character => character.id));
      const spoilerSafeSelection = [...nextSelected].filter(id => visibleCharacterIds.has(id));
      const { selectedStates } = getReaderSnapshot({ states: characterStates, events }, state.section, spoilerSafeSelection);
      unmappedPopupOpen = spoilerSafeSelection.some(id => {
        const latest = selectedStates.find(item => item.character === id);
        return Boolean(latest && isNonPhysicalLocationStatus(latest.location_status) && !latest.last_known_location);
      });
    }

    draw(state.section, state.selectedCharacters);
  });

  boot();
})();