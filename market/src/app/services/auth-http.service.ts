import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignIn, Token } from '../interfaces/user.interfaces';
import { LoginApiUrl } from '../constants/route-constant';

@Injectable({
  providedIn: 'root',
})
export class AuthHttpService {
  constructor(private readonly http: HttpClient) {}

  signIn(signInModel: SignIn): Observable<Token> {
    return this.http.post<Token>(LoginApiUrl, { ...signInModel });
  }
}
