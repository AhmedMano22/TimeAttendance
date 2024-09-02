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
import { AuthService } from "src/app/features/auth/auth.service";
import { authUser } from "src/app/shared/interface/isAuthUser";
import { UserInfo } from "src/app/shared/interface/user-info";

declare var require: any;
const Swal = require("sweetalert2");
interface DaySchedule {
  [key: string]: { from: string; to: string } | "closed";
}
@Component({
  selector: "app-add-discover",
  templateUrl: "./add-discover.component.html",
  styleUrls: ["./add-discover.component.scss"],
})
export class AddDiscoverComponent {
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
      logo: [null],
      pic: [null],
      title: [""],
      description: [""],
      Address: [""],
      userId: [this.User.UsId],
      unActive: [false],
      Phone: [""],
      Facebook: [""],
      whatsApp: [""],
      twitter: [""],
      instagram: [""],
      Long: [""],
      Lat: [""],
      sat: new FormGroup({
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
      .userauthorizedtoPage(this.User.UsId, 3)
      .subscribe((res: any) => {
        this.AuthUser = res[0];
        console.log("AuthUser", this.AuthUser);
      });
  }
  onSubmit8() {
    const result: DaySchedule = {};
    if (this.timeForm.value.Phone) {
      this.timeForm.value.Phone = this.timeForm.value.Phone.e164Number;
      console.log("phone:", this.timeForm.value.Phone);
    }
    Object.keys(this.timeForm.value).forEach((day) => {
      if (day !== "Phone") {
        const dayValue = this.timeForm.get(day)?.value;
        if (!dayValue.from && !dayValue.to) {
          result[day] = "closed";
        } else if (!dayValue.from || !dayValue.to) {
          result[day] = "closed";
        } else {
          result[day] = dayValue;
        }
      } else {
        result[day] = this.timeForm.get(day)?.value;
      }
    });
    console.log(result);
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
    const formattedSatValue = formatDayValue(this.timeForm.get("sat")?.value);
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
    formData.append("Logo", this.selectedFile);
    formData.append("Pic", this.selectedFile2);
    formData.append("Title", this.timeForm.get("title")?.value);
    formData.append("Description", this.timeForm.get("description")?.value);
    formData.append("UserId", String(this.timeForm.get("userId")?.value));
    formData.append("UnActive", String(this.timeForm.get("unActive")?.value));
    formData.append("Address", String(this.timeForm.get("Address")?.value));
    formData.append("Phone", result.Phone);

    formData.append("Facebook", String(this.timeForm.get("Facebook")?.value));
    formData.append("whatsApp", String(this.timeForm.get("whatsApp")?.value));
    formData.append("twitter", String(this.timeForm.get("twitter")?.value));
    formData.append("instagram", String(this.timeForm.get("instagram")?.value));
    formData.append("Lat", String(this.timeForm.get("Lat")?.value));
    formData.append("Long", String(this.timeForm.get("Long")?.value));

    formData.append("Fri", formattedFriValue);
    formData.append("Sat", formattedSatValue);
    formData.append("Sun", formattedSunValue);
    formData.append("Mon", formattedMonValue);
    formData.append("Tue", formattedTueValue);
    formData.append("Wed", formattedWedValue);
    formData.append("Thr", formattedThrValue);
    // Log the final form submission data
    console.log("Final form submission data:", result);

    this.apiSer.addDiscover(formData).subscribe((res: any) => {
      console.log("response", res);
      if (res.IsSuccessStatusCode) {
        this.translate
          .get("discoversweetAlert")
          .subscribe((translations: any) => {
            Swal.fire({
              title: translations.title,
              text: translations.message,
              icon: "success",
              confirmButtonText: translations.confirmButtonText,
            }).then((result: any) => {
              if (result.isConfirmed) {
                this.router.navigate(["/discover/discover-list"]);
              }
            });
          });
      }
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

  onSubmit22(): void {
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

/*

  const satString = `${satValue.from}, ${satValue.to}`;
  console.log("Value of 'satarday' form control as string:", satString);
  console.log("-------------------------");

  const SunString = `${SunValue.from}, ${SunValue.to}`;
  console.log("Value of 'Sunday' form control as string:", SunString);
  console.log("-------------------------");

  const MonString = `${MonValue.from}, ${MonValue.to}`;
  console.log("Value of 'monday' form control as string:", MonString);
  console.log("-------------------------");

  const TueString = `${TueValue.from}, ${TueValue.to}`;
  console.log("Value of 'tuesday' form control as string:", TueString);
  console.log("-------------------------");

  const WedString = `${WedValue.from}, ${WedValue.to}`;
  console.log("Value of 'wensday' form control as string:", WedString);
  console.log("-------------------------");

  const ThrString = `${ThrValue.from}, ${ThrValue.to}`;
  console.log("Value of 'Thrday' form control as string:", ThrString);
  console.log("-------------------------");

  const FriString = `${FriValue.from}, ${FriValue.to}`;
  console.log("Value of 'friday' form control as string:", FriString);
  console.log("Final form submission data:", result);

*/

/*   // Process each day for closing condition
    // ['sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri'].forEach(day => {
    //   const dayValue = result[day];
    //   if (!dayValue.from && !dayValue.to) { // Check if both from and to are empty
    //     result[day] = "closed";
    //   } else if (!dayValue.from || !dayValue.to) { // Check if either from or to is empty
    //     result[day] = "closed";
    //   }
    // }); */
