import { Component, OnInit } from '@angular/core';
import * as Tutorials from '../../../shared/data/knowledgebases/knowledgebases';
@Component({
  selector: 'app-knowledgebase',
  templateUrl: './knowledgebase.component.html',
  styleUrls: ['./knowledgebase.component.scss']
})
export class KnowledgebaseComponent implements OnInit {
  public featuredTutorials = Tutorials.featuredTutorials

  constructor() { }

  ngOnInit(): void {
  }

}
