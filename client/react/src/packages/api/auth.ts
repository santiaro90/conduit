import { LoginSuccessResponse, UserCredentials } from './types';

import { endpoints } from 'packages/config';

import api from './base';

const login = async (credentials: UserCredentials): Promise<LoginSuccessResponse> => {
  const { data } = await api.post<LoginSuccessResponse>(endpoints.login, credentials);
  return data;
};

export default {
  login,
};
