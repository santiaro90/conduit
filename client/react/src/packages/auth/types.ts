import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

import {
  ConduitErrorAction,
  ConduitState,
  ConduitSuccessAction,
} from 'packages/core/types';

import { LoginCredentials, UserProfile } from 'packages/api/types';

export type AuthState = {
  readonly loggedIn: boolean;
  readonly error: string | null;
};

export enum AuthActionType {
  AUTH_LOGIN_SUCCESS = 'conduit/AUTH_LOGIN_SUCCESS',
  AUTH_LOGIN_ERROR = 'conduit/AUTH_LOGIN_ERROR',
}

export type LoginSuccessAction = ConduitSuccessAction<
  AuthActionType.AUTH_LOGIN_SUCCESS,
  UserProfile
>;

export type LoginErrorAction = ConduitErrorAction<AuthActionType.AUTH_LOGIN_ERROR>;

export type LoginAction = (
  credentials: LoginCredentials
) => ThunkAction<void, ConduitState, undefined, AnyAction>;
