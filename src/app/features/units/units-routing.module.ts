import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UnitsComponent } from "./units.component";
import { UnitsListComponent } from "./components/units-list/units-list.component";
import { AddUnitComponent } from "./components/add-unit/add-unit.component";
import { DetailsComponent } from "./components/details/details.component";
import { PendingUnitsComponent } from "./components/pending-units/pending-units.component";
import { PendingUnitsDetailsComponent } from "./components/pending-units-details/pending-units-details.component";

const routes: Routes = [
  {
    path: "",
    component: UnitsComponent,
    children: [{ path: "units", component: UnitsListComponent }],
  },
  {
    path: "",
    component: UnitsComponent,
    children: [{ path: "add-unit", component: AddUnitComponent }],
  },
  {
    path: "",
    component: UnitsComponent,
    children: [{ path: "details/:id", component: DetailsComponent }],
  },

  {
    path: "",
    component: UnitsComponent,
    children: [{ path: "Pending-Units", component: PendingUnitsComponent }],
  },
  {
    path: "",
    component: UnitsComponent,
    children: [
      {
        path: "PendingUnit-details/:id",
        component: PendingUnitsDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnitsRoutingModule {}
