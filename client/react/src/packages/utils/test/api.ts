import nock from 'nock';

import { Scope } from './types';

import env from 'env';

const mockApi: Scope = nock(env.REACT_APP_API_URL).defaultReplyHeaders({
  'Access-Control-Allow-Origin': '*',
});

export default mockApi;
