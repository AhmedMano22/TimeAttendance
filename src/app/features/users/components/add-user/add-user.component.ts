import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { usersystempage } from "src/app/shared/interface/userSystempage";
import { ApiService } from "src/app/shared/services/api/api.service";
import { Location } from "@angular/common";
import { TranslateService } from "@ngx-translate/core";
declare var require: any;
const Swal = require("sweetalert2");
@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.scss"],
})
export class AddUserComponent {
  userroleForm: FormGroup;
  userroleId: any;
  userpages: usersystempage[];
  userpagesQuary: usersystempage[] = [];
  alert: boolean = false;
  confirmPassword: string = "";
  passwordsMatch: boolean = true;
  constructor(
    private router: Router,
    private activateRout: ActivatedRoute,
    private apiser: ApiService,
    private location: Location,
    private transalte: TranslateService
  ) {
    this.userroleId = this.activateRout.snapshot.paramMap.get("id");
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
    this.getpagesadd();
    this.userroleForm.valueChanges.subscribe(() => {
      this.checkPasswords();
    });
  }
  checkPasswords() {
    const password = this.userroleForm.get("password")?.value;
    const confirmPassword = this.userroleForm.get("confirmPassword")?.value;
    this.passwordsMatch = password === confirmPassword;
  }
  getpagesadd() {
    this.apiser.getpermission().subscribe((res: any) => {
      this.userpagesQuary = res as usersystempage[];
      console.log("userpagesQuary from ngoninit", this.userpagesQuary);
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

  SubmitAddoredit() {
    const payload = this.userpagesQuary.map((userpage) => {
      return {
        userName: this.userroleForm.value.username,
        password: this.userroleForm.value.password,
        userid: userpage.UserId, // Assuming you have a UserId property in your interface
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
          .get("useraddsweetAlert")
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
