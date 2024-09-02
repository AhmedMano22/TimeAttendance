import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/google-chart'

@Component({
  selector: 'app-pie-chart1',
  templateUrl: './pie-chart1.component.html',
  styleUrls: ['./pie-chart1.component.scss']
})
export class PieChart1Component implements OnInit {

  public pieChart4 =  chartData.pieChart3
 
  constructor() { }

  ngOnInit(): void {
  }

}
