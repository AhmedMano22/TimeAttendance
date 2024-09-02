import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { AuthService } from "src/app/features/auth/auth.service";
import { Announce } from "src/app/shared/interface/Announce";
import { authUser } from "src/app/shared/interface/isAuthUser";
import { service } from "src/app/shared/interface/service";
import { UserInfo } from "src/app/shared/interface/user-info";
import { ApiService } from "src/app/shared/services/api/api.service";
declare var require: any;
const Swal = require("sweetalert2");
@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"],
})
export class DetailsComponent {
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
  serviceinfo: service = {
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
    this.form = this.fb.group({
      logo: [null],
      title: ["", [Validators.required]],
      userId: [this.User.UsId],
      unActive: [""],
    });
    /* for new item */
    this.createform = this.fb.group({
      logo: [null, [Validators.required]],
      title: ["", [Validators.required]],
      userId: [this.User.UsId],
      unActive: [false],
    });
  }
  ngOnInit() {
    this.loading = true;
    this.route.queryParams.subscribe((params) => {
      this.mode = params["mode"];
      console.log("mode", this.mode);
    });
    const routeId = this.route.snapshot.paramMap.get("id");
    this.id = routeId !== null ? +routeId : 0;
    console.log("id", this.id);
    if (this.mode == "view" || this.mode == "edit") {
      this.apiSer.getBookingByID(this.id).subscribe(
        (res: any) => {
          console.log(res);
          this.serviceinfo = {
            Id: res[0].Id,
            Title: res[0].Title,
            UnActive: res[0].UnActive,
            UserId: res[0].UserId,
            UserName: res[0].UserName,
            RegisterDateTime: res[0].RegisterDateTime,
            UnActiveDateTime: res[0].UnActiveDateTime,
            Logo64:
              res[0].Logo64 && res[0].Logo64 !== "string"
                ? `data:image/png;base64,` + res[0].Logo64
                : this.logoPreview,
            Logo: res[0].Logo,
          };
          this.picPreview = this.serviceinfo.Logo64;
          this.form.patchValue({
            title: res[0].Title,
            unActive: res[0].UnActive,
          });
          this.loading = false;
        },
        (error) => {
          console.error("Error fetching data:", error);
          this.loading = false; // End loading in case of error
        }
      );
    }
    this.UserPageAuthnticated();
  }
  UserPageAuthnticated() {
    this.apiSer
      .userauthorizedtoPage(this.User.UsId, 5)
      .subscribe((res: any) => {
        this.AuthUser = res[0];
        console.log("AuthUser", this.AuthUser);
      });
  }
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      //this.logoPreview = reader.result as string;
      this.serviceinfo.Logo64 = reader.result as string;
      console.log("logo selectedFile", this.selectedFile);
    };
    reader.readAsDataURL(this.selectedFile);
  }

  base64ToBlob(base64: string, contentType: string, sliceSize = 512): Blob {
    const byteCharacters = atob(base64.split(",")[1]);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
    return new Blob(byteArrays, { type: contentType });
  }

  createFileFromBlob(blob: Blob, filename: string): File {
    return new File([blob], filename, { type: blob.type });
  }

  onSubmit(): void {
    console.log("Form Values on Submit:", this.form.value);

    const formData = new FormData();
    formData.append("Title", this.form.get("title")?.value);
    formData.append("UserId", String(this.form.get("userId")?.value));
    formData.append("UnActive", String(this.form.get("unActive")?.value));

    if (this.selectedFile) {
      formData.append("Logo", this.selectedFile);
    } else if (this.serviceinfo.Logo64) {
      const blob = this.base64ToBlob(this.serviceinfo.Logo64, "image/png");
      const file = this.createFileFromBlob(blob, "logo.png");
      formData.append("Logo", file);
    }

    this.apiSer.UpdateBooking(this.id, formData).subscribe(
      (res: any) => {
        console.log("response", res);
        if (res.IsSuccessStatusCode) {
          this.translate
            .get("updateservicesweetAlert")
            .subscribe((translations: any) => {
              Swal.fire({
                title: translations.title,
                text: translations.message,
                icon: "success",
                confirmButtonText: translations.confirmButtonText,
              }).then((result: any) => {
                if (result.isConfirmed) {
                  this.router.navigate(["/services/services"]);
                }
              });
            });
        }
        // Navigate or show success message
      },
      (error) => {
        console.error("Error updating announce", error);
        // Show error message
      }
    );
  }
  /* for new item */
  onFileSelected2(event: any) {
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

    this.apiSer.addBooking(formData).subscribe((res: any) => {
      console.log("response", res);
      if (res.IsSuccessStatusCode) {
        this.translate
          .get("servicesweetAlert")
          .subscribe((translations: any) => {
            Swal.fire({
              title: translations.title,
              text: translations.message,
              icon: "success",
              confirmButtonText: translations.confirmButtonText,
            }).then((result: any) => {
              if (result.isConfirmed) {
                this.router.navigate(["/services/services"]);
              }
            });
          });
      }
    });
  }
}
