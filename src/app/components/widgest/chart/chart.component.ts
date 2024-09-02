import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../shared/data/widget/widget'
import * as chartDatas from '../../../shared/data/components/widgest/charts/charts'


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  // charts
  public linechart1 = chartDatas.linechart1;
  public linechart2 = chartDatas.linechart2;
  public linechart3 = chartDatas.linechart3;

  constructor() { }

  ngOnInit(): void {
  }

}
