import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { chatWindowDefaultConfig } from '../chat_window/store';

import rootReducer from './reducers/root_reducer';

const creationWizardConfig = {
  sidebar: {
    width: 250,

    element: null,

    activeNode: 'settings',

    nextNode: null,

    priorNode: null,

    backButton: {
      isVisible: false,

      route: null,
    },
  },

  main: {},
};

const setLocalStorage = store => next => (action) => {
  next(action);

  if (window.localStorage) {
    const chatWindowConfig = JSON.stringify(store.getState().chatWindow);

    localStorage.setItem('chatWindowConfig', chatWindowConfig);
  }
};

let chatWindowConfig = chatWindowDefaultConfig;

if (window.localStorage) {
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
