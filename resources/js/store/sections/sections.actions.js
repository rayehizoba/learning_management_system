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
export const createSection = () => {
    return dispatch => {
        dispatch({type: types.CREATE});
    }
}
