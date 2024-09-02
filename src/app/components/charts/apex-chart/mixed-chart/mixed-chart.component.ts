import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex'

@Component({
  selector: 'app-mixed-chart',
  templateUrl: './mixed-chart.component.html',
  styleUrls: ['./mixed-chart.component.scss']
})
export class MixedChartComponent implements OnInit {

  public mixedChart  = chartData.mixedChart

  constructor() { }

  ngOnInit(): void {
  }

}
