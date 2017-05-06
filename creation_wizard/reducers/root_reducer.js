import { combineReducers } from 'redux';

import sidebar from './sidebar.reducer';
import main from './main.reducer';

export default combineReducers({
  sidebar,
  main,
});
