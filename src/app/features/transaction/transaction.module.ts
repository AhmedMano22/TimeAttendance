import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@danielmoncada/angular-datetime-picker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { SharedModule } from 'src/app/shared/shared.module';
import { VacationListComponent } from './components/vacation-list/vacation-list.component';
import { MissionListComponent } from './components/mission-list/mission-list.component';
import { TransactionComponent } from './transaction.component';
import { PermissionListComponent } from './components/permission-list/permission-list.component';
import { DropdownFilterOptions } from 'primeng/dropdown';
import { DropdownModule } from 'primeng/dropdown';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatSelectModule } from '@angular/material/select';



// import { SelectDropDownModule } from 'ngx-select-dropdown'
@NgModule({
  declarations: [
    TransactionComponent,
    VacationListComponent,
    MissionListComponent,
    PermissionListComponent
  ],
  imports: [
    CommonModule,
    TransactionRoutingModule,
    SharedModule,
    FormsModule,
    NgxMaterialTimepickerModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    TimepickerModule.forRoot(),
    DropdownModule,
    // SelectDropDownModule
    NgxMatSelectSearchModule,
    MatSelectModule,

    
    
  ]
})
export class TransactionModule { }
