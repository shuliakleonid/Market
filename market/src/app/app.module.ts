import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Page404Component } from './pages/page404/page404.component';
import {AngularMaterialCommonModule} from './angular-material-common.module';

@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularMaterialCommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
