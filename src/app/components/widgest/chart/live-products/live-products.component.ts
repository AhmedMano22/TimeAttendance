import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/components/widgest/charts/charts'
@Component({
  selector: 'app-live-products',
  templateUrl: './live-products.component.html',
  styleUrls: ['./live-products.component.scss']
})
export class LiveProductsComponent implements OnInit {

  public productchart = chartData.productchart
  constructor() { }

  ngOnInit(): void {
  }

}
