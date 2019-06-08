import { Reducer } from 'redux';

import { AuthState, AuthActionType, LoginErrorAction } from './types';

const initialState: AuthState = {
  error: null,
  loggedIn: false,
};

const authReducer: Reducer<AuthState> = (state = initialState, action) => {
  switch (action.type) {
    case AuthActionType.AUTH_LOGIN_SUCCESS:
      return { error: null, loggedIn: true };

    case AuthActionType.AUTH_LOGIN_ERROR: {
      const { error } = (action as LoginErrorAction).payload;
      return { error, loggedIn: false };
    }

    default:
      return state;
  }
};

export default authReducer;
