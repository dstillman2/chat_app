/**
 * Messages reducer.
 * @returns {Object} new state
 */
function messages(state = [], action) {
  switch (action.type) {
    case 'UPDATE_MESSAGE': {
      const newState = state.slice(0);

      newState.push(action.value);

      return newState;
    }

    default:
      return state;
  }
}

export default messages;
