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
const chatWindowDefaultConfig = {
  settings: {
    // Initial node is the root node of the node tree
    nodeId: config.initialNode,

    draggable: config.draggable,

    minWidth: config.minWidth,

    minHeight: config.minHeight,

    title: config.title,
  },

  nodes: config.nodes,

  fields: {
    k3oalwkd: {
      value: '',
    },
  },

  config,
};

// const store = createStore(
//   rootReducer,
//   chatWindowDefaultConfig,
//   applyMiddleware(thunk),
// );
//
// export default store;

export { chatWindowDefaultConfig };
