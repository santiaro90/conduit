import React, { FunctionComponent } from 'react';
import { Button, Col, Form, FormGroup, Input, Label } from 'reactstrap';
import { FormikProps } from 'formik';

import { UserCredentials } from 'packages/api/types';

const SignUpForm: FunctionComponent<FormikProps<UserCredentials>> = ({
  handleChange,
  handleSubmit,
  values,
}) => (
  <Form onSubmit={handleSubmit}>
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
      <Label for="username" hidden>
        Username
      </Label>
      <Input
        bsSize="lg"
        id="username"
        name="username"
        onChange={handleChange}
        placeholder="Username"
        value={values.username}
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
          Sign Up
        </Button>
      </Col>
    </FormGroup>
  </Form>
);

export default SignUpForm;
