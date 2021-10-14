import { Component } from '@angular/core';
import { ELEMENT_DATA } from '../../constants/mock-data';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent {
  displayedColumns: string[] = ['position', 'name', 'price', 'quantity'];

  dataSource = ELEMENT_DATA;
}
