import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { AuthService } from "src/app/features/auth/auth.service";
import { authUser } from "src/app/shared/interface/isAuthUser";
import { UserInfo } from "src/app/shared/interface/user-info";
import { ApiService } from "src/app/shared/services/api/api.service";
declare var require: any;
const Swal = require("sweetalert2");
@Component({
  selector: "app-add-ad",
  templateUrl: "./add-ad.component.html",
  styleUrls: ["./add-ad.component.scss"],
})
export class AddAdComponent {
  form: FormGroup;
  selectedFile!: File;
  selectedFile2!: File;
  defaultImagePath: string = "../../../../../assets/images/default.jpg";
  logoPreview: string = this.defaultImagePath;
  picPreview: string = this.defaultImagePath;
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
    private authservice: AuthService
  ) {
    this.authservice.user$.subscribe((userData) => {
      if (userData) {
        this.User = userData;
      }
    });
    this.form = this.fb.group({
      logo: [null, [Validators.required]],
      pic: [null, [Validators.required]],
      title: ["", [Validators.required]],
      description: ["", [Validators.required]],
      userId: [this.User.UsId],
      unActive: [false],
    });
  }

  ngOnInit(): void {
    this.UserPageAuthnticated();
  }

  UserPageAuthnticated() {
    this.apiSer
      .userauthorizedtoPage(this.User.UsId, 4)
      .subscribe((res: any) => {
        this.AuthUser = res[0];
        console.log("AuthUser", this.AuthUser);
      });
  }
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      this.logoPreview = reader.result as string;
      console.log("logo selectedFile", this.selectedFile);
    };
    reader.readAsDataURL(this.selectedFile);
  }
  onFileSelected2(event: any) {
    this.selectedFile2 = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      this.picPreview = reader.result as string;
      console.log("pic selectedFile", this.selectedFile2);
    };
    reader.readAsDataURL(this.selectedFile2);
  }

  onSubmit(): void {
    console.log("Form Values on Submit:", this.form.value);
    const formData = new FormData();
    formData.append("Logo", this.selectedFile);
    formData.append("Pic", this.selectedFile2);
    formData.append("Title", this.form.get("title")?.value);
    formData.append("Description", this.form.get("description")?.value);
    formData.append("UserId", String(this.form.get("userId")?.value));
    formData.append("UnActive", String(this.form.get("unActive")?.value));

    this.apiSer.addAnnounce(formData).subscribe((res: any) => {
      console.log("response", res);
      if (res.IsSuccessStatusCode) {
        this.translate.get("sweetAlert").subscribe((translations: any) => {
          Swal.fire({
            title: translations.title,
            text: translations.message,
            icon: "success",
            confirmButtonText: translations.confirmButtonText,
          }).then((result: any) => {
            if (result.isConfirmed) {
              this.router.navigate(["/ads/ads-list"]);
            }
          });
        });
      }
    });
  }
}
