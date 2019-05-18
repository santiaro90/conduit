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
    api.post(endpoints.login, user).reply(200);

    const loginPage = pages.login();

    loginPage
      .setEmail(credentials.email)
      .setPassword(credentials.password)
      .submit();

    await wait(
      (): void => {
        const { auth } = loginPage.component.store.getState();

        expect(api).toReplyToRequest(endpoints.login, 'POST');
        expect(auth.loggedIn).toBe(true);
      }
    );
  });
});
