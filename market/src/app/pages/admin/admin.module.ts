import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { OrdersComponent } from './orders/orders.component';
import { AddComponent } from './add/add.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AngularMaterialCommonModule } from '../../angular-material-common.module';
import { OrderTableComponent } from '../../conponents/order-table/order-table.component';
import { ModalComponentComponent } from '../../conponents/modal-component/modal-component.component';
import { AdminGuard } from '../../guard/admin.guard';

@NgModule({
  declarations: [
    OrdersComponent,
    AddComponent,
    AdminLayoutComponent,
    DashboardComponent,
    OrderTableComponent,
    ModalComponentComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, AngularMaterialCommonModule],
  providers: [AdminGuard],
})
export class AdminModule {}
