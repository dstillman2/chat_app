import { combineReducers } from 'redux';

import settings from './settings';
import nodes from './nodes';
import fields from './fields';
import chatWindow from './chat_window';

export default combineReducers({
  settings,
  nodes,
  fields,
  chatWindow,
});
