import { Reducer } from 'redux';

import { AuthState, AuthActionType, LoginErrorAction } from './types';

const initialState: AuthState = {
  currentUser: null,
  error: null,
  loggedIn: false,
};

const authReducer: Reducer<AuthState> = (state = initialState, action) => {
  switch (action.type) {
    case AuthActionType.AUTH_LOGIN_SUCCESS:
      return { currentUser: null, error: null, loggedIn: true };

    case AuthActionType.AUTH_LOGIN_ERROR:
      return {
        currentUser: null,
        error: (action as LoginErrorAction).payload.error,
        loggedIn: false,
      };

    default:
      return state;
  }
};

export default authReducer;
