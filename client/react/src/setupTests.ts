import nock from 'nock';
import { cleanup } from 'react-testing-library';

import 'jest-dom/extend-expect';
import { customMatchers } from 'packages/utils/test';

expect.extend(customMatchers);

// Clean all API mocks before running a test.
beforeEach(nock.cleanAll);

// Clean up the DOM after running a test.
afterEach(cleanup);
