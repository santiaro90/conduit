import React, { FunctionComponent } from 'react';
import { FormikProps } from 'formik';

import { UserCredentials } from 'packages/api/types';

const LoginForm: FunctionComponent<FormikProps<UserCredentials>> = ({
  handleChange,
  handleSubmit,
  values,
}) => (
  <form data-testid="login-form" onSubmit={handleSubmit}>
    <input name="email" onChange={handleChange} value={values.email} />
    <input name="password" onChange={handleChange} value={values.password} />

    <button type="submit">Login</button>
  </form>
);

export default LoginForm;
