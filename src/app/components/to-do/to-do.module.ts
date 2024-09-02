import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ToDoRoutingModule } from './to-do-routing.module';
import { ToDoComponent } from './to-do.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ToDoFilterComponent } from './to-do-filter/to-do-filter.component';

@NgModule({
  declarations: [
    ToDoComponent,
    ToDoFilterComponent
  ],
  imports: [
    CommonModule,
    ToDoRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ToDoModule { }
