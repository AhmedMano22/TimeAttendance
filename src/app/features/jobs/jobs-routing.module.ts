import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsListComponent } from './components/jobs-list/jobs-list.component';
import { JobsComponent } from './jobs.component';

const routes: Routes = [
  {path: '', component: JobsComponent, children: [{path: 'jobs-list', component: JobsListComponent}]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
