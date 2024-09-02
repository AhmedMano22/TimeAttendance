import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonsRoutingModule } from './buttons-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonsRoutingModule,
    SharedModule
  ]
})
export class ButtonsModule { }
