import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('../app/pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'catalog',
    loadChildren: () => import('../app/pages/catalog/catalog.module').then((m) => m.CatalogModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
