import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex'

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss']
})
export class DonutChartComponent implements OnInit {
  
  public donutChart  = chartData.donutChart

  constructor() { }

  ngOnInit(): void {
  }

}
