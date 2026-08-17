const legend=document.querySelector(".map-legend");
const heading=legend?.querySelector(".legend-heading");
const label=heading?.querySelector(".panel-kicker");

if(legend&&heading&&label){
  // The heading itself is the toggle. No extra button is inserted, so the
  // heading never changes the legend's layout or pushes the legend items down.
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
  heading.addEventListener("keydown",event=>{
    if(event.key==="Enter"||event.key===" "){event.preventDefault();toggle();}
  });
  setOpen(true);
}
