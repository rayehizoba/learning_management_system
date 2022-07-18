import {types} from './course.reducer';
import AxiosConfig from "../../lib/AxiosConfig";
import axios from "../../lib/axios";

/**
 *
 * @param data
 * @returns {Function}
 */
export const setCourse = (data = null) => {
    return dispatch => {
        dispatch({type: types.SET, data});
    };
};

/**
 *
 * @param data
 * @returns {function(*): Promise<*>}
 */
export const storeCourse = (data) => {
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
export const updateCourse = (id, data) => {
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

/**
 *
 * @param id
 * @returns {function(*): Promise<AxiosResponse<any>>}
 */
export const deleteCourse = (id) => {
    return dispatch => {
        dispatch({type: types.DELETE_START});
        const url = AxiosConfig.getEndpointAddress() + "/courses/" + id;
        return axios.delete(url, AxiosConfig.getConfig(),)
            .then((response) => {
                dispatch({
                    type: types.DELETE_FULFILLED,
                    data: id,
                });
            })
            .catch(function (error) {
                dispatch({
                    type: types.DELETE_REJECTED,
                    data: error.response.data,
                });
            });
    }
}

/**
 *
 * @param id
 * @returns {function(*): Promise<AxiosResponse<any>>}
 */
export const fetchCourse = (id) => {
    return dispatch => {
        dispatch({type: types.FETCH_START});
        const url = AxiosConfig.getEndpointAddress() + "/courses/" + id;
        return axios.get(url, AxiosConfig.getConfig())
            .then(response => {
                dispatch({
                    type: types.FETCH_FULFILLED,
                    data: response.data
                });
            })
            .catch(error => {
                dispatch({
                    type: types.FETCH_REJECTED,
                    data: error.response.data,
                });
            });
    }
}
