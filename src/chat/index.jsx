import React from 'react';

import ChatBox from './components/framework/window';
import TopBar from './components/framework/topbar';
import Body from './components/framework/body';

/*
 * The chat window is wrapped by Provider, which passes down dispatch through
 * context to the connect components. Within the ChatWindow component are
 * the components that build up the chat skin.
 */
const ChatWindow = (
  <ChatBox>
    <TopBar />
    <Body />
  </ChatBox>
);

export default ChatWindow;
