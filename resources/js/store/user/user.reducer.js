import {types as appTypes} from '../app/app.reducer';

export const types = {
  LOGIN_START: 'USER/LOGIN_START',
  LOGIN_FULFILLED: 'USER/LOGIN_FULFILLED',
  LOGIN_REJECTED: 'USER/LOGIN_REJECTED',

  REGISTER_START: 'USER/REGISTER_START',
  REGISTER_FULFILLED: 'USER/REGISTER_FULFILLED',
  REGISTER_REJECTED: 'USER/REGISTER_REJECTED',

  PHOTO_UPLOAD_START: 'USER/PHOTO_UPLOAD_START',
  PHOTO_UPLOAD_FULFILLED: 'USER/PHOTO_UPLOAD_FULFILLED',
  PHOTO_UPLOAD_REJECTED: 'USER/PHOTO_UPLOAD_REJECTED',

  CHECK_AUTH_START: 'USER/CHECK_AUTH_START',
  CHECK_AUTH_FULFILLED: 'USER/CHECK_AUTH_FULFILLED',
  CHECK_AUTH_REJECTED: 'USER/CHECK_AUTH_REJECTED',

  EDIT_START: 'USER/EDIT_START',
  EDIT_FULFILLED: 'USER/EDIT_FULFILLED',
  EDIT_REJECTED: 'USER/EDIT_REJECTED',

  PASSWORD_RESET_START: 'USER/PASSWORD_RESET_START',
  PASSWORD_RESET_FULFILLED: 'USER/PASSWORD_RESET_FULFILLED',
  PASSWORD_RESET_REJECTED: 'USER/PASSWORD_RESET_REJECTED',

  SET_TOUR: 'USER/SET_TOUR',

  SET_PROFILE: 'USER/SET_PROFILE',

  LOGOUT: 'USER/LOGOUT',
};

export const initialState = {
  register: false,
  registerSuccess: false,
  registerError: null,

  login: false,
  loginSuccess: false,
  loginError: null,

  checkAuth: false,
  checkAuthSuccess: false,
  checkAuthError: null,

  passwordReset: false,
  passwordResetSuccess: false,
  passwordResetError: null,

  edit: false,
  editSuccess: false,
  editError: null,

  photoUpload: false,
  photoUploadSuccess: false,
  photoUploadError: null,

  model: null,
  token: null,
  profile: null,
};

export default function reducer(state = {...initialState}, action) {
  switch (action.type) {

    case types.SET_TOUR:
      return {
        ...state,
        model: {
          ...state.model,
          tour: action.data
        }
      };

    case types.REGISTER_START:
      return {
        ...state,
        register: true,
        registerSuccess: false,
        registerError: null,
      };

    case types.REGISTER_FULFILLED:
      return {
        ...state,
        register: false,
        registerSuccess: true,

        token: action.data.token,
      };

    case types.REGISTER_REJECTED:
      return {
        ...state,
        register: false,
        registerSuccess: false,
        registerError: action.data,
      };

    case types.LOGIN_START:
      return {
        ...state,
        login: true,
        loginSuccess: false,
        loginError: null,
      };

    case types.LOGIN_FULFILLED:
      return {
        ...state,
        login: false,
        loginSuccess: true,

        model: action.data.user,
        token: action.data.token,
      };

    case types.LOGIN_REJECTED:
      return {
        ...state,
        login: false,
        loginSuccess: false,
        loginError: action.data,
      };

    case types.PHOTO_UPLOAD_START:
      return {
        ...state,
        photoUpload: true,
        photoUploadSuccess: false,
        photoUploadError: null,
      };

    case types.PHOTO_UPLOAD_FULFILLED:
      return {
        ...state,
        photoUpload: false,
        photoUploadSuccess: true,
        model: action.data,
        profile: (state.profile && state.profile.id === action.data.id) ? action.data : state.profile,
      };

    case types.PHOTO_UPLOAD_REJECTED:
      return {
        ...state,
        photoUpload: false,
        photoUploadSuccess: false,
        photoUploadError: action.data,
      };

    case types.CHECK_AUTH_START:
      return {
        ...state,
        checkAuth: true,
        checkAuthSuccess: false,
        checkAuthError: null,
      };

    case types.CHECK_AUTH_FULFILLED:
      return {
        ...state,
        checkAuth: false,
        checkAuthSuccess: true,

        model: action.data.user,
        token: action.data.token,
      };

    case types.CHECK_AUTH_REJECTED:
      return {
        ...state,
        checkAuth: false,
        checkAuthSuccess: false,
        checkAuthError: action.data,
      };


    case types.PASSWORD_RESET_START:
      return {
        ...state,
        passwordReset: true,
        passwordResetSuccess: false,
        passwordResetError: null,
      };

    case types.PASSWORD_RESET_FULFILLED:
      return {
        ...state,
        passwordReset: false,
        passwordResetSuccess: !!action.data.success || !!action.data.token,
        passwordResetError: !action.data.success && !action.data.token ? true : null,

        model: action.data.user ? action.data.user : null,
        token: action.data.token ? action.data.token : null,
      };

    case types.PASSWORD_RESET_REJECTED:
      return {
        ...state,
        passwordReset: false,
        passwordResetSuccess: false,
        passwordResetError: action.data,
      };

    case types.EDIT_START:
      return {
        ...state,
        edit: true,
        editSuccess: false,
        editError: null,
      };

    case types.EDIT_FULFILLED:
      return {
        ...state,
        edit: false,
        editSuccess: true,
        model: action.data,
      };

    case types.EDIT_REJECTED:
      return {
        ...state,
        edit: false,
        editSuccess: false,
        editError: action.data,
      };

    case types.SET_PROFILE:
      return {
        ...state,
        profile: action.data
      };

    case types.LOGOUT:
      return {
        ...initialState,
      };

    case appTypes.CLEAR_ERRORS:
      return {
        ...initialState,
        model: state.model,
        token: state.token,
      };

    default:
      return state;
  }
}
