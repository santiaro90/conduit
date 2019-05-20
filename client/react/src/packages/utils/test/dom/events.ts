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

  fireEvent.change(input, event);
};

const clickOn = (element: HTMLElement): void => {
  fireEvent.click(element);
};

export default {
  clickOn,
  fillInput,
  ...fireEvent,
};
