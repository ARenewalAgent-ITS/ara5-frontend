import axios, { AxiosError } from 'axios';
import { GetServerSidePropsContext } from 'next';
import Cookies from 'universal-cookie';

import { getToken } from '@/lib/cookies';
import { UninterceptedApiError } from '@/types/api';

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
  if (!config.headers) return config; // Skip if headers are not present

  if (isServer()) {
    if (!context)
      throw 'Api Context not found. You must call `setApiContext(context)` before calling api on server-side';

    const cookies = new Cookies(context.req?.headers.cookie);
    const token = cookies.get('@ara/token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  } else {
    const token = getToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // ketika uncomment error di no response header, ketika comment error unauthorized
    }
  }

  return config;
});

api.interceptors.response.use(
  (config) => {
    return config;
  },
  (error: AxiosError<UninterceptedApiError>) => {
    if (error.response?.data.message) {
      return Promise.reject({
        ...error,
        response: {
          ...error.response,
          data: {
            ...error.response.data,
            message:
              typeof error.response.data.message === 'string'
                ? error.response.data.message
                : Object.values(error.response.data.message)[0][0],
          },
        },
      });
    }
    return Promise.reject(error);
  }
);

export const setApiContext = (_context: GetServerSidePropsContext) => {
  context = _context;
  return;
};

export default api;

// import axios, { AxiosError } from 'axios';
// import { GetServerSidePropsContext } from 'next';
// import Cookies from 'universal-cookie';

// import { getToken } from '@/lib/cookies';
// import { UninterceptedApiError } from '@/types/api';

// export const api = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_API_URL,
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   timeout: 20000,
//   timeoutErrorMessage: 'Periksa Kembali Koneksi Internet Anda.',
//   withCredentials: true,
// });

// let context = <GetServerSidePropsContext>{};
// const isServer = () => {
//   return typeof window === 'undefined';
// };

// api.defaults.withCredentials = false;

// api.interceptors.request.use(function (config) {
//   if (!config.headers) return config; // Skip if headers are not present

//   if (isServer()) {
//     if (!context)
//       throw 'Api Context not found. You must call `setApiContext(context)` before calling api on server-side';

//     const cookies = new Cookies(context.req?.headers.cookie);
//     const token = cookies.get('@ara/token');

//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     } else {
//       // Remove the following line to prevent adding the Authorization header
//       delete config.headers.Authorization;
//     }
//   } else {
//     const token = getToken();

//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     } else {
//       // Remove the following line to prevent adding the Authorization header
//       // delete config.headers.Authorization;
//     }
//   }

//   return config;
// });

// api.interceptors.response.use(
//   (config) => {
//     return config;
//   },
//   (error: AxiosError<UninterceptedApiError>) => {
//     if (error.response?.data.message) {
//       return Promise.reject({
//         ...error,
//         response: {
//           ...error.response,
//           data: {
//             ...error.response.data,
//             message:
//               typeof error.response.data.message === 'string'
//                 ? error.response.data.message
//                 : Object.values(error.response.data.message)[0][0],
//           },
//         },
//       });
//     }
//     return Promise.reject(error);
//   }
// );

// export const setApiContext = (_context: GetServerSidePropsContext) => {
//   context = _context;
//   return;
// };

// export default api;
