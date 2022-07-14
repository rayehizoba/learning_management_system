
export const selectUser = (state) => state.user.model;
export const selectProfile = (state) => state.user.profile;
export const selectUserToken = (state) => state.user.token;
export const selectAuthenticated = (state) => Boolean(state.user.token && state.user.model);

export const selectLogin = (state) => state.user.login;
export const selectLoginError = (state) => state.user.loginError;
export const selectLoginSuccess = (state) => state.user.loginSuccess;

export const selectRegister = (state) => state.user.register;
export const selectRegisterError = (state) => state.user.registerError;
export const selectRegisterSuccess = (state) => state.user.registerSuccess;

export const selectPhotoUpload = (state) => state.user.photoUpload;

export const selectEdit = (state) => state.user.edit;
export const selectEditError = (state) => state.user.editError;
export const selectEditSuccess = (state) => state.user.editSuccess;

export const selectPasswordReset = (state) => state.user.passwordReset;
export const selectPasswordResetError = (state) => state.user.passwordResetError;
export const selectPasswordResetSuccess = (state) => state.user.passwordResetSuccess;
