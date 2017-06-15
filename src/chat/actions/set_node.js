/**
 * Action creator
 * Change the node ID
 */
function setNode(node) {
  return {
    type: 'UPDATE_CHAT_SETTINGS',
    subType: 'SET_NODE',
    node,
  };
}

function resetToInitialNode() {
  return {
    type: 'UPDATE_CHAT_SETTINGS',
    subType: 'RESET_TO_INITIAL_NODE',
  };
}

export {
  setNode,
  resetToInitialNode,
};
