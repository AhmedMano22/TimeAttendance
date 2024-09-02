import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconRoutingModule } from './icon-routing.module';

import { FlagIconComponent } from './flag-icon/flag-icon.component';
import { FontawesomeIconComponent } from './fontawesome-icon/fontawesome-icon.component';
import { IcoIconComponent } from './ico-icon/ico-icon.component';
import { ThimifyIconComponent } from './thimify-icon/thimify-icon.component';
import { FeatherIcoComponent } from './feather-ico/feather-ico.component';
import { WhetherIconComponent } from './whether-icon/whether-icon.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { ToastrModule } from 'ngx-toastr';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [
    FlagIconComponent,
    FontawesomeIconComponent,
    IcoIconComponent,
    ThimifyIconComponent,
    FeatherIcoComponent,
    WhetherIconComponent,
  ],
  imports: [
    CommonModule,
    IconRoutingModule,
    SharedModule,
    ToastrModule,
    AngularSvgIconModule.forRoot() 
  ]
})
export class IconModule { }
