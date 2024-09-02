import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { BasicTablesComponent } from './bootstrap-tables/basic-tables/basic-tables.component';
import { BasicInitComponent } from './data-tables/basic-init/basic-init.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdSortableHeader } from 'src/app/shared/directive/sortable.directive';
import { BreckpointComponent } from './bootstrap-tables/basic-tables/breckpoint/breckpoint.component';
import { ResponsiveTablesComponent } from './bootstrap-tables/basic-tables/responsive-tables/responsive-tables.component';
import { CaptionComponent } from './bootstrap-tables/basic-tables/caption/caption.component';
import { InverseTableComponent } from './bootstrap-tables/basic-tables/inverse-table/inverse-table.component';
import { StripedRowComponent } from './bootstrap-tables/basic-tables/striped-row/striped-row.component';
import { HeadOptionsComponent } from './bootstrap-tables/basic-tables/head-options/head-options.component';
import { HoverableRowsComponent } from './bootstrap-tables/basic-tables/hoverable-rows/hoverable-rows.component';
import { BasicTableComponent } from './bootstrap-tables/basic-tables/basic-table/basic-table.component';
import { InversePrimaryBgComponent } from './bootstrap-tables/basic-tables/inverse-primary-bg/inverse-primary-bg.component';
import { TextBgUtilitiesComponent } from './bootstrap-tables/basic-tables/text-bg-utilities/text-bg-utilities.component';
import { ContextualClassesComponent } from './bootstrap-tables/basic-tables/contextual-classes/contextual-classes.component';
import { StripedRowInverseComponent } from './bootstrap-tables/basic-tables/striped-row-inverse/striped-row-inverse.component';
import { CommonBorderTableComponent } from './bootstrap-tables/basic-tables/common-border-table/common-border-table.component';

import { CustomWithHoverComponent } from './bootstrap-tables/basic-tables/custom-with-hover/custom-with-hover.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommonSizingTableComponent } from './bootstrap-tables/basic-tables/common-sizing-table/common-sizing-table.component';



@NgModule({
  declarations: [
    BasicTablesComponent,
    BasicInitComponent,
    NgbdSortableHeader,
    BreckpointComponent,
    ResponsiveTablesComponent,
    CaptionComponent,
    InverseTableComponent,
    StripedRowComponent,
    HeadOptionsComponent,
    HoverableRowsComponent,
    BasicTableComponent,
    InversePrimaryBgComponent,
    TextBgUtilitiesComponent,
    ContextualClassesComponent,
    StripedRowInverseComponent,
    CommonBorderTableComponent,
    CustomWithHoverComponent,
    CommonSizingTableComponent,
  ],
  imports: [
    CommonModule,
    TablesRoutingModule,
    SharedModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  exports: [
    BasicTablesComponent,
    
  ]
})
export class TablesModule { }
