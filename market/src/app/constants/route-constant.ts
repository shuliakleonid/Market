export const BASE_API_URL = 'http://localhost:5000/';

export const LoginApiUrl = `${BASE_API_URL}auth/login`;
export const SingUpApiUrl = `${BASE_API_URL}auth/registration`;
export const UserApiUrl = `${BASE_API_URL}api/user/`;
export const AdminApiUrl = `${BASE_API_URL}admin/`;

export enum Route {
  catalog = 'catalog',
  admin = 'admin',
  singUp = 'sing-up',
  profile = 'profile',
  cart = 'cart',
  error = 'error',
  login = 'login',
  adminWithSlash = '/admin',
  loginWithSlash = '/login',
}
export enum AdminRoute {
  dashboard = '/dashboard',
}
