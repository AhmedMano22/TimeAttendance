import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/components/widgest/charts/charts'
@Component({
  selector: 'app-order-status2',
  templateUrl: './order-status2.component.html',
  styleUrls: ['./order-status2.component.scss']
})
export class OrderStatus2Component implements OnInit {

  orderStatus2 = chartData.orderStatus2
  constructor() { }

  ngOnInit(): void {
  }

}
