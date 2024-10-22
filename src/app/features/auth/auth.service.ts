import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { BehaviorSubject } from "rxjs";
import { LoginResponse } from "src/app/shared/interface/user-info";
import { ApiService } from "src/app/shared/services/api/api.service";
import Swal from "sweetalert2";
@Injectable({
  providedIn: "root",
})
export class AuthService {
  userSubject: BehaviorSubject<any> = new BehaviorSubject<LoginResponse | null>(null);

  public user$ = this.userSubject.asObservable();
  payload = JSON.parse(localStorage.getItem("user") || "{}");
  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private apiser: ApiService,
    private translate: TranslateService,
  ) {
    if (localStorage.getItem("user") != null) {
      this.userSubject.next(this.payload);
    }
  }

  login(username: string, password: string): void {
    console.log("username is ", username);
    console.log("password is ", password);
    const body = {
      userNameOrEmailAddress: username, 
      password: password
    }
    this.apiser.login(body).subscribe({
      next: (res: any) => {
        console.log(res);
        if (res.success) {
          localStorage.setItem("userToken", res.result.accessToken);
          this.userSubject.next(res.result);
          localStorage.setItem("user", JSON.stringify(res.result));
          this.router.navigate(["/"]);
          this.translate.get("LoginSuccess").subscribe((translations: any) => {
            Swal.fire({
              title: translations.title,
              text: translations.message,
              icon: "success",
              confirmButtonText: translations.confirmButtonText,
            })
          
          });
        }
      },
      error: (errors) => {
        Swal.fire({
          icon: "error",
          title: "Sorry...",
          text: errors.error,
        });
        console.error("Error occurred while submitting form:", errors);
      },
    });

    // this.http.post(this.url + '/auth/login', credentials).subscribe({
    //   next: (res: any) => {
    //     console.log(res);
    //     Swal.fire({
    //       title: 'Success!',
    //       text: 'You logged in successfully',
    //       icon: 'success',
    //     }).then(() => {
    //       localStorage.setItem('userToken', res.token);
    //    //   this.generalSer.savecurrentuser();
    //       this.userSubject.next(res);
    //       const returnUrl =
    //         this.route.snapshot.queryParams['returnUrl'] || '/';
    //       this.router.navigateByUrl(returnUrl);
    //     });
    //   },
    //   error: (errors) => {
    //     Swal.fire({
    //       icon: 'error',
    //       title: 'Sorry...',
    //       text: errors.error,
    //     });
    //     console.error('Error occurred while submitting form:', errors);
    //   },
    // });
  }
}
