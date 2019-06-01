import { ConduitStore } from 'packages/core/types';
import {
  HttpCodes,
  LoginRequest,
  LoginSuccess,
  SignUpRequest,
  SignUpSuccess,
} from 'packages/api/types';

import * as fixtures from 'packages/utils/test/fixtures';
import createStore from 'packages/core/core.store';
import utils from 'packages/utils/test';
import { endpoints } from 'packages/config';
import { login } from 'packages/auth/auth.store';
import { signUp } from 'packages/user/user.store';

const { api } = utils;

describe('User store', (): void => {
  let store: ConduitStore;

  beforeEach(
    (): void => {
      store = createStore();
    }
  );

  describe('default state', (): void => {
    it('is null', (): void => {
      const { user } = store.getState();
      expect(user).toBeNull();
    });
  });

  describe('when logging in', (): void => {
    it(`sets the user's profile`, async (): Promise<void> => {
      const payload: LoginRequest = { user: fixtures.user.getLoginCredentials() };
      const response: LoginSuccess = { user: fixtures.user.getUserProfile() };

      api.post(endpoints.login, payload).reply(HttpCodes.OK, response);

      await store.dispatch(login(payload.user));

      const { user } = store.getState();
      expect(user).toEqual(response.user);
    });
  });

  describe('when signing a user up', (): void => {
    it(`sets the user's profile`, async (): Promise<void> => {
      const payload: SignUpRequest = { user: fixtures.user.getSignUpCredentials() };
      const response: SignUpSuccess = { user: fixtures.user.getUserProfile() };

      api.post(endpoints.users, payload).reply(HttpCodes.OK, response);

      await store.dispatch(signUp(payload.user));

      const { user } = store.getState();
      expect(user).toEqual(response.user);
    });
  });
});
