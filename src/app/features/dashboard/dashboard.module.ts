import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SysAdminComponent } from './sys-admin/sys-admin.component';
import { LawyerComponent } from './lawyer/lawyer.component';
import { PersonComponent } from './person/person.component';
import { SuperVisorComponent } from './super-visor/super-visor.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SysAdminComponent,
    LawyerComponent,
    PersonComponent,
    SuperVisorComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
