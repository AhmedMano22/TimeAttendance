import { Component, Input } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { usersystempage } from "src/app/shared/interface/userSystempage";
import { ApiService } from "src/app/shared/services/api/api.service";
import { Location } from "@angular/common";
import { TranslateService } from "@ngx-translate/core";
import { HttpClient } from "@angular/common/http";
declare var require: any;
const Swal = require("sweetalert2");
interface SystemPage {
  systemPageId: number;
  systemPageNameAr: string;
  systemPageNameEn: string;
  new: boolean;
  edit: boolean;
  delete: boolean;
  login: boolean;
  id: number;
}

interface Department {
  departmentId: number;
  departmentNameAr: string;
  departmentNameEn: string;
  login: boolean;
  id: number;
}

interface Report {
  reportId: number;
  reportNameAr: string;
  reportNameEn: string;
  login: boolean;
  id: number;
}

interface Leave {
  leaveId: number;
  leaveNameAr: string;
  leaveNameEn: string;
  login: boolean;
  id: number;
}
interface location {
  locationId: number;
  locationNameAr: string;
  locationNameEn: string;
  login: boolean;
  id: number;
}
interface TimeTableH {
  timeTableHId: number;
  timeTableHNameAr: string;
  timeTableHNameEn: string;
  login: boolean;
  id: number;
}

@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.scss"],
})
export class AddUserComponent {
  HomeActive8 = "home";
  public userData: any;
  public userpagesQuary: any[] = [];
  @Input() tabs: any;
  userroleForm: FormGroup;
  userroleId: any;
  userpages: usersystempage[];
  alert: boolean = false;
  departments: Department[] = [];
  reports: Report[] = [];
  leaves: Leave[] = [];
  timeTables: TimeTableH[] = [];
  Locations: location[] = [];
  mode: string = "";
  currentLang: string;
  constructor(
    private router: Router,
    private activateRout: ActivatedRoute,
    private apiser: ApiService,
    private location: Location,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private translate: TranslateService,
  ) {
    this.currentLang = localStorage.getItem('app-lang') ?? 'ar';
    this.translate.onLangChange.subscribe((event) => {
      this.currentLang = event.lang;
      console.log("lang",this.currentLang);
      
    });
  }

  ngOnInit() {
    this.userroleForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      emailAddress: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      name: ["default"], 
      surname: ["default"],  
      isActive: [false] 
    });
    this.getUserData();
  }

  getUserData(): void {
    this.apiser.getUsersWithPermissions().subscribe((response: any) => {
      this.userData = response.result;
  
      // Initialize userpagesQuary from systemPage
      this.userpagesQuary = this.userData.systemPage.map((page: any) => ({
        systemPageId: page.systemPageId, // Assuming systemPageId exists in the response
        systemPageNameAr: page.systemPageNameAr,
        systemPageNameEn: page.systemPageNameEn,
        new: page.new, // Keep the original new value
        edit: page.edit, // Keep the original edit value
        delete: page.delete, // Keep the original delete value
        login: page.login, // Keep the original login value
        id: 0 // Assuming ID is 0 for new entry, change as needed
      }));
  
      // Initialize departments
      this.departments = this.userData.department.map((dept: any) => ({
        departmentId: dept.departmentId, // Ensure these match your API response
        departmentNameAr: dept.departmentNameAr,
        departmentNameEn: dept.departmentNameEn,
        login: dept.login,
        id: dept.id // Assuming this is also part of your API response
    }));
  
    // Initialize reports
    this.reports = this.userData.report.map((report: any) => ({
      reportId: report.reportId,
      reportNameAr: report.reportNameAr,
      reportNameEn: report.reportNameEn,
      login: report.login,
      id: report.id
  }));
  
     // Initialize leaves
     this.leaves = this.userData.leave.map((leave: any) => ({
      leaveId: leave.leaveId,
      leaveNameAr: leave.leaveNameAr,
      leaveNameEn: leave.leaveNameEn,
      login: leave.login,
      id: leave.id
  }));
      // Initialize location
      this.Locations = this.userData.location.map((leave: any) => ({
        locationId: leave.locationId,
        locationNameAr: leave.locationNameAr,
        locationNameEn: leave.locationNameEn,
        login: leave.login,
        id: leave.id
    }));
    // Initialize time tables
    this.timeTables = this.userData.timeTableH.map((timeTable: any) => ({
      timeTableHId: timeTable.timeTableHId,
      timeTableHNameAr: timeTable.timeTableHNameAr,
      timeTableHNameEn: timeTable.timeTableHNameEn,
      login: timeTable.login,
      id: timeTable.id
  }));
    });
  }
  

  checkAllCheckBox(type: string, event: any): void {
    const isChecked = event.target.checked;

    // Check or uncheck all based on type
    if (type === 'new' || type === 'edit' || type === 'delete' || type === 'login') {
      this.userpagesQuary.forEach(page => {
        page[type] = isChecked;
      });
    } else if (type === 'department') {
      this.departments.forEach(department => {
        department.login = isChecked;
      });
    } else if (type === 'report') {
      this.reports.forEach(report => {
        report.login = isChecked;
      });
    } else if (type === 'leave') {
      this.leaves.forEach(leave => {
        leave.login = isChecked;
      });
    } else if (type === 'location') {
      this.Locations.forEach(location => {
        location.login = isChecked;
      });
    }else if (type === 'timeTableH') {
      this.timeTables.forEach(timeTable => {
        timeTable.login = isChecked;
      });
    }
  }

  onChecklistChange(event: any, index: number, typeIndex: number, type: string): void {
    const value = event.target.checked;

    if (type === 'systemPage') {
      this.userpagesQuary[index][['New', 'edit', 'delete', 'login'][typeIndex]] = value;
    } else if (type === 'department') {
      this.departments[index].login = value;
    } else if (type === 'report') {
      this.reports[index].login = value;
    } else if (type === 'leave') {
      this.leaves[index].login = value;
    }else if (type === 'location') {
      this.Locations[index].login = value;
    } else if (type === 'timeTableH') {
      this.timeTables[index].login = value;
    }
  }

  get f() {
    return this.userroleForm.controls;
  }
  Backtolist() {
    this.location.back();
  }
  clear() {
    this.userroleForm.reset({
      username: '',
      emailAddress: '',
      password: '',
      name: 'default',     // Reset to default value
      surname: 'default',  // Reset to default value
      isActive: false
    });
    this.alert = false;
  }



  Submit(): void {
    if (this.userroleForm.valid) {
     
      
      // Prepare data to send to API
      const newUserData = {
        user: {
          userName: this.userroleForm.value.username,
          name: this.userroleForm.value.name,
          surname: this.userroleForm.value.surname,
          emailAddress: this.userroleForm.value.emailAddress,
          password: this.userroleForm.value.password,
          isActive: this.userroleForm.value.isActive,
          id: 0 // Assuming ID is 0 for new user
        },
        systemPage: this.userpagesQuary.map(page => ({
          ...page,
          new: page.new, // Send the original new value
          edit: page.edit, // Send the original edit value
          delete: page.delete, // Send the original delete value
          login: page.login // Keep the login status as is
        })),
        department: this.departments.map(dept => ({
          ...dept,
          login: dept.login // Keep the login status as is
        })),
        report: this.reports.map(report => ({
          ...report,
          login: report.login // Keep the login status as is
        })),
        leave: this.leaves.map(leave => ({
          ...leave,
          login: leave.login // Keep the login status as is
        })),
        location: this.Locations.map(location => ({
          ...location,
          login: location.login // Keep the login status as is
        })),
        timeTableH: this.timeTables.map(timeTable => ({
          ...timeTable,
          login: timeTable.login // Keep the login status as is
        }))
      };
      console.log('newUserData', newUserData);
      // Call the API to add the new user and update permissions
      this.apiser.addUserWithPermissions(newUserData)
        .subscribe({
          next: (response) => {
            console.log('User created successfully:', response);
            this.translate
            .get("Create_User_Success")
            .subscribe((translations: any) => {
              Swal.fire({
                title: translations.title,
                text: translations.message,
                icon: "success",
                confirmButtonText: translations.confirmButtonText,
              });
            });
            this.clear(); // Clear the form after submission
          },
          error: (error) => {
            console.error('Error creating user:', error);
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
        });
    }
  }
  
}
