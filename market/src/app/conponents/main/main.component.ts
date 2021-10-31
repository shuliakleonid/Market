import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductStoreService } from '../../services/store/product-store.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  products: Product[] | null | undefined;

  constructor(private productStoreService: ProductStoreService) {}

  products$: Observable<Product[] | null> = this.productStoreService.products$;

  ngOnInit(): void {
    this.productStoreService.getProducts();
  }
}
