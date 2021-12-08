import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoadingIndicatorService } from '../services/loading-indicator.service';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private readonly loadingIndicatorService: LoadingIndicatorService) {}

  intercept(request: HttpRequest<string>, next: HttpHandler): Observable<HttpEvent<string>> {
    this.loadingIndicatorService.start();
    return next.handle(request).pipe(finalize(() => this.loadingIndicatorService.stop()));
  }
}
