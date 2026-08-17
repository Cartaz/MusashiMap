(() => {
  const originalBindPopup = L.Marker.prototype.bindPopup;
  const characterStatuses = ["Presenza fisica", "Posizione riferita", "Ultima posizione nota", "Posizione non determinata"];

  const extract = (html, pattern) => {
    const match = html.match(pattern);
    return match ? match[1] : "";
  };

  L.Marker.prototype.bindPopup = function (content, options) {
    if (typeof content === "string" && characterStatuses.some(status => content.includes(`<b>${status}</b>`))) {
      const name = extract(content, /^<strong>(.*?)<\/strong>/);
      const location = extract(content, /<\/b><br>(.*?)<br><small>/);
      const activity = extract(content, /<\/span>(?:<br><small>(.*?)<\/small>)?/);

      // Character popups expose only reader-facing information.
      // The marker itself communicates the technical position semantics.
      const readerContent = `<strong>${name}</strong><br>${location}${activity ? `<br><span>${activity}</span>` : ""}`;
      return originalBindPopup.call(this, readerContent, options);
    }

    return originalBindPopup.call(this, content, options);
  };
})();
