import React from 'react';
import { FormPageObject } from '../types';

import { Login } from 'packages/auth/components';

import dom from '../dom';

const { events } = dom;

type LoginPageObject = FormPageObject<{
  setEmail: (email: string) => LoginPageObject;
  setPassword: (password: string) => LoginPageObject;
  submit: () => LoginPageObject;
}>;

const signUp = (): LoginPageObject => ({
  component: dom.render(<Login />),

  fillInput(name: string, value: string): LoginPageObject {
    const input = this.component.getByName(name) as HTMLInputElement;
    events.fillInput(input, value);

    return this;
  },

  setEmail(value: string): LoginPageObject {
    return this.fillInput('email', value);
  },

  setPassword(value: string): LoginPageObject {
    return this.fillInput('password', value);
  },

  submit(): LoginPageObject {
    const submit = this.component.getByText(/login/i);
    events.clickOn(submit);

    return this;
  },
});

export default signUp;
