export type UserRole = "ADMIN" | "FINANCIAL" | "ENGINEER" | "USER"

export type User = {
  id: string;
  name: string;
  email: string;
  profileId: string;
  profile: UserProfile;
  createdAt: string;
  updatedAt: string;
};

export type UserProfile = {
  id: string;
  name: string;
  roles: UserRole[];
  enabled: boolean;
  createdAt: string;
  updatedAt: string;
};

export type UserRequest = {
  email: string;
}

export type UserPaginationParam = {
  size: number;
  page: number;
  name?: string;
  email?: string;
}
