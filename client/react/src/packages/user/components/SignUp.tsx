import React, { FunctionComponent } from 'react';
import { Col, Row } from 'reactstrap';
import { Formik } from 'formik';
import { MapDispatchToProps, connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { SignUpAction } from '../types';
import { UserCredentials } from 'packages/api/types';

import SignUpForm from './SignUpForm';

import * as store from '../user.store';

import styles from 'packages/shared/styles/SigningPage.module.css';

type BoundActions = {
  signUp: SignUpAction;
};

type SignUpPage = BoundActions;

const initialValues: UserCredentials = {
  email: '',
  password: '',
  username: '',
};

const SignUp: FunctionComponent<SignUpPage> = ({ signUp }) => (
  <Row>
    <Col md={{ size: 6, offset: 3 }}>
      <h1 className={styles.header}>Sign up</h1>
      <Formik component={SignUpForm} initialValues={initialValues} onSubmit={signUp} />
    </Col>
  </Row>
);

const mapStateToProps = (): {} => ({});

const mapDispatchToProps: MapDispatchToProps<BoundActions, {}> = dispatch =>
  bindActionCreators(
    {
      signUp: store.signUp,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
