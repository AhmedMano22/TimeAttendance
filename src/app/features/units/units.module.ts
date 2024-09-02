import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnitsRoutingModule } from './units-routing.module';
import { UnitsComponent } from './units.component';
import { UnitsListComponent } from './components/units-list/units-list.component';
import { AddUnitComponent } from './components/add-unit/add-unit.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DetailsComponent } from './components/details/details.component';
import { PendingUnitsComponent } from './components/pending-units/pending-units.component';
import { PendingUnitsDetailsComponent } from './components/pending-units-details/pending-units-details.component';


@NgModule({
  declarations: [
    UnitsComponent,
    UnitsListComponent,
    AddUnitComponent,
    DetailsComponent,
    PendingUnitsComponent,
    PendingUnitsDetailsComponent
  ],
  imports: [
    CommonModule,
    UnitsRoutingModule,
    SharedModule
  ]
})
export class UnitsModule { }
