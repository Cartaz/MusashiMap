(() => {
  const originalBindPopup = L.Marker.prototype.bindPopup;
  const characterStatuses = ["Presenza fisica", "Posizione riferita", "Ultima posizione nota", "Posizione non determinata"];

  const escapeHtml = value => String(value ?? "").replace(/[&<>\"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  }[char]));

  const capitalizeFirst = value => {
    const text = String(value ?? "").trim();
    return text ? text.charAt(0).toLocaleUpperCase("it-IT") + text.slice(1) : "";
  };

  L.Marker.prototype.bindPopup = function (content, options) {
    if (typeof content === "string" && characterStatuses.some(status => content.includes(`<b>${status}</b>`))) {
      // map-runtime builds character popups in this fixed reader-facing order:
      // name → technical status → location → precision → technical note → activity.
      const match = content.match(
        /^<strong>(.*?)<\/strong><br><b>.*?<\/b><br>(.*?)<br><small>.*?<\/small><br><span>.*?<\/span>(?:<br><small>(.*?)<\/small>)?$/
      );

      if (match) {
        const [, name, location, rawActivity = ""] = match;
        const activity = capitalizeFirst(rawActivity);
        const readerContent = [
          `<strong>${name}</strong>`,
          `<br><em class="character-popup-location">${location}</em>`,
          activity ? `<div class="character-popup-activity">${escapeHtml(activity)}</div>` : ""
        ].join("");

        const popupOptions = {
          ...(options ?? {}),
          className: `${options?.className ?? ""} musashi-character-popup`.trim()
        };

        return originalBindPopup.call(this, readerContent, popupOptions);
      }
    }

    return originalBindPopup.call(this, content, options);
  };
})();
