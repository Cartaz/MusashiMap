(() => {
  const originalBindPopup = L.Marker.prototype.bindPopup;

  const capitalizeFirst = value => {
    const text = String(value ?? "").trim();
    return text ? text.charAt(0).toLocaleUpperCase("it-IT") + text.slice(1) : "";
  };

  L.Marker.prototype.bindPopup = function(content, options) {
    const iconHtml = this.options?.icon?.options?.html ?? "";
    const isCharacterMarker = iconHtml.includes("musashi-character-marker-wrapper");

    if (isCharacterMarker && typeof content === "string") {
      const name = content.match(/<strong>(.*?)<\/strong>/)?.[1] ?? "Personaggio";
      const location = content.match(/<\/b><br>(.*?)<br><small>/)?.[1] ?? "Località non determinata";
      const activity = content.match(/<span>(.*?)<\/span>(?:<br><small>(.*?)<\/small>)?/)?.[2] ?? "";
      const action = capitalizeFirst(activity);

      content = `<strong>${name}</strong><br><em class="character-popup-location">${location}</em>${action ? `<div class="character-popup-activity">${action}</div>` : ""}`;
      options = { ...(options ?? {}), className: `${options?.className ?? ""} musashi-character-popup`.trim() };
    }

    return originalBindPopup.call(this, content, options);
  };
})();
