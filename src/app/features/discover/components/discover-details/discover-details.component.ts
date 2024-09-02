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
import { authUser } from "src/app/shared/interface/isAuthUser";
import { UserInfo } from "src/app/shared/interface/user-info";
import { AuthService } from "src/app/features/auth/auth.service";
declare var require: any;
const Swal = require("sweetalert2");

@Component({
  selector: "app-discover-details",
  templateUrl: "./discover-details.component.html",
  styleUrls: ["./discover-details.component.scss"],
})
export class DiscoverDetailsComponent {
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
  Discover: discover = {
    Id: 0,
    Description: "",
    Title: "",
    UnActive: false,
    UserId: 0,
    UserName: "",
    RegisterDateTime: "",
    UnActiveDateTime: "",
    Phone: "",
    Address: "",
    Lat: "",
    Long: "",
    Facebook: "",
    twitter: "",
    instagram: "",
    whatsApp: "",
    sat: "",
    Sun: "",
    Mon: "",
    Tue: "",
    Wed: "",
    Thr: "",
    Fri: "",
    Logo64: "",
    Pic64: "",
    Logo: "",
  };
  FriFrom: string = "";
  FriTo: string = "";

  satFrom: string = "";
  satTo: string = "";

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
      logo: [null],
      pic: [null],
      title: ["", [Validators.required]],
      description: ["", [Validators.required]],
      userId: [this.User.UsId],
      Address: [""],
      unActive: [""],
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
    this.apiSer.getDiscoverByID(this.id).subscribe(
      (res: any) => {
        console.log(res);
        this.Discover = {
          Id: res[0].Id,
          Description: res[0].Description,
          Title: res[0].Title,
          UnActive: res[0].UnActive,
          UserId: res[0].UserId,
          UserName: res[0].UserName,
          RegisterDateTime: res[0].RegisterDateTime,
          UnActiveDateTime: res[0].UnActiveDateTime,
          Phone: res[0].Phone,
          Address: res[0].Address,
          Lat: res[0].Lat,
          Long: res[0].Long,
          Facebook: res[0].Facebook,
          twitter: res[0].twitter,
          instagram: res[0].instagram,
          whatsApp: res[0].whatsApp,
          sat: res[0].sat,
          Sun: res[0].Sun,
          Mon: res[0].Mon,
          Tue: res[0].Tue,
          Wed: res[0].Wed,
          Thr: res[0].Thr,
          Fri: res[0].Fri,
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
        this.picPreview = this.Discover.Logo64;
        this.form.patchValue({
          title: res[0].Title,
          description: res[0].Description,
          unActive: res[0].UnActive,
          Address: res[0].Address,
          Phone: res[0].Phone,
          Facebook: res[0].Facebook,
          whatsApp: res[0].whatsApp,
          twitter: res[0].twitter,
          instagram: res[0].instagram,
          Long: res[0].Long,
          Lat: res[0].Lat,
          sat: res[0].sat,
          Sun: res[0].Sun,
          Mon: res[0].Mon,
          Tue: res[0].Tue,
          Wed: res[0].Wed,
          Thr: res[0].Thr,
          Fri: res[0].Fri,
        });
        const days = ["sat", "Sun", "Mon", "Tue", "Wed", "Thr", "Fri"];
        days.forEach((day) => {
          const dayValue = this.Discover[day];
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
        this.setDayValues("sat");
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
  setDayValues(day: keyof discover) {
    if (this.Discover[day]) {
      const dayString = day as string;
      (this as any)[`${dayString}From`] = this.Discover[day]
        .split(",")
        .map((val: any) => val.trim())[0];
      (this as any)[`${dayString}To`] = this.Discover[day]
        .split(",")
        .map((val: any) => val.trim())[1];
    } else {
      (this as any)[`${day}From`] = (this as any)[`${day}To`] = "closed";
    }
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      //this.logoPreview = reader.result as string;
      this.Discover.Logo64 = reader.result as string;
      console.log("logo selectedFile", this.selectedFile);
    };
    reader.readAsDataURL(this.selectedFile);
  }
  onFileSelected2(event: any) {
    this.selectedFile2 = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      //  this.picPreview = reader.result as string;
      this.Discover.Pic64 = reader.result as string;
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
    const formattedSatValue = formatDayValue(this.form.get("sat")?.value);
    const formattedSunValue = formatDayValue(this.form.get("Sun")?.value);
    const formattedMonValue = formatDayValue(this.form.get("Mon")?.value);
    const formattedTueValue = formatDayValue(this.form.get("Tue")?.value);
    const formattedWedValue = formatDayValue(this.form.get("Wed")?.value);
    const formattedThrValue = formatDayValue(this.form.get("Thr")?.value);
    const formattedFriValue = formatDayValue(this.form.get("Fri")?.value);
    const formData = new FormData();
    formData.append("Title", this.form.get("title")?.value);
    formData.append("Description", this.form.get("description")?.value);
    formData.append("UserId", String(this.form.get("userId")?.value));
    formData.append("UnActive", String(this.form.get("unActive")?.value));
    formData.append("Address", String(this.form.get("Address")?.value));
    formData.append("Phone", result.Phone);

    formData.append("Facebook", String(this.form.get("Facebook")?.value));
    formData.append("whatsApp", String(this.form.get("whatsApp")?.value));
    formData.append("twitter", String(this.form.get("twitter")?.value));
    formData.append("instagram", String(this.form.get("instagram")?.value));
    formData.append("Lat", String(this.form.get("Lat")?.value));
    formData.append("Long", String(this.form.get("Long")?.value));

    formData.append("Fri", formattedFriValue);
    formData.append("Sat", formattedSatValue);
    formData.append("Sun", formattedSunValue);
    formData.append("Mon", formattedMonValue);
    formData.append("Tue", formattedTueValue);
    formData.append("Wed", formattedWedValue);
    formData.append("Thr", formattedThrValue);

    if (this.selectedFile) {
      formData.append("Logo", this.selectedFile);
    } else if (this.Discover.Logo64) {
      const blob = this.base64ToBlob(this.Discover.Logo64, "image/png");
      const file = this.createFileFromBlob(blob, "logo.png");
      formData.append("Logo", file);
    }

    if (this.selectedFile2) {
      formData.append("Pic", this.selectedFile2);
    } else if (this.Discover.Pic64) {
      const blob = this.base64ToBlob(this.Discover.Pic64, "image/png");
      const file = this.createFileFromBlob(blob, "pic.png");
      formData.append("Pic", file);
    }
    this.apiSer.UpdateDiscover(this.id, formData).subscribe(
      (res: any) => {
        console.log("response", res);
        if (res.IsSuccessStatusCode) {
          this.translate
            .get("discoverupdatesweetAlert")
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
        // Navigate or show success message
      },
      (error) => {
        console.error("Error updating announce", error);
        // Show error message
      }
    );
  }
}
