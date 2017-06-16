import { combineReducers } from 'redux';

import settings from './settings.reducer';
import nodes from './nodes';
import fields from './fields.reducer';

export default combineReducers({
  settings,
  nodes,
  fields,
});
