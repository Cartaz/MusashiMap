/*
 * MusashiMap character-marker collision handling.
 *
 * Character positions are narrative coordinates and must remain unchanged in
 * the data model. When two or more character markers are visually too close
 * on screen, only their DOM icons are separated by a small pixel offset.
 * The offsets are recalculated after pan/zoom/resize so they are screen-space
 * aware rather than tied to geographic distance.
 */
(() => {
  const MARKER_SELECTOR = ".musashi-character-marker-wrapper";
  const COLLISION_DISTANCE = 34;
  const RADII = { 2: 24, 3: 26 };
  const DEFAULT_RADIUS = 30;
  let frame = 0;

  const schedule = map => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => resolve(map));
  };

  const resolve = map => {
    frame = 0;
    const nodes = [...map.getContainer().querySelectorAll(MARKER_SELECTOR)]
      .filter(node => node.isConnected);
    if (nodes.length < 2) {
      nodes.forEach(node => {
        node.style.marginLeft = "0px";
        node.style.marginTop = "0px";
      });
      return;
    }

    nodes.forEach(node => {
      node.style.marginLeft = "0px";
      node.style.marginTop = "0px";
    });

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
        points[pointIndex].node.style.marginLeft = `${dx}px`;
        points[pointIndex].node.style.marginTop = `${dy}px`;
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
