export default class AxiosConfig {
  static _token = "";

  static _config = {
    headers: {
      Accept: "application/json, text/javascript, /; q=0.01",
      "Content-Type": "application/json"
    }
  };

  static baseEndpointAddress = 'http://lms.test';
  static endpointAddress = 'http://lms.test/api';

  /**
   *
   * @param token
   */
  static setAuthToken(token) {
    AxiosConfig._token = token;
  }

  /**
   *
   * @param language
   */
  static setLanguage(language) {
    AxiosConfig._config.headers["Accept-Language"] = language;
  }

  /**
   *
   * @returns {string}
   */
  static getAuthToken() {
    return AxiosConfig._token;
  }


  /**
   *
   * @returns {object}
   */
  static getConfig() {
    return AxiosConfig._config;
  }

  /**
   *
   * @returns {object}
   */
  static getAuthConfig() {
    return {
      headers: {
        ...AxiosConfig._config.headers,
        //Authorization: "Bearer " + AxiosConfig._token
      }
    };
  }

  /**
   *
   */
  static getEndpointAddress() {
    return AxiosConfig.endpointAddress;
  }

  /**
   *
   */
  static getBaseEndpointAddress() {
    return AxiosConfig.baseEndpointAddress;
  }

  /**
   *
   * @param params
   * @returns {string}
   */
  static objectToURLQuery(params = {}) {
    let arResult = [];
    Object.keys(params).forEach(key => {
      if (params[key] !== null) {
        arResult.push(key + "=" + params[key]);
      }
    });
    return arResult.join("&");
  }
}
