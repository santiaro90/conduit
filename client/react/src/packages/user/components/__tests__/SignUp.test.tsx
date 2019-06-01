import { HttpCodes, SignUpRequest, SignUpSuccess } from 'packages/api/types';

import * as fixtures from 'packages/utils/test/fixtures';
import utils from 'packages/utils/test';
import { endpoints } from 'packages/config';

const { api, pages, wait } = utils;

describe('<SignUp />', (): void => {
  it(`submits the user's profile`, async (): Promise<void> => {
    const payload: SignUpRequest = { user: fixtures.user.getSignUpCredentials() };
    const response: SignUpSuccess = { user: fixtures.user.getUserProfile() };

    api.post(endpoints.users, payload).reply(HttpCodes.CREATED, response);

    const signUpPage = pages.signUp();
    const { getState } = signUpPage.component.store;

    signUpPage
      .setEmail(payload.user.email)
      .setUsername(payload.user.username)
      .setPassword(payload.user.password)
      .submit();

    await wait(
      (): void => {
        const { user } = getState();
        expect(user).toEqual(response.user);
      }
    );
  });
});
