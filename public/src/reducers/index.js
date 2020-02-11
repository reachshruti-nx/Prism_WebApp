import {combineReducers} from 'redux';

import tweets from './tweetsReducer';
import user from './userReducer';
import projectDetails from './projectDetailsReducer';

export default combineReducers({
  user,
  tweets,
  projectDetails
});