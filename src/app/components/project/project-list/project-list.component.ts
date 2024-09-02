import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/shared/interface/product-list';
import { ProjectListService } from 'src/app/shared/services/project/project-list.service';
import * as projectData from '../../../shared/data/components/project/project-list'
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  active = 1
  public openTab : string = "All";

  // data
  public ProjectLists = projectData.ProjectList
  listUser: Project[];
  filterData: any[] =  this.ProjectLists
  
  constructor() {}

  // data filter ALL DONE DOING
  public tabbed(val: string) {
    this.openTab = val
    
    this.filterData = val !== 'All' ? this.ProjectLists.filter((data: any)=>{
    return  data.badge == this.openTab ? true : false 
  }): this.ProjectLists      
  }

  ngOnInit(): void {
  }

}
