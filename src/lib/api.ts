import axios from 'axios';
import { GetServerSidePropsContext } from 'next';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 20000,
  timeoutErrorMessage: 'Periksa Kembali Koneksi Internet Anda.',
  withCredentials: false,
});

let context: GetServerSidePropsContext | undefined;
const isServer = () => {
  return typeof window === 'undefined';
};

api.defaults.withCredentials = false;

api.interceptors.request.use(function (config) {
  if (config.headers) {
    if (isServer()) {
      if (!context)
        throw 'Api Context not found. You must call `setApiContext(context)` before calling api on server-side';
    }
  }

  return config;
});

export const setApiContext = (_context: GetServerSidePropsContext) => {
  context = _context;
  return;
};

export default api;
