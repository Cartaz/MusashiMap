const legend=document.querySelector(".map-legend");
const heading=legend?.querySelector(".legend-heading");
const label=heading?.querySelector(".panel-kicker");

if(legend&&heading&&label){
  const toggle=document.createElement("button");
  toggle.type="button";
  toggle.className="legend-toggle";
  toggle.setAttribute("aria-expanded","true");
  toggle.setAttribute("aria-controls","place-legend");
  toggle.append(label);
  heading.replaceChildren(toggle);

  const setOpen=(open)=>{
    legend.classList.toggle("is-collapsed",!open);
    toggle.setAttribute("aria-expanded",String(open));
    toggle.setAttribute("aria-label",open?"Chiudi legenda":"Apri legenda");
  };

  toggle.addEventListener("click",()=>setOpen(legend.classList.contains("is-collapsed")));
  setOpen(true);
}
