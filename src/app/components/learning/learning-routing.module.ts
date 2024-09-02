import  { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailedCourseComponent } from './detailed-course/detailed-course.component';
import { LearningListComponent } from './learning-list/learning-list.component';

var routingAnimation = localStorage.getItem('animate') 

const routes: Routes = [
  {
    path:'',
    children: [
      {
        path: 'detailed-course',
        component: DetailedCourseComponent,
        data: { animation: [routingAnimation]}
      },
      {
        path: 'learning-list',
        component: LearningListComponent,
        data: { animation: [routingAnimation]}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearningRoutingModule { }
