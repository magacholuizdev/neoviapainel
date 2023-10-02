import axios, { AxiosInstance, AxiosResponse } from 'axios';
import Cookies from 'js-cookie';
import AuthManager from './auth/functions';

interface HttpProps {
  axiosConfig: AxiosInstance;
  get: <T>(route: string, body?: any) => Promise<AxiosResponse<T, any>>;
  put: <T>(route: string, body?: any) => Promise<AxiosResponse<T, any>>;
  patch: <T>(route: string, body?: any) => Promise<AxiosResponse<T, any>>;
  post: <T>(route: string, body?: any) => Promise<AxiosResponse<T, any>>;
}

const backendBaseUrl = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT_API;
const token = Cookies.get('portal.token');

const http: HttpProps = {
  axiosConfig: axios.create({
    baseURL: backendBaseUrl,
    headers: {
      Authorization: `Bearer ${token}`
    },
  }),

  get: function <T>(route: string, body?: any) {
    return this.axiosConfig.get<T>(route, body).catch(error => {
      let response = error.response;
      if (response?.data?.statusCode === 401 && response?.data?.message === 'Acesso Negado') {
        AuthManager.logout();
      }
      return error;
    });
  },

  patch: function <T>(route: string, body?: any) {
    return this.axiosConfig.patch<T>(route, body).catch(error => {
      let response = error.response;
      if (response?.data?.statusCode === 401 && response?.data?.message === 'Acesso Negado') {
        AuthManager.logout();
      }
      return error;
    });
  },

  put: function <T>(route: string, body?: any) {
    return this.axiosConfig.put<T>(route, body).catch(error => {
      let response = error.response;
      if (response?.data?.statusCode === 401 && response?.data?.message === 'Acesso Negado') {
        AuthManager.logout();
      }
      return error;
    });
  },

  post: function <T>(route: string, body?: any) {
    return this.axiosConfig.post<T>(route, body).catch(error => {
      let response = error.response;
      if (response?.data?.statusCode === 401 && response?.data?.message === 'Acesso Negado') {
        AuthManager.logout();
      }
      return error;
    });
  },
};

export default http;
