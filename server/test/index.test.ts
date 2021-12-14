import app from '../index';
import request from 'supertest';

let server;
describe('Index ', () => {
  beforeAll(async (done) => {
    server = app.listen(null, () => {
      global.agent = request.agent(server);
      done();
    });
  });
  afterEach(async () => {
    jest.restoreAllMocks();

  });
  it('should initialize Index ', async () => {
    const response = await request(app).get('/');
    expect(response);
  });
  test('should respond with a 500 error due to bad jsonp data', () => {
    return request(app)
      .get('/?tags=error&tagmode=all')
      .expect(404)
      .then(response => {
        expect(response.body).toEqual({});
      });
  });
  afterAll(async () => {
    await server.close();
  });
});
