/**
 * Full screen reducer.
 * @returns {Object} new state
 */
function fullScreen(state = {}, action) {
  switch (action.type) {
    case 'OPEN_FULL_SCREEN':
      return Object.assign({}, state, {
        isOpen: true,
      });

    case 'CLOSE_FULL_SCREEN':
      return Object.assign({}, state, {
        isOpen: false,
      });

    default:
      return state;
  }
}

export default fullScreen;
