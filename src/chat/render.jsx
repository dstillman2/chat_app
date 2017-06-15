import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import ChatBox from './components/framework/window';
import TopBar from './components/framework/topbar';
import Body from './components/framework/body';

import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <ChatBox>
      <TopBar />
      <Body />
    </ChatBox>
  </Provider>,
  document.getElementById('app'),
);
