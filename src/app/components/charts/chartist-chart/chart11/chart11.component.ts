import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/chartist'

@Component({
  selector: 'app-chart11',
  templateUrl: './chart11.component.html',
  styleUrls: ['./chart11.component.scss']
})
export class Chart11Component implements OnInit {

  public chart11 = chartData.chart11;
 
  constructor() { }

  ngOnInit(): void {
  }

}
