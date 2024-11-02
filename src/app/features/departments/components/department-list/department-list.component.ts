import { ChangeDetectorRef, Component } from "@angular/core";
import { slider } from "src/app/shared/data/animation/route-animations";
import { ApiService } from "src/app/shared/services/api/api.service";
import * as userData from "src/app/shared/data/user/user";
import { TranslateService } from "@ngx-translate/core";
import { AuthService } from "src/app/features/auth/auth.service";
import { authUser } from "src/app/shared/interface/isAuthUser";
import { LoginResponse, UserInfo } from "src/app/shared/interface/user-info";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { SystemPage } from "src/app/shared/interface/systempage";
declare var require: any;
const Swal = require("sweetalert2");
interface Department {
  nameAr: string;
  nameEn: string;
  id: number;
}
@Component({
  selector: "app-department-list",
  templateUrl: "./department-list.component.html",
  styleUrls: ["./department-list.component.scss"],
})
export class DepartmentListComponent {
  subscriptions = ["Lawyer", "Normal", "Admin", "Translator"];
  
  loading = false;
  ListData: any[] = [];
  subscriptionType: string[];
  item: boolean = false;
  DepartmentForm!: FormGroup;
  EditDepartmentForm!: FormGroup;
  isSubmited = false;
  isEditSubmited = false;
  department:Department={
    nameAr: "",
    nameEn: "",
    id: 0
  }
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
    this.authservice.user$.subscribe((userData) => {
      this.user = userData;
      console.log("user",this.user); 
    });
  }
  ngOnInit() {
    this.loading = true;
     this.load(this.currentPage,this.searchTerm);
     this.DepartmentForm = this.fb.group({
      nameAr: ['', Validators.required], 
      nameEn: ['', Validators.required], 
    });
    this.EditDepartmentForm = this.fb.group({
      nameAr: ['', Validators.required], 
      nameEn: ['', Validators.required], 
    });
    this.UserPageAuthnticated();
  }
  UserPageAuthnticated() {
    this.apiSer.getUserById(this.user.userId).subscribe({
      next: (response:any) => {
        this.employeePermissions = response.result.systemPage.find(
          (page:any) => page.systemPageId === 6
        ) || null;
        console.log("employeePermissions",this.employeePermissions);
      },
      error: (error) => {
        console.error('Error fetching user data:', error);
      }
    });
  }
  load(pageNumber:number,searchTerm: string) {
    this.loading = true; // Start loading
    this.apiSer.getDepartmentsByuser(pageNumber, this.itemsPerPage,searchTerm).subscribe({
      next: (res: any) => {
        this.ListData = res.result.items;
        console.log("res", res);

        this.loading = false; // Stop loading after data is fetched
        this.totalItems = res.result.count;
        this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
        console.log( this.totalPages);
        
        this.updatePagination();
        this.cdRef.detectChanges();
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
    const modalRef = this.modalService.open(content,{ size: 'lg' });
  }
 
  onSubmit(modal: any) {
    this.isSubmited = true;
    if (this.DepartmentForm.valid) {
      console.log(this.DepartmentForm.value);
      const formData = this.DepartmentForm.value
      this.apiSer.addDepartment(formData).subscribe({
        next: (res: any) => {
          console.log(res);
        
          if (res.success == true) {
            this.load(1,this.searchTerm);
            this.setPage(1);
            this.DepartmentForm.reset();
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
              this.apiSer.deleteDepartment(id).subscribe({
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

    this.apiSer.getDepartmentByID(id).subscribe({
      next: (res: any) => {
        console.log(res);
        if (res.success) {
          this.department = {
            nameAr: res.result.nameAr,
            nameEn: res.result.nameEn,
            id: res.result.id,
           
          };
          this.EditDepartmentForm.patchValue({
            nameAr: this.department.nameAr,
            nameEn:this.department.nameEn,
    
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
    if (this.EditDepartmentForm.valid) {
      const { nameAr, nameEn } = this.EditDepartmentForm.value;

      const body = {
        nameAr: nameAr,
        nameEn: nameEn,
        id:this.department.id
      };
      console.log("Update body:", body);

      this.apiSer.UpdateDepartment(body).subscribe({
        next: (res: any) => {
          console.log("Update response:", res);
          if (res.success == true) {
            // this.load();
            this.load(this.currentPage,this.searchTerm);
            this.updatePagination();
            modal.dismiss();
            this.translate
              .get("update_Depart_Success")
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
