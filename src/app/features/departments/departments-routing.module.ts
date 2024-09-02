import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentsComponent } from './departments.component';
import { DepartmentListComponent } from './components/department-list/department-list.component';
import { AddDepartmentComponent } from './components/add-department/add-department.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  {path: '', component: DepartmentsComponent, children: [{path: 'departments-list', component: DepartmentListComponent}]},
  {path: '', component:DepartmentsComponent, children:[{path: 'add', component: AddDepartmentComponent}]},
  {path: '', component:DepartmentsComponent, children:[{path: 'details/:id', component: DetailsComponent}]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentsRoutingModule { }
