import { NgModule } from "@angular/core";
var routingAnimation = localStorage.getItem("animate");
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { ContentComponent } from "./shared/components/layout/content/content.component";
import { content } from "./shared/routes/routes/routers";
import { AdminGuard } from "./shared/guard/admin.guard";
import { FullComponent } from "./shared/components/layout/full/full.component";
import { full } from "./shared/routes/full";
const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full",
  },
  {
    path: "dashboard",
    loadChildren: () =>
      import("./features/dashboard/dashboard.module").then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: "auth",
    loadChildren: () =>
      import("./features/auth/auth.module").then((m) => m.AuthModule),
  },
  {
    path: "account",
    loadChildren: () =>
      import("./features/account/account.module").then((m) => m.AccountModule),
  },
  {
    path: "users",
    loadChildren: () =>
      import("./features/users/users.module").then((m) => m.UsersModule),
  },
  {
    path: "units",
    loadChildren: () =>
      import("./features/units/units.module").then((m) => m.UnitsModule),
  },
  {
    path: "discover",
    loadChildren: () =>
      import("./features/discover/discover.module").then(
        (m) => m.DiscoverModule
      ),
  },
  {
    path: "ads",
    loadChildren: () =>
      import("./features/ads/ads.module").then((m) => m.AdsModule),
  },
  {
    path: "inquires",
    loadChildren: () =>
      import("./features/inquires/inquires.module").then(
        (m) => m.InquiresModule
      ),
  },
  {
    path: "contact",
    loadChildren: () =>
      import("./features/contact/contact.module").then((m) => m.ContactModule),
  },
  {
    path: "reports",
    loadChildren: () =>
      import("./features/reports/reports.module").then((m) => m.ReportsModule),
  },
  {
    path: "services",
    loadChildren: () =>
      import("./features/services-management/services-management.module").then(
        (m) => m.ServicesManagementModule
      ),
  },
  {
    path: "departments",
    loadChildren: () =>
      import("./features/departments/departments.module").then(
        (m) => m.DepartmentsModule
      ),
  },
  {
    path: "requests",
    loadChildren: () =>
      import("./features/requests/requests.module").then(
        (m) => m.RequestsModule
      ),
  },
  {
    path: "setting",
    loadChildren: () =>
      import("./features/settings/settings.module").then(
        (m) => m.SettingsModule
      ),
  },
  /*  */
  // {
  //   path: "authdefault/login",
  //   component: LoginComponent,
  // },
  // {
  //   path: "",
  //   component: ContentComponent,
  //   canActivate: [AdminGuard],
  //   children: content,
  // },
  // {
  //   path: "",
  //   component: FullComponent,
  //   canActivate: [AdminGuard],

  //   children: full,
  // },
  {
    path: "**",
    redirectTo: "",
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: "enabled",
      scrollPositionRestoration: "enabled",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
