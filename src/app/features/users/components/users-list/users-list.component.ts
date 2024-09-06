import { Component } from "@angular/core";
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

  constructor(
    private apiSer: ApiService,
    private translate: TranslateService,
    private authservice: AuthService
  ) {
   
  }
  ngOnInit() {
    this.loading = true;

    this.load();
  }
 
  load() {
    this.loading = true; // Start loading
    this.apiSer.getUsers().subscribe({
      next: (res: any) => {
        this.ListData = res.result;
        console.log("res", res);

        this.loading = false; // Stop loading after data is fetched
      },
      error: (err) => {
        console.error("Failed to load requests", err);
        this.loading = false; // Stop loading on error
      },
    });
  }
  remove(id: any) {
    this.apiSer.deleteUser(id).subscribe({
      next: (res) => {
        console.log("Delete response", res);
        this.load();
        this.translate
          .get("userdeletesweetAlert")
          .subscribe((translations: any) => {
            Swal.fire({
              title: translations.title,
              text: translations.message,
              icon: "success",
              confirmButtonText: translations.confirmButtonText,
            }).then((result: any) => {
              if (result.isConfirmed) {
                this.load();
              }
            });
          });
      },
      error: (err) => {console.error("Delete failed", err)
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
  }
}
