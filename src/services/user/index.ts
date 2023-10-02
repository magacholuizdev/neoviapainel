import { Pagination } from '@/types/pagination';
import http from '../http';
import { User, UserPaginationParam, UserRequest } from './type';

const baseUrl = "/user"

export async function getUser({ email }: UserRequest) {
  let res = await http.get<User>(`${baseUrl}/${email}`);
  return res.data;
}

export async function getUsers({ page, size, name = '', email = '' }: UserPaginationParam) {
  let res = await http.get<Pagination<User>>(baseUrl, {
    params: {
      page, size, name, email
    }
  });
  return res.data;
}
