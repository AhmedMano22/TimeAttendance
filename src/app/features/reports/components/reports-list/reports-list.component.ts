import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/features/auth/auth.service';
import { ApiService } from 'src/app/shared/services/api/api.service';
import { DatePipe } from '@angular/common';
import { SystemPage, LoginResponse } from 'src/app/shared/interface/user-info';
// import { SelectDropDownService } from "ngx-select-dropdown";

@Component({
  selector: 'app-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.scss'],
  providers: [DatePipe] 
})
export class ReportsListComponent {
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
  EmployesList: any[] = [];
  Reports: any[] = [];
  LocationsList: any[] = [];
  DepartmentsList: any[] = [];
  JobsList: any[] = [];
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

     this.loadReports();
     this.loadLocations();
     this.loadDepartments();
     this.loadJobs()
     this.AddForm = this.fb.group({
      reportId: [''], 
      LocationId: [''],
      DepartmentId : [''],
      JobId: [''],
      From: [""],
      To: [""],
      fromEmployee: [""],
      toEmployee: [""],
    });

    this.UserPageAuthnticated();
  }
  UserPageAuthnticated() {
    this.apiSer.getUserById(this.user.userId).subscribe({
      next: (response:any) => {
        this.employeePermissions = response.result.systemPage.find(
          (page:any) => page.systemPageId === 18
        ) || null;
        console.log("employeePermissions",this.employeePermissions);
      },
      error: (error) => {
        console.error('Error fetching user data:', error);
      }
    });
  }

loadReports(){
  this.apiSer.getReports().subscribe((res:any) => {
    if (res.success) {
      this.Reports = res.result;
    }
  });
}
/* Locations */
loadLocations(){
  this.apiSer.getLocations().subscribe((res:any) => {
    if (res.success) {
      this.LocationsList = res.result.items;
    }
  });
}
loadDepartments(){
  this.apiSer.getDepartments().subscribe((res:any) => {
    if (res.success) {
      this.DepartmentsList = res.result.items;
    }
  });
}
loadJobs(){
  this.apiSer.getJobs().subscribe((res:any) => {
    if (res.success) {
      this.JobsList = res.result.items;
    }
  });
}
getName(type: any): string {
  return this.currentLang === 'ar' ? type.nameAr : type.nameEn;
}
onSubmit(type: string) {
  this.reportId = this.AddForm.get('reportId')?.value;
  this.fromEmployee = this.AddForm.get('fromEmployee')?.value;
  this.toEmployee = this.AddForm.get('toEmployee')?.value;
  this.locationId = this.AddForm.get('LocationId')?.value;
  this.departmentId = this.AddForm.get('DepartmentId')?.value;
  this.jobId = this.AddForm.get('JobId')?.value;

  // Log them
  console.log('Report ID:', this.reportId);
  console.log('From Employee:', this.fromEmployee);
  console.log('To Employee:', this.toEmployee);
  console.log('Location ID:', this.locationId);
  console.log('Department ID:', this.departmentId);
  console.log('Job ID:', this.jobId);

  // Format specific form controls (dates)
  this.formattedFromDate = this.datePipe.transform(this.AddForm.get('From')?.value, 'yyyyMMdd');
  this.formattedToDate = this.datePipe.transform(this.AddForm.get('To')?.value, 'yyyyMMdd');

  // Log formatted dates
  console.log('Formatted From Date:', this.formattedFromDate);
  console.log('Formatted To Date:', this.formattedToDate);
  if (this.submitType === 'XLS') {
    console.log('Submitting form for XLS');
    this.getAllList('XLS');
  } else if (this.submitType === 'PDF') {
    console.log('Submitting form for PDF');
    this.getAllList('PDF');
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

getAllList(Type:string){
  console.log('Exporting as:', Type);
  // this.Fdate= this.FromDate.toString().substring(0,4)+this.FromDate.toString().substring(5,7)+this.FromDate.toString().substring(8,10);
  // this.Tdate= this.ToDate.toString().substring(0,4)+this.ToDate.toString().substring(5,7)+this.ToDate.toString().substring(8,10);

  window.open("http://172.25.11.12:12300/?flage="+ this.reportId +"&System="+Type+"&Department="+this.departmentId+"&Job="+this.jobId+"&LocationID="+this.locationId+"&EmpCode="+this.fromEmployee+"&EmpCode1="+this.toEmployee+"&fdate="+this.formattedFromDate+"&tdate="+this.formattedToDate,"_self");

  this.ngOnInit();

}
searchChange($event:any) {
  console.log($event);
}
}
