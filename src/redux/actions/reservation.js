import * as API from '../service';

const actionTypes = {
  RESERVATIONS_FETCH_SUCCESS: 'RESERVATIONS_FETCH_SUCCESS',
  RESERVATIONS_FETCH_REQUEST: 'RESERVATIONS_FETCH_REQUEST',
  RESERVATIONS_FETCH_FAILURE: 'RESERVATIONS_FETCH_FAILURE',
  RESERVATION_FETCH_SUCCESS: 'RESERVATION_FETCH_SUCCESS',
  RESERVATION_FETCH_FAILURE: 'RESERVATION_FETCH_FAILURE',
  RESERVATION_CREATE_SUCCESS: 'RESERVATION_CREATE_SUCCESS',
  RESERVATION_CREATE_FAILURE: 'RESERVATION_CREATE_FAILURE',
  RESERVATION_DELETE_SUCCESS: 'RESERVATION_DELETE_SUCCESS',
  RESERVATION_DELETE_FAILURE: 'RESERVATION_DELETE_FAILURE',
};

export const createReservation = (reservation,navigate) => (dispatch) => {
  API.newReservation(reservation)
    .then((reservation) => {
      dispatch({
        type: actionTypes.RESERVATION_CREATE_SUCCESS,
        payload: reservation,
      });
      // navigate('/reservations');
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.RESERVATION_CREATE_FAILURE,
        payload: error,
      });
    });
};

export const fetchReservations = () => (dispatch) => {
  dispatch({
    type: actionTypes.RESERVATIONS_FETCH_REQUEST,
  });
  API.fetchReservations()
    .then((reservations) => {
      dispatch({
        type: actionTypes.RESERVATIONS_FETCH_SUCCESS,
        payload: reservations.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.RESERVATIONS_FETCH_FAILURE,
        payload: error,
      });
    });
};

export const deleteReservation = (id, navigate) => (dispatch) => {
  API.deleteReservation(id)
    .then((res) => {
      dispatch({
        type: actionTypes.RESERVATION_DELETE_SUCCESS,
        payload: res,
      });
      navigate('/bikes');
    })
    .catch((err) => {
      dispatch({
        type: actionTypes.RESERVATION_DELETE_FAILURE,
        payload: err,
      });
    });
};
