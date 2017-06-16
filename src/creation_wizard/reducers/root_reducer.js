import { combineReducers } from 'redux';

import sidebar from './sidebar.reducer';
import main from './main.reducer';
import fullscreen from './fullscreen.reducer';
import chatWindow from './chatwindow.reducer';

export default combineReducers({
  sidebar,
  main,
  fullscreen,
  chatWindow,
});
