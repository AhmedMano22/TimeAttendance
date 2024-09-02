import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form-wizard2',
  templateUrl: './form-wizard2.component.html',
  styleUrls: ['./form-wizard2.component.scss']
})
export class FormWizard2Component implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  maxDate: Date;
 
  constructor(
    private _formBuilder: FormBuilder,
  ) {
    this.maxDate = new Date();
    this.firstFormGroup = new FormGroup ({
      firstName: new FormControl ('', Validators.required),
      lastName: new FormControl ('', Validators.required)
    })
    this.secondFormGroup = new FormGroup ({
      email: new FormControl ('', [Validators.required, Validators.email]),
      password: new FormControl ('', Validators.required)
    })
    this.thirdFormGroup = new FormGroup ({
      birthdate: new FormControl ('', Validators.required),
      hasPassport: new FormControl ('', Validators.required)
    })
    this.fourthFormGroup = new FormGroup ({
      state: new FormControl ('', Validators.required),
      city: new FormControl ('', Validators.required)
    })
   }


  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['', Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      birthdate: [null, Validators.required],
      hasPassport: ['', Validators.required],
    })
    this.fourthFormGroup = this._formBuilder.group({
      state: ['', Validators.required],
      city: ['', Validators.required],
    })
  }
  public finish(){
  }

}
