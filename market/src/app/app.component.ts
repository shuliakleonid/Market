import { Component } from '@angular/core';
import { LoadingIndicatorService } from './services/loading-indicator.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly loading$: Observable<boolean> = this.loadingService.loading$;

  constructor(private loadingService: LoadingIndicatorService) {}
}
