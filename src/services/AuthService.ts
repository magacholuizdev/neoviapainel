import SignInData from "models/Auth/SignInData";
import { getAPIClient } from "./axios";
import { User } from "models/User";
import { LoginResult } from "models/LoginResult/LoginResult";

const api = getAPIClient();
const headers = {
  "Access-Control-Allow-Origin": "*",
  "content-type": "application/json",
};

export const AuthService = {
  setToken(token: string) {
    api.defaults.headers["Authorization"] = `Bearer ${token}`;
  },
  async portalLogin(email: string): Promise<User> {
    const response = await api.get(`/user/${email}`);
    return response.data as User;
  },

  async login(data: SignInData) {
    const response = await api.post(`/login`, data, {
      headers,
    });
    return response.data as LoginResult;
  },

  async getUserInfo(email: string): Promise<User> {
    const response = await api.get(`user/${email}`, {
      headers,
    });
    return response.data as User;
  },
};
