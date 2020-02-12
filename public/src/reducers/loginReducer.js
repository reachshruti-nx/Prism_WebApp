// Libraries
import Immutable from 'immutable';

const initialState = {
  username: '',
  password: ''
};

/**
 * Receives an action to update state
 * @param {object} state - initial state.
 * @param {object} action - action type.
 * @returns {object} - updated state.
 */
export default function reducer (state = initialState, action) {
  let modifiedState = Immutable.fromJS(state);
  switch (action.type) {
    case 'SET_LOGIN_DETAILS':
    modifiedState = modifiedState
        .setIn(['username'], action.username)
        .setIn(['password'], action.password)
      break;
    default: break;
  }

  return modifiedState.toJSON();
}