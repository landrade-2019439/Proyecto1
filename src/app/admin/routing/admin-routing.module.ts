import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogsComponent } from '../Components/dogs/dogs.component';
import { authGuardGuard } from 'src/app/shared/guard/auth-guard.guard';

export const routes: Routes = [
  {
    path: '',
    canActivate: [authGuardGuard],
    children: [
      {
        path: 'dogs', component: DogsComponent,
        canActivate: [authGuardGuard]
      }
    ]
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule],
  bootstrap: [DogsComponent]
})

export class AdminRoutingModule { }
