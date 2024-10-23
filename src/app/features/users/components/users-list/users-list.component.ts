import { ChangeDetectorRef, Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { AuthService } from "src/app/features/auth/auth.service";
import { authUser } from "src/app/shared/interface/isAuthUser";
import { UserInfo } from "src/app/shared/interface/user-info";
import { ApiService } from "src/app/shared/services/api/api.service";
declare var require: any;
const Swal = require("sweetalert2");

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.scss"],
})
export class UsersListComponent {
  loading = false;
  ListData: any[] = [];
  subscriptionType: string[];
  item: boolean = false;
  searchTerm: string = "";
  currentPage = 1;
  itemsPerPage = 3;
  totalItems = 0;
  totalPages = 0;
  pagesToShow: number[] = [];
  constructor(
    private apiSer: ApiService,
    private translate: TranslateService,
    private authservice: AuthService,
    private cdRef: ChangeDetectorRef,
  ) {
   
  }
  ngOnInit() {
    this.loading = true;

    this.load(this.currentPage,this.searchTerm);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
  }
 
  load(pageNumber:number,searchTerm: string) {
    this.loading = true; // Start loading
    this.apiSer.getUsers(pageNumber, this.itemsPerPage,searchTerm).subscribe({
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

  remove(id: any) {
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
              this.apiSer.deleteUser(id).subscribe({
                next: (res: any) => {
                  console.log(res);
                
                  if (res.result.success) {
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
            // else if (result.dismiss === Swal.DismissReason.cancel) {
            //   swalWithBootstrapButtons.fire(
            //     translations.cancelMessageTitle,
            //     translations.cancelMessageText,
            //     "error"
            //   );
            // }
          });
      });
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
