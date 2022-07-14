import {types} from './section.reducer';
import AxiosConfig from "../../lib/AxiosConfig";
import axios from "../../lib/axios";

/**
 *
 * @param data
 * @returns {Function}
 */
export const setSection = data => {
  return dispatch => {
    dispatch({type: types.SET, data});
  };
};
