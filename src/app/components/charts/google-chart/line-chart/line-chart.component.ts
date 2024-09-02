import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/google-chart'

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  public lineChart =  chartData.lineChart
 
  constructor() { }

  ngOnInit(): void {
  }

}
