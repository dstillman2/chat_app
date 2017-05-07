import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from './reducers/root_reducer';

const store = createStore(
  rootReducer,
  {
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
  },
  applyMiddleware(thunk),
);

export default store;
