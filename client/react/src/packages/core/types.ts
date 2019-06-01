import { AnyAction, Store } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { AuthState } from 'packages/auth/types';
import { UserState } from 'packages/user/types';

export type ConduitState = {
  auth: AuthState;
  user: UserState;
};

export interface ConduitStore extends Store<ConduitState> {
  dispatch: ThunkDispatch<ConduitState, undefined, AnyAction>;
}
