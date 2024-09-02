import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ChangePasswordComponent } from "./components/change-password/change-password.component";
import { SettingsComponent } from "./settings.component";

const routes: Routes = [
  {
    path: "",
    component: SettingsComponent,
    children: [{ path: "change-password", component: ChangePasswordComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
