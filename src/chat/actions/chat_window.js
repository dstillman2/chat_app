function updateChatWindowPosition({
  top,
  left,
}) {
  return {
    type: 'UPDATE_CHAT_SETTINGS',
    subType: 'UPDATE_CHAT_WINDOW_POSITION',
    top,
    left,
  };
}

function updateChatWindowOpacity({
  opacity,
}) {
  return {
    opacity,
  };
}

function closeChatWindow() {
  return {
    type: 'UPDATE_CHAT_SETTINGS',
    subType: 'CLOSE_CHAT_WINDOW',
  };
}

function openChatWindow() {
  return {
    type: 'UPDATE_CHAT_SETTINGS',
    subType: 'OPEN_CHAT_WINDOW',
  };
}

function minimizeChatWindow() {
  return {
    type: 'UPDATE_CHAT_SETTINGS',
    subType: 'MINIMIZE_CHAT_WINDOW',
  };
}

export {
  updateChatWindowPosition,
  updateChatWindowOpacity,
  closeChatWindow,
  openChatWindow,
  minimizeChatWindow,
};
