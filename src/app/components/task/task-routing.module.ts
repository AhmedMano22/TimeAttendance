import  { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './task.component';

var routingAnimation = localStorage.getItem('animate') 

const routes: Routes = [
  {
    path: '',
    component:TaskComponent,
    data: { animation: [routingAnimation]}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
