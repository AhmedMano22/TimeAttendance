import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AdminGuard } from 'src/app/shared/guard/admin.guard';
import { SysAdminComponent } from './sys-admin/sys-admin.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AdminGuard],
  children:[
    {path:'', component :SysAdminComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
