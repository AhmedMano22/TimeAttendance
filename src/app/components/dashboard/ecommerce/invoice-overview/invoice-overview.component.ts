import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/widget/widget'

@Component({
  selector: 'app-invoice-overview',
  templateUrl: './invoice-overview.component.html',
  styleUrls: ['./invoice-overview.component.scss']
})
export class InvoiceOverviewComponent implements OnInit {
  
  // chart data
  public column = chartData.column;

  constructor() { }

  ngOnInit(): void {
  }

}
