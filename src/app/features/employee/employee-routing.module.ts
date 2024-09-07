import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { EmployeelistComponent } from './components/employeelist/employeelist.component';



const routes: Routes = [
  {path: '', component: EmployeeComponent, children: [{path: 'employee-list', component: EmployeelistComponent}]},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class employeeRoutingModule { }
