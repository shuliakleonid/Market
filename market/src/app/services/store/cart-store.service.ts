import { Injectable } from '@angular/core';
import {CartHttpService} from '../cart-http.service';
import {Order} from '../../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class CartStoreService {

  constructor(private readonly cartService: CartHttpService,) { }

  addProductToCard(order:Order){
    this.cartService.sendCartProducts(order).subscribe();
  }
}
