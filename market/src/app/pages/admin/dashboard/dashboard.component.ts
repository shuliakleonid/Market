import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProductStoreService } from '../../../services/store/product-store.service';
import { Product } from '../../../interfaces/product';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponentComponent } from '../../../conponents/modal-component/modal-component.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = [
    'title',
    'description',
    'price',
    'image',
    'quantity',
    'open',
    'delete',
  ];

  dataSource!: MatTableDataSource<Product>;

  subProduct: Subscription | undefined;

  constructor(private productStoreService: ProductStoreService, public dialog: MatDialog) {
    this.productStoreService.getProducts();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.subProduct = this.productStoreService.products$.subscribe((product) => {
      console.log(product, 'PRODUCT');
      if (product) {
        this.dataSource = new MatTableDataSource(product);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subProduct) this.subProduct.unsubscribe();
  }

  deleteProduct(id: number) {
    this.productStoreService.deleteProduct(id);
  }

  openProduct(id: number) {
    this.productStoreService.getProduct(id);
    this.dialog.open(ModalComponentComponent, {
      height: '80vh',
      width: '50vw',
    });
  }
}
