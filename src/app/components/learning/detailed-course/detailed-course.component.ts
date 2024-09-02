import { Component, OnInit } from '@angular/core';
import * as data from '../../../shared/data/blog/blog'

@Component({
  selector: 'app-detailed-course',
  templateUrl: './detailed-course.component.html',
  styleUrls: ['./detailed-course.component.scss']
})
export class DetailedCourseComponent implements OnInit {

  public commentsData = data.commentsData

  constructor() { }

  ngOnInit(): void {
  }

}
