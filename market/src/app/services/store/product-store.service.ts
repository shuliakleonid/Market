import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../../interfaces/product';
import { ProductHttpService } from '../product-http.service';

@Injectable({
  providedIn: 'root',
})
export class ProductStoreService {
  private readonly productsSubject$ = new BehaviorSubject<Product[] | null>(null);

  private readonly productSubject$ = new BehaviorSubject<Product | null>(null);

  readonly products$ = this.productsSubject$.asObservable();

  readonly product$ = this.productSubject$.asObservable();

  constructor(private readonly productHttpService: ProductHttpService) {}

  private get products(): Product[] {
    return <Product[]>this.productsSubject$.getValue();
  }

  private set products(products: Product[]) {
    this.productsSubject$.next(products);
  }

  private get product(): Product {
    return <Product>this.productSubject$.getValue();
  }

  private set product(product: Product) {
    this.productSubject$.next(product);
  }

  getProducts() {
    this.productHttpService.getProducts().subscribe({
      next: (products) => {
        console.log(products, 'Product Store');
        this.products = [...products];
      },
    });
  }

  getProduct(id: number) {
    this.productHttpService.getProduct(id).subscribe({
      next: (product) => {
        this.product = { ...product };
      },
    });
  }

  deleteProduct(id: number) {
    this.productHttpService.deleteProducts(id).subscribe();
    this.getProducts();
  }

  updateProduct(product: FormData, id: number) {
    this.productHttpService.update(product, id).subscribe();
    // this.getProduct(id);
  }
}
