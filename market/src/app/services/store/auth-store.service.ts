import { Injectable } from '@angular/core';
import { AuthHttpService } from '../auth-http.service';
import { SignIn, SingUp, Token, User } from '../../interfaces/user.interfaces';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { Route } from '../../constants/route-constant';
import { LocalstorageService } from '../localstorage.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthStoreService {
  private readonly userSubject$ = new BehaviorSubject<User | null>(null);

  readonly activeUser$ = this.userSubject$.asObservable();

  readonly isAdmin$ = this.userSubject$.pipe(map((user) => user?.role));

  constructor(
    private readonly authHttpService: AuthHttpService,
    private readonly router: Router,
    private readonly localstorageService: LocalstorageService,
  ) {}

  get user(): User {
    return <User> this.userSubject$.getValue();
  }

  private set user(user: User) {
    this.userSubject$.next(user);
  }

  public singIn(signInModel: SignIn): void {
    this.authHttpService.signIn(signInModel).subscribe({
      next: (token) => {
        this.getUser(token);
        this.localstorageService.setAccessToken(token.token);
      },
    });
  }

  singUp(singUpModel: SingUp): void {
    this.authHttpService.singUp(singUpModel).subscribe();
    this.router.navigate([Route.login]);
  }

  getUser(token: Token) {
    this.authHttpService.getUser(token).subscribe({
      next: (user) => {
        console.log(user);
        this.user = { ...user };
        if (user) {
          this.router.navigate([Route.catalog]);
        }
      },
    });
  }
}
