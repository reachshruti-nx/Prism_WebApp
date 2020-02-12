// Libraries
import Immutable from 'immutable';

const initialState = {
  alerts: []
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
    case 'SET_ALERTS_DETAILS':
    modifiedState = modifiedState
        .setIn(['alerts'], action.response)
      break;
    default: break;
  }

  return modifiedState.toJSON();
}