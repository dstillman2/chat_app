/**
 * Settings reducer.
 * - SET_NODE: changes the node configuration
 * @returns {Object} new state
 */

function sidebar(state = {}, action) {
  switch (action.type) {
    case 'SET_WIDTH':
      return Object.assign({}, state, {
        width: action.value,
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
        isTransitioning: false,
      });

    case 'SET_NEXT_NODE':
      return Object.assign({}, state, {
        nextNode: action.value,
      });

    case 'SET_PRIOR_NODE':
      return Object.assign({}, state, {
        priorNode: action.value,
      });

    case 'SHOW_BACK_BUTTON':
      return Object.assign({}, state, {
        backButton: {
          isVisible: true,
          routeTo: action.value,
        },
      });

    case 'HIDE_BACK_BUTTON':
      return Object.assign({}, state, {
        backButton: {
          isVisible: false,
          routeTo: '',
        },
      });

    case 'SIDEBAR_IS_TRANSITIONING':
      return Object.assign({}, state, {
        isTransitioning: true,
      });

    case 'SIDEBAR_NOT_TRANSITIONING':
      return Object.assign({}, state, {
        isTransitioning: false,
      });

    default:
      return state;
  }
}

export default sidebar;
