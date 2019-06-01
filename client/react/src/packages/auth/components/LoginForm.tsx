import React, { FunctionComponent } from 'react';
import { Button, Col, Form, FormGroup, Input, Label } from 'reactstrap';
import { FormikProps } from 'formik';

import { LoginCredentials } from 'packages/api/types';

const LoginForm: FunctionComponent<FormikProps<LoginCredentials>> = ({
  handleChange,
  handleSubmit,
  values,
}) => (
  <Form data-testid="login-form" onSubmit={handleSubmit}>
    <FormGroup>
      <Label for="email" hidden>
        Email
      </Label>
      <Input
        bsSize="lg"
        id="email"
        name="email"
        onChange={handleChange}
        placeholder="Email"
        value={values.email}
      />
    </FormGroup>

    <FormGroup>
      <Label for="password" hidden>
        Password
      </Label>
      <Input
        bsSize="lg"
        id="password"
        name="password"
        onChange={handleChange}
        placeholder="Password"
        type="password"
        value={values.password}
      />
    </FormGroup>

    <FormGroup row>
      <Col md={{ offset: 9, size: 3 }}>
        <Button color="success" size="lg" type="submit" block>
          Login
        </Button>
      </Col>
    </FormGroup>
  </Form>
);

export default LoginForm;
