import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UsersComponent } from "./users.component";


import { UsersListComponent } from "./components/users-list/users-list.component";
import { UserDetailsComponent } from "./components/user-details/user-details.component";
import { AddUserComponent } from "./components/add-user/add-user.component";


const routes: Routes = [
 
  {
    path: "",
    component: UsersComponent,
    children: [{ path: "users-list", component: UsersListComponent }],
  },

  {
    path: "",
    component: UsersComponent,
    children: [{ path: "User-details/:id", component: UserDetailsComponent }],
  },
  {
    path: "",
    component: UsersComponent,
    children: [{ path: "Add-User", component: AddUserComponent }],
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
