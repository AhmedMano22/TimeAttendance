import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReportsListComponent } from './components/reports-list/reports-list.component';
import { ReportDetailsComponent } from './components/report-details/report-details.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@danielmoncada/angular-datetime-picker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';


@NgModule({
  declarations: [
    ReportsComponent,
    ReportsListComponent,
    ReportDetailsComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    SharedModule,
    NgxMaterialTimepickerModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    TimepickerModule.forRoot(),
  ]
})
export class ReportsModule { }
