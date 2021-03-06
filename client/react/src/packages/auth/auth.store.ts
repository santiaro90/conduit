import {
  AuthActionType,
  LoginAction,
  LoginErrorAction,
  LoginSuccessAction,
} from './types';

import {
  GenericError,
  LoginCredentials,
  LoginSuccess,
  UserProfile,
} from 'packages/api/types';

import api from 'packages/api/auth';

const loginSuccess = (accessToken: string, user: UserProfile): LoginSuccessAction => {
  localStorage.setItem('access_token', accessToken);

  return {
    type: AuthActionType.AUTH_LOGIN_SUCCESS,
    payload: user,
  };
};

const loginError = (error: GenericError): LoginErrorAction => ({
  type: AuthActionType.AUTH_LOGIN_ERROR,
  payload: error,
});

export const login: LoginAction = (credentials: LoginCredentials) => async (
  dispatch
): Promise<LoginSuccessAction | LoginErrorAction> => {
  try {
    const response = (await api.login(credentials)) as LoginSuccess;
    return dispatch(loginSuccess(response.accessToken, response.user));
  } catch (e) {
    const error = e as GenericError;
    return dispatch(loginError(error));
  }
};
