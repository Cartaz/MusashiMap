export function getVisibleEvents(events, chapter) {
  return events.filter(event => event.chapter <= chapter);
}
