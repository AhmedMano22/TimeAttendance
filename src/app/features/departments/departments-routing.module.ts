import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentsComponent } from './departments.component';
import { DepartmentListComponent } from './components/department-list/department-list.component';



const routes: Routes = [
  {path: '', component: DepartmentsComponent, children: [{path: 'departments-list', component: DepartmentListComponent}]},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentsRoutingModule { }
