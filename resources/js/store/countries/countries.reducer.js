import {types as userTypes} from '../user/user.reducer';

export const types = {
  FETCH_START: 'COUNTRIES/FETCH_START',
  FETCH_FULFILLED: 'COUNTRIES/FETCH_FULFILLED',
  FETCH_REJECTED: 'COUNTRIES/FETCH_REJECTED',
};

const initialState = {
  fetch: false,
  fetchSuccess: false,
  fetchError: null,
  collection: [],
};

export default function reducer(state = {...initialState}, action) {
  switch (action.type) {

    case types.FETCH_START:
      return {
        ...state,
        fetch: true,
        fetchSuccess: false,
        fetchError: null
      };

    case types.FETCH_FULFILLED:
      return {
        ...state,
        fetch: false,
        fetchSuccess: true,
        collection: action.data,
      };

    case types.FETCH_REJECTED:
      return {
        ...state,
        fetch: false,
        fetchSuccess: false,
        fetchError: action.data
      };

    case userTypes.LOGOUT:
      return {
        ...initialState,
      };

    default:
      return state;
  }
}
