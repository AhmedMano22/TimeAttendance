import { AfterViewInit, ChangeDetectorRef, Component } from "@angular/core";
import { slider } from "src/app/shared/data/animation/route-animations";
import { ApiService } from "src/app/shared/services/api/api.service";
import * as userData from "src/app/shared/data/user/user";
import { TranslateService } from "@ngx-translate/core";
import { AuthService } from "src/app/features/auth/auth.service";
import { authUser } from "src/app/shared/interface/isAuthUser";
import { LoginResponse, SystemPage, UserInfo } from "src/app/shared/interface/user-info";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { map, Observable, startWith } from "rxjs";
declare var require: any;
const Swal = require("sweetalert2");
interface Transaction {
  employeeId: number;
  employeeNameAr: string;
  employeeNameEn: string;
  from: string; 
  to: string;   
  // transactionStatusId: number;
  // transactionStatusNameAr: string;
  // transactionStatusNameEn: string;
  note: string;
  leaveId: number;
  leaveNameAr: string;
  leaveNameEn: string;
  // reason: string | null;
  // managerId: number | null;
  // managerNameAr: string | null;
  // managerNameEn: string | null;
  id: number;
}
@Component({
  selector: 'app-permission-list',
  templateUrl: './permission-list.component.html',
  styleUrls: ['./permission-list.component.scss']
})
export class PermissionListComponent implements AfterViewInit{

  subscriptions = ["Lawyer", "Normal", "Admin", "Translator"];
  
  loading = false;
  ListData: any[] = [];
  subscriptionType: string[];
  item: boolean = false;
  AddForm!: FormGroup;
  EditForm!: FormGroup;
  isSubmited = false;
  isEditSubmited = false;
  selectedDate: string;
  EmployesList: any[] = [];
  LeavesList: any[] = [];
  currentLang: string;
  transaction:Transaction={
    employeeId: 0,
    employeeNameAr: "",
    employeeNameEn: "",
    from: "",
    to: "",
    note: "",
    leaveId: 0,
    leaveNameAr: "",
    leaveNameEn: "",
    id: 0
  }
  searchTerm: string = "";
  currentPage = 1;
  itemsPerPage = 2;
  totalItems = 0;
  totalPages = 0;
  pagesToShow: number[] = [];
  employeesList: any[] = []; 
employeeFilterCtrl = new FormControl();
filteredEmployees: Observable<any[]>; 
searchPlaceholder: string = '';
noEntriesFoundLabel: string = '';
employeePermissions: SystemPage | null = null;
user: LoginResponse ;
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
      this.loadEmployes();
      this.loadLeaves();
      this.setTextBasedOnLanguage(this.currentLang);
      this.updateSearchLabel();
    });
    this.filteredEmployees = this.employeeFilterCtrl.valueChanges.pipe(
      startWith(''),
      map(value => this.filterEmployees(value))
    );
    this.authservice.user$.subscribe((userData) => {
      this.user = userData;
      console.log("user",this.user); 
    });
  }
  ngAfterViewInit() {
    this.updateSearchLabel();  // Update search label after the component is initialized
  }

  updateSearchLabel() {
    // Use querySelector or Angular Renderer2 to find and modify the label
    const searchLabel = document.querySelector('.ngx-dropdown-container .nsdicon-search');
    if (searchLabel) {
      searchLabel.innerHTML = this.currentLang === 'ar' ? 'بحث...' : 'Search...';
    }
    this.cdRef.detectChanges();  // Ensure the changes are detected
  }
  ngOnInit() {
    this.loading = true;
    this.load(this.currentPage);
     this.loadEmployes();
     this.loadLeaves();
     this.AddForm = this.fb.group({
      employeeId: ['', Validators.required], 
      leaveId: ['', Validators.required], 
      From: ["", Validators.required],
      To: ["", Validators.required],
      note: ["", Validators.required],
    });
    this.EditForm = this.fb.group({
      employeeId: ['', Validators.required], 
      leaveId: ['', Validators.required], 
      From: ["", Validators.required],
      To: ["", Validators.required],
      note: ["", Validators.required],

    });
    this.UserPageAuthnticated();
  }
  UserPageAuthnticated() {
    this.apiSer.getUserById(this.user.userId).subscribe({
      next: (response:any) => {
        this.employeePermissions = response.result.systemPage.find(
          (page:any) => page.systemPageId === 14
        ) || null;
        console.log("employeePermissions",this.employeePermissions);
      },
      error: (error) => {
        console.error('Error fetching user data:', error);
      }
    });
  }
loadEmployes(){
    this.apiSer.getEmployee().subscribe((res:any) => {
      if (res.success) {
        this.EmployesList = res.result.items;
      }
    });
}


/* Leaves */
loadLeaves(){
  this.apiSer.getLeavesByuser(3).subscribe((res:any) => {
    if (res.success) {
      this.LeavesList = res.result.items;
    }
  });
}

getName(type: any): string {
  return this.currentLang === 'ar' ? type.nameAr : type.nameEn;
}
getEmployeeName(type: any): string {
  return this.currentLang === 'ar' ? type.userSurname : type.userName;
}
load(pageNumber:any) {
  this.loading = true; // Start loading
  this.apiSer.getTransactions(3,'',pageNumber, this.itemsPerPage).subscribe({
    next: (res: any) => {
      this.ListData = res.result.items;
      console.log("res", res);
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
    this.load(page);
  }
}
  lmModal(content:any){
    const modalRef = this.modalService.open(content,{ size: 'lg' });
  }
 
  onSubmit(modal: any) {
    this.isSubmited = true;
    if (this.AddForm.valid) {
      console.log(this.AddForm.value);
      const formData = this.AddForm.value
    const body =     {
        employeeId: +formData.employeeId,
        from:formData.From,
        to:formData.To,
        note: formData.note,
        leaveId: +formData.leaveId
      }
      console.log("body",body);
      this.apiSer.addTransaction(body).subscribe({
        next: (res: any) => {
          console.log(res);
          if (res.success == true) {
            this.load(1);
            this.setPage(1);
            this.AddForm.reset();
            this.AddForm.get('employeeId')?.setValue('');
            this.AddForm.get('leaveId')?.setValue('');
            this.isSubmited = false;
            modal.dismiss();
            this.translate
              .get("Create_transaction_Success")
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
              this.apiSer.deleteTransaction(id).subscribe({
                next: (res: any) => {
                  console.log(res);
              
                  if (res.success) {
                    this.load(1);
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
    const modalRef = this.modalService.open(content,{ size: 'lg' });

    this.apiSer.getTransactionByID(id).subscribe({
      next: (res: any) => {
        console.log(res);
        if (res.success) {
          this.transaction = {
            employeeId: res.result.employeeId,
            employeeNameAr:res.result.employeeNameAr,
            employeeNameEn:res.result.employeeNameEn,
            from:res.result.from,
            to:res.result.to,
            note:res.result.note,
            leaveId:res.result.leaveId,
            leaveNameAr:res.result.leaveNameAr,
            leaveNameEn:res.result.leaveNameEn,
            id: res.result.id,
          };
          this.EditForm.patchValue({
            employeeId: this.transaction.employeeId,
            employeeNameAr:this.transaction.employeeNameAr,
            employeeNameEn:this.transaction.employeeNameEn,
            From:this.transaction.from,
            To:this.transaction.to,
            note:this.transaction.note,
            leaveId:this.transaction.leaveId,
            leaveNameAr:this.transaction.leaveNameAr,
            leaveNameEn:this.transaction.leaveNameEn,
      
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
      const { employeeId, leaveId ,From,To,note} = this.EditForm.value;
      const body = {
        id: this.transaction.id,
        employeeId: employeeId,
        from: From,
        to: To,
        // transactionStatusId: 0,
        note: note,
        leaveId: leaveId,
        // reason: this.transaction.reason,
        // managerCode: this.transaction.managerCode
      };
      console.log("Update body:", body);

      this.apiSer.UpdateTransaction(body).subscribe({
        next: (res: any) => {
          console.log("Update response:", res);
          if (res.success == true) {
            this.load(this.currentPage);
            this.updatePagination();
            modal.dismiss();
            this.translate
              .get("Edit_transaction_Success")
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

   // Filter employees based on search input
 private filterEmployees(value: string): any[] {
  const filterValue = value.toLowerCase();
  return this.EmployesList.filter(employee =>
    (`${employee.userName} ${employee.userSurname}`).toLowerCase().includes(filterValue)
  );
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
}


