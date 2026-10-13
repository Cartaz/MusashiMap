const mobileViewport = matchMedia("(max-width: 760px)");
const installPanelToggle = ({ panel, toggle, openLabel, closeLabel, openClass = null }) => {
  if (!panel || !toggle) return;

  const setOpen = open => {
    if (open && mobileViewport.matches) {
      document.querySelectorAll(".pergamena-chiusa:not(.is-collapsed)").forEach(other => {
        if (other !== panel) other.querySelector("button[aria-expanded='true']")?.click();
      });
    }
    panel.classList.toggle("is-collapsed", !open);
    if (openClass) panel.classList.toggle(openClass, open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? closeLabel : openLabel);
    if (panel.classList.contains("info-panel")) {
      const overlay = open && mobileViewport.matches;
      document.querySelector(".app-header").inert = overlay;
      document.querySelector(".map-stage").inert = overlay;
    }
  };

  toggle.addEventListener("click", () => setOpen(panel.classList.contains("is-collapsed")));
  if (panel.classList.contains("info-panel")) {
    document.addEventListener("keydown", event => {
      if (event.key === "Escape" && !document.querySelector("dialog[open]") && !panel.classList.contains("is-collapsed")) {
        setOpen(false); toggle.focus();
      }
    });
    mobileViewport.addEventListener("change", () => setOpen(!panel.classList.contains("is-collapsed")));
  }
  setOpen(false);
};

installPanelToggle({
  panel: document.querySelector(".map-legend"),
  toggle: document.querySelector(".legend-heading"),
  openLabel: "Apri legenda",
  closeLabel: "Chiudi legenda",
  openClass: "is-open"
});

installPanelToggle({
  panel: document.querySelector(".map-character-panel"),
  toggle: document.querySelector("#character-toggle"),
  openLabel: "Apri tracce narrative",
  closeLabel: "Chiudi tracce narrative"
});

installPanelToggle({
  panel: document.querySelector(".info-panel"),
  toggle: document.querySelector(".diary-toggle"),
  openLabel: "Apri il diario del viaggio",
  closeLabel: "Chiudi il diario del viaggio"
});
