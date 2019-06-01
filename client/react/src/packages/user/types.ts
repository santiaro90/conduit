import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { ConduitState } from 'packages/core/types';
import { GenericError, UserCredentials, UserProfile } from 'packages/api/types';

export enum SignUpActionType {
  USER_SIGNUP_SUCCESS = 'conduit/USER_SIGNUP_SUCCESS',
  USER_SIGNUP_ERROR = 'conduit/USER_SIGNUP_ERROR',
}

export type UserState = UserProfile | null;

export type SignUpSuccessAction = {
  type: SignUpActionType.USER_SIGNUP_SUCCESS;
  payload: UserProfile;
};

export type SignUpAction = (
  credentials: UserCredentials
) => ThunkAction<void, ConduitState, undefined, AnyAction>;
