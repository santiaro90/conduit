import { wait } from 'react-testing-library';

import * as customMatchers from './matchers';
import api from './api';
import dom from './dom';

export { customMatchers };

export default {
  api,
  dom,
  wait,
};
