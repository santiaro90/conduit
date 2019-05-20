import React from 'react';
import { PageObject } from '../types';

import { Login } from 'packages/auth/components';

import dom from '../dom';

const { events } = dom;

type LoginPageObject = PageObject & {
  setEmail: (email: string) => LoginPageObject;
  setPassword: (password: string) => LoginPageObject;
  submit: () => LoginPageObject;
};

const login = (): LoginPageObject => ({
  component: dom.render(<Login />),

  setEmail(value: string): LoginPageObject {
    const input = this.component.getByName('email') as HTMLInputElement;
    events.fillInput(input, value);

    return this;
  },

  setPassword(value: string): LoginPageObject {
    const input = this.component.getByName('password') as HTMLInputElement;
    events.fillInput(input, value);

    return this;
  },

  submit(): LoginPageObject {
    const submit = this.component.getByText(/login/i);
    events.clickOn(submit);

    return this;
  },
});

export default login;
