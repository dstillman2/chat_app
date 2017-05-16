function chatSettings(state, action) {
  switch (action.subType) {
    case 'UPDATE_TITLE':
      return Object.assign({}, state, {
        title: action.value,
      });
    default:
      return state;
  }
}

export default chatSettings;
