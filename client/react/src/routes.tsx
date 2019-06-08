import React, { FunctionComponent } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Login } from 'packages/auth/components';
import { SignUp } from 'packages/user/components';

import { routes } from 'packages/config';

const ConduitRoutes: FunctionComponent<{}> = () => (
  <Switch>
    <Redirect from={routes.home} to={routes.login} exact />
    <Route component={Login} path={routes.login} />
    <Route component={SignUp} path={routes.signUp} />
  </Switch>
);

export default ConduitRoutes;
