import { Component, OnInit } from '@angular/core';
import * as filterData from '../../../../shared/data/learning/learning'

@Component({
  selector: 'app-finde-course',
  templateUrl: './finde-course.component.html',
  styleUrls: ['./finde-course.component.scss']
})
export class FindeCourseComponent implements OnInit {

  public isCollapsed = false;

  public findCourse = filterData.findCourse

  constructor() { }

  ngOnInit(): void {
  }

}
