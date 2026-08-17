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

  // Capture the exact height of the fully rendered, open legend once.
  // The value comes from the real baseline layout; it is never invented or
  // recalculated when the legend is collapsed.
  let heightLocked=false;
  const lockHeight=()=>{
    if(heightLocked||legend.classList.contains("is-collapsed"))return;
    const height=legend.offsetHeight;
    if(height>0){
      legend.style.height=`${height}px`;
      heightLocked=true;
      observer.disconnect();
    }
  };
  const observer=new ResizeObserver(lockHeight);
  observer.observe(legend);
  requestAnimationFrame(lockHeight);
  setTimeout(lockHeight,0);

  const setOpen=(open)=>{
    legend.classList.toggle("is-collapsed",!open);
    toggle.setAttribute("aria-expanded",String(open));
    toggle.setAttribute("aria-label",open?"Chiudi legenda":"Apri legenda");
  };

  toggle.addEventListener("click",()=>setOpen(legend.classList.contains("is-collapsed")));
  setOpen(true);
}
