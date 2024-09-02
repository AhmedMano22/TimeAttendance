import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../shared/data/charts/google-chart'

@Component({
  selector: 'app-google-chart',
  templateUrl: './google-chart.component.html',
  styleUrls: ['./google-chart.component.scss']
})
export class GoogleChartComponent implements OnInit {

  public pieChart =  chartData.pieChart
  public pieChart1 =  chartData.pieChart1
  
  constructor() { }
  

  ngOnInit(): void {
  }

}
