import { Component, OnInit } from '@angular/core';
import * as categoriesData from '../../../shared/data/knowledgebases/knowledgebases'
import * as feather from 'feather-icons';
@Component({
  selector: 'app-knowledge-category',
  templateUrl: './knowledge-category.component.html',
  styleUrls: ['./knowledge-category.component.scss']
})
export class KnowledgeCategoryComponent implements OnInit {

  public categories = categoriesData.categories
  constructor() { }

  ngOnInit(): void {
  }

}
