import { Component, OnInit, Renderer2 } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { AuthService } from "../../auth.service";
import { LoginCredentials } from "src/app/shared/interface/login-credintial";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  public show: boolean = false;
  public loginForm: FormGroup;
  public errorMessage: any;
  isRTL: boolean;
  constructor(
    private fb: FormBuilder,
    public router: Router,
    public translate: TranslateService,
    private renderer: Renderer2,
    private authService: AuthService
  ) {
    // this.loginForm = this.fb.group({
    //   email: ["Test@gmail.com", [Validators.required, Validators.email]],
    //   password: ["test123", Validators.required],
    // });
    this.loginForm = this.fb.group({
      username: ["", [Validators.required]],
      password: ["", Validators.required],
    });
  }

  showPassword() {
    this.show = !this.show;
  }
  ngOnInit() {
    this.isRTL = this.translate.currentLang === "ar";
  }
  switchLanguage() {
    const currentLang = this.translate.currentLang;
    this.translate.use(currentLang === "ar" ? "en" : "ar");
  }

  login() {
    if (this.loginForm.valid) {
      const credentials: LoginCredentials = {
        username: this.loginForm.value.username,
        password: this.loginForm.value.password,
      };
      this.authService.login(
        this.loginForm.value.username,
        this.loginForm.value.password
      );
      console.log("from login component", this.loginForm.value);
    }
  }
  // Simple Login
  // login() {
  //   if (this.loginForm.value["email"] == "Test@gmail.com" && this.loginForm.value["password"] == "test123") {
  //     let user = {
  //       email: "Test@gmail.com",
  //       password: "test123",
  //       name: "test user",
  //     };
  //     localStorage.setItem("user", JSON.stringify(user));
  //     this.router.navigate([""]);
  //   }
  // }
}
