import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/components/widgest/charts/charts'

@Component({
  selector: 'app-total-earning',
  templateUrl: './total-earning.component.html',
  styleUrls: ['./total-earning.component.scss']
})
export class TotalEarningComponent implements OnInit {

  public earningchart = chartData.earningchart;

  constructor() { }

  ngOnInit(): void {
  }

}
