import { Injectable } from '@angular/core';
import { AuthHttpService } from '../auth-http.service';
import { SignIn, Token } from '../../interfaces/user.interfaces';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthStoreService {

  private readonly tokenSubject$ = new Subject<Token>();

  constructor(private readonly authHttpService: AuthHttpService) { }

  private set token(token: Token) {
    this.tokenSubject$.next(token);
  }

  singIn(signInModel: SignIn):void {
    this.authHttpService.signIn(signInModel).subscribe({
      next:(token)=>{
        this.token = { ...token };
      },
    });
  }

}
