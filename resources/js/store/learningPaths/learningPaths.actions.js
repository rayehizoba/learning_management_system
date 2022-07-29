import {types} from "./learningPaths.reducer";
import axios from "../../lib/axios";
import AxiosConfig from "../../lib/AxiosConfig";

/**
 *
 * @param page
 * @param filters
 * @returns {function(*): Promise<AxiosResponse<T> | never>}
 */
export const fetchLearningPaths = (page = 1, filters) => {
  return dispatch => {
    dispatch({type: types.FETCH_START});
    return axios.get(
      (AxiosConfig.getEndpointAddress() + '/learning_paths?' + AxiosConfig.objectToURLQuery({page, ...filters})),
      AxiosConfig.getAuthConfig(),
    )
      .then((response) => {
        dispatch({type: types.FETCH_FULFILLED, data: response.data,});
      })
      .catch(function (error) {
        dispatch({type: types.FETCH_REJECTED, data: error,});
      });
  }
};
