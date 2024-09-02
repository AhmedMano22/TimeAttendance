import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { TranslateService } from "@ngx-translate/core";
import { Announce } from "src/app/shared/interface/Announce";
import { owner } from "src/app/shared/interface/owner";
import { pendingOwner } from "src/app/shared/interface/pendingOwner";
import { ApiService } from "src/app/shared/services/api/api.service";
import { SearchCountryField } from "ngx-intl-tel-input";
import { CountryISO, PhoneNumberFormat } from "ngx-intl-tel-input";
declare var require: any;
const Swal = require("sweetalert2");

@Component({
  selector: "app-owner-details",
  templateUrl: "./owner-details.component.html",
  styleUrls: ["./owner-details.component.scss"],
})
export class OwnerDetailsComponent {
  loading: boolean = false;
  form: FormGroup;
  selectedFile!: File;
  selectedFile2!: File;
  selectedFile3!: File;
  selectedFile4!: File;
  mode: string = "";
  id: number;
  defaultImagePath: string = "../../../../../assets/images/default.jpg";
  logoPreview: string = this.defaultImagePath;
  picPreview: string = this.defaultImagePath;
  Ownerinfo: owner = {
    Id: 0,
    Name: "",
    Phone: "",
    Email: "",
    UnitNumber: "",
    Apartment: "",
    RegistrationTypeName: null,
    IDFront64: "",
    IDBack64: "",
    Contract64: "",
    Photo64: "",
    RegisterDateTime: null,
    MobilerSerial: "",
    Password: "",
    Address: "",
  };
  bookings: any[] = [];
  RegistrationTypeNames: any[] = [];
  obj = {
    userid: 1,
  };
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
  phoneActive: string = "";
  separateDialCode = true;
  preferredCountries: CountryISO[] = [
    CountryISO.UnitedStates,
    CountryISO.UnitedKingdom,
  ];
  selectedbookingId: number | null = null;
  RegistrationTypeId: number | null = null;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private translate: TranslateService,
    private apiSer: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal
  ) {
    this.form = this.fb.group({
      Photo: [null],
      Contract: [null],
      IDFront: [null],
      IDBack: [null],
      name: [""],
      Email: [""],
      Phone: [""],
      UnitNumber: [""],
      Address: [""],
      RegistrationType: [""],
      MobilerSerial: [""],
      Password: [""],
    });
  }
  ngOnInit() {
    this.loading = true;

    this.apiSer.getBookingNames().subscribe((res: any) => {
      console.log("bookings", res);
      this.bookings = res;
    });
    this.apiSer.getRegistrationTypeNames().subscribe((res: any) => {
      console.log("RegistrationTypeNames", res);
      this.RegistrationTypeNames = res;
    });
    this.route.queryParams.subscribe((params) => {
      this.mode = params["mode"];
      console.log("mode", this.mode);
    });
    const routeId = this.route.snapshot.paramMap.get("id");
    this.id = routeId !== null ? +routeId : 0;
    console.log("id", this.id);
    this.apiSer.getOwnerByID(this.id).subscribe(
      (res: any) => {
        console.log(res);
        this.Ownerinfo = {
          Id: res[0].Id,
          Name: res[0].Name,
          Phone: res[0].Phone,
          Email: res[0].Email,
          UnitNumber: res[0].UnitNumber,
          Apartment: res[0].Apartment,
          RegistrationTypeName: res[0].RegistrationTypeName,
          Password: res[0].Password,
          RegisterDateTime: res[0].RegisterDateTime,
          Address: res[0].Address,
          MobilerSerial: res[0].MobilerSerial,
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
        this.form.patchValue({
          Id: res[0].Id,
          name: res[0].Name,
          Phone: res[0].Phone,
          Email: res[0].Email,
          UnitNumber: res[0].UnitNumber,
          Apartment: res[0].Apartment,
          RegistrationType: res[0].RegistrationType,
          Password: res[0].Password,
          RegisterDateTime: res[0].RegisterDateTime,
          Address: res[0].Address,
          MobilerSerial: res[0].MobilerSerial,
        });
        this.loading = false;
      },
      (error) => {
        console.error("Error fetching data:", error);
        this.loading = false; // End loading in case of error
      }
    );
  }
  onUnitTypeChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedbookingId = Number(selectElement.value);
    console.log("Selected Unit Type ID:", this.selectedbookingId);
    this.form.get("UnitNumber")?.setValue(this.selectedbookingId);
  }
  onRegistrationTypeChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.RegistrationTypeId = Number(selectElement.value);
    console.log("Selected RegistrationType ID:", this.RegistrationTypeId);
    this.form.get("RegistrationType")?.setValue(this.RegistrationTypeId);
  }
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      this.Ownerinfo.Photo64 = reader.result as string;
      console.log("Photo64 selectedFile", this.selectedFile);
    };
    reader.readAsDataURL(this.selectedFile);
  }
  onFileSelected2(event: any) {
    this.selectedFile2 = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      this.Ownerinfo.Contract64 = reader.result as string;
      console.log("Contract64 selectedFile", this.selectedFile2);
    };
    reader.readAsDataURL(this.selectedFile2);
  }
  onFileSelected3(event: any) {
    this.selectedFile3 = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      this.Ownerinfo.IDFront64 = reader.result as string;
      console.log("IDFront64 selectedFile", this.selectedFile3);
    };
    reader.readAsDataURL(this.selectedFile3);
  }
  onFileSelected4(event: any) {
    this.selectedFile4 = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      this.Ownerinfo.IDBack64 = reader.result as string;
      console.log("IDBack64 selectedFile", this.selectedFile4);
    };
    reader.readAsDataURL(this.selectedFile4);
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
    const result = { ...this.form.value };
    if (result.Phone && result.Phone.e164Number) {
      result.Phone = result.Phone.e164Number;
      console.log("Phone in E.164 format:", result.Phone);
    }
    const formData = new FormData();
    formData.append("name", this.form.get("name")?.value);
    formData.append("Email", this.form.get("Email")?.value);
    formData.append("Phone", result.Phone);
    formData.append("UnitNumber", String(this.form.get("UnitNumber")?.value));
    formData.append("Address", String(this.form.get("Address")?.value));
    formData.append(
      "RegistrationType",
      String(this.form.get("RegistrationType")?.value)
    );
    formData.append(
      "MobilerSerial",
      String(this.form.get("MobilerSerial")?.value)
    );
    formData.append("Password", String(this.form.get("Password")?.value));
    if (this.selectedFile) {
      formData.append("Photo", this.selectedFile);
    } else if (this.Ownerinfo.Photo64) {
      const blob = this.base64ToBlob(this.Ownerinfo.Photo64, "image/png");
      const file = this.createFileFromBlob(blob, "Photo.png");
      formData.append("Photo", file);
    }

    if (this.selectedFile2) {
      formData.append("Contract", this.selectedFile2);
    } else if (this.Ownerinfo.Contract64) {
      const blob = this.base64ToBlob(this.Ownerinfo.Contract64, "image/png");
      const file = this.createFileFromBlob(blob, "Contract.png");
      formData.append("Contract", file);
    }
    if (this.selectedFile3) {
      formData.append("IDFront", this.selectedFile3);
    } else if (this.Ownerinfo.IDFront64) {
      const blob = this.base64ToBlob(this.Ownerinfo.IDFront64, "image/png");
      const file = this.createFileFromBlob(blob, "IDFront.png");
      formData.append("IDFront", file);
    }
    if (this.selectedFile4) {
      formData.append("IDBack", this.selectedFile4);
    } else if (this.Ownerinfo.IDBack64) {
      const blob = this.base64ToBlob(this.Ownerinfo.IDBack64, "image/png");
      const file = this.createFileFromBlob(blob, "IDBack.png");
      formData.append("IDBack", file);
    }
    this.apiSer.UpdateOwner(this.id, formData).subscribe(
      (res: any) => {
        console.log("response", res);
        if (res.IsSuccessStatusCode) {
          this.translate
            .get("ownerudatesweetAlert")
            .subscribe((translations: any) => {
              Swal.fire({
                title: translations.title,
                text: translations.message,
                icon: "success",
                confirmButtonText: translations.confirmButtonText,
              }).then((result: any) => {
                if (result.isConfirmed) {
                  this.router.navigate(["/users/Owners"]);
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
