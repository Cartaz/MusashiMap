(() => {
  const originalMarkerBindPopup = L.Marker.prototype.bindPopup;
  const originalPolylineBindPopup = L.Polyline.prototype.bindPopup;
  const characterStatuses = ["Presenza fisica", "Posizione riferita", "Ultima posizione nota", "Posizione non determinata"];
  const escapeHtml = value => String(value ?? "").replace(/[&<>\"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[char]));
  const capitalizeFirst = value => { const text=String(value ?? "").trim(); return text ? text.charAt(0).toLocaleUpperCase("it-IT")+text.slice(1) : ""; };
  const popupOptions = (options,className) => ({...(options ?? {}),className:`${options?.className ?? ""} ${className}`.trim()});
  const characterPanel=document.querySelector(".map-character-panel");
  const characterHeading=characterPanel?.querySelector(".panel-heading");
  const characterToggle=document.querySelector("#character-toggle");
  if(characterPanel&&characterHeading&&characterToggle){
    characterToggle.hidden=true;
    characterToggle.setAttribute("aria-expanded","false");
    characterPanel.classList.add("is-collapsed");
    characterHeading.setAttribute("role","button");
    characterHeading.setAttribute("tabindex","0");
    characterHeading.setAttribute("aria-controls","character-filter-body");
    characterHeading.setAttribute("aria-expanded","false");
    const setOpen=open=>{
      characterPanel.classList.toggle("is-collapsed",!open);
      characterHeading.setAttribute("aria-expanded",String(open));
      characterToggle.setAttribute("aria-expanded",String(open));
    };
    const toggle=()=>setOpen(characterPanel.classList.contains("is-collapsed"));
    characterHeading.addEventListener("click",toggle);
    characterHeading.addEventListener("keydown",event=>{if(event.key==="Enter"||event.key===" "){event.preventDefault();toggle();}});
  }

  function renderPopup(kind, data){
    if(kind === "character") return [`<strong>${data.name}</strong>`,`<br><em class="popup-secondary">${data.location}</em>`,data.description?`<div class="popup-description">${escapeHtml(capitalizeFirst(data.description))}</div>`:""].join("");
    if(kind === "place") return [`<strong>${data.name}</strong>`,`<br><em class="popup-secondary">${data.secondary}</em>`,data.description?`<div class="popup-description">${escapeHtml(data.description)}</div>`:""].join("");
    if(kind === "movement") return [`<strong>${data.title}</strong>`,`<br><em class="popup-secondary">${data.route}</em>`,data.description?`<div class="popup-description">${escapeHtml(capitalizeFirst(data.description))}</div>`:""].join("");
    return data.content;
  }

  L.Marker.prototype.bindPopup = function(content, options){
    if(typeof content === "string"){
      const characterMatch=content.match(/^<strong>(.*?)<\/strong><br><b>(.*?)<\/b><br>(.*?)<br><small>.*?<\/small><br><span>.*?<\/span>(?:<br><small>(.*?)<\/small>)?$/);
      if(characterMatch && characterStatuses.includes(characterMatch[2])){
        const [,name,,location,rawActivity=""]=characterMatch;
        return originalMarkerBindPopup.call(this,renderPopup("character",{name,location,description:rawActivity}),popupOptions(options,"musashi-popup musashi-character-popup"));
      }
      const placeMatch=content.match(/^<strong>(.*?)<\/strong><br><small>(.*?)<\/small><br><span>(.*?)<\/span>$/);
      if(placeMatch){
        const [,name,precision,description]=placeMatch;
        return originalMarkerBindPopup.call(this,renderPopup("place",{name,secondary:precision,description}),popupOptions(options,"musashi-popup musashi-place-popup"));
      }
    }
    return originalMarkerBindPopup.call(this,content,options);
  };

  L.Polyline.prototype.bindPopup = function(content,options){
    if(typeof content === "string"){
      const movementMatch=content.match(/^<strong>(.*?)<\/strong><br>(.*?) → (.*?)<br><small>(.*?)<\/small>$/);
      if(movementMatch){
        const [,title,origin,destination,description]=movementMatch;
        return originalPolylineBindPopup.call(this,renderPopup("movement",{title,route:`${origin} → ${destination}`,description}),popupOptions(options,"musashi-popup musashi-movement-popup"));
      }
    }
    return originalPolylineBindPopup.call(this,content,options);
  };
})();
