import chatSettings from '../../chat/reducers/settings.reducer';
import chatFields from '../../chat/reducers/fields.reducer';
import chatMessages from '../../chat/reducers/messages.reducer';
import { chatWindowDefaultConfig } from '../../chat/store';

/**
 * Full screen reducer.
 * @returns {Object} new state
 */
function chatWindow(state = {}, action) {
  switch (action.category) {
    case 'UPDATE_CHAT_SETTINGS': {
      const settings = Object.assign(
        {},
        state.settings,
        chatSettings(state.settings, action, state),
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

    case 'UPDATE_CHAT_MESSAGES': {
      const messages = chatMessages(state.messages, action);

      return Object.assign({}, state, { messages });
    }

    case 'ADD_CONFIG':
      return Object.assign(
        {},
        state,
        chatWindowDefaultConfig(action.config),
      );

    case 'UPDATE_NODES': {
      return state;
    }

    default:
      return state;
  }
}

export default chatWindow;
