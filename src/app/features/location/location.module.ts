import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { LocationComponent } from './location.component';
import { LocationsListComponent } from './components/locations-list/locations-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    LocationComponent,
    LocationsListComponent
  ],
  imports: [
    CommonModule,
    LocationRoutingModule,
    SharedModule,
  ]
})
export class LocationModule { }
