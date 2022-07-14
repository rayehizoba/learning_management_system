import axios from "../../lib/axios";
import AxiosConfig from '../../lib/AxiosConfig';
import {types} from './user.reducer';

/**
 *
 * @param email
 * @param password
 * @returns {Function}
 */
export const login = (email, password) => {
  return async dispatch => {
    dispatch({type: types.LOGIN_START});

    const url = AxiosConfig.getEndpointAddress() + "/login";
    await axios.get(AxiosConfig.getBaseEndpointAddress() + '/sanctum/csrf-cookie');
    await axios.post(
      url,
      {
        email,
        password,
      },
      AxiosConfig.getConfig(),
    )
      .then((response) => {

        AxiosConfig.setAuthToken(response.data.token);

        dispatch({
          type: types.LOGIN_FULFILLED,
          data: response.data,
        });

      })
      .catch(function (error) {

        dispatch({
          type: types.LOGIN_REJECTED,
          data: error.response.data.errors || error.response.data,
        });

      });
  }
};


/**
 *
 * @returns {Function}
 */
export const checkAuth = () => {

  return async dispatch => {

    dispatch({type: types.CHECK_AUTH_START});

    const url = AxiosConfig.getEndpointAddress() + "/check-auth";
    await axios.get(
      url,
      AxiosConfig.getConfig(),
    )
      .then((response) => {

        AxiosConfig.setAuthToken(response.data.token);

        dispatch({
          type: types.CHECK_AUTH_FULFILLED,
          data: response.data,
        });

      })
      .catch(function (error) {

        dispatch({
          type: types.CHECK_AUTH_REJECTED,
          data: error,
        });

      });
  }
};

/**
 *
 * @returns {Function}
 */
export const logout = () => {
  return dispatch => {

    if (AxiosConfig.getAuthToken()) {
      const url = AxiosConfig.getEndpointAddress() + "/logout";

      axios.post(
        url,
        null,
        AxiosConfig.getAuthConfig(),
      );

      AxiosConfig.setAuthToken(null);
    }

    dispatch({type: types.LOGOUT});

  }
};

/**
 *
 * @param data
 * @returns {Function}
 */
export const register = (data) => {

  return async dispatch => {

    dispatch({type: types.REGISTER_START});

    const url = AxiosConfig.getEndpointAddress() + "/register";

    await axios.post(
      url,
      data,
      AxiosConfig.getConfig(),
    )
      .then((response) => {

        dispatch({
          type: types.REGISTER_FULFILLED,
          data: response.data,
        });

      })
      .catch(function (error) {

        dispatch({
          type: types.REGISTER_REJECTED,
          data: error.response.data.errors || error.response.data,
        });

      });
  }
};

/**
 *
 * @param email
 * @returns {Function}
 */
export const forgotPassword = (email) => {

  return async dispatch => {

    dispatch({type: types.PASSWORD_RESET_START});

    const url = AxiosConfig.getEndpointAddress() + "/forgot-password";

    await axios.post(
      url,
      {
        email,
      },
      AxiosConfig.getConfig(),
    )
      .then((response) => {

        alert(response.data.status);

        dispatch({
          type: types.PASSWORD_RESET_FULFILLED,
          data: { success: true },
        });

      })
      .catch(function (error) {

        dispatch({
          type: types.PASSWORD_RESET_REJECTED,
          data: error.response.data.errors || error.response.data,
        });

      });
  }
};

/**
 *
 * @param token
 * @param email
 * @param password
 * @param password_confirmation
 * @returns {Function}
 */
export const passwordReset = (token, email, password, password_confirmation) => {

  return async dispatch => {

    dispatch({type: types.PASSWORD_RESET_START});

    const url = AxiosConfig.getEndpointAddress() + "/password/reset";

    await axios.post(
      url,
      {
        token,
        email,
        password,
        password_confirmation
      },
      AxiosConfig.getConfig(),
    )
      .then((response) => {

        if (response.data.token) {
          AxiosConfig.setAuthToken(response.data.token);
        }

        dispatch({
          type: types.PASSWORD_RESET_FULFILLED,
          data: response.data,
        });

      })
      .catch(function (error) {

        dispatch({
          type: types.PASSWORD_RESET_REJECTED,
          data: error,
        });

      });
  }
};

/**
 *
 * @param tour
 * @returns {Function}
 */
export const setTour = (tour = 1) => {
  return dispatch => {
    const url = AxiosConfig.getEndpointAddress() + "/user/tour";

    axios.post(
      url,
      {tour},
      AxiosConfig.getAuthConfig()
    )
      .then(response => {

        dispatch({type: types.SET_TOUR, data: tour})

      });
  }
};

/**
 *
 * @param data
 * @returns {Function}
 */
export const editProfile = (data) => {
  return async dispatch => {

    dispatch({type: types.EDIT_START});

    const url = AxiosConfig.getEndpointAddress() + "/settings/profile";

    await axios.post(
      url,
      data,
      AxiosConfig.getAuthConfig(),
    )
      .then(response => {

        dispatch({type: types.EDIT_FULFILLED, data: response.data});

      })
      .catch(error => {

        dispatch({type: types.EDIT_REJECTED, data: error});

      });
  }
};

/**
 *
 * @param data
 * @returns {Function}
 */
export const updatePassword = (data) => {
  return async dispatch => {

    dispatch({type: types.EDIT_START});

    const url = AxiosConfig.getEndpointAddress() + "/settings/password";

    await axios.post(
      url,
      data,
      AxiosConfig.getAuthConfig(),
    )
      .then(response => {

        dispatch({type: types.EDIT_FULFILLED, data: response.data});

      })
      .catch(error => {

        dispatch({type: types.EDIT_REJECTED, data: error});

      });
  }
};

/**
 *
 * @param data
 * @returns {Function}
 */
export const uploadPhoto = (data) => {
  return dispatch => {

    dispatch({type: types.PHOTO_UPLOAD_START});

    const url = AxiosConfig.getEndpointAddress() + "/user/photo";

    axios.post(
      url,
      data,
      AxiosConfig.getAuthConfig()
    )
      .then(response => {

        dispatch({type: types.PHOTO_UPLOAD_FULFILLED, data: response.data});

      })
      .catch(error => {

        dispatch({type: types.PHOTO_UPLOAD_REJECTED, data: error});

      });
  }
};

/**
 *
 * @param data
 * @returns {Function}
 */
export const editPrivacy = (data) => {
  return async dispatch => {

    dispatch({type: "USER_PROFILE_EDIT"});

    const url = AxiosConfig.getEndpointAddress() + "/settings/privacy";

    await axios.patch(
      url,
      data,
      AxiosConfig.getAuthConfig(),
    )
      .then(response => {

        dispatch({type: "USER_PROFILE_EDIT_FULFILLED", data: response.data});

      })
      .catch(error => {

        dispatch({type: "USER_PROFILE_EDIT_REJECTED", data: error});

      });
  }
};

/**
 *
 * @param locale
 * @returns {Function}
 */
export const setLocale = (locale) => {
  return dispatch => {
    const url = AxiosConfig.getEndpointAddress() + "/user/locale";

    axios.post(
      url,
      {locale},
      AxiosConfig.getAuthConfig()
    )
      .then(response => {

        dispatch({type: "USER_LOCALE_FULFILLED", data: locale})

      });
  }
};

/**
 *
 * @param data
 * @returns {Function}
 */
export const setProfile = (data) => {
  return dispatch => {
    dispatch({type: types.SET_PROFILE, data});
  };
};
