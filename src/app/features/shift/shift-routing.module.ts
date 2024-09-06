import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShiftsListComponent } from './components/shifts-list/shifts-list.component';
import { ShiftComponent } from './shift.component';

const routes: Routes = [
  {path: '', component: ShiftComponent, children: [{path: 'shifts-list', component: ShiftsListComponent}]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShiftRoutingModule { }
