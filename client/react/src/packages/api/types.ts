import { AxiosError, AxiosResponse } from 'axios';

// Payload Types
export type GenericError = {
  error: string;
};

export type UserCredentials = {
  email: string;
  password: string;
};

export type UserProfile = {
  bio: string;
  email: string;
  username: string;
};

// Request Types
export interface RequestErrorResponse extends AxiosError {
  response: AxiosResponse<GenericError>;
}

export type LoginSuccess = {
  user: UserProfile;
};

export type LoginResponse = LoginSuccess | GenericError;
