import  { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SamplePageComponent } from './sample-page.component';

var routingAnimation = localStorage.getItem('animate') 

const routes: Routes = [
  {
    path: '',
    component: SamplePageComponent,
    data: { animation: [routingAnimation]}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SamplePageRoutingModule { }
