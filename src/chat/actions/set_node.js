/**
 * Action creator
 * Change the node ID
 */
function setNode(node) {
  return {
    category: 'UPDATE_CHAT_SETTINGS',
    type: 'SET_NODE',
    node,
  };
}

function resetToInitialNode() {
  return {
    category: 'UPDATE_CHAT_SETTINGS',
    type: 'RESET_TO_INITIAL_NODE',
  };
}

export {
  setNode,
  resetToInitialNode,
};
