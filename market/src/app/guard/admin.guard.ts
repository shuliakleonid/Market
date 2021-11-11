import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthStoreService } from '../services/store/auth-store.service';
import { Route } from '../constants/route-constant';
import { LocalstorageService } from '../services/localstorage.service';
import { UserRole } from '../constants/user-constant';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(
    private readonly router: Router,
    private readonly authStoreService: AuthStoreService,
    private readonly localstorageService: LocalstorageService,
  ) {}

  private adminRole: string | undefined;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (state.url === Route.adminWithSlash) return true;

    const token = this.localstorageService.getAccessToken();
    if (token === null) this.router.navigate([Route.login]);

    this.authStoreService.getUser({ token: token as string });
    this.authStoreService.isAdmin$.pipe(map((role) => (this.adminRole = role))).subscribe();

    const isAdmin = this.adminRole === UserRole.admin;
    if (!isAdmin) {
      // this.router.navigate([Route.profile]);
    }
    // this.router.navigate([Route.admin]);
    return true;
  }
}
