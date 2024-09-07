import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkTimeComponent } from './work-time.component';
import { WorkTimeListComponent } from './components/work-time-list/work-time-list.component';


const routes: Routes = [
  {path: '', component: WorkTimeComponent, children: [{path: 'WorkTime-list', component: WorkTimeListComponent}]},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class worktimeRoutingModule { }
