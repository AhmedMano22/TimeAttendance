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
import { timeValidator } from "src/app/shared/validators/custom";

declare var require: any;
const Swal = require("sweetalert2");
interface ExceptionWorkingTime {
  shiftId: number;
  shiftNameAr: string;
  shiftNameEn: string;
  from: string;
  to: string;
  isHour: boolean;
  overTimeStart: string;
  startSign: string;
  endSign: string;
  startShift: string;
  endShift: string;
  earlyPermission: string;
  latePermission: string;
  id: number;
}
@Component({
  selector: 'app-exception-wt-list',
  templateUrl: './exception-wt-list.component.html',
  styleUrls: ['./exception-wt-list.component.scss']
})
export class ExceptionWTListComponent {

  subscriptions = ["Lawyer", "Normal", "Admin", "Translator"];
  
  loading = false;
  ListData: any[] = [];
  subscriptionType: string[];
  item: boolean = false;
  AddForm!: FormGroup;
  EditForm!: FormGroup;
  isSubmited = false;
  isEditSubmited = false;
  Shifts: any[] = [];
  currentLang: string;
  ExceptionWorkingTime:ExceptionWorkingTime={
    shiftId: 0,
    shiftNameAr: "",
    shiftNameEn: "",
    isHour: false,
    overTimeStart: "",
    startSign: "",
    endSign: "",
    startShift: "",
    endShift: "",
    earlyPermission: "",
    latePermission: "",
    id: 0,
    from: "",
    to: ""
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
     this.AddForm = this.fb.group({
      shiftId: ['', Validators.required], 
      from: ['', Validators.required],
      to: ['', Validators.required], 
      isHour: [false], 
      overTimeStart: ['', [Validators.required, timeValidator]],
      startSign: ['', [Validators.required, timeValidator]],
      endSign: ['', [Validators.required, timeValidator]],
      startShift: ['', [Validators.required, timeValidator]],
      endShift: ['', [Validators.required, timeValidator]],
      earlyPermission: ['', [Validators.required, timeValidator]],
      latePermission: ['', [Validators.required, timeValidator]]
    });
    this.EditForm = this.fb.group({
      shiftId: ['', Validators.required], 
      from: ['', Validators.required],
      to: ['', Validators.required], 
      isHour: [false], 
      overTimeStart: ['', [Validators.required, timeValidator]],
      startSign: ['', [Validators.required, timeValidator]],
      endSign: ['', [Validators.required, timeValidator]],
      startShift: ['', [Validators.required, timeValidator]],
      endShift: ['', [Validators.required, timeValidator]],
      earlyPermission: ['', [Validators.required, timeValidator]],
      latePermission: ['', [Validators.required, timeValidator]]
    });
    this.loadlShifts();
    this.UserPageAuthnticated();
  }
  UserPageAuthnticated() {
    this.apiSer.getUserById(this.user.userId).subscribe({
      next: (response:any) => {
        this.employeePermissions = response.result.systemPage.find(
          (page:any) => page.systemPageId === 17
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
    this.apiSer.getExceptionWorkTime(pageNumber, this.itemsPerPage,searchTerm).subscribe({
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
  lmModal(content:any){
    const modalRef = this.modalService.open(content,{ size: 'xl' });
  }
  formatTime(field: string): void {
    const value = this.AddForm.get(field)?.value;
    if (value) {
      const [hours, minutes] = value.split(':');
      const formattedTime = `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}`;
      this.AddForm.get(field)?.setValue(formattedTime);
    }
  }
  EditformatTime(field: string): void {
    const value = this.EditForm.get(field)?.value;
    if (value) {
      const [hours, minutes] = value.split(':');
      const formattedTime = `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}`;
      this.EditForm.get(field)?.setValue(formattedTime);
    }
  }
  getShiftNameByRecordId(id: number): string {
    const type = this.ListData.find(type => type.id === id);
    if (!type) return 'Unknown'; 
    return this.currentLang === 'ar' ? type.shiftNameAr : type.shiftNameEn;
  }
  
  onSubmit(modal: any) {
    this.isSubmited = true;
    console.log(this.AddForm.value);
    if (this.AddForm.valid) {
      console.log(this.AddForm.value);
      const formData = this.AddForm.value;

      const body = {
        shiftId: +formData.shiftId,
        from: formData.from,
        to: formData.to,
        isHour: formData.isHour,
        overTimeStart: formData.overTimeStart,
        startSign: formData.startSign,
        endSign: formData.endSign,
        startShift: formData.startShift,
        endShift: formData.endShift,
        earlyPermission: formData.earlyPermission,
        latePermission: formData.latePermission
      };
    console.log("body",body);
      this.apiSer.addExceptionWorkingTime(body).subscribe({
        next: (res: any) => {
          console.log(res);
        
          if (res.success == true) {
            this.load(1,this.searchTerm);
            this.setPage(1);
            this.AddForm.reset();
            this.AddForm.get('shiftId')?.setValue('');
            this.AddForm.get('isHour')?.setValue(false);
          
            this.isSubmited = false;
            modal.dismiss();
            this.translate
              .get("Create_EXworktime_Success")
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
              this.apiSer.deleteExceptionWorkingTime(id).subscribe({
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

    this.apiSer.getExceptionWorkingTimeByID(id).subscribe({
      next: (res: any) => {
     
        if (res.success) {
          this.ExceptionWorkingTime = {
            shiftId: res.result.shiftId,
            shiftNameAr: res.result.shiftNameAr,
            shiftNameEn: res.result.shiftNameEn,
            from: res.result.from,
            to: res.result.to,
            isHour: res.result.isHour,
            overTimeStart: res.result.overTimeStart ? res.result.overTimeStart.trim() : '',
            startSign: res.result.startSign ? res.result.startSign.trim() : '',
            endSign: res.result.endSign ? res.result.endSign.trim() : '', 
            startShift: res.result.startShift ? res.result.startShift.trim() : '',
            endShift: res.result.endShift ? res.result.endShift.trim() : '',
            earlyPermission: res.result.earlyPermission ? res.result.earlyPermission.trim() : '',
            latePermission: res.result.latePermission ? res.result.latePermission.trim() : '',
            id: res.result.id,
           
          };
          console.log( this.ExceptionWorkingTime);
          this.EditForm.patchValue({
            shiftId: this.ExceptionWorkingTime.shiftId,
            from: this.ExceptionWorkingTime.from,
            to: this.ExceptionWorkingTime.to,
            isHour: this.ExceptionWorkingTime.isHour,
            overTimeStart: this.ExceptionWorkingTime.overTimeStart,
            startSign: this.ExceptionWorkingTime.startSign,
            endSign: this.ExceptionWorkingTime.endSign,
            startShift: this.ExceptionWorkingTime.startShift,
            endShift: this.ExceptionWorkingTime.endShift,
            earlyPermission: this.ExceptionWorkingTime.earlyPermission,
            latePermission: this.ExceptionWorkingTime.latePermission,
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
      const { shiftId, from,to ,isHour,overTimeStart,startSign,endSign,startShift,endShift,earlyPermission,latePermission} = this.EditForm.value;
      const body = {
        id: this.ExceptionWorkingTime.id,
        shiftId: shiftId,
        from: from,
        to: to,
        isHour: isHour,
        overTimeStart: overTimeStart,
        startSign: startSign,
        endSign: endSign,
        startShift: startShift,
        endShift: endShift,
        earlyPermission: earlyPermission,
        latePermission: latePermission,
      };
      console.log("Update body:", body);

      this.apiSer.UpdateExceptionWorkingTime(body).subscribe({
        next: (res: any) => {
          console.log("Update response:", res);
          if (res.success == true) {
            this.load(this.currentPage,this.searchTerm);
            this.updatePagination();
            modal.dismiss();
            this.translate
              .get("update_EXworktime_Success")
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
  getName(type: any): string {
    return this.currentLang === 'ar' ? type.nameAr : type.nameEn;
  }

  loadlShifts(){
    this.apiSer.getShifts().subscribe((res:any) => {
      if (res.success) {
        this.Shifts = res.result.items;
      }
    });
  }
  getShiftNameById(id: number): string {
    const type = this.Shifts.find(type => type.id === id);
    if (!type) return 'Unknown'; 
    return this.currentLang === 'ar' ? type.nameAr : type.nameEn;
  }
}



