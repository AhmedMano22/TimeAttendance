import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerTransactionRoutingModule } from './manager-transaction-routing.module';
import { ManagerTransactionComponent } from './manager-transaction.component';
import { VacationListComponent } from './components/vacation-list/vacation-list.component';
import { PermissionListComponent } from './components/permission-list/permission-list.component';
import { MissionListComponent } from './components/mission-list/mission-list.component';
import { FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@danielmoncada/angular-datetime-picker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

import { DropdownModule } from 'primeng/dropdown';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ManagerTransactionComponent,
    VacationListComponent,
    PermissionListComponent,
    MissionListComponent
  ],
  imports: [
    CommonModule,
    ManagerTransactionRoutingModule,
    SharedModule,
    FormsModule,
    NgxMaterialTimepickerModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    TimepickerModule.forRoot(),
    DropdownModule,
  ]
})
export class ManagerTransactionModule { }
