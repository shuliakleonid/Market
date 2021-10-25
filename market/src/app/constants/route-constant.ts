export const BASE_API_URL = 'http://localhost:5000/';

export const LoginApiUrl = `${BASE_API_URL}auth/login`;
export const SingUpApiUrl = `${BASE_API_URL}auth/registration`;
export const UserApiUrl = `${BASE_API_URL}api/user/`;

export enum Route {
  catalog = 'catalog',
  admin = 'admin',
  singUp = 'sing-up',
  profile = 'profile',
  cart = 'cart',
  manage = 'adminProfile',
  statistics = 'statistics',
  result = 'result',
  test = 'test',
  assigned = 'testAssigned',
  error = 'error',
  login = 'login',
}
