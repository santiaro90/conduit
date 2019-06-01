import { Reducer } from 'redux';

import { AuthActionType, LoginSuccessAction } from 'packages/auth/types';
import { UserProfile } from 'packages/api/types';
import { SignUpActionType, SignUpSuccessAction, UserState } from './types';

const userReducer: Reducer<UserState> = (state = null, action) => {
  switch (action.type) {
    case AuthActionType.AUTH_LOGIN_SUCCESS: {
      const profile: UserProfile = (action as LoginSuccessAction).payload;
      return profile;
    }

    case SignUpActionType.USER_SIGNUP_SUCCESS: {
      const profile: UserProfile = (action as SignUpSuccessAction).payload;
      return profile;
    }

    default:
      return state;
  }
};

export default userReducer;
