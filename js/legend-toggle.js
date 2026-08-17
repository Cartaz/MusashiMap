const legend=document.querySelector(".map-legend");
const heading=legend?.querySelector(".legend-heading");
const label=heading?.querySelector(".panel-kicker");

if(legend&&heading&&label){
  heading.setAttribute("role","button");
  heading.setAttribute("tabindex","0");
  heading.setAttribute("aria-controls","place-legend");
  const setOpen=(open)=>{
    legend.classList.toggle("is-collapsed",!open);
    legend.classList.toggle("is-open",open);
    heading.setAttribute("aria-expanded",String(open));
    heading.setAttribute("aria-label",open?"Chiudi legenda":"Apri legenda");
  };
  const toggle=()=>setOpen(legend.classList.contains("is-collapsed"));
  heading.addEventListener("click",toggle);
  heading.addEventListener("keydown",event=>{if(event.key==="Enter"||event.key===" "){event.preventDefault();toggle();}});
  setOpen(false);
}

/* The existing masthead is the single diary toggle. The closed-parchment
   component owns its visual styling; this script only owns state and wrapping. */
const diary=document.querySelector(".info-panel");
const diaryToggle=diary?.querySelector(".diary-toggle");
if(diary&&diaryToggle){
  let content=diary.querySelector(".diary-content");
  if(!content){
    content=document.createElement("div");
    content.id="diary-content";
    content.className="diary-content";
    [...diary.children].filter(child=>child!==diaryToggle).forEach(child=>content.appendChild(child));
    diary.appendChild(content);
  }

  diaryToggle.setAttribute("role","button");
  diaryToggle.setAttribute("tabindex","0");
  diaryToggle.setAttribute("aria-controls","diary-content");

  const setDiaryOpen=(open)=>{
    diary.classList.toggle("is-collapsed",!open);
    diary.setAttribute("aria-expanded",String(open));
    diaryToggle.setAttribute("aria-expanded",String(open));
    diaryToggle.setAttribute("aria-label",open?"Chiudi il diario del viaggio":"Apri il diario del viaggio");
  };
  const toggleDiary=()=>setDiaryOpen(diary.classList.contains("is-collapsed"));
  diaryToggle.addEventListener("click",toggleDiary);
  diaryToggle.addEventListener("keydown",event=>{if(event.key==="Enter"||event.key===" "){event.preventDefault();toggleDiary();}});
  setDiaryOpen(false);
}
