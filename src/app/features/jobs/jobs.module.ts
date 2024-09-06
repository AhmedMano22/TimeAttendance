import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobsComponent } from './jobs.component';
import { JobsListComponent } from './components/jobs-list/jobs-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    JobsComponent,
    JobsListComponent
  ],
  imports: [
    CommonModule,
    JobsRoutingModule,
    SharedModule,
  ]
})
export class JobsModule { }
