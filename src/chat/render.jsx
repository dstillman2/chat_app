import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import ChatBox from './components/framework/window';
import TopBar from './components/framework/topbar';
import Body from './components/framework/body';
import sendAjaxRequest from '../lib/func/xml_http_request';
import injectStyle from '../lib/func/inject_style';

import store from './store';

function renderToDOM(config) {
  window.store = store(config);

  ReactDOM.render(
    <Provider store={store(config)}>
      <ChatBox>
        <TopBar />
        <Body />
      </ChatBox>
    </Provider>,
    document.getElementById('dsChatNode'),
  );
}

function fetchConfigFile() {
  const path = window.dsChatPathLocation;

  if (!path) {
    throw new Error('Fatal: config path not provided');
  }

  sendAjaxRequest({
    method: 'GET',
    path,
    onSuccess(data) {
      injectStyle(`http://localhost:3000/theme/${data.theme}.css`);

      renderToDOM(data);
    },
    onFailure() {
      throw new Error('Fatal: cannot fetch config file');
    },
  });
}

fetchConfigFile();

export {
  renderToDOM,
  fetchConfigFile,
};
