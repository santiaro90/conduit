import { AxiosError, AxiosResponse } from 'axios';

export enum HttpCodes {
  CREATED = 201,
  NOT_FOUND = 404,
  OK = 200,
  UNAUTHORISED = 401,
}

// Payload Types
export type GenericError = {
  error: string;
};

export type UserCredentials = {
  email: string;
  password: string;
};

export type UserProfile = {
  bio: string | null;
  email: string;
  username: string;
};

// Request Types
export interface RequestError extends AxiosError {
  response: AxiosResponse<GenericError>;
}

export type LoginRequest = {
  user: UserCredentials;
};

// Response types
export type LoginSuccess = {
  user: UserProfile;
};

export type LoginResponse = LoginSuccess | GenericError;
