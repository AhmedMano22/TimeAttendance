import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { ApiService } from "src/app/shared/services/api/api.service";
import { SearchCountryField } from "ngx-intl-tel-input";
import { CountryISO, PhoneNumberFormat } from "ngx-intl-tel-input";
import { authUser } from "src/app/shared/interface/isAuthUser";
import { AuthService } from "src/app/features/auth/auth.service";
import { UserInfo } from "src/app/shared/interface/user-info";
declare var require: any;
const Swal = require("sweetalert2");
interface DaySchedule {
  [key: string]: { from: string; to: string } | "closed";
}

@Component({
  selector: "app-add-department",
  templateUrl: "./add-department.component.html",
  styleUrls: ["./add-department.component.scss"],
})
export class AddDepartmentComponent {
  form: FormGroup;
  timeForm: FormGroup;
  selectedFile!: File;
  selectedFile2!: File;
  sat: string = "7:00 AM";
  defaultImagePath: string = "../../../../../assets/images/default.jpg";
  logoPreview: string = this.defaultImagePath;
  picPreview: string = this.defaultImagePath;

  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
  phoneActive: string = "";
  separateDialCode = true;
  preferredCountries: CountryISO[] = [
    CountryISO.UnitedStates,
    CountryISO.UnitedKingdom,
  ];
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
  }

  ngOnInit() {
    this.timeForm = this.fb.group({
      name: [""],
      Phone: [""],
      userId: [this.User.UsId],
      unActive: [false],
      Sat: new FormGroup({
        from: new FormControl(""),
        to: new FormControl(""),
      }),
      Sun: new FormGroup({
        from: new FormControl(""),
        to: new FormControl(""),
      }),
      Mon: new FormGroup({
        from: new FormControl(""),
        to: new FormControl(""),
      }),
      Tue: new FormGroup({
        from: new FormControl(""),
        to: new FormControl(""),
      }),
      Wed: new FormGroup({
        from: new FormControl(""),
        to: new FormControl(""),
      }),
      Thr: new FormGroup({
        from: new FormControl(""),
        to: new FormControl(""),
      }),
      Fri: new FormGroup({
        from: new FormControl(""),
        to: new FormControl(""),
      }),
    });
    this.UserPageAuthnticated();
  }

  UserPageAuthnticated() {
    this.apiSer
      .userauthorizedtoPage(this.User.UsId, 6)
      .subscribe((res: any) => {
        this.AuthUser = res[0];
        console.log("AuthUser", this.AuthUser);
      });
  }

  onSubmit() {
    const result = { ...this.timeForm.value };
    if (result.Phone && result.Phone.e164Number) {
      result.Phone = result.Phone.e164Number;
      console.log("Phone in E.164 format:", result.Phone);
    }
    // Function to format the value of each day
    const formatDayValue = (value: any) => {
      if (!value || (!value.from && !value.to)) {
        return ""; // Return empty string if the value is empty or both from and to are empty
      } else if (!value.from || !value.to) {
        return ""; // Make both from and to empty if either one is empty
      } else {
        return `${value.from}, ${value.to}`;
      }
    };
    // Format the values of each day
    const formattedSatValue = formatDayValue(this.timeForm.get("Sat")?.value);
    const formattedSunValue = formatDayValue(this.timeForm.get("Sun")?.value);
    const formattedMonValue = formatDayValue(this.timeForm.get("Mon")?.value);
    const formattedTueValue = formatDayValue(this.timeForm.get("Tue")?.value);
    const formattedWedValue = formatDayValue(this.timeForm.get("Wed")?.value);
    const formattedThrValue = formatDayValue(this.timeForm.get("Thr")?.value);
    const formattedFriValue = formatDayValue(this.timeForm.get("Fri")?.value);

    // Log the formatted values of each day
    console.log("Formatted Sat Value:", formattedSatValue);
    console.log("Formatted Sun Value:", formattedSunValue);
    console.log("Formatted Mon Value:", formattedMonValue);
    console.log("Formatted Tue Value:", formattedTueValue);
    console.log("Formatted Wed Value:", formattedWedValue);
    console.log("Formatted Thr Value:", formattedThrValue);
    console.log("Formatted Fri Value:", formattedFriValue);
    const formData = new FormData();
    formData.append("name", this.timeForm.get("name")?.value);
    formData.append("UserId", String(this.timeForm.get("userId")?.value));
    formData.append("UnActive", String(this.timeForm.get("unActive")?.value));
    formData.append("Phone", result.Phone);
    formData.append("Fri", formattedFriValue);
    formData.append("Sat", formattedSatValue);
    formData.append("Sun", formattedSunValue);
    formData.append("Mon", formattedMonValue);
    formData.append("Tue", formattedTueValue);
    formData.append("Wed", formattedWedValue);
    formData.append("Thr", formattedThrValue);
    // Log the final form submission data
    console.log("Final form submission data:", result);

    this.apiSer.addDepartment(formData).subscribe((res: any) => {
      console.log("response", res);
      if (res.IsSuccessStatusCode) {
        this.translate
          .get("departmentssweetAlert")
          .subscribe((translations: any) => {
            Swal.fire({
              title: translations.title,
              text: translations.message,
              icon: "success",
              confirmButtonText: translations.confirmButtonText,
            }).then((result: any) => {
              if (result.isConfirmed) {
                this.router.navigate(["/departments/departments-list"]);
              }
            });
          });
      }
    });
  }
}
