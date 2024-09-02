import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbCalendar, NgbDate, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-date-range-picker',
  templateUrl: './date-range-picker.component.html',
  styleUrls: ['./date-range-picker.component.scss']
})
export class DateRangePickerComponent {

  constructor() {
  }
  public selectedMoment = new Date();
  public selectedMoment2 = new FormControl(new Date());
  public selectedMoments = [new Date(2018, 1, 12, 10, 30), new Date(2018, 3, 21, 20, 30)];

}
