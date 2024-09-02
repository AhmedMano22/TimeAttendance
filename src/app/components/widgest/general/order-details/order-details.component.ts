import { Component, OnInit } from '@angular/core';
import * as generalData from '../../../../shared/data/components/widgest/general/general'

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  public orderDetails = generalData.orderDetails

  constructor() { 
 
  }

  ngOnInit(): void {
  }

}
