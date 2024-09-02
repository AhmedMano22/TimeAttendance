import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SettingsComponent } from './components/settings/settings.component';


@NgModule({
  declarations: [
    AccountComponent,
    MyProfileComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    SharedModule
  ]
})
export class AccountModule { }
