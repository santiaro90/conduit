import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { ConduitState } from 'packages/core/types';
import { UserCredentials, UserProfile } from 'packages/api/types';

export type AuthState = {
  readonly loggedIn: boolean;
  readonly currentUser: UserProfile | null;
};

export enum AuthActionType {
  AUTH_LOGIN_SUCCESS = 'conduit/AUTH_LOGIN_SUCCESS',
}

export type LoginSuccessAction = {
  type: AuthActionType.AUTH_LOGIN_SUCCESS;
  payload: UserProfile;
};

export type LoginAction = (
  credentials: UserCredentials
) => ThunkAction<void, ConduitState, undefined, AnyAction>;
