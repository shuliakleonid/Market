import { Component } from '@angular/core';
import { ELEMENT_DATA } from '../../constants/mock-data';
import { AuthStoreService } from '../../services/store/auth-store.service';
import { User } from '../../interfaces/user.interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent {
  displayedColumns: string[] = ['position', 'name', 'price', 'quantity'];

  dataSource = ELEMENT_DATA;

  user$: Observable<User | null> = this.authStoreService.activeUser$;

  user: User | undefined;

  constructor(private readonly authStoreService: AuthStoreService) {}
}
