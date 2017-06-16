import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import ChatBox from './components/framework/window';
import TopBar from './components/framework/topbar';
import Body from './components/framework/body';
import sendAjaxRequest from '../lib-shared/func/xml_http_request';

import store from './store';

function renderToDOM(config) {
  ReactDOM.render(
    <Provider store={store(config)}>
      <ChatBox>
        <TopBar />
        <Body />
      </ChatBox>
    </Provider>,
    document.getElementById('app'),
  );
}

function fetchConfigFile() {
  const path = 'http://localhost:3000/d0c5781a-dc4d-456c-a75c-e526cff95935.js';

  sendAjaxRequest({
    method: 'GET',
    path,
    onSuccess(data) {
      renderToDOM(data);
    },
    onFailure() {
      console.error('Fatal: cannot fetch config file');
    },
  });
}

fetchConfigFile();

export {
  renderToDOM,
  fetchConfigFile,
};
