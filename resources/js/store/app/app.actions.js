import {types} from "./app.reducer";

/**
 *
 * @returns {Function}
 */
export const clearErrors = () => {
  return dispatch => {
    dispatch({type: types.CLEAR_ERRORS});
  }
};

/**
 *
 * @returns {Function}
 */
export const toggleAside = () => {
  return dispatch => {
    dispatch({type: types.TOGGLE_ASIDE});
  }
};
