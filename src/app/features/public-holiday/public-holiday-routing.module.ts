import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicHolidayComponent } from './public-holiday.component';
import { PublicHolidayListComponent } from './components/public-holiday-list/public-holiday-list.component';



const routes: Routes = [
  {path: '', component: PublicHolidayComponent, children: [{path: 'Public-list', component: PublicHolidayListComponent}]},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class publicholidayRoutingModule { }
