import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-simple',
  templateUrl: './login-simple.component.html',
  styleUrls: ['./login-simple.component.scss']
})
export class LoginSimpleComponent implements OnInit {

 
  public show: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  showPassword() {
    this.show = !this.show;
  }

}
