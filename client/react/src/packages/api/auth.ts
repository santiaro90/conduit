import {
  LoginResponse,
  LoginSuccess,
  RequestErrorResponse,
  UserCredentials,
} from './types';

import { endpoints } from 'packages/config';

import api from './base';

const login = async (credentials: UserCredentials): Promise<LoginResponse> => {
  try {
    const { data } = await api.post<LoginSuccess>(endpoints.login, { user: credentials });
    return data;
  } catch (e) {
    const { data } = (e as RequestErrorResponse).response;
    return Promise.reject(data);
  }
};

export default {
  login,
};
