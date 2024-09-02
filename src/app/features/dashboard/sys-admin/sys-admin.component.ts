import { Component } from "@angular/core";
import * as chartDatas from "../../../shared/data/components/widgest/charts/charts";
import { AuthService } from "../../auth/auth.service";
import { UserInfo } from "src/app/shared/interface/user-info";
import { DashboardStats } from "src/app/shared/interface/dashboard";
import { authUser } from "src/app/shared/interface/isAuthUser";
import { ApiService } from "src/app/shared/services/api/api.service";

@Component({
  selector: "app-sys-admin",
  templateUrl: "./sys-admin.component.html",
  styleUrls: ["./sys-admin.component.scss"],
})
export class SysAdminComponent {
  dashboard: DashboardStats = {
    Owner: 0,
    Unit: 0,
    Service: 0,
    PendingSerice: 0,
    PendingRequet: 0,
    OwnerOnline: 0,
    Inquires: 0,
    Inquires30Day: 0,
  };
  User: UserInfo = {
    status: "",
    UsId: 0,
    Name: "",
    Image: null,
    Job: null,
    Department: null,
    Year: null,
    Active: null,
    Audit: null,
    Message: null,
    ImageRequired: null,
    CompLog: null,
    CompNew: null,
    CompEdit: null,
    CompDelete: null,
  };
  AuthUser: authUser = {
    UserId: 0,
    pageId: 0,
    PaageName: "",
    New: false,
    edit: false,
    delete: false,
    login: false,
    username: "",
    password: "",
  };
  item = { laval: "80%" };
  loading = false;
  ListData: any[] = [];
  constructor(private authservice: AuthService, private apiser: ApiService) {
    this.authservice.user$.subscribe((userData) => {
      if (userData) {
        this.User = userData;
        console.log("user is ", this.User);
      }
    });
  }
  ngOnInit(): void {
    this.loading = true;
    this.UserPageAuthnticated();
    // this.load();
  }
  UserPageAuthnticated() {
    this.apiser
      .userauthorizedtoPage(this.User.UsId, 11)
      .subscribe((res: any) => {
        this.AuthUser = res[0];
        console.log("AuthUser", this.AuthUser);
        if (this.AuthUser.login == true) {
          this.load();
        }
      });
  }
  load() {
    this.loading = true; // Start loading
    this.apiser.getdashboardData().subscribe({
      next: (res: any) => {
        //this.ListData = res;
        this.dashboard = res;
        console.log("res", res);
        console.log("dashboard", this.dashboard);

        this.loading = false; // Stop loading after data is fetched
      },
      error: (err) => {
        console.error("Failed to load requests", err);
        this.loading = false; // Stop loading on error
      },
    });
  }
  data = [
    {
      title: "OWNERS_COUNT",
      count: 62866,
      laval: "80%",
      icon: "newUser",
      color: "primary",
    },
    {
      title: "UNITS_COUNT",
      count: 5866,
      laval: "63%",
      icon: "newUser",
      color: "warning",
    },
  ];

  data2 = [
    {
      title: "ONLINE_OWNERS",
      count: 62866,
      laval: "60%",
      icon: "users",
      color: "success",
    },
    {
      title: "OPENED_CHATS",
      count: 5866,
      laval: "33%",
      icon: "chat",
      color: "primary",
    },
    // {title: 'SUPPORT_TICKETS', count: 62866, laval: '40%', icon: 'ticket', color: 'secondary'}
  ];

  data3 = [
    {
      title: "LAST_30_DAYS_ORDERS_COUNT",
      count: 62866,
      laval: "89%",
      icon: "task",
      color: "primary",
    },
  ];

  subscriptions = [
    {
      name: "SERVICES",
      color: "success",
      subscribersCount: 155,
      icon: "box",
      percen: "90%",
      percenUpDown: "success",
      backgroundSvg: "",
      UpDown: "up",
    },
    {
      name: "PENDING_BOOKINGS",
      color: "warning",
      subscribersCount: 415,
      icon: "box",
      percen: "68%",
      percenUpDown: "success",
      backgroundSvg: "",
      UpDown: "up",
    },
    {
      name: "PENDING_ORDERS",
      color: "primary",
      subscribersCount: 954,
      icon: "box",
      percen: "79%",
      percenUpDown: "success",
      backgroundSvg: "",
      UpDown: "up",
    },
  ];

  data4 = chartDatas.linechart1;
}
