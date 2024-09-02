import { Component, OnInit } from '@angular/core';
import * as data from '../../../../shared/data/components/dashboard/ecommerce'
@Component({
  selector: 'app-recent-orders',
  templateUrl: './recent-orders.component.html',
  styleUrls: ['./recent-orders.component.scss']
})
export class RecentOrdersComponent implements OnInit {

  // data
  public productData = data.productData 
  constructor() { }

  ngOnInit(): void {
  }

}
