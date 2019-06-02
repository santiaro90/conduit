import {
  SignUpAction,
  SignUpActionType,
  SignUpErrorAction,
  SignUpSuccessAction,
} from './types';

import {
  GenericError,
  SignUpSuccess,
  UserCredentials,
  UserProfile,
} from 'packages/api/types';

import api from 'packages/api/user';

const signUpSuccess = (user: UserProfile): SignUpSuccessAction => ({
  type: SignUpActionType.USER_SIGNUP_SUCCESS,
  payload: user,
});

const signUpError = (error: GenericError): SignUpErrorAction => ({
  type: SignUpActionType.USER_SIGNUP_ERROR,
  payload: error,
});

export const signUp: SignUpAction = (credentials: UserCredentials) => async (
  dispatch
): Promise<SignUpSuccessAction | SignUpErrorAction> => {
  try {
    const response = (await api.signUp(credentials)) as SignUpSuccess;
    return dispatch(signUpSuccess(response.user));
  } catch (e) {
    const error = e as GenericError;
    return dispatch(signUpError(error));
  }
};
