import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
  {path:'profile',
    loadChildren: () => import('../app/pages/user-profile/user-profile.module').then((m) => m.UserProfileModule),
  },
  {path:'cart',
    loadChildren: () => import('../app/pages/cart/cart.module').then((m) => m.CartModule),
  },
  {path: '**', loadChildren: () => import('../app/pages/page404/page404.module').then((m) => m.Page404Module), }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
