import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { AuthService } from "src/app/features/auth/auth.service";
import { Announce } from "src/app/shared/interface/Announce";
import { authUser } from "src/app/shared/interface/isAuthUser";
import { UserInfo } from "src/app/shared/interface/user-info";
import { ApiService } from "src/app/shared/services/api/api.service";
declare var require: any;
const Swal = require("sweetalert2");
@Component({
  selector: "app-ad-details",
  templateUrl: "./ad-details.component.html",
  styleUrls: ["./ad-details.component.scss"],
})
export class AdDetailsComponent {
  loading: boolean = false;
  form: FormGroup;
  selectedFile!: File;
  selectedFile2!: File;
  mode: string = "";
  id: number;
  defaultImagePath: string = "../../../../../assets/images/default.jpg";
  logoPreview: string = this.defaultImagePath;
  picPreview: string = this.defaultImagePath;
  Announceinfo: Announce = {
    Id: 0,
    Description: "",
    Title: "",
    UnActive: false,
    UserId: 0,
    UserName: "",
    RegisterDateTime: null,
    UnActiveDateTime: null,
    Logo64: "",
    Pic64: "",
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
      pic: [null],
      title: ["", [Validators.required]],
      description: ["", [Validators.required]],
      userId: [this.User.UsId],
      unActive: [""],
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
    this.apiSer.getAnnounceByID(this.id).subscribe(
      (res: any) => {
        console.log(res);
        this.Announceinfo = {
          Id: res[0].Id,
          Description: res[0].Description,
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
          Pic64:
            res[0].Pic64 && res[0].Pic64 !== "string"
              ? `data:image/png;base64,` + res[0].Pic64
              : this.picPreview,
          Logo: res[0].Logo,
        };
        this.picPreview = this.Announceinfo.Logo64;
        this.form.patchValue({
          title: res[0].Title,
          description: res[0].Description,
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

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      //this.logoPreview = reader.result as string;
      this.Announceinfo.Logo64 = reader.result as string;
      console.log("logo selectedFile", this.selectedFile);
    };
    reader.readAsDataURL(this.selectedFile);
  }
  onFileSelected2(event: any) {
    this.selectedFile2 = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      //  this.picPreview = reader.result as string;
      this.Announceinfo.Pic64 = reader.result as string;
      console.log("pic selectedFile", this.selectedFile2);
    };
    reader.readAsDataURL(this.selectedFile2);
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
    formData.append("Description", this.form.get("description")?.value);
    formData.append("UserId", String(this.form.get("userId")?.value));
    formData.append("UnActive", String(this.form.get("unActive")?.value));

    if (this.selectedFile) {
      formData.append("Logo", this.selectedFile);
    } else if (this.Announceinfo.Logo64) {
      const blob = this.base64ToBlob(this.Announceinfo.Logo64, "image/png");
      const file = this.createFileFromBlob(blob, "logo.png");
      formData.append("Logo", file);
    }

    if (this.selectedFile2) {
      formData.append("Pic", this.selectedFile2);
    } else if (this.Announceinfo.Pic64) {
      const blob = this.base64ToBlob(this.Announceinfo.Pic64, "image/png");
      const file = this.createFileFromBlob(blob, "pic.png");
      formData.append("Pic", file);
    }

    this.apiSer.UpdateAnnounce(this.id, formData).subscribe(
      (res: any) => {
        console.log("response", res);
        if (res.IsSuccessStatusCode) {
          this.translate
            .get("updatesweetAlert")
            .subscribe((translations: any) => {
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
        // Navigate or show success message
      },
      (error) => {
        console.error("Error updating announce", error);
        // Show error message
      }
    );
  }
}

/*     if (typeof image === 'string') {
       fetch(image)
         .then((res) => res.blob())
         .then((blob) => {
           const file = new File([blob], 'profile_image.jpg', {
             type: 'image/jpeg',
           });
           console.log("file" , file);
           formData.append('Logo', file);

         });
     }else {
      formData.append('Logo', this.selectedFile);
    }

    if (typeof Pic === 'string') {
      fetch(Pic)
        .then((res) => res.blob())
        .then((blob) => {
          const file = new File([blob], 'profile_image.jpg', {
            type: 'image/jpeg',
          });
          console.log("file" , file);
          formData.append('Pic', file);

        });
    }else {
     formData.append('Pic', this.selectedFile);
   }
console.log("image",image); */
