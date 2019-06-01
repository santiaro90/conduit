import { SignUpRequest, SignUpResponse, SignUpSuccess, UserCredentials } from './types';

import api from './base';
import { endpoints } from 'packages/config';

const signUp = async (credentials: UserCredentials): Promise<SignUpResponse> => {
  const payload: SignUpRequest = { user: credentials };
  const { data } = await api.post<SignUpSuccess>(endpoints.users, payload);

  return data;
};

export default {
  signUp,
};
