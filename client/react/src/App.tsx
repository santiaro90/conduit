import React, { FunctionComponent } from 'react';
import { Container } from 'reactstrap';

import ConduitRoutes from './routes';
import { Header } from 'packages/core/components';

const App: FunctionComponent<{}> = () => (
  <>
    <Header />

    <main>
      <Container>
        <ConduitRoutes />
      </Container>
    </main>
  </>
);

export default App;
