import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartHttpService {

  constructor(private readonly http: HttpClient) { }

  sendCartProducts(order:any){
    return this.http.post('http://localhost:5000/cart/order', order).subscribe();
  }


}
