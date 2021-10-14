import { Component, OnInit } from '@angular/core';
import {ELEMENT_DATA} from '../../constants/mock-data';


@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.scss']
})
export class OrderTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['position', 'name', 'price', 'quantity'];
  dataSource = ELEMENT_DATA;
}
