import { Component } from "@angular/core";
import { slider } from "src/app/shared/data/animation/route-animations";
import { ApiService } from "src/app/shared/services/api/api.service";
import * as userData from "src/app/shared/data/user/user";
import { TranslateService } from "@ngx-translate/core";
import { AuthService } from "src/app/features/auth/auth.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
declare var require: any;
const Swal = require("sweetalert2");
 interface TimeTableD {
  shiftId: number;
  shiftNameEn: string;
  shiftNameAr: string;
  isVac: boolean;
  id: number;
}

 interface EmployeeTimeTable {
  employeeId: number;
  employeeNameEn: string;
  employeeNameAr: string;
  startDate: string; // You can change this to Date if you will convert it to a Date object
  id: number;
}

 interface Result {
  nameEn: string;
  nameAr: string;
  startDate: string; // You can change this to Date if you will convert it to a Date object
  timeTableD: TimeTableD[];
  employeeTimeTable: EmployeeTimeTable[];
  id: number;
}

@Component({
  selector: 'app-edit-time-table',
  templateUrl: './edit-time-table.component.html',
  styleUrls: ['./edit-time-table.component.scss']
})
export class EditTimeTableComponent {
  subscriptions = ["Lawyer", "Normal", "Admin", "Translator"];
  
  loading = false;
  // ListData: any[] = [];
  ListData: { shiftId: number; isVac: boolean }[] = [];
  EmployeeListData: { employeeId: number; startDate: string }[] = [];
  selectedShiftId: number | null = null;  
  isVacation: boolean = false;
  TimeTableForm!: FormGroup;
  currentLang: string;
  isSubmited = false;
  Shifts: any[] = [];
  Employees: any[] = [];
  code: number =0; 
  startDate: string = ''; 
  TimeTableID:any;
   response: Result = {
    nameEn: "",
    nameAr: "",
    startDate: "",
    timeTableD: [],
    employeeTimeTable: [],
    id: 0
  }
  constructor(
    private apiSer: ApiService,
    private translate: TranslateService,
    private modalService: NgbModal,
    private authservice: AuthService,
    private fb: FormBuilder,
    private route: Router,
    private router: ActivatedRoute,
  ) {
    this.currentLang = localStorage.getItem('app-lang') ?? 'ar';
    this.translate.onLangChange.subscribe((event) => {
      this.currentLang = event.lang;
      console.log("lang",this.currentLang);
  
    });
    this.TimeTableID =  this.router.snapshot.paramMap.get("id");
  }
  ngOnInit() {
    console.log("id",this.TimeTableID);
    
    this.loading = true;
    this.loadTimeTable();
   this.loadlShifts();
   this.loadlgetEmployees();
     this.TimeTableForm = this.fb.group({
      nameAr: ['', Validators.required], 
      nameEn: ['', Validators.required], 
      startDate: ["", Validators.required],
    });
  }

  loadTimeTable(){
    this.apiSer.getTimeTableByID(this.TimeTableID).subscribe({
      next:(res:any)=>{
        this.response = res.result;
        this.TimeTableForm.patchValue({
          nameAr: this.response.nameAr,
          nameEn: this.response.nameEn,
          startDate: this.response.startDate,
        });
        this.ListData = this.response.timeTableD; // Load shifts
        this.EmployeeListData = this.response.employeeTimeTable; // Load employees
      },
      error:(err:any)=>{
        console.error('Error loading timetable:', err);
        Swal.fire('Error', 'Failed to load timetable. Please try again later.', 'error');
      },
    })
  }
  loadlShifts(){
    this.apiSer.getShifts().subscribe((res:any) => {
      this.Shifts = res.result;
    });
  }
  loadlgetEmployees(){
    this.apiSer.getEmployee().subscribe((res:any) => {
      this.Employees = res.result;
    });
  }
  
  getShiftNameByRecordId(id: number): string {
    const shift = this.Shifts.find(shift => shift.id === id);
    if (!shift) return 'Unknown';
    return this.currentLang === 'ar' ? shift.nameAr : shift.nameEn;
  }
  getEmployeNameByRecordId(id: number): string {
    const employee = this.Employees.find(employee => employee.id === id);
    if (!employee) return 'Unknown';
    return this.currentLang === 'ar' ? employee.nameAr : employee.nameEn;
  }
  removeShift(index: number) {
    this.ListData.splice(index, 1); // Remove the selected shift from the list
  }
  getName(type: any): string {
    return this.currentLang === 'ar' ? type.nameAr : type.nameEn;
  }
  addShift() {
    if (this.selectedShiftId !== null) {
      console.log("selectedShiftId",this.selectedShiftId);
      const newShift = {
        id: 0,
        shiftId: +this.selectedShiftId,
        isVac: this.isVacation
      };
  
      this.ListData.push(newShift);
      console.log("ListData",this.ListData);

      this.selectedShiftId = null;
      this.isVacation = false;
    } else {
      console.log("Please select a shift before adding!");
    }
  }
  Search() {
    this.apiSer.getEmployeeByCode(this.code).subscribe({
      next:(res:any)=>{
        console.log('API Response:', res); 
        const employee = res.result;
        if(this.startDate){
          const newEmployee = {
            id: 0,
            employeeId: employee.id,
            startDate: this.startDate
          };
          // this.EmployeeListData.push({ employeeId: employee.id, startDate: this.startDate });
          this.EmployeeListData.push(newEmployee);
          this.code = 0;
          this.startDate = "";
          console.log('EmployeeListData:', this.EmployeeListData);
        }else{
          this.startDataNotFound()
        }
         
      },
      error:(err:any)=>{
        console.log('API err:', err);
        this.NoUserFound();
      },
    })
  }
  
  removeEmployee(index: number) {
    this.EmployeeListData.splice(index, 1); 
  }
  onSubmit() {
    this.isSubmited = true;
  
    if (this.TimeTableForm.valid) {
      const formData = this.TimeTableForm.value;
      const requestBody = {
        timeTableH: {
          id: this.response.id,
          nameEn: formData.nameEn,
          nameAr: formData.nameAr,
          startDate: formData.startDate,
        },
        // timeTableD: [],
        timeTableD: [...this.ListData],
        employeeTimeTable: [...this.EmployeeListData ]
      };
      console.log("requestBody",requestBody);

      this.apiSer.addTimeTable(requestBody).subscribe({
        next: (res: any) => {
          console.log(res);
          this.isSubmited = false;
          // this.TimeTableForm.reset();
          // this.ListData.length = 0;
          // this.EmployeeListData.length = 0;
          this.loadTimeTable();
          this.translate.get("Create_TimeTable_Success").subscribe((translations: any) => {
            Swal.fire({
              title: translations.title,
              text: translations.message,
              icon: "success",
              confirmButtonText: translations.confirmButtonText,
            });
          });
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
      this.translate.get("validation_sweetAlert").subscribe((translations: any) => {
        Swal.fire({
          title: translations.title,
          text: translations.message,
          icon: "warning",
          confirmButtonText: translations.confirmButtonText,
        });
      });
    }
  }
NoUserFound(){
  this.translate.get("NoUserFound").subscribe((translations: any) => {
    Swal.fire({
      title: translations.title,
      text: translations.message,
      icon: "error",
      confirmButtonText: translations.confirmButtonText,
    });
  });
}
startDataNotFound(){
  this.translate.get("startDataNotFound").subscribe((translations: any) => {
    Swal.fire({
      title: translations.title,
      text: translations.message,
      icon: "error",
      confirmButtonText: translations.confirmButtonText,
    });
  });
}
}
