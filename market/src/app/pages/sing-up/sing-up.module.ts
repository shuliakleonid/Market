import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingUpRoutingModule } from './sing-up-routing.module';
import { SingUpComponent } from './sing-up.component';
import { AngularMaterialCommonModule } from '../../angular-material-common.module';

@NgModule({
  declarations: [SingUpComponent],
  imports: [CommonModule, SingUpRoutingModule, AngularMaterialCommonModule],
})
export class SingUpModule {}
