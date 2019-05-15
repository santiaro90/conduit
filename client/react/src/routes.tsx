import React, { FunctionComponent } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Login } from 'packages/auth/components';

import { routes } from 'packages/config';

const ConduitRoutes: FunctionComponent<{}> = () => (
  <Switch>
    <Redirect from={routes.home} to={routes.login} exact />
    <Route component={Login} path={routes.login} />
  </Switch>
);

export default ConduitRoutes;
