import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { ApiService } from "src/app/shared/services/api/api.service";
import Swal from "sweetalert2";
@Injectable({
  providedIn: "root",
})
export class AuthService {
  userSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public user$ = this.userSubject.asObservable();
  payload = JSON.parse(localStorage.getItem("user") || "{}");
  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private apiser: ApiService
  ) {
    if (localStorage.getItem("user") != null) {
      this.userSubject.next(this.payload);
    }
  }

  login(username: string, password: string): void {
    console.log("username is ", username);
    console.log("password is ", password);
    this.apiser.login(username, password).subscribe({
      next: (res: any) => {
        console.log(res);
        if (res.status == "Success") {
          localStorage.setItem("userID", res.UsId);
          this.userSubject.next(res);
          localStorage.setItem("user", JSON.stringify(res));
          this.router.navigate(["/"]);
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
