import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdsComponent } from './ads.component';
import { AdsListComponent } from './components/ads-list/ads-list.component';
import { EditAdComponent } from './components/edit-ad/edit-ad.component';
import { AddAdComponent } from './components/add-ad/add-ad.component';
import { AdDetailsComponent } from './components/ad-details/ad-details.component';

const routes: Routes = [
  {path: '', component:AdsComponent, children:[{path: 'ads-list', component: AdsListComponent}]},
  {path: '', component:AdsComponent, children:[{path: 'add', component: AddAdComponent}]},
  {path: '', component:AdsComponent, children:[{path: 'edit/:id', component: EditAdComponent}]},
  {path: '', component:AdsComponent, children:[{path: 'details/:id', component: AdDetailsComponent}]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdsRoutingModule { }
