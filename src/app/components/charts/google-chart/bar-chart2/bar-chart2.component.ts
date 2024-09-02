import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/google-chart'

@Component({
  selector: 'app-bar-chart2',
  templateUrl: './bar-chart2.component.html',
  styleUrls: ['./bar-chart2.component.scss']
})
export class BarChart2Component implements OnInit {

  public barChart2 =  chartData.barChart2
  
  constructor() { }

  ngOnInit(): void {
  }

}
