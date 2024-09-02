import  { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CryptoComponent } from './crypto/crypto.component';
import { DefaultComponent } from './default/default.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';

var routingAnimation = localStorage.getItem('animate') 

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'crypto',
        component: CryptoComponent,
        data: { animation: [routingAnimation]}
      },
      {
        path: 'default',
        component: DefaultComponent,
        data: { animation: [routingAnimation]}

      },
      {
        path: 'ecommerce',
        component: EcommerceComponent,
        data: { animation: [routingAnimation]}
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {
  constructor(){
    routingAnimation = localStorage.getItem("animate");
    
  }
}
