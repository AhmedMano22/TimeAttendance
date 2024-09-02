import  { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchWebsiteComponent } from './search-website.component';

var routingAnimation = localStorage.getItem('animate') 

const routes: Routes = [
  {
    path: '',
    component: SearchWebsiteComponent,
    data: { animation: [routingAnimation]}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchWebsiteRoutingModule { }
