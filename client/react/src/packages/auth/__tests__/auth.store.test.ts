import { ConduitStore } from 'packages/core/types';
import { UserCredentials, UserProfile } from 'packages/api/types';

import createStore from 'packages/core/core.store';
import utils from 'packages/utils/test';
import { endpoints } from 'packages/config';
import { login } from '../auth.store';

const { api } = utils;

describe('Auth store', (): void => {
  let store: ConduitStore;

  const credentials: UserCredentials = {
    email: 'santiago@example',
    password: 'password',
  };

  const profile: UserProfile = {
    bio: null,
    email: credentials.email,
    username: 'santiago',
  };

  const user = { user: credentials };

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

  it('logs a user in', async (): Promise<void> => {
    api.post(endpoints.login, user).reply(200, { user: profile });

    await store.dispatch(login(credentials));

    const { auth } = store.getState();
    expect(auth.loggedIn).toBe(true);
  });

  it('handles authentication errors', async (): Promise<void> => {
    const error404 = 'Not Found';
    const error401 = 'Not Authorised';

    api
      .post(endpoints.login, user)
      .reply(401, { error: error401 })
      .post(endpoints.login, user)
      .reply(404, { error: error404 });

    await store.dispatch(login(credentials));

    const { auth: auth401 } = store.getState();

    expect(auth401.loggedIn).toBe(false);
    expect(auth401.error).toBe(error401);

    await store.dispatch(login(credentials));

    const { auth: auth404 } = store.getState();

    expect(auth404.loggedIn).toBe(false);
    expect(auth404.error).toBe(error404);
  });
});
