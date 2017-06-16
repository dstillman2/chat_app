import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from './reducers/root_reducer';
import setLocalStorage from './middleware/local_storage.redux';
import { fetchConfigFile } from './actions/fetch_config.actions';

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
};

// let chatWindowConfig = chatWindowDefaultConfig;

// if (window.localStorage) {
//   const item = window.localStorage.getItem('chatWindowConfig');
//
//   if (item) {
//     chatWindowConfig = JSON.parse(item);
//   }
// }

const defaultStore = Object.assign(
  {},
  creationWizardConfig,
);

const store = createStore(
  rootReducer,
  defaultStore,
  applyMiddleware(thunk, setLocalStorage),
);

window.store = store;

store.dispatch(fetchConfigFile());

export default store;
