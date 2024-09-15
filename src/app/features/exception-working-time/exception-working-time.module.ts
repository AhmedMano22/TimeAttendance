import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExceptionWorkingTimeRoutingModule } from './exception-working-time-routing.module';
import { ExceptionWorkingTimeComponent } from './exception-working-time.component';
import { ExceptionWTListComponent } from './components/exception-wt-list/exception-wt-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@danielmoncada/angular-datetime-picker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';


@NgModule({
  declarations: [
    ExceptionWorkingTimeComponent,
    ExceptionWTListComponent
  ],
  imports: [
    CommonModule,
    ExceptionWorkingTimeRoutingModule,
    SharedModule,
    FormsModule,
    NgxMaterialTimepickerModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    TimepickerModule.forRoot(),
  ]
})
export class ExceptionWorkingTimeModule { }
