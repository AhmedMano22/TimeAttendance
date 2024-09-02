import  { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyComponent } from './apply/apply.component';
import { CardsViewComponent } from './cards-view/cards-view.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { ListViewComponent } from './list-view/list-view.component';

var routingAnimation = localStorage.getItem('animate') 

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'cards-view',
        component: CardsViewComponent,
        data: { animation: [routingAnimation]}
      },
      {
        path: 'list-view',
        component: ListViewComponent,
        data: { animation: [routingAnimation]}
      },
      {
        path: 'job-details',
        component: JobDetailsComponent,
        data: { animation: [routingAnimation]}
      },
      {
        path: 'apply',
        component: ApplyComponent,
        data: { animation: [routingAnimation]}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobSearchRoutingModule { }
