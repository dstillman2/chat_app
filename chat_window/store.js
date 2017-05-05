import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from './reducers';
import config from './config';

/**
 * Initialize the redux store.
 *
 * Defaults:
 *   - nodes array configuration
 *   - default node ID
 */
const store = createStore(
  rootReducer,
  {
    settings: {
      // Initial node is the root node of the node tree
      nodeId: config.initialNode,

      draggable: config.draggable,

      minWidth: config.minWidth,

      minHeight: config.minHeight,
    },

    // READ ONLY. Do not write over the configuration file.
    nodes: config.nodes,

    fields: {
      k3oalwkd: {
        value: 'Top gun',
      },
    },
  },
  applyMiddleware(thunk),
);

export default store;
