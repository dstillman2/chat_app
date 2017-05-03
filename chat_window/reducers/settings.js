/**
 * Settings reducer.
 * - SET_NODE: changes the node configuration
 * @returns {Object} new state
 */
function settings(state = {}, action) {
  switch (action.type) {
    case 'SET_NODE':
      return Object.assign({}, state, {
        nodeId: action.nodeId,
      });

    default:
      return state;
  }
}

export default settings;
