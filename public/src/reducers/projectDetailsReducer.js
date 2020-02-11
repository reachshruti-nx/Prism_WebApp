import Immutable from 'immutable';

const initialState = {
  name: '',
  owner: '',
  sponser: '',
  description: '',
  members: []
};

export default function reducer(state = initialState, action) {
  let modifiedState = Immutable.fromJS(state);
  console.log('Action ',action);
  const { payload } = action;
  switch (action.type) {
    case 'GET_PROJECT_DATA_FULLFILLED':
      modifiedState = modifiedState
        .setIn(['name'], payload.name)
        .setIn(['owner'], payload.owner)
        .setIn(['sponser'], payload.sponser)
        .setIn(['description'], payload.description)
        .setIn(['members'], payload.members);
      break;
  }
  return modifiedState.toJSON();
};

