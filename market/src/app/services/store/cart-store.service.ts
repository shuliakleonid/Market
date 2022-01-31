import { Injectable } from '@angular/core';
import { CartHttpService } from '../cart-http.service';
import { Order } from '../../interfaces/product';
import { Router } from '@angular/router';
import { Route } from '../../constants/route-constant';

@Injectable({
  providedIn: 'root',
})
export class CartStoreService {

  constructor(private readonly cartService: CartHttpService, private readonly router: Router) { }

  addProductToCard(order:Order){
    this.cartService.sendCartProducts(order).subscribe();
    this.router.navigate([Route.catalog]);

  }
}
