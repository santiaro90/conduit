import React, { FunctionComponent } from 'react';
import { Container } from 'reactstrap';

import ConduitRoutes from './routes';

const App: FunctionComponent<{}> = () => (
  <>
    <header>
      <h1>Conduit</h1>
    </header>

    <main>
      <Container>
        <ConduitRoutes />
      </Container>
    </main>
  </>
);

export default App;
