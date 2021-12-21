
describe('AuthController', ()=> {
  beforeEach(() => jest.resetModules());


  test('AuthController', () => {
    let registrationUserData = {
      password: '123456',
      email: 'admin-TEST@gmail.com',
      first_name: 'TEST',
      last_name: 'TEST',
      phone: 'TEST',
      birth_date: 'TEST',
    };
    jest.doMock('../../controllers/auth-controller', () => {
      return {
        __esModule: true,
        registration: jest.fn(() => registrationUserData),
        login: 'token',
      };
    });
    return import('../../controllers/auth-controller').then(authController => {
      //@ts-ignore
      expect(authController.registration()).toEqual(registrationUserData);
      //@ts-ignore
      expect(authController.login).toEqual('token');
    });
  });
});
