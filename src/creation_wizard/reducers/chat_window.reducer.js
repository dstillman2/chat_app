import chatSettings from './chat_window/settings.chatwindow.reducer';
import chatFields from './chat_window/fields.chatwindow.reducer';

/**
 * Full screen reducer.
 * @returns {Object} new state
 */
function chatWindow(state = {}, action) {
  switch (action.type) {
    case 'UPDATE_CHAT_SETTINGS': {
      const settings = Object.assign(
        {},
        state.settings,
        chatSettings(state.fields, action),
      );

      return Object.assign({}, state, { settings });
    }

    case 'UPDATE_CHAT_FIELDS': {
      const fields = Object.assign(
        {},
        state.fields,
        chatFields(state.fields, action),
      );

      return Object.assign({}, state, { fields });
    }

    case 'UPDATE_NODES': {
      return state;
    }

    default:
      return state;
  }
}

export default chatWindow;
