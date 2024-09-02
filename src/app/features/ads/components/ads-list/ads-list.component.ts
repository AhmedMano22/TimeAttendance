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
  selector: "app-ads-list",
  templateUrl: "./ads-list.component.html",
  styleUrls: ["./ads-list.component.scss"],
})
export class AdsListComponent {
  public userCards = userData.userCards;
  Announcements: any[] = [];
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
    // this.loadAnnouncements();
  }
  UserPageAuthnticated() {
    this.apiSer
      .userauthorizedtoPage(this.User.UsId, 4)
      .subscribe((res: any) => {
        this.AuthUser = res[0];
        console.log("AuthUser", this.AuthUser);
        if (this.AuthUser.login == true) {
          this.loadAnnouncements();
        }
      });
  }
  loadAnnouncements() {
    this.loading = true; // Start loading
    this.apiSer.getAnnouncements().subscribe({
      next: (res: any) => {
        this.Announcements = res;
        console.log("Announcements", this.Announcements);
        this.loading = false; // Stop loading after data is fetched
      },
      error: (err) => {
        console.error("Failed to load announcements", err);
        this.loading = false; // Stop loading on error
      },
    });
  }

  remove(id: any) {
    this.apiSer.deleteAnnounce(id).subscribe({
      next: (res) => {
        console.log("Delete response", res);
        this.translate
          .get("deletesweetAlert")
          .subscribe((translations: any) => {
            Swal.fire({
              title: translations.title,
              text: translations.message,
              icon: "success",
              confirmButtonText: translations.confirmButtonText,
            }).then((result: any) => {
              if (result.isConfirmed) {
                this.loadAnnouncements();
              }
            });
          });
      },
      error: (err) => console.error("Delete failed", err),
    });
  }

  ads = [
    {
      id: 1,
      imgSrc: "../../../../../assets/images/eyas-ad.jpg",
      link: "http://localhost:4200/dashboard",
      name: "إعلان 1",
      description:
        "ابحث عن الاستشاري المناسب لاحتياجات عملك. اربط الاتصال بالاستشاريين ذوي الخبرة على منصتنا!",
      startDate: "2023-07-01",
      endDate: "2023-07-31",
      targetAudience: {
        clients: true,
        lawyers: false,
        consultants: true,
        companies: true,
        lawOffices: false,
      },
      impressions: 1000,
      clicks: 50,
    },
    {
      id: 2,
      imgSrc: "../../../../../assets/images/eyas-ad.jpg",
      link: "http://localhost:4200/dashboard",
      name: "إعلان 2",
      description:
        "هل انت مستشار تبحث عن عملاء جدد؟ انضم إلى منصتنا ووسع عملك!",
      startDate: "2023-08-01",
      endDate: "2023-08-31",
      targetAudience: {
        clients: false,
        lawyers: false,
        consultants: true,
        companies: true,
        lawOffices: true,
      },
      impressions: 800,
      clicks: 30,
    },
    {
      id: 3,
      imgSrc: "../../../../../assets/images/eyas-ad.jpg",
      link: "http://localhost:4200/dashboard",
      name: "إعلان 3",
      description:
        "ابحث عن الخدمات القانونية المناسبة لاحتياجات عملك. اربط الاتصال بالمحامين ذوي الخبرة على منصتنا!",
      startDate: "2023-09-01",
      endDate: "2023-09-30",
      targetAudience: {
        clients: true,
        lawyers: true,
        consultants: false,
        companies: true,
        lawOffices: true,
      },
      impressions: 1200,
      clicks: 70,
    },
  ];
}
