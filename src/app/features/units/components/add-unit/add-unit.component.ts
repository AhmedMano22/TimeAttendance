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
  selector: "app-add-unit",
  templateUrl: "./add-unit.component.html",
  styleUrls: ["./add-unit.component.scss"],
})
export class AddUnitComponent {
  form: FormGroup;
  unitstpes: any[] = [];
  selectedUnitTypeId: number | null = null;
  showEmailAddressInput: boolean = false;
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
    private route: Router,
    private apiSer: ApiService,
    private fb: FormBuilder,
    private http: HttpClient,
    private authservice: AuthService,
    private translate: TranslateService
  ) {
    this.apiSer.getUnitType().subscribe((res: any) => {
      console.log("units types", res);
      this.unitstpes = res;
    });
    this.authservice.user$.subscribe((userData) => {
      if (userData) {
        this.User = userData;
      }
    });
  }
  ngOnInit(): void {
    this.form = this.fb.group({
      UnitType: ["", [Validators.required]],
      BuildingNumber: ["", [Validators.required]],
      Apartment: [""],
      UserId: [this.User.UsId],
      UnActive: [false],
    });
    this.UserPageAuthnticated();
  }
  UserPageAuthnticated() {
    this.apiSer
      .userauthorizedtoPage(this.User.UsId, 1)
      .subscribe((res: any) => {
        this.AuthUser = res[0];
        console.log("AuthUser", this.AuthUser);
      });
  }
  onUnitTypeChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedUnitTypeId = Number(selectElement.value);
    console.log("Selected Unit Type ID:", this.selectedUnitTypeId);
    this.showEmailAddressInput = this.selectedUnitTypeId === 4;
  }
  onSubmit() {
    console.log("Form Values on Submit:", this.form.value);
    let apartmentValue = this.form.get("Apartment")?.value;
    if (apartmentValue === "") {
      apartmentValue = 0;
    }
    const formData = new FormData();
    formData.append("UnitType", this.form.get("UnitType")?.value);
    formData.append("BuildingNumber", this.form.get("BuildingNumber")?.value);
    formData.append("Apartment", apartmentValue);
    formData.append("UserId", String(this.form.get("UserId")?.value));
    formData.append("UnActive", String(this.form.get("UnActive")?.value));
    this.apiSer.addUnit(formData).subscribe(
      (res: any) => {
        console.log("response", res);
        if (res.IsSuccessStatusCode) {
          this.translate.get("addsweetAlert").subscribe((translations: any) => {
            Swal.fire({
              title: translations.title,
              text: translations.message,
              icon: "success",
              confirmButtonText: translations.confirmButtonText,
            }).then((result: any) => {
              if (result.isConfirmed) {
                this.route.navigate(["/units/units"]);
              }
            });
          });
        }
      },
      (error) => {
        console.error("Error updating announce", error);
      }
    );
  }
}
