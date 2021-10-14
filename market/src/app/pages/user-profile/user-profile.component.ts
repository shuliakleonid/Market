import { Component, OnInit } from '@angular/core';
import { ELEMENT_DATA } from '../../constants/mock-data';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['position', 'name', 'price', 'quantity'];
  dataSource = ELEMENT_DATA;
}
