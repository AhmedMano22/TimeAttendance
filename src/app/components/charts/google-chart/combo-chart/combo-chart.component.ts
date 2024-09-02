import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/google-chart'

@Component({
  selector: 'app-combo-chart',
  templateUrl: './combo-chart.component.html',
  styleUrls: ['./combo-chart.component.scss']
})
export class ComboChartComponent implements OnInit {

  public comboChart =  chartData.comboChart
  
  constructor() { }

  ngOnInit(): void {
  }

}
