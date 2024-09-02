import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { MustMatch } from "src/app/shared/validators/passwordMatch";

@Component({
  selector: "app-form-wizard3",
  templateUrl: "./form-wizard3.component.html",
  styleUrls: ["./form-wizard3.component.scss"],
})
export class FormWizard3Component implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, private toastr: ToastrService) {
    this.firstFormGroup = this._formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group(
      {
        email: ["", [Validators.required, Validators.email]],
        password: ["", Validators.required],
        cnfPassword: ["", Validators.required],
      },
      {
        validator: MustMatch("password", "cnfPassword"),
      },
    );
    this.thirdFormGroup = this._formBuilder.group({
      dd: [null, [Validators.required, Validators.pattern("[0-9]{2}")]],
      mm: [null, [Validators.required, Validators.pattern("[0-9]{2}")]],
      yyyy: [null, [Validators.required, Validators.pattern("[0-9]{4}")]],
    });
  }

  ngOnInit(): void {}
  public finish() {
    this.toastr.success("Successfully Registered");
  }
}
