import {combineReducers} from 'redux';

import loginReducer from './loginReducer';
import clusterReducer from './clusterReducer';
import alertsReducer from './alertsReducer';
import tasksReducer from './tasksReducer';

export default combineReducers({
  loginReducer,
  clusterReducer,
  alertsReducer,
  tasksReducer
});