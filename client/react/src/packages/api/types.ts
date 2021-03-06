import { AxiosError, AxiosResponse } from 'axios';

export enum HttpCodes {
  BAD_PARAMS = 400,
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
  username: string;
};

export type LoginCredentials = Pick<
  UserCredentials,
  Exclude<keyof UserCredentials, 'username'>
>;

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
  user: LoginCredentials;
};

export type SignUpRequest = {
  user: UserCredentials;
};

// Response types
export type LoginSuccess = {
  accessToken: string;
  user: UserProfile;
};

export type LoginResponse = LoginSuccess | GenericError;

export type SignUpSuccess = LoginSuccess;
export type SignUpResponse = LoginResponse;
