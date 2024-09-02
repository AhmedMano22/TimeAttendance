import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  public intmin: any;
  public intsec: any;
  public inthour: any;
  public time: Date = new Date();
  public jstoday = '';
  public type: string = 'component';
  today: number = Date.now();
  dates = new Date().getDate();
  month = new Date().getMonth();
  year = new Date().getFullYear();
  date: { year: number; month: number; } | any;

  constructor() { }

  setTime() {
    this.intmin = setInterval(function () {
      var second = new Date().getSeconds();
      var sdegree = second * 6;
      var srotate = "rotate(" + sdegree + "deg)";
      var seconds = document.getElementById('sec')!.style.transform = srotate;
    }, 1000);
    this.intsec = setInterval(function () {
      var mins = new Date().getMinutes();
      var mdegree = mins * 6;
      var mrotate = "rotate(" + mdegree + "deg)";
      var minits = document.getElementById('min')!.style.transform = mrotate;
    }, 1000);
    this.inthour = setInterval(function () {
      var hour = new Date().getHours();
      var mints = new Date().getMinutes();
      var hdegree = hour * 30 + (mints / 2);
      var hrotate = "rotate(" + hdegree + "deg)";
      var hours = document.getElementById('hour')!.style.transform = hrotate;
    }, 1000);
  }

  ngOnInit() {
    const now: Date = new Date()
    this.setTime();
  }

  ngOnDestroy() {
    if (this.intmin) {
      clearInterval(this.intmin);
    }
    if (this.intsec) {
      clearInterval(this.intsec);
    }
    if (this.inthour) {
      clearInterval(this.inthour);
    }
  }

  
}
