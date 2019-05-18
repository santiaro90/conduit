import utils from 'packages/utils/test';
import { endpoints } from 'packages/config';

const { api, pages, wait } = utils;

describe('<Login />', (): void => {
  const credentials = {
    email: 'santiago@example.com',
    password: 'password',
  };
  const user = { user: credentials };

  it('submits user credentials', async (): Promise<void> => {
    const loginPage = pages.login();

    api.post(endpoints.login, user).reply(200);

    loginPage
      .setEmail(credentials.email)
      .setPassword(credentials.password)
      .submit();

    await wait(
      (): void => {
        const { auth } = loginPage.component.store.getState();
        expect(auth.loggedIn).toBe(true);
      }
    );
  });

  it('renders authentication failures', async (): Promise<void> => {
    const error = 'Authentication Error';
    const loginPage = pages.login();

    api.post(endpoints.login, user).reply(404, { error });

    loginPage
      .setEmail(credentials.email)
      .setPassword(credentials.password)
      .submit();

    await wait(
      (): void => {
        const { auth } = loginPage.component.store.getState();
        const { queryByText } = loginPage.component;

        const errorElement = queryByText(error);

        expect(auth.loggedIn).toBe(false);
        expect(errorElement).not.toBeNull();
      }
    );
  });
});
