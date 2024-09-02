import  { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersCardsComponent } from './users-cards/users-cards.component';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { UsersProfileComponent } from './users-profile/users-profile.component';

var routingAnimation = localStorage.getItem('animate');

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'users-cards',
        component: UsersCardsComponent,
        data: { animation: [routingAnimation]}
      },
      {
        path: 'users-edit',
        component: UsersEditComponent,
        data: { animation: [routingAnimation]}
      },
      {
        path: 'users-profile',
        component: UsersProfileComponent,
        data: { animation: [routingAnimation]}
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
