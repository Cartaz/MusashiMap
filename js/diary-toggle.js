(() => {
  const diary=document.querySelector(".info-panel.pergamena-arrotolata--verticale");
  const toggle=diary?.querySelector(".diary-toggle");
  if(!diary||!toggle)return;

  const setOpen=open=>{
    diary.classList.toggle("is-collapsed",!open);
    diary.setAttribute("aria-expanded",String(open));
    toggle.setAttribute("aria-expanded",String(open));
  };

  const toggleOpen=()=>setOpen(diary.classList.contains("is-collapsed"));
  toggle.addEventListener("click",toggleOpen);
  toggle.addEventListener("keydown",event=>{
    if(event.key==="Enter"||event.key===" "){event.preventDefault();toggleOpen();}
  });

  setOpen(false);
  setOpen(true);
})();
