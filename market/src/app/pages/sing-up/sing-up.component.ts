import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthStoreService } from '../../services/store/auth-store.service';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss'],
})
export class SingUpComponent implements OnInit {
  public SingUpReactiveForm!: FormGroup;

  submitted = false;

  constructor(private fb: FormBuilder, private readonly authStoreService: AuthStoreService) {}

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit() {
    console.log(this.SingUpReactiveForm.value, 'FORM');
    const { controls } = this.SingUpReactiveForm;

    if (this.SingUpReactiveForm.invalid) {
      Object.keys(controls).forEach((controlName) => controls[controlName].markAsTouched());
    }

    this.submitted = false;
    this.authStoreService.singUp({
      first_name: this.SingUpReactiveForm.value.firstName,
      last_name: this.SingUpReactiveForm.value.lastName,
      email: this.SingUpReactiveForm.value.email,
      phone: this.SingUpReactiveForm.value.phone,
      birth_date: this.SingUpReactiveForm.value.birthDate,
      password: this.SingUpReactiveForm.value.password,
    });
  }

  private initForm() {
    this.SingUpReactiveForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      birthDate: [''],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
}
