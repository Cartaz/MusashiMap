import { loadMapData } from "./data.js";
import { getCanonicalReaderState, getDisplayCharacterName, getLatestStates, subscribeCanonicalReaderState } from "./reader-progress.js";

(() => {
  const VERSION = "20260817-40";
  let map, glLayer, markers, routes, characterMarkers;
  let locations = [], events = [], characterStates = [], characters = [];
  let selectedCharacters = new Set();
  let unmappedPopupOpen = false;
  let previousSection = null;
  let previousSelectedCharacters = null;

  const colors = { exact_site:"#e0a04b", settlement:"#c9d1d9", settlement_area:"#c9d1d9", urban_area:"#c9d1d9", area:"#8fb3c9", region:"#8fb3c9", route:"#b99ad6", river:"#8fb3c9", temple:"#b8c7a4", castle:"#b8c7a4", fortified_site:"#b8c7a4", bridge:"#b99ad6", narrative_site:"#d9a0b7", literary_landmark:"#d9a0b7" };
  const placeIconPaths = { temple:"assets/icons/places/temple.svg", castle:"assets/icons/places/castle.svg", city:"assets/icons/places/city.svg", village:"assets/icons/places/village.svg", nature:"assets/icons/places/nature.svg", area:"assets/icons/places/area.svg", river:"assets/icons/places/river.svg", route:"assets/icons/places/route.svg", literary_landmark:"assets/icons/places/landmark.svg" };
  const placeTypeAliases = { settlement:"city", settlement_area:"village", urban_area:"city", area:"area", region:"area", river:"river", route:"route", temple:"temple", castle:"castle", fortified_site:"castle", bridge:"route", narrative_site:"literary_landmark", literary_landmark:"literary_landmark", exact_site:"literary_landmark" };

  const hasCoords = location => Array.isArray(location?.coordinates) && location.coordinates.length === 2;
  const locationLabel = location => location?.name || location?.modern_name_romaji || "Località non determinata";
  const precisionLabel = location => {
    if (!location?.coordinate_precision || location.coordinate_precision === "exact") return "Posizione moderna precisa";
    if (location.coordinate_precision === "modern_match") return "Corrispondenza moderna ad alta confidence";
    if (location.coordinate_precision === "modern_literary_reference") return "Riferimento letterario moderno";
    return "Posizione indicativa dell'area";
  };

  const popups = window.MusashiMapPopups;
  if (!popups) throw new Error("MusashiMap popup renderer is unavailable");

  const icon = (location, offset = [0, 0]) => {
    const type = placeTypeAliases[location?.type] ?? "literary_landmark";
    const color = colors[location?.type] ?? "#c9d1d9";
    return L.divIcon({
      className: "musashi-map-marker-wrapper",
      html: `<span class="musashi-map-marker" style="--marker-color:${color}"><img src="${placeIconPaths[type]}" alt="" aria-hidden="true"></span>`,
      iconSize: [32, 32],
      iconAnchor: [16 - offset[0], 16 - offset[1]],
      popupAnchor: [0, -17]
    });
  };

  const characterIcon = (color, location, offset = [0, 0], mode = "current") => L.divIcon({
    className: "musashi-character-marker-wrapper",
    html: `<span class="musashi-character-marker ${location?.coordinate_precision === "approximate_area" ? "is-approximate" : ""} ${mode === "reported" ? "is-reported" : mode === "last_known" ? "is-last-known" : ""}" style="--marker-color:${color}"></span>`,
    iconSize: [26, 26],
    iconAnchor: [13 - offset[0], 13 - offset[1]]
  });

  const coordinateKey = coordinates => coordinates.map(value => Number(value).toFixed(5)).join(",");
  const collisionOffsets = total => {
    if (total <= 1) return [[0, 0]];
    const radius = total <= 3 ? 24 : 30;
    return Array.from({ length: total }, (_, index) => {
      const angle = -Math.PI / 2 + index * 2 * Math.PI / total;
      return [Math.round(Math.cos(angle) * radius), Math.round(Math.sin(angle) * radius)];
    });
  };

  const routeMode = event => {
    const explicit = event?.movement_status;
    if (["arrival_confirmed", "confirmed_route"].includes(explicit)) return "confirmed";
    if (["intended_destination", "direction_only", "uncertain_route"].includes(explicit)) return "intended";
    const certainty = String(event?.certainty ?? "").toLowerCase();
    if (event?.type === "journey" && (event?.destination === "unknown" || certainty.includes("intended") || certainty.includes("uncertain") || certainty.includes("possible"))) return "intended";
    if (event?.type === "departure" || event?.type === "direction") return "intended";
    return "confirmed";
  };

  const routeStyle = mode => mode === "intended"
    ? { color: "#b99ad6", weight: 2, opacity: .68, dashArray: "6 8", interactive: true }
    : { color: "#d97706", weight: 3, opacity: .78, interactive: true };

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
      name.textContent = getDisplayCharacterName(character, state.section);
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

  function resolveMapState(state, byId, allStates) {
    if (state?.location_status === "reported_position") {
      const reportedId = state.location || state.last_known_location;
      const reported = reportedId ? byId.get(reportedId) : null;
      if (reported && hasCoords(reported)) return { location: reported, mode: "reported" };
    }

    if (state?.location_status === "departed_with_group") {
      const lastKnown = state?.last_known_location ? byId.get(state.last_known_location) : null;
      if (lastKnown && hasCoords(lastKnown)) return { location: lastKnown, mode: "last_known" };
    }

    const current = state?.location ? byId.get(state.location) : null;
    if (current && hasCoords(current)) return { location: current, mode: "current" };

    const candidates = allStates
      .filter(item => item.character === state.character && item.section < state.section && item.location && item.location_status !== "reported_position")
      .sort((a, b) => b.section - a.section);
    const fallback = candidates.map(item => byId.get(item.location)).find(hasCoords);
    if (fallback) return { location: fallback, mode: "last_known" };

    const lastKnown = state?.last_known_location ? byId.get(state.last_known_location) : null;
    if (lastKnown && hasCoords(lastKnown)) return { location: lastKnown, mode: "last_known" };
    return { location: null, mode: "unmapped" };
  }

  function characterStatusLabel(mode) {
    if (mode === "current") return "Presenza fisica";
    if (mode === "reported") return "Posizione riferita";
    if (mode === "last_known") return "Ultima posizione nota";
    return "Posizione non determinata";
  }

  function draw(section) {
    if (!map || !markers || !characterMarkers) return;
    markers.clearLayers();
    routes.clearLayers();
    characterMarkers.clearLayers();

    const byId = new Map(locations.map(location => [location.id, location]));
    const latestStates = getLatestStates(characterStates, section);
    const sectionEvents = events.filter(event => event.section === section && (event.characters ?? []).some(id => selectedCharacters.has(id)));
    const visibleCharacters = [];
    const unmapped = [];

    latestStates.forEach(state => {
      if (!selectedCharacters.has(state.character)) return;
      const character = characters.find(item => item.id === state.character);
      const resolved = resolveMapState(state, byId, characterStates);
      if (!resolved.location) {
        unmapped.push({ character, state, location: state.last_known_location ? byId.get(state.last_known_location) : null });
        return;
      }
      visibleCharacters.push({ state, characterId: state.character, character, location: resolved.location, color: character?.color, mode: resolved.mode });
    });

    renderUnmapped(unmapped);

    const contextualIds = new Set();
    sectionEvents.forEach(event => {
      if (event.location) contextualIds.add(event.location);
      if (event.origin) contextualIds.add(event.origin);
      if (event.destination && event.destination !== "unknown") contextualIds.add(event.destination);
      (event.via ?? []).forEach(id => contextualIds.add(id));
    });
    const visiblePlaces = [...contextualIds].map(id => byId.get(id)).filter(hasCoords);

    const groups = new Map();
    const register = (kind, id, location) => {
      const position = coordinateKey(location.coordinates);
      if (!groups.has(position)) groups.set(position, []);
      const key = `${kind}:${id}`;
      groups.get(position).push({ kind, id, location, key });
    };
    visiblePlaces.forEach(location => register("place", location.id, location));
    visibleCharacters.forEach(item => register("character", item.characterId, item.location));

    const offsets = new Map();
    groups.forEach(group => collisionOffsets(group.length).forEach((offset, index) => offsets.set(group[index].key, offset)));

    visibleCharacters.forEach(item => {
      const offset = offsets.get(`character:${item.characterId}`) ?? [0, 0];
      const name = getDisplayCharacterName(item.character, section);
      const status = characterStatusLabel(item.mode);
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

      L.marker(item.location.coordinates, {
        icon: characterIcon(item.color, item.location, offset, item.mode),
        title: `${name} · ${status} · ${label}`
      })
        .bindPopup(popup.content, popup.options)
        .addTo(characterMarkers);
    });

    visiblePlaces.forEach(location => {
      const offset = offsets.get(`place:${location.id}`) ?? [0, 0];
      const popup = popups.place({
        name: locationLabel(location),
        secondary: precisionLabel(location),
        description: location.map_note ?? "Localizzazione moderna"
      });
      L.marker(location.coordinates, { icon: icon(location, offset), title: locationLabel(location) })
        .bindPopup(popup.content, popup.options)
        .addTo(markers);
    });

    sectionEvents
      .filter(event => event.origin && event.destination && event.destination !== "unknown")
      .forEach(event => {
        const origin = byId.get(event.origin);
        const destination = byId.get(event.destination);
        if (!hasCoords(origin) || !hasCoords(destination)) return;
        const mode = routeMode(event);
        const title = mode === "confirmed" ? "Spostamento confermato" : "Direzione / destinazione intenzionale";
        const popup = popups.movement({
          title,
          route: `${locationLabel(origin)} → ${locationLabel(destination)}`,
          description: event.description ?? ""
        });
        L.polyline([origin.coordinates, destination.coordinates], routeStyle(mode))
          .bindPopup(popup.content, popup.options)
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
      layers: nextStyle.layers.map(layer => ({
        ...layer,
        ...(layer.type === "symbol" && layer.layout?.["text-field"] && layer.source === "openmaptiles" && labelSourceLayers.has(layer["source-layer"])
          ? { layout: { ...layer.layout, "text-field": cleanAdministrativeSuffixExpression() } }
          : {})
      }))
    };
  }

  async function boot() {
    try {
      map = L.map("map", {
        zoomControl: true,
        preferCanvas: true,
        minZoom: 1,
        maxZoom: 18,
        maxBounds: [[180, -Infinity], [-180, Infinity]],
        maxBoundsViscosity: 1
      }).setView([35.05, 135.55], 7);

      const styleResponse = await fetch("https://tiles.openfreemap.org/styles/liberty", { cache: "no-store" });
      if (!styleResponse.ok) throw new Error(`OpenFreeMap style: ${styleResponse.status}`);
      glLayer = L.maplibreGL({ style: customizeBasemapStyle(await styleResponse.json()) }).addTo(map);
      markers = L.layerGroup().addTo(map);
      routes = L.layerGroup().addTo(map);
      characterMarkers = L.layerGroup().addTo(map);

      const mapData = await loadMapData();
      locations = mapData.locations.locations;
      events = mapData.events.events;
      characterStates = mapData.states.character_states;
      characters = mapData.characters.characters;

      const state = getCanonicalReaderState();
      if (state.section !== null) {
        selectedCharacters = new Set(state.selectedCharacters);
        previousSection = state.section;
        previousSelectedCharacters = new Set(state.selectedCharacters);
        draw(state.section);
      }
    } catch (error) {
      console.error("Map initialization failed", error);
    }
  }

  subscribeCanonicalReaderState(state => {
    const nextSelected = new Set(state.selectedCharacters);
    const sectionChanged = previousSection !== null && state.section !== previousSection;
    const selectionChanged = previousSelectedCharacters !== null && (
      nextSelected.size !== previousSelectedCharacters.size ||
      [...nextSelected].some(id => !previousSelectedCharacters.has(id))
    );

    if (sectionChanged) unmappedPopupOpen = false;
    if (selectionChanged) {
      const latestStates = getLatestStates(characterStates, state.section);
      unmappedPopupOpen = [...nextSelected].some(id => latestStates.find(item => item.character === id)?.location_status === "unknown");
    }

    selectedCharacters = nextSelected;
    previousSection = state.section;
    previousSelectedCharacters = nextSelected;
    draw(state.section);
  });

  boot();
})();
