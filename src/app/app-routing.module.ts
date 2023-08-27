import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuardGuard } from './shared/guard/auth-guard.guard';

const routes: Routes = [
  {
    path: 'admin',
    canActivate: [authGuardGuard],
    loadChildren: () =>
      import('./admin/admin.module').then(
        (x) => x.AdminModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
