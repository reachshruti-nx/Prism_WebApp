const initialState = {
  user: {
    id: null,
    name: null,
    age: null
  },
  fetching: false,
  fetched: false,
  error: null
};

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case 'FETCH_USER_PENDING':
      return {
        ...state,
        fetching:true
      };
      break;
    case 'FETCH_USER_FULFILLED':
      return {...state,
        fetching:false,
        fetched:true,
        user: action.payload
      };
      break;
    case 'FETCH_USER_REJECTED':
      return {
        ...state,
        fetching:false,
        fetched: true,
        error:action.payload
      };
      break;
    case 'SET_USER_NAME':
      return {
        ...state,
        user: {...state.user, name: action.payload
        }
      }
      break;
    case 'SET_USER_AGE':
      return {
        ...state,
        user: {...state.user, name:action.payload
        }
      }
      break;
  }
  return state;
};