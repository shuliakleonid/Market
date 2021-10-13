import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Page404Component} from './pages/page404/page404.component';

const routes: Routes = [
  {path:'',redirectTo:'catalog',pathMatch: 'full'},
  {
    path: 'login',
    loadChildren: () => import('../app/pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'catalog',
    loadChildren: () => import('../app/pages/catalog/catalog.module').then((m) => m.CatalogModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('../app/pages/admin/admin.module').then((m) => m.AdminModule),
  },
  {path:'sing-up',
    loadChildren: () => import('../app/pages/sing-up/sing-up.module').then((m) => m.SingUpModule),
  },
  {path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
