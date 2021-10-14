import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminRoutingModule} from './admin-routing.module';
import {EditComponent} from './edit/edit.component';
import {OrdersComponent} from './orders/orders.component';
import {AddComponent} from './add/add.component';
import {AdminLayoutComponent} from './admin-layout/admin-layout.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AngularMaterialCommonModule} from '../../angular-material-common.module';
import {OrderTableComponent} from '../../conponents/order-table/order-table.component';


@NgModule({
  declarations: [
    EditComponent,
    OrdersComponent,
    AddComponent,
    AdminLayoutComponent,
    DashboardComponent,
    OrderTableComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AngularMaterialCommonModule
  ]
})
export class AdminModule {
}
