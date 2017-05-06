import React from 'react';
import { Provider } from 'react-redux';

import config from './config';
import store from './store';

import ChatBox from './components/framework/window';
import TopBar from './components/framework/topbar';
import Body from './components/framework/body';

// If an invalid configuration file is supplied, throw an error.
const configType = typeof config;

if (configType !== 'object' || configType === null) {
  const error = new TypeError();
  error.message = 'A proper configuration file is required.';

  throw error;
}

/*
 * The chat window is wrapped by Provider, which passes down dispatch through
 * context to the connect components. Within the ChatWindow component are
 * the components that build up the chat skin.
 */
const ChatWindow = (
  <Provider store={store}>
    <ChatBox>
      <TopBar>
        <div id="move-cursor-box" />
        <div>Chat With Us</div>
      </TopBar>
      <Body />
    </ChatBox>
  </Provider>
);

export default ChatWindow;

export {
  store as chatWindowStore,
};
