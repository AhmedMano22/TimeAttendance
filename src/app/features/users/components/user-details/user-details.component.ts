import { Component, Input } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { usersystempage } from "src/app/shared/interface/userSystempage";
import { ApiService } from "src/app/shared/services/api/api.service";
import { Location } from "@angular/common";
import { TranslateService } from "@ngx-translate/core";
import { AuthService } from "src/app/features/auth/auth.service";
import { authUser } from "src/app/shared/interface/isAuthUser";
import { UserInfo } from "src/app/shared/interface/user-info";
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
  selector: "app-user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.scss"],
})
export class UserDetailsComponent {
  HomeActive8 = "home";
  public userData: any;
  public userpagesQuary: any[] = [];
  @Input() tabs: any;
  userroleForm: FormGroup;
  userroleId: any;
  alert: boolean = false;
  departments: Department[] = [];
  reports: Report[] = [];
  leaves: Leave[] = [];
  Locations: location[] = [];
  timeTables: TimeTableH[] = [];
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
    this.userroleId = this.activateRout.snapshot.paramMap.get("id");
    console.log("id", this.userroleId);
    
    this.currentLang = localStorage.getItem('app-lang') ?? 'ar';
    this.translate.onLangChange.subscribe((event) => {
      this.currentLang = event.lang;
      console.log("lang",this.currentLang);
      
    });
  }

  ngOnInit() {
    this.getUserData();
    this.userroleForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      emailAddress: ['', [Validators.required, Validators.email]],
      //  password: ['', [Validators.required, Validators.minLength(6)]],
      name: ["default"], 
      surname: ["default"],  
      isActive: [false] 
    });
    this.activateRout.queryParams.subscribe((params) => {
      this.mode = params["mode"];
      console.log("mode", this.mode);
    });
 
  }

  getUserData() {
    this.apiser.getUserById(this.userroleId).subscribe({
      next: (response:any) => {
        this.userData = response.result;
        this.populateForm();
      },
      error: (error) => {
        console.error('Error fetching user data:', error);
      }
    });
  }
  populateForm() {
    // Populate the form with user details
    this.userroleForm.patchValue({
      username: this.userData.user.userName,
      emailAddress: this.userData.user.emailAddress,
      name: this.userData.user.name,
      surname: this.userData.user.surname,
      isActive: this.userData.user.isActive
    });

    // Initialize userpagesQuary, departments, etc. based on the response
    this.userpagesQuary = this.userData.systemPage;
    this.departments = this.userData.department;
    this.reports = this.userData.report;
    this.leaves = this.userData.leave;
    this.Locations = this.userData.location;
    this.timeTables = this.userData.timeTableH;
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
    } else if (type === 'timeTableH') {
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
          password: '',
          isActive: this.userroleForm.value.isActive,
          id:this.userroleId,
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
            this.translate
            .get("update_User_Success")
            .subscribe((translations: any) => {
              Swal.fire({
                title: translations.title,
                text: translations.message,
                icon: "success",
                confirmButtonText: translations.confirmButtonText,
              });
            });
          },
          error: (error) => {
            console.error('Error creating user:', error);
            // Show error message
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
