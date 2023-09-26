import { UserProfile } from "models/UserProfile";
import { getAPIClient } from "./axios";

export const UserProfileService = {
  async getUserProfileById(id: String): Promise<UserProfile> {
    const api = getAPIClient();
    const response = await api.get(`/profiles/${id}`);
    return response.data;
  },
};
