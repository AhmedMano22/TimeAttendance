import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsersRoutingModule } from "./users-routing.module";
import { UsersComponent } from "./users.component";
import { SharedModule } from "src/app/shared/shared.module";
import { OwnersComponent } from "./components/owners/owners.component";
import { AddOwnerComponent } from "./components/add-owner/add-owner.component";
import { PendingOwnersComponent } from "./components/pending-owners/pending-owners.component";
import { DetailsComponent } from "./components/details/details.component";
import { UsersListComponent } from "./components/users-list/users-list.component";
import { UserDetailsComponent } from "./components/user-details/user-details.component";
import { TranslateModule } from "@ngx-translate/core";
import { AddUserComponent } from "./components/add-user/add-user.component";
import { OwnerDetailsComponent } from "./components/owner-details/owner-details.component";
import { NgxIntlTelInputModule } from "ngx-intl-tel-input";
@NgModule({
  declarations: [
    UsersComponent,
    OwnersComponent,
    AddOwnerComponent,
    PendingOwnersComponent,
    DetailsComponent,
    UsersListComponent,
    UserDetailsComponent,
    AddUserComponent,
    OwnerDetailsComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    TranslateModule,
    SharedModule,
    NgxIntlTelInputModule,
  ],
})
export class UsersModule {}
