import { wait } from 'react-testing-library';

import * as customMatchers from './matchers';
import api from './api';
import dom from './dom';

// Page objects
import login from './pages/Login';

export { customMatchers };

export default {
  api,
  dom,
  pages: {
    login,
  },
  wait,
};
