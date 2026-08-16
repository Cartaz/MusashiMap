(() => {
  const VERSION = "20260816-12";
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
  let latestReaderState = null;
  const colors = { exact_site: "#e0a04b", settlement: "#c9d1d9", area: "#8fb3c9", route: "#b99ad6", temple: "#b8c7a4", literary_landmark: "#d9a0b7" };
  const characterColors = ["#e0a04b", "#8fb3c9", "#b99ad6", "#b8c7a4", "#d9a0b7", "#c9d1d9"];
  const hasCoords = l => Array.isArray(l?.coordinates) && l.coordinates.length === 2;
  const esc = value => String(value ?? "").replace(/[&<>\"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));
  const locationLabel = location => location?.modern_name_romaji ? `${location.name} · ${location.modern_name_romaji}` : (location?.name ?? "Località non determinata");
  const precisionLabel = location => {
    if (!location?.coordinate_precision || location.coordinate_precision === "exact") return "Posizione moderna precisa";
    if (location.coordinate_precision === "modern_literary_reference") return "Riferimento letterario moderno";
    return "Posizione indicativa dell'area";
  };
  const icon = location => L.divIcon({ className: "musashi-map-marker-wrapper", html: `<span class="musashi-map-marker ${location.coordinate_precision === "approximate_area" ? "is-approximate" : ""}" style="--marker-color:${colors[location.type] ?? "#c9d1d9"}"></span>`, iconSize: [18,18], iconAnchor: [9,9] });
  const characterIcon = (character, color, location) => L.divIcon({ className: "musashi-character-marker-wrapper", html: `<span class="musashi-character-marker ${location?.coordinate_precision === "approximate_area" ? "is-approximate" : ""}" style="--marker-color:${color}"></span>`, iconSize: [26,26], iconAnchor: [13,13] });

  function draw(section) {
    if (!map || !markers || !characterMarkers) return;
    markers.clearLayers(); routes.clearLayers(); characterMarkers.clearLayers();
    const byId = new Map(locations.map(l => [l.id, l]));
    const currentStates = new Map();
    characterStates.filter(s => s.section <= section).forEach(s => currentStates.set(s.character, s));
    const plotted = [];
    currentStates.forEach((state, characterId) => {
      if (!selectedCharacters.has(characterId)) return;
      const location = byId.get(state.location); const character = characters.find(c => c.id === characterId);
      if (!location || !hasCoords(location)) return;
      const index = characters.findIndex(c => c.id === characterId); const color = characterColors[(index < 0 ? 0 : index) % characterColors.length];
      L.marker(location.coordinates, {icon: characterIcon(character, color, location), title: `${character?.name ?? characterId} · ${locationLabel(location)}`})
        .bindPopup(`<strong>${esc(character?.name ?? characterId)}</strong><br>${esc(locationLabel(location))}<br><small>${esc(precisionLabel(location))}</small><br><span>${esc(state.activity)}</span>`).addTo(characterMarkers);
      plotted.push(location.coordinates);
    });
    const sectionEvents = events.filter(e => e.section === section); const contextualIds = new Set();
    sectionEvents.forEach(e => { if (e.location) contextualIds.add(e.location); if (e.from) contextualIds.add(e.from); if (e.to) contextualIds.add(e.to); (e.via ?? []).forEach(v => contextualIds.add(v)); });
    contextualIds.forEach(id => {
      const location = byId.get(id); if (!hasCoords(location)) return;
      if ([...currentStates.values()].some(s => selectedCharacters.has(s.character) && s.location === id)) return;
      L.marker(location.coordinates, {icon: icon(location), title: locationLabel(location)})
        .bindPopup(`<strong>${esc(locationLabel(location))}</strong><br><small>${esc(precisionLabel(location))}</small><br><span>${esc(location.map_note ?? "Localizzazione moderna")}</span>`).addTo(markers);
      plotted.push(location.coordinates);
    });
    sectionEvents.filter(e => e.from && e.to).forEach(e => {
      const a = byId.get(e.from), b = byId.get(e.to); if (!hasCoords(a) || !hasCoords(b)) return;
      L.polyline([a.coordinates, b.coordinates], {color:"#d97706", weight:3, opacity:.78, dashArray:e.certainty === "intended_destination" ? "6 8" : null, interactive:false}).addTo(routes);
    });
    if (plotted.length) map.fitBounds(L.latLngBounds(plotted).pad(.18), {maxZoom:10, animate:false});
  }

  function romanizedLabelExpression() {
    return [
      "coalesce",
      ["get", "name:ja-Latn"],
      ["get", "name:ja_rm"],
      ["get", "name:latin"],
      ["get", "name_en"],
      ["get", "name"]
    ];
  }

  // Keep the map clean without changing the underlying OpenMapTiles data.
  // These are administrative suffixes, not part of the reader-facing place name.
  function cleanAdministrativeSuffixExpression() {
    const suffixes = [
      "to", "fu", "ken", "shi", "ku", "gun", "machi", "cho", "chō", "mura", "son"
    ];
    let expression = romanizedLabelExpression();
    for (const suffix of suffixes) {
      expression = [
        "case",
        ["==", ["slice", expression, ["-", ["length", expression], suffix.length + 1]], `-${suffix}`],
        ["slice", expression, 0, ["-", ["length", expression], suffix.length + 1]],
        expression
      ];
    }
    return expression;
  }

  function localizeBasemapLabels() {
    if (!glLayer) return;
    const gl = glLayer.getMaplibreMap();
    if (!gl || !gl.isStyleLoaded()) return;
    const allowedSourceLayers = new Set([
      "place", "water_name", "waterway", "transportation_name", "poi",
      "mountain_peak", "park", "aerodrome_label", "housenumber"
    ]);
    const expression = cleanAdministrativeSuffixExpression();
    for (const layer of gl.getStyle().layers ?? []) {
      if (layer.type !== "symbol" || !layer.layout?.["text-field"]) continue;
      if (layer.source !== "openmaptiles" || !allowedSourceLayers.has(layer["source-layer"])) continue;
      gl.setLayoutProperty(layer.id, "text-field", expression);
    }
  }

  async function boot() {
    try {
      map = L.map("map", {
        zoomControl:true,
        preferCanvas:true,
        minZoom:1,
        maxBounds: [[180, -Infinity], [-180, Infinity]],
        maxBoundsViscosity:1
      }).setView([35.05,135.55],7);

      // OpenFreeMap supplies an OSM/OpenMapTiles-derived vector basemap with full
      // geographic context. Because labels are vector data, we can select the
      // Japanese Latin fields instead of accepting raster-rendered Kanji.
      glLayer = L.maplibreGL({
        style: "https://tiles.openfreemap.org/styles/liberty"
      }).addTo(map);
      const gl = glLayer.getMaplibreMap();
      gl.once("load", localizeBasemapLabels);

      markers = L.layerGroup().addTo(map); routes = L.layerGroup().addTo(map); characterMarkers = L.layerGroup().addTo(map);
      const [locationData,eventData,stateData,characterData] = await Promise.all([
        fetch(`data/locations.json?v=${VERSION}`, {cache:"no-store"}).then(r => { if(!r.ok) throw new Error(`locations.json: ${r.status}`); return r.json(); }),
        fetch(`data/events.json?v=${VERSION}`, {cache:"no-store"}).then(r => { if(!r.ok) throw new Error(`events.json: ${r.status}`); return r.json(); }),
        fetch(`data/character-states.json?v=${VERSION}`, {cache:"no-store"}).then(r => { if(!r.ok) throw new Error(`character-states.json: ${r.status}`); return r.json(); }),
        fetch(`data/characters.json?v=${VERSION}`, {cache:"no-store"}).then(r => { if(!r.ok) throw new Error(`characters.json: ${r.status}`); return r.json(); })
      ]);
      locations = locationData.locations; events = eventData.events; characterStates = stateData.character_states; characters = characterData.characters;
      if (latestReaderState) draw(latestReaderState.section);
    } catch(error) { console.error("Map initialization failed", error); }
  }
  window.addEventListener("musashi:reader-state", event => {
    latestReaderState = {section: Number(event.detail?.section) || 1, selectedCharacters: event.detail?.selectedCharacters ?? []};
    selectedCharacters = new Set(latestReaderState.selectedCharacters); draw(latestReaderState.section);
  });
  boot();
})();
