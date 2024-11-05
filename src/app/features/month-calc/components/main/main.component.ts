import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/features/auth/auth.service';
import { ApiService } from 'src/app/shared/services/api/api.service';
import { DatePipe } from '@angular/common';
import { SystemPage, LoginResponse } from 'src/app/shared/interface/user-info';
declare var require: any;
const Swal = require("sweetalert2");
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [DatePipe] 
})
export class MainComponent {
//////
reportId: any;
fromEmployee: any;
toEmployee: any;
locationId: any;
departmentId: any;
jobId: any;
formattedFromDate: any;
formattedToDate: any;

////
singleSelect: any = [];
 config = {
  displayKey: "name", // if objects array passed which key to be displayed defaults to description
  search: true,
  limitTo: 0,
  height: "250px",
  enableSelectAll: true,
};
selectedOptions = [
  {
    _id: "5a66d6c31d5e4e36c7711b7a",
    index: 0,
    balance: "$2,806.37",
    picture: "http://placehold.it/32x32",
    name: "Burns Dalton",
  },
  {
    _id: "5a66d6c3657e60c6073a2d22",
    index: 1,
    balance: "$2,984.98",
    picture: "http://placehold.it/32x32",
    name: "Mcintyre Lawson",
  },
];
options = [
  {
    _id: "5a66d6c31d5e4e36c7711b7a",
    index: 0,
    balance: "$2,806.37",
    picture: "http://placehold.it/32x32",
    name: "Burns Dalton",
  },
  {
    _id: "5a66d6c3657e60c6073a2d22",
    index: 1,
    balance: "$2,984.98",
    picture: "http://placehold.it/32x32",
    name: "Mcintyre Lawson",
  },
  {
    _id: "5a66d6c376be165a5a7fae33",
    index: 2,
    balance: "$2,794.16",
    picture: "http://placehold.it/32x32",
    name: "Amie Franklin",
  },
  {
    _id: "5a66d6c3f7854b6b4d96333b",
    index: 3,
    balance: "$2,537.14",
    picture: "http://placehold.it/32x32",
    name: "Jocelyn Horton",
  },
  {
    _id: "5a66d6c31f967d4f3e9d84e9",
    index: 4,
    balance: "$2,141.42",
    picture: "http://placehold.it/32x32",
    name: "Fischer Erickson",
  },
  {
    _id: "5a66d6c34cfa8cddefb31602",
    index: 5,
    balance: "$1,398.60",
    picture: "http://placehold.it/32x32",
    name: "Medina Underwood",
  },
  {
    _id: "5a66d6c3d727c450794226de",
    index: 6,
    balance: "$3,915.65",
    picture: "http://placehold.it/32x32",
    name: "Goldie Barber",
  },
];
resetOption: any;
////
isSubmited = false;
  public Fdate:any;
  public Tdate:any;
  public FromDate: Date;
  public ToDate: Date;
  public selectedItem:number=0;
 
  public Empcode:number=0;
  submitType: string;
  AddForm!: FormGroup;
  currentLang: string;
  selectedDate: string;

  employeePermissions: SystemPage | null = null;
user: LoginResponse ;
  constructor(
    private apiSer: ApiService,
    private translate: TranslateService,
    private modalService: NgbModal,
    private authservice: AuthService,
    private fb: FormBuilder,
    private datePipe: DatePipe,
  ) {
    this.currentLang = localStorage.getItem('app-lang') ?? 'ar';
    this.translate.onLangChange.subscribe((event) => {
      this.currentLang = event.lang;
      console.log("lang",this.currentLang);
    });
    this.authservice.user$.subscribe((userData) => {
      this.user = userData;
      console.log("user",this.user); 
    });
  }
  ngOnInit() {
     this.AddForm = this.fb.group({
      startDate: ["",Validators.required],
      endDate: ["",Validators.required],
  
    });

    this.UserPageAuthnticated();
  }
  UserPageAuthnticated() {
    this.apiSer.getUserById(this.user.userId).subscribe({
      next: (response:any) => {
        this.employeePermissions = response.result.systemPage.find(
          (page:any) => page.systemPageId === 20
        ) || null;
        console.log("employeePermissions",this.employeePermissions);
      },
      error: (error) => {
        console.error('Error fetching user data:', error);
      }
    });
  }



// onSubmit() {

  // const fromDate = this.AddForm.get('startDate')?.value;
  // const toDate = this.AddForm.get('endDate')?.value
  // this.formattedFromDate = fromDate ? new Date(fromDate).toISOString() : null;
  // this.formattedToDate = toDate ? new Date(toDate).toISOString() : null;

//   console.log('Formatted From Date:', this.formattedFromDate);
//   console.log('Formatted To Date:', this.formattedToDate);
 
// }

onSubmit() {
  this.isSubmited = true;
  if (this.AddForm.valid) {
    console.log(this.AddForm.value);
    const fromDate = this.AddForm.get('startDate')?.value;
    const toDate = this.AddForm.get('endDate')?.value
    this.formattedFromDate = fromDate ? new Date(fromDate).toISOString() : null;
    this.formattedToDate = toDate ? new Date(toDate).toISOString() : null;
  
    const formData = this.AddForm.value

    const body={
        startDate:  this.formattedFromDate,
        endDate:  this.formattedToDate  
    }
    console.log("body",body);
    this.apiSer.CalcMonth(body).subscribe({
      next: (res: any) => {
        console.log(res);
      
        if (res.success == true) {
          this.isSubmited = false;
          this.translate
            .get("Month_Create_Success")
            .subscribe((translations: any) => {
              Swal.fire({
                title: translations.title,
                text: translations.message,
                icon: "success",
                confirmButtonText: translations.confirmButtonText,
              });
            });
        } else {
          this.translate
            .get("errorMessage")
            .subscribe((translations: any) => {
              Swal.fire({
                title: translations.title,
                text: translations.message,
                icon: "error",
                confirmButtonText: translations.confirmButtonText,
              });
            });
        }
      },
      error: (error) => {
        console.log(error);
        this.translate.get("errorMessage").subscribe((translations: any) => {
          Swal.fire({
            title: translations.title,
            text: translations.message,
            icon: "error",
            confirmButtonText: translations.confirmButtonText,
          });
        });
      },
    });
  } else {
    this.translate
      .get("validation_sweetAlert")
      .subscribe((translations: any) => {
        Swal.fire({
          title: translations.title,
          text: translations.message,
          icon: "warning",
          confirmButtonText: translations.confirmButtonText,
        });
      });
  }
}
clear() {
  this.AddForm.reset({
    reportId: '',
    LocationId: '',
    DepartmentId: '',
    JobId: '',     
    From: '', 
    To: '', 
    fromEmployee: '',  
    toEmployee: ''
  });

}


}
