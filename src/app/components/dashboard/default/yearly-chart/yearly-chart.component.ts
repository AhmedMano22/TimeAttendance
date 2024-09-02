import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/widget/widget'

@Component({
  selector: 'app-yearly-chart',
  templateUrl: './yearly-chart.component.html',
  styleUrls: ['./yearly-chart.component.scss']
})
export class YearlyChartComponent implements OnInit {

  // chart data
  public yearlyChart = chartData.yearlyChart;

  constructor() { }

  ngOnInit(): void {
  }

}
