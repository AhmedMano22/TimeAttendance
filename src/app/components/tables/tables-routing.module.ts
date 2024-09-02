import  { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicTablesComponent } from './bootstrap-tables/basic-tables/basic-tables.component';
import { BasicInitComponent } from './data-tables/basic-init/basic-init.component';


var routingAnimation = localStorage.getItem('animate') 

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'bootstrap-tables',
        children: [
          {
            path: 'basic-tables',
            component: BasicTablesComponent,
            data: { animation: [routingAnimation]}
          },
        ]
      },
      {
        path: 'data-tables',
        children: [
          {
            path: 'basic-init',
            component: BasicInitComponent,
            data: { animation: [routingAnimation]}
          },
          
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule { }
