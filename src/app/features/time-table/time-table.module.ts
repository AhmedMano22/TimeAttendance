import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeTableRoutingModule } from './time-table-routing.module';

import { AddTimeTableComponent } from './components/add-time-table/add-time-table.component';
import { EditTimeTableComponent } from './components/edit-time-table/edit-time-table.component';
import { TimeTableListComponent } from './components/time-table-list/time-table-list.component';
import { TimeTableComponent } from './time-table.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@danielmoncada/angular-datetime-picker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TimeTableComponent,
    AddTimeTableComponent,
    EditTimeTableComponent,
    TimeTableListComponent
  ],
  imports: [
    CommonModule,
    TimeTableRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaterialTimepickerModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    TimepickerModule.forRoot(),

   
  ]
})
export class TimeTableModule { }
