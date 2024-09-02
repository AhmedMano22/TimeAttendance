import { Component, OnInit } from "@angular/core";
import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";

import { DatepickerOptions } from "ng2-datepicker";
import { getYear } from "date-fns";
import locale from "date-fns/locale/en-US";
@Component({
  selector: "app-date-timepicker",
  templateUrl: "./date-timepicker.component.html",
  styleUrls: ["./date-timepicker.component.scss"],
})
export class DateTimepickerComponent implements OnInit {
  model: NgbDateStruct;
  model2: NgbDateStruct;
  model3: NgbDateStruct;
  model4: NgbDateStruct;
  model5: NgbDateStruct;
  model6: NgbDateStruct;
  date = new Date();

  time = { hour: 13, minute: 30 };
  meridian = true;

  constructor() {}

  toggleMeridian() {
    this.meridian = !this.meridian;
  }
  ngOnInit(): void {}

  options: DatepickerOptions = {
    minYear: getYear(new Date()) - 30, // minimum available and selectable year
    maxYear: getYear(new Date()) + 30, // maximum available and selectable year
    placeholder: "", // placeholder in case date model is null | undefined, example: 'Please pick a date'
    format: "LLLL do yyyy", // date format to display in input
    formatTitle: "LLLL yyyy",
    formatDays: "EEEEE",
    firstCalendarDay: 0, // 0 - Sunday, 1 - Monday
    locale: locale, // date-fns locale
    position: "bottom",
    inputClass: "", // custom input CSS class to be applied
    calendarClass: "datepicker-default", // custom datepicker calendar CSS class to be applied
    scrollBarColor: "#dfe3e9", // in case you customize you theme, here you define scroll bar color
    // keyboardEvents: true // enable keyboard events
  };
}
