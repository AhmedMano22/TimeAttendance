import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonthCalcRoutingModule } from './month-calc-routing.module';
import { MonthCalcComponent } from './month-calc.component';
import { MainComponent } from './components/main/main.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@danielmoncada/angular-datetime-picker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';


@NgModule({
  declarations: [
    MonthCalcComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    MonthCalcRoutingModule,
    SharedModule,
    NgxMaterialTimepickerModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    // SelectDropDownModule,
    TimepickerModule.forRoot(),
  ]
})
export class MonthCalcModule { }
