import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExceptionWorkingTimeComponent } from './exception-working-time.component';
import { ExceptionWTListComponent } from './components/exception-wt-list/exception-wt-list.component';

const routes: Routes = [
  {path: '', component: ExceptionWorkingTimeComponent, children: [{path: 'ExceptionWT-List', component: ExceptionWTListComponent}]},

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExceptionWorkingTimeRoutingModule { }
