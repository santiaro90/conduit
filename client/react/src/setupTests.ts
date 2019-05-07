import nock from 'nock';
import { cleanup } from 'react-testing-library';

import 'jest-dom/extend-expect';

import env from './env';
import { customMatchers, mockApi } from './packages/utils/test';

global.env = env;
global.mockApi = mockApi;

expect.extend({ ...customMatchers });

// Clean all API mocks before running a test.
beforeEach(nock.cleanAll);

// Clean up the DOM after running a test.
afterEach(cleanup);
