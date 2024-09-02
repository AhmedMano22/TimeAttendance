import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageLayoutRoutingModule } from './page-layout-routing.module';
import { HideNavScrollComponent } from './hide-nav-scroll/hide-nav-scroll.component';
import { FooterLightComponent } from './footer-light/footer-light.component';
import { FooterDarkComponent } from './footer-dark/footer-dark.component';
import { FooterFixedComponent } from './footer-fixed/footer-fixed.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    HideNavScrollComponent,
    FooterLightComponent,
    FooterDarkComponent,
    FooterFixedComponent
  ],
  imports: [
    CommonModule,
    PageLayoutRoutingModule,
    SharedModule
  ]
})
export class PageLayoutModule { }
