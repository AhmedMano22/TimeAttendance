import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SettingsRoutingModule } from "./settings-routing.module";
import { SettingsComponent } from "./settings.component";
import { ChangePasswordComponent } from "./components/change-password/change-password.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [SettingsComponent, ChangePasswordComponent],
  imports: [CommonModule, SettingsRoutingModule, SharedModule],
})
export class SettingsModule {}
