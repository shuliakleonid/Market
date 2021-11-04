import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminStoreService } from '../../services/store/admin-store.service';
import { ProductStoreService } from '../../services/store/product-store.service';
import { Product } from '../../interfaces/product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-modal-component',
  templateUrl: './modal-component.component.html',
  styleUrls: ['./modal-component.component.scss'],
})
export class ModalComponentComponent implements OnInit, OnDestroy {
  public selectedFile: File | null | undefined;

  public EditItemReactiveForm!: FormGroup;

  product: Product | null | undefined;

  private subProd: Subscription | undefined;

  imgFilePath: string | ArrayBuffer | null | undefined;

  constructor(
    private fb: FormBuilder,
    private adminStoreService: AdminStoreService,
    private productStoreService: ProductStoreService,
  ) {}

  ngOnInit(): void {
    this.subProd = this.productStoreService.product$.subscribe((product) => {
      this.product = product;
      this.imgFilePath = product?.image;
    });
    this.initForm();
  }

  private initForm() {
    if (this.product) {
      this.EditItemReactiveForm = this.fb.group({
        title: [this.product.title, [Validators.required]],
        description: [this.product.description, [Validators.required]],
        price: [this.product.price, [Validators.required]],
        quantity: [this.product.quantity, [Validators.required]],
      });
    }
  }

  handleFileInput(event: Event) {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    this.selectedFile = file;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imgFilePath = reader.result;
    };
  }

  onSubmit() {
    console.log('SUBMIT');
    const formData = new FormData();
    formData.append('body', JSON.stringify(this.EditItemReactiveForm.value));
    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    } else {
      formData.append('image', JSON.stringify(this.product?.image));
    }
    if (this.product){
      this.productStoreService.updateProduct(formData, this.product.id);
    }
  }

  ngOnDestroy(): void {
    if (this.subProd) {
      this.subProd.unsubscribe();
    }
  }
}
