/**
 * Chat window reducer - Tracks window position updates
 * @returns {Object} state
 */
function chatWindowReducer(state = [], action) {
  switch (action.type) {
    case 'UPDATE_CHAT_WINDOW_POSITION':
      return Object.assign({}, state, {
        top: action.top,
        left: action.left,
      });
    default:
      return state;
  }
}

export default chatWindowReducer;
