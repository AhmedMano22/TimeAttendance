import { AfterViewInit, ChangeDetectorRef, Component } from "@angular/core";
import { slider } from "src/app/shared/data/animation/route-animations";
import { ApiService } from "src/app/shared/services/api/api.service";
import * as userData from "src/app/shared/data/user/user";
import { TranslateService } from "@ngx-translate/core";
import { AuthService } from "src/app/features/auth/auth.service";
import { authUser } from "src/app/shared/interface/isAuthUser";
import { UserInfo } from "src/app/shared/interface/user-info";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
declare var require: any;
const Swal = require("sweetalert2");
interface Transaction {
  employeeId: number;
  employeeNameAr: string;
  employeeNameEn: string;
  from: string; 
  to: string;   
  note: string;
  leaveId: number;
  leaveNameAr: string;
  leaveNameEn: string;
  id: number;
}
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  subscriptions = ["Lawyer", "Normal", "Admin", "Translator"];
  
  loading = false;
  ListData: any[] = [];
  subscriptionType: string[];
  item: boolean = false;
  ReasonForm!: FormGroup;
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
  itemsPerPage = 3;
  totalItems = 0;
  totalPages = 0;
  pagesToShow: number[] = [];
/////////////////////
singleSelect: any = [];
 config = {
  displayKey: "name",
  search: true,
  limitTo: 0,
  height: "250px",
  enableSelectAll: true,
  placeholder:''
};
transactionID:number;
resetOption: any;
options: any[] = [];
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
    

  
    });
 
  }

  ngOnInit() {
    this.loading = true;
     this.load(this.currentPage);
     this.ReasonForm = this.fb.group({
      reason: ['', Validators.required], 
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
    this.apiSer.GetAllTransactionToMyEmployee('',1,pageNumber, this.itemsPerPage).subscribe({
      next: (res: any) => {
        // this.ListData = res.result.items;
        this.ListData = res.result.items;
        console.log("res", this.ListData);
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

  accept(id: any) {
    this.translate
      .get([
        "confirmAcceptTitle",
        "confirmAcceptText",
        "confirmButtonText",
        "cancelButtonText",
        "acceptSuccessTitle",
        "acceptSuccessMessage",
        "errorMessageTitle",
        "errorMessageText"
      ])
      .subscribe((translations: any) => {
        const swalWithBootstrapButtons = Swal.mixin({
          buttonsStyling: true,
        });
  
        swalWithBootstrapButtons
          .fire({
            title: translations.confirmAcceptTitle,
            text: translations.confirmAcceptText,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: translations.confirmButtonText,
            cancelButtonText: translations.cancelButtonText,
            reverseButtons: true,
          })
          .then((result: any) => {
            if (result.isConfirmed) {
              const body = {
                id: id,
                transactionStatusId: 2,
                reason: ""
              };
              console.log("body", body);
              
              this.apiSer.ChangeStatus(body).subscribe({
                next: (res: any) => {
                  console.log(res);
                  if (res.success == true) {
                    this.load(1);
                    this.setPage(1);
                    
                    this.translate
                      .get([
                        "acceptSuccessTitle",
                        "acceptSuccessMessage",
                        "confirmButtonText"
                      ])
                      .subscribe((translations: any) => {
                        swalWithBootstrapButtons.fire({
                          title: translations.acceptSuccessTitle,
                          text: translations.acceptSuccessMessage,
                          icon: "success",
                          confirmButtonText: translations.confirmButtonText,
                        });
                      });
                  } else {
                    this.translate
                      .get([
                        "errorMessageTitle",
                        "errorMessageText",
                        "confirmButtonText"
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
                      "confirmButtonText"
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
  
  Deny(content: any,id:any){
    const modalRef = this.modalService.open(content, { size: "lg" });
    this.transactionID = id;
    console.log("transactionID",this.transactionID);
    
  }
  onEditLessonSubmit(modal: any) {
    this.isSubmited = true;

    if (this.ReasonForm.valid) {
      const { reason } = this.ReasonForm.value;

      const body = {
        id: this.transactionID,
          transactionStatusId: 3,
          reason:reason
      };
      console.log("Update body:", body);

      this.apiSer.ChangeStatus(body).subscribe({
        next: (res: any) => {
          console.log(res);
          if (res.success == true) {
            this.load(1);
            this.setPage(1);
            modal.dismiss();
            this.translate
              .get("reject_Success")
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

 
}
