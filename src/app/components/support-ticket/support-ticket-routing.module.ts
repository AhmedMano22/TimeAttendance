import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupportTicketComponent } from './support-ticket.component';

var routingAnimation = localStorage.getItem('animate') 

const routes: Routes = [
  {
    path: '',
    component: SupportTicketComponent,
    data: { animation: [routingAnimation]}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupportTicketRoutingModule { }
