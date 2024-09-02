import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscoverRoutingModule } from './discover-routing.module';
import { DiscoverComponent } from './discover.component';
import { DiscoverListComponent } from './components/discover-list/discover-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddDiscoverComponent } from './components/add-discover/add-discover.component';
import { DiscoverDetailsComponent } from './components/discover-details/discover-details.component';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { FormsModule } from '@angular/forms';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';



@NgModule({
  declarations: [
    DiscoverComponent,
    DiscoverListComponent,
    AddDiscoverComponent,
    DiscoverDetailsComponent
  ],
  imports: [
    CommonModule,
    DiscoverRoutingModule,
    SharedModule,
    NgxMaterialTimepickerModule,
    FormsModule,
    NgxIntlTelInputModule
  ]
})
export class DiscoverModule { }
