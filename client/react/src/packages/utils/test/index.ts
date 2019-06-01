import { wait } from 'react-testing-library';

import * as customMatchers from './matchers';
import api from './api';
import dom from './dom';

// Page objects
import login from './pages/Login';
import signUp from './pages/SignUp';

export { customMatchers };

export default {
  api,
  dom,
  pages: {
    login,
    signUp,
  },
  wait,
};
