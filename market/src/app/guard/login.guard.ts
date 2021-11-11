import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AdminRoute, Route } from '../constants/route-constant';
import { AuthStoreService } from '../services/store/auth-store.service';
import { LocalstorageService } from '../services/localstorage.service';
import { UserRole } from '../constants/user-constant';

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

    if (state.url === Route.loginWithSlash) return true;

    const token = this.localstorageService.getAccessToken();
    if (token !== null) {
      this.authStoreService.getUser({ token: token });
    }
    this.router.navigate([Route.login]);

    const isAdmin = this.authStoreService.user?.role === UserRole.admin;
    if (!isAdmin) {
      this.router.navigate([Route.profile]);
      return true;
    }
    this.router.navigate([Route.admin + AdminRoute.dashboard]);
    return true;
  }
}
