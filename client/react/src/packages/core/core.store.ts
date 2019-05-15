import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';

import { ConduitStore } from './types';

import reducer from './rootReducer';

const configureStore = (): ConduitStore => {
  const middleware = applyMiddleware(thunk);
  return createStore(reducer, middleware);
};

export default configureStore;
