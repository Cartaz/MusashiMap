import { detectLanguage, getLanguage, setLanguage, subscribeLanguage, translateDocument } from "./i18n.js";

// Runs before the other modules (document order) so the map, the diary and the
// explorer start in the reader's language.
setLanguage(detectLanguage(), { persist: false });
translateDocument();
subscribeLanguage(() => translateDocument());

const toggle = document.querySelector("#language-toggle");
const syncToggle = () => toggle?.setAttribute("lang", getLanguage() === "it" ? "en" : "it");
syncToggle();
subscribeLanguage(syncToggle);
toggle?.addEventListener("click", () => setLanguage(getLanguage() === "it" ? "en" : "it"));
