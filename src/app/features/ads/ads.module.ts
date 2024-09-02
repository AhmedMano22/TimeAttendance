import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdsRoutingModule } from './ads-routing.module';
import { AdsComponent } from './ads.component';
import { AdsListComponent } from './components/ads-list/ads-list.component';
import { EditAdComponent } from './components/edit-ad/edit-ad.component';
import { AddAdComponent } from './components/add-ad/add-ad.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DatePipe } from '@angular/common';
import { AdDetailsComponent } from './components/ad-details/ad-details.component';
import { FormsModule } from '@angular/forms';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
@NgModule({
  declarations: [
    AdsComponent,
    AdsListComponent,
    EditAdComponent,
    AddAdComponent,
    AdDetailsComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    AdsRoutingModule,
    SharedModule,
    NgxMaterialTimepickerModule

    
  ],
  providers: [DatePipe],
})
export class AdsModule { }
