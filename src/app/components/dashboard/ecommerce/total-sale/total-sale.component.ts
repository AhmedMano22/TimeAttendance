import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/widget/widget'

@Component({
  selector: 'app-total-sale',
  templateUrl: './total-sale.component.html',
  styleUrls: ['./total-sale.component.scss']
})
export class TotalSaleComponent implements OnInit {

  // data
  public totalSale = chartData.totalSale;

  constructor() { }

  ngOnInit(): void {
  }

}
