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

    case 'UPDATE_TITLE':
      return Object.assign({}, state, {
        title: action.value,
      });

    case 'DISABLE_DRAG_AND_DROP':
      return Object.assign({}, state, {
        draggable: false,
      });
    default:
      return state;
  }
}

export default settings;
