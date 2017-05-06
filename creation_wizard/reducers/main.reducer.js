/**
 * Settings reducer.
 * - SET_NODE: changes the node configuration
 * @returns {Object} new state
 */
function main(state = {}, action) {
  switch (action.type) {
    case 'SET_MAIN_ELEMENT':
      return Object.assign({}, state, {
        element: action.value,
      });

    default:
      return state;
  }
}

export default main;
