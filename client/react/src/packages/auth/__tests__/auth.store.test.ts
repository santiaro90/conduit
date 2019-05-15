import { UserCredentials, UserProfile } from 'packages/api/types';
import { ConduitStore } from 'packages/core/types';

import createStore from 'packages/core/core.store';
import { login } from '../auth.store';

import utils from 'packages/utils/test';
import { endpoints } from 'packages/config';

const { api } = utils;

describe('Auth store', (): void => {
  let store: ConduitStore;

  const credentials: UserCredentials = {
    email: 'santiago@example',
    password: 'password',
  };

  const profile: UserProfile = {
    bio: 'My bio.',
    email: credentials.email,
    username: 'santiago',
  };

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

    it(`doesn't have a current user`, (): void => {
      const { auth } = store.getState();
      expect(auth.currentUser).toBeNull();
    });
  });

  it('logs a user in', async (): Promise<void> => {
    api.post(endpoints.login, credentials).reply(200, { user: profile });

    await store.dispatch(login(credentials));

    const { auth } = store.getState();
    expect(auth.loggedIn).toBe(true);
  });
});
