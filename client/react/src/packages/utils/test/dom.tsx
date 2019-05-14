import * as rtl from 'react-testing-library';

import { DOMQueryResult } from './types';
import { fireEvent } from 'react-testing-library';

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
  events: { clickOn, fillInput, ...fireEvent },
  queries: { getByName, ...rtl.queries },
  render: rtl.render,
};
