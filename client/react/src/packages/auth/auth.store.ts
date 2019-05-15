import { AuthActionType, LoginAction, LoginSuccessAction } from './types';

import { UserCredentials, UserProfile } from 'packages/api/types';

import api from 'packages/api/auth';

const loginSuccess = (user: UserProfile): LoginSuccessAction => ({
  type: AuthActionType.AUTH_LOGIN_SUCCESS,
  payload: user,
});

export const login: LoginAction = (credentials: UserCredentials) => async (
  dispatch
): Promise<LoginSuccessAction> => {
  const response = await api.login(credentials);

  return dispatch(loginSuccess(response.user));
};
