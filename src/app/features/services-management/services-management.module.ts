import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ServicesManagementRoutingModule } from "./services-management-routing.module";
import { ServicesListComponent } from "./components/services-list/services-list.component";
import { AddServiceComponent } from "./components/add-service/add-service.component";
import { SharedModule } from "src/app/shared/shared.module";
import { ServicesManagementComponent } from "./services-management.component";
import { PendingServicesComponent } from "./components/pending-services/pending-services.component";
import { PendingOrdersComponent } from "./components/pending-orders/pending-orders.component";
import { DetailsComponent } from "./components/details/details.component";
import { AddBookingsComponent } from "./components/add-bookings/add-bookings.component";
import { NgxMaterialTimepickerModule } from "ngx-material-timepicker";
import { BookingsListComponent } from './components/bookings-list/bookings-list.component';
import { BookingsListDetailsComponent } from './components/bookings-list-details/bookings-list-details.component';
import { ReplyComponent } from './components/reply/reply.component';
@NgModule({
  declarations: [
    ServicesListComponent,
    AddServiceComponent,
    ServicesManagementComponent,
    PendingServicesComponent,
    PendingOrdersComponent,
    DetailsComponent,
    AddBookingsComponent,
    BookingsListComponent,
    BookingsListDetailsComponent,
    ReplyComponent,
  ],
  imports: [
    CommonModule,
    ServicesManagementRoutingModule,
    SharedModule,
    NgxMaterialTimepickerModule,
  ],
})
export class ServicesManagementModule {}
