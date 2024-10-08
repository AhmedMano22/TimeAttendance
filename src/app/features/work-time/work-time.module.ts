import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { worktimeRoutingModule } from './work-time-routing.module';

import { WorkTimeComponent } from './work-time.component';

import { SharedModule } from 'src/app/shared/shared.module';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { FormsModule } from '@angular/forms';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { WorkTimeListComponent } from './components/work-time-list/work-time-list.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@danielmoncada/angular-datetime-picker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';


@NgModule({
  declarations: [
    WorkTimeComponent,

    WorkTimeListComponent,
    

  ],
  imports: [
    CommonModule,
    worktimeRoutingModule,
    SharedModule,
    NgxIntlTelInputModule,
    FormsModule,
    NgxMaterialTimepickerModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    TimepickerModule.forRoot(),
  ]
})
export class WorkTimeModule { }


