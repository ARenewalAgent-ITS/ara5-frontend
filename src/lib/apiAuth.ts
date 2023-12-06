import axios from 'axios';
import { GetServerSidePropsContext } from 'next';
import Cookies from 'universal-cookie';

import { getToken } from '@/lib/cookies';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 20000,
  timeoutErrorMessage: 'Periksa Kembali Koneksi Internet Anda.',
  withCredentials: false,
});

let context = <GetServerSidePropsContext>{};
const isServer = () => {
  return typeof window === 'undefined';
};

api.defaults.withCredentials = false;

api.interceptors.request.use(function (config) {
  if (config.headers) {
    let token: string | undefined;

    if (isServer()) {
      if (!context)
        throw 'Api Context not found. You must call `setApiContext(context)` before calling api on server-side';

      const cookies = new Cookies(context.req?.headers.cookie);
      // if in production

      /** Get cookies from context if server side */
      token = cookies.get('@ara/accessToken');
    } else {
      /** Get cookies from context if server side */
      token = getToken();
    }

    config.headers.Authorization = token ? `Bearer ${token}` : '';
  }

  return config;
});

export const setApiContext = (_context: GetServerSidePropsContext) => {
  context = _context;
  return;
};

export default api;
