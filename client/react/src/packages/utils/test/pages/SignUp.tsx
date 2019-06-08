import React from 'react';
import { FormPageObject } from '../types';

import { SignUp } from 'packages/user/components';

import dom from '../dom';

const { events } = dom;

type SignUpPageObject = FormPageObject<{
  setEmail: (email: string) => SignUpPageObject;
  setPassword: (password: string) => SignUpPageObject;
  setUsername: (username: string) => SignUpPageObject;
  submit: () => SignUpPageObject;
}>;

const signUp = (): SignUpPageObject => ({
  component: dom.render(<SignUp />),

  fillInput(name: string, value: string): SignUpPageObject {
    const input = this.component.getByName(name) as HTMLInputElement;
    events.fillInput(input, value);

    return this;
  },

  setEmail(value: string): SignUpPageObject {
    return this.fillInput('email', value);
  },

  setUsername(value: string): SignUpPageObject {
    return this.fillInput('username', value);
  },

  setPassword(value: string): SignUpPageObject {
    return this.fillInput('password', value);
  },

  submit(): SignUpPageObject {
    const submit = this.component.getAllByText(/sign up/i);
    events.clickOn(submit[1]);

    return this;
  },
});

export default signUp;
