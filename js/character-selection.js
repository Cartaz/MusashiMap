const stringIds = values => (values ?? []).filter(id => typeof id === "string");

export function mergeNewlyVisibleSelection(previouslyVisibleIds, currentlyVisibleIds, selectedCharacters = []) {
  const previouslyVisible = new Set(stringIds(previouslyVisibleIds));
  const selected = new Set(stringIds(selectedCharacters));

  for (const id of stringIds(currentlyVisibleIds)) {
    if (!previouslyVisible.has(id)) selected.add(id);
  }
  return [...selected];
}
