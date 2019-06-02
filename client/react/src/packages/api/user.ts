import {
  RequestError,
  SignUpRequest,
  SignUpResponse,
  SignUpSuccess,
  UserCredentials,
} from './types';

import api from './base';
import { endpoints } from 'packages/config';

const signUp = async (credentials: UserCredentials): Promise<SignUpResponse> => {
  try {
    const payload: SignUpRequest = { user: credentials };
    const { data } = await api.post<SignUpSuccess>(endpoints.users, payload);

    return data;
  } catch (e) {
    const { data } = (e as RequestError).response;
    return Promise.reject(data);
  }
};

export default {
  signUp,
};
