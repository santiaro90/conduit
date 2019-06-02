import {
  HttpCodes,
  SignUpRequest,
  SignUpSuccess,
  UserCredentials,
} from 'packages/api/types';

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
        expect(user.profile).toEqual(response.user);
      }
    );
  });

  it('renders user sign up errors', async (): Promise<void> => {
    const payload: SignUpRequest = { user: fixtures.user.getSignUpCredentials() };
    const response = { error: 'Bad Params' };

    api.post(endpoints.users, payload).reply(HttpCodes.BAD_PARAMS, response);

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
        const { queryByText } = signUpPage.component;

        const errorElement = queryByText(response.error);

        expect(user.profile).toBeNull();
        expect(errorElement).toBeInTheDocument();
      }
    );
  });
});
