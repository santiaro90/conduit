import React, { FunctionComponent } from 'react';
import { Formik } from 'formik';
import { bindActionCreators } from 'redux';
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';

import { ConduitState } from 'packages/core/types';
import { LoginAction } from 'packages/auth/types';

import { login } from '../auth.store';

import LoginForm from './LoginForm';

type LoginPage = {
  login: LoginAction;
};

const Login: FunctionComponent<LoginPage> = ({ login }) => (
  <Formik
    component={LoginForm}
    initialValues={{ email: '', password: '' }}
    onSubmit={login}
  />
);

const mapStateToProps: MapStateToProps<{}, {}, ConduitState> = state => state;
const mapDispatchToProps: MapDispatchToProps<{}, {}> = dispatch =>
  bindActionCreators(
    {
      login,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
