const stringIds = values => (values ?? []).filter(id => typeof id === "string");

// Change only the requested characters; rewinding must preserve later choices.
export function updateCharacterSelection(selectedCharacters, characterIds, enabled) {
  const selected = new Set(stringIds(selectedCharacters));
  for (const id of stringIds(characterIds)) {
    if (enabled) selected.add(id);
    else selected.delete(id);
  }
  return [...selected];
}

export function mergeNewlyVisibleSelection(previouslyVisibleIds, currentlyVisibleIds, selectedCharacters = []) {
  const previouslyVisible = new Set(stringIds(previouslyVisibleIds));
  const selected = new Set(stringIds(selectedCharacters));

  for (const id of stringIds(currentlyVisibleIds)) {
    if (!previouslyVisible.has(id)) selected.add(id);
  }
  return [...selected];
}
