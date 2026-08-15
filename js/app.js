const chapterInput = document.querySelector("#chapter");
const status = document.querySelector("#status");
chapterInput.addEventListener("input", () => {
  const chapter = Math.max(1, Number.parseInt(chapterInput.value || "1", 10));
  chapterInput.value = chapter;
  status.textContent = `Capitolo ${chapter} · nessun dato narrativo ancora validato.`;
});
