import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex'

@Component({
  selector: 'app-stepline-chart',
  templateUrl: './stepline-chart.component.html',
  styleUrls: ['./stepline-chart.component.scss']
})
export class SteplineChartComponent implements OnInit {

  public steplineChart = chartData.steplineChart

  constructor() { }

  ngOnInit(): void {
  }

}
