import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { EditComponent } from './edit/edit.component';
import { OrdersComponent } from './orders/orders.component';
import { AddComponent } from './add/add.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    EditComponent,
    OrdersComponent,
    AddComponent,
    AdminLayoutComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MatButtonModule
  ]
})
export class AdminModule { }
