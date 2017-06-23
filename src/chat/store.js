import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from './reducers';

/**
 * Initialize the redux store.
 */
const chatWindowDefaultConfig = config => (
  {
    settings: {
      isVisible: false, // if true, the chat window is visible

      initialNode: config.initialNode, // initial node for storing, read only

      nodeId: config.initialNode, // nodeId is the actual current node

      isDraggable: config.isDraggable, // if true, enable dragging functionality

      hasCircularTabbing: config.hasCircularTabbing, // enable circular tabbing if true

      minWidth: config.minWidth, // min width of chat window

      minHeight: config.minHeight, // min height of chat window

      title: config.title, // title of chat window

      left: undefined, // chat window position left

      top: undefined, // chat window postion top
    },

    nodes: config.nodes,

    fields: {},

    messages: [
      config.autoOpener,
    ],

    connect: {
      clientId: window.dsChatPathLocation ? window.dsChatPathLocation.split('config-')[1] : null,
    },
  }
);

const store = config => createStore(
  rootReducer,
  chatWindowDefaultConfig(config),
  applyMiddleware(thunk),
);

export default store;

export { chatWindowDefaultConfig };
