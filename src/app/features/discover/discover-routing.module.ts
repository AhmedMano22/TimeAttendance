import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscoverComponent } from './discover.component';
import { DiscoverListComponent } from './components/discover-list/discover-list.component';
import { AddDiscoverComponent } from './components/add-discover/add-discover.component';
import { DiscoverDetailsComponent } from './components/discover-details/discover-details.component';

const routes: Routes = [
  {path: '', component: DiscoverComponent, children: [{path: 'discover-list', component: DiscoverListComponent}]},
  {path: '', component:DiscoverComponent, children:[{path: 'add', component: AddDiscoverComponent}]},
  {path: '', component:DiscoverComponent, children:[{path: 'details/:id', component: DiscoverDetailsComponent}]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiscoverRoutingModule { }
