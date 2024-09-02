import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/google-chart'

@Component({
  selector: 'app-pie-chart3',
  templateUrl: './pie-chart3.component.html',
  styleUrls: ['./pie-chart3.component.scss']
})
export class PieChart3Component implements OnInit {

  
  public pieChart2 =  chartData.pieChart2
  constructor() { }

  ngOnInit(): void {
  }

}
