import { LoginResponse, LoginSuccess, RequestError, UserCredentials } from './types';

import api from './base';
import { endpoints } from 'packages/config';

const login = async (credentials: UserCredentials): Promise<LoginResponse> => {
  try {
    const { data } = await api.post<LoginSuccess>(endpoints.login, { user: credentials });
    return data;
  } catch (e) {
    const { data } = (e as RequestError).response;
    return Promise.reject(data);
  }
};

export default {
  login,
};
