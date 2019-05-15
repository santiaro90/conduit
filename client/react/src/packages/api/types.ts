export type UserCredentials = {
  email: string;
  password: string;
};

export type UserProfile = {
  bio: string;
  email: string;
  username: string;
};

export type LoginSuccessResponse = {
  user: UserProfile;
};
