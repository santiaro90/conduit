import React, { FunctionComponent } from 'react';
import { Formik } from 'formik';
import { MapDispatchToProps, connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { SignUpAction } from '../types';
import { UserCredentials } from 'packages/api/types';

import SignUpForm from './SignUpForm';

import * as store from '../user.store';

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
  <Formik component={SignUpForm} initialValues={initialValues} onSubmit={signUp} />
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
