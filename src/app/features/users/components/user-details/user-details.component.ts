import { Component, Input } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { usersystempage } from "src/app/shared/interface/userSystempage";
import { ApiService } from "src/app/shared/services/api/api.service";
import { Location } from "@angular/common";
import { TranslateService } from "@ngx-translate/core";
import { AuthService } from "src/app/features/auth/auth.service";
import { authUser } from "src/app/shared/interface/isAuthUser";
import { UserInfo } from "src/app/shared/interface/user-info";
declare var require: any;
const Swal = require("sweetalert2");
@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.scss"],
})
export class UserDetailsComponent {
  HomeActive8 = "home";

  @Input() tabs: any;
  userroleForm: FormGroup;
  userroleId: any;
  userpages: usersystempage[];
  userpagesQuary: usersystempage[] = [];
  alert: boolean = false;
  confirmPassword: string = "";
  confirmPasswordvalue: string = "";
  passwordsMatch: boolean = true;
  mode: string = "";
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
  constructor(
    private router: Router,
    private activateRout: ActivatedRoute,
    private apiser: ApiService,
    private location: Location,
    private transalte: TranslateService,
    private route: ActivatedRoute,
    private authservice: AuthService
  ) {
    this.userroleId = this.activateRout.snapshot.paramMap.get("id");
    this.authservice.user$.subscribe((userData) => {
      if (userData) {
        this.User = userData;
      }
    });
  }

  ngOnInit() {
    this.userroleForm = new FormGroup({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", Validators.required),
      pageId: new FormControl(),
      New: new FormControl(),
      edit: new FormControl(),
      delete: new FormControl(),
      login: new FormControl(),
      confirmPassword: new FormControl("", Validators.required),
    });
    if (this.userroleId) {
      this.getpagesedit(this.userroleId);
    }
    this.userroleForm.valueChanges.subscribe(() => {
      this.checkPasswords();
    });
    this.route.queryParams.subscribe((params) => {
      this.mode = params["mode"];
      console.log("mode", this.mode);
    });
  }

  checkPasswords() {
    const password = this.userroleForm.get("password")?.value;
    const confirmPassword = this.userroleForm.get("confirmPassword")?.value;
    this.passwordsMatch = password === confirmPassword;
  }
  getpagesedit(id: number) {
    this.apiser.getuserpermissionbyid(id).subscribe((res: any) => {
      this.userpagesQuary = res as usersystempage[];
      this.confirmPasswordvalue = this.userpagesQuary[0].password;
      console.log("res", res);
      console.log("userpagesQuary", res);
    });
  }
  get f() {
    return this.userroleForm.controls;
  }
  Backtolist() {
    this.location.back();
  }
  clear() {
    this.userroleForm.reset();
    this.alert = false;
  }
  onChecklistChange(event: Event, index: number, flag: number) {
    const target = event.target as HTMLInputElement;
    const checked = target.checked;

    if (flag === 0) {
      this.userpagesQuary[index].New = checked;
    } else if (flag === 1) {
      this.userpagesQuary[index].edit = checked;
    } else if (flag === 2) {
      this.userpagesQuary[index].delete = checked;
    } else if (flag === 3) {
      this.userpagesQuary[index].login = checked;
    }
  }

  checkAllCheckBox(name: string, ev: any) {
    console.log(ev.target.checked);
    if (name === "New")
      this.userpagesQuary.forEach(
        (userpage) => (userpage.New = ev.target.checked)
      );
    if (name === "edit")
      this.userpagesQuary.forEach(
        (userpage) => (userpage.edit = ev.target.checked)
      );
    if (name === "delete")
      this.userpagesQuary.forEach(
        (userpage) => (userpage.delete = ev.target.checked)
      );
    if (name === "login")
      this.userpagesQuary.forEach(
        (userpage) => (userpage.login = ev.target.checked)
      );
  }
  isAllChecked() {
    return this.userpagesQuary.every((_) => _.New);
  }
  SubmitAddoredit2() {
    this.userpagesQuary[0].username = this.userroleForm.value.username;
    this.userpagesQuary[0].password = this.userroleForm.value.password;
    console.log(this.userpagesQuary);
  }
  SubmitAddoredit() {
    const payload = this.userpagesQuary.map((userpage) => {
      return {
        userName: this.userroleForm.value.username,
        password: this.userroleForm.value.password,
        userid: this.userroleId, // Assuming you have a UserId property in your interface
        pageId: userpage.pageId,
        paageName: userpage.title, // Typo? Correct it to 'pageName' if needed
        new: userpage.New,
        edit: userpage.edit,
        delete: userpage.delete,
        login: userpage.login,
      };
    });

    console.log(payload);

    this.apiser.addpermission1(payload).subscribe((res: any) => {
      console.log("user edited successfully!", res);
      if (res.IsSuccessStatusCode) {
        this.transalte
          .get("usereditsweetAlert")
          .subscribe((translations: any) => {
            Swal.fire({
              title: translations.title,
              text: translations.message,
              icon: "success",
              confirmButtonText: translations.confirmButtonText,
            }).then((result: any) => {
              if (result.isConfirmed) {
                this.router.navigate(["/users/users-list"]);
              }
            });
          });
      }
    });
  }
}
