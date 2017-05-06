function setMainElem() {
  const elem = document.getElementById('main') || null;

  return {
    type: 'SET_MAIN_ELEMENT',
    value: elem,
  };
}

function requestWidthUpdates({ deltaMainWidth, sidebarWidth }) {
  return {
    type: 'UPDATE_WIDTHS',
    deltaMainWidth,
    sidebarWidth,
  };
}

function updateMainWidthRequestReceived() {
  return {
    type: 'REMOVE_DELTA_WIDTH',
  };
}

function isTransitioning() {
  return {
    type: 'IS_TRANSITIONING',
  };
}

export {
  isTransitioning,
  setMainElem,
  requestWidthUpdates,
  updateMainWidthRequestReceived,
};
