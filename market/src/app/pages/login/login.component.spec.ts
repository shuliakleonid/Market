import { LoginComponent } from './login.component';
import { FormBuilder, Validators } from '@angular/forms';
import { LocalstorageService } from '../../services/localstorage.service';
import { async, ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('Login component', () => {
  let store = {};
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let fb: FormBuilder;
  let localStorageService: LocalstorageService;

  const mockLocalStorage = {
    clearAccessToken: () => {
      store = {};
    },
    setAccessToken: (keyStorage: string = 'token', token: string) => {
      // @ts-ignore
      store[keyStorage] = `${token}`;
    },
    getAccessToken: (): string => {
      // @ts-ignore
      return store.token;
    },
  };
  // let authService: AuthStoreService;
  // const fakeAuthService = { singIn: (user: SignIn) => true };

  const validUser = {
    userLogin: 'zeleny777@gmail.com',
    userPassword: 'Password',
  };
  const invalidUser = {
    userLogin: '123',
    userPassword: '123',
  };
  // const fakeAuthStore = { check: () => true };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [
        LocalstorageService,
        FormBuilder,
        // { provide: AuthStoreService, userSing: fakeAuthService }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fb = TestBed.inject(FormBuilder); // get a handle on formBuilder
    localStorageService = TestBed.inject(LocalstorageService); // get a handle on formBuilder
    // authService = TestBed.inject(AuthStoreService); // get a handle on formBuilder

    // add the mock data here
    component.loginReactiveForm = fb.group({
      userLogin: ['', [Validators.required, Validators.email]],
      userPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
    spyOn(localStorage, 'getItem').and.callFake(mockLocalStorage.getAccessToken);

    spyOn(localStorage, 'setItem').and.callFake(mockLocalStorage.setAccessToken);
    spyOn(localStorage, 'removeItem').and.callFake(mockLocalStorage.clearAccessToken);
    // this fixture.detectChanges will kick off the ngOnInit
    fixture.detectChanges();
  });

  function updateForm(userEmail: string, userPassword: string) {
    component.loginReactiveForm.controls.userLogin.setValue(userEmail);
    component.loginReactiveForm.controls.userPassword.setValue(userPassword);
  }

  it('should create Login', () => {
    expect(component).toBeTruthy();
  });

  it('should create from with 2 controls', () => {
    expect(component.loginReactiveForm.contains('userLogin')).toBeTruthy();
    expect(component.loginReactiveForm.contains('userPassword')).toBeTruthy();
  });

  it('should update form from changes', fakeAsync(() => {
    updateForm(validUser.userLogin, validUser.userPassword);
    expect(component.loginReactiveForm.value).toEqual(validUser);
  }));

  it('isValid should be false when form is invalid', fakeAsync(() => {
    updateForm(invalidUser.userLogin, invalidUser.userPassword);

    expect(component.isControlInvalid('userLogin')).toBeFalsy();
    expect(component.isControlInvalid('userPassword')).toBeFalsy();
  }));

  it('should clear local storage when user login first time', function () {
    localStorage.setItem('token', 'my_token');
    component.onSubmit();
    localStorageService.clearAccessToken();
    expect(localStorageService.getAccessToken()).toBeUndefined();
  });
});
