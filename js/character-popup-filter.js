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

  const mapStage=characterPanel?.closest(".map-stage");
  if(mapStage&&characterPanel){
    mapStage.style.position="relative";
    characterPanel.style.position="absolute";
    characterPanel.style.top="auto";
    characterPanel.style.left="10px";
    characterPanel.style.right="auto";
    characterPanel.style.bottom="10px";
    characterPanel.style.zIndex="500";
  }

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

  // The diary reuses the same rolled-parchment primitive as the map panels.
  const diary=document.querySelector(".info-panel");
  const diaryMasthead=diary?.querySelector(".sidebar-masthead");
  if(diary&&diaryMasthead){
    diary.classList.add("pergamena-arrotolata","pergamena-arrotolata--vertical","is-collapsed");
    diary.setAttribute("aria-expanded","false");
    diaryMasthead.classList.add("diary-toggle");
    diaryMasthead.setAttribute("role","button");
    diaryMasthead.setAttribute("tabindex","0");
    diaryMasthead.setAttribute("aria-controls","diary-content");
    diaryMasthead.setAttribute("aria-expanded","false");

    const label=diaryMasthead.querySelector("span:last-child");
    if(label){
      label.classList.add("diary-collapsed-label");
      const openLabel=label.cloneNode(true);
      openLabel.className="diary-open-label";
      diaryMasthead.append(openLabel);
    }

    const content=document.createElement("div");
    content.id="diary-content";
    content.className="diary-content";
    [...diary.children].filter(child=>child!==diaryMasthead).forEach(child=>content.append(child));
    diary.append(content);

    const setDiaryOpen=open=>{
      diary.classList.toggle("is-collapsed",!open);
      diary.setAttribute("aria-expanded",String(open));
      diaryMasthead.setAttribute("aria-expanded",String(open));
    };
    const toggleDiary=()=>setDiaryOpen(diary.classList.contains("is-collapsed"));
    diaryMasthead.addEventListener("click",toggleDiary);
    diaryMasthead.addEventListener("keydown",event=>{if(event.key==="Enter"||event.key===" "){event.preventDefault();toggleDiary();}});
    setDiaryOpen(false);
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
