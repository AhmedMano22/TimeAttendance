import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShiftRoutingModule } from './shift-routing.module';
import { ShiftComponent } from './shift.component';
import { ShiftsListComponent } from './components/shifts-list/shifts-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ShiftComponent,
    ShiftsListComponent
  ],
  imports: [
    CommonModule,
    ShiftRoutingModule,
    SharedModule,
  ]
})
export class ShiftModule { }
