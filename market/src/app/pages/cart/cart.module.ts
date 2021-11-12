import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { AngularMaterialCommonModule } from '../../angular-material-common.module';
import { CartItemComponent } from '../../conponents/cart-item/cart-item.component';

@NgModule({
  declarations: [CartComponent, CartItemComponent],
  imports: [CommonModule, CartRoutingModule, AngularMaterialCommonModule],
})
export class CartModule {}
