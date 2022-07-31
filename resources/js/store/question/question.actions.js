import {types} from './question.reducer';

/**
 *
 * @param data
 * @returns {Function}
 */
export const setQuestion = (data = null) => {
  return dispatch => {
    dispatch({type: types.SET, data});
  };
};
