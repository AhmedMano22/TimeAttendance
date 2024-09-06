import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeavesComponent } from './leaves.component';
import { LeavesListComponent } from './components/leaves-list/leaves-list.component';

const routes: Routes = [
  {path: '', component: LeavesComponent, children: [{path: 'Leaves-list', component: LeavesListComponent}]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeavesRoutingModule { }
