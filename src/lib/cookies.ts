import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const getToken = (): string => {
  return cookies.get('@ara/token');
};

export const setToken = (token: string) => {
  cookies.set('@ara/token', token, {
    path: '/',
  });
};

export const removeToken = () => {
  cookies.remove('@ara/token', {
    path: '/',
  });
};
