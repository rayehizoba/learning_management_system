import {types} from "./sections.reducer";
import AxiosConfig from "../../lib/AxiosConfig";
import axios from "../../lib/axios";

/**
 *
 * @param course_id
 * @returns {function(*): Promise<AxiosResponse<any>>}
 */
export const fetchSections = (course_id) => {
    return dispatch => {
        dispatch({type: types.FETCH_START});
        const url = AxiosConfig.getEndpointAddress() + "/courses/" + course_id + "/sections";
        return axios.get(url, AxiosConfig.getAuthConfig())
            .then((response) => {
                dispatch({type: types.FETCH_FULFILLED, data: response.data,});
            })
            .catch(function (error) {
                dispatch({type: types.FETCH_REJECTED, data: error,});
            });
    };
};

/**
 *
 * @returns {(function(*): void)|*}
 */
export const clearSections = () => {
    return dispatch => {
        dispatch({type: types.CLEAR_COLLECTION});
    }
}

/**
 *
 * @returns {(function(*): void)|*}
 */
export const createSection = () => {
    return dispatch => {
        dispatch({type: types.CREATE});
    }
}

/**
 *
 * @param course_id
 * @param sections
 * @returns {function(*): Promise<AxiosResponse<any>>}
 */
export const storeSections = (course_id, sections) => {
    return dispatch => {
        dispatch({type: types.STORE_START});
        const url = AxiosConfig.getEndpointAddress() + "/courses/" + course_id + "/sections";
        return axios.post(url, sections, AxiosConfig.getAuthConfig())
            .then(response => {
                dispatch({type: types.STORE_FULFILLED, data: response.data});
            })
            .catch(error => {
                dispatch({type: types.STORE_REJECTED, data: error});
            });
    }
}
