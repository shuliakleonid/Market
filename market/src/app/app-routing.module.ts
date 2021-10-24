import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Route } from './constants/route-constant';

const routes: Routes = [
  { path: '', redirectTo: Route.catalog, pathMatch: 'full' },
  {
    path: Route.login,
    loadChildren: () => import('../app/pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: Route.catalog,
    loadChildren: () => import('../app/pages/catalog/catalog.module').then((m) => m.CatalogModule),
  },
  {
    path: Route.admin,
    loadChildren: () => import('../app/pages/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: Route.singUp,
    loadChildren: () => import('../app/pages/sing-up/sing-up.module').then((m) => m.SingUpModule),
  },
  {
    path: Route.profile,
    loadChildren: () =>
      import('../app/pages/user-profile/user-profile.module').then((m) => m.UserProfileModule),
  },
  {
    path: Route.cart,
    loadChildren: () => import('../app/pages/cart/cart.module').then((m) => m.CartModule),
  },
  {
    path: '**',
    loadChildren: () => import('../app/pages/page404/page404.module').then((m) => m.Page404Module),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
