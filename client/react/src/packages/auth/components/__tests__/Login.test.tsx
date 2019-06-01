import {
  LoginRequest,
  LoginSuccess,
  UserCredentials,
  UserProfile,
} from 'packages/api/types';

import utils from 'packages/utils/test';
import { endpoints } from 'packages/config';

const { api, pages, wait } = utils;

describe('<Login />', (): void => {
  const credentials: UserCredentials = {
    email: 'santiago@example.com',
    password: 'password',
  };

  const profile: UserProfile = {
    bio: null,
    email: credentials.email,
    username: 'santiago',
  };

  it('submits user credentials', async (): Promise<void> => {
    const payload: LoginRequest = { user: credentials };
    const response: LoginSuccess = { user: profile };

    api.post(endpoints.login, payload).reply(200, response);

    const loginPage = pages.login();
    const { store } = loginPage.component;

    loginPage
      .setEmail(credentials.email)
      .setPassword(credentials.password)
      .submit();

    await wait(
      (): void => {
        const { auth, user } = store.getState();

        expect(auth.loggedIn).toBe(true);
        expect(user).toEqual(profile);
      }
    );
  });

  it('renders authentication failures', async (): Promise<void> => {
    const error = 'Authentication Error';
    const payload: LoginRequest = { user: credentials };

    api.post(endpoints.login, payload).reply(404, { error });

    const loginPage = pages.login();
    const { store } = loginPage.component;

    loginPage
      .setEmail(credentials.email)
      .setPassword(credentials.password)
      .submit();

    await wait(
      (): void => {
        const { auth } = store.getState();
        const { queryByText } = loginPage.component;

        const errorElement = queryByText(error);

        expect(auth.loggedIn).toBe(false);
        expect(errorElement).not.toBeNull();
      }
    );
  });
});
