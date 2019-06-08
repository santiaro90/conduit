import { combineReducers } from 'redux';

import { ConduitState } from './types';

import auth from 'packages/auth/auth.reducer';
import user from 'packages/user/user.reducer';

const reducer = combineReducers<ConduitState>({
  auth,
  user,
});

export default reducer;
