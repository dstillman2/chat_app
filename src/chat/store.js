import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from './reducers';

/**
 * Initialize the redux store.
 */
const chatWindowDefaultConfig = config => (
  {
    settings: {
      isVisible: false,

      initialNode: config.initialNode,

      nodeId: config.initialNode,

      isDraggable: config.isDraggable,

      hasCircularTabbing: config.hasCircularTabbing,

      minWidth: config.minWidth,

      minHeight: config.minHeight,

      title: config.title,

      left: undefined,

      top: undefined,
    },

    nodes: config.nodes,

    fields: {},
  }
);

const store = config => createStore(
  rootReducer,
  chatWindowDefaultConfig(config),
  applyMiddleware(thunk),
);

export default store;

export { chatWindowDefaultConfig };
