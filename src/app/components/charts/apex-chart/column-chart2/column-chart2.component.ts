import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex'

@Component({
  selector: 'app-column-chart2',
  templateUrl: './column-chart2.component.html',
  styleUrls: ['./column-chart2.component.scss']
})
export class ColumnChart2Component implements OnInit {

  public columnChart = chartData.columnChart
  
  constructor() { }

  ngOnInit(): void {
  }

}
