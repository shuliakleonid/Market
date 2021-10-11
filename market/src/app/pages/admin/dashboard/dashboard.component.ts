import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  price: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', price: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', price: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', price: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', price: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', price: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', price: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', price: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', price: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', price: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', price: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  ngOnInit(): void {
  }
  displayedColumns: string[] = ['position', 'name', 'price', 'date of creation','open','delete'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
