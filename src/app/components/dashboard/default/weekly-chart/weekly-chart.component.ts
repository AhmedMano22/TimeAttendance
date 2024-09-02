import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/widget/widget'

@Component({
  selector: 'app-weekly-chart',
  templateUrl: './weekly-chart.component.html',
  styleUrls: ['./weekly-chart.component.scss']
})
export class WeeklyChartComponent implements OnInit {

  // chart data
  public weeklyChart = chartData.weeklyChart;

  constructor() { }

  ngOnInit(): void {
  }

}
