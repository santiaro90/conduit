import { AnyAction, Store } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { AuthState } from 'packages/auth/types';
import { GenericError } from 'packages/api/types';
import { UserState } from 'packages/user/types';

export type ConduitState = {
  auth: AuthState;
  user: UserState;
};

export type ConduitSuccessAction<T, P> = {
  type: string;
  payload: P;
};

export type ConduitErrorAction<T> = {
  type: T;
  payload: GenericError;
};

export interface ConduitStore extends Store<ConduitState> {
  dispatch: ThunkDispatch<ConduitState, undefined, AnyAction>;
}
