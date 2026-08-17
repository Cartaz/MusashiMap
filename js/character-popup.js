(() => {
  const originalBindPopup = L.Marker.prototype.bindPopup;

  L.Marker.prototype.bindPopup = function(content, options) {
    const iconHtml = this.options?.icon?.options?.html ?? "";
    const isCharacterMarker = iconHtml.includes("musashi-character-marker-wrapper");

    if (isCharacterMarker && typeof content === "string") {
      const name = content.match(/<strong>(.*?)<\/strong>/)?.[1] ?? "Personaggio";
      const location = content.match(/<\/b><br>(.*?)<br><small>/)?.[1] ?? "Località non determinata";
      const activity = content.match(/<span>(.*?)<\/span>(?:<br><small>(.*?)<\/small>)?/)?.[2] ?? "";

      content = `<strong>${name}</strong><br><span class="character-popup-location">${location}</span>${activity ? `<br><span class="character-popup-activity">${activity}</span>` : ""}`;
      options = { ...(options ?? {}), className: `${options?.className ?? ""} musashi-character-popup`.trim() };
    }

    return originalBindPopup.call(this, content, options);
  };
})();
