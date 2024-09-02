import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/components/widgest/charts/charts'
@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.scss']
})
export class FinanceComponent implements OnInit {

  public finance = chartData.finance
  constructor() { }

  ngOnInit(): void {
  }

}
