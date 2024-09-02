import { Component } from "@angular/core";
import * as data from "../../../../shared/data/table/tableData";
import { ApiService } from "src/app/shared/services/api/api.service";
import { TranslateService } from "@ngx-translate/core";
import { AuthService } from "src/app/features/auth/auth.service";
import { authUser } from "src/app/shared/interface/isAuthUser";
import { UserInfo } from "src/app/shared/interface/user-info";
declare var require: any;
const Swal = require("sweetalert2");

@Component({
  selector: "app-pending-services",
  templateUrl: "./pending-services.component.html",
  styleUrls: ["./pending-services.component.scss"],
})
export class PendingServicesComponent {
  loading = false;
  ListData: any[] = [];
  replyObj = {
    Replay: "Urgent reply",
    UserId: 1,
  };
  currentPage = 1;
  itemsPerPage = 6;
  totalPages = 0;
  paginatedData: any[] = [];
  defaultDateTime: string = "2024-04-30 21:05:55";
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
      .userauthorizedtoPage(this.User.UsId, 12)
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
    this.apiSer.getPendingBookings().subscribe({
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
  reply(id: any) {
    console.log("obj", this.replyObj);
    console.log("id", id);
    const formData = new FormData();
    formData.append("Replay", this.replyObj.Replay);
    formData.append("UserId", this.replyObj.UserId.toString());
    this.apiSer.PendingBookingsReply(id, formData).subscribe((res: any) => {
      console.log("response", res);
      if (res.IsSuccessStatusCode) {
        this.translate
          .get("PendingBookingsReplyurgentsweetAlert")
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
      }
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
