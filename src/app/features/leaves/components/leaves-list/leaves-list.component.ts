import { ChangeDetectorRef, Component } from "@angular/core";
import { slider } from "src/app/shared/data/animation/route-animations";
import { ApiService } from "src/app/shared/services/api/api.service";
import * as userData from "src/app/shared/data/user/user";
import { TranslateService } from "@ngx-translate/core";
import { AuthService } from "src/app/features/auth/auth.service";
import { authUser } from "src/app/shared/interface/isAuthUser";
import { LoginResponse, SystemPage, UserInfo } from "src/app/shared/interface/user-info";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
declare var require: any;
const Swal = require("sweetalert2");
interface Leave {
  nameEn: string;
  nameAr: string;
  alisEn: string;
  alisAr: string;
  isSub: boolean;
  acceptVac: boolean;
  leavesTypeId: number;
  leavesTypeNameAr: string;
  leavesTypeNameEn: string;
  leavesVacId: number;
  leavesVacNameAr: string;
  leavesVacNameEn: string;
  cutVal: number;
  leavesRuleId: number;
  leavesRuleNameAr: string;
  leavesRuleNameEn: string;
  id: number;
}
@Component({
  selector: 'app-leaves-list',
  templateUrl: './leaves-list.component.html',
  styleUrls: ['./leaves-list.component.scss']
})
export class LeavesListComponent {
  subscriptions = ["Lawyer", "Normal", "Admin", "Translator"];
  
  loading = false;
  ListData: any[] = [];
  subscriptionType: string[];
  item: boolean = false;
  LeaveForm!: FormGroup;
  EditLeaveForm!: FormGroup;
  isSubmited = false;
  isEditSubmited = false;
  leave:Leave={
    nameEn: "",
    nameAr: "",
    alisEn: "",
    alisAr: "",
    isSub: false,
    acceptVac: false,
    leavesTypeId: 0,
    leavesTypeNameAr: "",
    leavesTypeNameEn: "",
    leavesVacId: 0,
    leavesVacNameAr: "",
    leavesVacNameEn: "",
    cutVal: 0,
    leavesRuleId: 0,
    leavesRuleNameAr: "",
    leavesRuleNameEn: "",
    id: 0
  };
  currentLang: string;
  leavesTypeList: any[] = [];
  LeaveRulesList: any[] = [];
  LeaveVacesList: any[] = [];
  searchTerm: string = "";
  currentPage = 1;
  itemsPerPage = 3;
  totalItems = 0;
  totalPages = 0;
  pagesToShow: number[] = [];
  employeePermissions: SystemPage | null = null;
  user: LoginResponse ;
  constructor(
    private apiSer: ApiService,
    private translate: TranslateService,
    private modalService: NgbModal,
    private authservice: AuthService,
    private fb: FormBuilder,
    private cdRef: ChangeDetectorRef,
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
    this.loading = true;
    this.load(this.currentPage,this.searchTerm);
     this.loadlLeavesTypes();
     this.loadlLeavesRules();
     this.loadlLeavesVaces();
     this.LeaveForm = this.fb.group({
      nameAr: ['', Validators.required], 
      nameEn: ['', Validators.required], 
      alisAr: ['', Validators.required], 
      alisEn: ['', Validators.required], 
      isSub: [false], 
      acceptVac: [false], 
      leavesTypeId: ['', Validators.required], 
      leavesVacId: ['', Validators.required], 
      cutVal: ['', Validators.required], 
      leavesRuleId: ['', Validators.required], 
    });
    this.EditLeaveForm = this.fb.group({
      nameAr: ['', Validators.required], 
      nameEn: ['', Validators.required], 
      alisAr: ['', Validators.required], 
      alisEn: ['', Validators.required], 
      isSub: [false], 
      acceptVac: [false], 
      leavesTypeId: ['', Validators.required], 
      leavesVacId: ['', Validators.required], 
      cutVal: ['', Validators.required], 
      leavesRuleId: ['', Validators.required], 
    });
    this.UserPageAuthnticated();
  }
  UserPageAuthnticated() {
    this.apiSer.getUserById(this.user.userId).subscribe({
      next: (response:any) => {
        this.employeePermissions = response.result.systemPage.find(
          (page:any) => page.systemPageId === 11
        ) || null;
        console.log("employeePermissions",this.employeePermissions);
      },
      error: (error) => {
        console.error('Error fetching user data:', error);
      }
    });
  }
  loadlLeavesTypes(){
     this.apiSer.GetAllLeavesType().subscribe((res:any) => {
       if (res.success) {
         this.leavesTypeList = res.result;
       }
     });
 }
 loadlLeavesRules(){
  this.apiSer.GetAllLeaveRules().subscribe((res:any) => {
    if (res.success) {
      this.LeaveRulesList = res.result;
    }
  });
}
loadlLeavesVaces(){
  this.apiSer.GetAllLeaveVaces().subscribe((res:any) => {
    if (res.success) {
      this.LeaveVacesList = res.result;
    }
  });
}

getLeaveTypeNameById(id: number): string {
  const type = this.leavesTypeList.find(type => type.id === id);
  if (!type) return 'Unknown'; 
  return this.currentLang === 'ar' ? type.nameAr : type.nameEn;
}

getLeaveVacNameById(id: number): string {
  const type = this.LeaveVacesList.find(type => type.id === id);
  if (!type) return 'Unknown'; 
  return this.currentLang === 'ar' ? type.nameAr : type.nameEn;
}

getLeaveRuleNameById(id: number): string {
  const type = this.LeaveRulesList.find(type => type.id === id);
  if (!type) return 'Unknown'; 
  return this.currentLang === 'ar' ? type.nameAr : type.nameEn;
}
getName(type: any): string {
  return this.currentLang === 'ar' ? type.nameAr : type.nameEn;
}
  load(pageNumber:number,searchTerm: string) {
    this.loading = true; // Start loading
    this.apiSer.getLeaves('',pageNumber, this.itemsPerPage,searchTerm).subscribe({
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
    // const modalRef = this.modalService.open(content,{ size: 'lg' });
    const modalRef = this.modalService.open(content,{ size: 'xl' });
  }
 
  onSubmit(modal: any) {
    this.isSubmited = true;
    if (this.LeaveForm.valid) {
      console.log(this.LeaveForm.value);
      const formData = this.LeaveForm.value
      this.apiSer.addLeave(formData).subscribe({
        next: (res: any) => {
          console.log(res);
        
          if (res.success == true) {
            this.load(1,this.searchTerm);
            this.setPage(1);
            this.LeaveForm.reset();
            this.isSubmited = false;
            modal.dismiss();
            this.translate
              .get("Create_Leave_Success")
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
              this.apiSer.deleteLeave(id).subscribe({
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
    const modalRef = this.modalService.open(content,{ size: 'lg' });

    this.apiSer.getLeaveByID(id).subscribe({
      next: (res: any) => {
        console.log(res);
        if (res.success) {
          this.leave = {
            nameAr: res.result.nameAr,
            nameEn: res.result.nameEn,
            id: res.result.id,
            alisEn: res.result.alisEn,
            alisAr: res.result.alisAr,
            isSub: res.result.isSub,
            acceptVac: res.result.acceptVac,
            leavesTypeId: res.result.leavesTypeId,
            leavesTypeNameAr: res.result.leavesTypeNameAr,
            leavesTypeNameEn: res.result.leavesTypeNameEn,
            leavesVacId: res.result.leavesVacId,
            leavesVacNameAr: res.result.leavesVacNameAr,
            leavesVacNameEn: res.result.leavesVacNameEn,
            cutVal: res.result.cutVal,
            leavesRuleId: res.result.leavesRuleId,
            leavesRuleNameAr: res.result.leavesRuleNameAr,
            leavesRuleNameEn: res.result.leavesRuleNameEn,
         
           
          };
          this.EditLeaveForm.patchValue({
            nameAr: this.leave.nameAr,
            nameEn:this.leave.nameEn,

            alisAr: this.leave.alisAr,
            alisEn:this.leave.alisEn,

            isSub: this.leave.isSub,
            acceptVac:this.leave.acceptVac,

            leavesTypeId: this.leave.leavesTypeId,
            leavesVacId:this.leave.leavesVacId,

            leavesRuleId: this.leave.leavesRuleId,
            cutVal:this.leave.cutVal,

    
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
    if (this.EditLeaveForm.valid) {
      const { nameAr, nameEn ,alisAr ,alisEn ,leavesTypeId ,isSub ,acceptVac ,leavesVacId ,cutVal ,leavesRuleId } = this.EditLeaveForm.value;

      const body = {
           id:this.leave.id,
          nameEn: nameEn,
          nameAr: nameAr,
          alisEn: alisEn,
          alisAr: alisAr,
          leavesTypeId: leavesTypeId,
          isSub: isSub,
          acceptVac: acceptVac,
          leavesVacId: leavesVacId,
          cutVal: cutVal,
          leavesRuleId: leavesRuleId
      };
      console.log("Update body:", body);

      this.apiSer.UpdateLeave(body).subscribe({
        next: (res: any) => {
          console.log("Update response:", res);
          if (res.success == true) {
            this.load(this.currentPage,this.searchTerm);
            this.updatePagination();
            modal.dismiss();
            this.translate
              .get("update_Leave_Success")
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
}

