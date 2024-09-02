import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { RegisterImageOneComponent } from './register/register-image-one/register-image-one.component';
import { LoginSimpleComponent } from './login/login-simple/login-simple.component';
import { LoginImageOneComponent } from './login/login-image-one/login-image-one.component';
import { LoginImageTwoComponent } from './login/login-image-two/login-image-two.component';
import { ValidationComponent } from './login/validation/validation.component';
import { TooltipComponent } from './login/tooltip/tooltip.component';
import { SweetalertComponent } from './login/sweetalert/sweetalert.component';
import { RegisterSimpleComponent } from './register/register-simple/register-simple.component';
import { BgVideoComponent } from './register/bg-video/bg-video.component';
import { UnlockUserComponent } from './unlock-user/unlock-user.component';
import { CreatePasswordComponent } from './create-password/create-password.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    LoginImageOneComponent,
    ForgetPasswordComponent,
    RegisterImageOneComponent,
    LoginSimpleComponent,
    LoginImageTwoComponent,
    ValidationComponent,
    TooltipComponent,
    SweetalertComponent,
    RegisterSimpleComponent,
    BgVideoComponent,
    UnlockUserComponent,
    CreatePasswordComponent,
    MaintenanceComponent,
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    SharedModule
  ]
})
export class AuthenticationModule { }
