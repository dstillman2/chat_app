function openFullScreen() {
  return {
    type: 'OPEN_FULL_SCREEN',
  };
}

function closeFullScreen() {
  return {
    type: 'CLOSE_FULL_SCREEN',
  };
}

export {
  openFullScreen,
  closeFullScreen,
};
