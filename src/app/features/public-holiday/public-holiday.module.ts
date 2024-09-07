import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { publicholidayRoutingModule } from './public-holiday-routing.module';

import { PublicHolidayComponent } from './public-holiday.component';

import { SharedModule } from 'src/app/shared/shared.module';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { FormsModule } from '@angular/forms';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { PublicHolidayListComponent } from './components/public-holiday-list/public-holiday-list.component';


@NgModule({
  declarations: [
    PublicHolidayComponent,

    PublicHolidayListComponent,
    

  ],
  imports: [
    CommonModule,
    publicholidayRoutingModule,
    SharedModule,
    NgxIntlTelInputModule,
    FormsModule,
    NgxMaterialTimepickerModule,
  ]
})
export class PublicHolidayModule { }


