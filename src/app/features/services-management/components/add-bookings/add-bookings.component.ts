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
import { AuthService } from "src/app/features/auth/auth.service";
import { authUser } from "src/app/shared/interface/isAuthUser";
import { UserInfo } from "src/app/shared/interface/user-info";
import { ApiService } from "src/app/shared/services/api/api.service";
declare var require: any;
const Swal = require("sweetalert2");

@Component({
  selector: "app-add-bookings",
  templateUrl: "./add-bookings.component.html",
  styleUrls: ["./add-bookings.component.scss"],
})
export class AddBookingsComponent {
  loading: boolean = false;
  form: FormGroup;
  selectedbookingId: number | null = null;
  bookings: any[] = [];
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

  ngOnInit(): void {
    this.form = this.fb.group({
      BookingID: ["", [Validators.required]],
      Date: ["", [Validators.required]],
      Price: ["", [Validators.required]],
      Time: new FormGroup({
        from: new FormControl(""),
        to: new FormControl(""),
      }),
      UserId: [this.User.UsId],
    });
    this.loading = true;
    this.apiSer.getBookingNames().subscribe((res: any) => {
      console.log("bookings", res);
      this.bookings = res;
    });
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
  onUnitTypeChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedbookingId = Number(selectElement.value);
    console.log("Selected Unit Type ID:", this.selectedbookingId);
    this.form.get("UnitType")?.setValue(this.selectedbookingId);
  }
  onSubmit(): void {
    console.log("Form Values on Submit:", this.form.value);
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
    const formattedSatValue = formatDayValue(this.form.get("Time")?.value);
    console.log("Formatted Sat Value:", formattedSatValue);
    const formData = new FormData();

    formData.append("BookingID", this.form.get("BookingID")?.value);
    formData.append("Date", this.form.get("Date")?.value);
    formData.append("Time", formattedSatValue);
    formData.append("Price", String(this.form.get("Price")?.value));
    formData.append("UserId", String(this.form.get("UserId")?.value));

    this.apiSer.BookingListadd(formData).subscribe((res: any) => {
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
                this.router.navigate(["/services/bookings-List"]);
              }
            });
          });
      }
    });
  }
}
