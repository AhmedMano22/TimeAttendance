import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/widget/widget'

@Component({
  selector: 'app-revenue-by-category',
  templateUrl: './revenue-by-category.component.html',
  styleUrls: ['./revenue-by-category.component.scss']
})
export class RevenueByCategoryComponent implements OnInit {
  
  // chart data
  public pie = chartData.pie;

  constructor() { }

  ngOnInit(): void {
  }

}
