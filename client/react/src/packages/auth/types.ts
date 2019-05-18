import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { ConduitState } from 'packages/core/types';
import { GenericError, UserCredentials, UserProfile } from 'packages/api/types';

export type AuthState = {
  readonly currentUser: UserProfile | null;
  readonly loggedIn: boolean;
  readonly error: string | null;
};

export enum AuthActionType {
  AUTH_LOGIN_SUCCESS = 'conduit/AUTH_LOGIN_SUCCESS',
  AUTH_LOGIN_ERROR = 'conduit/AUTH_LOGIN_ERROR',
}

export type LoginSuccessAction = {
  type: AuthActionType.AUTH_LOGIN_SUCCESS;
  payload: UserProfile;
};

export type LoginErrorAction = {
  type: AuthActionType.AUTH_LOGIN_ERROR;
  payload: GenericError;
};

export type LoginAction = (
  credentials: UserCredentials
) => ThunkAction<void, ConduitState, undefined, AnyAction>;
