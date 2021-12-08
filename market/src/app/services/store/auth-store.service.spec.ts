import { async, TestBed } from '@angular/core/testing';
import { AuthStoreService } from './auth-store.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { SignIn } from '../../interfaces/user.interfaces';
import { asapScheduler, asyncScheduler, of } from 'rxjs';
import { AuthHttpService } from '../auth-http.service';


// const mockAuthHttpService = {
//   singIn: jasmine.createSpy('singIn').and.returnValue(of('Token', asyncScheduler)),
//   singUp: jasmine
//     .createSpy('singIn')
//     .and.returnValue(of({ message: 'You is registered' }, asapScheduler)),
//   getUser: jasmine.createSpy('singIn').and.returnValue(
//     of(
//       {
//         first_name: 'Name',
//         last_name: 'Last Name',
//         email: 'email',
//         phone: 'phone',
//         birth_date: '06.04.1985',
//         password: '123456',
//       },
//       asyncScheduler,
//     ),
//   ),
// };

fdescribe('AuthStoreService', () => {
  let router: Router;
  let service: AuthStoreService;
  let singInModel: SignIn;
  let  mockAuthHttpService:AuthHttpService;

  beforeEach(async(() => {
    // mockAuthHttpService = {
    // singIn(signInModel: SignIn){return of('Token');},
    // singUp(signInModel: SignIn){return of({ message:'You is registered' })},
    // getUser(token ){
    //   return of({
    //     first_name: 'Name',
    //     last_name: 'Last Name',
    //     email: 'email',
    //     phone: 'phone',
    //     birth_date: '06.04.1985',
    //     password: '123456',
    //   });
    // },
    //@ts-ignore
    mockAuthHttpService = {
      signIn: jasmine.createSpy('singIn').and.returnValue(of('Token', asyncScheduler)),
      singUp: jasmine
        .createSpy('singIn')
        .and.returnValue(of({ message: 'You is registered' }, asapScheduler)),
      getUser: jasmine.createSpy('singIn').and.returnValue(
        of(
          {
            first_name: 'Name',
            last_name: 'Last Name',
            email: 'email',
            phone: 'phone',
            birth_date: '06.04.1985',
            password: '123456',
          },
          asyncScheduler,
        ),
      ),
    };
    TestBed.configureTestingModule({
      // imports: [RouterTestingModule.withRoutes([])],
      imports: [RouterTestingModule],
      providers: [AuthStoreService, { provide: AuthHttpService, useValue: mockAuthHttpService }],
    });
    service = TestBed.inject(AuthStoreService);
  }));

  beforeEach(() => {
    singInModel = {
      email: 'email',
      password: '123456',
    };

    router = TestBed.inject(Router);
  });

  beforeEach(() => {
    let store = {};
    const mockLocalStorage = {
      getAccessToken: (): string => {
        // @ts-ignore
        return store.token;
      },
      setAccessToken: (keyStorage: string = 'token', token: string) => {
        // @ts-ignore
        store[keyStorage] = `${token}`;
      },
      clearAccessToken: () => {
        store = {};
      },
    };
    spyOn(localStorage, 'getItem').and.callFake(mockLocalStorage.getAccessToken);
    spyOn(localStorage, 'setItem').and.callFake(mockLocalStorage.setAccessToken);
    spyOn(localStorage, 'removeItem').and.callFake(mockLocalStorage.clearAccessToken);
  });

  it('should create AuthStoreService', function () {
    expect(service).toBeTruthy();
  });

  it('should singIn', () => {
    service.singIn(singInModel);
    expect(mockAuthHttpService.signIn).toHaveBeenCalled();
  });

  it('should singUp', () => {
    const singUp = {
      first_name: 'Name',
      last_name: 'Last Name',
      email: 'email',
      phone: 'phone',
      birth_date: '06.04.1985',
      password: '123456',
    };
    service.singUp(singUp);
    expect(mockAuthHttpService.singUp).toHaveBeenCalled();
  });

  it('should singIn', () => {
    service.getUser({ token:'token' });
    expect(mockAuthHttpService.getUser).toHaveBeenCalled();
  });
});
