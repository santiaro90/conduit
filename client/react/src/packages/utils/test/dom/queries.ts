import * as rtl from 'react-testing-library';

const getByName = (container: HTMLElement, name: string): HTMLElement | null =>
  rtl.queryByAttribute('name', container, name);

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const getQueriesForElement = (container: HTMLElement) => ({
  getByName: getByName.bind(null, container),
});

export default {
  getByName,
  ...rtl.queries,
};
