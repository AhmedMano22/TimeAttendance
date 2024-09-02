import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/widget/widget'

@Component({
  selector: 'app-total-transactions',
  templateUrl: './total-transactions.component.html',
  styleUrls: ['./total-transactions.component.scss']
})
export class TotalTransactionsComponent implements OnInit {
  
  // chart Data
  public transactionChart = chartData.transactionChart;

  constructor() { }

  ngOnInit(): void {
  }

}
