export type UserProfile = {
  id: string;
  name: string;
  roles: string[];
  enabled: boolean;
  createdAt: string;
  updatedAt: string;
};

export enum UserProfileName {
  ADMIN = "ADMIN",
  FINANCIAL = "FINANCIAL",
  ENGINEER = "ENGINEER",
  USER = "USER",
}

export const UserProfileLevels = {
  ADMIN: 4,
  FINANCIAL: 3,
  ENGINEER: 2,
  USER: 1,
};
