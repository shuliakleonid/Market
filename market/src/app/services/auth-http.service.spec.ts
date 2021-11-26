import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { async, TestBed } from '@angular/core/testing';
import { AuthHttpService } from './auth-http.service';
import { SingUp, User } from '../interfaces/user.interfaces';
import { LoginApiUrl, SingUpApiUrl, UserApiUrl } from '../constants/route-constant';

describe('AuthHttpService', () => {
  let http: HttpTestingController;
  let service: AuthHttpService;

  const user: User = {
    email: 'string',
    first_name: 'string',
    last_name: 'string',
    phone: 'string',
    birth_date: 'string',
    role: 'string',
  };
  const singUP: SingUp = {
    first_name: 'string',
    last_name: 'string',
    email: 'string',
    phone: 'string',
    birth_date: 'string',
    password: 'string',
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthHttpService],
    }).compileComponents();
  }));
  beforeEach(() => {
    http = TestBed.get(HttpTestingController);
    service = TestBed.get(AuthHttpService);
  });

  afterEach(() => {
    http.verify();
  });

  it('should AuthService create ', () => {
    expect(service).toBeTruthy();
  });

  it('should have made one request to GET data from expected URL', () => {
    service.getUser({ token: 'string' }).subscribe((data) => {
      expect(data).toEqual(user);
    });
    const req = http.expectOne(UserApiUrl + 'string');
    expect(req.request.method).toEqual('GET');
    req.flush(user);
  });

  it('should have made one request to POST data from URL', () => {
    service.signIn({ email: 'email', password: 'password' }).subscribe((data) => {
      expect(data).toEqual({ token: 'token' });
    });
    const req = http.expectOne(LoginApiUrl);
    expect(req.request.method).toEqual('POST');
    req.flush({ token: 'token' });
  });

  it('should have made one request to SingUp ', () => {
    service.singUp(singUP).subscribe((data) => {
      expect(data).toEqual({ message: 'string' });
    });
    const req = http.expectOne(SingUpApiUrl);
    expect(req.request.method).toEqual('POST');
    req.flush({ message: 'string' });
  });
});
