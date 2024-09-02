import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountToModule } from 'angular-count-to';
import { FormsModule } from '@angular/forms';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SupportTicketRoutingModule } from './support-ticket-routing.module';
import { SupportTicketComponent } from './support-ticket.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SupportTicketService } from 'src/app/shared/services/support-ticket/support-ticket.service';
import { NgbdSortableHeader2 } from 'src/app/shared/directive/sor-table.directive';
import { TicketComponent } from './ticket/ticket.component';

@NgModule({
  declarations: [SupportTicketComponent,NgbdSortableHeader2, TicketComponent],
  imports: [
    CommonModule,
    SupportTicketRoutingModule,
    CountToModule,
    FormsModule,
    SharedModule,
    NgbModule
  ],
  providers: [
    SupportTicketService,
    
  ]
})
export class SupportTicketModule {  }
