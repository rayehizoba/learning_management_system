import {types} from "./questions.reducer";
import AxiosConfig from "../../lib/AxiosConfig";
import axios from "../../lib/axios";

/**
 *
 * @param quiz_id
 * @returns {function(*): Promise<AxiosResponse<any>>}
 */
export const fetchQuestions = (quiz_id) => {
    return dispatch => {
        dispatch({type: types.FETCH_START});
        const url = AxiosConfig.getEndpointAddress() + "/quizzes/" + quiz_id + "/questions";
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
export const clearQuestions = () => {
    return dispatch => {
        dispatch({type: types.CLEAR_COLLECTION});
    }
}

/**
 *
 * @returns {(function(*): void)|*}
 */
export const createQuestion = () => {
    return dispatch => {
        dispatch({type: types.CREATE});
    }
}

/**
 *
 * @param quiz_id
 * @param questions
 * @returns {function(*): Promise<AxiosResponse<any>>}
 */
export const storeQuestions = (quiz_id, questions) => {
    return dispatch => {
        dispatch({type: types.STORE_START});
        const url = AxiosConfig.getEndpointAddress() + "/quizzes/" + course_id + "/questions";
        return axios.post(url, questions, AxiosConfig.getAuthConfig())
            .then(response => {
                dispatch({type: types.STORE_FULFILLED, data: response.data});
            })
            .catch(error => {
                dispatch({type: types.STORE_REJECTED, data: error});
            });
    }
}
