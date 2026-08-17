(() => {
  const originalBindPopup = L.Marker.prototype.bindPopup;

  const capitalizeFirst = value => {
    const text = String(value ?? "").trim();
    return text ? text.charAt(0).toLocaleUpperCase("it-IT") + text.slice(1) : "";
  };

  const style = document.createElement("style");
  style.textContent = `
    .musashi-character-popup .character-popup-location {
      display: block;
      margin-top: 4px;
      font-family: var(--serif, Georgia, serif);
      font-size: 13px;
      font-style: italic;
      color: var(--ink, #28231d);
    }
    .musashi-character-popup .character-popup-activity {
      display: block;
      margin-top: 10px;
      padding: 9px 11px;
      background: rgba(231, 219, 196, .55);
      border: 1px solid rgba(88, 70, 42, .22);
      border-left: 3px solid var(--vermilion, #9f3f2d);
      font-family: var(--serif, Georgia, serif);
      font-size: 11px;
      line-height: 1.5;
      color: var(--ink, #28231d);
    }
  `;
  document.head.appendChild(style);

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
