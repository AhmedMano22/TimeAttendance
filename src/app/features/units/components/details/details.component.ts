import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { AuthService } from "src/app/features/auth/auth.service";
import { Announce } from "src/app/shared/interface/Announce";
import { authUser } from "src/app/shared/interface/isAuthUser";
import { service } from "src/app/shared/interface/service";
import { Unit } from "src/app/shared/interface/unit";
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
  unitstpes: any[] = [];
  selectedUnitTypeId: number | null = null;
  showEmailAddressInput: boolean = false;
  unitinfo: Unit = {
    Id: 0,
    BuildingNumber: "",
    UnitType: 0,
    Apartment: 0,
    UnitTypeName: "",
    UnActive: false,
    UserId: 0,
    UserName: "",
    RegisterDateTime: null,
    UnActiveDateTime: null,
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
      UnitType: ["", [Validators.required]],
      BuildingNumber: ["", [Validators.required]],
      Apartment: [""],
      UserId: [this.User.UsId],
      UnActive: [""],
    });
    /* for new item */

    this.createform = this.fb.group({
      UnitType: ["", [Validators.required]],
      BuildingNumber: ["", [Validators.required]],
      Apartment: [""],
      UserId: [this.User.UsId],
      UnActive: [false],
    });
  }
  ngOnInit() {
    this.loading = true;
    this.apiSer.getUnitType().subscribe((res: any) => {
      console.log("units types", res);
      this.unitstpes = res;
    });
    this.route.queryParams.subscribe((params) => {
      this.mode = params["mode"];
      console.log("mode", this.mode);
    });
    const routeId = this.route.snapshot.paramMap.get("id");
    this.id = routeId !== null ? +routeId : 0;
    console.log("id", this.id);
    if (this.mode == "view" || this.mode == "edit") {
      this.apiSer.getUnitByID(this.id).subscribe(
        (res: any) => {
          console.log(res);
          this.unitinfo = {
            Id: res[0].Id,
            BuildingNumber: res[0].BuildingNumber,
            UnitType: res[0].UnitType,
            Apartment: res[0].Apartment,
            UnitTypeName: res[0].UnitTypeName,
            UnActive: res[0].UnActive,
            UserId: res[0].UserId,
            UserName: res[0].UserName,
            RegisterDateTime: res[0].RegisterDateTime,
            UnActiveDateTime: res[0].UnActiveDateTime,
          };
          this.form.patchValue({
            BuildingNumber: res[0].BuildingNumber,
            UnitType: res[0].UnitType,
            Apartment: res[0].Apartment,
            UnActive: res[0].UnActive,
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
    this.form.get("UnitType")?.setValue(this.selectedUnitTypeId);
  }
  onSubmit(): void {
    console.log("Form Values on Submit:", this.form.value);
    const formData = new FormData();
    formData.append("UnitType", this.form.get("UnitType")?.value);
    formData.append("BuildingNumber", this.form.get("BuildingNumber")?.value);
    formData.append("Apartment", this.form.get("Apartment")?.value);
    formData.append("UserId", String(this.form.get("UserId")?.value));
    formData.append("UnActive", String(this.form.get("UnActive")?.value));
    this.apiSer.UpdateUnit(this.id, formData).subscribe(
      (res: any) => {
        console.log("response", res);
        if (res.IsSuccessStatusCode) {
          this.translate
            .get("unitupdatesweetAlert")
            .subscribe((translations: any) => {
              Swal.fire({
                title: translations.title,
                text: translations.message,
                icon: "success",
                confirmButtonText: translations.confirmButtonText,
              }).then((result: any) => {
                if (result.isConfirmed) {
                  this.router.navigate(["/units/units"]);
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

  /* create new unit functions */
  onUnitTypeChangecrete(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedUnitTypeId = Number(selectElement.value);
    console.log("Selected Unit Type ID:", this.selectedUnitTypeId);
    this.showEmailAddressInput = this.selectedUnitTypeId === 4;
  }
  NewonSubmit() {
    console.log("Form Values on Submit:", this.form.value);
    let apartmentValue = this.createform.get("Apartment")?.value;
    if (apartmentValue === "") {
      apartmentValue = 0;
    }
    const formData = new FormData();
    formData.append("UnitType", this.createform.get("UnitType")?.value);
    formData.append(
      "BuildingNumber",
      this.createform.get("BuildingNumber")?.value
    );
    formData.append("Apartment", apartmentValue);
    formData.append("UserId", String(this.createform.get("UserId")?.value));
    formData.append("UnActive", String(this.createform.get("UnActive")?.value));
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
                this.router.navigate(["/units/units"]);
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
