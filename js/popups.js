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

const popupOptions = (options, className) => ({
  ...(options ?? {}),
  className: `${options?.className ?? ""} ${className}`.trim()
});

const renderPopup = (kind, data) => {
  if (kind === "character") {
    const description = capitalizeFirst(data.description);
    return [
      `<strong>${escapeHtml(data.name)}</strong>`,
      `<br><em class="popup-secondary">${escapeHtml(data.location)}</em>`,
      description ? `<div class="popup-description">${escapeHtml(description)}</div>` : ""
    ].join("");
  }

  if (kind === "place") {
    return [
      `<strong>${escapeHtml(data.name)}</strong>`,
      `<br><em class="popup-secondary">${escapeHtml(data.secondary)}</em>`,
      data.description ? `<div class="popup-description">${escapeHtml(data.description)}</div>` : ""
    ].join("");
  }

  if (kind === "movement") {
    const description = capitalizeFirst(data.description);
    return [
      `<strong>${escapeHtml(data.title)}</strong>`,
      `<br><em class="popup-secondary">${escapeHtml(data.route)}</em>`,
      description ? `<div class="popup-description">${escapeHtml(description)}</div>` : ""
    ].join("");
  }

  return "";
};

window.MusashiMapPopups = Object.freeze({
  character(data, options) {
    return {
      content: renderPopup("character", data),
      options: popupOptions(options, "musashi-popup musashi-character-popup")
    };
  },
  place(data, options) {
    return {
      content: renderPopup("place", data),
      options: popupOptions(options, "musashi-popup musashi-place-popup")
    };
  },
  movement(data, options) {
    return {
      content: renderPopup("movement", data),
      options: popupOptions(options, "musashi-popup musashi-movement-popup")
    };
  }
});
