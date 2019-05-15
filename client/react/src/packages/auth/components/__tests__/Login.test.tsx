import React from 'react';

import Login from '../Login';

import utils from 'packages/utils/test';

const { api, wait } = utils;
const { events, queries, render } = utils.dom;

describe('<Login />', (): void => {
  const path = '/auth/login';
  const credentials = {
    email: 'santiago@example.com',
    password: 'password',
  };

  beforeEach(
    (): void => {
      api.post('/auth/login', credentials).reply(200);
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

        expect(api).toReplyToRequest(path, 'POST');
        expect(auth.loggedIn).toBe(true);
      }
    );
  });
});
