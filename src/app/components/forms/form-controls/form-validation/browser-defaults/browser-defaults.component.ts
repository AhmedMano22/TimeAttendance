import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browser-defaults',
  templateUrl: './browser-defaults.component.html',
  styleUrls: ['./browser-defaults.component.scss']
})
export class BrowserDefaultsComponent implements OnInit {
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
