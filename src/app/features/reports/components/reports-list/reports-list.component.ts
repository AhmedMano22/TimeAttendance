import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/features/auth/auth.service';
import { ApiService } from 'src/app/shared/services/api/api.service';
import { DatePipe } from '@angular/common';


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
  this.formattedFromDate = this.datePipe.transform(this.AddForm.get('From')?.value, 'yyyy/MM/dd');
  this.formattedToDate = this.datePipe.transform(this.AddForm.get('To')?.value, 'yyyy/MM/dd');

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

  // window.open("http://10.11.208.218:12300/?flage="+ this.selectedItem +"&System="+Type+"&LocationID="+this.locationId+"&EmpCode="+this.Empcode+"&fdate="+this.FromDate+"&tdate="+this.ToDate,"_self");

  // this.ngOnInit();

}
}
