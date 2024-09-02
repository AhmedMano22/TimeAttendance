import { Component, OnInit } from '@angular/core';
import * as learningData from '../../../shared/data/learning/learning'
@Component({
  selector: 'app-learning-list',
  templateUrl: './learning-list.component.html',
  styleUrls: ['./learning-list.component.scss']
})
export class LearningListComponent implements OnInit {
  public learning = learningData.learning
  public learningTop = learningData.learningTop
  constructor() { }

  ngOnInit(): void {
  }

}
