import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { employeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';

import { SharedModule } from 'src/app/shared/shared.module';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { FormsModule } from '@angular/forms';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { EmployeelistComponent } from './components/employeelist/employeelist.component';

import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeelistComponent,
    

  ],
  imports: [
    CommonModule,
    employeeRoutingModule,
    SharedModule,
    NgxIntlTelInputModule,
    FormsModule,
    NgxMaterialTimepickerModule,
    NgxMatSelectSearchModule,
    MatSelectModule


  ]
})
export class employeeModule { }
