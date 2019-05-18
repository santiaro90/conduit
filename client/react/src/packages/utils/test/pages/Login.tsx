import React from 'react';
import { PageObject } from '../types';

import { Login } from 'packages/auth/components';

import dom from '../dom';

type LoginPageObject = PageObject & {
  setEmail: (email: string) => LoginPageObject;
  setPassword: (password: string) => LoginPageObject;
  submit: () => LoginPageObject;
};

const login = (): LoginPageObject => ({
  component: dom.render(<Login />),

  setEmail(value: string): LoginPageObject {
    const input = dom.queries.getByName(this.component.container, 'email');
    dom.events.fillInput(input.baseElement as HTMLInputElement, value);

    return this;
  },

  setPassword(value: string): LoginPageObject {
    const input = dom.queries.getByName(this.component.container, 'password');
    dom.events.fillInput(input.baseElement as HTMLInputElement, value);

    return this;
  },

  submit(): LoginPageObject {
    const submit = this.component.getByText(/login/i);
    dom.events.clickOn(submit);

    return this;
  },
});

export default login;
