import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerTransactionComponent } from './manager-transaction.component';
import { MissionListComponent } from './components/mission-list/mission-list.component';
import { VacationListComponent } from './components/vacation-list/vacation-list.component';
import { PermissionListComponent } from './components/permission-list/permission-list.component';

const routes: Routes = [
  {path: '', component: ManagerTransactionComponent, children: [{path: 'Mission-List', component: MissionListComponent}]},
  {path: '', component: ManagerTransactionComponent, children: [{path: 'Vacation-List', component: VacationListComponent}]},
  {path: '', component: ManagerTransactionComponent, children: [{path: 'Permission-List', component: PermissionListComponent}]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerTransactionRoutingModule { }
