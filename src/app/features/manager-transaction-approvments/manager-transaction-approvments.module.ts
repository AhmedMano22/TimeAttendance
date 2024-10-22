import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerTransactionApprovmentsRoutingModule } from './manager-transaction-approvments-routing.module';
import { ManagerTransactionApprovmentsComponent } from './manager-transaction-approvments.component';
import { MainComponent } from './components/main/main.component';
import { FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@danielmoncada/angular-datetime-picker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

import { DropdownModule } from 'primeng/dropdown';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ManagerTransactionApprovmentsComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    ManagerTransactionApprovmentsRoutingModule,
    SharedModule,
    FormsModule,
    NgxMaterialTimepickerModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    TimepickerModule.forRoot(),
    DropdownModule,
  ]
})
export class ManagerTransactionApprovmentsModule { }
