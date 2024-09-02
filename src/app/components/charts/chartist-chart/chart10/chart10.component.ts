import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/chartist'

@Component({
  selector: 'app-chart10',
  templateUrl: './chart10.component.html',
  styleUrls: ['./chart10.component.scss']
})
export class Chart10Component implements OnInit {

  public chart10 = chartData.chart10;
  
  constructor() { }

  ngOnInit(): void {
  }

}
