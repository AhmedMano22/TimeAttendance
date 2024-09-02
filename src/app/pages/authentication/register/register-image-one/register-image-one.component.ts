import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-one',
  templateUrl: './register-image-one.component.html',
  styleUrls: ['./register-image-one.component.scss']
})
export class RegisterImageOneComponent implements OnInit {
  public show: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  showPassword() {
    this.show = !this.show;
  }
}
