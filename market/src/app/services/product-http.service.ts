import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminApiUrl } from '../constants/route-constant';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductHttpService {

  constructor(private readonly http: HttpClient) { }

  getProducts(){
    return this.http.get<Product[]>(`${AdminApiUrl}allProduct`);
  }
}
