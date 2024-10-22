import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerTransactionApprovmentsComponent } from './manager-transaction-approvments.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
   {path: '', component: ManagerTransactionApprovmentsComponent, children: [{path: 'main', component: MainComponent}]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerTransactionApprovmentsRoutingModule { }
