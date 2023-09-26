import { UserProfile } from "./UserProfile";

export type User = {
  id: string;
  name: string;
  email: string;
  profileId: string;
  profile: UserProfile;
  createdAt: string;
  updatedAt: string;
};
