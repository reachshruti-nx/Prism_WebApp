// Libraries
import Immutable from 'immutable';

const initialState = {
  tasks: []
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
    case 'SET_TASKS_DETAILS':
    modifiedState = modifiedState
        .setIn(['tasks'], action.response)
      break;
    default: break;
  }

  return modifiedState.toJSON();
}