(() => {
  const originalMarkerBindPopup = L.Marker.prototype.bindPopup;
  const originalPolylineBindPopup = L.Polyline.prototype.bindPopup;
  const characterStatuses = ["Presenza fisica", "Posizione riferita", "Ultima posizione nota", "Posizione non determinata"];
  const escapeHtml = value => String(value ?? "").replace(/[&<>\"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[char]));
  const capitalizeFirst = value => { const text=String(value ?? "").trim(); return text ? text.charAt(0).toLocaleUpperCase("it-IT")+text.slice(1) : ""; };
  const popupOptions = (options,className) => ({...(options ?? {}),className:`${options?.className ?? ""} ${className}`.trim()});

  L.Marker.prototype.bindPopup = function(content,options){
    if(typeof content === "string"){
      if(characterStatuses.some(status=>content.includes(`<b>${status}</b>`))){
        const match=content.match(/^<strong>(.*?)<\/strong><br><b>.*?<\/b><br>(.*?)<br><small>.*?<\/small><br><span>.*?<\/span>(?:<br><small>(.*?)<\/small>)?$/);
        if(match){
          const [,name,location,rawActivity=""]=match;
          const activity=capitalizeFirst(rawActivity);
          const readerContent=[`<strong>${name}</strong>`,`<br><em class="character-popup-location">${location}</em>`,activity?`<div class="character-popup-activity">${escapeHtml(activity)}</div>`:""].join("");
          return originalMarkerBindPopup.call(this,readerContent,popupOptions(options,"musashi-character-popup"));
        }
      }
      const placeMatch=content.match(/^<strong>(.*?)<\/strong><br><small>(.*?)<\/small><br><span>(.*?)<\/span>$/);
      if(placeMatch){
        const [,name,precision,description]=placeMatch;
        const readerContent=[`<strong>${name}</strong>`,`<br><em class="place-popup-precision">${precision}</em>`,`<div class="place-popup-description">${description}</div>`].join("");
        return originalMarkerBindPopup.call(this,readerContent,popupOptions(options,"musashi-place-popup"));
      }
    }
    return originalMarkerBindPopup.call(this,content,options);
  };

  L.Polyline.prototype.bindPopup = function(content,options){
    if(typeof content === "string"){
      const eventMatch=content.match(/^<strong>(.*?)<\/strong><br>(.*?) → (.*?)<br><small>(.*?)<\/small>$/);
      if(eventMatch){
        const [,title,origin,destination,description]=eventMatch;
        const readerContent=[`<strong>${title}</strong>`,`<br><em class="event-popup-route">${origin} → ${destination}</em>`,description?`<div class="event-popup-description">${escapeHtml(capitalizeFirst(description))}</div>`:""].join("");
        return originalPolylineBindPopup.call(this,readerContent,popupOptions(options,"musashi-event-popup"));
      }
    }
    return originalPolylineBindPopup.call(this,content,options);
  };
})();
