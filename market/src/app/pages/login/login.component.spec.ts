import { LoginComponent } from './login.component';
import { AuthStoreService } from '../../services/store/auth-store.service';
import { FormBuilder } from '@angular/forms';
import { LocalstorageService } from '../../services/localstorage.service';

describe('Login component', () => {
  let component: LoginComponent;
  // const fakeAuthStore = { check: () => true };
  beforeEach(() => {
    //   TestBed.configureTestingModule({
    //     providers: [AuthStoreService, LocalstorageService, FormData],
    //   });
    //   authServ = TestBed.get(AuthStoreService);
    // @ts-ignore
    component = new LoginComponent(new FormBuilder(), AuthStoreService, LocalstorageService);
  });

  xit('should exist form', () => {
    expect(component).toBeTruthy();
  });

  xit('should create from with 2 controls', () => {
    expect(component.loginReactiveForm!.contains('userLogin')).toBe(true);
    expect(component.loginReactiveForm!.contains('userPassword')).toBeTruthy();
  });
});
