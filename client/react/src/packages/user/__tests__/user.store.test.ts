import { ConduitStore } from 'packages/core/types';
import {
  HttpCodes,
  LoginRequest,
  LoginSuccess,
  UserCredentials,
  UserProfile,
} from 'packages/api/types';

import createStore from 'packages/core/core.store';
import utils from 'packages/utils/test';
import { endpoints } from 'packages/config';
import { login } from 'packages/auth/auth.store';

const { api } = utils;

describe('User store', (): void => {
  let store: ConduitStore;

  const credentials: UserCredentials = {
    email: 'santiago@example.com',
    password: 'password',
  };

  const profile: UserProfile = {
    bio: null,
    email: credentials.email,
    username: 'santiago',
  };

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
      const payload: LoginRequest = { user: credentials };
      const response: LoginSuccess = { user: profile };

      api.post(endpoints.login, payload).reply(HttpCodes.OK, response);

      await store.dispatch(login(credentials));

      const { user } = store.getState();
      expect(user).toEqual(profile);
    });
  });
});
