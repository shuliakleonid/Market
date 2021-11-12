import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageService } from '../../../services/localstorage.service';
import { Route } from '../../../constants/route-constant';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
})
export class AdminLayoutComponent {
  constructor(private readonly router: Router,
    private readonly localstorageService: LocalstorageService) {
  }

  logout() {
    this.localstorageService.clearAccessToken();
    //Todo set logout on server site
    this.router.navigate([Route.login]);
  }
}
