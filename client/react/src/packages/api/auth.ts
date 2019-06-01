import {
  LoginResponse,
  LoginRequest,
  LoginSuccess,
  RequestError,
  UserCredentials,
} from './types';

import api from './base';
import { endpoints } from 'packages/config';

const login = async (credentials: UserCredentials): Promise<LoginResponse> => {
  try {
    const payload: LoginRequest = { user: credentials };
    const { data } = await api.post<LoginSuccess>(endpoints.login, payload);

    return data;
  } catch (e) {
    const { data } = (e as RequestError).response;
    return Promise.reject(data);
  }
};

export default {
  login,
};
