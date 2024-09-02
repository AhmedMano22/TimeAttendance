import  { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocialAppComponent } from './social-app.component';

var routingAnimation = localStorage.getItem('animate') 
const routes: Routes = [
  {
    path: '',
    component:SocialAppComponent,
    data: { animation: [routingAnimation]}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialAppRoutingModule { }
