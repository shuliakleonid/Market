import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('../app/pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'sing-up',
    loadChildren: () => import('../app/pages/sing-up/sing-up.module').then((m) => m.SingUpModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
