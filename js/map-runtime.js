import { getCanonicalReaderState, subscribeCanonicalReaderState } from "./reader-progress.js";

(() => {
  const VERSION = "20260816-23";
  let map;
  let glLayer;
  let markers;
  let routes;
  let characterMarkers;
  let locations = [];
  let events = [];
  let characterStates = [];
  let characters = [];
  let selectedCharacters = new Set();
  const colors = { exact_site: "#e0a04b", settlement: "#c9d1d9", settlement_area: "#c9d1d9", urban_area: "#c9d1d9", area: "#8fb3c9", region: "#8fb3c9", route: "#b99ad6", river: "#8fb3c9", temple: "#b8c7a4", castle: "#b8c7a4", fortified_site: "#b8c7a4", bridge: "#b99ad6", narrative_site: "#d9a0b7", literary_landmark: "#d9a0b7" };
  const characterColors = ["#e0a04b", "#8fb3c9", "#b99ad6", "#b8c7a4", "#d9a0b7", "#c9d1d9"];
  const placeIconPaths = { temple: "assets/icons/places/temple.svg", castle: "assets/icons/places/castle.svg", city: "assets/icons/places/city.svg", village: "assets/icons/places/village.svg", nature: "assets/icons/places/nature.svg", area: "assets/icons/places/area.svg", route: "assets/icons/places/route.svg", literary_landmark: "assets/icons/places/landmark.svg" };
  const placeTypeAliases = { settlement: "city", settlement_area: "village", urban_area: "city", area: "area", region: "area", river: "nature", route: "route", temple: "temple", castle: "castle", fortified_site: "castle", bridge: "route", narrative_site: "literary_landmark", literary_landmark: "literary_landmark", exact_site: "literary_landmark" };
  const hasCoords = l => Array.isArray(l?.coordinates) && l.coordinates.length === 2;
  const esc = value => String(value ?? "").replace(/[&<>\"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));
  const locationLabel = location => location?.modern_name_romaji || location?.name || "Località non determinata";
  const precisionLabel = location => { if (!location?.coordinate_precision || location.coordinate_precision === "exact") return "Posizione moderna precisa"; if (location.coordinate_precision === "modern_literary_reference") return "Riferimento letterario moderno"; return "Posizione indicativa dell'area"; };
  const icon = (location, anchorOffset = [0, 0]) => { const type = placeTypeAliases[location?.type] ?? "literary_landmark"; const path = placeIconPaths[type]; const color = colors[location?.type] ?? "#c9d1d9"; return L.divIcon({ className: "musashi-map-marker-wrapper", html: `<span class="musashi-map-marker" style="--marker-color:${color}"><img src="${path}" alt="" aria-hidden="true"></span>`, iconSize: [32,32], iconAnchor: [16 - anchorOffset[0],16 - anchorOffset[1]], popupAnchor: [0,-17] }); };
  const characterIcon = (character, color, location, anchorOffset = [0, 0]) => L.divIcon({ className: "musashi-character-marker-wrapper", html: `<span class="musashi-character-marker ${location?.coordinate_precision === "approximate_area" ? "is-approximate" : ""}" style="--marker-color:${color}"></span>`, iconSize: [26,26], iconAnchor: [13 - anchorOffset[0],13 - anchorOffset[1]] });
  const coordinateKey = coordinates => coordinates.map(value => Number(value).toFixed(5)).join(",");
  const collisionOffsets = total => {
    if (total <= 1) return [[0, 0]];
    const radius = total <= 4 ? 20 : 24;
    return Array.from({ length: total }, (_, index) => {
      const angle = (-Math.PI / 2) + (index * (2 * Math.PI / total));
      return [Math.round(Math.cos(angle) * radius), Math.round(Math.sin(angle) * radius)];
    });
  };

  function draw(section) {
    if (!map || !markers || !characterMarkers) return;
    markers.clearLayers(); routes.clearLayers(); characterMarkers.clearLayers();
    const byId = new Map(locations.map(l => [l.id, l]));
    const currentStates = new Map();
    characterStates.filter(s => s.section <= section).forEach(s => currentStates.set(s.character, s));
    const plotted = [];

    const visibleCharacters = [];
    currentStates.forEach((state, characterId) => {
      if (!selectedCharacters.has(characterId)) return;
      const location = byId.get(state.location); const character = characters.find(c => c.id === characterId);
      if (!location || !hasCoords(location)) return;
      const index = characters.findIndex(c => c.id === characterId); const color = characterColors[(index < 0 ? 0 : index) % characterColors.length];
      visibleCharacters.push({ state, characterId, character, location, color });
    });

    const sectionEvents = events.filter(e => e.section === section && (e.characters ?? []).some(id => selectedCharacters.has(id)));
    const contextualIds = new Set();
    sectionEvents.forEach(e => {
      if (e.location) contextualIds.add(e.location);
      if (e.origin) contextualIds.add(e.origin);
      if (e.destination) contextualIds.add(e.destination);
      (e.via ?? []).forEach(v => contextualIds.add(v));
    });
    const visiblePlaces = [...contextualIds].map(id => byId.get(id)).filter(hasCoords);

    // Co-located entities are intentionally kept at the same geographical anchor,
    // but their glyphs are fanned out by a few pixels so none hides another.
    // The offset is purely visual; popups and data retain the real coordinates.
    const collisionGroups = new Map();
    [...visiblePlaces.map(location => ({ kind: "place", location })), ...visibleCharacters.map(item => ({ kind: "character", ...item }))].forEach(item => {
      const key = coordinateKey(item.location.coordinates);
      if (!collisionGroups.has(key)) collisionGroups.set(key, []);
      collisionGroups.get(key).push(item);
    });

    const offsetsByItem = new Map();
    collisionGroups.forEach(group => {
      const offsets = collisionOffsets(group.length);
      group.forEach((item, index) => offsetsByItem.set(item, offsets[index]));
    });

    visibleCharacters.forEach(item => {
      const offset = offsetsByItem.get(item) ?? [0, 0];
      L.marker(item.location.coordinates, {icon: characterIcon(item.character, item.color, item.location, offset), title: `${item.character?.name ?? item.characterId} · ${locationLabel(item.location)}`})
        .bindPopup(`<strong>${esc(item.character?.name ?? item.characterId)}</strong><br>${esc(locationLabel(item.location))}<br><small>${esc(precisionLabel(item.location))}</small><br><span>${esc(item.state.activity)}</span>`)
        .addTo(characterMarkers);
      plotted.push(item.location.coordinates);
    });

    visiblePlaces.forEach(location => {
      const item = collisionGroups.get(coordinateKey(location.coordinates)).find(candidate => candidate.kind === "place" && candidate.location.id === location.id);
      const offset = offsetsByItem.get(item) ?? [0, 0];
      L.marker(location.coordinates, {icon: icon(location, offset), title: locationLabel(location)})
        .bindPopup(`<strong>${esc(locationLabel(location))}</strong><br><small>${esc(precisionLabel(location))}</small><br><span>${esc(location.map_note ?? "Localizzazione moderna")}</span>`)
        .addTo(markers);
      plotted.push(location.coordinates);
    });

    sectionEvents.filter(e => e.origin && e.destination).forEach(e => {
      const a = byId.get(e.origin), b = byId.get(e.destination); if (!hasCoords(a) || !hasCoords(b)) return;
      L.polyline([a.coordinates, b.coordinates], {color:"#d97706", weight:3, opacity:.78, dashArray:e.certainty === "intended_destination" ? "6 8" : null, interactive:false}).addTo(routes);
    });
    if (plotted.length) map.fitBounds(L.latLngBounds(plotted).pad(.18), {maxZoom:10, animate:false});
  }

  function romanizedLabelExpression() { return ["coalesce", ["get", "name:ja-Latn"], ["get", "name:ja_rm"], ["get", "name:latin"], ["get", "name_en"], ["get", "name"]]; }
  function cleanAdministrativeSuffixExpression() { const suffixes = ["-machi", "-mura", "-chō", "-cho", "-ken", "-gun", "-shi", "-ku", "-son", "-to", "-fu"]; const name = ["var", "labelName"]; const cases = []; suffixes.forEach(suffix => { const length = suffix.length; cases.push(["all", [">=", ["length", name], length], ["==", ["slice", name, ["-", ["length", name], length]], suffix]], ["slice", name, 0, ["-", ["length", name], length]]); }); return ["let", "labelName", romanizedLabelExpression(), ["case", ...cases, name]]; }
  function customizeBasemapStyle(nextStyle) { const labelSourceLayers = new Set(["place", "water_name", "waterway", "transportation_name", "poi", "mountain_peak", "park", "aerodrome_label"]); return {...nextStyle, layers: nextStyle.layers.map(layer => ({...layer, ...(layer.type === "symbol" && layer.layout?.["text-field"] && layer.source === "openmaptiles" && labelSourceLayers.has(layer["source-layer"]) ? {layout: {...layer.layout, "text-field": cleanAdministrativeSuffixExpression()}} : {})}))}; }
  async function boot() {
    try {
      map = L.map("map", {zoomControl:true, preferCanvas:true, minZoom:1, maxBounds: [[180, -Infinity], [-180, Infinity]], maxBoundsViscosity:1}).setView([35.05,135.55],7);
      const styleResponse = await fetch("https://tiles.openfreemap.org/styles/liberty", {cache:"no-store"}); if (!styleResponse.ok) throw new Error(`OpenFreeMap style: ${styleResponse.status}`);
      const libertyStyle = await styleResponse.json(); glLayer = L.maplibreGL({style: customizeBasemapStyle(libertyStyle)}).addTo(map);
      markers = L.layerGroup().addTo(map); routes = L.layerGroup().addTo(map); characterMarkers = L.layerGroup().addTo(map);
      const [locationData,eventData,stateData,characterData] = await Promise.all([
        fetch(`data/locations.json?v=${VERSION}`, {cache:"no-store"}).then(r => { if(!r.ok) throw new Error(`locations.json: ${r.status}`); return r.json(); }),
        fetch(`data/events.json?v=${VERSION}`, {cache:"no-store"}).then(r => { if(!r.ok) throw new Error(`events.json: ${r.status}`); return r.json(); }),
        fetch(`data/character-states.json?v=${VERSION}`, {cache:"no-store"}).then(r => { if(!r.ok) throw new Error(`character-states.json: ${r.status}`); return r.json(); }),
        fetch(`data/characters.json?v=${VERSION}`, {cache:"no-store"}).then(r => { if(!r.ok) throw new Error(`characters.json: ${r.status}`); return r.json(); })
      ]);
      locations = locationData.locations; events = eventData.events; characterStates = stateData.character_states; characters = characterData.characters;
      const readerState = getCanonicalReaderState(); if (readerState.section !== null) { selectedCharacters = new Set(readerState.selectedCharacters); draw(readerState.section); }
    } catch(error) { console.error("Map initialization failed", error); }
  }
  subscribeCanonicalReaderState(readerState => { selectedCharacters = new Set(readerState.selectedCharacters); if (readerState.section !== null) draw(readerState.section); });
  boot();
})();