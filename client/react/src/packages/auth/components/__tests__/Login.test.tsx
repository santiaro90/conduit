import React from 'react';

import Login from '../Login';

import utils from 'packages/utils/test';
import { endpoints } from 'packages/config';

const { api, wait } = utils;
const { events, queries, render } = utils.dom;

describe('<Login />', (): void => {
  const credentials = {
    email: 'santiago@example.com',
    password: 'password',
  };

  beforeEach(
    (): void => {
      api.post(endpoints.login, { user: credentials }).reply(200);
    }
  );

  it('submits user credentials', async (): Promise<void> => {
    const { container, getByText, store } = render(<Login />);

    const { baseElement: email } = queries.getByName(container, 'email');
    const { baseElement: pass } = queries.getByName(container, 'password');
    const submit = getByText(/login/i);

    events.fillInput(email as HTMLInputElement, credentials.email);
    events.fillInput(pass as HTMLInputElement, credentials.password);
    events.clickOn(submit);

    await wait(
      (): void => {
        const { auth } = store.getState();

        expect(api).toReplyToRequest(endpoints.login, 'POST');
        expect(auth.loggedIn).toBe(true);
      }
    );
  });
});
