import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeTableComponent } from './time-table.component';
import { TimeTableListComponent } from './components/time-table-list/time-table-list.component';
import { AddTimeTableComponent } from './components/add-time-table/add-time-table.component';
import { EditTimeTableComponent } from './components/edit-time-table/edit-time-table.component';

const routes: Routes = [
  {path: '', component: TimeTableComponent, children: [{path: 'TimeTable-list', component: TimeTableListComponent}]},
  {path: '', component: TimeTableComponent, children: [{path: 'Add-TimeTable', component: AddTimeTableComponent}]},
  {path: '', component: TimeTableComponent, children: [{path: 'Edit-TimeTable/:id', component: EditTimeTableComponent}]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeTableRoutingModule { }
