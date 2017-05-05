import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Workspace from './components/workspace';
import Sidebar from './components/sidebar';
import Main from './components/main';
import Footer from './components/footer';

import store from './store';
import { setSliderElem } from './actions/sidebar.actions';
import chatWindow, { chatWindowStore } from '../chat_window/index';

import draggable from '../lib-shared/func/dragdrop';

function Chat(props) {
  const state = props.store.getState();

  window.requestAnimationFrame(() => {
    if (state.settings.draggable) {
      draggable('ds-chat-window');
    }
  });

  return (
    <div>
      {props.chat}
    </div>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <Workspace>
      <Sidebar />
      <Main />
      <div className="clearfix" />
      <Footer />
      <Chat chat={chatWindow} store={chatWindowStore} />
    </Workspace>
  </Provider>,
  document.getElementById('app'),
);

// Set store defaults after DOM populated
store.dispatch(setSliderElem());
