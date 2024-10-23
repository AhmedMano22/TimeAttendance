import { ChangeDetectorRef, Component } from "@angular/core";
import { slider } from "src/app/shared/data/animation/route-animations";
import { ApiService } from "src/app/shared/services/api/api.service";
import * as userData from "src/app/shared/data/user/user";
import { TranslateService } from "@ngx-translate/core";
import { AuthService } from "src/app/features/auth/auth.service";
import { authUser } from "src/app/shared/interface/isAuthUser";
import { LoginResponse, UserInfo } from "src/app/shared/interface/user-info";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { map, Observable, startWith } from "rxjs";
declare var require: any;
const Swal = require("sweetalert2");
interface Employee {
  nameEn: string;
  nameAr: string;
  code: string;
  note: string;
  managerCode: string | null;
  email: string;
  active: boolean;
  departmentId: number;
  locationId: number;
  jobId: number;
  id: number;
}
@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.scss']
})
export class EmployeelistComponent {
  subscriptions = ["Lawyer", "Normal", "Admin", "Translator"];
  
  loading = false;
  ListData: any[] = [];
  subscriptionType: string[];
  item: boolean = false;
  AddForm!: FormGroup;
  EditForm!: FormGroup;
  isSubmited = false;
  isEditSubmited = false;
  Departments: any[] = [];
  Locations: any[] = [];
  Jobs: any[] = [];
  employee:Employee={
    nameEn: "",
    nameAr: "",
    code: "",
    note: "",
    managerCode: null,
    email: "",
    active: false,
    departmentId: 0,
    locationId: 0,
    jobId: 0,
    id: 0,
  }
  currentLang: string;
  searchTerm: string = "";
  currentPage = 1;
  itemsPerPage = 3;
  totalItems = 0;
  totalPages = 0;
  pagesToShow: number[] = [];
  user: LoginResponse | null = null;
  searchPlaceholder: string = '';
  noEntriesFoundLabel: string = '';
  constructor(
    private apiSer: ApiService,
    public translate: TranslateService,
    private modalService: NgbModal,
    private authservice: AuthService,
    private fb: FormBuilder,
    private cdRef: ChangeDetectorRef,
  ) {
    this.currentLang = localStorage.getItem('app-lang') ?? 'ar';
    this.translate.onLangChange.subscribe((event) => {
      this.currentLang = event.lang;
      console.log("lang",this.currentLang);
      this.setTextBasedOnLanguage(this.currentLang);

      this.translate.onLangChange.subscribe((event) => {
        this.setTextBasedOnLanguage(event.lang);
      });
    });
    this.authservice.user$.subscribe((userData) => {
      this.user = userData;
      console.log("user",this.user);
    });
  }
  ngOnInit() {
    this.loading = true;
     this.load(this.currentPage,this.searchTerm);
     this.loadLocations();
     this.loadDepartments();
     this.loadJobs()
     this.AddForm = this.fb.group({
      nameAr: ['', Validators.required], 
      nameEn: ['', Validators.required], 
      code: ['', Validators.required], 
      managerCode: [null], 
      email: ['', Validators.required], 
      password: ['', Validators.required], 
      active: [false], 
      departmentId: ['', Validators.required], 
      locationId: ['', Validators.required], 
      jobId: ['', Validators.required], 
      note: ['', Validators.required], 
    });
    this.EditForm = this.fb.group({
      nameAr: ['', Validators.required], 
      nameEn: ['', Validators.required], 
      code: ['', Validators.required], 
      managerCode: [null], 
      email: ['', Validators.required], 
      password: [''], 
      active: [false], 
      departmentId: ['', Validators.required], 
      locationId: ['', Validators.required], 
      jobId: ['', Validators.required], 
      note: ['', Validators.required], 
    });

    this.filteredBanks = this.bankFilterCtrl.valueChanges.pipe(
      startWith(''),
      map(value => this.filterBanks(value))
    );

  }

  load(pageNumber:number,searchTerm: string) {
    this.loading = true; // Start loading
    this.apiSer.getEmployee(pageNumber, this.itemsPerPage,searchTerm).subscribe({
      next: (res: any) => {
        this.ListData = res.result.items;
        console.log("res", res);
        this.loading = false; // Stop loading after data is fetched
        this.totalItems = res.result.count;
        this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
        console.log( this.totalPages);
        
        this.updatePagination();
        this.cdRef.detectChanges();
        this.loading = false; // Stop loading after data is fetched
      },
      error: (err) => {
        console.error("Failed to load requests", err);
        this.loading = false; // Stop loading on error
      },
    });
  }
  updatePagination() {
    const maxPages = 5;
    const startPage = Math.max(1, this.currentPage - Math.floor(maxPages / 2));
    const endPage = Math.min(this.totalPages, startPage + maxPages - 1);
    this.pagesToShow = Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  }

  setPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.load(page,this.searchTerm);
    }
  }
  onSearch() {
    this.currentPage = 1; // Reset to the first page
    this.load(this.currentPage,this.searchTerm); // Load with the search term
  }
  clearSearch() {
    this.searchTerm = '';
    this.load(1,this.searchTerm); // Load all data when the search is cleared
  }
  lmModal(content:any){
    const modalRef = this.modalService.open(content,{ size: 'xl' });
  }
 
  onSubmit(modal: any) {
    this.isSubmited = true;
    if (this.AddForm.valid) {
      console.log(this.AddForm.value);
      const formData = this.AddForm.value;
      if (formData.managerCode === "") {
        formData.managerCode = null;
      }
      const body = {
          nameEn: formData.nameEn,
          nameAr: formData.nameAr,
          code: formData.code,
          note: formData.note,
          managerCode: formData.managerCode,
          email: formData.email,
          active: formData.active,
          departmentId: +formData.departmentId,
          locationId: +formData.locationId,
          jobId: +formData.jobId,
          password: formData.password
      }
      console.log("body",body);
      
      this.apiSer.addEmployee(body).subscribe({
        next: (res: any) => {
          console.log(res);
        
          if (res.success == true) {
            this.load(1,this.searchTerm);
            this.setPage(1);
            this.AddForm.reset();
            this.AddForm.reset({ departmentId: "" });
            this.AddForm.reset({ locationId: "" });
            this.AddForm.reset({ jobId: "" });
            this.isSubmited = false;
            modal.dismiss();
            this.translate
              .get("Create_department_Success")
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
          if(error.error.result == "No manager with this code"){
            this.translate.get("noManagerCode").subscribe((translations: any) => {
              Swal.fire({
                title: translations.title,
                text: translations.message,
                icon: "error",
                confirmButtonText: translations.confirmButtonText,
              });
            });
          }else{
            this.translate.get("errorMessage").subscribe((translations: any) => {
              Swal.fire({
                title: translations.title,
                text: translations.message,
                icon: "error",
                confirmButtonText: translations.confirmButtonText,
              });
            });
          }
      
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
  delete(id: any) {
    this.translate
      .get([
        "confirmDeleteTitle",
        "confirmDeleteText",
        "confirmButtonText",
        "cancelButtonText",
        "deleteSuccessTitle",
        "deleteSuccessMessage",
        "errorMessageTitle",
        "errorMessageText",
        "cancelMessageTitle",
        "cancelMessageText",
      ])
      .subscribe((translations: any) => {
        const swalWithBootstrapButtons = Swal.mixin({
          buttonsStyling: true,
        });

        swalWithBootstrapButtons
          .fire({
            title: translations.confirmDeleteTitle,
            text: translations.confirmDeleteText,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: translations.confirmButtonText,
            cancelButtonText: translations.cancelButtonText,
            reverseButtons: true,
          })
          .then((result: any) => {
            if (result.isConfirmed) {
              this.apiSer.deleteEmployee(id).subscribe({
                next: (res: any) => {
                  console.log(res);
              
                  if (res.success) {
                    this.load(1,this.searchTerm);
                    this.translate
                      .get([
                        "deleteSuccessTitle",
                        "deleteSuccessMessage",
                        "confirmButtonText",
                      ])
                      .subscribe((translations: any) => {
                        swalWithBootstrapButtons.fire({
                          title: translations.deleteSuccessTitle,
                          text: translations.deleteSuccessMessage,
                          icon: "success",
                          confirmButtonText: translations.confirmButtonText,
                        });
                      });
                  } else {
                    this.translate
                      .get([
                        "errorMessageTitle",
                        "errorMessageText",
                        "confirmButtonText",
                      ])
                      .subscribe((translations: any) => {
                        swalWithBootstrapButtons.fire({
                          title: translations.errorMessageTitle,
                          text: translations.errorMessageText,
                          icon: "error",
                          confirmButtonText: translations.confirmButtonText,
                        });
                      });
                  }
                },
                error: (error) => {
                  console.log(error);
                  this.translate
                    .get([
                      "errorMessageTitle",
                      "errorMessageText",
                      "confirmButtonText",
                    ])
                    .subscribe((translations: any) => {
                      swalWithBootstrapButtons.fire({
                        title: translations.errorMessageTitle,
                        text: translations.errorMessageText,
                        icon: "error",
                        confirmButtonText: translations.confirmButtonText,
                      });
                    });
                },
              });
            }
          
          });
      });
  }
  EditModal(content: any, id: any) {
    const modalRef = this.modalService.open(content,{ size: 'xl' });

    this.apiSer.getEmployeeByID(id).subscribe({
      next: (res: any) => {
        console.log(res);
        if (res.success) {
          this.employee = {
            nameAr: res.result.nameAr,
            nameEn: res.result.nameEn,
            code: res.result.code,
            note: res.result.note,
            managerCode: res.result.managerCode,
            email: res.result.email,
            active: res.result.active,
            departmentId: res.result.departmentId,
            locationId: res.result.locationId,
            jobId: res.result.jobId,
        
            id: res.result.id,
           
          };
          this.EditForm.patchValue({
            nameAr: this.employee.nameAr,
            nameEn:this.employee.nameEn,
            code: this.employee.code,
            note: this.employee.note,
            managerCode: this.employee.managerCode,
            email: this.employee.email,
            active: this.employee.active,
            departmentId: this.employee.departmentId,
            locationId: this.employee.locationId,
            jobId: this.employee.jobId,
        
          });
        }
      },
      error: (error) => {
        console.error("Error fetching subject details:", error);
      },
    });
  }
  onSubmitEdit(modal: any) {
    this.isEditSubmited = true;
    if (this.EditForm.valid) {
      const { nameAr, nameEn,code,managerCode,email,active,departmentId,locationId,jobId,note } = this.EditForm.value;

      const body = {
        nameAr: nameAr,
        nameEn: nameEn,
        code: code,
        note: note,
        managerCode: managerCode,
        email: email,
        active: active,
        departmentId:departmentId,
        locationId: locationId,
        jobId: jobId,
        id:this.employee.id
      };
      console.log("Update body:", body);

      this.apiSer.UpdateEmployee(body).subscribe({
        next: (res: any) => {
          console.log("Update response:", res);
          if (res.success == true) {
            this.load(this.currentPage,this.searchTerm);
            this.updatePagination();
            modal.dismiss();
            this.translate
              .get("update_employee_Success")
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
          console.error("Error updating subject:", error);
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

  loadLocations(){
    this.apiSer.getLocations().subscribe((res:any) => {
      if (res.success) {
        this.Locations = res.result.items;
      }
    });
  }
  loadDepartments(){
    this.apiSer.getDepartments().subscribe((res:any) => {
      if (res.success) {
        this.Departments = res.result.items;
      }
    });
  }
  loadJobs(){
    this.apiSer.getJobs().subscribe((res:any) => {
      if (res.success) {
        this.Jobs = res.result.items;
      }
    });
  }
 


  getName(type: any): string {
    return this.currentLang === 'ar' ? type.nameAr : type.nameEn;
  }
  bankCtrl = new FormControl();
  bankFilterCtrl = new FormControl();
  filteredBanks: Observable<any[]>;
  banks = [
    { name: 'Bank of America' },
    { name: 'Wells Fargo' },
    { name: 'Chase' },
    { name: 'Citibank' },
    { name: 'Capital One' }
  ];
  private filterBanks(value: string): any[] {
    const filterValue = value.toLowerCase();
    return this.banks.filter(bank => bank.name.toLowerCase().includes(filterValue));
  }
  private setTextBasedOnLanguage(lang: string) {
    if (lang === 'ar') {
      this.searchPlaceholder = 'بحث'; // Arabic for "Search"
      this.noEntriesFoundLabel = 'لم يتم العثور على نتائج'; // Arabic for "No options found"
    } else {
      this.searchPlaceholder = 'Search'; // Default to English
      this.noEntriesFoundLabel = 'No options found'; // English
    }
  }
  ResetPassword(id:any){
    console.log("user is",id);
 
    let obj = {
      userId: id,
  };
    this.apiSer.ResetPassword(obj).subscribe(
      (res: any) => {
        console.log("response", res);
        if (res.success) {
          this.translate
            .get("resetpasssweetAlert")
            .subscribe((translations: any) => {
              Swal.fire({
                title: translations.title,
                text: translations.message,
                icon: "success",
                confirmButtonText: translations.confirmButtonText,
              })
            });
        }
      },
      (error) => {
 
          console.log("error");
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
    );
    
  }
}

