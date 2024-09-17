import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionComponent } from './transaction.component';

import { VacationListComponent } from './components/vacation-list/vacation-list.component';
import { MissionListComponent } from './components/mission-list/mission-list.component';
import { PermissionListComponent } from './components/permission-list/permission-list.component';

const routes: Routes = [
  {path: '', component: TransactionComponent, children: [{path: 'Mission-List', component: MissionListComponent}]},
  {path: '', component: TransactionComponent, children: [{path: 'Vacation-List', component: VacationListComponent}]},
  {path: '', component: TransactionComponent, children: [{path: 'Permission-List', component: PermissionListComponent}]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }
