import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeavesRoutingModule } from './leaves-routing.module';
import { LeavesComponent } from './leaves.component';
import { LeavesListComponent } from './components/leaves-list/leaves-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    LeavesComponent,
    LeavesListComponent
  ],
  imports: [
    CommonModule,
    LeavesRoutingModule,
    SharedModule
  ]
})
export class LeavesModule { }
