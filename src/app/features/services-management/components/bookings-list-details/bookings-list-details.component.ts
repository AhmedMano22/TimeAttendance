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
import { AuthService } from "src/app/features/auth/auth.service";
import { Announce } from "src/app/shared/interface/Announce";
import { Booking } from "src/app/shared/interface/booking";
import { authUser } from "src/app/shared/interface/isAuthUser";
import { service } from "src/app/shared/interface/service";
import { Unit } from "src/app/shared/interface/unit";
import { UserInfo } from "src/app/shared/interface/user-info";
import { ApiService } from "src/app/shared/services/api/api.service";
declare var require: any;
const Swal = require("sweetalert2");

@Component({
  selector: "app-bookings-list-details",
  templateUrl: "./bookings-list-details.component.html",
  styleUrls: ["./bookings-list-details.component.scss"],
})
export class BookingsListDetailsComponent {
  loading: boolean = false;
  form: FormGroup;
  createform: FormGroup;
  selectedFile!: File;
  selectedFile2!: File;
  mode: string = "";
  id: number;
  unitstpes: any[] = [];
  selectedbookingId: number | null = null;
  showEmailAddressInput: boolean = false;
  bookings: any[] = [];
  Bookinginfo: Booking = {
    Id: 0,
    Date: "",
    Time: "",
    Price: 0,
    RegisterDateTime: null,
    UserId: 0,
    BookingID: 0,
    BookingName: "",
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
  TimeFrom: string = "";
  TimeTo: string = "";
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
      BookingID: ["", [Validators.required]],
      Date: ["", [Validators.required]],
      Price: ["", [Validators.required]],
      Time: new FormGroup({
        from: new FormControl(""),
        to: new FormControl(""),
      }),
      UserId: [this.User.UsId],
    });
  }
  ngOnInit() {
    this.loading = true;
    this.apiSer.getBookingNames().subscribe((res: any) => {
      console.log("bookings", res);
      this.bookings = res;
    });
    this.route.queryParams.subscribe((params) => {
      this.mode = params["mode"];
      console.log("mode", this.mode);
    });
    const routeId = this.route.snapshot.paramMap.get("id");
    this.id = routeId !== null ? +routeId : 0;
    console.log("id", this.id);
    if (this.mode == "view" || this.mode == "edit") {
      this.apiSer.getBookingListByID(this.id).subscribe(
        (res: any) => {
          console.log(res);
          this.Bookinginfo = {
            Id: res[0].Id,
            Date: res[0].Date,
            Time: res[0].Time,
            Price: res[0].Price,
            RegisterDateTime: res[0].RegisterDateTime,
            UserId: res[0].UserId,
            BookingID: res[0].BookingID,
            BookingName: res[0].BookingName,
          };
          const [timeFrom, timeTo] = res[0].Time.split(",").map((val: any) =>
            val.trim()
          );
          this.TimeFrom = timeFrom;
          this.TimeTo = timeTo;
          this.form.patchValue({
            BookingID: res[0].BookingID,
            Date: res[0].Date,
            Price: res[0].Price,
            Time: {
              from: timeFrom,
              to: timeTo,
            },
            UserId: res[0].UserId,
          });

          this.loading = false;
        },
        (error) => {
          console.error("Error fetching data:", error);
          this.loading = false; // End loading in case of error
        }
      );
    }
  }

  onUnitTypeChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedbookingId = Number(selectElement.value);
    console.log("Selected Unit Type ID:", this.selectedbookingId);
    this.form.get("UnitType")?.setValue(this.selectedbookingId);
  }
  onSubmit(): void {
    console.log("Form Values on Submit:", this.form.value);
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
    this.apiSer.UpdateBookingList(this.id, formData).subscribe(
      (res: any) => {
        console.log("response", res);
        if (res.IsSuccessStatusCode) {
          this.translate
            .get("bookinglistdatesweetAlert")
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
      },
      (error) => {
        console.error("Error updating announce", error);
      }
    );
  }
  resetDay(day: string) {
    this.form.get(day)?.reset();
  }
  /* create new unit functions */
  // onUnitTypeChangecrete(event: Event): void {
  //   const selectElement = event.target as HTMLSelectElement;
  //   this.selectedUnitTypeId = Number(selectElement.value);
  //   console.log('Selected Unit Type ID:', this.selectedUnitTypeId);
  //   this.showEmailAddressInput = this.selectedUnitTypeId === 4;
  // }
  // NewonSubmit(){
  //   console.log('Form Values on Submit:', this.form.value);
  //   let apartmentValue = this.createform.get('Apartment')?.value;
  //   if (apartmentValue === "") {
  //     apartmentValue = 0;
  //   }
  //   const formData = new FormData();
  //   formData.append('UnitType', this.createform.get('UnitType')?.value);
  //   formData.append('BuildingNumber', this.createform.get('BuildingNumber')?.value);
  //   formData.append('Apartment', apartmentValue);
  //   formData.append('UserId', String(this.createform.get('UserId')?.value));
  //   formData.append('UnActive', String(this.createform.get('UnActive')?.value));
  //   this.apiSer.addUnit(formData).subscribe((res: any) => {
  //     console.log("response", res);
  //     if (res.IsSuccessStatusCode) {
  //       this.translate.get('addsweetAlert').subscribe((translations: any) => {
  //         Swal.fire({
  //           title: translations.title,
  //           text: translations.message,
  //           icon: 'success',
  //           confirmButtonText: translations.confirmButtonText
  //         }).then((result:any) => {
  //           if (result.isConfirmed) {
  //             this.router.navigate(['/units/units']);
  //           }
  //         });
  //       });
  //     }
  //   }, error => {
  //     console.error("Error updating announce", error);
  //   });
  // }
}
