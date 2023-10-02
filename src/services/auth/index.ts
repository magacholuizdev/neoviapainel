import http from '../http';
import { AuthRequest, AuthResponse } from './types'

const baseUrl = "/login"

export async function authenticate({ email }: AuthRequest) {
  let res = await http.post<AuthResponse>(baseUrl, email);
  return res.data;
}
