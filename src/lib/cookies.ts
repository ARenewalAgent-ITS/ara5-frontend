import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const getToken = (): string => {
  return cookies.get('@ara/accessToken');
};

export const setToken = (token: string) => {
  cookies.set('@ara/accessToken', token, {
    path: '/',
  });
};

export const removeToken = () => {
  cookies.remove('@ara/accessToken', {
    path: '/',
  });
};
