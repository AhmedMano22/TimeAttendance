import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ServicesManagementComponent } from "./services-management.component";
import { ServicesListComponent } from "./components/services-list/services-list.component";
import { AddServiceComponent } from "./components/add-service/add-service.component";
import { PendingServicesComponent } from "./components/pending-services/pending-services.component";
import { PendingOrdersComponent } from "./components/pending-orders/pending-orders.component";
import { DetailsComponent } from "./components/details/details.component";
import { AddBookingsComponent } from "./components/add-bookings/add-bookings.component";
import { BookingsListComponent } from "./components/bookings-list/bookings-list.component";
import { BookingsListDetailsComponent } from "./components/bookings-list-details/bookings-list-details.component";
import { ReplyComponent } from "./components/reply/reply.component";

const routes: Routes = [
  {
    path: "",
    component: ServicesManagementComponent,
    children: [{ path: "services", component: ServicesListComponent }],
  },
  {
    path: "",
    component: ServicesManagementComponent,
    children: [{ path: "add-service", component: AddServiceComponent }],
  },
  {
    path: "",
    component: ServicesManagementComponent,
    children: [
      { path: "pending-services", component: PendingServicesComponent },
    ],
  },
  {
    path: "",
    component: ServicesManagementComponent,
    children: [{ path: "pending-orders", component: PendingOrdersComponent }],
  },
  {
    path: "",
    component: ServicesManagementComponent,
    children: [{ path: "details/:id", component: DetailsComponent }],
  },
  {
    path: "",
    component: ServicesManagementComponent,
    children: [{ path: "add-bookings", component: AddBookingsComponent }],
  },
  {
    path: "",
    component: ServicesManagementComponent,
    children: [{ path: "bookings-List", component: BookingsListComponent }],
  },
  {
    path: "",
    component: ServicesManagementComponent,
    children: [
      { path: "bookings-details/:id", component: BookingsListDetailsComponent },
    ],
  },
  {
    path: "",
    component: ServicesManagementComponent,
    children: [{ path: "reply/:id", component: ReplyComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesManagementRoutingModule {}
