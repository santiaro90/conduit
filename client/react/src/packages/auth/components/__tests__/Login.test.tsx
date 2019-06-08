import { HttpCodes, LoginRequest, LoginSuccess } from 'packages/api/types';

import * as fixtures from 'packages/utils/test/fixtures';
import utils from 'packages/utils/test';
import { endpoints } from 'packages/config';

const { api, pages, wait } = utils;

describe('<Login />', (): void => {
  it('submits user credentials', async (): Promise<void> => {
    const payload: LoginRequest = { user: fixtures.user.getLoginCredentials() };
    const response: LoginSuccess = { user: fixtures.user.getUserProfile() };

    api.post(endpoints.login, payload).reply(HttpCodes.OK, response);

    const loginPage = pages.login();
    const { store } = loginPage.component;

    loginPage
      .setEmail(payload.user.email)
      .setPassword(payload.user.password)
      .submit();

    await wait(
      (): void => {
        const { auth, user } = store.getState();

        expect(auth.loggedIn).toBe(true);
        expect(user.profile).toEqual(response.user);
      }
    );
  });

  it('renders authentication failures', async (): Promise<void> => {
    const payload: LoginRequest = { user: fixtures.user.getLoginCredentials() };
    const error = 'Authentication Error';

    api.post(endpoints.login, payload).reply(HttpCodes.NOT_FOUND, { error });

    const loginPage = pages.login();
    const { store } = loginPage.component;

    loginPage
      .setEmail(payload.user.email)
      .setPassword(payload.user.password)
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
