import {types} from './course.reducer';

/**
 *
 * @param data
 * @returns {Function}
 */
export const setCourse = data => {
  return dispatch => {
    dispatch({type: types.SET, data});
  };
};
