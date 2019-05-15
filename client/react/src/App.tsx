import React, { FunctionComponent } from 'react';

import ConduitRoutes from './routes';

const App: FunctionComponent<{}> = () => (
  <>
    <header>
      <h1>Conduit</h1>
    </header>

    <main>
      <ConduitRoutes />
    </main>
  </>
);

export default App;
