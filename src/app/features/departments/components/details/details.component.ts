import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { Announce } from "src/app/shared/interface/Announce";
import { discover } from "src/app/shared/interface/discover";
import { ApiService } from "src/app/shared/services/api/api.service";
import { SearchCountryField } from "ngx-intl-tel-input";
import { CountryISO, PhoneNumberFormat } from "ngx-intl-tel-input";
import { department } from "src/app/shared/interface/department";
import { AuthService } from "src/app/features/auth/auth.service";
import { authUser } from "src/app/shared/interface/isAuthUser";
import { UserInfo } from "src/app/shared/interface/user-info";
declare var require: any;
const Swal = require("sweetalert2");

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"],
})
export class DetailsComponent {
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
  phoneActive: string = "";
  separateDialCode = true;
  preferredCountries: CountryISO[] = [
    CountryISO.UnitedStates,
    CountryISO.UnitedKingdom,
  ];
  loading: boolean = false;
  form: FormGroup;
  selectedFile!: File;
  selectedFile2!: File;
  mode: string = "";
  id: number;
  defaultImagePath: string = "../../../../../assets/images/default.jpg";
  logoPreview: string = this.defaultImagePath;
  picPreview: string = this.defaultImagePath;
  department: department = {
    Id: 0,
    name: "",
    UnActive: false,
    UserId: 0,
    UserName: "",
    RegisterDateTime: "",
    UnActiveDateTime: "",
    Phone: "",
    Sat: "",
    Sun: "",
    Mon: "",
    Tue: "",
    Wed: "",
    Thr: "",
    Fri: "",
  };
  FriFrom: string = "";
  FriTo: string = "";

  SatFrom: string = "";
  SatTo: string = "";

  SunFrom: string = "";
  SunTo: string = "";

  MonFrom: string = "";
  MonTo: string = "";

  TueFrom: string = "";
  TueTo: string = "";

  WedFrom: string = "";
  WedTo: string = "";

  ThrFrom: string = "";
  ThrTo: string = "";
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
      name: ["", [Validators.required]],
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
      this.apiSer.getDepartmentByID(this.id).subscribe(
        (res: any) => {
          console.log("department is", res);
          this.department = {
            Id: res[0].Id,
            name: res[0].name,
            UnActive: res[0].UnActive,
            UserId: res[0].UserId,
            UserName: res[0].UserName,
            RegisterDateTime: res[0].RegisterDateTime,
            UnActiveDateTime: res[0].UnActiveDateTime,
            Phone: res[0].Phone,
            Sat: res[0].sat,
            Sun: res[0].Sun,
            Mon: res[0].Mon,
            Tue: res[0].Tue,
            Wed: res[0].Wed,
            Thr: res[0].Thr,
            Fri: res[0].Fri,
          };
          this.form.patchValue({
            name: res[0].name,
            unActive: res[0].UnActive,
            Phone: res[0].Phone,
            Sat: res[0].sat,
            Sun: res[0].Sun,
            Mon: res[0].Mon,
            Tue: res[0].Tue,
            Wed: res[0].Wed,
            Thr: res[0].Thr,
            Fri: res[0].Fri,
          });
          const days = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thr", "Fri"];
          days.forEach((day) => {
            const dayValue = this.department[day];
            if (dayValue) {
              const [from, to] = dayValue
                .split(",")
                .map((val: any) => val.trim());
              this.form.get(day)?.patchValue({ from, to });
            } else {
              this.form.get(day)?.reset();
            }
          });
          this.setDayValues("Fri");
          this.setDayValues("Sat");
          this.setDayValues("Sun");
          this.setDayValues("Mon");
          this.setDayValues("Tue");
          this.setDayValues("Wed");
          this.setDayValues("Thr");
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
      .userauthorizedtoPage(this.User.UsId, 6)
      .subscribe((res: any) => {
        this.AuthUser = res[0];
        console.log("AuthUser", this.AuthUser);
      });
  }
  setDayValues(day: keyof discover) {
    if (this.department[day]) {
      const dayString = day as string;
      (this as any)[`${dayString}From`] = this.department[day]
        .split(",")
        .map((val: any) => val.trim())[0];
      (this as any)[`${dayString}To`] = this.department[day]
        .split(",")
        .map((val: any) => val.trim())[1];
    } else {
      (this as any)[`${day}From`] = (this as any)[`${day}To`] = "closed";
    }
  }

  resetDay(day: string) {
    this.form.get(day)?.reset();
  }
  onSubmit() {
    const result = { ...this.form.value };
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
    const formattedSatValue = formatDayValue(this.form.get("Sat")?.value);
    const formattedSunValue = formatDayValue(this.form.get("Sun")?.value);
    const formattedMonValue = formatDayValue(this.form.get("Mon")?.value);
    const formattedTueValue = formatDayValue(this.form.get("Tue")?.value);
    const formattedWedValue = formatDayValue(this.form.get("Wed")?.value);
    const formattedThrValue = formatDayValue(this.form.get("Thr")?.value);
    const formattedFriValue = formatDayValue(this.form.get("Fri")?.value);
    const formData = new FormData();
    formData.append("name", this.form.get("name")?.value);
    formData.append("UserId", String(this.form.get("userId")?.value));
    formData.append("UnActive", String(this.form.get("unActive")?.value));
    formData.append("Phone", result.Phone);

    formData.append("Fri", formattedFriValue);
    formData.append("Sat", formattedSatValue);
    formData.append("Sun", formattedSunValue);
    formData.append("Mon", formattedMonValue);
    formData.append("Tue", formattedTueValue);
    formData.append("Wed", formattedWedValue);
    formData.append("Thr", formattedThrValue);

    this.apiSer.UpdateDepartment(this.id, formData).subscribe(
      (res: any) => {
        console.log("response", res);
        if (res.IsSuccessStatusCode) {
          this.translate
            .get("departmentupdatesweetAlert")
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
        // Navigate or show success message
      },
      (error) => {
        console.error("Error updating announce", error);
        // Show error message
      }
    );
  }
  /* for new  */
  createSubmit() {
    const result = { ...this.form.value };
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
    const formattedSatValue = formatDayValue(this.form.get("Sat")?.value);
    const formattedSunValue = formatDayValue(this.form.get("Sun")?.value);
    const formattedMonValue = formatDayValue(this.form.get("Mon")?.value);
    const formattedTueValue = formatDayValue(this.form.get("Tue")?.value);
    const formattedWedValue = formatDayValue(this.form.get("Wed")?.value);
    const formattedThrValue = formatDayValue(this.form.get("Thr")?.value);
    const formattedFriValue = formatDayValue(this.form.get("Fri")?.value);

    // Log the formatted values of each day
    console.log("Formatted Sat Value:", formattedSatValue);
    console.log("Formatted Sun Value:", formattedSunValue);
    console.log("Formatted Mon Value:", formattedMonValue);
    console.log("Formatted Tue Value:", formattedTueValue);
    console.log("Formatted Wed Value:", formattedWedValue);
    console.log("Formatted Thr Value:", formattedThrValue);
    console.log("Formatted Fri Value:", formattedFriValue);
    const formData = new FormData();
    formData.append("name", this.form.get("name")?.value);
    formData.append("UserId", String(this.form.get("userId")?.value));
    formData.append("UnActive", String(this.form.get("unActive")?.value));
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
