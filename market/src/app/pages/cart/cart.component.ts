import { Component, OnInit } from '@angular/core';
import { ProductStoreService } from '../../services/store/product-store.service';
import { Product } from '../../interfaces/product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  deliveryReactiveForm!: FormGroup;

  subtotalPrice = 0;

  delivery = 10;

  constructor(private readonly productService: ProductStoreService, private fb: FormBuilder) {
    console.log(this.productService.cartProducts, 'Products');
  }

  ngOnInit(): void {
    this.initForm();
    for (const product in this.products) {
      this.subtotalPrice += this.products[product].price;
    }
  }

  products: Product[] = this.productService.cartProducts;

  onSubmit() {
    console.log(this.deliveryReactiveForm.value, 'FORM');
    // go on server
  }

  private initForm() {
    this.deliveryReactiveForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      country: ['', [Validators.required]],
      city: ['', [Validators.required]],
      street: ['', [Validators.required]],
      postCode: ['', [Validators.required]],
    });
  }
}



