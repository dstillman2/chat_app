import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Workspace from './components/workspace';
import Sidebar from './components/sidebar';
import Main from './components/main';
import Header from './components/header';
import FullScreen from './components/fullscreen';
import ChatWindow from './components/chat_window';

import store from './store';
import { setSliderElem } from './actions/sidebar.actions';
import { setMainElem } from './actions/main.actions';

ReactDOM.render(
  <Provider store={store}>
    <Workspace>
      {/*<Header />*/}
      <Sidebar />
      <Main />
      <FullScreen />
      <ChatWindow />
    </Workspace>
  </Provider>,
  document.getElementById('app'),
);

// Set store defaults after DOM populated
store.dispatch(setSliderElem());
store.dispatch(setMainElem());
