import {types} from './section.reducer';

/**
 *
 * @param data
 * @returns {Function}
 */
export const setSection = (data = null) => {
  return dispatch => {
    dispatch({type: types.SET, data});
  };
};
