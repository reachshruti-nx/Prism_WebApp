import {combineReducers} from 'redux';

import loginReducer from './loginReducer';
import clusterReducer from './clusterReducer';

export default combineReducers({
  loginReducer,
  clusterReducer
});