import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Route } from '../constants/route-constant';
import { AuthStoreService } from '../services/store/auth-store.service';
import { LocalstorageService } from '../services/localstorage.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(
    private readonly router: Router,
    private readonly authStoreService: AuthStoreService,
    private readonly localstorageService: LocalstorageService,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = this.localstorageService.getAccessToken();
    if (token !== null) {
      this.authStoreService.getUser({ token: token });
    } else {
      if (state.url === '/login')  return true;
      this.router.navigate([Route.login]);
    }
    const isAdmin = this.authStoreService.user?.role === 'admin';
    if (isAdmin) {
      this.router.navigate([Route.admin + '/dashboard']);
      return true;
    } else {
      this.router.navigate([Route.profile]);
      return true;
    }

  }
}
