import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-styles',
  templateUrl: './custom-styles.component.html',
  styleUrls: ['./custom-styles.component.scss']
})
export class CustomStylesComponent implements OnInit {
  public validate = false;
  public tooltipValidation = false;
  constructor() { }

  ngOnInit(): void {
  }
  public submit() {
    this.validate = !this.validate;
  }
  public tooltipSubmit() {
    this.tooltipValidation = !this.tooltipValidation;
  }
}
