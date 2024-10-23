import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { AuthService } from "src/app/features/auth/auth.service";
import { authUser } from "src/app/shared/interface/isAuthUser";
import { UserInfo } from "src/app/shared/interface/user-info";
import { ApiService } from "src/app/shared/services/api/api.service";
declare var require: any;
const Swal = require("sweetalert2");
@Component({
  selector: "app-change-password",
  templateUrl: "./change-password.component.html",
  styleUrls: ["./change-password.component.scss"],
})
export class ChangePasswordComponent {
  form: FormGroup;
  unitstpes: any[] = [];
  selectedUnitTypeId: number | null = null;
  showEmailAddressInput: boolean = false;
  userPassword: string = "";
  User: UserInfo = {
    status: "",
    UsId: 0,
    Name: "",
    Image: null,
    Job: null,
    Department: null,
    Year: null,
    Active: null,
    Audit: null,
    Message: null,
    ImageRequired: null,
    CompLog: null,
    CompNew: null,
    CompEdit: null,
    CompDelete: null,
  };
  AuthUser: authUser = {
    UserId: 0,
    pageId: 0,
    PaageName: "",
    New: false,
    edit: false,
    delete: false,
    login: false,
    username: "",
    password: "",
  };
  confirmPassword: string = "";
  passwordsMatch: boolean = true;
  oldPasswordMatches: boolean = true;
  constructor(
    private route: Router,
    private apiSer: ApiService,
    private fb: FormBuilder,
    private http: HttpClient,
    private authservice: AuthService,
    private translate: TranslateService
  ) {
    this.authservice.user$.subscribe((userData) => {
      if (userData) {
        console.log("userData", userData);
        this.User = userData;
      }
    });
  }
  ngOnInit(): void {
    this.form = this.fb.group({
      oldpassword: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
      confirmPassword: new FormControl("", Validators.required),
    });
    this.form.valueChanges.subscribe(() => {
      this.checkPasswords();
      this.checkOldPassword();
    });

  }
 
  checkOldPassword() {
    const oldpassword = this.form.get("oldpassword")?.value;
    this.oldPasswordMatches = oldpassword === this.userPassword;
  }
  checkPasswords() {
    const password = this.form.get("password")?.value;
    const confirmPassword = this.form.get("confirmPassword")?.value;
    this.passwordsMatch = password === confirmPassword;
  }
  checkPasswords2() {
    const password = this.form.get("password")?.value;
    const confirmPassword = this.form.get("confirmPassword")?.value;
    this.passwordsMatch = password === confirmPassword;
    if (!this.passwordsMatch) {
      this.form.setErrors({ passwordMismatch: true });
    } else {
      this.form.setErrors(null);
    }
  }
  get f() {
    return this.form.controls;
  }
  onSubmit() {
    console.log("Form Values on Submit:", this.form.value);
    const { oldpassword, password } = this.form.value;
    let obj = {
 
        currentPassword: oldpassword,
        newPassword: password
    };
    console.log("obj",obj);
    this.apiSer.ChangePassword(obj).subscribe(
      (res: any) => {
        console.log("response", res);
        if (res.success) {
          this.form.reset()
          this.translate
            .get("changepasssweetAlert")
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
        console.error("Error updating announce",error.error.error.message);
        console.error("Error updating announce",error );
        if( error.error.error.message === "Incorrect password."){
          console.log("message");
          
          this.translate
          .get('passowrdinccorect')
          .subscribe((translations: any) => {
            Swal.fire({
              title: translations.title,
              text: translations.message,
              icon: 'error',
              confirmButtonText: translations.confirmButtonText,
            })
          });
        }else{
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
       
      }
    );
  }
}
