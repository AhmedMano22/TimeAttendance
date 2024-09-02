import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { MustMatch } from "../../../../shared/validators/passwordMatch";

@Component({
  selector: "app-form-wizard1",
  templateUrl: "./form-wizard1.component.html",
  styleUrls: ["./form-wizard1.component.scss"],
})
export class FormWizard1Component implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  maxDate: Date;

  constructor(private _formBuilder: FormBuilder, private toastr: ToastrService) {
    setTimeout(() => {
      this.maxDate = new Date();
    }, 1);
    this.firstFormGroup = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      contact: new FormControl(),
    });
    this.secondFormGroup = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
      confirmPassword: new FormControl(),
    });
    this.thirdFormGroup = new FormGroup({
      bod: new FormControl(),
      age: new FormControl(),
      havePassport: new FormControl(),
    });
    this.fourthFormGroup = new FormGroup({
      country: new FormControl(),
      state: new FormControl(),
      city: new FormControl(),
    });
  }
  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      contact: ["", Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group(
      {
        email: ["", [Validators.required, Validators.email]],
        password: ["", Validators.required],
        confirmPassword: ["", Validators.required],
      },
      {
        validator: MustMatch("password", "confirmPassword"),
      },
    );
    this.thirdFormGroup = this._formBuilder.group({
      bod: ["", Validators.required],
      age: [""],
      havePassport: ["", Validators.required],
    });
    this.fourthFormGroup = this._formBuilder.group({
      country: ["", Validators.required],
      state: ["", Validators.required],
      city: ["", Validators.required],
    });
  }
  public finish() {
    this.toastr.success("Successfully Registered");
  }
}
