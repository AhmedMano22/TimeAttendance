import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsersRoutingModule } from "./users-routing.module";
import { UsersComponent } from "./users.component";
import { SharedModule } from "src/app/shared/shared.module";


import { UsersListComponent } from "./components/users-list/users-list.component";
import { UserDetailsComponent } from "./components/user-details/user-details.component";
import { TranslateModule } from "@ngx-translate/core";
import { AddUserComponent } from "./components/add-user/add-user.component";

import { NgxIntlTelInputModule } from "ngx-intl-tel-input";
@NgModule({
  declarations: [
    UsersComponent,
    UsersListComponent,
    UserDetailsComponent,
    AddUserComponent,

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
