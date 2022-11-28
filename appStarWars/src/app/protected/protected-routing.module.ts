import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthModule } from './../auth/auth.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [


  {
    path: '',
    children: [
      {path: '', component: DashboardComponent},
      {path: '', redirectTo: ''},
    ]
  }


  /*
  {
    path: 'auth',
    loadChildren: () => import('../auth/auth.module').then (m => m.AuthModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('../protected/protected.module').then (m => m.ProtectedModule)
  }
  */

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
