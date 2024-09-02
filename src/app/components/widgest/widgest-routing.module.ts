import  { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { GeneralComponent } from './general/general.component';

var routingAnimation = localStorage.getItem('animate') 

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'chart',
        component: ChartComponent,
        data: { animation: [routingAnimation]}
      },
      {
        path: 'general',
        component: GeneralComponent,
        data: { animation: [routingAnimation]}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WidgestRoutingModule { }
