import React, { FunctionComponent } from 'react';
import { Col, Row } from 'reactstrap';
import { Formik } from 'formik';
import { bindActionCreators } from 'redux';
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';

import { ConduitState } from 'packages/core/types';
import { LoginAction } from '../types';

import LoginForm from './LoginForm';

import { login } from '../auth.store';

import styles from './styles/Login.module.css';

type BoundActions = {
  login: LoginAction;
};

type MappedState = {
  error: string | null;
};

type LoginPage = BoundActions & MappedState;

const Login: FunctionComponent<LoginPage> = ({ error, login }) => (
  <Row>
    <Col md={{ size: 6, offset: 3 }}>
      <h1 className={styles.header}>Sign in</h1>

      {error && <h3 className={`${styles.error} text-danger`}>{error}</h3>}

      <Formik
        component={LoginForm}
        initialValues={{ email: '', password: '' }}
        onSubmit={login}
      />
    </Col>
  </Row>
);

const mapStateToProps: MapStateToProps<MappedState, {}, ConduitState> = state => ({
  error: state.auth.error,
});

const mapDispatchToProps: MapDispatchToProps<BoundActions, {}> = dispatch =>
  bindActionCreators({ login }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
