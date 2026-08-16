import { getCanonicalReaderState, subscribeCanonicalReaderState } from "./reader-progress.js";

(() => {
  const VERSION = "20260816-36";
  let map, glLayer, markers, routes, characterMarkers;
  let locations = [], events = [], characterStates = [], characters = [];
  let selectedCharacters = new Set();
  let unmappedPopupOpen = false;
  let previousSection = null;
  let previousSelectedCharacters = null;
  const colors = { exact_site:"#e0a04b", settlement:"#c9d1d9", settlement_area:"#c9d1d9", urban_area:"#c9d1d9", area:"#8fb3c9", region:"#8fb3c9", route:"#b99ad6", river:"#8fb3c9", temple:"#b8c7a4", castle:"#b8c7a4", fortified_site:"#b8c7a4", bridge:"#b99ad6", narrative_site:"#d9a0b7", literary_landmark:"#d9a0b7" };
  const characterColors = ["#e0a04b","#8fb3c9","#b99ad6","#b8c7a4","#d9a0b7","#c9d1d9"];
  const placeIconPaths = { temple:"assets/icons/places/temple.svg", castle:"assets/icons/places/castle.svg", city:"assets/icons/places/city.svg", village:"assets/icons/places/village.svg", nature:"assets/icons/places/nature.svg", area:"assets/icons/places/area.svg", river:"assets/icons/places/river.svg", route:"assets/icons/places/route.svg", literary_landmark:"assets/icons/places/landmark.svg" };
  const placeTypeAliases = { settlement:"city", settlement_area:"village", urban_area:"city", area:"area", region:"area", river:"river", route:"route", temple:"temple", castle:"castle", fortified_site:"castle", bridge:"route", narrative_site:"literary_landmark", literary_landmark:"literary_landmark", exact_site:"literary_landmark" };
  const hasCoords = l => Array.isArray(l?.coordinates) && l.coordinates.length === 2;
  const esc = value => String(value ?? "").replace(/[&<>\"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));
  const locationLabel = l => l?.name || l?.modern_name_romaji || "Località non determinata";
  const precisionLabel = l => { if(!l?.coordinate_precision || l.coordinate_precision === "exact") return "Posizione moderna precisa"; if(l.coordinate_precision === "modern_match") return "Corrispondenza moderna ad alta confidence"; if(l.coordinate_precision === "modern_literary_reference") return "Riferimento letterario moderno"; return "Posizione indicativa dell'area"; };
  const displayCharacterName = (c, section) => !c ? "Personaggio sconosciuto" : c.id === "musashi" && section < 8 ? "Shinmen Takezō" : c.name;
  const icon = (location, offset=[0,0]) => { const type=placeTypeAliases[location?.type]??"literary_landmark"; const color=colors[location?.type]??"#c9d1d9"; return L.divIcon({className:"musashi-map-marker-wrapper",html:`<span class="musashi-map-marker" style="--marker-color:${color}"><img src="${placeIconPaths[type]}" alt="" aria-hidden="true"></span>`,iconSize:[32,32],iconAnchor:[16-offset[0],16-offset[1]],popupAnchor:[0,-17]}); };
  const characterIcon = (color,location,offset=[0,0],mode="current") => L.divIcon({className:"musashi-character-marker-wrapper",html:`<span class="musashi-character-marker ${location?.coordinate_precision === "approximate_area" ? "is-approximate" : ""} ${mode === "reported" ? "is-reported" : mode === "last_known" ? "is-last-known" : ""}" style="--marker-color:${color}"></span>`,iconSize:[26,26],iconAnchor:[13-offset[0],13-offset[1]]});
  const coordinateKey = coordinates => coordinates.map(value=>Number(value).toFixed(5)).join(",");
  const collisionOffsets = total => { if(total<=1) return [[0,0]]; const radius=total<=3?24:30; return Array.from({length:total},(_,i)=>{const angle=-Math.PI/2+i*2*Math.PI/total;return [Math.round(Math.cos(angle)*radius),Math.round(Math.sin(angle)*radius)];}); };
  const routeMode = event => { const explicit=event?.movement_status; if(["arrival_confirmed","confirmed_route"].includes(explicit)) return "confirmed"; if(["intended_destination","direction_only","uncertain_route"].includes(explicit)) return "intended"; const certainty=String(event?.certainty??"").toLowerCase(); if(event?.type === "journey" && (event?.destination === "unknown" || certainty.includes("intended") || certainty.includes("uncertain") || certainty.includes("possible"))) return "intended"; if(event?.type === "departure" || event?.type === "direction") return "intended"; return "confirmed"; };
  const routeStyle = mode => mode === "intended" ? {color:"#b99ad6",weight:2,opacity:.68,dashArray:"6 8",interactive:true} : {color:"#d97706",weight:3,opacity:.78,interactive:true};

  function closeUnmappedPopup(){ const node=document.querySelector("#map-unmapped"); if(!node)return; node.hidden=true; unmappedPopupOpen=false; }

  function renderUnmapped(items){
    const node=document.querySelector("#map-unmapped"); if(!node)return;
    if(!items.length || !unmappedPopupOpen){node.hidden=true;return;}
    node.replaceChildren();
    const header=document.createElement("div"); header.className="map-unmapped-header";
    const heading=document.createElement("div");
    const kicker=document.createElement("p"); kicker.className="map-unmapped-kicker"; kicker.textContent="TRACCIA NARRATIVA";
    const title=document.createElement("h3"); title.className="map-unmapped-title"; title.textContent="Posizione non ancora determinata";
    heading.append(kicker,title);
    const close=document.createElement("button"); close.className="map-unmapped-close"; close.type="button"; close.setAttribute("aria-label","Chiudi"); close.textContent="×"; close.addEventListener("click",closeUnmappedPopup);
    header.append(heading,close);
    const list=document.createElement("ul"); list.className="map-unmapped-list";
    items.forEach(({character,state,location})=>{
      const item=document.createElement("li");
      const name=document.createElement("span"); name.className="map-unmapped-name"; name.textContent=displayCharacterName(character,state.section);
      const meta=document.createElement("span"); meta.className="map-unmapped-meta";
      if(state.location_status === "departed_with_group" && state.group){ meta.textContent=`Ha lasciato ${location ? locationLabel(location) : "la posizione precedente"} con il gruppo ${state.group.replaceAll("_"," ")}. La nuova posizione non è ancora determinata.`; }
      else { meta.textContent=`${location ? `Ultima area nota: ${locationLabel(location)}. ` : ""}La posizione attuale non è ancora determinata.`; }
      item.append(name,meta); list.append(item);
    });
    node.append(header,list); node.hidden=false;
  }

  // Narrative state and map visibility are deliberately separate.
  // current = physically present at the chapter's mapped location.
  // reported = a mapped location explicitly reported/referred to by the text, without physical presence being established.
  // last_known = fallback to the character's most recent mapped position when the current state is not mappable.
  // unmapped = genuinely no usable cartographic position.
  function resolveMapState(state, byId, allStates, sectionEvents){
    // State semantics always take precedence over the mere presence of a location id.
    // This prevents reported positions from being silently promoted to physical presence.
    if(state?.location_status === "reported_position"){
      const reported=state.location ? byId.get(state.location) : null;
      if(reported && hasCoords(reported)) return { location:reported, mode:"reported" };
    }
    if(state?.location_status === "departed_with_group") return { location:null, mode:"unmapped" };

    const current=state?.location ? byId.get(state.location) : null;
    if(current && hasCoords(current)) return { location:current, mode:"current" };

    const sameChapterEvents=sectionEvents.filter(e=>(e.characters??[]).includes(state.character));
    const eventLocationIds=[];
    sameChapterEvents.forEach(e=>{
      if(e.location) eventLocationIds.push(e.location);
      if(e.destination && e.destination!=="unknown") eventLocationIds.push(e.destination);
      if(e.origin) eventLocationIds.push(e.origin);
    });
    for(const id of eventLocationIds){const location=byId.get(id);if(hasCoords(location))return { location, mode:"reported" };}

    const candidates=allStates.filter(s=>s.character===state.character && s.section<=state.section && s.location).sort((a,b)=>b.section-a.section);
    const fallback=candidates.map(s=>byId.get(s.location)).find(hasCoords);
    if(fallback) return { location:fallback, mode:"last_known" };
    const lastKnown=state?.last_known_location ? byId.get(state.last_known_location) : null;
    if(lastKnown && hasCoords(lastKnown)) return { location:lastKnown, mode:"last_known" };
    return { location:null, mode:"unmapped" };
  }

  function characterStatusLabel(mode,state){
    if(mode === "current") return "Presenza fisica";
    if(mode === "reported") return "Posizione riferita";
    if(mode === "last_known") return "Ultima posizione nota";
    return "Posizione non determinata";
  }

  function draw(section){
    if(!map||!markers||!characterMarkers)return;
    markers.clearLayers(); routes.clearLayers(); characterMarkers.clearLayers();
    const byId=new Map(locations.map(l=>[l.id,l]));
    const statesThroughChapter=characterStates.filter(s=>s.section<=section);
    const latest=new Map(); statesThroughChapter.forEach(s=>latest.set(s.character,s));
    const sectionEvents=events.filter(e=>e.section===section&&(e.characters??[]).some(id=>selectedCharacters.has(id)));
    const visibleCharacters=[]; const unmapped=[];
    latest.forEach((state,characterId)=>{
      if(!selectedCharacters.has(characterId)) return;
      const character=characters.find(c=>c.id===characterId);
      const resolved=resolveMapState(state,byId,statesThroughChapter,sectionEvents);
      if(!resolved.location){unmapped.push({character,state,location:state.last_known_location ? byId.get(state.last_known_location) : null});return;}
      const index=characters.findIndex(c=>c.id===characterId), color=characterColors[(index<0?0:index)%characterColors.length];
      visibleCharacters.push({state,characterId,character,location:resolved.location,color,mode:resolved.mode});
    });
    renderUnmapped(unmapped);
    const contextualIds=new Set(); sectionEvents.forEach(e=>{if(e.location)contextualIds.add(e.location);if(e.origin)contextualIds.add(e.origin);if(e.destination&&e.destination!=="unknown")contextualIds.add(e.destination);(e.via??[]).forEach(v=>contextualIds.add(v));});
    const visiblePlaces=[...contextualIds].map(id=>byId.get(id)).filter(hasCoords);
    const groups=new Map(); const register=(kind,id,location)=>{const position=coordinateKey(location.coordinates);if(!groups.has(position))groups.set(position,[]);const key=`${kind}:${id}`;groups.get(position).push({kind,id,location,key});};
    visiblePlaces.forEach(l=>register("place",l.id,l)); visibleCharacters.forEach(i=>register("character",i.characterId,i.location));
    const offsets=new Map(); groups.forEach(group=>collisionOffsets(group.length).forEach((offset,i)=>offsets.set(group[i].key,offset)));
    visibleCharacters.forEach(item=>{
      const offset=offsets.get(`character:${item.characterId}`)??[0,0];
      const name=displayCharacterName(item.character,section);
      const status=characterStatusLabel(item.mode,item.state);
      const label=locationLabel(item.location);
      const detail=item.mode==="current"?"Il testo colloca fisicamente il personaggio qui.":item.mode === "reported"?"Il testo riferisce questo luogo, ma non stabilisce la presenza fisica del personaggio qui.":item.mode === "last_known"?"Questo è il luogo più recente che possiamo mantenere come posizione nota; non è una presenza fisica accertata nel capitolo corrente.":"La posizione attuale non è determinata.";
      L.marker(item.location.coordinates,{icon:characterIcon(item.color,item.location,offset,item.mode),title:`${name} · ${status} · ${label}`})
        .bindPopup(`<strong>${esc(name)}</strong><br><b>${esc(status)}</b><br>${esc(label)}<br><small>${esc(precisionLabel(item.location))}</small><br><span>${esc(detail)}</span>${item.state.activity?`<br><small>${esc(item.state.activity)}</small>`:""}`)
        .addTo(characterMarkers);
    });
    visiblePlaces.forEach(location=>{const offset=offsets.get(`place:${location.id}`)??[0,0];L.marker(location.coordinates,{icon:icon(location,offset),title:locationLabel(location)}).bindPopup(`<strong>${esc(locationLabel(location))}</strong><br><small>${esc(precisionLabel(location))}</small><br><span>${esc(location.map_note??"Localizzazione moderna")}</span>`).addTo(markers);});
    sectionEvents.filter(e=>e.origin&&e.destination&&e.destination!=="unknown").forEach(e=>{const a=byId.get(e.origin),b=byId.get(e.destination);if(!hasCoords(a)||!hasCoords(b))return;const mode=routeMode(e);const label=mode==="confirmed"?"Spostamento confermato":"Direzione / destinazione intenzionale";L.polyline([a.coordinates,b.coordinates],routeStyle(mode)).bindPopup(`<strong>${label}</strong><br>${esc(locationLabel(a))} → ${esc(locationLabel(b))}<br><small>${esc(e.description??"")}</small>`).addTo(routes);});
    const focusCoordinates=[]; sectionEvents.forEach(e=>{[e.location,e.origin,e.destination,...(e.via??[])].filter(Boolean).forEach(id=>{const location=byId.get(id);if(hasCoords(location))focusCoordinates.push(location.coordinates);});});
    const plotted=focusCoordinates.length?focusCoordinates:[...visibleCharacters.filter(item=>item.mode==="current").map(item=>item.location.coordinates),...visiblePlaces.map(location=>location.coordinates)];
    if(plotted.length)map.fitBounds(L.latLngBounds(plotted).pad(.18),{maxZoom:10,animate:false});
  }

  function romanizedLabelExpression(){return ["coalesce",["get","name:ja-Latn"],["get","name:ja_rm"],["get","name:latin"],["get","name_en"],["get","name"]];}
  function cleanAdministrativeSuffixExpression(){const suffixes=["-machi","-mura","-chō","-cho","-ken","-gun","-shi","-ku","-son","-to","-fu"],name=["var","labelName"],cases=[];suffixes.forEach(suffix=>{const length=suffix.length;cases.push(["all",[">=",["length",name],length],["==",["slice",name,["-",["length",name],length]],suffix]],["slice",name,0,["-",["length",name],length]]);});return ["let","labelName",romanizedLabelExpression(),["case",...cases,name]];}
  function customizeBasemapStyle(nextStyle){const labelSourceLayers=new Set(["place","water_name","waterway_name","transportation_name","poi","mountain_peak","park","aerodrome_label"]);return {...nextStyle,layers:nextStyle.layers.map(layer=>({...layer,...(layer.type==="symbol"&&layer.layout?.["text-field"]&&layer.source==="openmaptiles"&&labelSourceLayers.has(layer["source-layer"])?{layout:{...layer.layout,"text-field":cleanAdministrativeSuffixExpression()}}:{})}))};}
  async function boot(){try{map=L.map("map",{zoomControl:true,preferCanvas:true,minZoom:1,maxZoom:18,maxBounds:[[180,-Infinity],[-180,Infinity]],maxBoundsViscosity:1}).setView([35.05,135.55],7);const styleResponse=await fetch("https://tiles.openfreemap.org/styles/liberty",{cache:"no-store"});if(!styleResponse.ok)throw new Error(`OpenFreeMap style: ${styleResponse.status}`);glLayer=L.maplibreGL({style:customizeBasemapStyle(await styleResponse.json())}).addTo(map);markers=L.layerGroup().addTo(map);routes=L.layerGroup().addTo(map);characterMarkers=L.layerGroup().addTo(map);const [locationData,eventData,stateData,characterData]=await Promise.all([fetch(`data/locations.json?v=${VERSION}`,{cache:"no-store"}).then(r=>r.json()),fetch(`data/events.json?v=${VERSION}`,{cache:"no-store"}).then(r=>r.json()),fetch(`data/character-states.json?v=${VERSION}`,{cache:"no-store"}).then(r=>r.json()),fetch(`data/characters.json?v=${VERSION}`,{cache:"no-store"}).then(r=>r.json())]);locations=locationData.locations;events=eventData.events;characterStates=stateData.character_states;characters=characterData.characters;const state=getCanonicalReaderState();if(state.section!==null){selectedCharacters=new Set(state.selectedCharacters);previousSection=state.section;previousSelectedCharacters=new Set(state.selectedCharacters);draw(state.section);}}catch(error){console.error("Map initialization failed",error);}}
  subscribeCanonicalReaderState(state=>{
    const nextSelected=new Set(state.selectedCharacters);
    const sectionChanged=previousSection!==null&&state.section!==previousSection;
    const selectionChanged=previousSelectedCharacters!==null&&nextSelected.size!==previousSelectedCharacters.size||previousSelectedCharacters!==null&&[...nextSelected].some(id=>!previousSelectedCharacters.has(id));
    if(sectionChanged) unmappedPopupOpen=false;
    if(selectionChanged){
      const statesThroughChapter=characterStates.filter(s=>s.section<=state.section);
      const latest=new Map(); statesThroughChapter.forEach(s=>latest.set(s.character,s));
      unmappedPopupOpen=[...nextSelected].some(id=>{const s=latest.get(id);return s?.location_status==="unknown"||s?.location_status==="departed_with_group";});
    }
    selectedCharacters=nextSelected; previousSection=state.section; previousSelectedCharacters=nextSelected; draw(state.section);
  });
  boot();
})();
