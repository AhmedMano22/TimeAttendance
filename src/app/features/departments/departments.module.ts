import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentsRoutingModule } from './departments-routing.module';
import { DepartmentsComponent } from './departments.component';
import { DepartmentListComponent } from './components/department-list/department-list.component';
import { AddDepartmentComponent } from './components/add-department/add-department.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { FormsModule } from '@angular/forms';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { DetailsComponent } from './components/details/details.component';

@NgModule({
  declarations: [
    DepartmentsComponent,
    DepartmentListComponent,
    AddDepartmentComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    DepartmentsRoutingModule,
    SharedModule,
    NgxIntlTelInputModule,
    FormsModule,
    NgxMaterialTimepickerModule,
  ]
})
export class DepartmentsModule { }
