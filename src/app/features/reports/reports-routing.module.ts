import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportsComponent } from './reports.component';
import { ReportsListComponent } from './components/reports-list/reports-list.component';
import { ReportDetailsComponent } from './components/report-details/report-details.component';

const routes: Routes = [
  {path: '', component: ReportsComponent, children:[{path: 'reports-list', component: ReportsListComponent}]},
  {path: '', component: ReportsComponent, children:[{path: 'report-details', component: ReportDetailsComponent}]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
