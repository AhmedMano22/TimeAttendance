import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-two',
  templateUrl: './login-image-two.component.html',
  styleUrls: ['./login-image-two.component.scss']
})
export class LoginImageTwoComponent implements OnInit {

  public show: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  showPassword() {
    this.show = !this.show;
  }


}
