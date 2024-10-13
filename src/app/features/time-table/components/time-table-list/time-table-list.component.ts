import { ChangeDetectorRef, Component } from "@angular/core";
import { slider } from "src/app/shared/data/animation/route-animations";
import { ApiService } from "src/app/shared/services/api/api.service";
import * as userData from "src/app/shared/data/user/user";
import { TranslateService } from "@ngx-translate/core";
import { AuthService } from "src/app/features/auth/auth.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
declare var require: any;
const Swal = require("sweetalert2");
interface Shift {
  nameAr: string;
  nameEn: string;
  id: number;
}
@Component({
  selector: 'app-time-table-list',
  templateUrl: './time-table-list.component.html',
  styleUrls: ['./time-table-list.component.scss']
})
export class TimeTableListComponent {
  subscriptions = ["Lawyer", "Normal", "Admin", "Translator"];
  
  loading = false;
  ListData: any[] = [];
  subscriptionType: string[];
  item: boolean = false;
  shiftForm!: FormGroup;
  EditshiftForm!: FormGroup;
  isSubmited = false;
  isEditSubmited = false;
  shift:Shift={
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
  constructor(
    private apiSer: ApiService,
    private translate: TranslateService,
    private modalService: NgbModal,
    private authservice: AuthService,
    private fb: FormBuilder,
    private cdRef: ChangeDetectorRef,
  ) {
 
  }
  ngOnInit() {
    this.loading = true;
    this.load(this.currentPage,this.searchTerm);
     this.shiftForm = this.fb.group({
      nameAr: ['', Validators.required], 
      nameEn: ['', Validators.required], 
    });
    this.EditshiftForm = this.fb.group({
      nameAr: ['', Validators.required], 
      nameEn: ['', Validators.required], 
    });
  }

  load(pageNumber:number,searchTerm: string) {
    this.loading = true; // Start loading
    this.apiSer.getAllTimeTable(pageNumber, this.itemsPerPage,searchTerm).subscribe({
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
  formatDate(dateString: string): string {
    const date = new Date(dateString);
    
    // Check if the date is valid
    if (isNaN(date.getTime())) {
      return 'Invalid Date'; // Return a default value for invalid dates
    }
  
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-indexed
    const day = String(date.getDate()).padStart(2, '0');
  
    return `${year}/${month}/${day}`;
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
              this.apiSer.deleteTimeTable(id).subscribe({
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
  // lmModal(content:any){
  //   const modalRef = this.modalService.open(content,{ size: 'lg' });
  // }
 
  // onSubmit(modal: any) {
  //   this.isSubmited = true;
  //   if (this.shiftForm.valid) {
  //     console.log(this.shiftForm.value);
  //     const formData = this.shiftForm.value
  //     this.apiSer.addShift(formData).subscribe({
  //       next: (res: any) => {
  //         console.log(res);
        
  //         if (res.success == true) {
  //           this.load();
  //           this.shiftForm.reset();
  //           this.isSubmited = false;
  //           modal.dismiss();
  //           this.translate
  //             .get("Create_Shift_Success")
  //             .subscribe((translations: any) => {
  //               Swal.fire({
  //                 title: translations.title,
  //                 text: translations.message,
  //                 icon: "success",
  //                 confirmButtonText: translations.confirmButtonText,
  //               });
  //             });
  //         } else {
  //           this.translate
  //             .get("errorMessage")
  //             .subscribe((translations: any) => {
  //               Swal.fire({
  //                 title: translations.title,
  //                 text: translations.message,
  //                 icon: "error",
  //                 confirmButtonText: translations.confirmButtonText,
  //               });
  //             });
  //         }
  //       },
  //       error: (error) => {
  //         console.log(error);
  //         this.translate.get("errorMessage").subscribe((translations: any) => {
  //           Swal.fire({
  //             title: translations.title,
  //             text: translations.message,
  //             icon: "error",
  //             confirmButtonText: translations.confirmButtonText,
  //           });
  //         });
  //       },
  //     });
  //   } else {
  //     this.translate
  //       .get("validation_sweetAlert")
  //       .subscribe((translations: any) => {
  //         Swal.fire({
  //           title: translations.title,
  //           text: translations.message,
  //           icon: "warning",
  //           confirmButtonText: translations.confirmButtonText,
  //         });
  //       });
  //   }
  // }

  // EditModal(content: any, id: any) {
  //   const modalRef = this.modalService.open(content,{ size: 'lg' });

  //   this.apiSer.getShiftByID(id).subscribe({
  //     next: (res: any) => {
  //       console.log(res);
  //       if (res.success) {
  //         this.shift = {
  //           nameAr: res.result.nameAr,
  //           nameEn: res.result.nameEn,
  //           id: res.result.id,
           
  //         };
  //         this.EditshiftForm.patchValue({
  //           nameAr: this.shift.nameAr,
  //           nameEn:this.shift.nameEn,
    
  //         });
  //       }
  //     },
  //     error: (error) => {
  //       console.error("Error fetching subject details:", error);
  //     },
  //   });
  // }
  // onSubmitEdit(modal: any) {
  //   this.isEditSubmited = true;
  //   if (this.EditshiftForm.valid) {
  //     const { nameAr, nameEn } = this.EditshiftForm.value;

  //     const body = {
  //       nameAr: nameAr,
  //       nameEn: nameEn,
  //       id:this.shift.id
  //     };
  //     console.log("Update body:", body);

  //     this.apiSer.UpdateShift(body).subscribe({
  //       next: (res: any) => {
  //         console.log("Update response:", res);
  //         if (res.success == true) {
  //           this.load();
  //           modal.dismiss();
  //           this.translate
  //             .get("update_Shift_Success")
  //             .subscribe((translations: any) => {
  //               Swal.fire({
  //                 title: translations.title,
  //                 text: translations.message,
  //                 icon: "success",
  //                 confirmButtonText: translations.confirmButtonText,
  //               });
  //             });
  //         } else {
  //           this.translate
  //             .get("errorMessage")
  //             .subscribe((translations: any) => {
  //               Swal.fire({
  //                 title: translations.title,
  //                 text: translations.message,
  //                 icon: "error",
  //                 confirmButtonText: translations.confirmButtonText,
  //               });
  //             });
  //         }
  //       },
  //       error: (error) => {
  //         console.error("Error updating subject:", error);
  //         this.translate.get("errorMessage").subscribe((translations: any) => {
  //           Swal.fire({
  //             title: translations.title,
  //             text: translations.message,
  //             icon: "error",
  //             confirmButtonText: translations.confirmButtonText,
  //           });
  //         });
  //       },
  //     });
  //   } else {
  //     this.translate
  //       .get("validation_sweetAlert")
  //       .subscribe((translations: any) => {
  //         Swal.fire({
  //           title: translations.title,
  //           text: translations.message,
  //           icon: "warning",
  //           confirmButtonText: translations.confirmButtonText,
  //         });
  //       });
  //   }
  // }
}

