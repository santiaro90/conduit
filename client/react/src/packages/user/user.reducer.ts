import { Reducer } from 'redux';

import { AuthActionType, LoginSuccessAction } from 'packages/auth/types';
import { UserProfile } from 'packages/api/types';
import {
  SignUpActionType,
  SignUpErrorAction,
  SignUpSuccessAction,
  UserState,
} from './types';

const initialState: UserState = {
  error: null,
  profile: null,
};

const userReducer: Reducer<UserState> = (state = initialState, action) => {
  switch (action.type) {
    case AuthActionType.AUTH_LOGIN_SUCCESS: {
      const profile: UserProfile = (action as LoginSuccessAction).payload;
      return { error: null, profile };
    }

    case SignUpActionType.USER_SIGNUP_SUCCESS: {
      const profile: UserProfile = (action as SignUpSuccessAction).payload;
      return { error: null, profile };
    }

    case SignUpActionType.USER_SIGNUP_ERROR: {
      const error: string = (action as SignUpErrorAction).payload.error;
      return { error, profile: null };
    }

    default:
      return state;
  }
};

export default userReducer;
