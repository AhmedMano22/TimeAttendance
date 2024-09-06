import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationComponent } from './location.component';
import { LocationsListComponent } from './components/locations-list/locations-list.component';

const routes: Routes = [
  {path: '', component: LocationComponent, children: [{path: 'locations-list', component: LocationsListComponent}]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationRoutingModule { }
