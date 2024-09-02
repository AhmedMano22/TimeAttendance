import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/components/widgest/charts/charts'
@Component({
  selector: 'app-turnover',
  templateUrl: './turnover.component.html',
  styleUrls: ['./turnover.component.scss']
})
export class TurnoverComponent implements OnInit {

  public turnover =  chartData.turnover
  constructor() { }

  ngOnInit(): void {
  }

}
