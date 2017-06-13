import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { chatWindowDefaultConfig } from '../chat/store';

import rootReducer from './reducers/root_reducer';
import setLocalStorage from './middleware/local_storage.redux';

const creationWizardConfig = {
  sidebar: {
    width: 250,

    element: null,

    activeNode: 'navigation',

    nextNode: null,

    priorNode: null,

    backButton: {
      isVisible: false,

      route: null,
    },
  },

  main: {},

  chatWindow: {
    isVisible: true,
  },
};

let chatWindowConfig = chatWindowDefaultConfig;

if (false && window.localStorage) {
  const item = window.localStorage.getItem('chatWindowConfig');

  if (item) {
    chatWindowConfig = JSON.parse(item);
  }
}

const defaultStore = Object.assign(
  {},
  creationWizardConfig,
  { chatWindow: chatWindowConfig },
);

const store = createStore(
  rootReducer,
  defaultStore,
  applyMiddleware(thunk, setLocalStorage),
);

window.store = store;

export default store;
