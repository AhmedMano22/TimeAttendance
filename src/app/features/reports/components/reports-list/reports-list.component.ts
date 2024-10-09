import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/features/auth/auth.service';
import { ApiService } from 'src/app/shared/services/api/api.service';

@Component({
  selector: 'app-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.scss']
})
export class ReportsListComponent {

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
    private fb: FormBuilder
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
      this.LocationsList = res.result;
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
      this.JobsList = res.result;
    }
  });
}
getName(type: any): string {
  return this.currentLang === 'ar' ? type.nameAr : type.nameEn;
}
onSubmit() {
  console.log(this.AddForm.value);
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
