import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestsRoutingModule } from './requests-routing.module';
import { RequestsComponent } from './requests.component';
import { AddRequestComponent } from './components/add-request/add-request.component';
import { PendingRequestsComponent } from './components/pending-requests/pending-requests.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RequestsListComponent } from './components/requests-list/requests-list.component';
import { DetailsComponent } from './components/details/details.component';
import { ReplyComponent } from './components/reply/reply.component';


@NgModule({
  declarations: [
    RequestsComponent,
    AddRequestComponent,
    PendingRequestsComponent,
    RequestsListComponent,
    DetailsComponent,
    ReplyComponent
  ],
  imports: [
    CommonModule,
    RequestsRoutingModule,
    SharedModule
  ]
})
export class RequestsModule { }
