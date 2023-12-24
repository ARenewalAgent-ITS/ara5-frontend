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

export const getRememberedEmail = (): string | undefined => {
  return cookies.get('@ara/rememberedEmail');
};

export const getRememberedPassword = (): string | undefined => {
  return cookies.get('@ara/rememberedPassword');
};

export const setRememberedCredentials = (email: string, password: string) => {
  cookies.set('@ara/rememberedEmail', email, {
    path: '/',
  });
  cookies.set('@ara/rememberedPassword', password, {
    path: '/',
  });
};

export const removeRememberedCredentials = () => {
  cookies.remove('@ara/rememberedEmail', {
    path: '/',
  });
  cookies.remove('@ara/rememberedPassword', {
    path: '/',
  });
};
