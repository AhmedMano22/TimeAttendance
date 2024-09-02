import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { AuthService } from "src/app/features/auth/auth.service";
import { Announce } from "src/app/shared/interface/Announce";
import { authUser } from "src/app/shared/interface/isAuthUser";
import { request } from "src/app/shared/interface/request";
import { service } from "src/app/shared/interface/service";
import { UserInfo } from "src/app/shared/interface/user-info";
import { ApiService } from "src/app/shared/services/api/api.service";
declare var require: any;
const Swal = require("sweetalert2");
@Component({
  selector: "app-add-request",
  templateUrl: "./add-request.component.html",
  styleUrls: ["./add-request.component.scss"],
})
export class AddRequestComponent {
  loading: boolean = false;
  form: FormGroup;
  createform: FormGroup;
  selectedFile!: File;
  selectedFile2!: File;
  mode: string = "";
  id: number;
  defaultImagePath: string = "../../../../../assets/images/default.jpg";
  logoPreview: string = this.defaultImagePath;
  picPreview: string = this.defaultImagePath;
  requestinfo: request = {
    Id: 0,
    Title: "",
    UnActive: false,
    UserId: 0,
    UserName: "",
    RegisterDateTime: null,
    UnActiveDateTime: null,
    Logo64: "",
    Logo: "",
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

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private translate: TranslateService,
    private apiSer: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private authservice: AuthService
  ) {
    this.authservice.user$.subscribe((userData) => {
      if (userData) {
        this.User = userData;
      }
    });
  }
  ngOnInit() {
    /* for new item */
    this.createform = this.fb.group({
      logo: [null, [Validators.required]],
      title: ["", [Validators.required]],
      userId: [this.User.UsId],
      unActive: [false],
    });
    this.UserPageAuthnticated();
  }

  UserPageAuthnticated() {
    this.apiSer
      .userauthorizedtoPage(this.User.UsId, 7)
      .subscribe((res: any) => {
        this.AuthUser = res[0];
        console.log("AuthUser", this.AuthUser);
      });
  }
  /* for new item */
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      this.logoPreview = reader.result as string;
      console.log("logo selectedFile", this.selectedFile);
    };
    reader.readAsDataURL(this.selectedFile);
  }
  createSubmit(): void {
    console.log("Form Values on Submit:", this.createform.value);
    const formData = new FormData();

    formData.append("Logo", this.selectedFile);
    formData.append("Title", this.createform.get("title")?.value);

    formData.append("UserId", String(this.createform.get("userId")?.value));
    formData.append("UnActive", String(this.createform.get("unActive")?.value));

    this.apiSer.addRequest(formData).subscribe((res: any) => {
      console.log("response", res);
      if (res.IsSuccessStatusCode) {
        this.translate
          .get("requestsweetAlert")
          .subscribe((translations: any) => {
            Swal.fire({
              title: translations.title,
              text: translations.message,
              icon: "success",
              confirmButtonText: translations.confirmButtonText,
            }).then((result: any) => {
              if (result.isConfirmed) {
                this.router.navigate(["/requests/requests-list"]);
              }
            });
          });
      }
    });
  }
}
