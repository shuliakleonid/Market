import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import {UserProfileComponent} from './user-profile.component';
import {AngularMaterialCommonModule} from '../../angular-material-common.module';


@NgModule({
  declarations: [UserProfileComponent],
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    AngularMaterialCommonModule
  ]
})
export class UserProfileModule { }
