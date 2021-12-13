import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthStoreService } from '../../services/store/auth-store.service';
import { LocalstorageService } from '../../services/localstorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  public loginReactiveForm!: FormGroup;

  submitted = false;

  constructor(
    private fb: FormBuilder,
    private readonly authStoreService: AuthStoreService,
    private readonly localstorageService: LocalstorageService,
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit() {
    this.submitted = true;
    this.localstorageService.clearAccessToken();
    const { controls } = this.loginReactiveForm;
    if (this.loginReactiveForm.invalid) {
      Object.keys(controls).forEach((controlName) => controls[controlName].markAsTouched());
    }
    this.authStoreService.singIn({
      email: this.loginReactiveForm.value.userLogin,
      password: this.loginReactiveForm.value.userPassword,
    });
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.loginReactiveForm.controls[controlName];
    const result = control.invalid && control.touched;
    return result;
  }

  private initForm() {
    this.loginReactiveForm = this.fb.group({
      userLogin: ['', [Validators.required, Validators.email]],
      userPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
}
