function chatSettings(state, action) {
  switch (action.subType) {
    case 'UPDATE_TITLE':
      return Object.assign({}, state, {
        title: action.value,
      });

    case 'UPDATE_CHAT_WINDOW_POSITION':
      return Object.assign({}, state, {
        top: action.top,
        left: action.left,
      });

    case 'CLOSE_CHAT_WINDOW':
      return Object.assign({}, state, {
        isVisible: false,
      });

    case 'OPEN_CHAT_WINDOW':
      return Object.assign({}, state, {
        isVisible: true,
        isMinimized: false,
      });

    case 'MINIMIZE_CHAT_WINDOW':
      return Object.assign({}, state, {
        isMinimized: true,
      });

    default:
      return state;
  }
}

export default chatSettings;
