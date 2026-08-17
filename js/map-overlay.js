(() => {
  const toggle = document.getElementById('map-ornament-toggle');
  const overlay = document.querySelector('.map-overlay');
  if (!toggle || !overlay) return;

  toggle.addEventListener('click', () => {
    const hidden = overlay.classList.toggle('ornaments-hidden');
    toggle.setAttribute('aria-pressed', String(!hidden));
  });
})();
