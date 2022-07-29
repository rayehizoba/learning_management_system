import {types} from "./files.reducer";
import AxiosConfig from "../../lib/AxiosConfig";
import axios from "../../lib/axios";

/**
 *
 * @returns {function(*): Promise<AxiosResponse<T> | never>}
 */
export const fetchFiles = () => {
    return dispatch => {
        dispatch({type: types.FETCH_START});
        const url = AxiosConfig.getEndpointAddress() + "/files";
        return axios.get(url, AxiosConfig.getAuthConfig())
            .then((response) => {
                dispatch({type: types.FETCH_FULFILLED, data: response.data,});
            })
            .catch(function (error) {
                dispatch({type: types.FETCH_REJECTED, data: error,});
            });
    };
};
