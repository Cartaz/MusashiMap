/*
 * MusashiMap character-marker collision handling.
 *
 * Character positions are narrative coordinates and must remain unchanged in
 * the data model. When two or more character markers are visually too close
 * on screen, only their DOM icons are separated by a small pixel offset.
 * A subtle leader line keeps the real geographic anchor visually explicit.
 * Offsets are recalculated after pan/zoom/resize, so they are screen-space
 * aware rather than tied to geographic distance.
 */
(() => {
  const MARKER_SELECTOR = ".musashi-character-marker-wrapper";
  const LINE_CLASS = "musashi-character-collision-line";
  const COLLISION_DISTANCE = 34;
  const RADII = { 2: 24, 3: 26 };
  const DEFAULT_RADIUS = 30;
  let frame = 0;

  const schedule = map => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => resolve(map));
  };

  const getLine = node => {
    let line = node.querySelector(`.${LINE_CLASS}`);
    if (line) return line;
    line = document.createElement("span");
    line.className = LINE_CLASS;
    line.setAttribute("aria-hidden", "true");
    line.style.cssText = [
      "position:absolute",
      "left:50%",
      "top:50%",
      "height:1.5px",
      "transform-origin:0 50%",
      "pointer-events:none",
      "display:none",
      "background:rgba(52,52,52,.5)",
      "z-index:0"
    ].join(";");
    node.prepend(line);
    return line;
  };

  const clearOffset = node => {
    node.style.marginLeft = "0px";
    node.style.marginTop = "0px";
    const line = node.querySelector(`.${LINE_CLASS}`);
    if (line) line.style.display = "none";
  };

  const applyOffset = (node, dx, dy) => {
    node.style.marginLeft = `${dx}px`;
    node.style.marginTop = `${dy}px`;
    const line = getLine(node);
    const length = Math.hypot(dx, dy);
    const angle = Math.atan2(-dy, -dx) * 180 / Math.PI;
    line.style.width = `${length}px`;
    line.style.transform = `rotate(${angle}deg)`;
    line.style.display = "block";
  };

  const resolve = map => {
    frame = 0;
    const nodes = [...map.getContainer().querySelectorAll(MARKER_SELECTOR)]
      .filter(node => node.isConnected);
    if (nodes.length < 2) {
      nodes.forEach(clearOffset);
      return;
    }

    nodes.forEach(clearOffset);

    const points = nodes.map(node => {
      const rect = node.getBoundingClientRect();
      return { node, x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
    });
    const groups = [];
    const visited = new Set();

    points.forEach((point, index) => {
      if (visited.has(index)) return;
      const group = [];
      const queue = [index];
      visited.add(index);
      while (queue.length) {
        const current = queue.shift();
        group.push(current);
        for (let candidate = 0; candidate < points.length; candidate += 1) {
          if (visited.has(candidate)) continue;
          const dx = points[current].x - points[candidate].x;
          const dy = points[current].y - points[candidate].y;
          if (Math.hypot(dx, dy) <= COLLISION_DISTANCE) {
            visited.add(candidate);
            queue.push(candidate);
          }
        }
      }
      if (group.length > 1) groups.push(group);
    });

    groups.forEach(group => {
      const radius = RADII[group.length] ?? DEFAULT_RADIUS;
      group.forEach((pointIndex, index) => {
        const angle = -Math.PI / 2 + index * (Math.PI * 2 / group.length);
        const dx = Math.round(Math.cos(angle) * radius);
        const dy = Math.round(Math.sin(angle) * radius);
        applyOffset(points[pointIndex].node, dx, dy);
      });
    });
  };

  if (!window.L?.Map) return;

  L.Map.addInitHook(function () {
    const map = this;
    map.on({
      layeradd: () => schedule(map),
      layerremove: () => schedule(map),
      zoomend: () => schedule(map),
      moveend: () => schedule(map),
      resize: () => schedule(map)
    });
    schedule(map);
  });
})();
