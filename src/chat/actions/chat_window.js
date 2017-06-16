function updateChatWindowPosition({
  top,
  left,
}) {
  return {
    category: 'UPDATE_CHAT_SETTINGS',
    type: 'UPDATE_CHAT_WINDOW_POSITION',
    top,
    left,
  };
}

function closeChatWindow() {
  return {
    category: 'UPDATE_CHAT_SETTINGS',
    type: 'CLOSE_CHAT_WINDOW',
  };
}

function openChatWindow() {
  return {
    category: 'UPDATE_CHAT_SETTINGS',
    type: 'OPEN_CHAT_WINDOW',
  };
}

function minimizeChatWindow() {
  return {
    category: 'UPDATE_CHAT_SETTINGS',
    type: 'MINIMIZE_CHAT_WINDOW',
  };
}

export {
  updateChatWindowPosition,
  closeChatWindow,
  openChatWindow,
  minimizeChatWindow,
};
