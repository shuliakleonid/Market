import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { delay, distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoadingIndicatorService {

  private loading = 0;

  private readonly isLoading$: Subject<boolean> = new BehaviorSubject<boolean>(false);

  readonly loading$: Observable<boolean> = this.isLoading$.pipe(distinctUntilChanged(), delay(0));

  start() {
    this.loading += 1;
    this.emit();
  }

  stop() {
    if (this.loading > 0) {
      this.loading -= 1;
      this.emit();
    }
  }

  private emit() {
    this.isLoading$.next(this.isLoading());
  }

  private isLoading(): boolean {
    return this.loading > 0;
  }
}
