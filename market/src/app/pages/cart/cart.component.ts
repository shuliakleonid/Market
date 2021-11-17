import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { ProductStoreService } from '../../services/store/product-store.service';
import { Product } from '../../interfaces/product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, AfterContentChecked {
  deliveryReactiveForm!: FormGroup;

  readonly COST_DELIVERY = 10;

  readonly COST_TOTAL = 0;

  subtotalPrice = this.COST_TOTAL;

  delivery = this.COST_DELIVERY;

  constructor(private readonly productService: ProductStoreService, private fb: FormBuilder) {
    console.log(this.productService.cartProducts, 'Products');
  }

  ngOnInit(): void {
    this.initForm();
  }

  ngAfterContentChecked(){
    this.subtotalPrice = 0;
    for (const product in this.products) {
      this.subtotalPrice += this.products[product].price * this.products[product].quantityCart;
    }
  }


  products: Product[] = this.productService.cartProducts;

  onSubmit() {
    console.log(this.deliveryReactiveForm.value, 'FORM');
    console.table(this.products);
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

  addQuantityProduct($event: Product) {
    const changedProduct = $event;
    for (const product in this.products) {
      if (this.products[product].id === changedProduct.id){
        this.products[product] = changedProduct;
      }
    }
  }
}
