import { combineReducers } from 'redux';

import sidebar from './sidebar.reducer';
import main from './main.reducer';
import fullscreen from './fullscreen.reducer';

export default combineReducers({
  sidebar,
  main,
  fullscreen,
});
