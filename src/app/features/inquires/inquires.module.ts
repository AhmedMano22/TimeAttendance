import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InquiresRoutingModule } from './inquires-routing.module';
import { InquiresComponent } from './inquires.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InquiresListComponent } from './components/inquires-list/inquires-list.component';
import { ReplyComponent } from './components/reply/reply.component';




@NgModule({
  declarations: [
    InquiresComponent,
    InquiresListComponent,
    ReplyComponent,

  ],
  imports: [
    CommonModule,
    InquiresRoutingModule,
    SharedModule
  ]
})
export class InquiresModule { }
