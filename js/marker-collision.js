const MARKER_SELECTOR = ".musashi-map-marker-wrapper, .musashi-character-marker-wrapper";
const DEFAULT_COLLISION_DISTANCE = 34;
const DEFAULT_MINIMUM_SPACING = 38;
const DEFAULT_MINIMUM_RADIUS = 24;

const distance = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);

function getCollisionRadius(total, {
  minimumSpacing = DEFAULT_MINIMUM_SPACING,
  minimumRadius = DEFAULT_MINIMUM_RADIUS
} = {}) {
  if (total <= 1) return 0;
  const required = minimumSpacing / (2 * Math.sin(Math.PI / total));
  return Math.max(minimumRadius, Math.ceil(required));
}

export function computeCollisionOffsets(points, {
  collisionDistance = DEFAULT_COLLISION_DISTANCE,
  minimumSpacing = DEFAULT_MINIMUM_SPACING,
  minimumRadius = DEFAULT_MINIMUM_RADIUS
} = {}) {
  const offsets = points.map(() => ({ x: 0, y: 0 }));
  if (points.length < 2) return offsets;

  const visited = new Set();
  for (let index = 0; index < points.length; index += 1) {
    if (visited.has(index)) continue;

    const group = [];
    const queue = [index];
    visited.add(index);
    while (queue.length) {
      const current = queue.shift();
      group.push(current);
      for (let candidate = 0; candidate < points.length; candidate += 1) {
        if (visited.has(candidate)) continue;
        if (distance(points[current], points[candidate]) <= collisionDistance) {
          visited.add(candidate);
          queue.push(candidate);
        }
      }
    }

    if (group.length < 2) continue;
    const center = group.reduce((sum, pointIndex) => ({
      x: sum.x + points[pointIndex].x,
      y: sum.y + points[pointIndex].y
    }), { x: 0, y: 0 });
    center.x /= group.length;
    center.y /= group.length;

    const radius = getCollisionRadius(group.length, { minimumSpacing, minimumRadius });
    group.forEach((pointIndex, position) => {
      const angle = -Math.PI / 2 + position * (Math.PI * 2 / group.length);
      const targetX = center.x + Math.cos(angle) * radius;
      const targetY = center.y + Math.sin(angle) * radius;
      offsets[pointIndex] = {
        x: Math.round(targetX - points[pointIndex].x),
        y: Math.round(targetY - points[pointIndex].y)
      };
    });
  }

  return offsets;
}

const clearOffset = node => {
  node.classList.remove("is-colliding");
  for (const property of ["--collision-x", "--collision-y", "--collision-distance", "--collision-angle"]) {
    node.style.removeProperty(property);
  }
};

const applyOffset = (node, { x, y }) => {
  if (!x && !y) {
    clearOffset(node);
    return;
  }
  node.style.setProperty("--collision-x", `${x}px`);
  node.style.setProperty("--collision-y", `${y}px`);
  node.style.setProperty("--collision-distance", `${Math.hypot(x, y)}px`);
  node.style.setProperty("--collision-angle", `${Math.atan2(y, x) * 180 / Math.PI}deg`);
  node.classList.add("is-colliding");
};

const resolveMarkerCollisions = map => {
  const nodes = [...map.getContainer().querySelectorAll(MARKER_SELECTOR)]
    .filter(node => node.isConnected);
  nodes.forEach(clearOffset);
  if (nodes.length < 2) return;

  const points = nodes.map(node => {
    const rect = node.getBoundingClientRect();
    return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
  });
  const offsets = computeCollisionOffsets(points);
  offsets.forEach((offset, index) => applyOffset(nodes[index], offset));
};

export function installMarkerCollision(map) {
  if (!map?.getContainer || !map?.on || !map?.off) return () => {};

  const view = map.getContainer().ownerDocument?.defaultView ?? globalThis;
  let frame = 0;
  const schedule = () => {
    if (frame) view.cancelAnimationFrame(frame);
    frame = view.requestAnimationFrame(() => {
      frame = 0;
      resolveMarkerCollisions(map);
    });
  };
  const events = ["layeradd", "layerremove", "zoomend", "moveend", "resize"];
  events.forEach(event => map.on(event, schedule));
  schedule();

  return () => {
    if (frame) view.cancelAnimationFrame(frame);
    frame = 0;
    events.forEach(event => map.off(event, schedule));
    map.getContainer().querySelectorAll(MARKER_SELECTOR).forEach(clearOffset);
  };
}
