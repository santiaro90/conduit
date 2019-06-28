import * as rtl from 'react-testing-library';
import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';

import { RenderResult } from '../types';

import createStore from 'packages/core/core.store';
import events from './events';
import localStorage from './localStorage';
import queries, { getQueriesForElement } from './queries';

const render = (component: ReactElement): RenderResult => {
  const store = createStore();
  const rendered = rtl.render(<Provider store={store}>{component}</Provider>);
  const queriesForElement = getQueriesForElement(rendered.container);

  return {
    ...rendered,
    ...queriesForElement,
    store,
  };
};

export default {
  events,
  localStorage,
  queries,
  render,
};
