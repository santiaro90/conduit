import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';

import ConduitRoutes from './routes';

import { routes } from 'packages/config';

const App: FunctionComponent<{}> = () => (
  <>
    <header>
      <h1>Conduit</h1>
      <Link to={routes.signUp}>Sign Up</Link>
    </header>

    <main>
      <Container>
        <ConduitRoutes />
      </Container>
    </main>
  </>
);

export default App;
