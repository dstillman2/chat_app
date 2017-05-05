import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Workspace from './components/workspace';
import Sidebar from './components/sidebar';
import Main from './components/main';
import Footer from './components/footer';

import store from './store';
import { setSliderElem } from './actions/sidebar.actions';

ReactDOM.render(
  <Provider store={store}>
    <Workspace>
      <Sidebar />
      <Main />
      <div className="clearfix" />
      <Footer />
    </Workspace>
  </Provider>,
  document.getElementById('app'),
);

// Set store defaults after DOM populated
store.dispatch(setSliderElem());
