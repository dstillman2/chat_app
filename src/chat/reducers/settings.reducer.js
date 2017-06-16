/**
 * Settings reducer.
 * - SET_NODE: changes the node configuration
 * @returns {Object} new state
 */
function settings(state = {}, action) {
  switch (action.type) {
    case 'UPDATE_TITLE':
      return Object.assign({}, state, {
        title: action.value,
      });

    case 'UPDATE_CHAT_WINDOW_POSITION':
      return Object.assign({}, state, {
        top: action.top,
        left: action.left,
      });

    case 'CLOSE_CHAT_WINDOW':
      return Object.assign({}, state, {
        isVisible: false,
        nodeId: state.initialNode,
        top: undefined,
        left: undefined,
      });

    case 'OPEN_CHAT_WINDOW':
      return Object.assign({}, state, {
        isVisible: true,
        isMinimized: false,
      });

    case 'MINIMIZE_CHAT_WINDOW':
      return Object.assign({}, state, {
        isMinimized: true,
      });

    case 'SET_NODE':
      return Object.assign({}, state, {
        nodeId: action.node,
      });

    default:
      return state;
  }
}

export default settings;
