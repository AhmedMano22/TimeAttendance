import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple',
  templateUrl: './register-simple.component.html',
  styleUrls: ['./register-simple.component.scss']
})
export class RegisterSimpleComponent implements OnInit {

  public show: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  showPassword() {
    this.show = !this.show;
  }
}
