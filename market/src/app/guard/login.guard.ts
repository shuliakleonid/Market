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
import { User } from '../interfaces/user.interfaces';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router, public readonly authService: AuthStoreService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const activeUser: User | null = this.authService.user;
    if (activeUser) {
      // this.router.navigate([Route.profile]);
      return false;
    }
    return true;
  }
}
