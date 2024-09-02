import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/components/widgest/charts/charts'
@Component({
  selector: 'app-marketing-expenses',
  templateUrl: './marketing-expenses.component.html',
  styleUrls: ['./marketing-expenses.component.scss']
})
export class MarketingExpensesComponent implements OnInit {

  public columnchart = chartData.columnchart

  constructor() { }

  ngOnInit(): void {
  }

}
