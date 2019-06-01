import { UserCredentials, UserProfile } from 'packages/api/types';

const getLoginCredentials = (): UserCredentials => ({
  email: 'santiago@example.com',
  password: 'password',
});

const getUserProfile = (bio: string | null = null): UserProfile => ({
  bio,
  email: 'santiago@example.com',
  username: 'santiago',
});

export default {
  getLoginCredentials,
  getUserProfile,
};
