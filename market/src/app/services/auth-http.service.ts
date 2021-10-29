import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignIn, SingUp, ResponseType, Token, User } from '../interfaces/user.interfaces';
import { LoginApiUrl, SingUpApiUrl, UserApiUrl } from '../constants/route-constant';

@Injectable({
  providedIn: 'root',
})
export class AuthHttpService {
  constructor(private readonly http: HttpClient) {}

  signIn(signInModel: SignIn): Observable<Token> {
    return this.http.post<Token>(LoginApiUrl, { ...signInModel });
  }

  singUp(singUpModel: SingUp):Observable<any>{
    return this.http.post<ResponseType>(SingUpApiUrl, { ...singUpModel });
  }

  getUser(token: Token): Observable<User> {
    return this.http.get<User>(UserApiUrl + token.token);
  }
}
