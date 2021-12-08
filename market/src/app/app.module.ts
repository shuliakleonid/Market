import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialCommonModule } from './angular-material-common.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './shared/token.interceptor';
import { LoadingInterceptor } from './shared/loading.interceptor';
import { MatProgressBarModule } from '@angular/material/progress-bar';

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: TokenInterceptor,
};

const INTERCEPTOR_LOADING_INDICATOR: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: LoadingInterceptor,
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularMaterialCommonModule,
    MatProgressBarModule,
  ],
  providers: [INTERCEPTOR_PROVIDER, INTERCEPTOR_LOADING_INDICATOR],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
