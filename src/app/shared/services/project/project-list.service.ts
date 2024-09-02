import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Project } from '../../interface/product-list';
// import * as projectData from '../../../shared/data/components/project/project-list'


@Injectable({
  providedIn: 'root'
})
export class ProjectListService {

  listUser: Project[] | undefined;

  constructor(private http:HttpClient) { }

  // projectListData(){
  //   return this.http.get('../../data/components/project/projectList.json');
  // }
}
