const legend=document.querySelector(".map-legend");
const heading=legend?.querySelector(".legend-heading");
const label=heading?.querySelector(".panel-kicker");

if(legend&&heading&&label){
  heading.setAttribute("role","button");
  heading.setAttribute("tabindex","0");
  heading.setAttribute("aria-controls","place-legend");
  const setOpen=(open)=>{
    legend.classList.toggle("is-collapsed",!open);
    heading.setAttribute("aria-expanded",String(open));
    heading.setAttribute("aria-label",open?"Chiudi legenda":"Apri legenda");
  };
  const toggle=()=>setOpen(legend.classList.contains("is-collapsed"));
  heading.addEventListener("click",toggle);
  heading.addEventListener("keydown",event=>{if(event.key==="Enter"||event.key===" "){event.preventDefault();toggle();}});
  setOpen(false);
}

const diary=document.querySelector(".info-panel");
if(diary){
  const toggle=document.createElement("button");
  toggle.type="button";
  toggle.className="diary-toggle";
  toggle.setAttribute("aria-controls","diary-content");
  const masthead=diary.querySelector(".sidebar-masthead");
  const content=document.createElement("div");
  content.id="diary-content";
  content.className="diary-content";
  while(diary.firstChild) content.append(diary.firstChild);
  diary.append(toggle,content);
  toggle.innerHTML='<span class="diary-collapsed-label">IL DIARIO DEL VIAGGIO</span><span class="diary-open-label"><span class="sidebar-rule"></span>IL DIARIO DEL VIAGGIO</span>';
  if(masthead) masthead.remove();
  const setDiaryOpen=(open)=>{
    diary.classList.toggle("is-collapsed",!open);
    toggle.setAttribute("aria-expanded",String(open));
    toggle.setAttribute("aria-label",open?"Chiudi il diario del viaggio":"Apri il diario del viaggio");
  };
  const toggleDiary=()=>setDiaryOpen(diary.classList.contains("is-collapsed"));
  toggle.addEventListener("click",toggleDiary);
  toggle.addEventListener("keydown",event=>{if(event.key==="Enter"||event.key===" "){event.preventDefault();toggleDiary();}});
  setDiaryOpen(false);
}
