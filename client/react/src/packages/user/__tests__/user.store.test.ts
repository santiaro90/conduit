import { ConduitStore } from 'packages/core/types';

import createStore from 'packages/core/core.store';

describe('User store', (): void => {
  let store: ConduitStore;

  beforeEach(
    (): void => {
      store = createStore();
    }
  );

  describe('default state', (): void => {
    it('is null', (): void => {
      const { user } = store.getState();
      expect(user).toBeNull();
    });
  });
});
