import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InquiresComponent } from './inquires.component';
import { InquiresListComponent } from './components/inquires-list/inquires-list.component';
import { ReplyComponent } from './components/reply/reply.component';

const routes: Routes = [
  {path: '', component: InquiresComponent, children:[{path: 'inquires-list', component: InquiresListComponent}]},
  {path: '', component:InquiresComponent, children:[{path: 'reply/:id', component: ReplyComponent}]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InquiresRoutingModule { }
