import {types} from './course.reducer';
import AxiosConfig from "../../lib/AxiosConfig";
import axios from "../../lib/axios";

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

/**
 *
 * @param data
 * @returns {function(*): Promise<*>}
 */
export const store = (data) => {
    return async dispatch => {
        dispatch({type: types.STORE_START});
        const url = AxiosConfig.getEndpointAddress() + "/courses";
        return await axios.post(url, data, AxiosConfig.getConfig(),)
            .then((response) => {
                dispatch({
                    type: types.STORE_FULFILLED,
                    data: response.data,
                });
            })
            .catch(function (error) {
                dispatch({
                    type: types.STORE_REJECTED,
                    data: error.response.data,
                });
            });
    }
};

/**
 *
 * @param id
 * @param data
 * @returns {function(*): Promise<AxiosResponse<any>>}
 */
export const update = (id, data) => {
    return async dispatch => {
        dispatch({type: types.UPDATE_START});
        const url = AxiosConfig.getEndpointAddress() + "/courses/" + id;
        return await axios.put(url, data, AxiosConfig.getConfig(),)
            .then((response) => {
                dispatch({
                    type: types.UPDATE_FULFILLED,
                    data: response.data,
                });
            })
            .catch(function (error) {
                dispatch({
                    type: types.UPDATE_REJECTED,
                    data: error.response.data,
                });
            });
    }
};
