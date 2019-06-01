import { SignUpAction, SignUpActionType, SignUpSuccessAction } from './types';

import { SignUpSuccess, UserCredentials, UserProfile } from 'packages/api/types';

import api from 'packages/api/user';

const signUpSuccess = (user: UserProfile): SignUpSuccessAction => ({
  type: SignUpActionType.USER_SIGNUP_SUCCESS,
  payload: user,
});

export const signUp: SignUpAction = (credentials: UserCredentials) => async (
  dispatch
): Promise<SignUpSuccessAction> => {
  const response = (await api.signUp(credentials)) as SignUpSuccess;

  return dispatch(signUpSuccess(response.user));
};
