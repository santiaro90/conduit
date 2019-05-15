import { Reducer } from 'redux';
import { AuthState, AuthActionType } from './types';

const initialState: AuthState = {
  currentUser: null,
  loggedIn: false,
};

const authReducer: Reducer<AuthState> = (state = initialState, action) => {
  switch (action.type) {
    case AuthActionType.AUTH_LOGIN_SUCCESS:
      return { currentUser: null, loggedIn: true };

    default:
      return state;
  }
};

export default authReducer;
