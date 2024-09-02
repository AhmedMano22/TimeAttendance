import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-one',
  templateUrl: './login-image-one.component.html',
  styleUrls: ['./login-image-one.component.scss']
})
export class LoginImageOneComponent implements OnInit {

  public show: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  showPassword() {
    this.show = !this.show;
  }

}
