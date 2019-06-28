import { ConduitStore } from 'packages/core/types';
import { HttpCodes, LoginRequest, LoginSuccess } from 'packages/api/types';

import * as fixtures from 'packages/utils/test/fixtures';
import createStore from 'packages/core/core.store';
import utils from 'packages/utils/test';
import { endpoints } from 'packages/config';
import { login } from '../auth.store';

const { api } = utils;

describe('Auth store', (): void => {
  let store: ConduitStore;

  beforeEach(
    (): void => {
      store = createStore();
    }
  );

  describe('default state', (): void => {
    it('is logged out', (): void => {
      const { auth } = store.getState();
      expect(auth.loggedIn).toBe(false);
    });

    it(`doesn't have an error`, (): void => {
      const { auth } = store.getState();
      expect(auth.error).toBeNull();
    });
  });

  describe('when logging in', (): void => {
    it('sets the logged in flag', async (): Promise<void> => {
      const payload: LoginRequest = { user: fixtures.user.getLoginCredentials() };
      const response: LoginSuccess = {
        accessToken: 'abc',
        user: fixtures.user.getUserProfile(),
      };

      api.post(endpoints.login, payload).reply(HttpCodes.OK, response);

      await store.dispatch(login(payload.user));

      const { auth } = store.getState();
      expect(auth.loggedIn).toBe(true);
    });

    it('stores the access token in localStorage', async (): Promise<void> => {
      const payload: LoginRequest = { user: fixtures.user.getLoginCredentials() };
      const response: LoginSuccess = {
        accessToken: 'abc',
        user: fixtures.user.getUserProfile(),
      };

      api.post(endpoints.login, payload).reply(HttpCodes.OK, response);

      await store.dispatch(login(payload.user));
      expect(localStorage.getItem('access_token')).toBe('abc');
    });

    it('handles errors', async (): Promise<void> => {
      const payload: LoginRequest = { user: fixtures.user.getLoginCredentials() };
      const error404 = { error: 'Not Found' };
      const error401 = { error: 'Not Authorised' };

      api
        .post(endpoints.login, payload)
        .reply(HttpCodes.UNAUTHORISED, error401)
        .post(endpoints.login, payload)
        .reply(HttpCodes.NOT_FOUND, error404);

      await store.dispatch(login(payload.user));

      const { auth: auth401 } = store.getState();

      expect(auth401.loggedIn).toBe(false);
      expect(auth401.error).toBe(error401.error);

      await store.dispatch(login(payload.user));

      const { auth: auth404 } = store.getState();

      expect(auth404.loggedIn).toBe(false);
      expect(auth404.error).toBe(error404.error);
    });
  });
});
