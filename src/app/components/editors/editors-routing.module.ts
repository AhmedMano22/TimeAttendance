import  { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CkEditorsComponent } from './ck-editors/ck-editors.component';
import { KolkovEditorsComponent} from './kolkov-editors/kolkov-editors.component';

var routingAnimation = localStorage.getItem('animate') 

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'ck-editors',
        component: CkEditorsComponent,
        data: { animation: [routingAnimation]}
      },
      {
        path: 'kolkov-editors',
        component: KolkovEditorsComponent,
        data: { animation: [routingAnimation]}
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorsRoutingModule { }
