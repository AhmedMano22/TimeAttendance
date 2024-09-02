import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { AuthService } from "src/app/features/auth/auth.service";
import { authUser } from "src/app/shared/interface/isAuthUser";
import { PendingBookingRequest } from "src/app/shared/interface/pendingBookingRequest";
import { RequestList } from "src/app/shared/interface/requestList";
import { UserInfo } from "src/app/shared/interface/user-info";

import { ApiService } from "src/app/shared/services/api/api.service";
declare var require: any;
const Swal = require("sweetalert2");
@Component({
  selector: "app-reply",
  templateUrl: "./reply.component.html",
  styleUrls: ["./reply.component.scss"],
})
export class ReplyComponent {
  id: any;
  form: FormGroup;
  PendingBookinginfo: PendingBookingRequest = {
    Id: 0,
    Note: "",
    Replay: "",
    Date: "",
    Time: "",
    Price: 0,
    RegisterDateTime: null,
    Days: 0,
    UserId: 0,
    MemberName: "",
    MemberPhone: "",
    MemberEmail: "",
    BookingName: "",
    UnitName: "",
  };
  Fromtime: string;
  Totime: string;

  loading: boolean = false;
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
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private translate: TranslateService,
    private apiSer: ApiService,
    private router: Router,
    private authservice: AuthService
  ) {
    this.id = this.route.snapshot.paramMap.get("id");
    console.log("id :", this.id);
    this.authservice.user$.subscribe((userData) => {
      if (userData) {
        this.User = userData;
      }
    });
  }
  ngOnInit() {
    this.loading = true;
    this.form = this.fb.group({
      Replay: ["", [Validators.required]],
      UserId: [this.User.UsId],
    });
    this.apiSer.getPendingBookingByID(this.id).subscribe(
      (res: any) => {
        console.log(res);
        this.PendingBookinginfo = {
          Id: res[0].Id,
          Note: res[0].Note,
          Replay: res[0].Replay,
          Date: res[0].Date,
          Time: res[0].Time,
          Price: res[0].Price,
          RegisterDateTime: res[0].RegisterDateTime,
          Days: res[0].Days,
          UserId: res[0].UserId,
          MemberName: res[0].MemberName,
          MemberPhone: res[0].MemberPhone,
          MemberEmail: res[0].MemberEmail,
          BookingName: res[0].BookingName,
          UnitName: res[0].UnitName,
        };
        const [Fromtime, Totime] = res[0].Time.split(",").map((val: any) =>
          val.trim()
        );
        this.Fromtime = Fromtime;
        this.Totime = Totime;
        this.loading = false;
      },
      (error) => {
        console.error("Error fetching data:", error);
        this.loading = false; // End loading in case of error
      }
    );
  }

  Submit() {
    console.log("Form Values on Submit:", this.form.value);
    const formData = new FormData();
    formData.append("Replay", this.form.get("Replay")?.value);
    formData.append("UserId", String(this.form.get("UserId")?.value));
    this.apiSer
      .PendingBookingsReply(this.id, formData)
      .subscribe((res: any) => {
        console.log("response", res);
        if (res.IsSuccessStatusCode) {
          this.translate
            .get("inquiresweetAlert")
            .subscribe((translations: any) => {
              Swal.fire({
                title: translations.title,
                text: translations.message,
                icon: "success",
                confirmButtonText: translations.confirmButtonText,
              }).then((result: any) => {
                if (result.isConfirmed) {
                  this.router.navigate(["/services/pending-services"]);
                }
              });
            });
        }
      });
  }
}
