import axios from 'axios'

export const FETCH_GUESTS_BEGIN   = 'FETCH_GUESTS_BEGIN';
export const FETCH_GUESTS_SUCCESS = 'FETCH_GUESTS_SUCCESS';
export const FETCH_GUESTS_FAILURE = 'FETCH_GUESTS_FAILURE';

export const fetchGuestBegin = () => ({
  type: FETCH_GUESTS_BEGIN
});

export const fetchGuestsSuccess = guests => ({
  type: FETCH_GUESTS_SUCCESS,
  guests
});

export const fetchGuestsFailure = error => ({
  type: FETCH_GUESTS_FAILURE,
  payload: { error }
});

export function fetchGuests() {
  return dispatch => {
    dispatch(fetchGuestBegin());
    axios
      .get("http://127.0.0.1:8000/guests/")
      .then(res => {
          const guests = res.data;
        dispatch(fetchGuestsSuccess(guests));
      })
      .catch(err => {
        dispatch(fetchGuestsFailure());
      });
  };
};
