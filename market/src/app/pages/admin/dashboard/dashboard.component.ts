import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ELEMENT_DATA } from '../../../constants/mock-data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  displayedColumns: string[] = ['position', 'name', 'price', 'date of creation', 'open', 'delete'];

  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
