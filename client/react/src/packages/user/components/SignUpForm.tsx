import React, { FunctionComponent } from 'react';
import { FormikProps } from 'formik';

import { UserCredentials } from 'packages/api/types';

const SignUpForm: FunctionComponent<FormikProps<UserCredentials>> = ({
  handleChange,
  handleSubmit,
  values,
}) => (
  <form onSubmit={handleSubmit}>
    <input name="email" onChange={handleChange} value={values.email} />
    <input name="username" onChange={handleChange} value={values.username} />
    <input name="password" onChange={handleChange} value={values.password} />

    <button type="submit">Sign Up</button>
  </form>
);

export default SignUpForm;
