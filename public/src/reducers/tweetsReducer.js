const initialState = {
  fetching: false,
  fetched: false,
  tweets: [],
  error: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_TWEETS_PENDING':
      return {...state,
        fetching:true
      };
      break;
    case 'FETCH_TWEETS_FULFILLED':
      return {...state,
        fetching:false,
        fetched:true,
        tweets: action.payload.data
      };
      break;
    case 'FETCH_TWEETS_REJECTED':
      return {...state,
        fetching:false,
        fetched: true,
        error:action.payload
      };
      break;
  }
  return state;
};