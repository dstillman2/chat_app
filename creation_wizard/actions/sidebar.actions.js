const setSliderElem = () => {
  const element = document.getElementById('sidebar');

  return {
    type: 'SET_SLIDER_ELEMENT',
    value: element,
  };
};
const setNodes = ({ nextNode, activeNode, priorNode, sidebarWidth }) => (
  {
    type: 'SET_NODES',
    nextNode,
    activeNode,
    priorNode,
    sidebarWidth,
  }
);
const setWidth = value => ({ type: 'SET_WIDTH', value });
const setActiveNode = value => ({ type: 'SET_ACTIVE_NODE', value });
const setNextNode = value => ({ type: 'SET_NEXT_NODE', value });
const setPriorNode = value => ({ type: 'SET_PRIOR_NODE', value });
const showBackButton = value => ({ type: 'SHOW_BACK_BUTTON', value });
const hideBackButton = () => ({ type: 'HIDE_BACK_BUTTON' });
const sidebarIsTransitioning = () => ({ type: 'SIDEBAR_IS_TRANSITIONING' });

export {
  setNodes,
  setSliderElem,
  setNextNode,
  setPriorNode,
  setActiveNode,
  setWidth,
  showBackButton,
  hideBackButton,
  sidebarIsTransitioning,
};
