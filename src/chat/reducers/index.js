import { combineReducers } from 'redux';

import settings from './settings.reducer';
import nodes from './nodes.reducer';
import fields from './fields.reducer';
import messages from './messages.reducer';
import connect from './connect.reducer';

export default combineReducers({
  settings,
  nodes,
  fields,
  messages,
  connect,
});
