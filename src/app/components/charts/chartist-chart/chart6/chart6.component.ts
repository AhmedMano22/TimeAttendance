import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/chartist'

@Component({
  selector: 'app-chart6',
  templateUrl: './chart6.component.html',
  styleUrls: ['./chart6.component.scss']
})
export class Chart6Component implements OnInit {

  public chart6 = chartData.chart6;
 
  constructor() { }

  ngOnInit(): void {
  }

}
