import { Component, OnInit } from '@angular/core';
import { ELEMENT_DATA } from '../../constants/mock-data';
import { AuthStoreService } from '../../services/store/auth-store.service';
import { User } from '../../interfaces/user.interfaces';
import { Observable } from 'rxjs';
import { LocalstorageService } from '../../services/localstorage.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'price', 'quantity'];

  dataSource = ELEMENT_DATA;


  user$: Observable<User | null> = this.authStoreService.activeUser$;

  user: User | undefined;

  constructor(private readonly authStoreService: AuthStoreService, private readonly localStorageSv:LocalstorageService) {}

  ngOnInit(): void {
    const token = this.localStorageSv.getAccessToken();
    if (token){
      this.authStoreService.refreshUser({ token });
    }
  }


}
