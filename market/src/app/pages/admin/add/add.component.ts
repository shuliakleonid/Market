import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminStoreService } from '../../../services/store/admin-store.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  public selectedFile: File | null | undefined;

  public AddItemReactiveForm!: FormGroup;

  constructor(private fb: FormBuilder, private adminStoreService: AdminStoreService) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.AddItemReactiveForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
    });
  }

  handleFileInput(event: Event) {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    if (file) {
      this.selectedFile = file;
    }
  }

  onSubmit() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('image', this.selectedFile);
      formData.append('body', JSON.stringify(this.AddItemReactiveForm.value));
      this.adminStoreService.addProduct(formData);
    }
  }
}
