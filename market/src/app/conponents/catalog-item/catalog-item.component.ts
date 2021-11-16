import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductStoreService } from '../../services/store/product-store.service';

@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.scss'],
})
export class CatalogItemComponent implements OnInit {
  constructor(private readonly productService: ProductStoreService) {}

  @Input() product: Product | undefined;

  ngOnInit(): void {
    console.table(this.product);
  }

  addProduct(product: Product) {
    console.log(product);
    this.productService.addProductsCart(product);
  }
}
