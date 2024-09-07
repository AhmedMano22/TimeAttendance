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
    path: "departments",
    loadChildren: () =>
      import("./features/departments/departments.module").then(
        (m) => m.DepartmentsModule
      ),
  },
  {
    path: "employee",
    loadChildren: () =>
      import("./features/employee/employee.module").then(
        (m) => m.employeeModule
      ),
  },
  {
    path: "Public",
    loadChildren: () =>
      import("./features/public-holiday/public-holiday.module").then(
        (m) => m.PublicHolidayModule
      ),
  },
  {
    path: "WorkTime",
    loadChildren: () =>
      import("./features/work-time/work-time.module").then(
        (m) => m.WorkTimeModule
      ),
  },
  {
    path: "Jobs",
    loadChildren: () =>
      import("./features/jobs/jobs.module").then(
        (m) => m.JobsModule
      ),
  },
  /*  */
  {
    path: "Loccation",
    loadChildren: () =>
      import("./features/location/location.module").then(
        (m) => m.LocationModule
      ),
  },
  {
    path: "Shifts",
    loadChildren: () =>
      import("./features/shift/shift.module").then(
        (m) => m.ShiftModule
      ),
  },

  {
    path: "setting",
    loadChildren: () =>
      import("./features/settings/settings.module").then(
        (m) => m.SettingsModule
      ),
  },
  {
    path: "reports",
    loadChildren: () =>
      import("./features/reports/reports.module").then((m) => m.ReportsModule),
  },
  {
    path: "Leaves",
    loadChildren: () =>
      import("./features/leaves/leaves.module").then(
        (m) => m.LeavesModule
      ),
  },
 
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
