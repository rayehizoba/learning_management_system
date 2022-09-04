import {types} from "./courseLearners.reducer";
import AxiosConfig from "../../lib/AxiosConfig";
import axios from "../../lib/axios";

/**
 *
 * @param course_id
 * @param learners
 * @returns {function(*): Promise<AxiosResponse<any>>}
 */
export const assignLearners = (course_id, learners) => {
    return dispatch => {
        dispatch({type: types.ASSIGN_START});
        const url = AxiosConfig.getEndpointAddress() + "/courses/" + course_id + "/learners";
        return axios.put(url, learners, AxiosConfig.getAuthConfig())
            .then((response) => {
                dispatch({type: types.ASSIGN_FULFILLED, data: response.data,});
            })
            .catch(function (error) {
                dispatch({type: types.ASSIGN_REJECTED, data: error,});
            });
    };
};

/**
 *
 * @param course_id
 * @returns {function(*): Promise<AxiosResponse<any>>}
 */
export const fetchLearners = (course_id) => {
    return dispatch => {
        dispatch({type: types.FETCH_START});
        const url = AxiosConfig.getEndpointAddress() + "/courses/" + course_id + "/learners";
        return axios.get(url, AxiosConfig.getAuthConfig())
            .then((response) => {
                dispatch({type: types.FETCH_FULFILLED, data: response.data,});
            })
            .catch(function (error) {
                dispatch({type: types.FETCH_REJECTED, data: error,});
            });
    };
};
