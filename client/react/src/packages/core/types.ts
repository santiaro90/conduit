import { AnyAction, Store } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { AuthState } from 'packages/auth/types';

export type ConduitState = {
  auth: AuthState;
};

export interface ConduitStore extends Store<ConduitState> {
  dispatch: ThunkDispatch<ConduitState, undefined, AnyAction>;
}
