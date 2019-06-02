import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

import {
  ConduitErrorAction,
  ConduitState,
  ConduitSuccessAction,
} from 'packages/core/types';

import { UserCredentials, UserProfile } from 'packages/api/types';

export enum SignUpActionType {
  USER_SIGNUP_SUCCESS = 'conduit/USER_SIGNUP_SUCCESS',
  USER_SIGNUP_ERROR = 'conduit/USER_SIGNUP_ERROR',
}

export type UserState = {
  profile: UserProfile | null;
  error: string | null;
};

export type SignUpSuccessAction = ConduitSuccessAction<
  SignUpActionType.USER_SIGNUP_SUCCESS,
  UserProfile
>;

export type SignUpErrorAction = ConduitErrorAction<SignUpActionType.USER_SIGNUP_ERROR>;

export type SignUpAction = (
  credentials: UserCredentials
) => ThunkAction<void, ConduitState, undefined, AnyAction>;
