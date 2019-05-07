import { ConduitEnv } from './types';

const env: ConduitEnv = {
  REACT_APP_API_BASE_URL: process.env.REACT_APP_API_BASE_URL,
  REACT_APP_API_URL: process.env.REACT_APP_API_URL,
  REACT_APP_API_VERSION: process.env.REACT_APP_API_VERSION,
};

export default env;
