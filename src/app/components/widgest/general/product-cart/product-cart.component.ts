import { Component, OnInit } from '@angular/core';
import * as generalData from '../../../../shared/data/components/widgest/general/general'

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss']
})
export class ProductCartComponent implements OnInit {

  public productCart =  generalData.productCart

  constructor() { }

  ngOnInit(): void {
  }

}
