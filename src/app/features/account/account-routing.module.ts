import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { AccountComponent } from './account.component';
import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [
  {path: '', component: AccountComponent, children:[{path: 'my-profile', component:MyProfileComponent}]},
  {path: '', component: AccountComponent, children:[{path: 'settings', component:SettingsComponent}]},
  {path: '', component: AccountComponent, children:[{path: 'task', component:SettingsComponent}]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
