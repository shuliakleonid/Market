import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './catalog.component';
import { HeaderComponent } from '../../conponents/header/header.component';
import { FilterComponent } from '../../conponents/filter/filter.component';
import { MainComponent } from '../../conponents/main/main.component';
import { FooterComponent } from '../../conponents/footer/footer.component';
import { CatalogItemComponent } from '../../conponents/catalog-item/catalog-item.component';
import { AngularMaterialCommonModule } from '../../angular-material-common.module';

@NgModule({
  declarations: [
    CatalogComponent,
    HeaderComponent,
    FilterComponent,
    MainComponent,
    FooterComponent,
    CatalogItemComponent,
  ],
  imports: [CommonModule, CatalogRoutingModule, AngularMaterialCommonModule],
})
export class CatalogModule {}
