import { LoginCredentials, UserCredentials, UserProfile } from 'packages/api/types';

const baseUser = {
  email: 'santiago@example.com',
  password: 'password',
  username: 'santiago',
};

const getLoginCredentials = (): LoginCredentials => ({
  email: baseUser.email,
  password: baseUser.password,
});

const getSignUpCredentials = (): UserCredentials => ({
  email: baseUser.email,
  password: baseUser.password,
  username: baseUser.username,
});

const getUserProfile = (bio: string | null = null): UserProfile => ({
  bio,
  email: baseUser.email,
  username: baseUser.username,
});

export default {
  getLoginCredentials,
  getSignUpCredentials,
  getUserProfile,
};
