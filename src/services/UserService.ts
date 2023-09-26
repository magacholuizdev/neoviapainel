import { AxiosResponse } from "axios";
import { User } from "models/page/users/User";
import { getAPIClient } from "./axios";

export type Filters = {
  page?: number;
  sort?: string;
  enabled?: boolean;
  name?: string;
  email?: string;
};

const api = getAPIClient();

export const UsersService = {
  async listUsers(filters?: Filters): Promise<AxiosResponse> {
    return api.get(`/user`, { params: filters });
  },
};
