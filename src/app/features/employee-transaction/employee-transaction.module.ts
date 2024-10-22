import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeTransactionRoutingModule } from './employee-transaction-routing.module';
import { EmployeeTransactionComponent } from './employee-transaction.component';
import { MissionListComponent } from './components/mission-list/mission-list.component';
import { PermissionListComponent } from './components/permission-list/permission-list.component';
import { VacationListComponent } from './components/vacation-list/vacation-list.component';

import { FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@danielmoncada/angular-datetime-picker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { DropdownModule } from 'primeng/dropdown';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EmployeeTransactionComponent,
    MissionListComponent,
    PermissionListComponent,
    VacationListComponent
  ],
  imports: [
    CommonModule,
    EmployeeTransactionRoutingModule,
    SharedModule,
    FormsModule,
    NgxMaterialTimepickerModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    TimepickerModule.forRoot(),
    DropdownModule,
  ]
})
export class EmployeeTransactionModule { }
