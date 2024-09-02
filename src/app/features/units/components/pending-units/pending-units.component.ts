import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { AuthService } from "src/app/features/auth/auth.service";
import { authUser } from "src/app/shared/interface/isAuthUser";
import { UserInfo } from "src/app/shared/interface/user-info";
import { ApiService } from "src/app/shared/services/api/api.service";
declare var require: any;
const Swal = require("sweetalert2");
@Component({
  selector: "app-pending-units",
  templateUrl: "./pending-units.component.html",
  styleUrls: ["./pending-units.component.scss"],
})
export class PendingUnitsComponent {
  loading = false;
  ListData: any[] = [];
  subscriptionType: string[];
  currentPage = 1;
  itemsPerPage = 10;
  totalPages = 0;
  paginatedData: any[] = [];
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
  constructor(
    private apiSer: ApiService,
    private translate: TranslateService,
    private authservice: AuthService
  ) {
    this.authservice.user$.subscribe((userData) => {
      if (userData) {
        this.User = userData;
      }
    });
  }
  ngOnInit() {
    this.loading = true;
    this.UserPageAuthnticated();
    // this.load();
  }
  UserPageAuthnticated() {
    this.apiSer
      .userauthorizedtoPage(this.User.UsId, 15)
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
    this.apiSer.getPendingUnits().subscribe({
      next: (res: any) => {
        console.log(res);

        this.ListData = res;
        this.totalPages = Math.ceil(this.ListData.length / this.itemsPerPage);
        this.updatePaginatedData();
        this.loading = false; // Stop loading after data is fetched
      },
      error: (err) => {
        console.error("Failed to load requests", err);
        this.loading = false; // Stop loading on error
      },
    });
  }
  updatePaginatedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedData = this.ListData.slice(startIndex, endIndex);
  }

  changePage(page: number) {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.updatePaginatedData();
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePaginatedData();
    }
  }
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedData();
    }
  }
}

/*
import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { ApiService } from "src/app/shared/services/api/api.service";
declare var require: any;
const Swal = require("sweetalert2");
@Component({
  selector: "app-pending-owners",
  templateUrl: "./pending-owners.component.html",
  styleUrls: ["./pending-owners.component.scss"],
})
export class PendingOwnersComponent {
  loading = false;
  ListData: any[] = [];
  subscriptionType: string[];
  constructor(
    private apiSer: ApiService,
    private translate: TranslateService
  ) {}
  ngOnInit() {
    this.loading = true;
    this.load();
  }
  load() {
    this.loading = true; // Start loading
    this.apiSer.getPendingOwners().subscribe({
      next: (res: any) => {
        this.ListData = res;
        console.log("res", res);

        this.loading = false; // Stop loading after data is fetched
      },
      error: (err) => {
        console.error("Failed to load requests", err);
        this.loading = false; // Stop loading on error
      },
    });
  }


}


*/
