import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonthCalcComponent } from './month-calc.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {path: '', component: MonthCalcComponent, children:[{path: 'main', component: MainComponent}]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonthCalcRoutingModule { }
