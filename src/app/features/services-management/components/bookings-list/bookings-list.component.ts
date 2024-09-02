import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { AuthService } from "src/app/features/auth/auth.service";
import { authUser } from "src/app/shared/interface/isAuthUser";
import { UserInfo } from "src/app/shared/interface/user-info";
import { ApiService } from "src/app/shared/services/api/api.service";
declare var require: any;
const Swal = require("sweetalert2");

@Component({
  selector: "app-bookings-list",
  templateUrl: "./bookings-list.component.html",
  styleUrls: ["./bookings-list.component.scss"],
})
export class BookingsListComponent {
  loading = false;
  ListData: any[] = [];
  subscriptionType: string[];
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
        console.log("user is ", this.User);
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
      .userauthorizedtoPage(this.User.UsId, 5)
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
    this.apiSer.getBookingList().subscribe({
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
  remove(id: any) {
    this.apiSer.deleteBookingList(id).subscribe({
      next: (res) => {
        console.log("Delete response", res);
        this.translate
          .get("BookingListdeletesweetAlert")
          .subscribe((translations: any) => {
            Swal.fire({
              title: translations.title,
              text: translations.message,
              icon: "success",
              confirmButtonText: translations.confirmButtonText,
            }).then((result: any) => {
              if (result.isConfirmed) {
                this.load();
              }
            });
          });
      },
      error: (err) => console.error("Delete failed", err),
    });
  }
}
