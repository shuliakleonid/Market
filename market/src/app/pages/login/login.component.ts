import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  public loginReactiveForm!: FormGroup;

  submitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit() {
    const { controls } = this.loginReactiveForm;
    if (this.loginReactiveForm.invalid) {
      this.submitted = true;
      Object.keys(controls).forEach((controlName) => controls[controlName].markAsTouched());
    }
    this.submitted = false;
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
