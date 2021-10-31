import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseType } from '../interfaces/user.interfaces';
import { Observable } from 'rxjs';
import { AdminApiUrl } from '../constants/route-constant';

@Injectable({
  providedIn: 'root',
})
export class AdminHttpService {

  constructor(private readonly http: HttpClient) { }

  addProduct(product: FormData): Observable<ResponseType> {
    return this.http.post<ResponseType>(`${AdminApiUrl}add`,  product );
  }

}
