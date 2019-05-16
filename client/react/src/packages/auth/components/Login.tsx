import React, { FunctionComponent } from 'react';
import { Col, Row } from 'reactstrap';
import { Formik } from 'formik';
import { bindActionCreators } from 'redux';
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';

import { ConduitState } from 'packages/core/types';
import { LoginAction } from 'packages/auth/types';

import LoginForm from './LoginForm';

import { login } from '../auth.store';

import styles from './styles/Login.module.css';

type LoginPage = {
  login: LoginAction;
};

const Login: FunctionComponent<LoginPage> = ({ login }) => (
  <Row>
    <Col md={{ size: 6, offset: 3 }}>
      <h1 className={styles.header}>Sign in</h1>
      <Formik
        component={LoginForm}
        initialValues={{ email: '', password: '' }}
        onSubmit={login}
      />
    </Col>
  </Row>
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
