import * as rtl from 'react-testing-library';
import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';

import { DOMQueryResult, RenderResult } from './types';

import createStore from 'packages/core/core.store';

const render = (component: ReactElement): RenderResult => {
  const store = createStore();
  const rendered = rtl.render(<Provider store={store}>{component}</Provider>);

  return {
    ...rendered,
    store,
  };
};

const fillInput = (
  input: HTMLInputElement | HTMLTextAreaElement,
  value: string
): void => {
  const { id, name } = input;
  const event = {
    target: {
      id,
      name,
      value,
    },
  };

  rtl.fireEvent.change(input, event);
};

const clickOn = (element: HTMLElement): void => {
  rtl.fireEvent.click(element);
};

const getByName = (container: HTMLElement, name: string): DOMQueryResult => {
  const el = rtl.queryByAttribute('name', container, name);

  return {
    baseElement: el,
    container: el,
  };
};

export default {
  events: { clickOn, fillInput, ...rtl.fireEvent },
  queries: { getByName, ...rtl.queries },
  render,
};
