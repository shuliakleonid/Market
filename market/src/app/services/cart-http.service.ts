import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Order} from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class CartHttpService {

  constructor(private readonly http: HttpClient) { }

  sendCartProducts(order:Order){
    return this.http.post('http://localhost:5000/cart/order', order)
  }


}
