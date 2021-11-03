import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../../interfaces/product';
import { ProductHttpService } from '../product-http.service';

@Injectable({
  providedIn: 'root',
})
export class ProductStoreService {
  private readonly productSubject$ = new BehaviorSubject<Product[] | null>(null);

  readonly products$ = this.productSubject$.asObservable();

  constructor(private readonly productHttpService: ProductHttpService) {}

  private get products(): Product[] {
    return <Product[]> this.productSubject$.getValue();
  }

  private set products(products: Product[]) {
    this.productSubject$.next(products);
  }

  getProducts() {
    this.productHttpService.getProducts().subscribe({
      next: (products) => {
        console.log(products, 'Product Store');
        this.products = [...products];
      },
    });
  }

  deleteProduct(id: number) {
    this.productHttpService.deleteProducts(id).subscribe();
    this.getProducts();
  }
}
