import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UsersComponent } from "./users.component";
import { OwnersComponent } from "./components/owners/owners.component";
import { AddOwnerComponent } from "./components/add-owner/add-owner.component";
import { PendingOwnersComponent } from "./components/pending-owners/pending-owners.component";
import { DetailsComponent } from "./components/details/details.component";
import { UsersListComponent } from "./components/users-list/users-list.component";
import { UserDetailsComponent } from "./components/user-details/user-details.component";
import { AddUserComponent } from "./components/add-user/add-user.component";
import { OwnerDetailsComponent } from "./components/owner-details/owner-details.component";

const routes: Routes = [
  {
    path: "",
    component: UsersComponent,
    children: [{ path: "Owners", component: OwnersComponent }],
  },
  {
    path: "",
    component: UsersComponent,
    children: [{ path: "users-list", component: UsersListComponent }],
  },
  {
    path: "",
    component: UsersComponent,
    children: [{ path: "Add-Owner", component: AddOwnerComponent }],
  },
  {
    path: "",
    component: UsersComponent,
    children: [{ path: "Pending-Owners", component: PendingOwnersComponent }],
  },
  {
    path: "",
    component: UsersComponent,
    children: [{ path: "details/:id", component: DetailsComponent }],
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
  {
    path: "",
    component: UsersComponent,
    children: [{ path: "Owner-details/:id", component: OwnerDetailsComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
