import { Component, OnInit } from '@angular/core';
import * as filterData from '../../../shared/data/learning/learning'

@Component({
  selector: 'app-knowledge-detail',
  templateUrl: './knowledge-detail.component.html',
  styleUrls: ['./knowledge-detail.component.scss']
})
export class KnowledgeDetailComponent implements OnInit {
  public isCollapsed = false;
  public isCollapsed2 = false;
  public Categories = filterData.Categories
  public upcomingCourses = filterData.upcomingCourses
  constructor() { }
  OpenFilter: Boolean =  false;
  ngOnInit(): void {
  }
  openFilter(){
    this.OpenFilter = !this.OpenFilter
  }

}
