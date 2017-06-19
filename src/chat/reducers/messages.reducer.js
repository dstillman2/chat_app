/**
 * Messages reducer.
 * @returns {Object} new state
 */
function messages(state = [], action) {
  switch (action.type) {
    case 'UPDATE_MESSAGE':
      console.log('messages', action.type);
      return state.slice(0).push(action.value);

    default:
      return state;
  }
}

export default messages;
