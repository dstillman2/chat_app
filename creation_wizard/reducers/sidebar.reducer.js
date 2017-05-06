/**
 * Settings reducer.
 * - SET_NODE: changes the node configuration
 * @returns {Object} new state
 */
function sidebar(state = {}, action) {
  switch (action.type) {
    case 'SET_WIDTH':
      return Object.assign({}, state, {
        width: action.width,
      });

    case 'SET_SLIDER_ELEMENT':
      return Object.assign({}, state, {
        element: action.value,
      });

    case 'SET_NODES':
      return Object.assign({}, state, {
        nextNode: action.nextNode,
        activeNode: action.activeNode,
        priorNode: action.priorNode,
      });

    case 'SET_NEXT_NODE':
      return Object.assign({}, state, {
        nextNode: action.value,
      });

    case 'SET_PRIOR_NODE':
      return Object.assign({}, state, {
        priorNode: action.value,
      });

    case 'UPDATE_WIDTHS':
      return Object.assign({}, state, {
        width: action.sidebarWidth,
      });
    default:
      return state;
  }
}

export default sidebar;
