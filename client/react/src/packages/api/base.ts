import axios from 'axios';

import env from 'env';

const baseURL = env.REACT_APP_API_URL;
const baseApi = axios.create({ baseURL });

export default baseApi;
