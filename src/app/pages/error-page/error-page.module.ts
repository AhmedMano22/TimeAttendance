import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorPageRoutingModule } from './error-page-routing.module';
import { ErrorPage1Component } from './error-page1/error-page1.component';
import { ErrorPage2Component } from './error-page2/error-page2.component';
import { ErrorPage3Component } from './error-page3/error-page3.component';
import { ErrorPage4Component } from './error-page4/error-page4.component';
import { AngularSvgIconModule } from 'angular-svg-icon';


@NgModule({
  declarations: [
    ErrorPage1Component,
    ErrorPage2Component,
    ErrorPage3Component,
    ErrorPage4Component
  ],
  imports: [
    CommonModule,
    ErrorPageRoutingModule,
    AngularSvgIconModule
  ]
})
export class ErrorPageModule { }
