import { Component } from "@angular/core";
import { slider } from "src/app/shared/data/animation/route-animations";
import { ApiService } from "src/app/shared/services/api/api.service";
import * as userData from "src/app/shared/data/user/user";
import { TranslateService } from "@ngx-translate/core";
import { AuthService } from "src/app/features/auth/auth.service";
import { authUser } from "src/app/shared/interface/isAuthUser";
import { UserInfo } from "src/app/shared/interface/user-info";
declare var require: any;
const Swal = require("sweetalert2");

@Component({
  selector: "app-discover-list",
  templateUrl: "./discover-list.component.html",
  styleUrls: ["./discover-list.component.scss"],
})
export class DiscoverListComponent {
  public userCards = userData.userCards;
  Discovers: any[] = [];
  loading = false;
  defaultImagePath: string = "../../../../../assets/images/default.png";
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
    // this.loadDiscovers();
  }
  UserPageAuthnticated() {
    this.apiSer
      .userauthorizedtoPage(this.User.UsId, 3)
      .subscribe((res: any) => {
        this.AuthUser = res[0];
        console.log("AuthUser", this.AuthUser);
        if (this.AuthUser.login == true) {
          this.loadDiscovers();
        }
      });
  }
  loadDiscovers() {
    this.loading = true; // Start loading
    this.apiSer.getDiscovers().subscribe({
      next: (res: any) => {
        this.Discovers = res;
        console.log("Discovers", this.Discovers);
        this.loading = false; // Stop loading after data is fetched
      },
      error: (err) => {
        console.error("Failed to load Discovers", err);
        this.loading = false; // Stop loading on error
      },
    });
  }

  remove(id: any) {
    this.apiSer.deleteDiscover(id).subscribe({
      next: (res) => {
        console.log("Delete response", res);
        this.translate
          .get("discoverdeletesweetAlert")
          .subscribe((translations: any) => {
            Swal.fire({
              title: translations.title,
              text: translations.message,
              icon: "success",
              confirmButtonText: translations.confirmButtonText,
            }).then((result: any) => {
              if (result.isConfirmed) {
                this.loadDiscovers();
              }
            });
          });
      },
      error: (err) => console.error("Delete failed", err),
    });
  }
}
