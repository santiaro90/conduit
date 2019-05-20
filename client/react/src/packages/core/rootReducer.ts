import { combineReducers } from 'redux';

import { ConduitState } from './types';

import auth from 'packages/auth/auth.reducer';

const reducer = combineReducers<ConduitState>({
  auth,
});

export default reducer;
