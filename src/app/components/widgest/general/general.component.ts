import { Component, Input, OnInit } from '@angular/core';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { formatDate } from '@angular/common';
import * as generalData from '../../../shared/data/components/widgest/general/general'


@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {
  public intmin: any;
  public intsec: any;
  public inthour: any;
  public time: Date = new Date();
  public jstoday = '';
  public type: string = 'component';
  date: { year: number; month: number; } | any;

 model: NgbDateStruct;

 public earnings = generalData.earnings
 public products = generalData.products
 public messages = generalData.messages
 public newUser = generalData.newUser


 public Facebook = generalData.Facebook
 public Linkedin = generalData.Linkedin
 public Twitter = generalData.Twitter
 public Instagram = generalData.Instagram

  constructor(private calendar: NgbCalendar) {
    this.model = calendar.getToday();
 
    
  }
  selectToday() {
    this.model = this.calendar.getToday();
  }

  setTime() {
    this.intmin = setInterval(function () {
      var second = new Date().getSeconds();
      var sdegree = second * 6;
      var srotate = "rotate(" + sdegree + "deg)";
      // var seconds = document.getElementById('sec').style.transform = srotate;
    }, 1000);
    this.intsec = setInterval(function () {
      var mins = new Date().getMinutes();
      var mdegree = mins * 6;
      var mrotate = "rotate(" + mdegree + "deg)";
      // var minits = document.getElementById('min').style.transform = mrotate;
    }, 1000);
    this.inthour = setInterval(function () {
      var hour = new Date().getHours();
      var mints = new Date().getMinutes();
      var hdegree = hour * 30 + (mints / 2);
      var hrotate = "rotate(" + hdegree + "deg)";
      // var hours = document.getElementById('hour').style.transform = hrotate;
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
