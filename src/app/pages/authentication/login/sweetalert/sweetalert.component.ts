import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sweetalert',
  templateUrl: './sweetalert.component.html',
  styleUrls: ['./sweetalert.component.scss']
})
export class SweetalertComponent implements OnInit {

 
  public show: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  showPassword() {
    this.show = !this.show;
  }


}
