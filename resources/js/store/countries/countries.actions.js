import {types} from "./countries.reducer";
import axios from "../../lib/axios";
import AxiosConfig from "../../lib/AxiosConfig";

/**
 *
 * @returns {function(*): Promise<AxiosResponse<T> | never>}
 */
export const fetchCountries = () => {
  return dispatch => {
    dispatch({type: types.FETCH_START});
    const url = AxiosConfig.getEndpointAddress() + '/countries';
    return axios.get(url, AxiosConfig.getConfig(),)
      .then((response) => {
        dispatch({type: types.FETCH_FULFILLED, data: response.data,});
      })
      .catch(function (error) {
        dispatch({type: types.FETCH_REJECTED, data: error,});
      });
  }
};
