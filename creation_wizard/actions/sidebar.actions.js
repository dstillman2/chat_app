/**
 * Get sidebar slider DOM element.
 */
function setSliderElem() {
  const elem = document.getElementById('sidebar') || null;

  return {
    type: 'SET_SLIDER_ELEMENT',
    value: elem,
  };
}

/**
 * Set width of sidebar
 */
function setWidth(width) {
  return {
    type: 'SET_WIDTH',
    width,
  };
}

/**
 * Set a group of nodes: nextNode, activeNode, priorNode. Also set width.
 */
function setNodes({ nextNode, activeNode, priorNode }) {
  return {
    type: 'SET_NODES',
    nextNode,
    activeNode,
    priorNode,
  };
}

/**
 * Set the prior element when there is a node transition.
 */
function setActiveNode(elementString) {
  return {
    type: 'SET_ACTIVE_NODE',
    value: elementString,
  };
}


/**
 * Set the nextNode property. The sidebar will show an animation that
 * transitions to this element from the prior element.
 */
function setNextNode(elementString) {
  return {
    type: 'SET_NEXT_NODE',
    value: elementString,
  };
}

/**
 * Set the prior element when there is a node transition.
 */
function setPriorNode(elementString) {
  return {
    type: 'SET_PRIOR_NODE',
    value: elementString,
  };
}


export {
  setNodes,
  setSliderElem,
  setNextNode,
  setPriorNode,
  setActiveNode,
  setWidth,
};
