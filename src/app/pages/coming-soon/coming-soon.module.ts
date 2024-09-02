import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComingSoonRoutingModule } from './coming-soon-routing.module';
import { ComingSimpleComponent } from './coming-simple/coming-simple.component';
import { ComingBgImageComponent } from './coming-bg-image/coming-bg-image.component';


@NgModule({
  declarations: [
    ComingSimpleComponent,
    ComingBgImageComponent
  ],
  imports: [
    CommonModule,
    ComingSoonRoutingModule
  ]
})
export class ComingSoonModule { }
