import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';

import { TaskComponent } from './task.component';
import { TaskFilterComponent } from './task-filter/task-filter.component';
import { TaskTabComponent } from './task-tab/task-tab.component';
import { NewTaskComponent } from './modal/new-task/new-task.component';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    TaskComponent,
    TaskFilterComponent,
    TaskTabComponent,
    NewTaskComponent,
   
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    SharedModule
  ]
})
export class TaskModule { }
