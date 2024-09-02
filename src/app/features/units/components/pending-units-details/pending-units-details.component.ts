import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { TranslateService } from "@ngx-translate/core";
import { AuthService } from "src/app/features/auth/auth.service";
import { Announce } from "src/app/shared/interface/Announce";
import { authUser } from "src/app/shared/interface/isAuthUser";
import { pendingUnit } from "src/app/shared/interface/pending-unit";
import { pendingOwner } from "src/app/shared/interface/pendingOwner";
import { UserInfo } from "src/app/shared/interface/user-info";
import { ApiService } from "src/app/shared/services/api/api.service";
declare var require: any;
const Swal = require("sweetalert2");
@Component({
  selector: "app-pending-units-details",
  templateUrl: "./pending-units-details.component.html",
  styleUrls: ["./pending-units-details.component.scss"],
})
export class PendingUnitsDetailsComponent {
  loading: boolean = false;
  form: FormGroup;
  selectedFile!: File;
  selectedFile2!: File;
  mode: string = "";
  id: number;
  defaultImagePath: string = "../../../../../assets/images/default.jpg";
  logoPreview: string = this.defaultImagePath;
  picPreview: string = this.defaultImagePath;
  PendingUnitinfo: pendingUnit = {
    Id: 0,
    Name: "",
    Phone: "",
    Email: "",
    UnitNO: "",
    Apartment: "",
    RegistrationTypeName: null,
    IDFront64: "",
    IDBack64: "",
    Contract64: "",
    Photo64: "",
    RegisterDateTime: null,
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
  obj = {
    userid: 1,
  };
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private translate: TranslateService,
    private apiSer: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private authservice: AuthService
  ) {
    this.authservice.user$.subscribe((userData) => {
      if (userData) {
        this.User = userData;
      }
    });
    this.form = this.fb.group({
      Denay_Note: ["", [Validators.required]],
      Userid: [this.User.UsId],
    });
    this.obj.userid = this.User.UsId;
  }
  ngOnInit() {
    this.loading = true;

    const routeId = this.route.snapshot.paramMap.get("id");
    this.id = routeId !== null ? +routeId : 0;
    console.log("id", this.id);
    this.apiSer.getPendingUnitByID(this.id).subscribe(
      (res: any) => {
        console.log(res);
        this.PendingUnitinfo = {
          Id: res[0].Id,
          Name: res[0].Name,
          Phone: res[0].Phone,
          Email: res[0].Email,
          UnitNO: res[0].UnitNO,
          Apartment: res[0].Apartment,
          RegistrationTypeName: res[0].RegistrationTypeName,
          RegisterDateTime: res[0].RegisterDateTime,

          IDFront64:
            res[0].IDFront64 && res[0].IDFront64 !== "string"
              ? `data:image/png;base64,` + res[0].IDFront64
              : this.logoPreview,
          IDBack64:
            res[0].IDBack64 && res[0].IDBack64 !== "string"
              ? `data:image/png;base64,` + res[0].IDBack64
              : this.picPreview,

          Contract64:
            res[0].Contract64 && res[0].Contract64 !== "string"
              ? `data:image/png;base64,` + res[0].Contract64
              : this.logoPreview,
          Photo64:
            res[0].Photo64 && res[0].Photo64 !== "string"
              ? `data:image/png;base64,` + res[0].Photo64
              : this.picPreview,
        };

        this.loading = false;
      },
      (error) => {
        console.error("Error fetching data:", error);
        this.loading = false; // End loading in case of error
      }
    );
  }
  simpleModal(simpleContent: any) {
    const modalRef = this.modalService.open(simpleContent);
  }
  onSubmit(modal: any): void {
    console.log("Form Values on Submit:", this.form.value);
    const formData = new FormData();

    formData.append("denay_Note", this.form.get("Denay_Note")?.value);
    formData.append("userid", String(this.form.get("Userid")?.value));

    this.apiSer.RejectUnit(this.id, this.form.value).subscribe((res: any) => {
      console.log("response", res);
      if (res.Status == "Reject") {
        modal.dismiss();
        this.translate
          .get("rejectunitsweetAlert")
          .subscribe((translations: any) => {
            Swal.fire({
              title: translations.title,
              text: translations.message,
              icon: "success",
              confirmButtonText: translations.confirmButtonText,
            }).then((result: any) => {
              if (result.isConfirmed) {
                this.router.navigate(["/units/Pending-Units"]);
              }
            });
          });
      }
    });
  }
  accept() {
    console.log("accept", this.obj);

    this.apiSer.accept(this.id, this.obj).subscribe((res: any) => {
      console.log("response", res);
      if (res.Status == "Accepet") {
        this.translate
          .get("AccepetunitsweetAlert")
          .subscribe((translations: any) => {
            Swal.fire({
              title: translations.title,
              text: translations.message,
              icon: "success",
              confirmButtonText: translations.confirmButtonText,
            }).then((result: any) => {
              if (result.isConfirmed) {
                this.router.navigate(["/units/Pending-Units"]);
              }
            });
          });
      }
    });
  }
}
