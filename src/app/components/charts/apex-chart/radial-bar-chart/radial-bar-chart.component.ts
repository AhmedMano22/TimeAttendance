import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex'

@Component({
  selector: 'app-radial-bar-chart',
  templateUrl: './radial-bar-chart.component.html',
  styleUrls: ['./radial-bar-chart.component.scss']
})
export class RadialBarChartComponent implements OnInit {

  constructor() { }
  public radialBarChart  = chartData.radialBarChart

  ngOnInit(): void {
  }

}
