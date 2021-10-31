import { Injectable } from '@angular/core';
import { AdminHttpService } from '../admin-http.service';

@Injectable({
  providedIn: 'root',
})
export class AdminStoreService {

  constructor(private readonly adminHttpService: AdminHttpService) { }

  addProduct(product:FormData){
    this.adminHttpService.addProduct(product).subscribe();
  }

}
