import { combineReducers } from 'redux';

import settings from './settings';
import nodes from './nodes';
import fields from './fields';

export default combineReducers({
  settings,
  nodes,
  fields,
});
