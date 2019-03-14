import { updateObject } from '../reducers/utility'
import { 
    FETCH_GUESTS_BEGIN, 
    FETCH_GUESTS_SUCCESS, 
    FETCH_GUESTS_FAILURE
} from '../actions'

const initialGuestState = {
    guests: [],
    loading: false,
    error: null
}

const fetchGuestBegin = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const fetchGuestSuccess = (state, action) => {
  return updateObject(state, {
    guests: action.guests,
    error: null,
    loading: false
  });
};

const fetchGuestFailure = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const guestReducer = (state = initialGuestState, action) => {
  switch (action.type) {
    case FETCH_GUESTS_BEGIN:
      return fetchGuestBegin(state, action);
    case FETCH_GUESTS_SUCCESS:
      return fetchGuestSuccess(state, action);
    case FETCH_GUESTS_FAILURE:
      return fetchGuestFailure(state, action);
    default:
      return state;
  }
};

export default guestReducer;