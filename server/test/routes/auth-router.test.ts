import createServer from '../../utils/server';
import supertest from 'supertest';

let server = createServer();


describe('AuthController', ()=>{
  beforeEach(() => jest.resetModules());


  test('AuthController', () => {
    let registrationUserData =  {
      password: '123456',
      email: 'admin-TEST@gmail.com',
      first_name: 'TEST',
      last_name: 'TEST',
      phone:'TEST',
      birth_date:'TEST',
    };
    jest.doMock('../../controllers/auth-controller', () => {
      return {
        __esModule: true,
        registration: jest.fn(()=>registrationUserData),
        login: 'token',
      };
    });
    return import('../../controllers/auth-controller').then(authController => {
      //@ts-ignore
      expect(authController.registration()).toEqual(registrationUserData);
      //@ts-ignore
      expect(authController.login).toEqual('token');
    });













    // let registrationUserData =  {
    //   password: '123456',
    //   email: 'admin-TEST@gmail.com',
    //   first_name: 'TEST',
    //   last_name: 'TEST',
    //   phone:'TEST',
    //   birth_date:'TEST',
    // };
    // let req:any = mockRequest();
    // const res:any = mockResponse();
    // req.body = registrationUserData;
    // await AuthController.registration(req, res);

    // expect(res.send).toHaveBeenCalledTimes(1);
    // expect(res.send.mock.calls.length).toBe(1);
    // expect(res.status).toBe(200);
    // const SPY = jest.fn(() => registrationUserData);
    // jest
    //   .spyOn(AuthController, 'registration')
    //   .mockImplementation(async () => SPY());
    //
    // await AuthController.registration();
    it('getting users', async () => {
      // jest.doMock('../db', () => {
      //   // ../db mock
      //   return {
      //     getUsers: () => ['mocked john', 'mocked ann', 'mocked matt']
      //   };
      // });
      // // we need to create requester after mock is defined
      // const requester = createRequester();
      // const users = await requester.get('/backend/users');
      // expect(users.body[0]).toBe('mocked john');
      // expect(users.body[1]).toBe('mocked ann');
      // expect(users.body[2]).toBe('mocked matt');
    });

  });

  it('should return 404', async ()=> {
    await supertest(server).post('/api/registration').expect(404);
  });

  xit('should registration user and return 200 status', async ()=> {
  //   const registrationUserData =  {
  //     password: '123456',
  //     email: 'admin-TEST@gmail.com',
  //     first_name: 'TEST',
  //     last_name: 'TEST',
  //     phone:'TEST',
  //     birth_date:'TEST',
  //   };
  //   const { body, statusCode } = await supertest(server)
  //     .post('/auth/registration')
  //     .send(registrationUserData);
  //
  //
  //   expect(query.mock.calls.length).toBe(1);
  });

});
